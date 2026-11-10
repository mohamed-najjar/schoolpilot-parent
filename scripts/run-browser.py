#!/usr/bin/env python3
"""Inject private synthetic credentials into Playwright without persisting auth state."""
import os,sys,subprocess
from pathlib import Path
backend=Path(os.environ.get('BACKEND_SOURCE','../schoolpilot')).resolve();sys.path.insert(0,str(backend/'scripts'))
import local_env
local_env.load();env=os.environ.copy();env['PW_TEST_PASSWORD']=local_env.secret('LOCAL_DEMO_PASSWORD')
raise SystemExit(subprocess.call(['node','node_modules/@playwright/test/cli.js','test',*sys.argv[1:]],env=env))
