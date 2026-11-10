#!/usr/bin/env python3
"""Configure only the synthetic local realm and private BFF development settings."""
import argparse,json,secrets,sys,subprocess,os
from pathlib import Path
parser=argparse.ArgumentParser();parser.add_argument('--backend',default='../schoolpilot');args=parser.parse_args()
backend=Path(args.backend).resolve();sys.path.insert(0,str(backend/'scripts'))
import local_env
import phase2_live as live
local_env.load()
client={'clientId':'schoolpilot-parent','name':'SchoolPilot local parent BFF','enabled':True,'publicClient':True,'protocol':'openid-connect','standardFlowEnabled':True,'directAccessGrantsEnabled':False,'redirectUris':['http://localhost:3002/auth/callback'],'webOrigins':[],'attributes':{'pkce.code.challenge.method':'S256','post.logout.redirect.uris':'http://localhost:3002/login','access.token.lifespan':'60'},'protocolMappers':[{'name':'api-audience','protocol':'openid-connect','protocolMapper':'oidc-audience-mapper','config':{'included.custom.audience':'schoolos-api','access.token.claim':'true','id.token.claim':'false'}}]}
code,existing,_=live.admin('GET','schoolos/clients?clientId=schoolpilot-parent')
if code!=200:raise SystemExit('Local OIDC administrator unavailable')
if existing:
 code,_,_=live.admin('PUT','schoolos/clients/'+existing[0]['id'],client)
else:code,_,_=live.admin('POST','schoolos/clients',client)
if code not in (201,204):raise SystemExit('Cannot configure local OIDC client')
root=Path(__file__).resolve().parents[1];env=root/'.env.local'
if not env.exists():
 password=secrets.token_hex(32)
 text=(root/'.env.example').read_text().replace('REPLACE_WITH_RANDOM_PASSWORD',password).replace('REPLACE_WITH_64_HEX_CHARACTERS',secrets.token_hex(32))
 fd=os.open(env,os.O_CREAT|os.O_EXCL|os.O_WRONLY,0o600)
 with os.fdopen(fd,'w') as f:f.write(text+'REDIS_PASSWORD='+password+'\n')
print('Local PKCE client configured; private .env.local preserved/created. No secrets displayed.')
