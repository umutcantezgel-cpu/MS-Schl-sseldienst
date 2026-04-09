import glob

files = glob.glob('app/**/*.tsx', recursive=True) + glob.glob('components/**/*.tsx', recursive=True)

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    new_content = content.replace('<b>', '<strong>').replace('</b>', '</strong>')
    
    if new_content != content:
        with open(f, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print(f"Updated {f}")
