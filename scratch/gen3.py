import re
import random

images = {
    'visiting-cards': [
        "https://images.pexels.com/photos/9878733/pexels-photo-9878733.jpeg",
        "https://images.pexels.com/photos/5706015/pexels-photo-5706015.jpeg",
        "https://images.pexels.com/photos/5706020/pexels-photo-5706020.jpeg",
        "https://images.pexels.com/photos/8947634/pexels-photo-8947634.jpeg",
        "https://images.pexels.com/photos/6224/hands-people-woman-working.jpg",
        "https://images.pexels.com/photos/6373155/pexels-photo-6373155.jpeg",
        "https://images.pexels.com/photos/3391851/pexels-photo-3391851.jpeg"
    ],
    'stationery': [
        "https://images.pexels.com/photos/7718630/pexels-photo-7718630.jpeg",
        "https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg",
        "https://images.pexels.com/photos/1766604/pexels-photo-1766604.jpeg",
        "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg",
        "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg",
        "https://images.pexels.com/photos/4553364/pexels-photo-4553364.jpeg"
    ],
    'stamps': [
        "https://images.pexels.com/photos/3800060/pexels-photo-3800060.jpeg",
        "https://images.pexels.com/photos/3800021/pexels-photo-3800021.jpeg",
        "https://images.pexels.com/photos/8282361/pexels-photo-8282361.jpeg",
        "https://images.pexels.com/photos/4491444/pexels-photo-4491444.jpeg"
    ],
    'marketing-materials': [
        "https://images.pexels.com/photos/5650018/pexels-photo-5650018.jpeg",
        "https://images.pexels.com/photos/6353839/pexels-photo-6353839.jpeg",
        "https://images.pexels.com/photos/4108233/pexels-photo-4108233.jpeg",
        "https://images.pexels.com/photos/3964566/pexels-photo-3964566.jpeg",
        "https://images.pexels.com/photos/38755330/pexels-photo-38755330.jpeg",
        "https://images.pexels.com/photos/7180485/pexels-photo-7180485.jpeg",
        "https://images.pexels.com/photos/36823601/pexels-photo-36823601.jpeg",
        "https://images.pexels.com/photos/5868260/pexels-photo-5868260.jpeg"
    ],
    'packaging': [
        "https://images.pexels.com/photos/33714864/pexels-photo-33714864.jpeg",
        "https://images.pexels.com/photos/3080665/pexels-photo-3080665.jpeg",
        "https://images.pexels.com/photos/9594430/pexels-photo-9594430.jpeg",
        "https://images.pexels.com/photos/7987867/pexels-photo-7987867.jpeg",
        "https://images.pexels.com/photos/12324202/pexels-photo-12324202.jpeg",
        "https://images.pexels.com/photos/4438137/pexels-photo-4438137.jpeg",
        "https://images.pexels.com/photos/4200424/pexels-photo-4200424.jpeg"
    ],
    'apparel': [
        "https://images.pexels.com/photos/6256315/pexels-photo-6256315.jpeg",
        "https://images.pexels.com/photos/6256272/pexels-photo-6256272.jpeg",
        "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg",
        "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg",
        "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
        "https://images.pexels.com/photos/18411516/pexels-photo-18411516.jpeg"
    ],
    'winterwear': [
        "https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg",
        "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg",
        "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg",
        "https://images.pexels.com/photos/6299351/pexels-photo-6299351.jpeg"
    ],
    'gifts': [
        "https://images.pexels.com/photos/1187317/pexels-photo-1187317.jpeg",
        "https://images.pexels.com/photos/2082071/pexels-photo-2082071.jpeg",
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
        "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg",
        "https://images.pexels.com/photos/1303098/pexels-photo-1303098.jpeg",
        "https://images.pexels.com/photos/3052136/pexels-photo-3052136.jpeg"
    ],
    'pens': [
        "https://images.pexels.com/photos/2884144/pexels-photo-2884144.jpeg",
        "https://images.pexels.com/photos/2900661/pexels-photo-2900661.jpeg",
        "https://images.pexels.com/photos/811575/pexels-photo-811575.jpeg",
        "https://images.pexels.com/photos/3819972/pexels-photo-3819972.jpeg"
    ],
    'drinkware': [
        "https://images.pexels.com/photos/1342529/pexels-photo-1342529.jpeg",
        "https://images.pexels.com/photos/1187317/pexels-photo-1187317.jpeg",
        "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg",
        "https://images.pexels.com/photos/4183020/pexels-photo-4183020.jpeg",
        "https://images.pexels.com/photos/1207918/pexels-photo-1207918.jpeg"
    ]
}

# The data dictionary we parsed earlier
data = {
  'visiting-cards': [
    "Standard Visiting Cards", "Classic Visiting Cards", "Rounded Corner Visiting Cards", "Square Visiting Cards",
    "Leaf Visiting Cards", "Oval Visiting Cards", "Circle Visiting Cards", "Custom Shape Visiting Cards",
    "QR Code Visiting Cards", "Spot UV Visiting Cards", "Raised Foil Visiting Cards", "Glossy Visiting Cards",
    "Matte Visiting Cards", "Bulk Visiting Cards", "Magnetic Visiting Cards", "Transparent Visiting Cards",
    "Premium Plus Visiting Cards", "Non-Tearable Visiting Cards", "Velvet Touch Visiting Cards", "Pearl Visiting Cards",
    "Kraft Visiting Cards", "Diamond Visiting Cards", "Visiting Card Holders", "Engraved Metal Card Holders",
    "Metal Card Holder", "Leatherite Card Holder", "Premium Metal Card Holders"
  ],
  'stationery': [
    "Letterheads", "Custom Letterhead Pads", "Bill Books", "Envelopes", "Envelope Seals", "Custom Pen Drive",
    "Laptop Skins", "Bulk Letterheads", "Gift Tags", "Gaming Mousepads", "Lanyards", "ID Cards", "Invoice Books",
    "Note Cards", "Custom Certificates", "Awards", "Coasters", "Employee Welcome Kit", "Cash Vouchers",
    "Paper Identity Cards", "Border Stitched Mousepads", "Personalised Notebooks", "Diary with Pen Holder",
    "Personalised A5 Diary", "Diary with Magnetic Lock", "Notebook A4 Size", "Custom Notepads", "Custom Keychains",
    "Wedding Invitations", "Save The Date Cards", "Wedding Menu", "Wedding Programmes", "Thank You Cards",
    "Birthday Invitations", "Party Invitations", "Moving Announcements", "Presentation Folders", "Ring Binder File",
    "Presentation File with Pocket", "Custom Document File", "Gift Wrapping Paper", "Custom Paper Wrist Bands",
    "USB Flash Drive", "Perfect Binding Booklets", "Mats", "Recognition Plaques", "Star Performer Awards",
    "Classic Executive Diary", "Office Stationery Kit", "Custom Long Notebooks", "Business Envelopes",
    "Worldview 2026 Leather Diary", "Gold Foil Wedding Invitations", "Photo Keychains", "Mousepad with Wrist Support",
    "Bulk Diaries"
  ],
  'stamps': [
    "Self Inking Stamps", "Basic Rubber Stamps", "Pocket Stamps", "Name Stamps", "Paper Embosser"
  ],
  'marketing-materials': [
    "Standees", "Posters", "Bulk Posters", "Banners", "Tabletop Standees", "Foam Boards", "Tabletop Signs",
    "Tent Cards", "Acrylic Sign Holder", "Flyers", "Brochures", "Booklets", "Bulk Flyers", "Postcards",
    "Portable Backdrops", "Custom Bookmarks", "Promotional Canopy Tents", "Acrylic Signs", "Outdoor Signs",
    "Plastic Signboards", "Board Signs", "Canvas Signs", "Magnetic Car Signs", "LED Translite Sign Boards",
    "LED Lollipop Display", "LED Clip-On Displays", "Car Door Decals", "Promo Tables", "Custom Logo Flags",
    "Menu Cards", "Foldable Pop Up Banners", "Loyalty Cards", "Custom Gift Certificates", "Button Badges",
    "Paper Bags", "Custom Tablecloths", "Table Runners", "Table Mats", "Stretch Table Covers", "Full-Print Paper Bags",
    "Fabric Standees", "QR Code Stand", "LED Display Stands", "X-Banners", "Fabric Banners", "Mesh Banners",
    "Tension Fabric Displays", "Sail Flags", "Table Flags", "Hanging Flags", "Tour Guide Flags", "Wall Mounted Flags",
    "Rectangle Flags", "Teardrop Flags"
  ],
  'packaging': [
    "Custom Stickers", "Sheet Stickers", "Custom Shape Stickers", "Sticker Singles", "UV Ink Transfer Stickers",
    "Window Stickers", "Dome Stickers", "QR Code Stickers", "Visiting Card Stickers", "Kraft Stickers",
    "Holographic Stickers", "Metal Stickers", "Custom Labels", "Product & Packaging Labels", "Return Address Labels",
    "Custom Iron-on Labels", "Transparent Labels", "Industrial Labels", "Shipping & Mailing Labels", "Roll Label Stickers",
    "Hang Tags", "Folded Hang Tags", "Baggage Tags", "Name Tags", "Raised Foil Hang Tags", "Self Adhesive Tapes",
    "Custom Paper Bags", "Printed Carry Bags", "Premium Gift Bags", "Courier Bags", "Corrugated Boxes", "Flat Mailer Boxes",
    "Metallic Shopping Bags", "Customised Ribbons", "Die Cut Handle Bags", "Full-Print Mailer Boxes", "Promotional Product Boxes",
    "Tuck Top Boxes", "Lock Bottom Boxes", "Auto Lock Bottom Boxes", "Chocolate Bar Boxes", "Soap Boxes", "Pull Out Boxes",
    "Popcorn Boxes", "Burger Boxes", "Frosted Slider Bags", "Transparent Seal Bags", "Designer Shopping Bags",
    "Luxury Shopping Bags", "Clear Plastic Cups"
  ],
  'apparel': [
    "Men's T-Shirts", "Women's T-Shirts", "Kid's T-shirts", "Polyester T-shirts", "Premium Men's Cotton T-Shirts",
    "Full Sleeves T-Shirts", "Limited Edition Cotton T-Shirts", "Jack & Jones Printed T-Shirts", "M&S Round Neck T-Shirts",
    "Skechers Crew Neck T-Shirts", "Levi's Cotton/Polo T-Shirts", "Reebok Printed T-Shirts", "Men's/Women's Polo T-Shirts",
    "Premium Polo T-Shirts", "Puma Polo T-shirts", "Parx Premium Polo T-Shirts", "US Polo Assn Polo T-Shirts",
    "Adidas Polo T-Shirts", "Woodland Polo T-Shirts", "Monte Carlo Polo T-Shirt", "Arrow Tipping Polo T-Shirts",
    "Custom Dress Shirts", "Cambridge Dress Shirts", "Park Avenue Shirts", "Fil-A-Fil Shirts", "Arrow Dress Shirts",
    "Custom Bags", "American Tourister Laptop Bags", "Harissons Laptop Bags", "Adidas Duffle Bags", "Cotton/Jute Tote Bags",
    "Sports Jersey", "Custom Polo Jerseys", "India Cricket Fan Jersey", "Adidas Track Suit", "US Polo Track Suit",
    "Custom Caps", "Beanies Caps", "Reflective Safety Vest", "Custom Aprons", "Lab Coats", "Uniform Overcoats",
    "Umbrellas", "Customised Hoodies"
  ],
  'winterwear': [
    "Fleece Jackets", "Puffer Jackets", "Winter Jacket - Sleeveless", "Adidas Hoodies/Jackets", "Levi's High Neck Zipper Jackets",
    "Crewneck Sweatshirts", "Swiss Military Jackets/Hoodies", "Embroidered Sweaters"
  ],
  'gifts': [
    "Photo Albums", "Layflat Photo Albums", "Canvas Prints", "Photo With Frame", "Premium Photo Frames", "Personalised Mugs",
    "Colour Changing Magic Mugs", "Custom Mugs Black", "Custom Decorative Mugs", "Vacuum Coffee Mugs", "Temperature Display Mugs",
    "Gift Hampers", "Travel Accessories Hampers", "Welcome Kit", "Custom Magnets / Fridge Magnets", "Photo Magnets",
    "Acrylic Photo Magnets", "Customized Coasters", "Acrylic Coasters", "Soft/Tea Coasters", "Acrylic Photo Blocks",
    "Acrylic Display Stands", "Acrylic Photo Prints", "Custom Photo Frame", "LED Photo Frames", "Acrylic Photo Frame",
    "LED Daily Journal Lamp", "Personalized Wall Clocks", "Round Photo Mouse Pads", "Custom Mouse Pads",
    "Custom Calendars", "Magnet Calendars", "Corporate Gifts"
  ],
  'pens': [
    "Customized / Personalised Pens", "Premium Magnetic Metal Roller Pens", "Wooden Finish Metal Ball Pens", "Premium Matte Pens",
    "Premium Brass Metal Ball Pens", "Triangle Wire Clip Ball Pens", "Submarine Sleek Metal Roller Pens", "Submarine Fountain Pens",
    "Value Pens", "Executive Pens", "Premium Pens", "Luxury Pens", "Promotional Pens", "Gold Click Pens", "Bulk Ball Pens",
    "Multicolor Ball Pens", "Plastic Pens", "Black Matte Ball/Roller Pens"
  ],
  'drinkware': [
    "Custom Water Bottles", "Customised Tumblers", "Cello Duro Kent Water Bottles", "Temperature Display Bottles",
    "Stainless Steel Sipper Bottles", "Vacuum Bottles", "Cello Swift Bottles", "Inox Bottles", "Gym Bottles",
    "Thermal Suction Bottles", "Pexpo Vacuum/Thermo Steel Bottles", "Aluminium Water Bottles", "Wine Tumbler",
    "Travel Tumbler", "Vacuum Insulation Cup", "Water Bottle with Wireless Speaker", "Cello Flip Style Water Flasks",
    "Insulated Vacuum Coffee Flasks", "Frosted Beer Mugs", "Hip Flask", "Custom Matt Vacuum Bottles", "Customised Beer Mugs",
    "Personalised Champagne/Wine Glasses", "Personalised Vacuum Insulated Tumbler"
  ]
}

new_block = "export const categoryDetails: Record<string, {name: string; description: string; image: string}[]> = {\n"
for cat_id, items in data.items():
    new_block += f"  '{cat_id}': [\n"
    cat_images = images.get(cat_id, ["https://images.pexels.com/photos/5650018/pexels-photo-5650018.jpeg"])
    
    for i, item in enumerate(items):
        safe_item = item.replace('"', '\\"')
        
        # Determine a more specific description
        desc = f"High quality custom {safe_item.lower()} for your business needs."
        
        # Pick an image related to the category, cycling through them
        img = cat_images[i % len(cat_images)]
        # append some query params so they load nicely
        img = img + "?auto=compress&cs=tinysrgb&h=650&w=940"
        
        new_block += f"    {{ name: \"{safe_item}\", description: \"{desc}\", image: \"{img}\" }},\n"
    new_block += "  ],\n"
new_block += "};\n"

with open('src/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = re.compile(r'export const categoryDetails.*?};\n', re.DOTALL)
new_content = pattern.sub(new_block, content)

with open('src/data.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)
