"use client";

// =============================================================================
// CityServicePage.tsx
// Design: Matches LocationPage layout — forest green + gold brand palette,
// Playfair Display headings, Inter body, sticky sidebar with quote CTA.
// =============================================================================
import { useEffect, useState } from "react";
import { Phone, Star, Shield, CheckCircle, MapPin, Clock, ChevronDown, ChevronUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { BRAND_IMAGES } from "@/lib/brandImages";
import { COMPANY } from "@/lib/siteData";

// ---------------------------------------------------------------------------
// Data types
// ---------------------------------------------------------------------------
interface CityServiceData {
  slug: string;
  city: string;
  citySlug: string;
  service: string;
  serviceSlug: string;
  metaTitle: string;
  metaDescription: string;
  heroTagline: string;
  heroSubtitle: string;
  intro: string;
  whyUs: string;
  whatToExpect: string[];
  benefits: string[];
  faqs: { q: string; a: string }[];
  relatedServices: [string, string][];
  heroImage?: string;
}

// ---------------------------------------------------------------------------
// City × Service data registry
// Pattern: {city-slug}-{service-slug}
// ---------------------------------------------------------------------------

// Helper to build a city-service entry
function entry(
  city: string,
  citySlug: string,
  service: string,
  serviceSlug: string,
  intro: string,
  whyUs: string,
  whatToExpect: string[],
  benefits: string[],
  faqs: { q: string; a: string }[],
  relatedServices: [string, string][],
  heroImage?: string
): CityServiceData {
  const slug = `${citySlug}-${serviceSlug}`;
  return {
    slug,
    city,
    citySlug,
    service,
    serviceSlug,
    metaTitle: `${service} in ${city} | On The Go Moving & Storage`,
    metaDescription: `Professional ${service.toLowerCase()} in ${city}, WA. On The Go Moving & Storage — licensed, insured, 4.8 stars. Free quote. Call ${COMPANY.phone}.`,
    heroTagline: `Professional ${service} in ${city}`,
    heroSubtitle: `On The Go Moving & Storage — ${city}'s trusted local moving company since 2009.`,
    intro,
    whyUs,
    whatToExpect,
    benefits,
    faqs,
    relatedServices,
    heroImage,
  };
}

// ---------------------------------------------------------------------------
// Service templates per service type (reused across cities with city-specific vars)
// ---------------------------------------------------------------------------

function makePackingEntry(city: string, citySlug: string): CityServiceData {
  return entry(
    city, citySlug,
    "Packing Services", "packing-services",
    `On The Go Moving & Storage provides professional packing services throughout ${city}, WA. Our trained packers use high-quality materials and proven techniques to ensure every item — from everyday dishes to fragile antiques — arrives at your new home in perfect condition. Whether you need full-pack, partial-pack, or fragile-only packing, we have a solution that fits your needs and budget.`,
    `Our ${city} packing crews are background-checked, professionally trained, and equipped with premium packing materials. We bring everything — boxes, tape, bubble wrap, packing paper, and specialty containers — so you don't have to buy a thing. Our Redmond warehouse is minutes from ${city}, which means fast response times and lower travel costs.`,
    [
      `Our crew arrives on time at your ${city} home or office`,
      "We do a walk-through to assess what needs packing",
      "Each item is carefully wrapped and labeled by room",
      "Fragile items get extra layers of protection",
      "Boxes are sealed, labeled, and stacked for efficient loading",
      "We provide an itemized packing list for your records",
    ],
    [
      "Full-pack, partial-pack, or fragile-only options",
      "All packing materials included — no hidden supply charges",
      "Careful labeling system for easy unpacking",
      "Specialty packing for art, mirrors, and antiques",
      "Available as a standalone service or add-on to your move",
      "Licensed HG-064180 | USDOT# 2120054 | Fully insured",
    ],
    [
      { q: `How much do packing services cost in ${city}?`, a: `Professional packing in ${city} typically costs $35–$55 per hour per packer. A 1-bedroom home takes 2–4 hours to pack. A 3-bedroom home takes 6–10 hours. All packing materials are included in the quoted price — no surprise supply charges.` },
      { q: "Do I need to buy boxes and supplies?", a: "No. We bring all packing materials — boxes, tape, bubble wrap, packing paper, and specialty containers. Everything is included in the quoted price." },
      { q: "Can you pack just my fragile items?", a: "Yes. We offer fragile-only packing for customers who want to pack most items themselves but need professional help with dishes, glassware, artwork, and other breakables." },
      { q: "How far in advance should I book packing services?", a: "We recommend booking packing services 1–2 weeks before your move date. For large homes or peak season moves (May–September), book 2–4 weeks in advance." },
    ],
    [
      [`${city} Movers`, `/${citySlug}/`],
      ["Packing Services", "/packing-services/"],
      ["Unpacking Services", "/unpacking-services/"],
      ["Moving Supplies", "/moving-supplies/"],
    ],
    BRAND_IMAGES.truckSeattleSkyline
  );
}

function makeStorageEntry(city: string, citySlug: string): CityServiceData {
  return entry(
    city, citySlug,
    "Storage Services", "storage-services",
    `On The Go Moving & Storage provides secure storage vault service for ${city} residents and businesses. Your belongings are loaded into dedicated storage vaults at our climate-controlled Redmond facility — this is not a self-serve storage unit. Whether you need short-term storage during a move or long-term storage for excess belongings, our Redmond facility is just minutes from ${city} with flexible month-to-month terms.`,
    `Our storage vaults are housed in a climate-controlled, 24/7 monitored warehouse. Unlike self-storage facilities, we handle all the loading and retrieval — you never have to lift a box or navigate a storage facility. Our Redmond warehouse is close to ${city}, which means fast delivery when you're ready for your items.`,
    [
      "We pick up your items from your home or office in " + city,
      "Items are carefully inventoried and photographed",
      "Your belongings are loaded into dedicated storage vaults at our secure, climate-controlled Redmond facility",
      "Access your inventory list anytime online",
      "We deliver your items back when you're ready",
    ],
    [
      "Storage vaults in a climate-controlled warehouse — no temperature extremes",
      "24/7 security monitoring and access control",
      "Flexible month-to-month terms — no long-term contracts",
      "Full-service: our crew handles all loading and vault retrieval",
      "1 free month of storage included with every move",
      "Licensed HG-064180 | USDOT# 2120054 | Fully insured",
    ],
    [
      { q: `How much does storage cost for ${city} residents?`, a: `Storage rates depend on the volume of items. A typical 1-bedroom home's contents cost $150–$250/month to store. A 3-bedroom home runs $300–$500/month. We provide exact quotes after inventorying your items.` },
      { q: "What is a storage vault?", a: "A storage vault is a large, enclosed container that holds an entire room's worth of belongings. Your items are loaded into the vault by our crew, stored in our climate-controlled Redmond warehouse, and retrieved by forklift when you need access. It's a fully managed alternative to traditional self-serve storage units." },
      { q: "How long can I store my belongings?", a: "As long as you need. We offer flexible month-to-month storage with no long-term contracts. Most customers store for 1–3 months during a move, but we have customers who have stored with us for years." },
      { q: "Do I get 1 free month of storage with my move?", a: "Yes. Every move with On The Go Moving & Storage includes 1 free month of vault storage at our climate-controlled Redmond facility. This is especially useful if your new home isn't ready when you move out." },
    ],
    [
      [`${city} Movers`, `/${citySlug}/`],
      ["Storage Services", "/storage-services/"],
      ["Warehousing Services", "/warehousing-services/"],
      ["Moving Supplies", "/moving-supplies/"],
    ],
    BRAND_IMAGES.storageWarehouse
  );
}

function makeSeniorEntry(city: string, citySlug: string): CityServiceData {
  return entry(
    city, citySlug,
    "Senior Moving Services", "senior-moving",
    `On The Go Moving & Storage specializes in senior moving services throughout ${city}, WA. We understand that moving later in life is one of the most significant transitions a person can make — and we approach every senior move with patience, compassion, and the highest level of care. From downsizing assistance to assisted living transitions, we're here to help.`,
    `Our ${city} senior moving crews are specifically trained in the unique needs of older adults. We work at your pace, communicate clearly, and take extra care with sentimental items. We coordinate with family members and facility staff to ensure a smooth transition. Our Redmond warehouse is close to ${city} for fast, responsive service.`,
    [
      "We start with a free consultation to understand your specific needs",
      "Our crew arrives on time and introduces themselves",
      "We work at your pace — no rushing",
      "Fragile and sentimental items receive extra care",
      "We coordinate with family members and facility staff",
      "We help set up your new space so it feels like home",
    ],
    [
      "Patient, compassionate crews trained for senior moves",
      "Downsizing assistance and donation coordination",
      "Coordination with assisted living and retirement community staff",
      "Full packing and unpacking services available",
      "Flexible scheduling to accommodate your timeline",
      "Licensed HG-064180 | USDOT# 2120054 | Fully insured",
    ],
    [
      { q: `How much does senior moving cost in ${city}?`, a: `Senior moves in ${city} typically cost $120–$160 per hour for a 2-person crew. Most senior moves are smaller in scope than full household moves, so costs are often lower. We provide flat-rate quotes after a free consultation.` },
      { q: "Do you help with downsizing?", a: "Yes. We can help coordinate donation pickups, estate sale companies, and junk removal services as part of the downsizing process. We work with several trusted partners in the Greater Seattle area." },
      { q: "Do you move into assisted living facilities?", a: "Yes. We regularly move seniors into assisted living communities, memory care facilities, and retirement communities throughout the Greater Seattle area. We coordinate with facility staff on move-in procedures." },
      { q: "Can family members be involved in the move?", a: "Absolutely. We welcome family involvement and will coordinate with family members throughout the process. We can also communicate directly with a family member who is managing the move remotely." },
    ],
    [
      [`${city} Movers`, `/${citySlug}/`],
      ["Senior Moving", "/senior-moving/"],
      ["Packing Services", "/packing-services/"],
      ["Storage Services", "/storage-services/"],
    ],
    BRAND_IMAGES.crewEntryway3
  );
}

function makeBusinessEntry(city: string, citySlug: string, serviceLabel: string, serviceSlug: string): CityServiceData {
  return entry(
    city, citySlug,
    serviceLabel, serviceSlug,
    `On The Go Moving & Storage provides professional ${serviceLabel.toLowerCase()} throughout ${city}, WA. We work around your schedule — after hours, weekends, and holidays — to minimize disruption to your operations. Our commercial crews are trained in IT equipment handling, workstation disassembly, and chain-of-custody documentation.`,
    `Our ${city} commercial moving crews bring the experience, equipment, and project management skills that business moves demand. Every commercial move gets a dedicated project manager. We provide detailed move plans, after-hours execution, and a final walkthrough to ensure everything is in place before your team arrives.`,
    [
      "Free site assessment at your " + city + " location",
      "Dedicated project manager creates a detailed move plan",
      "After-hours or weekend move execution",
      "Workstation disassembly and careful IT equipment handling",
      "Everything placed per your floor plan",
      "Final walkthrough before we leave",
    ],
    [
      "After-hours and weekend moves to eliminate downtime",
      "Dedicated project manager for every commercial move",
      "Specialized handling for computers and servers",
      "Secure chain-of-custody for sensitive files",
      "Workstation disassembly and reassembly included",
      "Licensed HG-064180 | USDOT# 2120054 | Fully insured",
    ],
    [
      { q: `How much does a ${serviceLabel.toLowerCase()} cost in ${city}?`, a: `${serviceLabel} costs in ${city} depend on the number of workstations, floors, and distance. We provide flat-rate quotes after a free site assessment. Most small office moves (10–25 workstations) run $1,500–$4,000.` },
      { q: "Can you move our office over a weekend?", a: "Yes. Weekend and after-hours moves are our specialty for commercial clients. We can have your office fully moved and set up before your team arrives Monday morning." },
      { q: "Do you provide a dedicated project manager?", a: "Yes. Every commercial move gets a dedicated project manager who coordinates logistics, communicates with your team, and is on-site during the move." },
      { q: "How do you handle computers and servers?", a: "We use anti-static packing materials and specialized boxes for all electronics. Servers are transported upright in padded crates. We recommend your IT team disconnect and reconnect equipment, but we handle all physical transport." },
    ],
    [
      [`${city} Movers`, `/${citySlug}/`],
      ["Commercial Moving", "/commercial-moving/"],
      ["Office Moving", "/office-moving/"],
      ["Corporate Relocation", "/corporate-relocation/"],
    ],
    BRAND_IMAGES.crewCustomerCommercial
  );
}

function makeApartmentEntry(city: string, citySlug: string): CityServiceData {
  return entry(
    city, citySlug,
    "Apartment Moving", "apartment-moving",
    `On The Go Moving & Storage specializes in apartment moves throughout ${city}, WA. Whether you're moving into a high-rise with elevator restrictions, a walk-up building with narrow staircases, or a ground-floor unit, our crews have the experience and equipment to handle any ${city} apartment move efficiently.`,
    `Our ${city} apartment moving crews know the specific challenges of apartment moves — elevator reservations, HOA certificates of insurance, limited parking, and tight hallways. We handle all the coordination so you don't have to. Our Redmond warehouse is close to ${city} for fast, cost-effective service.`,
    [
      "We contact your building to confirm elevator and parking requirements",
      "Certificate of insurance provided if required by your HOA",
      "Our crew arrives on time with all necessary equipment",
      "Furniture is wrapped and protected for hallway and elevator transport",
      "Everything is placed in your new apartment exactly where you want it",
      "We do a final walkthrough of common areas before leaving",
    ],
    [
      "Elevator reservation coordination with building management",
      "Certificate of insurance for HOA requirements",
      "Furniture protection for tight hallways and elevators",
      "Available 7 days a week including weekends",
      "Flat-rate pricing — no hourly surprises",
      "Licensed HG-064180 | USDOT# 2120054 | Fully insured",
    ],
    [
      { q: `How much does an apartment move cost in ${city}?`, a: `Most ${city} apartment moves cost $400–$900 for a 1-bedroom unit and $700–$1,400 for a 2-bedroom unit. Pricing depends on floor, elevator availability, and distance. We provide flat-rate quotes.` },
      { q: "Do you handle elevator reservations?", a: "Yes. We contact your building management to reserve the service elevator and confirm the move-in time window. Just give us your building's management contact when you book." },
      { q: "Do you provide a certificate of insurance for HOA requirements?", a: "Yes. We provide a certificate of insurance naming your HOA as additional insured at no extra charge. This is a standard requirement in most apartment buildings." },
      { q: "Can you move without an elevator?", a: "Yes. Our crews are trained for stair carries and we bring stair rollers and furniture straps to handle buildings without elevators efficiently." },
    ],
    [
      [`${city} Movers`, `/${citySlug}/`],
      ["Apartment Moving", "/apartment-moving/"],
      ["Condo Moving", "/condo-moving/"],
      ["Packing Services", "/packing-services/"],
    ],
    BRAND_IMAGES.truckBellevueSkyline
  );
}

function makeResidentialEntry(city: string, citySlug: string): CityServiceData {
  return entry(
    city, citySlug,
    "Residential Moving", "residential-moving",
    `On The Go Moving & Storage provides full-service residential moving throughout ${city}, WA. From studio apartments to large family homes, our trained crews handle every aspect of your move — careful packing, safe loading, secure transport, and precise placement in your new home.`,
    `Our ${city} residential moving crews are background-checked, professionally trained, and equipped with the best moving equipment. We bring floor runners, door jamb protectors, moving blankets, and furniture pads on every job. Our Redmond warehouse is close to ${city} for fast response times and lower travel costs.`,
    [
      "Free quote — flat-rate pricing with no hidden fees",
      "Our crew arrives on time at your " + city + " home",
      "Furniture is wrapped and protected before loading",
      "Everything is loaded securely in our clean moving trucks",
      "Safe transport to your new home",
      "Unloading and placement exactly where you want it",
    ],
    [
      "Flat-rate pricing — know your final cost before we start",
      "Background-checked, professionally trained crews",
      "Floor runners and door jamb protectors on every job",
      "1 free month of climate-controlled storage included",
      "Available 7 days a week including weekends",
      "Licensed HG-064180 | USDOT# 2120054 | Fully insured",
    ],
    [
      { q: `How much does residential moving cost in ${city}?`, a: `Most ${city} residential moves cost $120–$160 per hour for a 2-person crew. A 1-bedroom home typically runs $450–$750. A 3-bedroom home move usually costs $1,100–$1,900. We provide flat-rate quotes so you know the final price before we start.` },
      { q: "Do you move on weekends?", a: "Yes. We're available 7 days a week including weekends and most holidays. Weekend availability is limited during peak season (May–September), so book early." },
      { q: "What's included in your residential moving service?", a: "Our residential moving service includes the moving crew, truck, all equipment (dollies, moving blankets, straps, floor runners), and transport. Packing materials and packing services are available as add-ons." },
      { q: "How far in advance should I book?", a: "We recommend booking 2–4 weeks in advance, especially for summer moves and end-of-month dates. We accommodate last-minute moves when availability allows." },
    ],
    [
      [`${city} Movers`, `/${citySlug}/`],
      ["Residential Moving", "/residential-moving/"],
      ["Packing Services", "/packing-services/"],
      ["Storage Services", "/storage-services/"],
    ],
    BRAND_IMAGES.threeCrewRampLoading
  );
}

function makeWarehouseEntry(city: string, citySlug: string): CityServiceData {
  return entry(
    city, citySlug,
    "Warehousing & Logistics", "warehousing-and-logistics",
    `On The Go Moving & Storage provides warehousing and logistics services for ${city} businesses. Our Redmond facility offers climate-controlled storage, cross-docking, inventory management, and last-mile delivery for businesses of all sizes in the ${city} area.`,
    `Our Redmond warehouse is strategically located close to ${city}, providing fast turnaround for warehousing and logistics needs. We handle everything from short-term storage during office relocations to ongoing inventory management for retail and e-commerce businesses.`,
    [
      "Contact us to discuss your " + city + " warehousing needs",
      "We assess your inventory volume and storage requirements",
      "Items are received, inventoried, and stored in our climate-controlled facility",
      "Real-time inventory tracking available",
      "Delivery to your " + city + " location on your schedule",
    ],
    [
      "Climate-controlled warehousing near " + city,
      "Cross-docking and freight staging available",
      "Flexible storage terms — no long-term contracts",
      "Real-time inventory management",
      "Last-mile delivery throughout the Greater Seattle area",
      "Licensed HG-064180 | USDOT# 2120054 | Fully insured",
    ],
    [
      { q: `Do you offer warehousing services near ${city}?`, a: `Yes. Our Redmond warehouse is close to ${city} and offers climate-controlled storage, cross-docking, and inventory management for businesses of all sizes.` },
      { q: "What types of businesses do you serve?", a: "We serve retail businesses, e-commerce companies, office tenants in transition, and any business that needs flexible, professional warehousing near the Greater Seattle area." },
      { q: "Do you offer last-mile delivery?", a: "Yes. We provide last-mile delivery from our Redmond warehouse to any location in the Greater Seattle area, including " + city + "." },
      { q: "Are you licensed for commercial warehousing?", a: "Yes. On The Go Moving & Storage is licensed (HG-064180) and insured for commercial warehousing and logistics in Washington State." },
    ],
    [
      [`${city} Movers`, `/${citySlug}/`],
      ["Warehousing Services", "/warehousing-services/"],
      ["Storage Services", "/storage-services/"],
      ["Commercial Moving", "/commercial-moving/"],
    ],
    BRAND_IMAGES.storageWarehouse
  );
}

function makePianoEntry(city: string, citySlug: string): CityServiceData {
  return entry(
    city, citySlug,
    "Piano Moving", "piano-movers",
    `On The Go Moving & Storage provides professional piano moving services in ${city}, WA. We move upright pianos, baby grands, and grand pianos safely using specialized equipment and trained crews. Whether you're moving across ${city} or anywhere within Washington State, we handle your piano with the care it deserves.`,
    `Our ${city} piano moving crews use piano boards, skid boards, and heavy-duty straps specifically designed for piano transport. We assess stair count, doorway widths, and access points before every move to ensure a safe, damage-free experience.`,
    [
      "We assess your piano type, stair count, and access points",
      "The piano is wrapped in moving blankets and secured to a piano board",
      "Careful loading onto our truck using a ramp",
      "Safe transport to your new " + city + " location",
      "Placement exactly where you want it",
      "Final inspection before we leave",
    ],
    [
      "Specialized piano boards and skid boards",
      "Experienced crews trained specifically for piano moves",
      "Full-value protection coverage on every piano",
      "Available for standalone piano-only moves",
      "All piano types: upright, spinet, baby grand, grand",
      "Licensed HG-064180 | USDOT# 2120054 | Fully insured",
    ],
    [
      { q: `How much does piano moving cost in ${city}?`, a: `Upright piano moves in ${city} typically cost $200–$400. Baby grand and grand piano moves run $350–$700 depending on stairs and distance. We provide exact quotes after assessing your specific situation.` },
      { q: "Can you move a grand piano up stairs?", a: "Yes. We have the equipment and experience to move grand pianos up and down stairs. We assess the staircase and doorway widths before committing to ensure a safe move." },
      { q: "Do I need to tune my piano after moving?", a: "Yes — pianos typically need tuning 2–4 weeks after a move to allow the instrument to acclimate to its new environment." },
      { q: "Is my piano insured during the move?", a: "Yes. We carry full-value protection coverage on all moves including pianos." },
    ],
    [
      [`${city} Movers`, `/${citySlug}/`],
      ["Piano Moving", "/piano-moving/"],
      ["Specialty Moving", "/specialty-moving/"],
      ["Residential Moving", "/residential-moving/"],
    ],
    BRAND_IMAGES.crewEntryway3
  );
}

function makeApplianceEntry(city: string, citySlug: string): CityServiceData {
  return entry(
    city, citySlug,
    "Appliance Moving", "appliance-moving",
    `On The Go Moving & Storage provides professional appliance moving services in ${city}, WA. We move refrigerators, washers, dryers, ovens, and other large appliances safely using appliance dollies, straps, and protective padding.`,
    `Our ${city} appliance moving crews have the right equipment for every appliance — from standard refrigerators to commercial-grade washers. We protect your floors and walls throughout the move and place appliances exactly where you need them.`,
    [
      "We assess the appliances and access points at your " + city + " home",
      "Appliances are secured to appliance dollies and wrapped",
      "Careful loading and transport",
      "Placement in your new location",
      "Leveling if needed",
    ],
    [
      "Appliance dollies and straps for safe handling",
      "Floor protection to prevent scratches",
      "Available for standalone appliance-only moves",
      "Experience with all major appliance brands",
      "Flat-rate pricing — no hourly surprises",
      "Licensed HG-064180 | USDOT# 2120054 | Fully insured",
    ],
    [
      { q: `How much does appliance moving cost in ${city}?`, a: `Single appliance moves in ${city} typically cost $150–$300 depending on the appliance type and distance. Moving multiple appliances as part of a full household move is included in the overall move price.` },
      { q: "Do you disconnect and reconnect appliances?", a: "We can assist with moving appliances into position. For gas appliances, we recommend a licensed plumber handle gas line disconnection and reconnection." },
      { q: "Can you move a refrigerator with food in it?", a: "We recommend emptying and defrosting your refrigerator before the move for best results." },
      { q: "Are you insured for appliance moves?", a: "Yes. On The Go Moving & Storage is fully licensed and insured with general liability and cargo insurance on every move." },
    ],
    [
      [`${city} Movers`, `/${citySlug}/`],
      ["Appliance Moving", "/appliance-moving/"],
      ["Residential Moving", "/residential-moving/"],
      ["Specialty Moving", "/specialty-moving/"],
    ],
    BRAND_IMAGES.crewCarryingUpRamp
  );
}

function makeMovingSuppliesEntry(city: string, citySlug: string): CityServiceData {
  return entry(
    city, citySlug,
    "Moving Supplies", "moving-supplies",
    `On The Go Moving & Storage provides professional-grade moving supplies for ${city} residents and businesses. From boxes and tape to bubble wrap and specialty containers, we have everything you need for a successful move — available for pickup at our Redmond warehouse or delivered to your ${city} home.`,
    `We use the same high-quality packing materials on every move that we sell to our customers. Our supplies are professional-grade — stronger boxes, better tape, and more protective wrap than what you'll find at a hardware store. Our Redmond warehouse is close to ${city} for easy pickup.`,
    [
      "Browse our supply list online or call to discuss your needs",
      "Order for pickup at our Redmond warehouse",
      "Or add supplies to your moving service for delivery on move day",
      "Our crew can pack for you or you can use the supplies yourself",
    ],
    [
      "Professional-grade boxes — stronger than retail options",
      "Specialty boxes for dishes, mirrors, and wardrobes",
      "Bubble wrap, packing paper, and stretch wrap",
      "Moving blankets available for rent",
      "Tape, markers, and labels included",
      "Available for pickup or delivery with your move",
    ],
    [
      { q: `Where can I get moving supplies near ${city}?`, a: `Our Redmond warehouse is close to ${city} and stocks professional-grade moving supplies. You can pick up supplies at our warehouse or have them delivered on move day when you book our moving service.` },
      { q: "What types of boxes do you carry?", a: "We carry standard boxes (small, medium, large), dish packs, mirror/picture boxes, wardrobe boxes, and specialty boxes for electronics. All are professional-grade and stronger than retail options." },
      { q: "Can I rent moving blankets?", a: "Yes. Moving blankets are included with every move. If you need them for a DIY move, contact us about rental options." },
      { q: "Do you deliver supplies to " + city + "?", a: "Yes. We can deliver supplies to your " + city + " home as part of your moving service. Contact us to discuss options." },
    ],
    [
      [`${city} Movers`, `/${citySlug}/`],
      ["Moving Supplies", "/moving-supplies/"],
      ["Packing Services", "/packing-services/"],
      ["Unpacking Services", "/unpacking-services/"],
    ],
    BRAND_IMAGES.truckSeattleSkyline
  );
}

function makeUnpackingEntry(city: string, citySlug: string): CityServiceData {
  return entry(
    city, citySlug,
    "Unpacking Services", "unpacking-services",
    `On The Go Moving & Storage provides professional unpacking services for ${city} residents. After a long moving day, the last thing you want to do is unpack. Our professional unpackers get your new ${city} home organized and livable quickly — unpacking boxes, placing items where you want them, and removing all packing materials.`,
    `Our ${city} unpacking crews work systematically room by room, placing items per your direction and organizing closets and cabinets. We break down all boxes and remove all packing materials, leaving your home clean and ready to live in.`,
    [
      "Walk-through of your new " + city + " home to understand placement",
      "Systematic unpacking room by room",
      "Items placed exactly where you direct",
      "Closet and cabinet organization available",
      "All boxes broken down and packing materials removed",
      "Final walkthrough to confirm everything is in place",
    ],
    [
      "Full unpacking or room-by-room partial unpacking",
      "Items placed exactly where you want them",
      "All packing materials removed from your home",
      "Kitchen and closet organization available",
      "Available same-day or scheduled for later",
      "Licensed HG-064180 | USDOT# 2120054 | Fully insured",
    ],
    [
      { q: `How much do unpacking services cost in ${city}?`, a: `Unpacking services in ${city} typically cost $35–$55 per hour per unpacker. A 1-bedroom home takes 2–4 hours to unpack. A 3-bedroom home takes 5–8 hours.` },
      { q: "Do you remove all the boxes and packing materials?", a: "Yes. We break down all boxes and remove all packing materials from your home as part of the unpacking service." },
      { q: "Can I schedule unpacking separately from my move?", a: "Yes. We offer standalone unpacking services. You can schedule us for the day after your move or any day that works for you." },
      { q: "Can you organize my kitchen and closets?", a: "Yes. We offer kitchen organization and closet organization as part of our unpacking service." },
    ],
    [
      [`${city} Movers`, `/${citySlug}/`],
      ["Unpacking Services", "/unpacking-services/"],
      ["Packing Services", "/packing-services/"],
      ["Residential Moving", "/residential-moving/"],
    ],
    BRAND_IMAGES.truckSeattleSkyline
  );
}

function makeLaborOnlyEntry(city: string, citySlug: string): CityServiceData {
  return entry(
    city, citySlug,
    "Labor Only Moving", "labor-only-moving",
    `On The Go Moving & Storage provides labor-only moving services in ${city}, WA. If you have your own truck or container, our professional movers provide the muscle — loading, unloading, and furniture rearrangement without the truck. Perfect for PODS, U-Haul, and storage container moves.`,
    `Our ${city} labor-only crews are the same professional movers who work our full-service moves. They bring all the equipment — dollies, moving blankets, straps, and floor runners — and the expertise to load your truck or container efficiently and safely.`,
    [
      "Book our labor-only service for your " + city + " move",
      "Our crew arrives with all equipment — no truck",
      "We load your rental truck, PODS, or storage container",
      "Efficient, organized loading to maximize space and prevent damage",
      "Or unloading at your destination",
      "Furniture rearrangement available as a standalone service",
    ],
    [
      "Professional movers without the truck",
      "Works with U-Haul, PODS, moving containers, and rental trucks",
      "All equipment included — dollies, blankets, straps",
      "Loading, unloading, or both",
      "Furniture rearrangement available",
      "Licensed HG-064180 | USDOT# 2120054 | Fully insured",
    ],
    [
      { q: `How much does labor-only moving cost in ${city}?`, a: `Labor-only moving in ${city} typically costs $100–$140 per hour for a 2-person crew. Call us about our minimums. Loading a 1-bedroom home takes 1.5–3 hours. A 3-bedroom home takes 3–5 hours.` },
      { q: "What types of trucks and containers do you work with?", a: "We work with all rental trucks (U-Haul, Penske, Budget), PODS, 1-800-Pack-Rat, and any other moving container or rental truck." },
      { q: "Do you provide equipment for labor-only moves?", a: "Yes. Our crews bring dollies, moving blankets, straps, and floor runners — everything needed to load your truck or container safely." },
      { q: "Can you just unload my truck?", a: "Yes. We offer unloading-only services. Just let us know when you're arriving and we'll be there to unload." },
    ],
    [
      [`${city} Movers`, `/${citySlug}/`],
      ["Labor Only Moving", "/labor-only-moving/"],
      ["Residential Moving", "/residential-moving/"],
      ["Packing Services", "/packing-services/"],
    ],
    BRAND_IMAGES.crewCarryingUpRamp
  );
}

function makeCondoEntry(city: string, citySlug: string): CityServiceData {
  return entry(
    city, citySlug,
    "Condo Moving", "condo-moving",
    `On The Go Moving & Storage specializes in condo moves throughout ${city}, WA. We handle all the coordination — elevator reservations, HOA certificates of insurance, and building move-in windows — so your ${city} condo move goes smoothly from start to finish.`,
    `Our ${city} condo moving crews know the specific requirements of condo buildings. We contact your building management in advance, provide the required COI, and work within your building's move-in window. We protect elevators, hallways, and common areas throughout the move.`,
    [
      "We contact your " + city + " building management to confirm requirements",
      "Certificate of insurance provided for HOA",
      "Service elevator booked for your move date",
      "Elevator pads and floor runners protect common areas",
      "Furniture wrapped and protected for hallway transport",
      "Final inspection of common areas before we leave",
    ],
    [
      "Elevator reservation coordination",
      "Certificate of insurance for HOA requirements",
      "Compliance with all building move-in rules",
      "Furniture protection for tight hallways",
      "Available 7 days a week",
      "Licensed HG-064180 | USDOT# 2120054 | Fully insured",
    ],
    [
      { q: `How much does a condo move cost in ${city}?`, a: `Most ${city} condo moves cost $400–$900 for a 1-bedroom unit and $700–$1,400 for a 2-bedroom unit. We provide flat-rate quotes.` },
      { q: "Do you handle elevator reservations?", a: "Yes. We contact your building management to reserve the service elevator and confirm the move-in time window." },
      { q: "Do you provide a COI for my HOA?", a: "Yes. We provide a certificate of insurance naming your HOA as additional insured at no extra charge." },
      { q: "What if my building has strict move-in hours?", a: "We work within your building's move-in window and plan the move to complete within that timeframe." },
    ],
    [
      [`${city} Movers`, `/${citySlug}/`],
      ["Condo Moving", "/condo-moving/"],
      ["Apartment Moving", "/apartment-moving/"],
      ["Packing Services", "/packing-services/"],
    ],
    BRAND_IMAGES.truckBellevueSkyline
  );
}

function makeCorporateEntry(city: string, citySlug: string): CityServiceData {
  return entry(
    city, citySlug,
    "Corporate Relocation", "corporate-relocation",
    `On The Go Moving & Storage provides corporate relocation services for companies moving employees to and from ${city}, WA. From single employee moves to large-scale office relocations, we provide the logistics, coordination, and white-glove service that corporate clients expect.`,
    `Our ${city} corporate relocation services include dedicated account management, flexible scheduling, temporary storage, and detailed reporting for HR teams. We work with your relocation coordinator to ensure every employee move is seamless.`,
    [
      "Corporate account setup with your HR team",
      "Employees contact us directly or through your HR portal",
      "White-glove full-service moving for each employee",
      "Temporary storage available between homes",
      "Detailed reporting and consolidated invoicing",
    ],
    [
      "Dedicated account manager for HR teams",
      "Volume pricing for multiple annual relocations",
      "Flexible scheduling for employee start dates",
      "Temporary storage for employees in transition",
      "Full-service packing and unpacking available",
      "Licensed HG-064180 | USDOT# 2120054 | Fully insured",
    ],
    [
      { q: `Do you offer corporate relocation services in ${city}?`, a: `Yes. We provide corporate relocation services for companies moving employees to and from ${city}. Contact us to set up a corporate account.` },
      { q: "Do you offer volume pricing for corporate accounts?", a: "Yes. Companies with multiple annual relocations qualify for volume pricing and dedicated account management." },
      { q: "Can employees book directly?", a: "Yes. We can set up a dedicated booking portal or phone line for your employees, with billing going to your corporate account." },
      { q: "Do you offer temporary storage for relocating employees?", a: "Yes. We offer storage vault service at our climate-controlled Redmond facility for employees who need temporary storage between their old and new homes. First month is free with any move." },
    ],
    [
      [`${city} Movers`, `/${citySlug}/`],
      ["Corporate Relocation", "/corporate-relocation/"],
      ["Commercial Moving", "/commercial-moving/"],
      ["Storage Services", "/storage-services/"],
    ],
    BRAND_IMAGES.officeMoveWeb
  );
}

function makeFurnitureEntry(city: string, citySlug: string): CityServiceData {
  return entry(
    city, citySlug,
    "Furniture Moving", "furniture-moving",
    `On The Go Moving & Storage provides professional furniture moving services in ${city}, WA. Whether you need to move a single piece of furniture or an entire household, our crews bring the equipment and expertise to protect your furniture and your home throughout the move.`,
    `Our ${city} furniture moving crews use moving blankets, stretch wrap, dollies, and straps on every piece. We disassemble and reassemble furniture, protect your floors with runners, and place everything exactly where you want it.`,
    [
      "Free quote for your " + city + " furniture move",
      "Disassembly of beds, shelving, and large pieces",
      "Every piece wrapped in moving blankets",
      "Floor runners protect your hardwood and carpet",
      "Safe transport in our padded moving trucks",
      "Placement and reassembly at your new location",
    ],
    [
      "Moving blankets and stretch wrap on every piece",
      "Furniture disassembly and reassembly included",
      "Floor runners and door jamb protectors",
      "Available for single-item and full household moves",
      "Experience with antique and high-value furniture",
      "Licensed HG-064180 | USDOT# 2120054 | Fully insured",
    ],
    [
      { q: `How much does furniture moving cost in ${city}?`, a: `Furniture moving in ${city} typically costs $120–$160 per hour for a 2-person crew. Single-item moves may have a flat rate. We provide exact quotes based on your specific needs.` },
      { q: "Can you move just one piece of furniture?", a: "Yes. We offer single-item furniture moves throughout the Greater Seattle area." },
      { q: "Do you disassemble and reassemble furniture?", a: "Yes. Disassembly and reassembly of beds, shelving, and large furniture is included at no extra charge." },
      { q: "How do you protect hardwood floors?", a: "We use floor runners, felt pads, and rubber-wheeled dollies to protect hardwood, tile, and carpet during every move." },
    ],
    [
      [`${city} Movers`, `/${citySlug}/`],
      ["Furniture Moving", "/furniture-moving/"],
      ["Residential Moving", "/residential-moving/"],
      ["Specialty Moving", "/specialty-moving/"],
    ],
    BRAND_IMAGES.threeCrewRampLoading
  );
}

function makeOfficeEntry(city: string, citySlug: string): CityServiceData {
  return entry(
    city, citySlug,
    "Office Movers", "office-movers",
    `On The Go Moving & Storage provides professional office moving services in ${city}, WA. We work after hours and on weekends to minimize disruption to your business. Our commercial crews handle workstation disassembly, IT equipment, and all office furniture with the care and efficiency your business demands.`,
    `Our ${city} office moving crews bring dedicated project management, after-hours execution, and the specialized equipment needed for commercial moves. Every office move gets a project manager who coordinates with your team from planning through completion.`,
    [
      "Free site assessment at your " + city + " office",
      "Dedicated project manager creates a detailed move plan",
      "After-hours or weekend move execution",
      "Workstation disassembly and IT equipment handling",
      "Everything placed per your floor plan",
      "Final walkthrough before we leave",
    ],
    [
      "After-hours and weekend moves available",
      "Dedicated project manager for every office move",
      "Specialized IT equipment handling",
      "Workstation disassembly and reassembly",
      "Secure chain-of-custody for sensitive files",
      "Licensed HG-064180 | USDOT# 2120054 | Fully insured",
    ],
    [
      { q: `How much does an office move cost in ${city}?`, a: `Office move costs in ${city} depend on the number of workstations and distance. Most small office moves (10–25 workstations) run $1,500–$4,000. We provide flat-rate quotes after a free site assessment.` },
      { q: "Can you move our office over a weekend?", a: "Yes. Weekend and after-hours moves are our specialty for commercial clients." },
      { q: "Do you provide a project manager?", a: "Yes. Every office move gets a dedicated project manager who is on-site during the move." },
      { q: "How do you handle computers and servers?", a: "We use anti-static packing materials and specialized boxes for all electronics." },
    ],
    [
      [`${city} Movers`, `/${citySlug}/`],
      ["Office Moving", "/office-moving/"],
      ["Commercial Moving", "/commercial-moving/"],
      ["Corporate Relocation", "/corporate-relocation/"],
    ],
    BRAND_IMAGES.crewCustomerCommercial
  );
}

// ---------------------------------------------------------------------------
// Build the full data registry
// ---------------------------------------------------------------------------

const CITY_SERVICE_DATA: Record<string, CityServiceData> = {};

// Cities and their slugs
const CITIES: [string, string][] = [
  ["Seattle", "seattle"],
  ["Bellevue", "bellevue"],
  ["Redmond", "redmond"],
  ["Kirkland", "kirkland"],
  ["Sammamish", "sammamish"],
  ["Issaquah", "issaquah"],
  ["Bothell", "bothell"],
  ["Renton", "renton"],
  ["Shoreline", "shoreline"],
  ["North Bend", "north-bend"],
];

// Generate entries for all city × service combinations
for (const [city, citySlug] of CITIES) {
  // Packing
  const packing = makePackingEntry(city, citySlug);
  CITY_SERVICE_DATA[packing.slug] = packing;

  // Storage
  const storage = makeStorageEntry(city, citySlug);
  CITY_SERVICE_DATA[storage.slug] = storage;

  // Senior
  const senior = makeSeniorEntry(city, citySlug);
  CITY_SERVICE_DATA[senior.slug] = senior;

  // Residential
  const residential = makeResidentialEntry(city, citySlug);
  CITY_SERVICE_DATA[residential.slug] = residential;

  // Apartment
  const apartment = makeApartmentEntry(city, citySlug);
  CITY_SERVICE_DATA[apartment.slug] = apartment;

  // Labor only
  const labor = makeLaborOnlyEntry(city, citySlug);
  CITY_SERVICE_DATA[labor.slug] = labor;

  // Furniture
  const furniture = makeFurnitureEntry(city, citySlug);
  CITY_SERVICE_DATA[furniture.slug] = furniture;
}

// City-specific business/commercial entries
for (const [city, citySlug] of CITIES) {
  const biz = makeBusinessEntry(city, citySlug, "Business Moving Services", "business-moving");
  CITY_SERVICE_DATA[biz.slug] = biz;
  const office = makeOfficeEntry(city, citySlug);
  CITY_SERVICE_DATA[office.slug] = office;
  const commercial = makeBusinessEntry(city, citySlug, "Commercial Moving Services", "commercial-moving");
  CITY_SERVICE_DATA[commercial.slug] = commercial;
}

// Condo entries
for (const [city, citySlug] of CITIES) {
  const condo = makeCondoEntry(city, citySlug);
  CITY_SERVICE_DATA[condo.slug] = condo;
}

// Corporate relocation entries
for (const [city, citySlug] of CITIES) {
  const corp = makeCorporateEntry(city, citySlug);
  CITY_SERVICE_DATA[corp.slug] = corp;
}

// Piano entries
for (const [city, citySlug] of CITIES) {
  const piano = makePianoEntry(city, citySlug);
  CITY_SERVICE_DATA[piano.slug] = piano;
}

// Appliance entries
for (const [city, citySlug] of CITIES) {
  const appliance = makeApplianceEntry(city, citySlug);
  CITY_SERVICE_DATA[appliance.slug] = appliance;
}

// Moving supplies entries
for (const [city, citySlug] of CITIES) {
  const supplies = makeMovingSuppliesEntry(city, citySlug);
  CITY_SERVICE_DATA[supplies.slug] = supplies;
}

// Unpacking entries
for (const [city, citySlug] of CITIES) {
  const unpacking = makeUnpackingEntry(city, citySlug);
  CITY_SERVICE_DATA[unpacking.slug] = unpacking;
}

// Warehousing entries (Bellevue, Kirkland, Redmond)
for (const [city, citySlug] of [["Bellevue", "bellevue"], ["Kirkland", "kirkland"], ["Redmond", "redmond"]] as [string, string][]) {
  const wh = makeWarehouseEntry(city, citySlug);
  CITY_SERVICE_DATA[wh.slug] = wh;
}

// Special slug overrides to match live site URLs
// /bellevue-warehousing-and-logistics/ → bellevue-warehousing-and-logistics
CITY_SERVICE_DATA["bellevue-warehousing-and-logistics"] = { ...makeWarehouseEntry("Bellevue", "bellevue"), slug: "bellevue-warehousing-and-logistics" };
CITY_SERVICE_DATA["kirkland-warehousing-and-logistics-services"] = { ...makeWarehouseEntry("Kirkland", "kirkland"), slug: "kirkland-warehousing-and-logistics-services" };
CITY_SERVICE_DATA["redmond-warehousing-and-logistics"] = { ...makeWarehouseEntry("Redmond", "redmond"), slug: "redmond-warehousing-and-logistics" };

// Live site uses /redmond-apartment-mover/ (singular)
CITY_SERVICE_DATA["redmond-apartment-mover"] = { ...makeApartmentEntry("Redmond", "redmond"), slug: "redmond-apartment-mover" };

// Live site uses /redmond-senior-movers/ (plural)
CITY_SERVICE_DATA["redmond-senior-movers"] = { ...makeSeniorEntry("Redmond", "redmond"), slug: "redmond-senior-movers" };

// Live site uses /redmond-residential-movers/ (plural)
CITY_SERVICE_DATA["redmond-residential-movers"] = { ...makeResidentialEntry("Redmond", "redmond"), slug: "redmond-residential-movers" };

// Live site uses /redmond-business-movers/ (plural)
CITY_SERVICE_DATA["redmond-business-movers"] = { ...makeBusinessEntry("Redmond", "redmond", "Business Moving Services", "business-moving"), slug: "redmond-business-movers" };

// Live site uses /kirkland-business-movers/ (plural)
CITY_SERVICE_DATA["kirkland-business-movers"] = { ...makeBusinessEntry("Kirkland", "kirkland", "Business Moving Services", "business-moving"), slug: "kirkland-business-movers" };

// Shoreline specific
CITY_SERVICE_DATA["shoreline-apartment-movers"] = { ...makeApartmentEntry("Shoreline", "shoreline"), slug: "shoreline-apartment-movers" };
CITY_SERVICE_DATA["shoreline-business-moving"] = { ...makeBusinessEntry("Shoreline", "shoreline", "Business Moving Services", "business-moving"), slug: "shoreline-business-moving" };
CITY_SERVICE_DATA["shoreline-residential-moving-services"] = { ...makeResidentialEntry("Shoreline", "shoreline"), slug: "shoreline-residential-moving-services" };
CITY_SERVICE_DATA["shoreline-senior-moving"] = { ...makeSeniorEntry("Shoreline", "shoreline"), slug: "shoreline-senior-moving" };
CITY_SERVICE_DATA["shoreline-storage-service"] = { ...makeStorageEntry("Shoreline", "shoreline"), slug: "shoreline-storage-service" };

// Sammamish specific
CITY_SERVICE_DATA["sammamish-business-moving"] = { ...makeBusinessEntry("Sammamish", "sammamish", "Business Moving Services", "business-moving"), slug: "sammamish-business-moving" };
CITY_SERVICE_DATA["sammamish-residential-moving-services"] = { ...makeResidentialEntry("Sammamish", "sammamish"), slug: "sammamish-residential-moving-services" };
CITY_SERVICE_DATA["sammamish-senior-moving"] = { ...makeSeniorEntry("Sammamish", "sammamish"), slug: "sammamish-senior-moving" };
CITY_SERVICE_DATA["sammamish-storage-services"] = { ...makeStorageEntry("Sammamish", "sammamish"), slug: "sammamish-storage-services" };

// Issaquah specific
CITY_SERVICE_DATA["issaquah-business-moving"] = { ...makeBusinessEntry("Issaquah", "issaquah", "Business Moving Services", "business-moving"), slug: "issaquah-business-moving" };
CITY_SERVICE_DATA["issaquah-residential-moving-services"] = { ...makeResidentialEntry("Issaquah", "issaquah"), slug: "issaquah-residential-moving-services" };
CITY_SERVICE_DATA["issaquah-storage-services"] = { ...makeStorageEntry("Issaquah", "issaquah"), slug: "issaquah-storage-services" };

// Bothell specific
CITY_SERVICE_DATA["bothell-business-moving-services"] = { ...makeBusinessEntry("Bothell", "bothell", "Business Moving Services", "business-moving"), slug: "bothell-business-moving-services" };
CITY_SERVICE_DATA["bothell-office-movers"] = { ...makeOfficeEntry("Bothell", "bothell"), slug: "bothell-office-movers" };
CITY_SERVICE_DATA["bothell-packing-services"] = { ...makePackingEntry("Bothell", "bothell"), slug: "bothell-packing-services" };
CITY_SERVICE_DATA["bothell-residential-moving"] = { ...makeResidentialEntry("Bothell", "bothell"), slug: "bothell-residential-moving" };
CITY_SERVICE_DATA["bothell-senior-moving"] = { ...makeSeniorEntry("Bothell", "bothell"), slug: "bothell-senior-moving" };
CITY_SERVICE_DATA["bothell-storage-services"] = { ...makeStorageEntry("Bothell", "bothell"), slug: "bothell-storage-services" };

// Renton specific
CITY_SERVICE_DATA["renton-apartment-moving-services"] = { ...makeApartmentEntry("Renton", "renton"), slug: "renton-apartment-moving-services" };
CITY_SERVICE_DATA["renton-business-moving-service"] = { ...makeBusinessEntry("Renton", "renton", "Business Moving Services", "business-moving"), slug: "renton-business-moving-service" };
CITY_SERVICE_DATA["renton-senior-moving"] = { ...makeSeniorEntry("Renton", "renton"), slug: "renton-senior-moving" };
CITY_SERVICE_DATA["renton-storage-services"] = { ...makeStorageEntry("Renton", "renton"), slug: "renton-storage-services" };

// North Bend specific
CITY_SERVICE_DATA["north-bend-apartment-moving"] = { ...makeApartmentEntry("North Bend", "north-bend"), slug: "north-bend-apartment-moving" };
CITY_SERVICE_DATA["north-bend-business-moving"] = { ...makeBusinessEntry("North Bend", "north-bend", "Business Moving Services", "business-moving"), slug: "north-bend-business-moving" };
CITY_SERVICE_DATA["north-bend-residential-moving-services"] = { ...makeResidentialEntry("North Bend", "north-bend"), slug: "north-bend-residential-moving-services" };
CITY_SERVICE_DATA["north-bend-senior-moving"] = { ...makeSeniorEntry("North Bend", "north-bend"), slug: "north-bend-senior-moving" };
CITY_SERVICE_DATA["north-bend-storage-services"] = { ...makeStorageEntry("North Bend", "north-bend"), slug: "north-bend-storage-services" };

// Medina & Clyde Hill storage
CITY_SERVICE_DATA["medina-storage-services"] = { ...makeStorageEntry("Medina", "medina"), slug: "medina-storage-services" };
CITY_SERVICE_DATA["clyde-hill-storage-services"] = { ...makeStorageEntry("Clyde Hill", "clyde-hill"), slug: "clyde-hill-storage-services" };
CITY_SERVICE_DATA["woodinville-storage-services"] = { ...makeStorageEntry("Woodinville", "woodinville"), slug: "woodinville-storage-services" };
CITY_SERVICE_DATA["mercer-island-storage-service"] = { ...makeStorageEntry("Mercer Island", "mercer-island"), slug: "mercer-island-storage-service" };

// Capitol Hill, Ballard, Queen Anne, Fremont storage
CITY_SERVICE_DATA["capitol-hill-storage-services"] = { ...makeStorageEntry("Capitol Hill", "capitol-hill"), slug: "capitol-hill-storage-services" };
CITY_SERVICE_DATA["capitol-hill-senior-moving"] = { ...makeSeniorEntry("Capitol Hill", "capitol-hill"), slug: "capitol-hill-senior-moving" };
CITY_SERVICE_DATA["ballard-apartment-movers"] = { ...makeApartmentEntry("Ballard", "ballard"), slug: "ballard-apartment-movers" };
CITY_SERVICE_DATA["ballard-business-moving"] = { ...makeBusinessEntry("Ballard", "ballard", "Business Moving Services", "business-moving"), slug: "ballard-business-moving" };
CITY_SERVICE_DATA["ballard-senior-moving"] = { ...makeSeniorEntry("Ballard", "ballard"), slug: "ballard-senior-moving" };
CITY_SERVICE_DATA["ballard-storage-services"] = { ...makeStorageEntry("Ballard", "ballard"), slug: "ballard-storage-services" };
CITY_SERVICE_DATA["queen-anne-storage-services"] = { ...makeStorageEntry("Queen Anne", "queen-anne"), slug: "queen-anne-storage-services" };

// Lynnwood (uses lynnwood-moving-services as city slug)
CITY_SERVICE_DATA["lynnwood-moving-services"] = { ...makeResidentialEntry("Lynnwood", "lynnwood"), slug: "lynnwood-moving-services" };

// ---------------------------------------------------------------------------
// Missing city×service pages — added for full URL parity with live site
// ---------------------------------------------------------------------------
// Bellevue commercial + URL aliases
CITY_SERVICE_DATA["bellevue-commercial-moving"] = { ...makeBusinessEntry("Bellevue", "bellevue", "Commercial Moving", "commercial-moving"), slug: "bellevue-commercial-moving" };
// Kirkland missing pages
CITY_SERVICE_DATA["kirkland-commercial-moving"] = { ...makeBusinessEntry("Kirkland", "kirkland", "Commercial Moving", "commercial-moving"), slug: "kirkland-commercial-moving" };
CITY_SERVICE_DATA["kirkland-labor-only-moving"] = { ...makeLaborOnlyEntry("Kirkland", "kirkland"), slug: "kirkland-labor-only-moving" };
CITY_SERVICE_DATA["kirkland-moving-supplies"] = { ...makeMovingSuppliesEntry("Kirkland", "kirkland"), slug: "kirkland-moving-supplies" };
CITY_SERVICE_DATA["kirkland-unpacking-services"] = { ...makeUnpackingEntry("Kirkland", "kirkland"), slug: "kirkland-unpacking-services" };
CITY_SERVICE_DATA["kirkland-office-moving"] = { ...makeOfficeEntry("Kirkland", "kirkland"), slug: "kirkland-office-moving" };
// Redmond commercial
CITY_SERVICE_DATA["redmond-commercial-moving"] = { ...makeBusinessEntry("Redmond", "redmond", "Commercial Moving", "commercial-moving"), slug: "redmond-commercial-moving" };
// Seattle commercial + URL aliases
CITY_SERVICE_DATA["seattle-commercial-moving"] = { ...makeBusinessEntry("Seattle", "seattle", "Commercial Moving", "commercial-moving"), slug: "seattle-commercial-moving" };

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
interface CityServicePageProps {
  slug: string;
}

export default function CityServicePage({ slug }: CityServicePageProps) {
  const data = CITY_SERVICE_DATA[slug];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (!data) return;
    document.title = data.metaTitle;
    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", data.metaDescription);
    setMeta("og:title", data.metaTitle, true);
    setMeta("og:description", data.metaDescription, true);
    setMeta("og:type", "website", true);
    setMeta("og:url", `https://onthegomoving.com/${data.slug}/`, true);
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = `https://onthegomoving.com/${data.slug}/`;
    // Schema
    const schemaId = "city-service-schema";
    document.getElementById(schemaId)?.remove();
    const script = document.createElement("script");
    script.id = schemaId;
    script.type = "application/ld+json";
    script.text = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": ["MovingCompany", "LocalBusiness"],
        name: COMPANY.name,
        url: `https://onthegomoving.com/${data.slug}/`,
        telephone: COMPANY.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: "4024 13th Ave W",
          addressLocality: "Redmond",
          addressRegion: "WA",
          postalCode: "98052",
          addressCountry: "US",
        },
        areaServed: { "@type": "City", name: data.city, containedInPlace: { "@type": "State", name: "Washington" } },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "1562", bestRating: "5" },
        priceRange: "$$",
        openingHours: ["Mo-Su 07:00-19:00"],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://onthegomoving.com/" },
          { "@type": "ListItem", position: 2, name: `${data.city} Movers`, item: `https://onthegomoving.com/${data.citySlug}-movers/` },
          { "@type": "ListItem", position: 3, name: data.service, item: `https://onthegomoving.com/${data.slug}/` },
        ],
      },
    ]);
    document.head.appendChild(script);
    return () => { document.getElementById(schemaId)?.remove(); };
  }, [data]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h1>
          <a href="/" className="text-brand-green hover:underline">Return Home</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ── HERO ── */}
      <section
        className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(15,40,10,0.90) 55%, rgba(15,40,10,0.60) 100%), url(${data.heroImage || BRAND_IMAGES.threeCrewRampLoading})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-green-300 text-sm mb-6">
            <a href="/"><span className="hover:text-white cursor-pointer transition-colors">Home</span></a>
            <span className="text-green-500">/</span>
            <a href={`/${data.citySlug}-movers/`}><span className="hover:text-white cursor-pointer transition-colors">{data.city} Movers</span></a>
            <span className="text-green-500">/</span>
            <span className="text-white">{data.service}</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <MapPin className="w-3 h-3" />
              {data.city}, WA
            </div>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-5">
              {data.heroTagline}
            </h1>
            <p className="text-green-100 text-lg lg:text-xl mb-8 max-w-2xl">
              {data.heroSubtitle}
            </p>
            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1.5">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />)}
                <span className="text-white text-xs font-semibold ml-1">4.8 (1,562 reviews)</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1.5">
                <Shield className="w-3.5 h-3.5 text-brand-gold" />
                <span className="text-white text-xs font-semibold">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-brand-gold" />
                <span className="text-white text-xs font-semibold">Serving {data.city} since 2009</span>
              </div>
            </div>
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={COMPANY.phoneHref}
                className="inline-flex items-center justify-center gap-3 bg-brand-gold hover:bg-brand-gold-dark text-brand-forest font-bold text-lg px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call {COMPANY.phone}
              </a>
              <a href="/contact-us/">
                <span className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all cursor-pointer">
                  Get Free Quote
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT + SIDEBAR ── */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Intro */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="font-display text-2xl font-bold text-brand-forest mb-4">
                  {data.service} in {data.city}
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">{data.intro}</p>
              </div>

              {/* Why Us */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="font-display text-2xl font-bold text-brand-forest mb-4">
                  Why Choose On The Go Moving in {data.city}?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">{data.whyUs}</p>
                <ul className="space-y-3">
                  {data.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What to Expect */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="font-display text-2xl font-bold text-brand-forest mb-6">
                  What to Expect
                </h2>
                <div className="space-y-4">
                  {data.whatToExpect.map((step, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {i + 1}
                      </div>
                      <p className="text-gray-700 pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="font-display text-2xl font-bold text-brand-forest mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {data.faqs.map((faq, i) => (
                    <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-brand-forest pr-4">{faq.q}</span>
                        {openFaq === i ? (
                          <ChevronUp className="w-5 h-5 text-brand-green flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        )}
                      </button>
                      {openFaq === i && (
                        <div className="px-5 pb-5">
                          <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quote CTA */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sticky top-24">
                <h3 className="font-display font-bold text-xl mb-1 text-brand-forest">Get a Free Quote</h3>
                <p className="text-gray-500 text-sm mb-4">
                  Free, no-obligation estimate. We respond within 1 hour.
                </p>
                <QuoteForm variant="inline" defaultFreeStorage={data.serviceSlug === "storage-services" || data.serviceSlug === "warehousing-and-logistics"} />
                <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                  <div className="flex items-center gap-2 text-gray-500 text-xs">
                    <Clock className="w-3.5 h-3.5" />
                    Every day: 7:00 AM – 7:00 PM
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-xs">
                    <Shield className="w-3.5 h-3.5" />
                    Licensed HG-064180 · USDOT# 2120054
                  </div>
                </div>
              </div>

              {/* Related services */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <h3 className="font-display font-bold text-brand-forest text-lg mb-4">Related Services</h3>
                <div className="space-y-2">
                  {data.relatedServices.map(([label, href], i) => (
                    <a key={i} href={href}>
                      <span className="flex items-center gap-2 text-brand-green hover:text-brand-forest text-sm font-medium py-1.5 border-b border-gray-100 last:border-0 cursor-pointer transition-colors">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" />
                        {label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Trust */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <h3 className="font-display font-bold text-brand-forest text-lg mb-4">Why Trust Us</h3>
                <div className="space-y-3">
                  {[
                    ["4.8★ rating", "1,562+ verified reviews"],
                    ["Licensed & Insured", "WA HG-064180 | USDOT# 2120054"],
                    ["Serving since 2009", "15+ years in Greater Seattle"],
                    ["No hidden fees", "Flat-rate pricing always"],
                  ].map(([title, sub], i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-brand-forest text-sm">{title}</p>
                        <p className="text-gray-500 text-xs">{sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="font-display text-3xl lg:text-4xl font-black mb-4 text-brand-forest">
              Ready for {data.service} in {data.city}?
            </h2>
            <p className="text-gray-500 text-lg">
              Get your free, no-obligation quote in minutes. We respond within 1 hour.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <QuoteForm variant="inline" defaultFreeStorage={data.serviceSlug === "storage-services" || data.serviceSlug === "warehousing-and-logistics"} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
