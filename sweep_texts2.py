import glob
import re

files = glob.glob('app/**/*.tsx', recursive=True) + glob.glob('components/**/*.tsx', recursive=True) + glob.glob('lib/**/*.ts', recursive=True)

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    new_content = content
    
    # Fachgeschäft replacements
    new_content = new_content.replace('Fachgeschäft geöffnet', '24h geöffnet')
    new_content = new_content.replace('Ihr Fachgeschäft', 'Ihr 24 Stunden Notdienst')
    new_content = new_content.replace('Fachgeschäft · Langgasse 70', '24 Stunden Notdienst · Langgasse 70')
    new_content = new_content.replace('und Ihr Fachgeschäft', 'und Ihr 24 Stunden Notdienst')
    new_content = new_content.replace('und Fachgeschäft', 'und 24 Stunden Notdienst')
    new_content = new_content.replace('ein Fachgeschäft, das', 'ein 24 Stunden Notdienst, der')
    new_content = new_content.replace('Einkauf in unserem Fachgeschäft', 'Besuch in unserem Ladengeschäft')
    new_content = new_content.replace('direkt im Fachgeschäft', 'direkt im Ladengeschäft')
    new_content = new_content.replace('unserem Fachgeschäft in der', 'unserer Zentrale in der')
    new_content = new_content.replace('Im Fachgeschäft der', 'In der Zentrale der')
    new_content = new_content.replace('stationäres Fachgeschäft mit echtem Ladenlokal', 'echter lokaler Notdienst mit Ladenlokal')
    new_content = new_content.replace('Ihr Fachgeschäft mit Schlüsseldienst', 'Ihr 24 Stunden Notdienst mit Schlüsseldienst')
    new_content = new_content.replace('unser Fachgeschäft ist', 'unser 24 Stunden Notdienst ist')
    new_content = new_content.replace('aus unserem Fachgeschäft', 'aus unserem Ladengeschäft')
    new_content = new_content.replace('Unser Fachgeschäft befindet', 'Unser Ladengeschäft befindet')
    new_content = new_content.replace('offenes Fachgeschäft', 'offenes Ladengeschäft')
    new_content = new_content.replace('In unserem Fachgeschäft', 'In unserem Ladengeschäft')
    
    if new_content != content:
        with open(f, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print(f"Updated texts in {f}")
