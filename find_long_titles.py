import os
import glob
import re

files = glob.glob('lib/data/*.ts')
count = 0
for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    matches = re.finditer(r'metaTitle:\s*"([^"]+)"', content)
    for m in matches:
        title = m.group(1)
        if len(title) > 55:
            print(f"{f}: {len(title)} chars -> {title}")
            count += 1

print(f"Total over 55 chars: {count}")
