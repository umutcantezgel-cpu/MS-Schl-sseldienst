import glob
import re

files = glob.glob('lib/data/*.ts') + glob.glob('app/**/*.tsx', recursive=True)

count = 0
for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # ts files
    matches = re.finditer(r'metaDescription:\s*"([^"]+)"', content)
    for m in matches:
        desc = m.group(1)
        if len(desc) < 120 or len(desc) > 155:
            print(f"{f}: {len(desc)} chars -> {desc}")
            count += 1
            
    # tsx files metadata
    matches2 = re.finditer(r'description:\s*"([^"]+)"', content)
    for m in matches2:
        desc = m.group(1)
        if len(desc) < 120 or len(desc) > 155:
            print(f"{f}: {len(desc)} chars -> {desc}")
            count += 1

print(f"Total Meta-Description issues: {count}")
