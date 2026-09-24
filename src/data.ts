export interface Category {
  name: string;
  description: string;
  items: string[];
  image: string;
  alt: string;
}

export interface Product {
  name: string;
  description: string;
  image: string;
  alt: string;
}

export interface CustomerSegment {
  title: string;
  icon: string;
  items: string[];
  image: string;
  alt: string;
}

export interface PortfolioItem {
  title: string;
  category: string;
  image: string;
  alt: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BusinessSolution {
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  {
    name: 'Business Stationery',
    description: 'Essential printed materials for everyday business operations.',
    items: ['Visiting Cards', 'Letterheads', 'Envelopes', 'Bill Books', 'ID Cards', 'Certificates'],
    image: 'https://images.pexels.com/photos/8066713/pexels-photo-8066713.png?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Stack of blank business cards on a grey surface',
  },
  {
    name: 'Marketing Materials',
    description: 'Promotional prints to help your business stand out.',
    items: ['Flyers', 'Brochures', 'Posters', 'Standees', 'Banners', 'Promotional Materials'],
    image: 'https://images.pexels.com/photos/36823601/pexels-photo-36823601.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Folded brochures showcasing product design',
  },
  {
    name: 'Labels & Packaging',
    description: 'Custom labels and packaging for product branding.',
    items: ['Stickers', 'Product Labels', 'Packaging Labels', 'Paper Bags', 'Boxes', 'Hang Tags'],
    image: 'https://images.pexels.com/photos/7563593/pexels-photo-7563593.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Brown paper bag with custom label',
  },
  {
    name: 'Events & Invitations',
    description: 'Beautiful invitations for every special occasion.',
    items: ['Wedding Invitations', 'Birthday Invitations', 'Event Cards', 'Thank You Cards', 'Custom Invitations'],
    image: 'https://images.pexels.com/photos/31039955/pexels-photo-31039955.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Elegant floral wedding invitation',
  },
  {
    name: 'Apparel & Promotional',
    description: 'Branded apparel and promotional merchandise.',
    items: ['T-Shirts', 'Caps', 'Bags', 'Corporate Gifts', 'Promotional Merchandise'],
    image: 'https://images.pexels.com/photos/6256272/pexels-photo-6256272.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Custom printed t-shirt',
  },
  {
    name: 'Signage',
    description: 'Indoor and outdoor signage for businesses and events.',
    items: ['Flex Banners', 'Acrylic Signs', 'Sunboard Signs', 'Shop Boards', 'Direction Boards'],
    image: 'https://images.pexels.com/photos/3964566/pexels-photo-3964566.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Printed banner on a building wall',
  },
];

export const popularProducts: Product[] = [
  {
    name: 'Visiting Cards',
    description: 'Premium business cards with custom finishes.',
    image: 'https://images.pexels.com/photos/9878733/pexels-photo-9878733.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Stack of blank business cards on marble',
  },
  {
    name: 'Flyers',
    description: 'Eye-catching flyers for promotions and events.',
    image: 'https://images.pexels.com/photos/5650018/pexels-photo-5650018.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Promotional sale signs on beige background',
  },
  {
    name: 'Brochures',
    description: 'Informative tri-fold and bi-fold brochures.',
    image: 'https://images.pexels.com/photos/2250136/pexels-photo-2250136.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Art magazines and brochures on concrete',
  },
  {
    name: 'Stickers',
    description: 'Custom die-cut stickers in any shape.',
    image: 'https://images.pexels.com/photos/33714864/pexels-photo-33714864.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Pile of custom stickers on wooden surface',
  },
  {
    name: 'Posters',
    description: 'High-quality posters in various sizes.',
    image: 'https://images.pexels.com/photos/4108233/pexels-photo-4108233.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Minimalist poster on a white wall',
  },
  {
    name: 'Banners',
    description: 'Large format flex and vinyl banners.',
    image: 'https://images.pexels.com/photos/5869617/pexels-photo-5869617.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Person holding a sale poster',
  },
  {
    name: 'ID Cards',
    description: 'Professional ID cards with lanyards.',
    image: 'https://images.pexels.com/photos/7108127/pexels-photo-7108127.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'ID badges on a gray surface',
  },
  {
    name: 'Letterheads',
    description: 'Branded letterheads for official correspondence.',
    image: 'https://images.pexels.com/photos/7718630/pexels-photo-7718630.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Minimalist office desk with supplies',
  },
  {
    name: 'Packaging',
    description: 'Custom packaging boxes and paper bags.',
    image: 'https://images.pexels.com/photos/3080665/pexels-photo-3080665.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Eco-friendly paper bags with rope handles',
  },
];

export const customerSegments: CustomerSegment[] = [
  {
    title: 'Startups',
    icon: 'Rocket',
    items: ['Visiting Cards', 'Letterheads', 'Brochures', 'Stickers'],
    image: 'https://images.pexels.com/photos/8059661/pexels-photo-8059661.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Business cards on textured marble background',
  },
  {
    title: 'Retail Businesses',
    icon: 'Store',
    items: ['Shop Boards', 'Posters', 'Banners', 'Packaging'],
    image: 'https://images.pexels.com/photos/3964566/pexels-photo-3964566.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Printed banner on building wall',
  },
  {
    title: 'Restaurants & Cafés',
    icon: 'UtensilsCrossed',
    items: ['Menus', 'Packaging', 'Stickers', 'Promotional Materials'],
    image: 'https://images.pexels.com/photos/7564198/pexels-photo-7564198.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Brown paper bag with thank you note',
  },
  {
    title: 'Salons & Beauty',
    icon: 'Scissors',
    items: ['Business Cards', 'Price Lists', 'Posters', 'Promotional Materials'],
    image: 'https://images.pexels.com/photos/5706015/pexels-photo-5706015.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Business cards on pastel orange background',
  },
  {
    title: 'Events & Weddings',
    icon: 'PartyPopper',
    items: ['Invitations', 'Banners', 'Standees', 'Event Materials'],
    image: 'https://images.pexels.com/photos/15313106/pexels-photo-15313106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Wedding invitations with rustic bouquet',
  },
  {
    title: 'Real Estate',
    icon: 'Building2',
    items: ['Brochures', 'Boards', 'Flyers', 'Property Marketing Materials'],
    image: 'https://images.pexels.com/photos/29452731/pexels-photo-29452731.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Collection of travel brochures on display',
  },
];

export const featuredProducts: Product[] = [
  {
    name: 'Premium Visiting Cards',
    description: 'Spot UV, foil stamping, and premium finishes.',
    image: 'https://images.pexels.com/photos/5706020/pexels-photo-5706020.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Stack of blank business cards on pastel surface',
  },
  {
    name: 'Custom Stickers',
    description: 'Die-cut stickers with vibrant colors.',
    image: 'https://images.pexels.com/photos/12324202/pexels-photo-12324202.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'ISO certification stickers on paper',
  },
  {
    name: 'Business Brochures',
    description: 'Professional multi-fold brochures.',
    image: 'https://images.pexels.com/photos/7180485/pexels-photo-7180485.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Two people reviewing a design brochure',
  },
  {
    name: 'Custom Packaging',
    description: 'Branded boxes and bags for products.',
    image: 'https://images.pexels.com/photos/9594430/pexels-photo-9594430.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Hands packing a cardboard box with tags',
  },
  {
    name: 'Event Banners',
    description: 'Large format banners for events.',
    image: 'https://images.pexels.com/photos/38755330/pexels-photo-38755330.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Colorful theatre festival posters',
  },
  {
    name: 'Custom T-Shirts',
    description: 'Screen and heat-transfer printed apparel.',
    image: 'https://images.pexels.com/photos/6256315/pexels-photo-6256315.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Person wearing a custom printed t-shirt',
  },
];

export const businessSolutions: BusinessSolution[] = [
  {
    title: 'Branding Essentials',
    description: 'Logos, business cards, letterheads and brand identity materials.',
    icon: 'Palette',
  },
  {
    title: 'Marketing Materials',
    description: 'Flyers, brochures, posters and promotional campaign prints.',
    icon: 'Megaphone',
  },
  {
    title: 'Packaging Solutions',
    description: 'Custom boxes, labels, bags and product packaging.',
    icon: 'Package',
  },
  {
    title: 'Corporate & Promotional',
    description: 'Corporate gifts, apparel, event materials and merchandise.',
    icon: 'Gift',
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Choose Your Product',
    description: 'Browse our range of printing products and select what you need.',
    icon: 'MousePointerClick',
  },
  {
    step: 2,
    title: 'Share Your Design or Requirement',
    description: 'Send us your design file or tell us what you need designed.',
    icon: 'FileUp',
  },
  {
    step: 3,
    title: 'Get Your Quote',
    description: 'We provide a quotation based on your specifications and quantity.',
    icon: 'Calculator',
  },
  {
    step: 4,
    title: 'We Print. You Collect.',
    description: 'Your prints are produced and ready for collection.',
    icon: 'PackageCheck',
  },
];

export const portfolioItems: PortfolioItem[] = [
  { title: 'Business Cards', category: 'Business', image: 'https://images.pexels.com/photos/8947634/pexels-photo-8947634.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Business cards on textured fabric' },
  { title: 'Tri-fold Brochure', category: 'Marketing', image: 'https://images.pexels.com/photos/36823601/pexels-photo-36823601.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Folded brochures with product design' },
  { title: 'Promotional Flyer', category: 'Marketing', image: 'https://images.pexels.com/photos/5868260/pexels-photo-5868260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Person with sale poster on yellow background' },
  { title: 'Custom Packaging', category: 'Packaging', image: 'https://images.pexels.com/photos/7987867/pexels-photo-7987867.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Red and black paper bags on black background' },
  { title: 'Product Stickers', category: 'Packaging', image: 'https://images.pexels.com/photos/33714864/pexels-photo-33714864.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Pile of stickers on wooden surface' },
  { title: 'Event Poster', category: 'Marketing', image: 'https://images.pexels.com/photos/4108233/pexels-photo-4108233.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Minimalist poster on white wall' },
  { title: 'Flex Banner', category: 'Branding', image: 'https://images.pexels.com/photos/3964566/pexels-photo-3964566.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Printed banner on building wall' },
  { title: 'Wedding Invitation', category: 'Events', image: 'https://images.pexels.com/photos/20074173/pexels-photo-20074173.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Peach envelopes with wax seals' },
  { title: 'Custom T-Shirt', category: 'Branding', image: 'https://images.pexels.com/photos/6256272/pexels-photo-6256272.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Custom printed t-shirt' },
  { title: 'ID Cards', category: 'Business', image: 'https://images.pexels.com/photos/7648025/pexels-photo-7648025.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Conference name badges on table' },
  { title: 'Paper Bags', category: 'Packaging', image: 'https://images.pexels.com/photos/3080665/pexels-photo-3080665.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Eco-friendly paper bags with rope handles' },
  { title: 'Event Standee', category: 'Events', image: 'https://images.pexels.com/photos/6353839/pexels-photo-6353839.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Person holding a rectangular poster' },
];

export const portfolioFilters = ['All', 'Business', 'Marketing', 'Packaging', 'Events', 'Branding'];

export const whyChooseItems: WhyChooseItem[] = [
  { title: 'Professional Printing', description: 'High-quality printing with attention to detail on every order.', icon: 'Printer' },
  { title: 'Design Assistance', description: 'In-house design support to bring your ideas to life.', icon: 'PenTool' },
  { title: 'Wide Range of Products', description: 'From business cards to banners — all your printing needs covered.', icon: 'LayoutGrid' },
  { title: 'Custom Printing Solutions', description: 'Tailored printing for unique sizes, materials and finishes.', icon: 'Settings2' },
  { title: 'Business & Event Printing', description: 'Solutions for both corporate and event printing requirements.', icon: 'Briefcase' },
  { title: 'Local Hyderabad Service', description: 'Conveniently located in Dilsukhnagar for easy access.', icon: 'MapPin' },
];

export const faqItems: FAQItem[] = [
  { question: 'What printing services do you provide?', answer: 'We provide a wide range of printing services including visiting cards, brochures, flyers, posters, banners, stickers, labels, packaging, invitations, ID cards, letterheads, signage, apparel printing and more.' },
  { question: 'Can I provide my own design?', answer: 'Yes, you can share your own print-ready design files with us. We accept common formats and will guide you on the specifications needed for the best print quality.' },
  { question: 'Do you provide designing services?', answer: 'Yes, our in-house design team can help create professional designs from your requirements. Just share your idea and we will turn it into a print-ready design.' },
  { question: 'How can I get a quotation?', answer: 'You can request a quote through the enquiry form on this page, call us, or message us on WhatsApp. Share your product type, quantity and specifications for an accurate quote.' },
  { question: 'Do you handle bulk printing orders?', answer: 'Yes, we handle both small and bulk printing orders. Whether you need a few dozen business cards or thousands of flyers, we can accommodate your requirements.' },
  { question: 'How long does printing take?', answer: 'Turnaround time depends on the product, quantity and design complexity. We will provide an estimated timeline along with your quotation.' },
  { question: 'Do you provide delivery?', answer: 'Please contact us to discuss delivery options for your order. We can share details based on your location and requirements.' },
  { question: 'Can I order custom sizes?', answer: 'Yes, we offer custom sizes for most of our products. Let us know your required dimensions and we will produce accordingly.' },
];

export const trustItems = [
  { title: 'Quality Printing', icon: 'BadgeCheck' },
  { title: 'Professional Design', icon: 'PenTool' },
  { title: 'Wide Product Range', icon: 'LayoutGrid' },
  { title: 'Local Hyderabad Service', icon: 'MapPin' },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Business Solutions', href: '#business-solutions' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];
