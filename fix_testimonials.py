import os
import glob
import re

files = glob.glob('app/(marketing)/leistungen/*/page.tsx')
files.append('app/(marketing)/schluessel-schmiede/page.tsx')
files.append('app/page.tsx')

subtitles = [
    "Echte Kundenstimmen",
    "Das sagen unsere Kunden vor Ort",
    "Geprüfte Bewertungen aus der Region",
    "Was Kunden über uns sagen",
    "Darum vertrauen uns unsere Kunden",
    "Erfahrungen unserer Kunden",
    "Meinungen zufriedener Kunden",
    "Kundenstimmen und Feedbacks",
    "Bewertungen unserer Arbeit",
    "Referenzen und Meinungen",
    "Feedback zur Handwerksleistung",
    "Stimmen aus der Nachbarschaft"
]

idx = 0
for fpath in files:
    if os.path.exists(fpath):
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace duplicate subtitles to be unique
        def replacer(match):
            global idx
            sub = subtitles[idx % len(subtitles)]
            idx += 1
            return f'subtitle="{sub}"'
            
        new_content = re.sub(r'subtitle="Echte Kundenstimmen"', replacer, content)
        if new_content != content:
            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {fpath}")

print("Done Testimonials.")
