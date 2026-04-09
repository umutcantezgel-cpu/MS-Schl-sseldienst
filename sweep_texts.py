import glob
import re

files = glob.glob('app/**/*.tsx', recursive=True) + glob.glob('components/**/*.tsx', recursive=True) + glob.glob('lib/**/*.ts', recursive=True)

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # 35576 -> 35578 (only where applicable, like Langgasse or Wetzlar addresses)
    # Be careful not to replace it if it actually means MS Schlüsseldienst Gloelstr. 11.
    # Wetzlar-Schlüsseldienst has Langgasse 70 so let's do a smart regex
    new_content = re.sub(r'35576 Wetzlar(?!.*Gloelstraße)', r'35578 Wetzlar', content)
    
    # Check for Fachgeschäft inside Langgasse context
    new_content = new_content.replace('Fachgeschäft Langgasse 70', 'Langgasse 70')
    new_content = new_content.replace('Fachgeschäft in der Langgasse', '24 Stunden Notdienst in der Langgasse')
    
    # Fix the prices: "ab 50€", "ab 49€", "ab 89€", "50,- €", "89,- €", "50 Euro"
    new_content = re.sub(r'ab 50(?:€| Euro|,- €)', 'ab 99€', new_content, flags=re.IGNORECASE)
    new_content = re.sub(r'ab 89(?:€| Euro|,- €)', 'ab 99€', new_content, flags=re.IGNORECASE)
    new_content = re.sub(r'ab 49(?:€| Euro|,- €)', 'ab 99€', new_content, flags=re.IGNORECASE)
    new_content = re.sub(r'Festpreis ab 50€', 'Festpreis ab 99€', new_content, flags=re.IGNORECASE)
    
    # Fix Leerfahrtpauschale
    new_content = new_content.replace('Leerfahrtpauschale von 50,- €', 'Leerfahrtpauschale (Höhe je nach Einsatzzeit)')
    new_content = new_content.replace('Leerfahrt-/Ausfallpauschale in Höhe von pauschal 50,00 €', 'Leerfahrt-/Ausfallpauschale je nach Anfahrtsweg')
    
    # Fix "Wochenend-/Feiertagszuschlag ab 50,- €"
    # Actually wait, the user said "Einstiegspreis Türöffnungen: ab 99 Euro. Jeder andere Wert ist falsch". Sonderzuschläge are different from starting prices, but maybe the user wants THEM removed too. I will leave Zuschläge out of the 99€ scope if they represent fixed sums, or I replace them just in case. Let's just fix "ab 50€" globally.
    
    if new_content != content:
        with open(f, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print(f"Updated texts in {f}")
