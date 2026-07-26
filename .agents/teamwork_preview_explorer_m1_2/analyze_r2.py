import os
import re
import glob
from collections import defaultdict, Counter

PROJECT_ROOT = "/Users/umurey/Downloads/MS-Schl-sseldienst-main"

print("--- ANALYZING REPOSITORY FOR R2 AUDIT ---")

# 1. Gather all TSX/TS files in app/, components/, lib/
app_files = glob.glob(os.path.join(PROJECT_ROOT, "app/**/*.tsx"), recursive=True)
app_files += glob.glob(os.path.join(PROJECT_ROOT, "app/**/*.ts"), recursive=True)
comp_files = glob.glob(os.path.join(PROJECT_ROOT, "components/**/*.tsx"), recursive=True)
lib_files = glob.glob(os.path.join(PROJECT_ROOT, "lib/**/*.ts"), recursive=True)

print(f"App files count: {len(app_files)}")
print(f"Component files count: {len(comp_files)}")
print(f"Lib files count: {len(lib_files)}")

# Audit 4: Strong / Bold tag inspection
bold_tag_files = {}
for path in app_files + comp_files + lib_files:
    rel_path = os.path.relpath(path, PROJECT_ROOT)
    try:
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()
            strong_matches = re.findall(r'<strong[^>]*>.*?</strong>', content, flags=re.DOTALL)
            b_matches = re.findall(r'<b[^>]*>.*?</b>', content, flags=re.DOTALL)
            open_strongs = len(re.findall(r'<strong[^>]*>', content))
            close_strongs = len(re.findall(r'</strong>', content))
            open_b = len(re.findall(r'<b[^>]*>', content))
            close_b = len(re.findall(r'</b>', content))
            
            total_bold_tags = open_strongs + open_b
            unclosed = (open_strongs != close_strongs) or (open_b != close_b)
            
            if total_bold_tags > 0:
                bold_tag_files[rel_path] = {
                    "count": total_bold_tags,
                    "open_strongs": open_strongs,
                    "close_strongs": close_strongs,
                    "open_b": open_b,
                    "close_b": close_b,
                    "unclosed": unclosed,
                    "strong_matches": len(strong_matches),
                    "b_matches": len(b_matches)
                }
    except Exception as e:
        pass

print("\n--- BOLD TAG STATS ---")
sorted_bold = sorted(bold_tag_files.items(), key=lambda x: x[1]["count"], reverse=True)
for path, data in sorted_bold[:35]:
    print(f"{path}: total={data['count']} (strong={data['open_strongs']}/{data['close_strongs']}, b={data['open_b']}/{data['close_b']}) unclosed={data['unclosed']}")
