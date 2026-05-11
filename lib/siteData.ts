// ==========================================================================
// ON THE GO MOVING & STORAGE — Site Data
// Central data store for navigation, services, locations, testimonials, etc.
// ==========================================================================
import { BRAND_IMAGES } from "./brandImages";

export const COMPANY = {
  name: "On The Go Moving & Storage",
  shortName: "On The Go Moving",
  phone: "(425) 761-8500",
  phoneHref: "tel:+14257618500",
  email: "booking@onthegomoving.com",
  address: "Redmond, WA 98052",
  license: "HG-064180",
  usdot: "2120054",
  googleReviewCount: 1562,
  googleRating: 4.8,
  founded: 2009,
  tagline: "Seattle's Most Trusted Movers",
  heroTagline: "Moving Made Easy in the Pacific Northwest",
};

export const NAV_SERVICES = [
  { label: "Residential Moving", href: "/residential-moving/" },
  { label: "Commercial Moving", href: "/commercial-moving/" },
  { label: "Storage Services", href: "/storage-services/" },
  { label: "Packing Services", href: "/packing-services/" },
  { label: "Apartment Moving", href: "/apartment-moving/" },
  { label: "Senior Moving", href: "/senior-moving/" },
  { label: "Staging Professionals", href: "/staging-professionals/" },
];

// Top 12 shown in nav dropdown — links to all 26 location pages
export const NAV_LOCATIONS = [
  { label: "Seattle Movers", href: "/seattle-movers/" },
  { label: "Bellevue Movers", href: "/bellevue-movers/" },
  { label: "Redmond Movers", href: "/redmond-movers/" },
  { label: "Kirkland Movers", href: "/kirkland-movers/" },
  { label: "Issaquah Movers", href: "/issaquah-movers/" },
  { label: "Bothell Movers", href: "/bothell-movers/" },
  { label: "Renton Movers", href: "/renton-movers/" },
  { label: "Shoreline Movers", href: "/shoreline-movers/" },
  { label: "Sammamish Movers", href: "/sammamish-movers/" },
  { label: "Woodinville Movers", href: "/woodinville-movers/" },
  { label: "Kenmore Movers", href: "/kenmore-movers/" },
  { label: "Mercer Island Movers", href: "/mercer-island-movers/" },
  { label: "View All Locations →", href: "/we-are-local/" },
];

// All 26 location pages — used in footer, sitemap, and Locations index
export const ALL_LOCATIONS = [
  { label: "Seattle", href: "/seattle-movers/" },
  { label: "Bellevue", href: "/bellevue-movers/" },
  { label: "Redmond", href: "/redmond-movers/" },
  { label: "Kirkland", href: "/kirkland-movers/" },
  { label: "Sammamish", href: "/sammamish-movers/" },
  { label: "Issaquah", href: "/issaquah-movers/" },
  { label: "Woodinville", href: "/woodinville-movers/" },
  { label: "Kenmore", href: "/kenmore-movers/" },
  { label: "Bothell", href: "/bothell-movers/" },
  { label: "Mercer Island", href: "/mercer-island-movers/" },
  { label: "Renton", href: "/renton-movers/" },
  { label: "Shoreline", href: "/shoreline-movers/" },
  { label: "Newcastle", href: "/newcastle-movers/" },
  { label: "Lake Forest Park", href: "/lake-forest-park-movers/" },
  { label: "Tukwila", href: "/tukwila-movers/" },
  { label: "Mountlake Terrace", href: "/mountlake-terrace-movers/" },
  { label: "Lynnwood", href: "/lynnwood-movers/" },
  { label: "Mukilteo", href: "/mukilteo-movers/" },
  { label: "Burien", href: "/burien-movers/" },
  { label: "Snoqualmie", href: "/snoqualmie-movers/" },
  { label: "North Bend", href: "/north-bend-movers/" },
  { label: "Duvall", href: "/duvall-movers/" },
  { label: "Carnation", href: "/carnation-movers/" },
  { label: "Fall City", href: "/fall-city-movers/" },
  { label: "Maple Valley", href: "/maple-valley-movers/" },
  { label: "Covington", href: "/covington-movers/" },
];

export const MAIN_NAV = [
  {
    label: "Services",
    href: "/services/",
    children: NAV_SERVICES,
  },
  {
    label: "How Much Do Movers Cost?",
    href: "/how-much-do-movers-cost/",
  },
  {
    label: "About",
    href: "/about-us/",
    children: [
      { label: "About Us", href: "/about-us/" },
      { label: "Meet Jason Sexton", href: "/jason-sexton/" },
      { label: "Our Team", href: "/about-us/#team" },
      { label: "Partners", href: "/partners/" },
      { label: "Staging Professionals", href: "/staging-professionals/" },
      { label: "Real Estate Agents", href: "/real-estate-agents/" },
    ],
  },
  {
    label: "We Are Local",
    href: "/locations/",
    children: NAV_LOCATIONS,
  },
  {
    label: "Blog",
    href: "/blog/",
  },
];

export const SERVICES = [
  {
    title: "Residential Moving",
    slug: "residential-moving",
    href: "/residential-moving/",
    icon: "🏠",
    description:
      "Full-service home moves handled with care. From studio apartments to large family homes, our crews treat your belongings like their own.",
    image: BRAND_IMAGES.residentialMoving,
  },
  {
    title: "Commercial Moving",
    slug: "commercial-moving",
    href: "/commercial-moving/",
    icon: "🏢",
    description:
      "Minimize downtime with our efficient office and commercial relocation services. We work around your schedule to keep your business running.",
    image: BRAND_IMAGES.commercialFleet,
  },
  {
    title: "Storage Services",
    slug: "storage-services",
    href: "/storage-services/",
    icon: "🏪",
    description:
      "Secure storage vaults at our Redmond, WA facility. Your belongings are loaded into dedicated vaults and managed by our team — not a self-serve unit. First month free with any move.",
    image: BRAND_IMAGES.storageForklift,
  },
  {
    title: "Apartment Moving",
    slug: "apartment-moving",
    href: "/apartment-moving/",
    icon: "🏢",
    description:
      "Elevator coordination, HOA certificates, and flat-rate pricing. We handle every building requirement so your move day runs without surprises.",
    image: BRAND_IMAGES.threeCrewLoadingTruck,
  },
  {
    title: "Senior Moving",
    slug: "senior-moving",
    href: "/senior-moving/",
    icon: "👴",
    description:
      "Patient, compassionate crews trained for senior moves. We work at your pace, coordinate with family members, and handle assisted living transitions.",
    image: BRAND_IMAGES.crewEntryway2,
  },
  {
    title: "Staging Professionals",
    slug: "staging-professionals",
    href: "/staging-professionals/",
    icon: "🏡",
    description:
      "Moving and storage services tailored for home stagers. Fast turnaround, flexible scheduling, and secure vault storage between staging projects.",
    image: BRAND_IMAGES.storageWarehouse,
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah M.",
    location: "Bellevue, WA",
    rating: 5,
    text: "On The Go Moving made our move completely stress-free. The crew was on time, professional, and handled all of our furniture with incredible care. I can't recommend them enough!",
    date: "March 2024",
  },
  {
    name: "James K.",
    location: "Redmond, WA",
    rating: 5,
    text: "Used them for our office relocation. They completed the entire move over a weekend so we were back up and running Monday morning. Absolutely phenomenal service.",
    date: "February 2024",
  },
  {
    name: "Maria L.",
    location: "Seattle, WA",
    rating: 5,
    text: "Third time using On The Go Moving and they never disappoint. Efficient, friendly, and fairly priced. They even helped me rearrange furniture after the move at no extra charge.",
    date: "January 2024",
  },
  {
    name: "David R.",
    location: "Kirkland, WA",
    rating: 5,
    text: "The team was incredibly careful with our antiques and fragile items. Everything arrived in perfect condition. The free storage month was a huge bonus during our transition.",
    date: "December 2023",
  },
  {
    name: "Jennifer T.",
    location: "Issaquah, WA",
    rating: 5,
    text: "Best movers in the Seattle area, period. They showed up early, worked efficiently, and the final price was exactly what was quoted. Zero surprises.",
    date: "November 2023",
  },
];

export const STATS = [
  { value: "15+", label: "Years in Business" },
  { value: "1,562", label: "5-Star Google Reviews" },
  { value: "50,000+", label: "Successful Moves" },
  { value: "4.8★", label: "Average Rating" },
];

export const LOCATIONS_SERVED = [
  "Seattle", "Bellevue", "Redmond", "Kirkland", "Sammamish",
  "Issaquah", "Woodinville", "Kenmore", "Bothell", "Mercer Island",
  "Renton", "Shoreline", "Newcastle", "Lake Forest Park", "Tukwila",
  "Mountlake Terrace", "Lynnwood", "Mukilteo", "Burien", "Snoqualmie",
  "North Bend", "Duvall", "Carnation", "Fall City", "Maple Valley", "Covington",
];

export const FAQS = [
  {
    question: "How much does it cost to hire movers in Seattle?",
    answer:
      "Local moves in the Seattle area typically cost between $100–$200 per hour for a 2-person crew with a truck. The total cost depends on the size of your home, distance, and any additional services like packing. Most 2-bedroom moves run $500–$1,200. Get a free, no-obligation quote from us for an exact estimate.",
  },
  {
    question: "How far in advance should I book movers?",
    answer:
      "We recommend booking at least 2–4 weeks in advance, especially for summer moves (May–September) when demand is highest. However, we do our best to accommodate last-minute moves — call us and we'll check availability.",
  },
  {
    question: "Do you offer free storage with a move?",
    answer:
      "Yes! We offer one free month of storage with every move. We store your belongings in large, secure storage vaults at our Redmond, WA facility. Our team handles all loading and retrieval — it's a full-service solution, not a self-serve storage unit.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Absolutely. On The Go Moving & Storage is fully licensed (WA License HG-064180) and insured. We carry full liability insurance and offer additional valuation coverage options for your belongings.",
  },
  {
    question: "Do you move pianos and specialty items?",
    answer:
      "Yes, we have specialized equipment and trained crews for moving pianos, safes, antiques, and other specialty items. Please mention these items when getting your quote so we can plan appropriately.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve the entire Greater Seattle area including Seattle, Bellevue, Redmond, Kirkland, Issaquah, Bothell, Renton, Shoreline, Sammamish, Woodinville, Kenmore, Mercer Island, Lynnwood, Everett, and surrounding communities.",
  },
];
