import os
import re

h1_count = re.compile(r'<h1\b[^>]*>', re.IGNORECASE)

for root, _, files in os.walk('app'):
    for file in files:
        if file.endswith('.tsx'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
                
                # Check 0 H1
                h1s = h1_count.findall(content)
                if len(h1s) == 0:
                    print(f"[WARN] 0 H1 tags in {path}")

