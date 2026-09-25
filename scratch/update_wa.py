import os

files_to_update = [
    r'src\components\Navbar.tsx',
    r'src\components\LocalBusinessSection.tsx',
    r'src\components\Footer.tsx',
    r'src\components\FloatingWhatsApp.tsx',
    r'src\components\CTASection.tsx',
    r'src\components\ContactForm.tsx'
]

for filepath in files_to_update:
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace empty wa.me link
        content = content.replace('href="https://wa.me/"', 'href="https://wa.me/919052612450"')
        
        # In ContactForm.tsx, also replace the placeholder text
        if 'ContactForm.tsx' in filepath:
            content = content.replace('WhatsApp number to be added', '+91 90526 12450')
            
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
            
        print(f"Updated {filepath}")
    except Exception as e:
        print(f"Error updating {filepath}: {e}")
