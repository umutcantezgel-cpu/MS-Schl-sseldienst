import os
import re

updates = {
    'termin-buchen/page.tsx': ('Termin online buchen für Beratung & Sicherheits-Check', 'Schlüsseldienst Wetzlar | Termin buchen'),
    'autooeffnung/page.tsx': ('Autoöffnung Wetzlar | Ohne Lackschäden', 'Autoöffnung Wetzlar | Schlüsseldienst'),
    'autoschluessel/page.tsx': ('Autoschlüssel Wetzlar | Reparatur & Programmierung', 'Autoschlüssel Wetzlar | Schlüsseldienst'),
    'einbruchschutz/page.tsx': ('Einbruchschutz Wetzlar | Absicherung & Soforthilfe', 'Einbruchschutz Wetzlar | Schlüsseldienst'),
    'passbilder/page.tsx': ('Biometrische Passbilder in Wetzlar | Sofort zum Mitnehmen', 'Passbilder Wetzlar | Schlüsseldienst'),
    'schliessanlagen/page.tsx': ('Schließanlagen Wetzlar | Für Gewerbe & Eigenheim', 'Schließanlagen Wetzlar | Schlüsseldienst'),
    'schluessel-nachmachen/page.tsx': ('Schlüssel nachmachen Wetzlar | Sofort-Dienst', 'Schlüssel nachmachen | Schlüsseldienst Wetzlar'),
    'sicherheitstechnik/page.tsx': ('Sicherheitstechnik Wetzlar | VdS-Zertifiziert', 'Sicherheitstechnik Wetzlar | Schlüsseldienst'),
    'tresoroeffnung/page.tsx': ('Tresoröffnung Wetzlar | Diskret & Zertifiziert', 'Tresoröffnung Wetzlar | Schlüsseldienst'),
    'turoeffnung/page.tsx': ('Türöffnung Wetzlar | ab 99€ Festpreis', 'Türöffnung Wetzlar | Schlüsseldienst'),
    'uhren-service/page.tsx': ('Uhren Service Wetzlar | Batteriewechsel & Armbänder', 'Uhren Service Wetzlar | Schlüsseldienst'),
    'leistungen/page.tsx': ('Alle Leistungen im Überblick', 'Alle Leistungen | Schlüsseldienst Wetzlar'),
    'anfrage/page.tsx': ('Angebot anfragen', 'Angebot anfragen | Schlüsseldienst Wetzlar'),
    'schluessel-schmiede/page.tsx': ('Schlüssel Schmiede Wetzlar | Ihr Laden vor Ort', 'Schlüssel Schmiede | Schlüsseldienst Wetzlar'),
}

for rel_path, (old, new) in updates.items():
    if 'leistungen' in rel_path and not rel_path.startswith('leistungen'):
        path = f'app/(marketing)/{rel_path}'
    elif 'termin-buchen' in rel_path or 'anfrage' in rel_path or 'schluessel-schmiede' in rel_path:
        path = f'app/(marketing)/{rel_path}'
    else:
        path = f'app/(marketing)/leistungen/{rel_path}'
        
    if not os.path.exists(path):
        # fallback
        path = f'app/(marketing)/{rel_path}'
        
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        new_content = content.replace(f'title: "{old}"', f'title: "{new}"')
        if new_content != content:
            with open(path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {path}")
