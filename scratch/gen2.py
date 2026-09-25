import re
import json

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
    for item in items:
        # Escape any double quotes in item names
        safe_item = item.replace('"', '\\"')
        new_block += f"    {{ name: \"{safe_item}\", description: \"Explore options for {safe_item}\", image: \"https://images.pexels.com/photos/5650018/pexels-photo-5650018.jpeg?auto=compress&cs=tinysrgb&h=650&w=940\" }},\n"
    new_block += "  ],\n"
new_block += "};\n"

with open('src/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the existing categoryDetails block
# We can find it using a regex that captures from 'export const categoryDetails' to 'export const popularProducts'
pattern = re.compile(r'export const categoryDetails.*?};\n', re.DOTALL)
new_content = pattern.sub(new_block, content)

with open('src/data.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)
