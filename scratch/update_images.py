import re
import urllib.parse

with open('src/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# We need to find the categoryDetails block and replace the images in it.
# It's a bit tricky to parse the raw TS code accurately without a parser, 
# so we will use regex to find each object and replace the image field.

def replace_image(match):
    name = match.group(1)
    # Extract keywords from the name
    # e.g., "Standard Visiting Cards" -> "visiting,cards"
    keywords = ",".join([word for word in name.lower().split() if len(word) > 2])
    # Also add a random seed using the hash of the name so it's stable but unique
    seed = abs(hash(name)) % 10000
    
    # URL format: https://loremflickr.com/650/940/{keywords}?lock={seed}
    new_url = f"https://loremflickr.com/650/940/{urllib.parse.quote(keywords)}?lock={seed}"
    
    return f"{{ name: \"{name}\", description:{match.group(2)}, image: \"{new_url}\" }}"

# This regex matches: { name: "Something", description: "...", image: "..." }
pattern = re.compile(r'\{\s*name:\s*"([^"]+)",\s*description:(.*?),\s*image:\s*"[^"]+"\s*\}')

# Replace only within the categoryDetails block to be safe
start_idx = content.find('export const categoryDetails')
if start_idx != -1:
    end_idx = content.find('export const popularProducts', start_idx)
    if end_idx == -1:
        end_idx = len(content)
        
    before = content[:start_idx]
    block = content[start_idx:end_idx]
    after = content[end_idx:]
    
    new_block = pattern.sub(replace_image, block)
    new_content = before + new_block + after
    
    with open('src/data.ts', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully updated images with loremflickr placeholders.")
else:
    print("Could not find categoryDetails block.")
