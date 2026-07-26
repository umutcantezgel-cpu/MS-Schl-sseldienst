import os
import re

b_tag = re.compile(r'<b\b[^>]*>.*?</b>', re.IGNORECASE)
strong_empty = re.compile(r'<strong\b[^>]*>\s*</strong>', re.IGNORECASE)
h1_empty = re.compile(r'<h1\b[^>]*>\s*</h1>', re.IGNORECASE)
h1_count = re.compile(r'<h1\b[^>]*>', re.IGNORECASE)
h2_count = re.compile(r'<h2\b[^>]*>', re.IGNORECASE)
meta_desc = re.compile(r'description:\s*["\']([^"\']+)["\']')
meta_title = re.compile(r'title:\s*["\']([^"\']+)["\']')

for root, _, files in os.walk('app'):
    for file in files:
        if file.endswith('.tsx'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
                
                # Check <b> tags
                if b_tag.search(content):
                    print(f"[WARN] <b> tag found in {path}")
                    
                # Check empty <strong>
                if strong_empty.search(content):
                    print(f"[WARN] Empty <strong> in {path}")
                    
                # Check multiple H1
                h1s = h1_count.findall(content)
                if len(h1s) > 1:
                    print(f"[WARN] {len(h1s)} H1 tags in {path}")
                    
                # Check meta description
                descs = meta_desc.findall(content)
                for d in descs:
                    if len(d) < 120 or len(d) > 155:
                        print(f"[WARN] Meta description length {len(d)} in {path} (Expected 120-155)")
                        
                # Check meta title
                titles = meta_title.findall(content)
                for t in titles:
                    if len(t) < 45 or len(t) > 65:
                        print(f"[WARN] Meta title length {len(t)} in {path} (Expected 45-65)")

