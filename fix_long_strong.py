import re
import os

path_agb = "app/(legal)/agb/page.tsx"
if os.path.exists(path_agb):
    with open(path_agb, "r", encoding="utf-8") as f:
        content = f.read()

    # Find <strong><HoverGlossary ...>...</HoverGlossary></strong>
    # and replace with <HoverGlossary ...><strong>...</strong></HoverGlossary>
    new_content = re.sub(
        r'<strong>(\s*<HoverGlossary[^>]*>)(.*?)(</HoverGlossary>\s*)</strong>',
        r'\1<strong>\2</strong>\3',
        content,
        flags=re.DOTALL
    )
    
    # Also for "Ausschluss nach <HoverGlossary..."
    new_content = re.sub(
        r'<strong>Ausschluss nach (<HoverGlossary[^>]*>)(.*?)(</HoverGlossary>):</strong>',
        r'Ausschluss nach \1<strong>\2</strong>\3:',
        new_content,
        flags=re.DOTALL
    )

    if new_content != content:
        with open(path_agb, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Fixed HoverGlossary in AGB.")

path_widerruf = "app/(legal)/widerruf/page.tsx"
if os.path.exists(path_widerruf):
    with open(path_widerruf, "r", encoding="utf-8") as f:
        content = f.read()
    
    # "bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang..."
    new_content = content.replace(
        "<strong>bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen</strong>",
        "bereits erbrachten Dienstleistungen"
    )
    
    if new_content != content:
        with open(path_widerruf, "w", encoding="utf-8") as f:
            f.write(new_content)
        print("Fixed Widerruf long strong tag.")
        
