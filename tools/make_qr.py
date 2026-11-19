"""Regenerates assets/qr/*.svg from config.json's links (and the page URL).

  python3 -m pip install segno && python3 tools/make_qr.py

Run it whenever a link in config.json changes, and commit assets/qr/.
High error correction, so the logo in the middle never stops a scan.
"""
import json, os
import segno

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
cfg = json.load(open(os.path.join(ROOT, 'config.json')))
links = {k: v.get('url', '') for k, v in cfg.get('links', {}).items() if v.get('url')}
links['page'] = 'https://uiscomp.github.io/utrack-releases/'
out = os.path.join(ROOT, 'assets', 'qr')
os.makedirs(out, exist_ok=True)
for key, url in links.items():
    qr = segno.make(url, error='h', micro=False)
    qr.save(os.path.join(out, f'{key}.svg'), scale=8, border=0, dark='#121a45', light=None,
            xmldecl=False, svgns=True, title=f'QR: {url}', nl=False)
    print(key, url)
