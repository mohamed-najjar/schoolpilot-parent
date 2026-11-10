#!/usr/bin/env python3
"""Restricted synthetic relationship mutation for real-service acceptance only."""
import json,sys,os,uuid
from pathlib import Path
backend=Path(os.environ.get('BACKEND_SOURCE','../schoolpilot')).resolve();sys.path.insert(0,str(backend/'scripts'))
import local_env,phase2_live as live
local_env.load();f=json.loads(Path(sys.argv[1]).read_text());action=sys.argv[2]
if action!='restrict-b':raise SystemExit('Unknown fixture action')
student=str(uuid.UUID(f['child_b_id']));relationship=str(uuid.UUID(f['relationship_b_id']))
token=live.login('demo-admin-b')['access_token'];status,_,_=live.request('POST',live.B+'/api/v1/students/'+student+'/guardians/'+relationship+'/restrict',token,None)
if status!=200:raise SystemExit('Cannot restrict synthetic guardian relationship')
print('Synthetic school B relationship restricted; identity and school A teaching grants untouched.')
