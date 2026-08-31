import { BusinessInfo, MenuItem, ReviewItem, GalleryItem, FAQItem } from '../types';

export const businessInfo: BusinessInfo = {
  name: 'IMAM-UD-DIN SWEETS & BAKERS',
  urduName: 'امام الدین سویٹس اینڈ بیکرز',
  tagline: 'Pure Desi Ghee Traditional Sweets & Custom Celebration Cakes',
  subheadline: 'Arifwala’s premier destination for pure desi ghee mithai, handcrafted celebration cakes, fresh daily bakery biscuits, and savory fast food with free local home delivery.',
  address: 'Jinnah Chowk, Arifwala',
  fullAddress: 'Jinnah Chowk, Arifwala, District Pakpattan, Punjab 57450, Pakistan',
  city: 'Arifwala',
  province: 'Punjab',
  country: 'Pakistan',
  postalCode: '57450',
  latitude: 30.2901623,
  longitude: 73.0681054,
  phonePrimary: '0312-6942500',
  phoneInternational: '+92 312 6942500',
  phoneSecondary: '0345-7122500',
  landline: '0457-832500',
  whatsappNumber: '923126942500',
  whatsappDirectUrl: 'https://wa.me/923126942500?text=Assalam%20o%20Alaikum%20Imam-ud-Din%20Sweets%20%26%20Bakers!%20I%20would%20like%20to%20place%20an%20order%20for...',
  googleMapsUrl: 'https://maps.app.goo.gl/N2TzdHQFw8CAq1kt5',
  rating: 4.6,
  reviewCount: 356,
  establishedYear: '1998',
  facebookUrl: 'https://www.facebook.com/imamdinsweets',
  attributes: [
    '100% Pure Desi Ghee Preparation',
    'Custom Made Celebration Cakes',
    'Free Home Delivery in Arifwala',
    'Daily Fresh Morning Baking',
    'Bulk Wedding & Event Orders',
    'Takeaway & In-store Shopping',
    'Cash on Delivery & JazzCash/EasyPaisa'
  ],
  hours: [
    { day: 'Monday', open: '07:00 AM', close: '11:30 PM' },
    { day: 'Tuesday', open: '07:00 AM', close: '11:30 PM' },
    { day: 'Wednesday', open: '07:00 AM', close: '11:30 PM' },
    { day: 'Thursday', open: '07:00 AM', close: '11:30 PM' },
    { day: 'Friday', open: '07:00 AM', close: '11:30 PM' },
    { day: 'Saturday', open: '07:00 AM', close: '11:30 PM' },
    { day: 'Sunday', open: '07:00 AM', close: '11:30 PM' }
  ]
};

export const menuItems: MenuItem[] = [
  // MITHAI (Desi Ghee Traditional Sweets)
  {
    id: 'gulab-jamun-desi-ghee',
    name: 'Special Desi Ghee Gulab Jamun',
    urduName: 'اسپیشل دیسی گھی گلاب جامن',
    category: 'mithai',
    description: 'Fresh, soft, melt-in-the-mouth khoya dumplings soaked in fragrant cardamom rose sugar syrup, fried exclusively in pure desi ghee.',
    price: 'Rs. 950 / kg',
    priceNote: 'Available in 0.5kg, 1kg & gift boxes',
    isSpecialty: true,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    weightOptions: ['0.5 kg (Rs. 480)', '1.0 kg (Rs. 950)', '2.0 kg Box (Rs. 1,900)']
  },
  {
    id: 'pista-kaju-barfi',
    name: 'Royal Pista & Badam Barfi',
    urduName: 'شاہی پستہ بادام برفی',
    category: 'mithai',
    description: 'Velvety mawa fudge infused with saffron, topped generously with crunchy Iranian pistachios, almonds, and pure silver vark.',
    price: 'Rs. 1,200 / kg',
    priceNote: 'Pure Desi Mawa',
    isSpecialty: true,
    badge: 'Customer Favorite',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
    weightOptions: ['0.5 kg (Rs. 600)', '1.0 kg (Rs. 1,200)', 'Luxury Gift Box (Rs. 2,400)']
  },
  {
    id: 'sohan-halwa-multani',
    name: 'Heritage Desi Ghee Sohan Halwa',
    urduName: 'روایتی دیسی گھی سوہن حلوہ',
    category: 'mithai',
    description: 'Traditional slow-cooked chewy wheat germ sweet packed with whole walnuts, cashews, and rich desi ghee aroma.',
    price: 'Rs. 1,150 / kg',
    priceNote: 'Cooked on slow woodfire',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80',
    weightOptions: ['1.0 kg Tin (Rs. 1,150)', '2.0 kg Heritage Tin (Rs. 2,300)']
  },
  {
    id: 'motichoor-ladoo',
    name: 'Special Motichoor Ladoo',
    urduName: 'اسپیشل موتی چور لڈو',
    category: 'mithai',
    description: 'Delicate fine gram flour pearls fried in desi ghee, soaked in saffron syrup with melon seeds and aromatic spices.',
    price: 'Rs. 850 / kg',
    priceNote: 'Popular for celebrations',
    badge: 'Celebration Classic',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80',
    weightOptions: ['0.5 kg (Rs. 430)', '1.0 kg (Rs. 850)', '5 kg Event Pack (Rs. 4,200)']
  },
  {
    id: 'rasgulla-chamcham',
    name: 'Spongy Rasgulla & Malai Cham Cham',
    urduName: 'رس گلہ اور ملائی چم چم',
    category: 'mithai',
    description: 'Fresh handcrafted cottage cheese (chenna) sweets dipped in light cardamom nectar and garnished with rabri cream.',
    price: 'Rs. 900 / kg',
    priceNote: 'Chilled & Fresh Daily',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80',
    weightOptions: ['0.5 kg (Rs. 450)', '1.0 kg (Rs. 900)']
  },

  // CUSTOM CELEBRATION CAKES
  {
    id: 'custom-mixed-fruit-cake',
    name: 'Mixed Butterscotch & Strawberry Choco-Chip Cake',
    urduName: 'مکسڈ بٹر اسکاچ اور اسٹرابیری کیک',
    category: 'cakes',
    description: 'Our signature 2-pound celebration cake layered with silky butterscotch cream, fresh strawberry compote, and rich crunchy chocolate chips.',
    price: 'Starting Rs. 1,400 / 2 lbs',
    priceNote: 'Customizable flavor & inscription',
    isSpecialty: true,
    badge: 'Signature Cake',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    weightOptions: ['2 lbs (Rs. 1,400)', '3 lbs (Rs. 2,100)', '5 lbs (Rs. 3,500)']
  },
  {
    id: 'belgian-chocolate-fudge-cake',
    name: 'Rich Belgian Chocolate Fudge Cake',
    urduName: 'بیلجین چاکلیٹ فج کیک',
    category: 'cakes',
    description: 'Decadent moist dark chocolate sponge layered with thick velvety fudge ganache and topped with chocolate curls.',
    price: 'Starting Rs. 1,500 / 2 lbs',
    priceNote: 'Freshly baked for your event',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=800&q=80',
    weightOptions: ['2 lbs (Rs. 1,500)', '4 lbs (Rs. 3,000)', 'Tiered Party Cake (Rs. 4,500)']
  },
  {
    id: 'designer-fondant-birthday-cake',
    name: 'Theme Designer Fondant Celebration Cake',
    urduName: 'کسٹمائزڈ تھیم برتھ ڈے کیک',
    category: 'cakes',
    description: 'Handcrafted custom theme cakes for birthdays, weddings, bridal showers, and anniversaries. Any cartoon, floral, or 3D theme.',
    price: 'Starting Rs. 1,800 / 2 lbs',
    priceNote: 'Advance booking recommended',
    badge: 'Custom Made',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80',
    weightOptions: ['2 lbs (Rs. 1,800)', '3 lbs (Rs. 2,600)', '2-Tier 5 lbs (Rs. 4,500)']
  },
  {
    id: 'luxury-wedding-tiered-cake',
    name: 'Grand Royal Wedding Cake (Multi-Tier)',
    urduName: 'گرینڈ رائل ویڈنگ کیک',
    category: 'cakes',
    description: 'Majestic 2 to 3 tier wedding and engagement cakes with edible sugar pearls, floral cascading ornaments, and custom monograms.',
    price: 'From Rs. 4,500',
    priceNote: 'Delivered in temperature-safe carrier',
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=800&q=80',
    weightOptions: ['5 lbs 2-Tier (Rs. 4,500)', '8 lbs 3-Tier (Rs. 7,200)']
  },

  // BAKERY & BISCUITS
  {
    id: 'fresh-badam-zeera-biscuits',
    name: 'Artisanal Almond & Zeera Bakery Biscuits',
    urduName: 'تازہ بادام اور زیرہ بیکری بسکٹ',
    category: 'bakery',
    description: 'Crisp, crumbly, freshly baked morning tea biscuits in roasted cumin (zeera), crunchy almond (badam), and pistachio flavors.',
    price: 'Rs. 600 / kg',
    priceNote: 'Baked fresh every morning',
    isSpecialty: true,
    badge: 'Morning Tea Favorite',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80',
    weightOptions: ['0.5 kg Pack (Rs. 300)', '1.0 kg Tin Pack (Rs. 600)']
  },
  {
    id: 'chicken-cheese-puff-patties',
    name: 'Golden Chicken & Cheese Puff Patties',
    urduName: 'کرسپی چکن اور چیز پیٹیز',
    category: 'bakery',
    description: 'Flaky thousand-layer butter puff pastry filled with tender spiced chicken chunks and melted creamy cheese.',
    price: 'Rs. 80 / piece',
    priceNote: 'Fresh from the oven hot',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    weightOptions: ['Single Piece (Rs. 80)', 'Box of 6 (Rs. 450)', 'Box of 12 (Rs. 880)']
  },

  // FAST FOOD & SAVORIES
  {
    id: 'behari-roll-slice-pizza',
    name: 'Behari Roll Slice (Special Pizza Dough Edition)',
    urduName: 'بہاری رول سلائس (پیزا ڈو ایڈیشن)',
    category: 'fastfood',
    description: 'Our viral Arifwala specialty! Charbroiled spiced Bihari chicken boti wrapped in freshly rolled pizza crust with garlic mayo sauce and melted mozzarella.',
    price: 'Rs. 380',
    priceNote: 'Exclusive House Specialty',
    isSpecialty: true,
    badge: 'House Specialty',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    weightOptions: ['Regular (Rs. 380)', 'Jumbo with Extra Cheese (Rs. 480)']
  },
  {
    id: 'special-crispy-chicken-burger',
    name: 'Crunchy Zinger & Beef Burger',
    urduName: 'کرنچی زنگر اور بیف برگر',
    category: 'fastfood',
    description: 'Deep-fried golden chicken breast fillet loaded with iceberg lettuce, pickled jalapeños, and secret spiced cocktail sauce in a sesame brioche bun.',
    price: 'Rs. 350',
    priceNote: 'Served with crispy fries',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    weightOptions: ['Single Burger (Rs. 350)', 'Combo with Fries & Cold Drink (Rs. 490)']
  },
  {
    id: 'crispy-punjabi-samosa-nimco',
    name: 'Special Crispy Potato & Chicken Samosas',
    urduName: 'اسپیشل کرسپی پنجابی سموسے اور مکس نمکو',
    category: 'savories',
    description: 'Golden fried crispy handmade samosas with cumin-coriander spiced potato stuffing, accompanied by mint-coriander and sweet tamarind chutney.',
    price: 'Rs. 40 / piece',
    priceNote: 'Also available in frozen bulk packs',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    weightOptions: ['1 Dozen Fresh (Rs. 450)', 'Mixed Nimco 0.5 kg (Rs. 320)']
  },

  // WEDDING & GIFT BOXES
  {
    id: 'wedding-vip-mithai-box',
    name: 'Royal Heritage Wedding & Nikah Mithai Hamper',
    urduName: 'شاہی شادی اور نکاح مٹھائی ڈبہ',
    category: 'wedding',
    description: 'Opulent gold-embossed bespoke gift boxes filled with assorted pure desi ghee delicacies (Kaju Katli, Pista Barfi, Gulab Jamun, Cham Cham, and Balushahi).',
    price: 'Starting Rs. 1,600 / box',
    priceNote: 'Custom personalized wedding printing available',
    badge: 'VIP Packaging',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
    weightOptions: ['1 kg Box (Rs. 1,600)', '2 kg Luxury Tray (Rs. 3,200)', 'Bulk 50+ Boxes (Contact for discount)']
  }
];

export const customerReviews: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Muhammad Kashif',
    role: 'Local Guide, Arifwala',
    rating: 5,
    date: 'August 2026',
    comment: 'The 2-pound mixed flavored cake with butterscotch, strawberry, pineapple, and choco-chips was delivered right on time for my daughter’s birthday. Best quality, taste, and freshness in Arifwala! Highly recommended.',
    urduSnippet: 'ماشاءاللہ بہت زبردست کوالٹی اور بہترین ذائقہ',
    source: 'Facebook'
  },
  {
    id: 'rev-2',
    author: 'Tariq Mehmood',
    role: 'Verified Customer, Jinnah Chowk',
    rating: 5,
    date: 'July 2026',
    comment: 'Imam-ud-Din’s Desi Ghee Gulab Jamun and Pista Barfi are unbeatable in the entire district. You can taste the purity of real desi ghee in every bite. Their packaging for wedding gifts is truly royal.',
    urduSnippet: 'خالص دیسی گھی کی مٹھائیوں کا کوئی مقابلہ نہیں',
    source: 'Google Maps'
  },
  {
    id: 'rev-3',
    author: 'Zeshan Ali',
    role: 'Arifwala Resident',
    rating: 5,
    date: 'August 2026',
    comment: 'Their Behari Roll Slice made with fresh pizza dough is super delicious! Fast home delivery and always hot. Staff at the counter is extremely courteous.',
    urduSnippet: 'بہاری رول سلائس اور فریش پیزا لاجواب ہیں',
    source: 'Facebook'
  },
  {
    id: 'rev-4',
    author: 'Dr. Imran Haider',
    role: 'Family Customer',
    rating: 5,
    date: 'June 2026',
    comment: 'We ordered bulk mithai boxes for my brother’s Nikah ceremony. All guests praised the taste and neat golden box presentation. Thank you Imam-ud-Din Sweets for never compromising on quality.',
    urduSnippet: 'شادی کی مٹھائی کے لیے عارفوالہ کا سب سے قابل اعتماد نام',
    source: 'Verified Local Customer'
  },
  {
    id: 'rev-5',
    author: 'Usman Ghani',
    role: 'Regular Buyer',
    rating: 5,
    date: 'May 2026',
    comment: 'Fresh morning biscuits (especially the Badam Zeera) with hot tea is a daily staple for our home. Clean bakery environment, professional service, and honest pricing.',
    urduSnippet: 'صبح کے تازہ بادام اور زیرہ بسکٹ چائے کے ساتھ بہترین ہیں',
    source: 'Google Maps'
  },
  {
    id: 'rev-6',
    author: 'Hafiz Bilal Ahmed',
    role: 'Event Organizer',
    rating: 5,
    date: 'August 2026',
    comment: 'Placed an urgent order of 50kg mix sweets and custom celebration cake on short notice. Delivered right to our venue without any hassle. Best sweet shop at Jinnah Chowk.',
    urduSnippet: 'بروقت سروس اور شاندار کوالٹی',
    source: 'Facebook'
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Desi Ghee Royal Mithai Platter',
    category: 'Mithai',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1200&q=80',
    alt: 'Traditional Desi Ghee Gulab Jamun and Royal Barfi at Imam-Ud-Din Sweets',
    description: 'Freshly prepared traditional Pakistani mithai cooked in 100% pure desi ghee with pistachios and silver leaf.'
  },
  {
    id: 'gal-2',
    title: 'Custom Butterscotch & Fruit Cake',
    category: 'Cakes',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80',
    alt: 'Custom celebration birthday cake with berry and butterscotch accents',
    description: 'Two-tier celebratory birthday cake with fresh fruit puree and chocolate fudge toppings.'
  },
  {
    id: 'gal-3',
    title: 'Freshly Baked Morning Biscuits',
    category: 'Bakery',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1200&q=80',
    alt: 'Crispy bakery almond and zeera biscuits',
    description: 'Golden oven-baked tea biscuits and cookies crafted daily at our Arifwala bakery.'
  },
  {
    id: 'gal-4',
    title: 'Hot Pizza Dough Behari Roll & Slices',
    category: 'Fast Food',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80',
    alt: 'Freshly baked cheese pizza and Behari Roll slices',
    description: 'Our signature pizza dough editions filled with smoky Bihari chicken boti and mozzarella.'
  },
  {
    id: 'gal-5',
    title: 'Golden Crispy Samosas & Savories',
    category: 'Savories',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80',
    alt: 'Crispy spiced potato samosas and snacks',
    description: 'Traditional Punjabi potato and chicken samosas served hot with tangy mint and imli chutneys.'
  },
  {
    id: 'gal-6',
    title: 'Grand Wedding Tier Cake Display',
    category: 'Cakes',
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Luxury multi-tier floral wedding cake',
    description: 'Bespoke wedding and engagement cakes customized with names, dates, and edible floral artistry.'
  },
  {
    id: 'gal-7',
    title: 'Warm Gulab Jamun in Rose Syrup',
    category: 'Mithai',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=80',
    alt: 'Fresh warm desi ghee Gulab Jamun',
    description: 'Steaming hot Gulab Jamun dipped in aromatic cardamom syrup.'
  },
  {
    id: 'gal-8',
    title: 'Modern Shop & Sweets Display Counter',
    category: 'Bakery',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    alt: 'Bakery shop showcase and sweets counter at Jinnah Chowk',
    description: 'Hygienic, temperature-controlled display cases at Jinnah Chowk, Arifwala.'
  }
];

export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Where is IMAM-UD-DIN SWEETS & BAKERS located in Arifwala?',
    answer: 'We are prime located at Jinnah Chowk, Arifwala, District Pakpattan, Punjab. You can easily reach us via main road or follow our Google Maps pin for direct directions.'
  },
  {
    id: 'faq-2',
    question: 'Do you offer free home delivery in Arifwala?',
    answer: 'Yes! We provide fast and free home delivery for orders across Arifwala city. Simply call us at 0312-6942500 / 0345-7122500 or message us directly on WhatsApp to get your fresh mithai, cakes, and fast food delivered hot and fresh.'
  },
  {
    id: 'faq-3',
    question: 'How do I order a customized birthday or wedding cake?',
    answer: 'You can choose your preferred flavor (Butterscotch, Strawberry Pineapple, Choco Chips, Chocolate Fudge, Red Velvet, Vanilla), size/weight (2 lbs, 3 lbs, 5 lbs+), design theme, and custom writing text. We recommend placing custom cake orders at least 3-6 hours in advance (or 24 hours for multi-tier wedding cakes).'
  },
  {
    id: 'faq-4',
    question: 'Are all your sweets prepared in 100% pure Desi Ghee?',
    answer: 'Yes, our signature mithai varieties (Gulab Jamun, Sohan Halwa, Royal Barfi, Motichoor Ladoo, Balushahi, and Jalebi) are strictly cooked using 100% pure desi ghee and fresh farm mawa (khoya) to preserve traditional taste and health.'
  },
  {
    id: 'faq-5',
    question: 'Do you provide bulk wedding and event mithai boxes?',
    answer: 'Absolutely. We specialize in custom-printed, gold-embossed luxury wedding gift boxes, Nikah announcement trays, and corporate event packages. Special bulk volume discounts are available.'
  },
  {
    id: 'faq-6',
    question: 'What are your store opening hours?',
    answer: 'We are open 7 days a week from 07:00 AM in the morning until 11:30 PM at night, so you can grab fresh breakfast items, tea snacks, and late-night dessert cravings.'
  },
  {
    id: 'faq-7',
    question: 'What payment methods do you accept?',
    answer: 'We accept Cash on Delivery (COD) for home orders, in-store cash, and direct mobile digital payments including JazzCash, EasyPaisa, and online Bank Transfers.'
  }
];

export const differentiators = [
  {
    id: 'diff-1',
    title: '100% Pure Desi Ghee Heritage',
    description: 'We never cut corners with hydrogenated oils. Our traditional sweets are cooked in pure farm desi ghee for authentic aroma and rich taste.'
  },
  {
    id: 'diff-2',
    title: 'Customized Celebration Cakes',
    description: 'From 2-pound birthday cakes to 3-tier grand wedding cakes, choose your custom flavors, themes, colors, and personalized inscriptions.'
  },
  {
    id: 'diff-3',
    title: 'Free Fast Home Delivery',
    description: 'Call or WhatsApp us at 0312-6942500 and receive fresh bakery treats and hot food right at your doorstep in Arifwala.'
  },
  {
    id: 'diff-4',
    title: 'Hygienic Food Standards',
    description: 'Every batch is prepared in sanitized, temperature-regulated facilities following rigorous cleanliness and food-safety standards.'
  },
  {
    id: 'diff-5',
    title: 'Daily Fresh Morning Bakes',
    description: 'Crisp Zeera & Badam biscuits, buttery croissants, and hot puff pastries baked fresh every day starting 7:00 AM.'
  },
  {
    id: 'diff-6',
    title: 'Arifwala’s Trusted Taste',
    description: 'Rated 4.6★ by hundreds of local families, wedding organizers, and sweet lovers across District Pakpattan & Sahiwal.'
  }
];
