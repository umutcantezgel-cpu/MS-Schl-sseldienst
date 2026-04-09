import re
import glob

replacements = {
    "Türöffnung ab 99€ Festpreis": "24/7 Notdienst",
    "Türöffnung zum Festpreis": "24/7 Notdienst",
    "24/7 Notdienst bei Hüttenberg": "24/7 Notdienst",
    "Ehrlicher 24/7 Notdienst ab 99€": "24/7 Notdienst ab 99€",
    "Seelbach (Herborn) — 24/7 Notdienst ab 99€": "Seelbach (Herborn) — 24/7",
    "Herborn Schönbach & Hörbach — 24/7 Notdienst": "Herborn Schönbach & Hörbach",
    "Merkenbach (Herborn) — 24/7 Türöffnung ab 99€": "Merkenbach (Herborn) — 24/7 Notdienst",
    "Guntersdorf & Uckersdorf (Herborn) — Ab 99€": "Guntersdorf & Uckersdorf (Herborn)",
    "Dillheim (Ehringshausen) — 24/7 Notdienst ab 99€": "Dillheim (Ehringshausen) — 24/7 ab 99€",
    "Neukirchen (Braunfels) — 24/7 Notdienst ab 99€": "Neukirchen (Braunfels) — 24/7 Notdienst",
    "Tiefenbach (Braunfels) — 24/7 Festpreis ab 99€": "Tiefenbach (Braunfels) — 24/7 Notdienst",
    "Niederquembach & Oberquembach — 24/7 Notdienst": "Niederquembach & Oberquembach",
    "Wettenberg — 24/7 Türöffnung zum Festpreis": "Wettenberg — 24/7 Notdienst",
}

files = glob.glob('lib/data/locations_*.ts')

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    new_content = content
    for old, new in replacements.items():
        new_content = new_content.replace(old, new)
        
    if new_content != content:
        with open(f, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print(f"Updated {f}")
