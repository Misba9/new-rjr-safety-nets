import { Service, Testimonial, GalleryImage, WhyChooseUsItem } from '../types';
import { ShieldCheck, Users, Wrench, Award } from 'lucide-react';

// Service data without faker dependency - reduces bundle by ~2.8MB
export const services: Service[] = [
  {
    id: '1',
    slug: 'balcony-safety-nets',
    name: 'Balcony Safety Nets',
    imageUrl: '/images/pages/balcony-02.jpg',
    bannerImage: '/images/pages/balcony-03.jpg',
    shortDescription: 'High-quality balcony safety nets for maximum safety and durability.',
    longDescription: 'Our balcony safety nets provide comprehensive protection for your family and pets. Manufactured using premium quality materials, these nets are UV-resistant, weather-proof, and designed to withstand harsh conditions. Perfect for high-rise apartments and homes in Bangalore.',
    features: [
      'UV resistant and weatherproof materials',
      'Professional installation by trained experts',
      'Customizable to fit any balcony size',
      'Durable and long-lasting protection'
    ],
    contentSections: [
      { title: 'About Our Balcony Safety Nets', text: 'RJR Safety Nets offers premium balcony safety solutions designed to protect children, pets, and belongings from falls. Our nets are made from high-tensile strength nylon that can withstand extreme weather conditions.' },
      { title: 'Installation Process', text: 'Our expert installation team conducts a site inspection, takes precise measurements, and installs the nets using stainless steel hooks and fixtures. The entire process is completed within a few hours with minimal disturbance.' },
      { title: 'Material and Quality', text: 'We use only ISI certified materials with superior UV stabilization. Each net undergoes rigorous quality checks to ensure maximum safety and durability for years of reliable protection.' },
    ],
  },
  {
    id: '2',
    slug: 'children-safety-nets',
    name: 'Children Safety Nets',
    imageUrl: '/images/pages/children-safety-net.jpg',
    bannerImage: '/images/pages/children-safety-net.jpg',
    shortDescription: 'High-quality children safety nets for maximum safety and durability.',
    longDescription: 'Specially designed children safety nets that create a secure environment for kids to play freely. These transparent nets maintain your view while providing complete protection against falls and accidents.',
    features: [
      'Child-safe materials without sharp edges',
      'Transparent design maintains visibility',
      'Strong enough to prevent falls',
      'Easy to maintain and clean'
    ],
    contentSections: [
      { title: 'About Our Children Safety Nets', text: 'Our children safety nets are specifically engineered to create safe play areas in balconies, terraces, and staircases. Made from soft yet strong materials, they prevent accidents while being gentle on skin.' },
      { title: 'Installation Process', text: 'We assess the area, recommend the best netting solution, and install using child-safe fixtures. All installations are tested for strength and safety before handover.' },
      { title: 'Material and Quality', text: 'Using premium virgin HDPE material, our nets are tested to hold substantial weight while remaining soft to touch. They are completely safe for children and come with a quality warranty.' },
    ],
  },
  {
    id: '3',
    slug: 'pigeon-safety-nets',
    name: 'Pigeon Safety Nets',
    imageUrl: '/images/pages/pigeon-nets-02.jpg',
    bannerImage: '/images/pages/pigeo-net-01.jpg',
    shortDescription: 'High-quality pigeon safety nets for maximum safety and durability.',
    longDescription: 'Effective pigeon control solutions that keep your property clean and bird-free. Our nets are virtually invisible from a distance while providing complete protection against bird intrusion.',
    features: [
      'Nearly invisible from distance',
      'Prevents bird nesting and droppings',
      'Durable UV stabilized material',
      'Humane bird control solution'
    ],
    contentSections: [
      { title: 'About Our Pigeon Safety Nets', text: 'Combat pigeon problems with our specialized bird netting solutions. These nets effectively prevent birds from entering balconies, AC units, and other spaces while being completely humane.' },
      { title: 'Installation Process', text: 'After analyzing bird entry points, we install strategically placed nets that block access while maintaining aesthetics. The installation is quick and causes no damage to your property.' },
      { title: 'Material and Quality', text: 'Our pigeon nets use high-density polyethylene with UV stabilizers, ensuring they last for years even in direct sunlight. The small mesh size effectively keeps all bird species out.' },
    ],
  },
  {
    id: '4',
    slug: 'monkey-safety-nets',
    name: 'Monkey Safety Nets',
    imageUrl: '/images/slider/monkey-protection-nets.jpg',
    bannerImage: '/images/slider/monkey-protection-nets.jpg',
    shortDescription: 'High-quality monkey safety nets for maximum safety and durability.',
    longDescription: 'Robust monkey protection nets designed to prevent primate intrusions. Extra-strong materials ensure monkeys cannot damage or penetrate the netting.',
    features: [
      'Extra-strong reinforced construction',
      'Bite and tear resistant',
      'Large coverage area capability',
      'Long-lasting outdoor durability'
    ],
    contentSections: [
      { title: 'About Our Monkey Safety Nets', text: 'For areas with monkey populations, our specialized heavy-duty nets provide effective protection. The reinforced construction withstands aggressive attempts at entry.' },
      { title: 'Installation Process', text: 'We use industrial-grade fixtures and tension systems to ensure the nets remain taut and secure. Installation includes reinforced mounting points for maximum strength.' },
      { title: 'Material and Quality', text: 'Made from extra-thick nylon with reinforced edges, these nets are specifically designed to resist the strength and intelligence of primates while lasting for years.' },
    ],
  },
  {
    id: '5',
    slug: 'construction-safety-nets',
    name: 'Construction Safety Nets',
    imageUrl: '/images/slider/construction-safety-nets.jpg',
    bannerImage: '/images/slider/construction-safety-nets.jpg',
    shortDescription: 'High-quality construction safety nets for maximum safety and durability.',
    longDescription: 'Industrial-grade construction safety nets that protect workers and prevent falling debris. Complies with all safety regulations and standards.',
    features: [
      'Meets industrial safety standards',
      'High load-bearing capacity',
      'Debris containment system',
      'Quick deployment and removal'
    ],
    contentSections: [
      { title: 'About Our Construction Safety Nets', text: 'Essential for construction sites, our safety nets catch falling objects and protect workers at heights. These nets meet all regulatory safety requirements.' },
      { title: 'Installation Process', text: 'Our trained professionals install nets according to site requirements and safety codes. Regular inspections and adjustments ensure continued protection throughout the project.' },
      { title: 'Material and Quality', text: 'Using high-tenacity polypropylene, our construction nets can bear significant loads. Each batch is tested to ensure it meets stringent safety certifications.' },
    ],
  },
  {
    id: '6',
    slug: 'coconut-tree-safety-nets',
    name: 'Coconut Tree Safety Nets',
    imageUrl: '/images/Coconut-Tree-Safety-Nets.jpg',
    bannerImage: '/images/pages/building-1.jpg',
    shortDescription: 'High-quality coconut tree safety nets for maximum safety and durability.',
    longDescription: 'Specialized nets for coconut trees that catch falling coconuts and prevent property damage or injuries. Ideal for residential and commercial properties.',
    features: [
      'Catches falling coconuts safely',
      'Prevents property damage',
      'Weather-resistant construction',
      'Custom sizing for any tree'
    ],
    contentSections: [
      { title: 'About Our Coconut Tree Safety Nets', text: 'Protect your property and visitors from falling coconuts with our specially designed tree nets. These allow the tree to grow naturally while safely containing falling fruit.' },
      { title: 'Installation Process', text: 'We carefully install nets around coconut trees without damaging branches or restricting growth. The system allows for easy coconut collection while providing complete protection below.' },
      { title: 'Material and Quality', text: 'Our tree nets use flexible yet strong materials that withstand wind and weather. The open weave allows sunlight and air circulation while catching all falling objects.' },
    ],
  },
  {
    id: '7',
    slug: 'staircase-safety-nets',
    name: 'Staircase Safety Nets',
    imageUrl: '/images/pages/building-1.jpg',
    bannerImage: '/images/pages/building-1.jpg',
    shortDescription: 'High-quality staircase safety nets for maximum safety and durability.',
    longDescription: 'Protect children and prevent falls with our staircase safety netting solutions. Ideal for open staircases and multi-level homes.',
    features: [
      'Prevents falls from open stairs',
      'Child and pet safe design',
      'Minimal visual impact',
      'Easy access for adults'
    ],
    contentSections: [
      { title: 'About Our Staircase Safety Nets', text: 'Our staircase nets provide invisible protection for open staircases, preventing children and pets from falling through gaps while maintaining the aesthetic appeal of your home.' },
      { title: 'Installation Process', text: 'Custom measured and fitted to your staircase dimensions, our nets are installed using discrete mounting points that blend with your home decor.' },
      { title: 'Material and Quality', text: 'We use clear or color-matched netting that is strong enough for safety yet subtle enough to maintain your interior design. All materials are tested for strength and durability.' },
    ],
  },
  {
    id: '8',
    slug: 'sports-practice-nets',
    name: 'Sports Practice Nets',
    imageUrl: '/images/cricket-nets.jpg',
    bannerImage: '/images/pages/cricket.jpg',
    shortDescription: 'High-quality sports practice nets for maximum safety and durability.',
    longDescription: 'Professional-grade sports netting for cricket, football, and other sports. Create a safe practice area in your backyard or facility.',
    features: [
      'Professional sports-grade material',
      'Suitable for multiple sports',
      'Weather and UV resistant',
      'Custom sizing available'
    ],
    contentSections: [
      { title: 'About Our Sports Practice Nets', text: 'Perfect for cricket practice, batting cages, and multi-sport facilities. Our sports nets are designed to withstand repeated high-impact use while containing balls safely.' },
      { title: 'Installation Process', text: 'We set up complete practice facilities with proper tensioning and support structures. Nets can be installed as permanent or semi-permanent setups based on your needs.' },
      { title: 'Material and Quality', text: 'Using the same materials as professional facilities, our sports nets offer excellent ball containment and durability. Available in various mesh sizes for different sports.' },
    ],
  },
  {
    id: '9',
    slug: 'industrial-safety-nets',
    name: 'Industrial Safety Nets',
    imageUrl: '/images/pages/all-sports.jpg',
    bannerImage: '/images/pages/all-sports.jpg',
    shortDescription: 'High-quality industrial safety nets for maximum safety and durability.',
    longDescription: 'Heavy-duty industrial netting for factories, warehouses, and commercial facilities. Provides safety and debris containment in industrial environments.',
    features: [
      'Heavy-duty industrial grade',
      'High load capacity',
      'Fire retardant options available',
      'Custom engineering solutions'
    ],
    contentSections: [
      { title: 'About Our Industrial Safety Nets', text: 'Designed for demanding industrial applications, our nets provide fall protection, debris containment, and safety barriers in factories and warehouses.' },
      { title: 'Installation Process', text: 'We conduct thorough site assessments and engineer custom solutions for your facility. Installation is performed by certified professionals following all safety protocols.' },
      { title: 'Material and Quality', text: 'Our industrial nets use heavy-duty materials that meet or exceed industry safety standards. Options include fire-retardant treatments and specialized coatings for harsh environments.' },
    ],
  },
  {
    id: '10',
    slug: 'parking-lot-safety-nets',
    name: 'Parking Lot Safety Nets',
    imageUrl: '/images/pages/building-1.jpg',
    bannerImage: '/images/pages/building-1.jpg',
    shortDescription: 'High-quality parking lot safety nets for maximum safety and durability.',
    longDescription: 'Protective netting for parking structures to prevent vehicle and object falls. Essential safety feature for multi-level parking facilities.',
    features: [
      'Vehicle fall prevention',
      'Debris containment',
      'Weather resistant materials',
      'Low maintenance requirements'
    ],
    contentSections: [
      { title: 'About Our Parking Lot Safety Nets', text: 'Our parking lot nets provide crucial safety barriers for multi-level parking structures, preventing vehicles and objects from falling while allowing visibility and ventilation.' },
      { title: 'Installation Process', text: 'Professional installation includes structural assessment and secure mounting systems. We work with minimal disruption to parking operations.' },
      { title: 'Material and Quality', text: 'Using automotive-grade materials resistant to oil, fuel, and weather, our parking nets provide long-lasting protection with minimal maintenance.' },
    ],
  },
  {
    id: '11',
    slug: 'swimming-pool-safety-nets',
    name: 'Swimming Pool Safety Nets',
    imageUrl: '/images/pages/all-sports.jpg',
    bannerImage: '/images/pages/all-sports.jpg',
    shortDescription: 'High-quality swimming pool safety nets for maximum safety and durability.',
    longDescription: 'Pool safety covers and netting systems that prevent accidental drowning. Compliant with pool safety regulations.',
    features: [
      'Drowning prevention system',
      'Easy to deploy and remove',
      'UV and chlorine resistant',
      'Supports adult weight'
    ],
    contentSections: [
      { title: 'About Our Swimming Pool Safety Nets', text: 'Critical safety equipment for pool owners, our nets create a secure barrier over your pool when not in use, preventing accidental falls and drowning incidents.' },
      { title: 'Installation Process', text: 'We install anchor points around your pool perimeter for quick deployment. The system can be easily removed for swimming and reinstalled afterwards.' },
      { title: 'Material and Quality', text: 'Our pool nets use chlorine-resistant, UV-stabilized materials that can support the weight of children and adults. All products meet pool safety standards.' },
    ],
  },
  {
    id: '12',
    slug: 'anti-bird-spikes',
    name: 'Anti-Bird Spikes',
    imageUrl: '/images/Anti-Bird-Spikes.jpg',
    bannerImage: '/images/pages/pigeon-nets-02.jpg',
    shortDescription: 'High-quality anti-bird spikes for maximum safety and durability.',
    longDescription: 'Humane bird deterrent spikes that prevent birds from landing and nesting. Ideal for ledges, signs, and building edges.',
    features: [
      'Humane bird deterrent',
      'Durable stainless steel',
      'Easy installation',
      'Maintenance-free solution'
    ],
    contentSections: [
      { title: 'About Our Anti-Bird Spikes', text: 'Our anti-bird spikes provide a humane and effective solution to prevent birds from landing on ledges, signs, and architectural features without harming them.' },
      { title: 'Installation Process', text: 'Spikes are installed using weather-resistant adhesive or screws depending on the surface. Strategic placement ensures complete coverage of problem areas.' },
      { title: 'Material and Quality', text: 'Made from UV-resistant polycarbonate or stainless steel, our bird spikes maintain their effectiveness for years in all weather conditions.' },
    ],
  },
  {
    id: '13',
    slug: 'invisible-grills',
    name: 'Invisible Grills',
    imageUrl: '/images/pages/balcony-02.jpg',
    bannerImage: '/images/pages/balcony-03.jpg',
    shortDescription: 'High-quality invisible grills for maximum safety and durability.',
    longDescription: 'Modern invisible grill systems using stainless steel cables. Provides security without blocking your view.',
    features: [
      'Maintains unobstructed views',
      'Stainless steel construction',
      'Child and pet safe',
      'Modern aesthetic appeal'
    ],
    contentSections: [
      { title: 'About Our Invisible Grills', text: 'Our invisible grill systems use thin stainless steel cables spaced closely together, providing security and fall protection while maintaining your view and aesthetic appeal.' },
      { title: 'Installation Process', text: 'Precision installation uses tensioned stainless steel cables secured to reinforced mounting brackets. The system is virtually invisible from a few feet away.' },
      { title: 'Material and Quality', text: 'We use marine-grade stainless steel cables with high tensile strength. Each installation is load-tested to ensure it can prevent falls and intrusions effectively.' },
    ],
  },
  {
    id: '14',
    slug: 'cloth-hanger',
    name: 'Cloth Hanger',
    imageUrl: '/images/pages/balcony-02.jpg',
    bannerImage: '/images/pages/balcony-03.jpg',
    shortDescription: 'High-quality cloth hanger solutions for maximum safety and durability.',
    longDescription: 'Premium ceiling-mounted pulley cloth drying systems. Maximize your space with convenient indoor drying solutions.',
    features: [
      'Space-saving ceiling mount',
      'Easy pulley operation',
      'High weight capacity',
      'Rust-proof materials'
    ],
    contentSections: [
      { title: 'About Our Cloth Hanger', text: 'Our ceiling-mounted cloth drying systems provide a convenient and space-efficient way to dry clothes indoors. Perfect for balconies and utility areas.' },
      { title: 'Installation Process', text: 'We install sturdy ceiling brackets and pulley systems that allow you to easily raise and lower your drying rack. Installation is quick and includes all necessary hardware.' },
      { title: 'Material and Quality', text: 'Using powder-coated stainless steel and rust-proof components, our cloth hangers are built to last. Smooth pulley operation makes daily use effortless.' },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Excellent service! The team was professional and installed our balcony nets perfectly. Highly recommended.',
    name: 'Rajesh Kumar',
    location: 'Bangalore',
  },
  {
    id: '2',
    quote: 'Very satisfied with the quality of pigeon nets. No more bird problems on our balcony. Great work!',
    name: 'Priya Sharma',
    location: 'Whitefield',
  },
  {
    id: '3',
    quote: 'Professional installation and excellent quality nets. Our children are now safe on the balcony. Thank you!',
    name: 'Amit Patel',
    location: 'Koramangala',
  },
  {
    id: '4',
    quote: 'Prompt service and affordable pricing. The sports nets for our cricket practice are of excellent quality.',
    name: 'Venkat Reddy',
    location: 'Indiranagar',
  },
  {
    id: '5',
    quote: 'Best safety net service in Bangalore. The team was courteous and the installation was done perfectly.',
    name: 'Sneha Desai',
    location: 'HSR Layout',
  },
];

export const galleryImages: GalleryImage[] = [
  { id: '1', src: '/images/pages/balcony-02.jpg', alt: 'Balcony Safety Net Installation', category: 'balcony' },
  { id: '2', src: '/images/pages/balcony-03.jpg', alt: 'Balcony Protection Net', category: 'balcony' },
  { id: '3', src: '/images/pages/children-safety-net.jpg', alt: 'Children Safety Net', category: 'children' },
  { id: '4', src: '/images/pages/pigeon-nets-02.jpg', alt: 'Pigeon Control Net', category: 'pigeon' },
  { id: '5', src: '/images/cricket-nets.jpg', alt: 'Cricket Practice Nets', category: 'sports' },
  { id: '6', src: '/images/slider/monkey-protection-nets.jpg', alt: 'Monkey Protection Net', category: 'monkey' },
  { id: '7', src: '/images/slider/duct-area-safety-nets.jpg', alt: 'Duct Area Safety Net', category: 'duct' },
  { id: '8', src: '/images/slider/construction-safety-nets.jpg', alt: 'Construction Safety Net', category: 'construction' },
];

export const heroSlides = [
  { id: 1, image: '/images/slider/balcony-safety-nets.jpg', title: 'Welcome to RJR Safety Nets in Bangalore', description: 'RJR Safety Nets offers top-quality balcony nets, bird protection nets, construction nets and more. Call +91 7075051812 or +91 8074514411 for immediate assistance.' },
  { id: 2, image: '/images/slider/construction-safety-nets.jpg', title: 'Expert Installation Services', description: 'Our professional team ensures a perfect and secure installation every time.' },
  { id: 3, image: '/images/pages/all-sports.jpg', title: 'Durable and Reliable Solutions', description: 'Made from the highest quality materials to ensure longevity and safety.' },
];

export const whyChooseUsData: WhyChooseUsItem[] = [
  { id: '1', icon: ShieldCheck, title: 'Quality Assurance', description: 'We use only the highest-grade materials for all our safety nets.' },
  { id: '2', icon: Users, title: 'Expert Team', description: 'Our team consists of experienced and highly trained professionals.' },
  { id: '3', icon: Wrench, title: 'Custom Solutions', description: 'We provide tailored netting solutions to meet your specific requirements.' },
  { id: '4', icon: Award, title: 'Industry Standards', description: 'All our services and installations meet rigorous safety standards.' },
];

export const stats = [
  { id: '1', value: '10+', label: 'Years Experience' },
  { id: '2', value: '5K+', label: 'Happy Clients' },
  { id: '3', value: '10K+', label: 'Projects Done' },
  { id: '4', value: '24/7', label: 'Support' },
];