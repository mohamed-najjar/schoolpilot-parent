#!/usr/bin/env python3
"""Package this committed application for private review; never redistribute the template."""
import argparse,hashlib,io,json,os,re,subprocess,zipfile
from pathlib import Path
from urllib.parse import urlparse

def excluded(path):
    return (any(p in {'.git','node_modules','.next','.yarn','test-results','playwright-report','coverage','__pycache__','full-version','__MACOSX','.aws','.ssh','.codex'} for p in path.parts)
        or path.name in {'.DS_Store','.npmrc','credentials','id_rsa','id_ed25519'}
        or path.name.startswith('.env') and path.name!='.env.example'
        or path.suffix.lower() in {'.zip','.key','.pem','.dump','.age','.pyc','.log','.exe','.dll','.so','.dylib','.o','.a','.wasm','.db','.sqlite','.tsbuildinfo'})
def check(data,secrets):
    if any(value in data for value in secrets):raise ValueError('Active credential in source')
    if re.search(rb'-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----|(?:AKIA|ASIA)[A-Z0-9]{16}|ghp_[A-Za-z0-9]{36}|github_pat_[A-Za-z0-9_]{60,}',data):raise ValueError('Credential pattern')
    if b'\x00' in data:raise ValueError('Binary data')
    data.decode('utf8')
def main():
    parser=argparse.ArgumentParser();parser.add_argument('--output',required=True,type=Path);parser.add_argument('--secrets-file',action='append',default=[]);args=parser.parse_args()
    root=Path(__file__).resolve().parents[1];secrets=[]
    for p in [root/'.env.local',*(Path(x) for x in args.secrets_file)]:
        if not p.exists():continue
        for line in p.read_text().splitlines():
            name,sep,value=line.partition('=')
            if sep and re.search('PASSWORD|SECRET|TOKEN|ENCRYPTION_KEY',name) and len(value)>=16:secrets.append(value.encode())
            if sep and name=='REDIS_URL':
                password=urlparse(value).password
                if password:secrets.append(password.encode())
    commit=subprocess.check_output(['git','rev-parse','HEAD'],cwd=root).decode().strip()
    raw=subprocess.check_output(['git','archive','--format=zip',commit],cwd=root);manifest={};omitted=[]
    fd=os.open(args.output,os.O_CREAT|os.O_EXCL|os.O_WRONLY,0o600)
    try:
        with os.fdopen(fd,'wb') as output,zipfile.ZipFile(io.BytesIO(raw)) as source,zipfile.ZipFile(output,'w',zipfile.ZIP_DEFLATED) as target:
            for item in source.infolist():
                if item.is_dir():continue
                if excluded(Path(item.filename)):omitted.append(item.filename);continue
                data=source.read(item);check(data,secrets);target.writestr(item,data);manifest[item.filename]=hashlib.sha256(data).hexdigest()
            target.writestr('SOURCE_MANIFEST.json',json.dumps({'commit':commit,'files':manifest,'excluded':omitted,'distribution':'Private SchoolPilot review only; commercial template license applies.'},indent=2)+'\n')
    except BaseException:args.output.unlink(missing_ok=True);raise
    digest=hashlib.sha256(args.output.read_bytes()).hexdigest()
    args.output.with_suffix(args.output.suffix+'.sha256').write_text(digest+'  '+args.output.name+'\n')
    print(json.dumps({'commit':commit,'files':len(manifest),'bytes':args.output.stat().st_size,'sha256':digest,'archive':str(args.output)}))
if __name__=='__main__':main()
