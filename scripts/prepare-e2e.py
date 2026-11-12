#!/usr/bin/env python3
"""Real synthetic two-school family fixture. Never saves passwords or tokens."""
import argparse,base64,datetime,json,os,shutil,subprocess,sys,uuid
from pathlib import Path
parser=argparse.ArgumentParser();parser.add_argument('--backend',default='../schoolpilot');parser.add_argument('--teacher',default='../schoolpilot-teacher');parser.add_argument('--output',required=True);parser.add_argument('--base-fixture');args=parser.parse_args()
backend=Path(args.backend).resolve();teacher=Path(args.teacher).resolve();sys.path.insert(0,str(backend/'scripts'))
import local_env,phase2_live as live
local_env.load();output=Path(args.output);output.parent.mkdir(parents=True,exist_ok=True)
base_fixture=Path(args.base_fixture) if args.base_fixture else output.with_name('teacher-parent-base.json')
if not args.base_fixture:subprocess.run([sys.executable,'-B',str(teacher/'scripts/prepare-e2e.py'),'--backend',str(backend),'--output',str(base_fixture)],check=True)
f=json.loads(base_fixture.read_text());A=live.A;B=live.B;run='P6C-'+uuid.uuid4().hex[:8];checks=[]
def call(token,method,path,body=None,base=A,version=None,key=None,code=200,workspace=None):
 headers={}
 if version is not None:headers['If-Match']='"'+str(version)+'"'
 if key:headers['Idempotency-Key']=run+'-'+key
 if workspace:headers['X-SchoolPilot-Workspace']=workspace
 status,value,_=live.request(method,base+'/api/v1/'+path,token,body,headers=headers)
 checks.append({'method':method,'resource':path.split('?')[0],'status':status,'expected':code})
 if status!=code:raise RuntimeError('Synthetic request failed: '+method+' '+path.split('?')[0]+' status '+str(status))
 return value
adminA=live.login('demo-admin-a')['access_token'];adminB=live.login('demo-admin-b')['access_token'];teacher_token=live.login(f['teacher_username'])['access_token'];subject=str(uuid.UUID(live.claims(teacher_token)['sub']));personA=call(teacher_token,'GET','me')['person_id'];day=datetime.datetime.now(datetime.timezone(datetime.timedelta(hours=4))).date();end=day+datetime.timedelta(days=40)
def create(token,path,body,base=A,key=None):return call(token,'POST',path,body,base=base,key=key,code=201)
# Reuse the existing local guardian profile for this SAME teacher/principal person.
child_page=call(teacher_token,'GET','me/children',workspace='guardian')['items'];existing_other=next(c for c in child_page if c['id']==f['other_student_id']);relationship_existing=existing_other['relationship_id']
# Guardian profile is operator fixture metadata, not an invitation/account merge.
psql=os.environ.get('PSQL') or shutil.which('psql') or '/private/tmp/schoolos-tools/pg/bin/psql'
def sql(query,port,password):
 env=os.environ.copy();env.update(PGHOST='127.0.0.1',PGPORT=str(port),PGUSER='migrator',PGDATABASE='schoolos',PGPASSWORD=local_env.secret(password))
 result=subprocess.run([psql,'-XAt','-v','ON_ERROR_STOP=1','-c',query],env=env,capture_output=True,text=True)
 if result.returncode:raise RuntimeError('Synthetic fixture SQL verification/provisioning failed')
 return result.stdout.strip()
guardianA=sql("SELECT guardian_id FROM students.student_guardians WHERE id='"+str(uuid.UUID(relationship_existing))+"'",54321,'SCHOOL_A_OWNER_PASSWORD')
primary_rel=create(adminA,'students/'+f['student_id']+'/guardians',{'guardian_id':guardianA,'relationship_code':'parent','can_view_academics':True,'can_receive_messages':True,'can_report_absence':True,'valid_from':day.isoformat()})['id']
# Public zero and a distinct draft prove missing != zero and publication privacy.
assessment_input={'period_id':f['period_id'],'course_id':f['course_id'],'section_id':f['section_id'],'policy_id':f['policy_id'],'category':'exam','title_en':'Published family assessment','title_ar':'تقييم منشور للعائلة','kind':'summative','assessment_type':'school_defined','assessed_on':day.isoformat(),'weight':'1'}
assessment=create(teacher_token,'assessments',assessment_input,key='published-assessment')['id'];call(teacher_token,'POST','assessments/'+assessment+'/publish',version=1)
call(teacher_token,'POST','assessments/'+assessment+'/grades',{'items':[{'student_id':f['student_id'],'state':'graded','value':'0','comment_en':'Published teacher feedback','comment_ar':'ملاحظات منشورة من المعلم','private_note':'PRIVATE-FAMILY-GRADE-NOTE'}]},key='public-zero',code=201)
grade=call(teacher_token,'GET','assessments/'+assessment+'/grades')['items'][0];call(adminA,'POST','grades/'+grade['id']+'/transition',{'action':'publish'},version=grade['version'])
recipient=next(r for r in call(teacher_token,'GET','assignments/'+f['assignment_id']+'/recipients')['items'] if r['student_id']==f['student_id']);submission=call(teacher_token,'GET','assignment-recipients/'+recipient['id']+'/submissions')['items'][-1]
feedback=call(teacher_token,'POST','assignment-recipients/'+recipient['id']+'/feedback',{'submission_id':submission['id'],'kind':'review','body':'Thoughtful work / عمل متقن','private_note':'PRIVATE-FAMILY-TEACHER-NOTE','parent_visible':True},version=recipient['version'],key='parent-feedback',code=201)
material=create(teacher_token,'learning-content',{'course_id':f['course_id'],'section_id':f['section_id'],'kind':'material','title_en':'Family reading material','title_ar':'مادة قراءة للعائلة','body_en':'A published learning resource.','body_ar':'مصدر تعليمي منشور للعائلة.'})
content=('Synthetic parent learning resource / مورد تعليمي تجريبي\n'*1500).encode();file=create(teacher_token,'learning-content/'+material['id']+'/files',{'filename':'family-reading.txt','media_type':'text/plain','data_base64':base64.b64encode(content).decode()})
call(teacher_token,'POST','learning-content/'+material['id']+'/publish',version=material['version'])
# Report source goes through the existing configured approval/publication lifecycle.
policy=call(adminA,'GET','grading-policies/'+f['policy_id']);definition=create(adminA,'report-definitions',{'period_id':f['period_id'],'program_id':policy['program_id'],'code':run,'revision':1,'title_en':'Family published term report','title_ar':'تقرير فصلي منشور للعائلة','labels_en':{},'labels_ar':{},'include_attendance':True,'allow_incomplete':True,'student_visible':True,'guardian_visible':True,'approval_role':'either','publication_role':'either'},key='report-definition')
for i,action in enumerate(['review','approve','publish']):call(adminA,'POST','reporting-periods/'+f['period_id']+'/transition',{'action':action},version=i+1)
report=create(adminA,'report-cards',{'definition_id':definition['id'],'student_id':f['student_id'],'course_ids':[f['course_id']]},key='family-report')
# The report author cannot approve their own snapshot. The existing teacher
# identity has an independently granted principal role in this synthetic fixture.
for i,action in enumerate(['review','approve','publish']):
 actor = teacher_token if action == 'approve' else adminA
 call(actor,'POST','report-cards/'+report['id']+'/transition',{'action':action},version=i+1)
context=call(teacher_token,'GET','guardian/children/'+f['student_id'],workspace='guardian')
yearA=next(c['academic_year_id'] for c in context['courses'] if c['id']==f['course_id'])
private_period=create(adminA,'reporting-periods',{'academic_year_id':yearA,'code':run+'-private','name_en':'Private draft period','name_ar':'فترة غير منشورة','kind':'term','starts_on':day.isoformat(),'ends_on':(day+datetime.timedelta(days=20)).isoformat(),'approval_role':'either'},key='private-period')['id']
private_input={**assessment_input,'period_id':private_period,'title_en':'PRIVATE UNPUBLISHED RESULT','title_ar':'نتيجة غير منشورة'};draft_assessment=create(teacher_token,'assessments',private_input,key='draft-assessment')['id'];call(teacher_token,'POST','assessments/'+draft_assessment+'/publish',version=1)
call(teacher_token,'POST','assessments/'+draft_assessment+'/grades',{'items':[{'student_id':f['student_id'],'state':'graded','value':'99','comment_en':'PRIVATE-UNPUBLISHED-FEEDBACK'}]},key='draft-grade',code=201)
# Independent school B local mapping for the immutable central subject.
pB=create(adminB,'persons',{'first_name':'Synthetic dual-role guardian','last_name':run,'first_name_ar':'ولي أمر تجريبي','last_name_ar':'متعدد الأدوار','preferred_language':'ar'},B)['id'];create(adminB,'identity-links',{'person_id':pB,'subject':subject},B);gB=create(adminB,'guardians',{'person_id':pB},B)['id']
schoolB='bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb'
query="WITH i AS (INSERT INTO platform.identity_subjects(issuer,subject) VALUES ('http://auth.localhost:8080/realms/schoolos','"+subject+"') ON CONFLICT(issuer,subject) DO UPDATE SET subject=EXCLUDED.subject RETURNING id) INSERT INTO platform.school_memberships(school_id,identity_subject_id,status) SELECT '"+schoolB+"'::uuid,id,'active' FROM i ON CONFLICT DO NOTHING"
sql(query,54320,'CONTROL_OWNER_PASSWORD')
campus=create(adminB,'campuses',{'code':run,'name_en':'Family School B campus','name_ar':'حرم المدرسة ب'},B)['id'];year=create(adminB,'academic-years',{'code':run,'starts_on':day.isoformat(),'ends_on':end.isoformat()},B)['id'];call(adminB,'POST','academic-years/'+year+'/transitions',{'status':'active'},base=B,version=1);curr=create(adminB,'curricula',{'code':run,'name_en':'Family curriculum','name_ar':'منهج العائلة'},B)['id'];program=create(adminB,'programs',{'curriculum_id':curr,'code':run,'name_en':'Family program','name_ar':'برنامج العائلة'},B)['id'];grade_level=create(adminB,'grade-levels',{'program_id':program,'code':run,'name_en':'Grade 5','name_ar':'الصف الخامس','sort_order':5},B)['id'];section=create(adminB,'sections',{'academic_year_id':year,'program_id':program,'grade_level_id':grade_level,'campus_id':campus,'code':run+'-5B'},B)['id']
childB=create(adminB,'students',{'student_number':run+'-B','first_name':'Synthetic child at a second school','last_name':run,'first_name_ar':'ابن تجريبي في مدرسة ثانية','last_name_ar':'للعائلة','preferred_language':'ar'},B)['id'];episode=create(adminB,'enrollments',{'student_id':childB,'academic_year_id':year,'program_id':program,'grade_level_id':grade_level,'campus_id':campus,'starts_on':day.isoformat(),'ends_on':end.isoformat()},B,key='b-enrollment');call(adminB,'POST','enrollments/'+episode['id']+'/transitions',{'status':'active'},base=B,version=1);create(adminB,'enrollments/'+episode['id']+'/sections',{'section_id':section,'starts_on':day.isoformat(),'ends_on':end.isoformat()},B)
relationshipB=create(adminB,'students/'+childB+'/guardians',{'guardian_id':gB,'relationship_code':'parent','can_view_academics':True,'can_receive_messages':True,'valid_from':day.isoformat()},B)['id']
# Only currently eligible contacts can open the existing real conversation API.
contacts=call(teacher_token,'GET','guardian/children/'+f['student_id']+'/contacts',workspace='guardian')['items'];contact=next((c for c in contacts if c['staff_id']!=call(teacher_token,'GET','lessons?starts_on='+day.isoformat()+'&ends_on='+day.isoformat(),workspace='teacher')['items'][0]['staff_id']),contacts[0])
conversation=create(teacher_token,'conversations',{'student_id':f['student_id'],'staff_id':contact['staff_id'],'relationship_id':primary_rel,'subject':'Family conversation / محادثة العائلة'},key='family-conversation')
message=create(teacher_token,'conversations/'+conversation['id']+'/messages',{'body':'Synthetic family message / رسالة تجريبية للعائلة','language':'ar'},key='family-message')
announcement=create(adminA,'announcements',{'section_id':f['section_id'],'title_en':'Family school announcement','title_ar':'إعلان المدرسة للعائلة','body_en':'A school update for authorized families.','body_ar':'مستجدات المدرسة للعائلات المصرح لها.'});call(adminA,'POST','announcements/'+announcement['id']+'/publish',version=1)
unrelated=next(c['id'] for c in call(adminA,'GET','management/students?q='+f['run'])['items'] if c['id'] not in [f['student_id'],f['other_student_id']])
result={**f,'unrelated_student_id':unrelated,'run':run,'parent_username':f['teacher_username'],'school_b_id':schoolB,'child_b_id':childB,'relationship_b_id':relationshipB,'primary_relationship_id':primary_rel,'other_relationship_id':relationship_existing,'guardian_a_id':guardianA,'guardian_b_id':gB,'published_assessment_id':assessment,'private_assessment_id':draft_assessment,'published_grade_id':grade['id'],'report_id':report['id'],'recipient_id':recipient['id'],'material_id':material['id'],'file_id':file['id'],'conversation_id':conversation['id'],'date':day.isoformat(),'assertions':len(checks)}
output.write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n');output.chmod(0o600)
output.with_name('fixture-checks.json').write_text(json.dumps(checks,indent=2)+'\n');print(json.dumps({'fixture':'created','assertions':len(checks),'one_identity':True,'schools':2,'children':3,'secrets_written':False}))
