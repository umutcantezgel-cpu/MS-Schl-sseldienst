import os
import glob
import re

files = glob.glob('app/**/*.tsx', recursive=True)
count_dict = {}

for f in files:
    if os.path.basename(f) != 'page.tsx':
        continue
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Remove block comments
    content = re.sub(r'/\*.*?\*/', '', content, flags=re.DOTALL)
    # Remove line comments
    content = re.sub(r'//.*', '', content)
    
    # Find <h1
    occurrences = len(re.findall(r'<h1\b', content, re.IGNORECASE))
    
    if occurrences != 1:
        print(f"{f}: {occurrences} H1 tags")

