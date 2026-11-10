import importlib.util,unittest
from pathlib import Path
spec=importlib.util.spec_from_file_location('archive',Path(__file__).with_name('source-archive.py'));archive=importlib.util.module_from_spec(spec);spec.loader.exec_module(archive)
class ArchivePolicy(unittest.TestCase):
 def test_excludes_private_runtime_and_commercial_reference(self):
  for name in ['.env.local','node_modules/a.js','.next/server/a.js','.aws/credentials','full-version/package.json','test-results/fixture.json','able-pro.zip']:
   self.assertTrue(archive.excluded(Path(name)),name)
 def test_keeps_reproducible_source(self):
  for name in ['.env.example','src/app/page.tsx','yarn.lock','.github/workflows/frontend.yml']:
   self.assertFalse(archive.excluded(Path(name)),name)
 def test_rejects_active_secrets_keys_and_binary(self):
  for data in [b'token active-private-value',b'-----BEGIN '+b'PRIVATE KEY-----',b'\x00binary']:
   with self.assertRaises((ValueError,UnicodeError)):archive.check(data,[b'active-private-value'])
if __name__=='__main__':unittest.main()
