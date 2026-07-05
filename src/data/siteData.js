// Navigation
export const navLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Categories', href: '#categories' },
  { label: 'Process', href: '#process' },
]

export const categories = [
  {
    id: 'rigid_boxes',
    title: 'Rigid Boxes',
    description: 'Premium structured boxes for luxury products. High perceived value with magnetic closures, velvet inserts, and embossed finishes.',
    tags: ['Magnetic Closure', 'Velvet Insert', 'Embossed'],
    color: '#2a1f14',
    accent: '#c8a96e',
    gradient: 'from-amber-950 to-stone-900',
    emoji: '📦',
    products: ['Perfume', 'Jewelry', 'Cosmetics', 'Electronics'],
  },
  {
    id: 'corrugated_boxes',
    title: 'Corrugated Boxes',
    description: 'Durable shipping and e-commerce boxes engineered for protection and brand presentation during transit.',
    tags: ['E-commerce', 'Shipping', 'Custom Print'],
    color: '#1a2a1a',
    accent: '#7ab648',
    gradient: 'from-green-950 to-stone-900',
    emoji: '🗃️',
    products: ['E-commerce', 'Retail', 'Food & Beverage'],
  },
  {
    id: 'custom_pouches',
    title: 'Custom Pouches',
    description: 'Flexible packaging solutions with premium print quality. Perfect for food, beauty, and lifestyle brands.',
    tags: ['Flexible', 'Food Safe', 'Zipper Lock'],
    color: '#1a1a2a',
    accent: '#7a89e8',
    gradient: 'from-indigo-950 to-stone-900',
    emoji: '👜',
    products: ['Snacks', 'Supplements', 'Pet Food'],
  },
  {
    id: 'carry_bags',
    title: 'Carry Bags',
    description: 'Branded paper and fabric carry bags that turn every purchase into a walking billboard for your brand.',
    tags: ['Paper', 'Rope Handle', 'Glossy'],
    color: '#2a1a1a',
    accent: '#e87a7a',
    gradient: 'from-red-950 to-stone-900',
    emoji: '🛍️',
    products: ['Retail', 'Fashion', 'Gifting'],
  },
  {
    id: 'kraft_boxes',
    title: 'Kraft Boxes',
    description: 'Eco-friendly natural kraft packaging that communicates authenticity and sustainability for your brand.',
    tags: ['Eco-Friendly', 'Natural', 'Recyclable'],
    color: '#1f1a10',
    accent: '#c8a96e',
    gradient: 'from-yellow-950 to-stone-900',
    emoji: '📫',
    products: ['Organic', 'Bakery', 'Lifestyle'],
  },
  {
    id: 'labels_tags',
    title: 'Labels & Tags',
    description: 'Custom printed labels and hang tags with foil, emboss, and specialty substrates for premium brand touch.',
    tags: ['Foil', 'Die Cut', 'Premium Paper'],
    color: '#1a1f2a',
    accent: '#7ab4e8',
    gradient: 'from-blue-950 to-stone-900',
    emoji: '🏷️',
    products: ['Apparel', 'Beauty', 'Food'],
  },
  {
    id: 'art_card',
    title: 'Art Card',
    description: 'High-quality printed art card packaging with exceptional color accuracy and premium finishing options.',
    tags: ['CMYK', 'UV Coating', 'Lamination'],
    color: '#1a2a1f',
    accent: '#7ae8a0',
    gradient: 'from-emerald-950 to-stone-900',
    emoji: '🎨',
    products: ['Cosmetics', 'Pharma', 'FMCG'],
  },
]

export const stats = [
  { value: 250, suffix: '+', label: 'Brands Audited', description: 'Across beauty, wellness, food & lifestyle' },
  { value: 37, suffix: '%', label: 'Avg. Sales Uplift', description: 'Post packaging re-engineering' },
  { value: 12, suffix: '+', label: 'Box Types', description: 'Across rigid, corrugated, flexible & more' },
  { value: 4, suffix: '', label: 'Finish Types', description: 'Foil, emboss, UV spot, lamination' },
]

export const process = [
  {
    step: '01',
    title: 'Packaging Audit',
    description: 'We conduct a deep-dive audit of your current packaging — analyzing structure, materials, printing quality, finishes, and market alignment. You receive a detailed audit report with actionable gaps.',
    icon: '🔍',
    duration: '3–5 days',
  },
  {
    step: '02',
    title: 'Strategy & Design',
    description: 'Based on audit insights, our design team creates packaging concepts aligned with your brand positioning, target audience, and price point. We iterate until it\'s right.',
    icon: '✏️',
    duration: '7–10 days',
  },
  {
    step: '03',
    title: 'Sample & Approval',
    description: 'Physical samples are produced at our in-house facility. You review, approve, and we incorporate any final changes before moving to production.',
    icon: '📋',
    duration: '5–7 days',
  },
  {
    step: '04',
    title: 'Manufacturing',
    description: 'Your approved packaging is manufactured at our own facility with rigorous QC at every stage. No middlemen, no surprises — direct accountability.',
    icon: '🏭',
    duration: '15–25 days',
  },
  {
    step: '05',
    title: 'Delivery',
    description: 'Packaged, QC-checked, and shipped to your door. We provide full tracking and post-delivery support to ensure you\'re delighted with the outcome.',
    icon: '🚚',
    duration: '3–5 days',
  },
]

export const services = [
  {
    title: 'Packaging Audit',
    subtitle: 'Identify what\'s costing you sales',
    description: 'A comprehensive review of your current packaging against competitors, consumer psychology, and your brand promise. Delivered as an actionable report.',
    cta: 'Get Free Audit',
    href: '#audit',
    badge: 'Free',
  },
  {
    title: 'Design & Re-Engineering',
    subtitle: 'Transform your shelf presence',
    description: 'From structural engineering to graphic design — we rebuild your packaging from the ground up to maximize perceived value and purchase intent.',
    cta: 'Start Designing',
    href: '#design',
    badge: 'Popular',
  },
  {
    title: 'In-House Manufacturing',
    subtitle: 'Own manufacturing = better quality',
    description: 'We manufacture everything ourselves. No outsourcing, no quality surprises. Direct accountability from your brief to your doorstep.',
    cta: 'View Capabilities',
    href: '#manufacturing',
    badge: 'Premium',
  },
]

export const testimonials = [
  {
    name: 'Aisha Raza',
    brand: 'Velvet Bloom Co.',
    category: 'Skincare',
    quote: 'After BrandsFace audited our packaging, our retail pickup rate jumped 40%. The re-engineered rigid box for our serums completely changed how stores displayed us.',
    uplift: '40%',
    upliftLabel: 'Sales uplift',
    avatar: 'AR',
    color: '#c8a96e',
  },
  {
    name: 'Kamran Sheikh',
    brand: 'Natura Foods',
    category: 'Organic Food',
    quote: 'We went from generic kraft to a structured brand identity through their packaging. The investment paid back in 3 months. Absolutely worth it.',
    uplift: '3x',
    upliftLabel: 'ROI in 3 months',
    avatar: 'KS',
    color: '#7ab648',
  },
  {
    name: 'Sara Malik',
    brand: 'Lumière Jewels',
    category: 'Jewelry',
    quote: 'The rigid box they created made our jewelry feel like a luxury experience. Customers comment on the unboxing more than anything. BrandsFace gets luxury.',
    uplift: '65%',
    upliftLabel: 'Repeat purchases',
    avatar: 'SM',
    color: '#7a89e8',
  },
]

export const marqueeItems = [
  'Rigid Boxes', 'Corrugated Boxes', 'Custom Pouches', 'Carry Bags', 'Kraft Boxes', 'Labels & Tags', 'Art Card', 'Luxury Packaging', 'Eco Packaging', 'Brand Audit',
]
