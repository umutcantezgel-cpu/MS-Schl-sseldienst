import os
import re
from bs4 import BeautifulSoup

h1_re = re.compile(r'<h1[^>]*>(.*?)</h1>', re.IGNORECASE | re.DOTALL)

for root, _, files in os.walk('app'):
    for file in files:
        if file.endswith('.tsx'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
                h1s = h1_re.findall(content)
                for h1 in h1s:
                    text = BeautifulSoup(h1, "html.parser").get_text(separator=" ", strip=True)
                    if text and not '{' in text:  # Only static texts
                        if len(text) > 70 or len(text) < 10:
                            print(f"[WARN] H1 length {len(text)} on {path}: {text}")

