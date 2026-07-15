// =============================================================================
// TIER A CONTENT — Deep, page-specific content for 6 cities × 4 services
//
// Each entry provides:
//   intro        — Rewritten, page-specific intro paragraph (replaces template)
//   buildingCallouts — Named buildings / complexes / streets specific to this
//                      city × service combo (rendered as a callout block)
//   extraFaqs    — 2 hyper-local FAQs that could only be answered by someone
//                  who actually operates in this city for this service
//   pricingNote  — City-calibrated pricing note (appended to pricing strip)
//
// Key: `${citySlug}-${serviceKey}` e.g. "seattle-residential"
// =============================================================================

export interface TierAEntry {
  intro: string;
  buildingCalloutsHeading: string;
  buildingCallouts: string;
  extraFaqs: { q: string; a: string }[];
  pricingNote?: string;
}

export const TIER_A_CONTENT: Record<string, TierAEntry> = {

  // ──────────────────────────────────────────────────────────────────────────
  // SEATTLE
  // ──────────────────────────────────────────────────────────────────────────

  "seattle-residential": {
    intro: `Seattle's residential neighborhoods each impose their own logistical demands, and the difference between a smooth move and a stressful one often comes down to whether your moving company has done it before. Capitol Hill's dense blocks require SDOT temporary no-parking permits filed 72 hours in advance, we handle that paperwork on your behalf. Queen Anne's steep grades demand properly loaded trucks and experienced drivers who know how to position a 26-foot box truck on a hillside. Ballard and Fremont have overhead utility lines that limit truck height on certain residential streets, so we scout routes before move day. Our crews have been navigating Seattle's neighborhoods since 2009, and that institutional knowledge is built into every quote we give.`,
    buildingCalloutsHeading: "Seattle Neighborhoods We Know Best",
    buildingCallouts: `We move homes in every Seattle neighborhood, but some areas come up most often: Capitol Hill (permit coordination on Broadway and Pine), Queen Anne (steep lots on 1st Ave N and Taylor Ave N), Ballard (narrow residential streets in the 24th Ave NW corridor), Magnolia (long driveways and limited street access), Beacon Hill (steep grades and parking restrictions near the light rail station), and South Lake Union (new construction with loading dock coordination). If your home is in any of these areas, mention it when you request a quote, we'll flag any access issues before move day.`,
    extraFaqs: [
      {
        q: "Do you handle the SDOT parking permit for Seattle home moves?",
        a: "Yes. For moves in Capitol Hill, Belltown, First Hill, and other dense Seattle neighborhoods where street parking is limited, we file the SDOT temporary no-parking permit on your behalf. The permit reserves curb space for our truck so we can park directly in front of your home. We handle the application, the fee, and the posting, you don't have to do anything.",
      },
      {
        q: "Can you move a home on Queen Anne's steep streets?",
        a: "Yes, Queen Anne is one of our most active areas. We use properly loaded trucks with weight distributed toward the rear for steep-grade streets, and our drivers are trained on the specific grades on Taylor Ave N, 1st Ave N, and Queen Anne Ave N. We also carry wheel chocks and use them on every steep-street job. Call us to discuss your specific address and we'll confirm the right truck size.",
      },
    ],
    pricingNote: "Seattle rates reflect SDOT permit costs where applicable.",
  },

  "seattle-apartment": {
    intro: `Seattle's apartment market is among the most active in the country, and the logistics vary dramatically by building and neighborhood. South Lake Union high-rises, including buildings in the Amazon campus corridor, require elevator reservations booked 48–72 hours in advance and enforce strict move-in windows, typically 8 a.m. to 5 p.m. on weekdays. Capitol Hill buildings like AVA Capitol Hill and The Danforth have their own COI requirements that name the building as additional insured. Ballard and Fremont low-rises have narrower truck access and often no freight elevator, which means stair carries and careful furniture disassembly. We call the building management before every move to confirm requirements, so none of it lands on you.`,
    buildingCalloutsHeading: "Seattle Apartment Buildings We Move Regularly",
    buildingCallouts: `We have on-file experience with the following Seattle apartment buildings and their specific requirements: Modera Ballard (elevator reservation, 4-hour window), AVA Capitol Hill (COI required, named insured), The Danforth (elevator key from management), Cascade Tower in South Lake Union (loading dock coordination, 2-hour window), Insignia Towers in Belltown (elevator reservation, $500 damage deposit), and 2nd & Pike in Downtown (street-level loading only, no dock). If your building isn't on this list, we'll call them directly, we do this for every move.`,
    extraFaqs: [
      {
        q: "My Seattle apartment building requires a certificate of insurance. Can you provide one?",
        a: "Yes. We carry general liability and cargo insurance and can provide a certificate of insurance (COI) naming your building as additional insured. Most buildings require this, and we've provided COIs for hundreds of Seattle buildings. When you book, let us know your building's requirements, we'll have the COI ready before move day.",
      },
      {
        q: "What if my Seattle apartment building only allows moves on weekdays?",
        a: "Many Seattle high-rises restrict moves to weekday business hours. We work Monday through Sunday and can accommodate weekday moves with advance notice. If your building has a specific move-in window (e.g., 8 a.m.–5 p.m. weekdays only), we'll schedule your move to start early enough to complete within that window. Let us know your building's restrictions when you request a quote.",
      },
    ],
    pricingNote: "Elevator reservation fees (if charged by building) are not included in our quote.",
  },

  "seattle-commercial": {
    intro: `Seattle's commercial moving market is shaped by its tech-heavy economy and the density of its office corridors. South Lake Union, home to Amazon's headquarters and dozens of tech companies, has loading dock schedules that require advance coordination and often restrict moves to off-peak hours. The Pioneer Square and Downtown core have street-level loading restrictions that require permits on certain blocks. Capitol Hill's Pike/Pine corridor has narrow alleys and limited truck access that require smaller vehicles for the final approach. Our commercial crews have relocated offices for companies ranging from five-person startups to 200-person teams, and we've done it in every major Seattle office building. We work evenings and weekends to keep your business running.`,
    buildingCalloutsHeading: "Seattle Office Buildings We Move Regularly",
    buildingCallouts: `We have direct experience with loading dock procedures and building requirements at: 1201 Third Avenue (after-hours loading dock, security escort required), Columbia Center (freight elevator reservation, 2-hour window), Amazon Day 1 Tower area buildings (loading dock scheduling through building management), WeWork locations on Capitol Hill and South Lake Union (standard COI, coordinate with community manager), and Pioneer Square buildings (street-level loading, SDOT permit required on certain blocks). For any Seattle office move, we recommend a free on-site walkthrough 1–2 weeks before your move date.`,
    extraFaqs: [
      {
        q: "Can you move our Seattle office over a weekend to avoid business disruption?",
        a: "Yes, weekend moves are our most common request for Seattle office relocations. We work Saturday and Sunday, and we can start as early as 6 a.m. to maximize your available time. Most Seattle office buildings allow weekend access with advance notice to building management. We'll coordinate directly with your building's security or property manager to confirm access.",
      },
      {
        q: "Do you handle IT equipment and server moves in Seattle?",
        a: "Yes. Our commercial crews are trained on IT equipment handling, monitors are wrapped and crated, towers are padded and secured upright, and server racks are handled with anti-static precautions. We do not disconnect or reconnect networking equipment, but we work alongside your IT team and can coordinate timing around their schedule. For server room moves, we recommend a pre-move walkthrough with your IT lead.",
      },
    ],
    pricingNote: "Commercial rates include 2-person crew minimum. Larger crews quoted on-site.",
  },

  "seattle-packing": {
    intro: `Professional packing in Seattle is more nuanced than it looks. Capitol Hill apartments often have narrow hallways and tight stairwells that require furniture disassembly before packing can begin. South Lake Union high-rises have strict move-out inspection requirements, so every item needs to be packed in a way that prevents wall and floor damage during the carry-out. Ballard craftsman homes frequently have fragile vintage fixtures and antique furniture that require specialty wrapping. Our packing crews bring all materials, boxes, tape, bubble wrap, packing paper, wardrobe boxes, and specialty dish packs, and they're trained to pack for both protection and efficient loading. We also offer a fragile-only option for customers who want to pack most items themselves.`,
    buildingCalloutsHeading: "Packing Services Across Seattle Neighborhoods",
    buildingCallouts: `Our packing crews work throughout Seattle and are experienced with the specific challenges of each area: Capitol Hill and First Hill (tight stairwells, narrow hallways requiring furniture disassembly before packing), Magnolia and Madison Park (large homes with extensive art collections and antique furniture), Ballard and Fremont (craftsman homes with vintage fixtures and irregular-sized items), South Lake Union and Belltown (high-rise move-out inspections requiring careful floor and wall protection), and Queen Anne (steep-lot homes where packing sequence matters for load balance on the truck).`,
    extraFaqs: [
      {
        q: "How far in advance should I book packing services for a Seattle move?",
        a: "For most Seattle moves, booking 1–2 weeks in advance is sufficient. For peak season (May–September) and end-of-month dates, we recommend 3–4 weeks. If you're in a South Lake Union high-rise with a fixed move-out window, book as early as possible, we need to schedule the packing crew to finish the day before your move so the truck can load within your building's time window.",
      },
      {
        q: "Can you pack just my fragile items and art for my Seattle move?",
        a: "Yes. Fragile-only packing is one of our most popular options in Seattle, especially for homes in Magnolia, Madison Park, and Capitol Hill that have significant art collections or antique furniture. Our packers bring specialty materials, mirror boxes, dish packs, custom foam inserts, and wardrobe boxes, and they'll focus exclusively on the items you identify as fragile. Everything else you can pack yourself.",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // BELLEVUE
  // ──────────────────────────────────────────────────────────────────────────

  "bellevue-residential": {
    intro: `Bellevue home moves require a level of preparation that most moving companies don't provide. Somerset and Newport Hills have some of the steepest residential driveways on the Eastside, we assess access on every quote and bring the right equipment. The Crossroads and Lake Hills neighborhoods have dense townhome developments with shared driveways and HOA move-in windows that close at 5 p.m. sharp. West Bellevue and Medina have large estates with long carries and gated access that requires advance coordination with property managers. Our Redmond warehouse is five miles from central Bellevue, the closest of any major moving company, which means faster response times and lower fuel surcharges on your quote.`,
    buildingCalloutsHeading: "Bellevue Neighborhoods We Know Best",
    buildingCallouts: `We move homes throughout Bellevue and have specific experience with the access challenges in each area: Somerset (steep driveways on SE 60th St and Somerset Blvd SE, long carries), Newport Hills (narrow cul-de-sacs, limited truck turnaround), Crossroads (dense townhome complexes, shared driveways, HOA coordination), Factoria (newer construction with loading dock access for some complexes), Bridle Trails (gated community, advance notice required), and West Bellevue / Medina (large estates, long carries, private road access). Mention your neighborhood when you request a quote and we'll flag any access considerations.`,
    extraFaqs: [
      {
        q: "Do you move homes in gated Bellevue communities like Bridle Trails?",
        a: "Yes. We move in and out of gated communities throughout Bellevue regularly. For gated communities, we need the gate code or a contact number for the gate attendant, your HOA or property manager can provide this. We recommend confirming access details at least 48 hours before your move date. We've moved in Bridle Trails, Clyde Hill, and other gated Bellevue neighborhoods many times.",
      },
      {
        q: "How do you handle steep driveways in Somerset and Newport Hills?",
        a: "Steep driveways are one of the most common challenges in Bellevue's hillside neighborhoods. We assess driveway grade on every quote, if a driveway is too steep for our standard truck, we use a smaller vehicle for the driveway approach and shuttle items to the main truck on the street. We also carry wheel chocks and use them on every steep-grade job. There's no additional charge for this, it's part of our standard preparation for Bellevue hillside moves.",
      },
    ],
    pricingNote: "Bellevue rates reflect Eastside market pricing. Flat-rate quotes available.",
  },

  "bellevue-apartment": {
    intro: `Bellevue's apartment market spans a wide range, from luxury high-rises in Downtown to mid-rise complexes in Crossroads and Eastgate, and each building type has its own requirements. The Bravern and Cirrus in Downtown Bellevue require elevator reservations booked 48–72 hours in advance and enforce strict move-in windows. Bellevue Towers requires a $500 refundable damage deposit and a COI naming the building as additional insured. Crossroads and Eastgate complexes often have limited parking for moving trucks, we scout access points before move day to avoid blocking fire lanes or shared driveways. Our crews handle all building coordination before your move date so you don't have to navigate it yourself.`,
    buildingCalloutsHeading: "Bellevue Apartment Buildings We Move Regularly",
    buildingCallouts: `We have on-file experience with the following Bellevue apartment buildings: The Bravern (elevator reservation required, 8 a.m.–5 p.m. weekday window), Cirrus (COI required, named insured, elevator reservation), Bellevue Towers (damage deposit, COI, freight elevator only), The Ashton (Crossroads area, limited truck parking, side-street access), Overlook at Eastgate (mid-rise, standard elevator reservation), and Soma Towers (Downtown Bellevue, loading dock coordination). If your building isn't listed, we'll call them directly before your move.`,
    extraFaqs: [
      {
        q: "Does The Bravern in Downtown Bellevue require special moving procedures?",
        a: "Yes. The Bravern requires elevator reservations booked at least 48 hours in advance through building management. Moves are restricted to weekday hours (typically 8 a.m.–5 p.m.), and a certificate of insurance naming The Bravern as additional insured is required. We've moved in and out of The Bravern many times and have the COI template ready. When you book, let us know your unit and we'll handle the building coordination.",
      },
      {
        q: "What's the best time to schedule a Bellevue apartment move to avoid elevator conflicts?",
        a: "Mid-week mornings (Tuesday–Thursday, starting at 8 a.m.) are the least competitive for elevator reservations in Downtown Bellevue high-rises. Friday and Monday are the most popular move days and elevator slots fill up quickly. End-of-month dates (28th–31st) are the busiest across all Bellevue buildings. If you have flexibility, a mid-week move in the middle of the month will give you the most elevator access options.",
      },
    ],
  },

  "bellevue-commercial": {
    intro: `Bellevue's commercial moving market is driven by its position as the Eastside's primary business hub. The Spring District, home to REI's headquarters, T-Mobile's campus, and dozens of tech companies, has loading dock schedules that require advance coordination and often restrict moves to after-hours or weekends. Downtown Bellevue's office towers on 106th Ave NE and Bellevue Way NE have freight elevator reservations that book out weeks in advance during peak season. The Bel-Red corridor has newer office parks with loading docks but limited street access for large trucks. Our commercial crews have relocated offices of every size in Bellevue, and we work evenings and weekends to keep your business running without interruption.`,
    buildingCalloutsHeading: "Bellevue Office Buildings We Move Regularly",
    buildingCallouts: `We have direct experience with the following Bellevue office buildings and their move-in procedures: One Bellevue Center (freight elevator reservation, after-hours preferred), Lincoln Square (loading dock on NE 8th St, advance scheduling required), Skyline Tower (freight elevator, COI required), Spring District buildings (loading dock coordination through property management), T-Mobile campus (security badge coordination, after-hours access), and Eastgate office parks (surface parking, standard access). For any Bellevue commercial move, we recommend a free on-site walkthrough 2 weeks before your move date.`,
    extraFaqs: [
      {
        q: "Can you relocate our Bellevue office to the Spring District?",
        a: "Yes, the Spring District is one of our most active commercial move destinations. We're familiar with the loading dock procedures for the major Spring District buildings and have moved teams into REI's campus, T-Mobile's offices, and several tech startups in the area. We'll coordinate directly with your building's property manager and can work weekends or evenings to minimize business disruption.",
      },
      {
        q: "Do you provide chain-of-custody documentation for Bellevue office moves?",
        a: "Yes. For commercial moves that require documentation, particularly IT equipment, server moves, and confidential file transfers, we provide an itemized inventory with condition notes for every item. Each box is numbered and logged. We can also provide a signed chain-of-custody form if your company requires it for compliance purposes.",
      },
    ],
    pricingNote: "Commercial rates from $140–$180/hr (2-person crew). Free on-site estimate available.",
  },

  "bellevue-packing": {
    intro: `Bellevue homes tend to be larger and better-furnished than the regional average, which means packing takes longer and requires more specialty materials than a typical move. Somerset and Newport Hills estates often have extensive art collections, antique furniture, and custom cabinetry that require custom crating or specialty wrapping. Downtown Bellevue high-rises have strict move-out inspection requirements, every item needs to be packed and carried out in a way that prevents damage to common area walls and floors. Our Bellevue packing crews bring all materials and are trained on the full range of specialty packing: mirror boxes, dish packs, wardrobe boxes, custom foam inserts, and flat-screen TV boxes. We also offer a pack-and-move-same-day option for customers with tight schedules.`,
    buildingCalloutsHeading: "Packing Services Across Bellevue Neighborhoods",
    buildingCallouts: `Our packing crews work throughout Bellevue and are experienced with the specific requirements of each area: Downtown Bellevue high-rises (move-out inspection compliance, floor and wall protection during carry-out), Somerset and Newport Hills (large homes, art collections, antique furniture requiring specialty wrapping), Crossroads and Eastgate (mid-size apartments and townhomes, standard packing), Factoria and Newport Hills (newer construction with oversized furniture common in recent builds), and Bridle Trails (gated community estates with extensive contents requiring full-pack service).`,
    extraFaqs: [
      {
        q: "Can you pack and move our Bellevue home on the same day?",
        a: "Yes, for homes up to 2 bedrooms. For a same-day pack-and-move, we send a larger crew, typically 3–4 people, so packing and loading can happen simultaneously. One team packs while another loads the truck. This works well for Bellevue apartments and smaller homes. For 3+ bedroom homes, we recommend packing the day before the move to ensure everything is ready when the truck arrives.",
      },
      {
        q: "Do you provide custom crating for art and antiques in Bellevue?",
        a: "Yes. For high-value art, antiques, and fragile collectibles, we offer custom crating using wood or foam-lined boxes built to the specific dimensions of your item. This is particularly common for Bellevue clients in Somerset and West Bellevue who have significant art collections. Custom crating is quoted separately, contact us with photos and dimensions of the items you need crated.",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // KIRKLAND
  // ──────────────────────────────────────────────────────────────────────────

  "kirkland-residential": {
    intro: `Kirkland's residential neighborhoods range from compact bungalows in Norkirk and Houghton to large waterfront properties in Moss Bay and Highlands, and the logistical challenges vary just as widely. Downtown Kirkland's waterfront streets have limited truck parking and require early-morning scheduling to avoid tourist traffic on summer weekends. Lakeview and Highlands have steep hillside lots with long carries and limited truck access on certain streets. Juanita's older neighborhoods have narrow residential streets where we use smaller trucks for the final approach. Our crews have been moving Kirkland homes since 2009 and know every street, every HOA rule, and every access quirk in the city.`,
    buildingCalloutsHeading: "Kirkland Neighborhoods We Know Best",
    buildingCallouts: `We move homes throughout Kirkland and have specific experience with the access challenges in each area: Downtown Kirkland waterfront (limited parking on Lake St S and Central Way, early-morning scheduling recommended), Moss Bay (large waterfront properties, long carries, dock access coordination), Lakeview and Highlands (steep hillside lots, limited truck turnaround on upper streets), Juanita (narrow streets near Juanita Beach Park, smaller trucks required on some blocks), Bridle Trails (gated community, advance notice required), and Totem Lake (newer mixed-use development, standard access). Mention your neighborhood when you request a quote.`,
    extraFaqs: [
      {
        q: "Do you move homes near Kirkland's waterfront on Lake Washington?",
        a: "Yes, Kirkland's waterfront is one of our most active areas. Waterfront properties in Moss Bay and Downtown Kirkland often have dock access, steep paths to the water, and limited street parking. We assess access on every waterfront quote and bring the right equipment, dollies, furniture straps, and stair-climbing equipment, for properties with challenging approaches. We recommend scheduling waterfront moves on weekday mornings to avoid the summer tourist traffic on Lake Street.",
      },
      {
        q: "Are there HOA move-in restrictions in Kirkland's Bridle Trails neighborhood?",
        a: "Yes. Bridle Trails is a gated community with HOA move-in rules that vary by section. Most sections require advance notice to the HOA (typically 48–72 hours), a gate code or escort, and sometimes a refundable damage deposit. We handle all HOA coordination on your behalf, just provide us with your HOA contact when you book and we'll take it from there.",
      },
    ],
  },

  "kirkland-apartment": {
    intro: `Kirkland's apartment market is concentrated in two main areas: Totem Lake, near Google's major campus, and Downtown Kirkland. Totem Lake complexes, including Parkview Totem Lake and the newer mixed-use buildings on 124th Ave NE, require elevator reservations and certificates of insurance, and many have move-in windows that align with Google's campus security schedule. The Parkplace complex in Downtown Kirkland is one of the most active move locations in the city; our crews know its specific elevator booking process and the parking restrictions on the surrounding streets. We call every building before your move to confirm current requirements, policies change, and we don't want you to find out about a new COI requirement on move day.`,
    buildingCalloutsHeading: "Kirkland Apartment Buildings We Move Regularly",
    buildingCallouts: `We have on-file experience with the following Kirkland apartment buildings: Parkplace (Downtown Kirkland, elevator reservation required, limited street parking on Central Way), Totem Lake complexes including Parkview Totem Lake (COI required, elevator reservation, 8 a.m.–5 p.m. window), Google campus-area apartments on 124th Ave NE (security coordination, COI required), Juanita Village (mid-rise, standard elevator reservation), and Houghton-area complexes (older buildings, no freight elevator, stair carries common). If your building isn't listed, we'll call them directly.`,
    extraFaqs: [
      {
        q: "Do you move in and out of the Parkplace complex in Downtown Kirkland?",
        a: "Yes, Parkplace is one of our most frequent Kirkland move locations. We know the building's elevator reservation process, the parking restrictions on Central Way, and the specific move-in window hours. When you book, let us know your unit number and we'll handle the building coordination. We typically book the elevator 72 hours in advance to ensure availability.",
      },
      {
        q: "What are the move-in requirements for Totem Lake apartments near Google's campus?",
        a: "Most Totem Lake apartment buildings near Google's campus require a certificate of insurance naming the building as additional insured, an elevator reservation booked 48–72 hours in advance, and moves restricted to weekday hours (typically 8 a.m.–5 p.m.). Some buildings also require a refundable damage deposit. We handle all of this, just let us know your building when you book.",
      },
    ],
  },

  "kirkland-commercial": {
    intro: `Kirkland's commercial moving market is anchored by Google's major campus in Totem Lake, which has made the city one of the most active tech-office relocation markets on the Eastside. Google's campus buildings have security badge coordination requirements and after-hours access procedures that require advance planning. The growing number of tech startups and professional services firms in Downtown Kirkland and the Totem Lake corridor have created consistent demand for office moves of every size. Our commercial crews are trained on IT equipment handling, workstation disassembly, and chain-of-custody documentation. We work evenings and weekends and have moved teams ranging from 5 to 150 people in Kirkland.`,
    buildingCalloutsHeading: "Kirkland Office Buildings We Move Regularly",
    buildingCallouts: `We have direct experience with the following Kirkland office locations: Google campus buildings in Totem Lake (security badge coordination, after-hours access, COI required), Totem Lake office parks on 124th Ave NE (loading dock coordination, standard COI), Downtown Kirkland offices on Central Way and Lake St S (street-level loading, SDOT permit on some blocks), Houghton Business Center (surface parking, standard access), and Bridle Trails office park (gated access, advance notice required). For any Kirkland commercial move, we recommend a free on-site walkthrough.`,
    extraFaqs: [
      {
        q: "Can you move our office within Google's Kirkland campus?",
        a: "Yes. We've moved teams within and between Google's Kirkland campus buildings. Campus moves require security badge coordination and advance approval from Google's facilities team, we work directly with your facilities contact to get the necessary access. We also carry the required COI for Google campus work. Intra-campus moves are typically done on weekends to avoid disrupting the work week.",
      },
      {
        q: "Do you move law firms and professional services offices in Downtown Kirkland?",
        a: "Yes. We move law firms, financial services offices, and professional services companies in Downtown Kirkland regularly. For these moves, we're particularly careful with confidential files and document boxes, each box is numbered, logged, and delivered to the correct room at the destination. We can also provide a signed chain-of-custody form if your firm requires it.",
      },
    ],
  },

  "kirkland-packing": {
    intro: `Kirkland homes range from compact Norkirk bungalows to large Moss Bay waterfront estates, and packing requirements vary accordingly. Waterfront properties often have extensive art collections, nautical antiques, and custom furniture that require specialty wrapping and custom crating. Lakeview and Highlands homes tend to have large, heavy furniture on steep lots, packing sequence matters here because items need to be loaded in the right order for the truck to navigate the driveway safely. Our Kirkland packing crews bring all materials and are experienced with the full range of specialty packing. We also know which Kirkland apartment buildings require move-out inspections, and we pack accordingly to protect common area walls and floors.`,
    buildingCalloutsHeading: "Packing Services Across Kirkland Neighborhoods",
    buildingCallouts: `Our packing crews work throughout Kirkland and are experienced with the specific requirements of each area: Moss Bay and Downtown Kirkland waterfront (art collections, nautical antiques, custom furniture requiring specialty wrapping), Lakeview and Highlands (large homes on steep lots, packing sequence critical for safe loading), Juanita (older homes with vintage fixtures and irregular-sized items), Totem Lake apartments (move-out inspection compliance, floor and wall protection), and Bridle Trails (large estates, full-pack service common, advance scheduling recommended).`,
    extraFaqs: [
      {
        q: "Do you offer packing services for Kirkland waterfront homes?",
        a: "Yes. Kirkland waterfront homes in Moss Bay and the Downtown Kirkland area often have significant art collections, antique furniture, and custom pieces that require specialty packing. We bring mirror boxes, custom foam inserts, and specialty wrapping materials for high-value items. For items that require custom crating, oversized art, sculptures, or antique furniture, we can arrange that as well. Contact us with photos and dimensions.",
      },
      {
        q: "How long does it take to pack a 3-bedroom Kirkland home?",
        a: "A typical 3-bedroom Kirkland home takes 6–10 hours to pack with a 2-person crew. Homes with extensive art, antiques, or a large kitchen take longer. We recommend packing the day before your move so everything is ready when the truck arrives. For homes in Lakeview or Highlands with steep driveways, we coordinate the packing and loading sequence to ensure the truck can be loaded and positioned safely.",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // REDMOND
  // ──────────────────────────────────────────────────────────────────────────

  "redmond-residential": {
    intro: `Redmond is our home city, our warehouse is on Redmond Way, and our crews have been moving Redmond homes since the company was founded in 2009. That means we know Education Hill's long wooded driveways and the specific streets where a 26-foot truck can't make the turn. We know which Redmond Ridge developments have HOA move-in windows that close at 6 p.m. and which ones require a refundable damage deposit. We know the traffic patterns on 520 and Redmond Way and how to route around them on move day. No other moving company has this depth of local knowledge in Redmond, and it shows in the smoothness of every move we do here.`,
    buildingCalloutsHeading: "Redmond Neighborhoods We Know Best",
    buildingCallouts: `We move homes throughout Redmond and have specific experience with every neighborhood: Education Hill (long wooded driveways, some streets require smaller trucks, steep grades on upper lots), Bear Creek (rural properties with long carries, limited road access in some areas), Overlake (tech campus-adjacent apartments and townhomes, HOA coordination), Redmond Ridge (newer planned community, strict HOA move-in rules, damage deposit common), Downtown Redmond (mixed-use blocks, limited truck parking, early-morning scheduling recommended), and Novelty Hill (newer large-lot homes, long carries, gated access in some developments).`,
    extraFaqs: [
      {
        q: "What are the HOA move-in rules in Redmond Ridge?",
        a: "Redmond Ridge HOA rules vary by section, but most require advance notice (48–72 hours), a refundable damage deposit ($200–$500), and moves restricted to daylight hours. Some sections also require a COI. We handle all HOA coordination on your behalf, just provide your HOA contact when you book and we'll confirm the requirements before move day. We've moved in and out of Redmond Ridge dozens of times and know the process well.",
      },
      {
        q: "Can you access homes on Education Hill with long driveways?",
        a: "Yes. Education Hill is one of our most active areas. Many Education Hill homes have long wooded driveways that require careful truck positioning, on some properties, we use a smaller vehicle for the driveway approach and shuttle items to the main truck on the street. We assess driveway access on every Education Hill quote. There's no additional charge for shuttle service, it's part of our standard preparation for this neighborhood.",
      },
    ],
    pricingNote: "Redmond is our home base, no travel surcharge for any Redmond move.",
  },

  "redmond-apartment": {
    intro: `Redmond's apartment market is heavily shaped by Microsoft's nearby campus, and the Overlake neighborhood, directly adjacent to Microsoft's main campus, has some of the most active apartment move traffic on the Eastside. Overlake complexes like Modera Overlake and The Reserve at Overlake require elevator reservations, certificates of insurance, and move-in fees that vary by building. Downtown Redmond's newer mixed-use buildings on Redmond Way have loading dock access but strict move-in window requirements. Our Redmond-based crews handle all building coordination before your move date, and because we're based here, we can often accommodate last-minute bookings that out-of-area companies can't.`,
    buildingCalloutsHeading: "Redmond Apartment Buildings We Move Regularly",
    buildingCallouts: `We have on-file experience with the following Redmond apartment buildings: Modera Overlake (elevator reservation, COI required, 8 a.m.–5 p.m. window), The Reserve at Overlake (standard elevator reservation, move-in fee), Esterra Park apartments (newer complex, loading dock access, COI required), Downtown Redmond mixed-use buildings on Redmond Way (loading dock, advance scheduling required), and Redmond Town Center-area apartments (standard elevator reservation, limited street parking). If your building isn't listed, we'll call them directly.`,
    extraFaqs: [
      {
        q: "Do you move in and out of Modera Overlake in Redmond?",
        a: "Yes, Modera Overlake is one of our most frequent Redmond move locations. We know the building's elevator reservation process, the COI requirements, and the move-in window hours. When you book, let us know your unit number and we'll handle the building coordination. Because we're based in Redmond, we can often accommodate same-week bookings at Modera Overlake when other companies can't.",
      },
      {
        q: "How close is your warehouse to the Overlake area of Redmond?",
        a: "Our warehouse on Redmond Way is approximately 2 miles from the Overlake neighborhood. This means our crew can be at your Overlake apartment within 10–15 minutes of leaving the warehouse, no long drive time, no travel surcharge. For Microsoft employees moving within Overlake or between Overlake and other Eastside locations, this proximity translates directly into lower move costs.",
      },
    ],
    pricingNote: "No travel surcharge for Redmond moves. Overlake proximity = lower total cost.",
  },

  "redmond-commercial": {
    intro: `Redmond is home to Microsoft, Nintendo of America, and hundreds of tech companies, making it one of the most active commercial moving markets in Washington State. Microsoft's campus alone generates dozens of office relocations every year, intra-campus moves, team consolidations, and full department relocations. Our commercial crews are trained on IT equipment handling, server room moves, and the chain-of-custody documentation that Microsoft's facilities team requires. Nintendo of America's campus on 118th Ave NE has its own security and access procedures that we've navigated many times. For smaller Redmond tech companies, we offer after-hours and weekend moves that keep your team productive through the transition.`,
    buildingCalloutsHeading: "Redmond Office Buildings We Move Regularly",
    buildingCallouts: `We have direct experience with the following Redmond office locations: Microsoft main campus (security badge coordination, facilities team approval, COI required), Nintendo of America campus on 118th Ave NE (security coordination, advance notice required), Redmond Town Center office buildings (loading dock access, standard COI), Overlake tech park buildings (surface parking, standard access), and Downtown Redmond mixed-use office space (street-level loading, limited parking on Redmond Way). Our Redmond warehouse allows us to stage large commercial moves efficiently, we can pre-position equipment and supplies the day before your move.`,
    extraFaqs: [
      {
        q: "Can you move our team within Microsoft's Redmond campus?",
        a: "Yes. We've done intra-campus moves at Microsoft's Redmond campus many times. Campus moves require advance approval from Microsoft's facilities team and security badge coordination, we work directly with your facilities contact to get the necessary access. We carry the required COI for Microsoft campus work and are familiar with the loading dock procedures for the major campus buildings. Intra-campus moves are typically done on weekends.",
      },
      {
        q: "Do you handle server room moves for Redmond tech companies?",
        a: "Yes. Server room moves require anti-static precautions, careful handling of rack-mounted equipment, and coordination with your IT team on shutdown and startup sequencing. We don't disconnect or reconnect networking equipment, but we work alongside your IT team and can coordinate timing around their schedule. We provide an itemized inventory with condition notes for every piece of server equipment. For server room moves, a pre-move walkthrough with your IT lead is strongly recommended.",
      },
    ],
    pricingNote: "Commercial rates from $140–$175/hr. Redmond-based crew = no travel surcharge.",
  },

  "redmond-packing": {
    intro: `Redmond homes range from compact townhomes near Redmond Town Center to large wooded properties on Education Hill and Bear Creek, and packing requirements vary accordingly. Education Hill and Bear Creek properties often have extensive contents, large homes with multiple levels, garages full of equipment, and outdoor furniture that needs weatherproofing for storage. Overlake apartments have strict move-out inspection requirements, so packing needs to protect common area walls and floors during carry-out. Our Redmond packing crews bring all materials and are experienced with the full range of packing scenarios. Because we're based in Redmond, we can often accommodate same-week packing bookings that out-of-area companies can't.`,
    buildingCalloutsHeading: "Packing Services Across Redmond Neighborhoods",
    buildingCallouts: `Our packing crews work throughout Redmond and are experienced with the specific requirements of each area: Education Hill and Bear Creek (large homes on wooded lots, multi-level packing, garage and outdoor equipment), Overlake apartments (move-out inspection compliance, floor and wall protection during carry-out), Redmond Ridge (large planned-community homes, HOA move-out inspection requirements), Downtown Redmond mixed-use (tight stairwells in some buildings, furniture disassembly before packing), and Novelty Hill (newer large-lot homes, extensive contents, full-pack service common).`,
    extraFaqs: [
      {
        q: "Can you pack our Redmond home the day before the move?",
        a: "Yes, packing the day before is our recommended approach for most Redmond homes. We send the packing crew the day before your move so everything is boxed, labeled, and ready when the moving truck arrives the next morning. This is especially useful for Education Hill and Bear Creek homes with large amounts of content. Same-day pack-and-move is available for homes up to 2 bedrooms.",
      },
      {
        q: "Do you pack garages and outdoor equipment for Redmond moves?",
        a: "Yes. Garages and outdoor equipment are often the most time-consuming part of a Redmond move, especially for Education Hill and Bear Creek homes with large garages, workshop equipment, and outdoor furniture. We bring heavy-duty boxes, stretch wrap, and weatherproof packing materials for outdoor items. For large power tools and equipment, we can disassemble and wrap components for safe transport.",
      },
    ],
    pricingNote: "Redmond packing rates: $35–$55/hr per packer. All materials included.",
  },
  // ──────────────────────────────────────────────────────────────────────────
  // SAMMAMISH
  // ──────────────────────────────────────────────────────────────────────────

  "sammamish-residential": {
    intro: `Sammamish is defined by its large planned communities, Klahanie, Trossachs, Pine Lake, and Beaver Lake, and the HOA move-in rules that govern them. Klahanie and Trossachs both require advance notice to the HOA, a certificate of insurance, and moves restricted to specific hours. Pine Lake and Beaver Lake have long wooded driveways that require careful truck positioning and sometimes a smaller vehicle for the final approach. The limited road network on the Sammamish Plateau means that traffic on SE 8th Street and 228th Ave SE can add significant time to a move if not scheduled carefully. Our crews know every Sammamish community's specific requirements and plan every move accordingly.`,
    buildingCalloutsHeading: "Sammamish Neighborhoods We Know Best",
    buildingCallouts: `We move homes throughout Sammamish and have specific experience with each community: Klahanie (HOA move-in rules, COI required, restricted hours, dense townhome sections), Trossachs (HOA coordination, large single-family homes, long carries), Pine Lake (wooded lots, long driveways, smaller trucks required on some streets), Beaver Lake (rural properties, long carries, limited road access in some areas), Sahalee (gated community, advance notice required, large estate homes), and Sammamish Town Center area (newer mixed-use, standard access).`,
    extraFaqs: [
      {
        q: "What are the HOA move-in rules in Klahanie?",
        a: "Klahanie HOA move-in rules require advance notice (typically 48–72 hours), a certificate of insurance naming the Klahanie HOA as additional insured, and moves restricted to daylight hours (typically 8 a.m.–6 p.m.). Some sections also require a refundable damage deposit. We handle all HOA coordination on your behalf, just provide your HOA contact when you book and we'll confirm the requirements before move day. We've moved in and out of Klahanie dozens of times.",
      },
      {
        q: "Can you access homes in Pine Lake and Beaver Lake with long driveways?",
        a: "Yes. Pine Lake and Beaver Lake properties often have long wooded driveways that require careful truck positioning. On some properties, we use a smaller vehicle for the driveway approach and shuttle items to the main truck on the street. We assess driveway access on every Pine Lake and Beaver Lake quote. There's no additional charge for shuttle service, it's part of our standard preparation for these neighborhoods.",
      },
    ],
    pricingNote: "Sammamish rates reflect large-home market. Flat-rate quotes available.",
  },

  "sammamish-apartment": {
    intro: `Sammamish has fewer apartment complexes than other Eastside cities, but the newer mixed-use developments near Sammamish Town Center have standard elevator and move-in window requirements. The Sammamish Town Center mixed-use buildings are the most active apartment move locations in the city, and our crews are familiar with their specific elevator reservation processes and parking restrictions. For apartment residents in Klahanie and Trossachs, the HOA-level rules that apply to the broader community also apply to apartment and townhome residents, we handle all of that coordination before your move date.`,
    buildingCalloutsHeading: "Sammamish Apartment Buildings We Move Regularly",
    buildingCallouts: `We have on-file experience with the following Sammamish apartment buildings: Sammamish Town Center mixed-use apartments (elevator reservation, limited street parking, COI required for some buildings), Klahanie townhomes and apartments (HOA coordination, COI required, restricted hours), Trossachs townhomes (HOA coordination, large units, long carries common), and Pine Lake-area townhomes (standard access, HOA coordination may apply). If your building isn't listed, we'll call them directly before your move.`,
    extraFaqs: [
      {
        q: "Do Sammamish Town Center apartments require a COI for moving companies?",
        a: "Some Sammamish Town Center buildings require a certificate of insurance, while others do not. We call every building before your move to confirm current requirements. If a COI is required, we provide one naming your building as additional insured at no additional charge. When you book, let us know your building name and address and we'll confirm the requirements.",
      },
      {
        q: "Are there HOA restrictions for moving in Klahanie townhomes?",
        a: "Yes. Klahanie HOA rules apply to all residents, including townhome and apartment residents. Move-in and move-out procedures require advance notice to the HOA, a COI, and moves restricted to specific hours. We handle all HOA coordination on your behalf. Because we've moved in Klahanie many times, we know the current requirements and can often confirm them quickly.",
      },
    ],
  },

  "sammamish-commercial": {
    intro: `Sammamish's commercial moving market is smaller than other Eastside cities but growing steadily, driven by the expansion of businesses along SE 8th Street and near Sammamish Town Center. The limited road network on the Sammamish Plateau means that access for large moving trucks requires careful route planning, SE 8th Street and 228th Ave SE are the main commercial corridors, and traffic on these roads can be significant during peak hours. Our commercial crews handle office moves of every size in Sammamish and work evenings and weekends to minimize business disruption. We're based in Redmond, 12 minutes from Sammamish, which means fast response times and no travel surcharge.`,
    buildingCalloutsHeading: "Sammamish Office Buildings We Move Regularly",
    buildingCallouts: `We have direct experience with the following Sammamish office locations: SE 8th Street office buildings (surface parking, I-90 access via 228th Ave SE), Sammamish Town Center commercial space (standard loading access, limited street parking), and Klahanie-area office parks (HOA coordination may apply, surface parking). For any Sammamish commercial move, we recommend a free on-site walkthrough to assess access and plan the move sequence.`,
    extraFaqs: [
      {
        q: "How do you route large moving trucks to Sammamish offices?",
        a: "The Sammamish Plateau has a limited road network, and the main access routes, SE 8th Street from I-90 and 228th Ave SE, can have significant traffic during peak hours. We schedule Sammamish commercial moves to avoid peak traffic, typically starting at 7–8 a.m. on weekdays. For moves involving large trucks, we plan the route in advance to ensure there are no low-clearance bridges or weight restrictions on the approach.",
      },
      {
        q: "Can you move our Sammamish business on a weekend?",
        a: "Yes, weekend moves are our most common request for Sammamish office relocations. We work Saturday and Sunday, and we can start as early as 6 a.m. to maximize your available time. Most Sammamish commercial buildings allow weekend access with advance notice. We'll coordinate directly with your building's property manager or landlord to confirm access.",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // STORAGE — all 5 cities
  // ──────────────────────────────────────────────────────────────────────────

  "seattle-storage": {
    intro: `Seattle's storage market is shaped by its high cost of living and the frequency with which residents downsize, stage homes for sale, or need temporary storage between leases. Our storage vaults are held at our Redmond facility, 12 miles from central Seattle, and we handle the entire process: we pack your items, load them into a vault, transport them to our facility, and return them when you're ready. For Capitol Hill and South Lake Union residents staging apartments for sale, we can clear a unit in a single morning. For Magnolia and Madison Park homeowners downsizing, we offer partial-load vaults so you only pay for the space you use.`,
    buildingCalloutsHeading: "Seattle Storage Scenarios We Handle Regularly",
    buildingCallouts: `Our Seattle storage clients come from a wide range of situations: Capitol Hill and First Hill apartment residents staging for sale (we clear and vault in one trip), South Lake Union tech workers on international assignments (long-term vault storage, flexible return scheduling), Magnolia and Madison Park homeowners downsizing (partial-load vaults, inventory provided), Queen Anne homes under renovation (furniture vaulted and returned room-by-room), and Ballard and Fremont craftsman homeowners with antique furniture requiring climate-sensitive storage. All vaults are stored at our Redmond facility in a secure, climate-controlled environment.`,
    extraFaqs: [
      {
        q: "How does vault storage work for a Seattle apartment?",
        a: "We bring a portable vault to your Seattle apartment, load your items directly into it, seal it, and transport it to our Redmond facility. Your belongings stay in the same vault the entire time, nothing is transferred to a shared warehouse shelf. When you're ready for delivery, we schedule a return window and bring the vault back. Most Seattle apartment vaults are loaded and transported in a single morning.",
      },
      {
        q: "Can you store furniture for a Seattle home renovation?",
        a: "Yes. Home renovation storage is one of our most common requests from Seattle homeowners in Magnolia, Madison Park, and Queen Anne. We can vault your furniture room by room, clearing the kitchen first while you renovate, then returning it before moving on to the next room. We provide a detailed inventory of every item in storage so you know exactly what's in your vault.",
      },
    ],
    pricingNote: "Seattle storage rates: $100–$145/month per vault. Oversized items: $80/month. Short-term storage: $200/day. Contact us for current pricing.",
  },

  "bellevue-storage": {
    intro: `Bellevue's storage needs are driven by its active real estate market and the frequency of corporate relocations among its tech-sector workforce. When a Microsoft or Expedia employee accepts an international assignment, they need a trusted partner to vault their belongings and hold them securely until they return. When a Bellevue homeowner lists their Somerset or Newport Hills home, staging often means clearing 30–50% of the furniture. Our storage vaults at our Redmond facility, 5 miles from central Bellevue, are the closest professional vault storage option to Downtown Bellevue, and our crews can mobilize faster than any other storage provider in the area.`,
    buildingCalloutsHeading: "Bellevue Storage Scenarios We Handle Regularly",
    buildingCallouts: `Our Bellevue storage clients include: Downtown Bellevue high-rise residents at The Bravern and Cirrus staging for sale (we coordinate elevator access and clear units in one trip), Somerset and Newport Hills homeowners downsizing to smaller homes (partial-load vaults, room-by-room inventory), Microsoft and Expedia employees on international assignments (long-term vault storage, flexible return scheduling), Crossroads and Eastgate apartment residents between leases (short-term storage, 1–3 months), and West Bellevue and Medina estate homeowners with high-value art and antiques requiring climate-controlled vaults.`,
    extraFaqs: [
      {
        q: "How quickly can you pick up and vault furniture from a Bellevue home?",
        a: "For most Bellevue homes, we can schedule a vault pickup within 3–5 business days. For urgent requests, such as a seller who just accepted an offer and needs to stage quickly, we often have next-day availability. Our Redmond warehouse is 5 miles from central Bellevue, so mobilization is fast. Call us with your timeline and we'll confirm availability.",
      },
      {
        q: "Do you provide an inventory of what's in my Bellevue storage vault?",
        a: "Yes. We provide a written inventory of every item loaded into your vault, including photos of high-value items. This inventory is your reference for insurance purposes and for scheduling returns. When you're ready to retrieve specific items, you can request individual pieces from your vault, we'll retrieve them and deliver them to your Bellevue address.",
      },
    ],
    pricingNote: "Bellevue storage rates: $100–$140/month per vault. Oversized items: $80/month. Short-term storage: $200/day. Contact us for current pricing.",
  },

  "redmond-storage": {
    intro: `Redmond is home to our storage facility, which means Redmond customers get the fastest service and the lowest transport costs of any city we serve. Our vaults are stored on Redmond Way, the same address as our main warehouse, and our crews can load, transport, and vault a Redmond home's contents in a single morning. For Overlake tech workers between leases, for Education Hill homeowners staging for sale, and for Bear Creek families downsizing, our Redmond storage operation is the most convenient option on the Eastside. No long hauls, no third-party facilities, no uncertainty about where your belongings are stored.`,
    buildingCalloutsHeading: "Redmond Storage Scenarios We Handle Regularly",
    buildingCallouts: `Our Redmond storage clients include: Overlake apartment residents near Microsoft's campus staging for sale or between leases (we coordinate building access and vault in one trip), Education Hill homeowners downsizing to smaller homes (partial-load vaults, room-by-room inventory), Bear Creek and Grass Lawn families renovating (furniture vaulted room-by-room, returned on schedule), Redmond Ridge HOA communities with strict move-out requirements (we document condition before vaulting), and Downtown Redmond mixed-use residents needing short-term storage between leases. All vaults are stored on-site at our Redmond Way facility.`,
    extraFaqs: [
      {
        q: "Where is your Redmond storage facility located?",
        a: "Our storage facility is on Redmond Way in Redmond, WA 98052, the same location as our main warehouse. Vaults are stored in a secure, climate-controlled environment on-site. Because we own and operate the facility directly, there are no third-party handling fees and no uncertainty about the condition of your belongings. Redmond customers can visit the facility by appointment.",
      },
      {
        q: "Can I access my stored items in Redmond without scheduling a full delivery?",
        a: "Yes. Redmond customers can schedule a facility visit to access their vault by appointment. We'll have your vault staged and accessible within 24 hours of your request. If you need specific items returned to your Redmond address, we can deliver individual pieces from your vault, you don't have to retrieve everything at once.",
      },
    ],
    pricingNote: "Redmond storage rates: $100–$135/month per vault. Oversized items: $80/month. Short-term storage: $200/day. No travel surcharge, facility is on-site. Contact us for current pricing.",
  },

  "kirkland-storage": {
    intro: `Kirkland's waterfront real estate market creates a consistent demand for staging storage, sellers clearing Downtown Kirkland homes and Moss Bay waterfront properties to maximize sale price. Our storage vaults at our Redmond facility are 5 miles from central Kirkland, and our crews can load and transport a Kirkland home's contents in a single trip. For Totem Lake apartment residents between leases and for Juanita and Lakeview homeowners downsizing, our vault storage offers a simpler alternative to self-storage: we do all the heavy lifting, and your belongings stay in a sealed vault rather than being handled multiple times.`,
    buildingCalloutsHeading: "Kirkland Storage Scenarios We Handle Regularly",
    buildingCallouts: `Our Kirkland storage clients include: Downtown Kirkland and Moss Bay homeowners staging for sale (we coordinate parking logistics and clear homes in one trip), Totem Lake apartment residents near Google's campus between leases (short-term vault storage, 1–3 months), Juanita and Lakeview hillside homeowners downsizing (partial-load vaults, inventory provided), Parkplace complex residents staging apartments (elevator coordination, single-morning vault loading), and Bridle Trails and Kingsgate homeowners with large furniture collections requiring climate-controlled storage.`,
    extraFaqs: [
      {
        q: "How does vault storage work for a Kirkland waterfront home staging?",
        a: "For Kirkland home staging, we typically work with your real estate agent to identify which furniture pieces should be removed. We bring vaults to your home, load the designated items, and transport them to our Redmond facility. The process usually takes one morning for a 3-bedroom home. When your home sells and you're ready for delivery, we schedule a return window and bring everything back, or deliver directly to your new address.",
      },
      {
        q: "Can you store items from a Kirkland apartment while I'm between leases?",
        a: "Yes. Short-term vault storage between leases is one of our most common requests from Kirkland apartment residents. We can vault your belongings from your old apartment and hold them for 30–90 days while you're in temporary housing, then deliver to your new address when you're ready. We'll coordinate elevator access at both buildings and handle all the logistics.",
      },
    ],
    pricingNote: "Kirkland storage rates: $100–$140/month per vault. Oversized items: $80/month. Short-term storage: $200/day. Contact us for current pricing.",
  },

  "sammamish-storage": {
    intro: `Sammamish's large planned-community homes create a specific storage dynamic: when families downsize or stage for sale, the volume of furniture is substantial. A typical 4-bedroom Klahanie or Trossachs home has enough furniture to fill two or three vaults. Our storage operation handles this scale efficiently, we bring multiple vaults, load them in sequence, and transport everything to our Redmond facility in a single trip. For Sammamish families on extended travel or military deployment, long-term vault storage provides peace of mind that their belongings are secure and climate-controlled while they're away.`,
    buildingCalloutsHeading: "Sammamish Storage Scenarios We Handle Regularly",
    buildingCallouts: `Our Sammamish storage clients include: Klahanie and Trossachs homeowners staging for sale (large homes, multiple vaults, HOA move-out compliance), Pine Lake and Beaver Lake families downsizing (wooded-lot homes, large garages, outdoor equipment vaulted separately), Sahalee estate homeowners with high-value art and antiques (climate-controlled vaults, custom crating available), Sammamish families on military deployment or extended international assignments (long-term storage, flexible return scheduling), and Aldarra and Inglewood Hill homeowners renovating (room-by-room vaulting and scheduled returns).`,
    extraFaqs: [
      {
        q: "How many vaults does a typical Sammamish home require?",
        a: "A typical 3-bedroom Sammamish home fills 1–2 vaults. A 4-bedroom home with a large garage typically fills 2–3 vaults. We assess your home's contents during the quote process and give you an accurate vault count before move day. You only pay for the vaults you use, we don't charge for unused space within a vault.",
      },
      {
        q: "Do you offer long-term storage for Sammamish families on military deployment?",
        a: "Yes. We offer long-term vault storage with no minimum commitment beyond the first month. Military families receive priority scheduling for both vault pickup and delivery. We can coordinate with a family member or designated contact for access to the vault if needed during the deployment period. Our Redmond facility is secure, climate-controlled, and monitored 24/7.",
      },
    ],
    pricingNote: "Sammamish storage rates: $100–$145/month per vault. Oversized items: $80/month. Short-term storage: $200/day. Multi-vault discounts available. Contact us for current pricing.",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // SENIOR MOVING — all 5 cities
  // ──────────────────────────────────────────────────────────────────────────

  "seattle-senior": {
    intro: `Senior moves in Seattle require a different pace and a different kind of crew. Many of Seattle's senior residents are leaving homes they've lived in for 20–40 years, in Magnolia, Madison Park, Madrona, or Leschi, and the emotional weight of the move is as real as the physical one. Our senior moving crews are selected for patience and communication skills, not just physical ability. We work at a pace that's comfortable for the client, we label boxes clearly so unpacking is intuitive, and we take the time to place furniture exactly where it's wanted in the new home. For moves to senior living communities in Seattle, including Aegis Living Queen Anne, Sunrise of Bellevue, and Merrill Gardens at First Hill, we know the building policies and elevator requirements.`,
    buildingCalloutsHeading: "Seattle Senior Living Communities We Move Regularly",
    buildingCallouts: `We have direct experience moving residents into and out of the following Seattle-area senior living communities: Aegis Living Queen Anne (elevator reservation required, 4-hour window), Merrill Gardens at First Hill (COI required, weekday moves only), Emerald City Senior Living in Northgate (ground-floor units, no elevator required), Horizon House in First Hill (strict move-in window, building coordinator contact required), and Sunrise Senior Living locations in the greater Seattle area (standard COI and elevator coordination). For any senior community not on this list, we call the community directly before move day.`,
    extraFaqs: [
      {
        q: "Do you help seniors downsize before a Seattle move?",
        a: "Yes. Many of our Seattle senior clients need help deciding what to take, what to donate, and what to discard before the move. We work at a pace that's comfortable and can coordinate with estate sale companies, donation pickups (Goodwill, Habitat for Humanity ReStore), and junk removal services. We don't rush the process, a senior move done right takes more time than a standard residential move, and we plan for that.",
      },
      {
        q: "Can you move a senior from a Seattle home into an assisted living community?",
        a: "Yes. We regularly move seniors from Seattle homes into assisted living and memory care communities throughout the region. We coordinate directly with the community's move-in coordinator to confirm elevator access, move-in windows, and any COI requirements. We also work with families who are managing the move on behalf of a parent, we can take direction from a family member and keep them updated throughout the day.",
      },
    ],
    pricingNote: "Senior move rates reflect smaller crew sizes and longer time allowances. Flat-rate quotes available.",
  },

  "bellevue-senior": {
    intro: `Bellevue has one of the highest concentrations of senior living communities on the Eastside, and many of our most meaningful moves involve helping long-time Bellevue residents transition from Somerset or Newport Hills homes they've owned for decades into communities like Sunrise of Bellevue, Aegis Living Bellevue, or The Chateau at Bothell Landing. Our senior moving crews understand that the physical move is only part of the job, the other part is making the transition feel manageable. We work at a pace set by the client, we handle furniture placement with care, and we make sure every box is labeled so unpacking is as easy as possible.`,
    buildingCalloutsHeading: "Bellevue Senior Living Communities We Move Regularly",
    buildingCallouts: `We have direct experience with the following Bellevue-area senior living communities: Sunrise of Bellevue (elevator reservation, COI required, weekday moves preferred), Aegis Living Bellevue (move-in coordinator contact required, 4-hour window), Bellevue Club Residences (strict move-in window, building security escort), The Watermark at Bellevue (ground-floor and elevator units, standard COI), and Emerald Heights in Redmond (close to Bellevue, elevator coordination, COI required). For any community not on this list, we contact the move-in coordinator directly before scheduling.`,
    extraFaqs: [
      {
        q: "How do you handle a Bellevue senior move when the family is coordinating remotely?",
        a: "Remote family coordination is common for Bellevue senior moves. We work directly with a designated family contact, by phone, email, or text, and provide updates throughout the move day. We can take direction from the family contact for furniture placement and box labeling, and we'll call when we arrive at the destination so the family knows the move is on track. We've coordinated dozens of Bellevue senior moves with out-of-state family members.",
      },
      {
        q: "Do you provide packing services for Bellevue senior moves?",
        a: "Yes. Full packing is strongly recommended for senior moves in Bellevue. Our packers label every box clearly by room and contents, which makes unpacking in the new community much easier. For seniors moving from large Somerset or Newport Hills homes, we offer a 2-day packing schedule, packing the main living areas on day one and completing the remaining rooms on day two, so the process isn't rushed.",
      },
    ],
    pricingNote: "Bellevue senior move rates include extra time allowance. Flat-rate quotes available.",
  },

  "redmond-senior": {
    intro: `Redmond's senior population is served by a growing number of senior living communities, and our proximity, our warehouse is on Redmond Way, means we can respond faster to Redmond senior moves than any other company in the area. Many of our Redmond senior clients are leaving Education Hill or Bear Creek homes they've owned for 20–30 years, and the move to Emerald Heights, Sunrise of Redmond, or a family member's home requires the kind of careful, unhurried service that our senior crews specialize in. We work at the client's pace, we handle every item with care, and we make sure the new space feels like home before we leave.`,
    buildingCalloutsHeading: "Redmond Senior Living Communities We Move Regularly",
    buildingCallouts: `We have direct experience with the following Redmond-area senior living communities: Emerald Heights in Redmond (elevator coordination, COI required, move-in coordinator contact), Sunrise of Redmond (standard COI, elevator reservation, weekday moves preferred), Vineyard Park of Redmond (ground-floor and elevator units, standard move-in process), Cogir of Redmond (move-in window coordination, COI required), and Aljoya Thornton Place in nearby Northgate (for Redmond seniors moving closer to family in Seattle). For any community not listed, we call the move-in coordinator before scheduling.`,
    extraFaqs: [
      {
        q: "How far in advance should I book a senior move from a Redmond home?",
        a: "We recommend booking senior moves 3–4 weeks in advance to allow time for packing coordination, community move-in scheduling, and any downsizing decisions. For Redmond clients, we often have more flexibility than other areas because our warehouse is local, but senior moves benefit from extra planning time regardless. Call us early and we'll walk you through the full process.",
      },
      {
        q: "Can you move a piano or antique furniture from a Redmond senior's home?",
        a: "Yes. Many Redmond senior clients have pianos, antique furniture, and heirloom pieces that require special handling. We have specialized equipment for upright and grand pianos, and our crews are trained on antique furniture wrapping and carrying techniques. For items that won't fit in the new community, we can vault them at our Redmond facility or coordinate donation or estate sale pickup.",
      },
    ],
    pricingNote: "Redmond senior move rates include extra time allowance. No travel surcharge, our warehouse is local.",
  },

  "kirkland-senior": {
    intro: `Kirkland's senior community is well-served by several high-quality senior living facilities, and many of our most thoughtful moves involve helping long-time Kirkland residents leave waterfront homes or hillside properties in Juanita and Lakeview to transition into communities like Aegis Living Kirkland or Sunrise of Kirkland. Our senior moving crews are trained to work at a pace that's comfortable for the client, to communicate clearly about what's happening at each stage of the move, and to handle every item, from everyday furniture to irreplaceable family heirlooms, with the same level of care.`,
    buildingCalloutsHeading: "Kirkland Senior Living Communities We Move Regularly",
    buildingCallouts: `We have direct experience with the following Kirkland-area senior living communities: Aegis Living Kirkland (elevator reservation, COI required, move-in coordinator contact), Sunrise of Kirkland (standard COI, elevator coordination, weekday moves preferred), Emerald City Senior Living locations in the Kirkland area (ground-floor and elevator units), Lakeview Senior Living in Kirkland (move-in window coordination, COI required), and The Gardens at Town Square in Bellevue (close to Kirkland, standard COI and elevator coordination). For any community not listed, we contact the move-in coordinator directly.`,
    extraFaqs: [
      {
        q: "Do you help with furniture placement at the Kirkland senior living community?",
        a: "Yes. Furniture placement is one of the most important parts of a senior move. Our crews take direction from the client, or from a family member if the client prefers, and place every piece of furniture exactly where it's wanted before we leave. We also reassemble any furniture that was disassembled for the move. We don't consider the job done until the new space feels settled and comfortable.",
      },
      {
        q: "Can you coordinate a Kirkland senior move when the senior has limited mobility?",
        a: "Yes. We regularly move seniors with limited mobility, including those who use walkers, wheelchairs, or require assistance. Our crews work around the client's needs, we don't ask seniors to move out of the way or rush through areas they're occupying. For clients with significant mobility limitations, we recommend scheduling the move on a weekday when building staff are available to assist with any needs that fall outside our scope.",
      },
    ],
    pricingNote: "Kirkland senior move rates include extra time allowance. Flat-rate quotes available.",
  },

  "sammamish-senior": {
    intro: `Sammamish's senior residents are often leaving large planned-community homes in Klahanie, Trossachs, or Pine Lake, homes they've owned for 15–25 years and filled with a lifetime of belongings. The move to a senior living community or a smaller home is a significant transition, and our senior moving crews approach it with the patience and care it deserves. We work at the client's pace, we handle downsizing decisions with sensitivity, and we make sure every item that's coming to the new home arrives safely and is placed exactly where it's wanted.`,
    buildingCalloutsHeading: "Sammamish Senior Living Communities We Move Regularly",
    buildingCallouts: `We have direct experience with the following senior living communities serving Sammamish residents: Sunrise of Issaquah (close to Sammamish, elevator coordination, COI required), Aegis Living Issaquah (standard COI, move-in window coordination), Emerald Heights in Redmond (7 miles from Sammamish, elevator coordination, COI required), Sunrise of Sammamish (newer community, standard move-in process), and Cogir of Redmond (for Sammamish seniors moving closer to family in Redmond). For any community not listed, we contact the move-in coordinator before scheduling.`,
    extraFaqs: [
      {
        q: "How do you handle the large volume of belongings in a Sammamish senior move?",
        a: "Large Sammamish homes often have 20–30 years of accumulated belongings, and sorting through everything before a senior move is one of the biggest challenges. We work with families to identify what's coming to the new home, what's going to family members, what's being donated, and what needs to be discarded. We can coordinate donation pickups and junk removal on the same day as the move to minimize the number of trips and decisions required.",
      },
      {
        q: "Can you move a senior from Sammamish to a community in another city?",
        a: "Yes. We regularly move Sammamish seniors to communities throughout the greater Seattle area, Bellevue, Redmond, Kirkland, Issaquah, and beyond. Distance within the region doesn't affect our service level. We'll coordinate with the destination community's move-in coordinator regardless of location and handle all the logistics from start to finish.",
      },
    ],
    pricingNote: "Sammamish senior move rates include extra time allowance for large homes. Flat-rate quotes available.",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // FURNITURE MOVING — all 5 cities
  // ──────────────────────────────────────────────────────────────────────────

  "seattle-furniture": {
    intro: `Seattle's furniture moving market is shaped by the city's dense apartment stock and the frequency with which residents rearrange, upgrade, or move single pieces between homes. Capitol Hill and South Lake Union apartments often have narrow hallways and tight stairwells that make large sectionals and bed frames a real challenge. Magnolia and Madison Park homes frequently have oversized furniture, large dining tables, California king beds, and sectional sofas, that require disassembly before they can be moved. Our furniture-only crews are equipped with the same tools as our full-service crews: furniture dollies, stair rollers, moving blankets, and disassembly tools. We move single pieces or entire rooms.`,
    buildingCalloutsHeading: "Seattle Furniture Moving Scenarios We Handle Regularly",
    buildingCallouts: `We handle furniture moves throughout Seattle with specific experience in: Capitol Hill and First Hill apartments (narrow hallways, tight stairwells, furniture disassembly required for large pieces), South Lake Union high-rises (elevator coordination, strict move-in windows for building access), Magnolia and Madison Park homes (oversized dining tables, large sectionals, California king beds), Queen Anne hillside homes (steep stairways, large furniture requiring 3-person carries), and Ballard and Fremont craftsman homes (narrow doorways, vintage furniture requiring extra padding). We move single pieces, room sets, or full homes.`,
    extraFaqs: [
      {
        q: "Can you move a single piece of furniture within Seattle, not a full move?",
        a: "Yes. Single-item furniture moves are one of our most common requests in Seattle. Whether it's a sectional sofa from Capitol Hill to Ballard, a dining table from South Lake Union to Queen Anne, or a dresser from a storage unit to a new apartment, we handle it. We have a 2-hour minimum for furniture-only moves. Call us with the item, the pickup address, and the delivery address and we'll give you a flat-rate quote.",
      },
      {
        q: "Do you disassemble and reassemble furniture for Seattle apartment moves?",
        a: "Yes. Furniture disassembly and reassembly is included in our furniture moving service. For Capitol Hill and South Lake Union apartments with narrow hallways, we often need to disassemble bed frames, sectionals, and large bookshelves to get them through doorways. We bring all necessary tools and reassemble everything at the destination. There's no additional charge for standard disassembly and reassembly.",
      },
    ],
  },

  "bellevue-furniture": {
    intro: `Bellevue's furniture moving market reflects the city's affluent demographics, large sectionals, California king beds, solid-wood dining sets, and high-end home office furniture are the norm in Somerset, Newport Hills, and West Bellevue. Moving these pieces requires more than a pickup truck and a friend: it requires proper moving blankets, furniture dollies, stair rollers, and crews trained in disassembly and reassembly. Our Bellevue furniture moving crews handle everything from single-piece deliveries to full-room rearrangements, and our Redmond warehouse is 5 miles away, which means fast response times and no travel surcharges for Bellevue furniture moves.`,
    buildingCalloutsHeading: "Bellevue Furniture Moving Scenarios We Handle Regularly",
    buildingCallouts: `We handle furniture moves throughout Bellevue with specific experience in: Downtown Bellevue high-rises at The Bravern and Cirrus (elevator coordination, strict move-in windows, COI required), Somerset and Newport Hills homes (large furniture, steep driveways, long carry distances), Crossroads and Eastgate apartments (limited truck access, furniture disassembly for narrow hallways), West Bellevue and Medina estates (oversized furniture, long carries, gated access), and Factoria and Wilburton townhomes (narrow stairways, furniture disassembly required for upper floors).`,
    extraFaqs: [
      {
        q: "Can you move furniture between two Bellevue addresses, not a full household move?",
        a: "Yes. We regularly move furniture between Bellevue addresses, from a home to a storage unit, from one room to another in the same house, or from a furniture store delivery to a specific room. We have a 2-hour minimum for furniture-only moves. Call us with the details and we'll provide a flat-rate quote. Our Redmond warehouse is 5 miles from central Bellevue, so we can often schedule furniture moves within 2–3 business days.",
      },
      {
        q: "Do you move high-end furniture in Bellevue without damaging it?",
        a: "Yes. High-end furniture protection is a priority for our Bellevue crews. We use thick moving blankets on every piece, furniture dollies to avoid dragging, and corner protectors on doorways and walls. For particularly valuable pieces, antique furniture, custom-built pieces, or designer sofas, we use additional padding and carry by hand rather than using dollies. If you have specific concerns about a piece, mention it when you request a quote and we'll plan accordingly.",
      },
    ],
  },

  "redmond-furniture": {
    intro: `Redmond's furniture moving market is driven by its active real estate market and the frequency with which Microsoft and tech-sector employees upgrade their home offices and living spaces. Education Hill and Bear Creek homes often have large, heavy furniture, solid-wood desks, California king beds, and large sectionals, that require professional handling. Our Redmond furniture crews are based at our Redmond Way warehouse, which means zero travel time and no fuel surcharge for Redmond furniture moves. We move single pieces, room sets, or full homes, and we handle disassembly and reassembly as part of the service.`,
    buildingCalloutsHeading: "Redmond Furniture Moving Scenarios We Handle Regularly",
    buildingCallouts: `We handle furniture moves throughout Redmond with specific experience in: Overlake apartments near Microsoft's campus (elevator coordination, furniture disassembly for narrow hallways), Education Hill homes (large furniture, steep driveways, long carry distances), Bear Creek and Grass Lawn homes (wooded-lot properties, long carries, oversized furniture), Downtown Redmond mixed-use buildings (elevator coordination, standard COI), and Redmond Ridge HOA communities (move-in window coordination, COI required for building access). We move single pieces or full rooms.`,
    extraFaqs: [
      {
        q: "Can you move a home office setup in Redmond, desk, monitors, and all?",
        a: "Yes. Home office furniture moves are one of our most common requests in Redmond, given the high concentration of remote tech workers. We move desks, monitor stands, ergonomic chairs, and filing cabinets. We do not disconnect or reconnect electronics, but we work alongside you and can move equipment to a staging area while you handle the cables. For large standing desks, we disassemble the frame for safe transport and reassemble at the destination.",
      },
      {
        q: "How quickly can you schedule a furniture move in Redmond?",
        a: "Because our warehouse is in Redmond, we often have same-week availability for furniture-only moves. For urgent requests, we sometimes have next-day availability. Call us with your timeline and we'll confirm. Furniture moves are typically scheduled for 2–4 hours depending on the number of pieces and the access at both locations.",
      },
    ],
  },

  "kirkland-furniture": {
    intro: `Kirkland's waterfront location and its mix of historic downtown homes and newer developments in Totem Lake and Kingsgate create a diverse furniture moving market. Moss Bay and Highlands waterfront properties often have large, heavy furniture that's been in place for years, solid-wood dining sets, oversized sofas, and antique pieces that require careful handling. Totem Lake apartments near Google's campus have the typical high-rise challenges: elevator coordination, narrow hallways, and strict move-in windows. Our Kirkland furniture crews handle all of it, and our Redmond warehouse is 5 miles east, which means fast response and no travel surcharge.`,
    buildingCalloutsHeading: "Kirkland Furniture Moving Scenarios We Handle Regularly",
    buildingCallouts: `We handle furniture moves throughout Kirkland with specific experience in: Downtown Kirkland waterfront homes (large furniture, limited truck parking, permit coordination), Moss Bay and Highlands homes (steep hillside lots, large furniture, long carry distances), Totem Lake apartments near Google's campus (elevator coordination, COI required, strict move-in windows), Parkplace complex in downtown (elevator coordination, standard move-in process), and Juanita and Lakeview hillside homes (steep stairways, furniture disassembly for large pieces, 3-person carries).`,
    extraFaqs: [
      {
        q: "Can you move antique furniture from a Kirkland waterfront home?",
        a: "Yes. Antique furniture moves are a specialty for our Kirkland crews. We use thick moving blankets, hand-carry techniques, and custom padding for fragile antique pieces. For particularly valuable items, we recommend a pre-move walkthrough so we can assess the best approach for each piece. We've moved antique furniture from Kirkland waterfront homes and Highlands estates many times, call us to discuss your specific pieces.",
      },
      {
        q: "Do you move furniture up and down steep stairs in Kirkland hillside homes?",
        a: "Yes. Steep stairways are one of the most common challenges in Kirkland's Juanita and Lakeview neighborhoods. We use stair rollers for large pieces, carry in teams of 2–3 for heavy items, and disassemble furniture when necessary to navigate tight turns. There's no additional charge for stair carries, it's part of our standard service for Kirkland hillside homes.",
      },
    ],
  },

  "sammamish-furniture": {
    intro: `Sammamish's large planned-community homes are filled with large furniture, 4-bedroom homes in Klahanie and Trossachs typically have California king beds, large sectionals, solid-wood dining sets, and fully equipped home offices. Moving these pieces requires professional equipment and experienced crews. Our Sammamish furniture moving service handles single pieces, room sets, or full homes, and we bring all necessary equipment: furniture dollies, stair rollers, moving blankets, and disassembly tools. For HOA communities like Klahanie and Trossachs, we coordinate move-in windows and provide COIs as needed.`,
    buildingCalloutsHeading: "Sammamish Furniture Moving Scenarios We Handle Regularly",
    buildingCallouts: `We handle furniture moves throughout Sammamish with specific experience in: Klahanie and Trossachs homes (large furniture, HOA move-in coordination, COI required), Pine Lake and Beaver Lake properties (wooded-lot homes, long carry distances, large furniture), Sahalee gated community (advance access coordination, high-value furniture, custom padding), Sammamish Town Center mixed-use buildings (elevator coordination, standard move-in process), and Aldarra and Inglewood Hill homes (large single-family homes, oversized furniture, long carries).`,
    extraFaqs: [
      {
        q: "Can you move a large sectional sofa in a Sammamish home?",
        a: "Yes. Large sectionals are one of the most common furniture moving challenges in Sammamish. We assess the sofa dimensions and doorway/hallway measurements before the move to determine whether disassembly is needed. Most large sectionals can be moved in sections without full disassembly. For sectionals that are too large to fit through doorways even in sections, we can remove door frames temporarily to create the necessary clearance, and reinstall them afterward.",
      },
      {
        q: "Do you move furniture within the same Sammamish home, room rearrangements?",
        a: "Yes. In-home furniture rearrangements are a common request in Sammamish, especially when homeowners are staging for sale or redecorating. We have a 2-hour minimum for in-home moves. Our crews can rearrange an entire floor of a large Sammamish home in 2–3 hours. Call us with the number of pieces and the rooms involved and we'll provide a flat-rate quote.",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // APPLIANCE MOVING — all 5 cities
  // ──────────────────────────────────────────────────────────────────────────

  "seattle-appliance": {
    intro: `Appliance moves in Seattle present challenges that go beyond weight and size. Capitol Hill and First Hill apartments often have narrow hallways and tight elevator dimensions that make refrigerator and washer/dryer moves a precise operation. Queen Anne hillside homes have steep stairways where appliance dollies require experienced operators. South Lake Union high-rises have strict elevator weight limits and move-in windows that constrain scheduling. Our appliance moving crews use professional appliance dollies, stair walkers, and furniture straps rated for 1,000+ lbs, and they're trained on the specific challenges of Seattle's building stock. We do not disconnect or reconnect appliances, that requires a licensed plumber or electrician, but we handle all the heavy lifting.`,
    buildingCalloutsHeading: "Seattle Appliance Moving Scenarios We Handle Regularly",
    buildingCallouts: `We handle appliance moves throughout Seattle with specific experience in: Capitol Hill and First Hill apartments (narrow hallways, elevator dimensions, refrigerator and washer/dryer moves), South Lake Union high-rises (elevator weight limits, strict move-in windows, appliance dollies required), Queen Anne hillside homes (steep stairways, appliance stair walkers, 2-person minimum for heavy appliances), Magnolia and Madison Park homes (large appliances, long carries, oversized refrigerators), and Ballard and Fremont craftsman homes (narrow doorways, appliance disassembly for door removal when needed).`,
    extraFaqs: [
      {
        q: "Do you disconnect and reconnect appliances for Seattle moves?",
        a: "We do not disconnect or reconnect appliances, gas lines, water lines, and electrical connections require licensed plumbers and electricians. However, we coordinate with your utility contractors and handle all the moving once appliances are disconnected. For refrigerators, we defrost and drain them before moving. For washers, we install shipping bolts if available. We move the appliance from point A to point B, your contractors handle the connections.",
      },
      {
        q: "Can you move a refrigerator up stairs in a Seattle home?",
        a: "Yes. Refrigerator stair moves are one of the most common appliance challenges in Seattle's hillside neighborhoods, Queen Anne, Capitol Hill, and Beacon Hill homes frequently have appliances on upper floors. We use professional stair walkers (motorized stair-climbing dollies) for refrigerators and other large appliances. For particularly steep or narrow stairways, we assess the route before committing and will tell you honestly if the appliance cannot be safely moved without modification to the space.",
      },
    ],
  },

  "bellevue-appliance": {
    intro: `Bellevue's appliance moving market is shaped by its high rate of kitchen and laundry room upgrades among homeowners in Somerset, Newport Hills, and West Bellevue. When a homeowner replaces a built-in refrigerator or a stacked washer/dryer unit, the old appliance needs to go out and the new one needs to come in, often through narrow kitchen corridors or up flights of stairs. Our Bellevue appliance crews use professional appliance dollies and stair walkers, and they're trained on the specific access challenges of Bellevue's housing stock. We also handle appliance moves for Downtown Bellevue high-rises, coordinating elevator access and working within building move-in windows.`,
    buildingCalloutsHeading: "Bellevue Appliance Moving Scenarios We Handle Regularly",
    buildingCallouts: `We handle appliance moves throughout Bellevue with specific experience in: Downtown Bellevue high-rises at The Bravern and Cirrus (elevator coordination, appliance dollies, strict move-in windows), Somerset and Newport Hills homes (large appliances, steep driveways, long carry distances), Crossroads and Eastgate apartments (limited truck access, elevator coordination, standard appliance moves), West Bellevue and Medina estates (oversized built-in refrigerators, stacked washer/dryer units, long carries), and Factoria and Wilburton townhomes (narrow stairways, appliance stair walkers required).`,
    extraFaqs: [
      {
        q: "Can you move a built-in refrigerator from a Bellevue kitchen?",
        a: "Yes. Built-in and counter-depth refrigerators are common in Bellevue's higher-end homes, and moving them requires removing the surrounding cabinetry trim or door panels to create clearance. We assess the installation before the move and bring the right tools. For refrigerators that are truly built-in (integrated panel fronts), we recommend having a carpenter or cabinet installer present to remove and reinstall the panels, we handle the moving portion.",
      },
      {
        q: "How much does it cost to move an appliance in Bellevue?",
        a: "Appliance moves in Bellevue are quoted at our standard 2-hour minimum rate, which covers most single-appliance moves. For multiple appliances or moves requiring stair walkers, the job typically runs 2–3 hours. We provide flat-rate quotes so you know the final price before we start. Call us with the appliance type, the pickup and delivery addresses, and any access challenges (stairs, elevators, narrow hallways) and we'll give you an accurate quote.",
      },
    ],
  },

  "redmond-appliance": {
    intro: `Redmond's appliance moving market is driven by the city's active real estate turnover and the frequency with which homeowners upgrade appliances before listing or after purchasing. Education Hill and Bear Creek homes often have large appliances on upper floors, refrigerators, washer/dryer units, and chest freezers that were moved in when the home was first furnished and haven't moved since. Our Redmond appliance crews are based at our Redmond Way warehouse, which means zero travel time and fast scheduling. We use professional appliance dollies and stair walkers, and we're trained on the specific access challenges of Redmond's housing stock.`,
    buildingCalloutsHeading: "Redmond Appliance Moving Scenarios We Handle Regularly",
    buildingCallouts: `We handle appliance moves throughout Redmond with specific experience in: Overlake apartments near Microsoft's campus (elevator coordination, standard appliance moves), Education Hill homes (large appliances on upper floors, stair walkers required, steep driveways), Bear Creek and Grass Lawn homes (wooded-lot properties, long carry distances, large appliances), Downtown Redmond mixed-use buildings (elevator coordination, standard move-in process), and Redmond Ridge HOA communities (move-in window coordination, COI required for building access).`,
    extraFaqs: [
      {
        q: "Can you move a chest freezer from a Redmond garage?",
        a: "Yes. Chest freezers are one of the most common appliance move requests in Redmond, especially for Education Hill and Bear Creek homeowners who are downsizing or moving. We recommend emptying and defrosting the freezer 24 hours before the move. We use appliance dollies rated for the weight and can navigate garage steps and narrow doorways. For freezers going into storage, we ensure they're fully dry before loading.",
      },
      {
        q: "How quickly can you schedule an appliance move in Redmond?",
        a: "Because our warehouse is in Redmond, we often have same-week availability for appliance moves. For urgent requests, such as a new appliance delivery arriving and the old one needing to be removed, we sometimes have next-day availability. Call us with your timeline and we'll confirm. Most Redmond appliance moves are completed in 1–2 hours.",
      },
    ],
  },

  "kirkland-appliance": {
    intro: `Kirkland's appliance moving market is shaped by its mix of waterfront homes, hillside properties, and apartment complexes near Google's campus. Moss Bay and Highlands waterfront homes often have large appliances on upper floors, refrigerators and washer/dryer units that were moved in during construction and haven't been touched since. Totem Lake apartments have standard elevator access but strict move-in windows that constrain scheduling. Our Kirkland appliance crews handle all of it, and our Redmond warehouse is 5 miles east, which means fast response and no travel surcharge for Kirkland appliance moves.`,
    buildingCalloutsHeading: "Kirkland Appliance Moving Scenarios We Handle Regularly",
    buildingCallouts: `We handle appliance moves throughout Kirkland with specific experience in: Downtown Kirkland waterfront homes (large appliances, limited truck parking, permit coordination), Moss Bay and Highlands homes (steep hillside lots, stair walkers required, large appliances on upper floors), Totem Lake apartments near Google's campus (elevator coordination, COI required, strict move-in windows), Juanita and Lakeview hillside homes (steep stairways, appliance stair walkers, 2-person minimum), and Kingsgate and Finn Hill homes (standard residential appliance moves, large refrigerators and washer/dryer units).`,
    extraFaqs: [
      {
        q: "Can you move a washer and dryer in a Kirkland apartment building?",
        a: "Yes. Washer/dryer moves in Kirkland apartment buildings require elevator coordination and, in some buildings, a COI naming the building as additional insured. We handle both. For stacked washer/dryer units, we separate the units for transport and restabilize them at the destination. For front-load units on pedestals, we remove the pedestals for transport and reinstall them. We do not disconnect or reconnect water lines, that requires a licensed plumber.",
      },
      {
        q: "How do you move a large refrigerator down a steep Kirkland hillside driveway?",
        a: "Steep driveways in Kirkland's Juanita and Lakeview neighborhoods require careful planning for appliance moves. We use appliance dollies with wheel locks and carry in teams of 2–3 on steep grades. For very steep driveways, we may use a smaller vehicle to stage the appliance at the street level before loading onto the main truck. We assess every steep-driveway appliance move before committing and will tell you honestly if additional equipment or crew is needed.",
      },
    ],
  },

  "sammamish-appliance": {
    intro: `Sammamish's large planned-community homes frequently have large appliances, oversized refrigerators, side-by-side washer/dryer units, and chest freezers, that require professional equipment to move safely. Klahanie and Trossachs homes often have appliances on upper floors, and the HOA move-in rules in these communities require COIs and move-in window coordination even for appliance-only moves. Our Sammamish appliance crews use professional appliance dollies and stair walkers, and they're familiar with the HOA requirements in Sammamish's major planned communities.`,
    buildingCalloutsHeading: "Sammamish Appliance Moving Scenarios We Handle Regularly",
    buildingCallouts: `We handle appliance moves throughout Sammamish with specific experience in: Klahanie and Trossachs homes (HOA move-in coordination, COI required, large appliances on upper floors), Pine Lake and Beaver Lake properties (wooded-lot homes, long carry distances, large appliances), Sahalee gated community (advance access coordination, large appliances, stair walkers required), Sammamish Town Center mixed-use buildings (elevator coordination, standard move-in process), and Aldarra and Inglewood Hill homes (large single-family homes, oversized refrigerators, chest freezers).`,
    extraFaqs: [
      {
        q: "Do Sammamish HOA communities require a COI for appliance moves?",
        a: "Yes, many Sammamish HOA communities, including Klahanie and Trossachs, require a certificate of insurance (COI) naming the HOA as additional insured even for appliance-only moves. We carry general liability insurance and can provide a COI for any Sammamish HOA community. When you request a quote, let us know your community and we'll confirm the COI requirements and have the paperwork ready before move day.",
      },
      {
        q: "Can you move a large refrigerator up stairs in a Sammamish home?",
        a: "Yes. Upper-floor refrigerator moves are common in Sammamish's multi-story homes. We use professional stair walkers (motorized stair-climbing dollies) for refrigerators and other large appliances. For particularly narrow stairways or tight turns, we assess the route before committing and will tell you if door frame removal is needed to create clearance. Most Sammamish stair appliance moves are completed without any structural modification.",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // UNPACKING SERVICES — all 5 cities
  // ──────────────────────────────────────────────────────────────────────────

  "seattle-unpacking": {
    intro: `Unpacking services in Seattle are most in demand among South Lake Union tech workers who move frequently and don't have time to unpack between jobs, and among Capitol Hill and Belltown residents who are moving into smaller spaces and need help deciding what goes where. Our unpacking crews work systematically, kitchen first, then bedrooms, then living areas, and they don't just pull items out of boxes; they place everything in a logical location and break down all the boxes before they leave. For moves into Seattle high-rises with strict move-in windows, we can schedule unpacking for the day after move day so the elevator reservation doesn't constrain the unpacking timeline.`,
    buildingCalloutsHeading: "Seattle Unpacking Scenarios We Handle Regularly",
    buildingCallouts: `Our unpacking crews work throughout Seattle and are experienced with the specific challenges of each area: South Lake Union high-rises (unpacking scheduled day after move to avoid elevator window conflicts), Capitol Hill and First Hill apartments (smaller spaces, strategic placement to maximize storage), Magnolia and Madison Park homes (large homes, full-house unpacking over 1–2 days), Ballard and Fremont craftsman homes (kitchen unpacking with vintage cabinetry, careful placement), and Queen Anne homes (multiple floors, systematic room-by-room unpacking with box breakdown included).`,
    extraFaqs: [
      {
        q: "How long does unpacking take for a Seattle apartment?",
        a: "A 1-bedroom Seattle apartment typically takes 3–5 hours to unpack with a 2-person crew. A 2-bedroom apartment takes 5–8 hours. We work systematically, kitchen first, then bedrooms, then living areas, and we break down all boxes before we leave. For South Lake Union high-rises with strict elevator windows, we recommend scheduling unpacking for the day after move day so we're not racing against a building deadline.",
      },
      {
        q: "Do you put items away in cabinets and drawers, or just unbox them?",
        a: "We put everything away, dishes in cabinets, clothes in drawers, books on shelves. We take direction from you on where things should go, and if you're not sure, we suggest logical placements based on how kitchens and bedrooms are typically organized. We don't just pull items out of boxes and stack them on counters. The goal is for your new Seattle home to feel functional and settled when we leave.",
      },
    ],
  },

  "bellevue-unpacking": {
    intro: `Bellevue's unpacking service market is driven by its high concentration of corporate relocations, Microsoft, T-Mobile, and Expedia employees who arrive in Bellevue on tight timelines and need their homes functional as quickly as possible. Our unpacking crews work efficiently and systematically, prioritizing the rooms that make a home livable first: kitchen, master bedroom, and bathrooms. For moves into Downtown Bellevue high-rises, we coordinate with building management to ensure elevator access for the unpacking crew. For large Somerset and Newport Hills homes, we offer multi-day unpacking packages that work through the home room by room without rushing.`,
    buildingCalloutsHeading: "Bellevue Unpacking Scenarios We Handle Regularly",
    buildingCallouts: `Our unpacking crews work throughout Bellevue and are experienced with: Downtown Bellevue high-rises at The Bravern and Cirrus (elevator coordination for unpacking crew, COI required), Somerset and Newport Hills homes (large homes, multi-day unpacking packages, systematic room-by-room approach), Crossroads and Eastgate apartments (standard apartment unpacking, kitchen and bedroom priority), West Bellevue and Medina estates (high-value items, careful placement, custom shelving coordination), and Factoria and Wilburton townhomes (multi-floor unpacking, box breakdown included on all floors).`,
    extraFaqs: [
      {
        q: "Can you unpack a Bellevue home after a corporate relocation?",
        a: "Yes. Corporate relocation unpacking is one of our most common requests in Bellevue. We work with the relocating employee or their designated contact to prioritize rooms and placement. For employees on tight timelines, we can have a kitchen, master bedroom, and bathrooms fully unpacked and functional within a single day. We coordinate with the relocation management company if needed and provide a completion report at the end of the job.",
      },
      {
        q: "How many people do you send for a Bellevue unpacking job?",
        a: "For most Bellevue apartments and smaller homes, we send a 2-person unpacking crew. For large Somerset or Newport Hills homes with 4+ bedrooms, we recommend a 3-person crew to complete the job in a single day. We assess the scope during the quote process and recommend the right crew size. You can also request a specific crew size if you have a preference.",
      },
    ],
  },

  "redmond-unpacking": {
    intro: `Redmond's unpacking service market is shaped by the high volume of Microsoft and tech-sector employees who move to Redmond on corporate timelines and need their homes functional quickly. Our unpacking crews are based at our Redmond Way warehouse, which means zero travel time and fast scheduling for Redmond unpacking jobs. We work systematically, kitchen, master bedroom, and bathrooms first, and we take direction from the homeowner or their designated contact on placement. For Overlake apartment residents and Education Hill homeowners, we offer same-week unpacking scheduling in most cases.`,
    buildingCalloutsHeading: "Redmond Unpacking Scenarios We Handle Regularly",
    buildingCallouts: `Our unpacking crews work throughout Redmond and are experienced with: Overlake apartments near Microsoft's campus (elevator coordination, standard apartment unpacking, kitchen and bedroom priority), Education Hill homes (large homes, multi-day unpacking packages, systematic room-by-room approach), Bear Creek and Grass Lawn homes (wooded-lot properties, large homes, full-house unpacking), Downtown Redmond mixed-use buildings (elevator coordination, standard apartment unpacking), and Redmond Ridge HOA communities (move-in window coordination, unpacking crew COI required in some communities).`,
    extraFaqs: [
      {
        q: "Can you unpack a Redmond home the day after the move?",
        a: "Yes. Same-day or next-day unpacking is one of the most popular options for Redmond homeowners. We can schedule the unpacking crew to arrive the morning after your move day, when you've had a chance to sleep and think about where things should go. Because our warehouse is in Redmond, we have more scheduling flexibility than companies coming from Seattle or Bellevue. Call us when you book your move and we'll reserve an unpacking slot for the following day.",
      },
      {
        q: "Do you unpack boxes from a Redmond storage vault delivery?",
        a: "Yes. When we deliver your vault from our Redmond storage facility, we can schedule an unpacking crew to arrive at the same time or the following day. This is a popular option for Redmond residents who have been in temporary housing while waiting for their new home to be ready, we deliver the vault and unpack everything in one coordinated visit.",
      },
    ],
  },

  "kirkland-unpacking": {
    intro: `Kirkland's unpacking service market is driven by its active real estate market and the frequency with which families move into larger homes in Moss Bay, Highlands, and Kingsgate. Moving into a new home is exciting, but unpacking is exhausting, and for Kirkland families with young children or demanding work schedules, professional unpacking is often the difference between feeling settled in a week and living out of boxes for a month. Our Kirkland unpacking crews work systematically, prioritize the rooms that matter most, and break down every box before they leave.`,
    buildingCalloutsHeading: "Kirkland Unpacking Scenarios We Handle Regularly",
    buildingCallouts: `Our unpacking crews work throughout Kirkland and are experienced with: Downtown Kirkland waterfront homes (large homes, multi-day unpacking, kitchen and master bedroom priority), Moss Bay and Highlands homes (steep hillside properties, multi-floor unpacking, box breakdown on all floors), Totem Lake apartments near Google's campus (elevator coordination for unpacking crew, standard apartment unpacking), Juanita and Lakeview homes (hillside properties, systematic room-by-room approach), and Kingsgate and Finn Hill homes (newer construction, large homes, full-house unpacking packages).`,
    extraFaqs: [
      {
        q: "How long does unpacking take for a Kirkland family home?",
        a: "A typical 3-bedroom Kirkland home takes 6–10 hours to unpack with a 2-person crew. A 4-bedroom home in Moss Bay or Highlands takes 8–12 hours. For large homes, we recommend a 2-day unpacking schedule, completing the kitchen, master bedroom, and bathrooms on day one, and finishing the remaining rooms on day two. This gives you time to review placement after day one and make adjustments before we complete the rest of the home.",
      },
      {
        q: "Can you unpack a Kirkland home while I'm at work?",
        a: "Yes. Many Kirkland clients prefer to have unpacking done while they're at work so they come home to a settled house. We work with a designated contact, a family member, a neighbor with a key, or a property manager, and provide updates throughout the day. We take direction in advance on placement priorities and call if we have questions. At the end of the job, we send a completion summary so you know exactly what was done.",
      },
    ],
  },

  "sammamish-unpacking": {
    intro: `Sammamish's large planned-community homes present a significant unpacking challenge, a 4-bedroom Klahanie or Trossachs home can have 150–200 boxes, and unpacking them without professional help can take weeks. Our Sammamish unpacking crews are experienced with large homes and work efficiently: kitchen first, then master bedroom, then children's rooms, then living areas. We take direction from the homeowner on placement, we label shelves and drawers before filling them, and we break down every box before we leave. For Sammamish families with young children, we prioritize getting the kids' rooms functional first so the transition is as smooth as possible.`,
    buildingCalloutsHeading: "Sammamish Unpacking Scenarios We Handle Regularly",
    buildingCallouts: `Our unpacking crews work throughout Sammamish and are experienced with: Klahanie and Trossachs homes (large homes, 150–200 boxes, multi-day unpacking packages), Pine Lake and Beaver Lake properties (wooded-lot homes, large garages, outdoor equipment unpacking), Sahalee estate homes (high-value items, careful placement, custom shelving coordination), Sammamish Town Center mixed-use buildings (standard apartment unpacking, kitchen and bedroom priority), and Aldarra and Inglewood Hill homes (large single-family homes, full-house unpacking, box breakdown included).`,
    extraFaqs: [
      {
        q: "How long does it take to unpack a large Sammamish home?",
        a: "A typical 4-bedroom Sammamish home takes 10–16 hours to fully unpack with a 2-person crew. For large homes with 150+ boxes, we recommend a 2-day unpacking schedule. On day one, we complete the kitchen, master bedroom, and bathrooms, the rooms that make the home livable. On day two, we finish the remaining bedrooms, living areas, and garage. This approach lets you sleep in a functional home after day one without waiting for the entire house to be done.",
      },
      {
        q: "Do you unpack the garage and outdoor storage in Sammamish homes?",
        a: "Yes. Garage and outdoor storage unpacking is often the last priority but one of the most time-consuming parts of a Sammamish move. We unpack and organize garage items, tools, sports equipment, seasonal items, and place them in logical locations. For large garages with workshop equipment, we recommend discussing the layout in advance so we can place heavy items in their final positions before organizing smaller items around them.",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // WAREHOUSING / STORAGE VAULTS — all 5 cities
  // ──────────────────────────────────────────────────────────────────────────

  "seattle-warehousing": {
    intro: `Seattle businesses and residents needing warehousing and distribution services have a direct line to our Redmond facility, 12 miles from central Seattle, where we operate secure, climate-controlled vault storage for both commercial and residential clients. For Seattle businesses managing inventory overflow, staging furniture for model units, or storing equipment between projects, our warehousing operation provides a professional alternative to self-storage. We handle receiving, inventory tracking, and scheduled distribution. For residential clients, our vault storage service is the same operation described under storage, portable vaults, full inventory, and scheduled delivery.`,
    buildingCalloutsHeading: "Seattle Warehousing Clients We Serve Regularly",
    buildingCallouts: `Our Seattle warehousing clients include: South Lake Union tech companies storing office furniture and equipment during office renovations, Capitol Hill property management companies staging furniture for model apartment units, Downtown Seattle law firms and professional services offices storing archived files and equipment, Seattle real estate developers staging furniture for model homes and show units, and residential clients from Magnolia, Madison Park, and Queen Anne storing high-value furniture and art during home renovations. All items are inventoried on intake and tracked throughout the storage period.`,
    extraFaqs: [
      {
        q: "Can you receive and store furniture deliveries for a Seattle business?",
        a: "Yes. We offer receiving and warehousing services for Seattle businesses that need a local receiving address for furniture and equipment deliveries. We receive the delivery at our Redmond facility, inspect for damage, photograph and inventory every item, and store it until you're ready for delivery to your Seattle address. This is a popular service for businesses renovating offices or staging model units who need a staging location between the vendor and the final destination.",
      },
      {
        q: "What is the difference between vault storage and warehousing at your Redmond facility?",
        a: "Vault storage is our residential service, your belongings are loaded into a sealed portable vault and stored as a unit. Warehousing is our commercial service, items are received individually, inventoried, and stored on shelving or in designated floor space. Warehousing allows for individual item retrieval without accessing an entire vault. Both services are available to Seattle clients, and both are stored at our Redmond facility in a climate-controlled environment.",
      },
    ],
    pricingNote: "Seattle warehousing rates quoted based on volume and service level. Contact us for commercial rates.",
  },

  "bellevue-warehousing": {
    intro: `Bellevue's commercial warehousing needs are driven by its concentration of tech companies, professional services firms, and real estate developers who need a reliable local warehousing partner. Our Redmond facility, 5 miles from central Bellevue, provides climate-controlled vault and warehousing storage with full inventory tracking and scheduled distribution. For Bellevue businesses staging furniture for the Spring District's new office buildings, for property managers staging model units in Downtown Bellevue high-rises, and for corporate relocation managers coordinating employee moves, our warehousing operation provides the professional infrastructure that self-storage cannot.`,
    buildingCalloutsHeading: "Bellevue Warehousing Clients We Serve Regularly",
    buildingCallouts: `Our Bellevue warehousing clients include: Spring District tech companies storing office furniture and equipment during fit-outs, Downtown Bellevue property managers staging furniture for model units at The Bravern and Cirrus, Bellevue real estate developers storing model home furniture between projects, Microsoft and Expedia corporate relocation managers coordinating employee household goods storage, and West Bellevue and Medina estate homeowners storing high-value art and antiques during renovations. All items are inventoried on intake with photographs of high-value pieces.`,
    extraFaqs: [
      {
        q: "Do you offer warehousing for Bellevue office furniture during a renovation?",
        a: "Yes. Office furniture warehousing during renovation is one of our most common commercial requests from Bellevue businesses. We coordinate the pickup from your Bellevue office, transport everything to our Redmond facility, inventory every item, and store it until your renovation is complete. When you're ready, we deliver and reinstall furniture in your renovated space. We work weekends and after hours to minimize disruption to your business operations.",
      },
      {
        q: "Can you distribute furniture from your Redmond facility to multiple Bellevue addresses?",
        a: "Yes. Multi-stop distribution from our Redmond facility to Bellevue addresses is a standard service. This is commonly used by property managers staging multiple units in the same building, by real estate developers furnishing model homes across multiple projects, and by corporate relocation managers delivering household goods to employees at different Bellevue addresses. We provide a delivery schedule and confirmation for each stop.",
      },
    ],
    pricingNote: "Bellevue warehousing rates quoted based on volume and service level. Contact us for commercial rates.",
  },

  "redmond-warehousing": {
    intro: `Redmond is home to our warehousing and storage facility on Redmond Way, which means Redmond clients get the most direct and cost-effective warehousing service we offer. Microsoft's campus, Nintendo of America, and the growing number of tech companies in Overlake and the Redmond Town Center area create consistent demand for commercial warehousing, office furniture storage during renovations, equipment staging for new office fit-outs, and model unit furniture management for Redmond's new residential developments. Our facility is climate-controlled, fully inventoried, and staffed by the same crews who handle our moving operations.`,
    buildingCalloutsHeading: "Redmond Warehousing Clients We Serve Regularly",
    buildingCallouts: `Our Redmond warehousing clients include: Microsoft campus facilities teams storing office furniture and equipment during building renovations, Nintendo of America and other Overlake tech companies staging equipment for office moves, Redmond Town Center retail and restaurant operators storing fixtures and equipment during renovations, Redmond residential developers storing model home furniture between projects, and Education Hill and Bear Creek homeowners storing high-value furniture and art during major renovations. Our facility is 5 minutes from Microsoft's main campus.`,
    extraFaqs: [
      {
        q: "Can you warehouse and then deliver furniture to Microsoft's Redmond campus?",
        a: "Yes. We regularly receive, warehouse, and deliver furniture and equipment to Microsoft's Redmond campus. We're familiar with the campus's receiving dock procedures and security requirements. For large deliveries, we coordinate with the facilities team in advance to confirm dock availability and access credentials. Our Redmond Way facility is approximately 5 minutes from Microsoft's main campus, which makes same-day and next-day delivery straightforward.",
      },
      {
        q: "Do you offer inventory management for Redmond warehousing clients?",
        a: "Yes. Every item received at our Redmond facility is photographed, tagged, and logged in our inventory system. You receive a copy of the intake inventory with photos of high-value items. When you request delivery of specific items, we locate them in our system and stage them for your delivery window. For ongoing warehousing relationships, we provide monthly inventory reports so you always know exactly what's in storage.",
      },
    ],
    pricingNote: "Redmond warehousing rates: no travel surcharge. Facility is on-site. Contact us for commercial rates.",
  },

  "kirkland-warehousing": {
    intro: `Kirkland's warehousing needs are shaped by its growing tech sector, Google's major campus in Totem Lake, plus a growing number of startups and professional services firms, and by its active real estate market. Our Redmond facility is 5 miles from central Kirkland, making it the closest professional warehousing option for Kirkland businesses. For Google's facilities team managing office furniture during campus renovations, for Kirkland property managers staging model units in Totem Lake apartment buildings, and for Downtown Kirkland retailers storing seasonal inventory, our warehousing operation provides professional infrastructure at Eastside proximity.`,
    buildingCalloutsHeading: "Kirkland Warehousing Clients We Serve Regularly",
    buildingCallouts: `Our Kirkland warehousing clients include: Google Kirkland campus facilities teams storing office furniture during renovations, Totem Lake apartment property managers staging furniture for model units, Downtown Kirkland retailers storing seasonal inventory and fixtures, Kirkland real estate developers storing model home furniture between projects, and Moss Bay and Highlands homeowners storing high-value furniture and art during renovations. All items are inventoried on intake and tracked throughout the storage period.`,
    extraFaqs: [
      {
        q: "Can you warehouse and deliver furniture to Google's Kirkland campus?",
        a: "Yes. We regularly warehouse and deliver furniture and equipment to Google's Kirkland campus in Totem Lake. We're familiar with the campus's receiving procedures and coordinate with the facilities team in advance for large deliveries. Our Redmond facility is approximately 10 minutes from Google's Kirkland campus, which makes same-day and next-day delivery straightforward. We work with Google's facilities team directly or through their designated moving coordinator.",
      },
      {
        q: "Do you offer short-term warehousing for Kirkland real estate staging?",
        a: "Yes. Short-term staging warehousing is one of our most common requests from Kirkland real estate agents and developers. We receive staging furniture at our Redmond facility, hold it between projects, and deliver to Kirkland addresses on your schedule. For agents who stage multiple properties simultaneously, we track each property's furniture inventory separately so you always know which pieces are assigned to which listing.",
      },
    ],
    pricingNote: "Kirkland warehousing rates quoted based on volume and service level. Contact us for commercial rates.",
  },

  "sammamish-warehousing": {
    intro: `Sammamish's warehousing needs are primarily residential, large planned-community homes whose owners need professional storage during renovations, staging for sale, or downsizing. Our Redmond facility is 7 miles from central Sammamish, and our vault storage operation is the most convenient professional option for Sammamish homeowners who need more than a self-storage unit. For Sammamish businesses along SE 8th Street and near Sammamish Town Center, we offer commercial warehousing with inventory tracking and scheduled distribution. All items are stored in our climate-controlled Redmond facility.`,
    buildingCalloutsHeading: "Sammamish Warehousing Clients We Serve Regularly",
    buildingCallouts: `Our Sammamish warehousing clients include: Klahanie and Trossachs homeowners storing furniture during major renovations (multiple vaults, room-by-room inventory), Sahalee estate homeowners storing high-value art and antiques during renovations (climate-controlled vaults, custom crating available), Sammamish real estate developers storing model home furniture between projects, SE 8th Street businesses storing equipment and inventory during office renovations, and Pine Lake and Beaver Lake homeowners storing outdoor furniture and equipment during winter months.`,
    extraFaqs: [
      {
        q: "Can you warehouse furniture from a Sammamish home during a major renovation?",
        a: "Yes. Home renovation warehousing is one of our most common requests from Sammamish homeowners. We vault your furniture room by room as the renovation progresses, clearing the kitchen before the kitchen renovation, then returning it when the work is done before moving on to the next room. We provide a detailed inventory of every item in storage and can return specific pieces on request without requiring a full vault delivery.",
      },
      {
        q: "How far is your warehousing facility from Sammamish?",
        a: "Our warehousing and storage facility is on Redmond Way in Redmond, WA, approximately 7 miles from central Sammamish, a 12-minute drive via SE 8th Street and 228th Ave SE. For Sammamish clients, we handle all transportation between your home and our facility, you never need to drive to the warehouse. We pick up your items, store them, and deliver them back when you're ready.",
      },
    ],
    pricingNote: "Sammamish warehousing rates quoted based on volume and service level. Contact us for commercial rates.",
  },

  "sammamish-packing": {
    intro: `Sammamish is defined by its large single-family homes in planned communities, and packing these homes is a significant undertaking. Klahanie and Trossachs homes tend to be large and well-furnished, with extensive contents that benefit from professional packing. Pine Lake and Beaver Lake properties often have large garages, workshop equipment, and outdoor furniture that requires weatherproofing for storage. The HOA move-out inspection requirements in Klahanie and Trossachs mean that every item needs to be properly wrapped and padded before it leaves your home. Our Sammamish packing crews bring all materials and are experienced with the full range of packing scenarios for large Eastside homes.`,
    buildingCalloutsHeading: "Packing Services Across Sammamish Neighborhoods",
    buildingCallouts: `Our packing crews work throughout Sammamish and are experienced with the specific requirements of each community: Klahanie (large homes, HOA move-out inspection compliance, COI required), Trossachs (large single-family homes, extensive contents, full-pack service common), Pine Lake and Beaver Lake (wooded-lot homes, large garages, outdoor equipment, weatherproof packing), Sahalee (gated estate homes, high-value contents, custom crating available), and Sammamish Town Center (mixed-use apartments, standard packing).`,
    extraFaqs: [
      {
        q: "How long does it take to pack a large Sammamish home?",
        a: "A typical 4-bedroom Sammamish home takes 8–12 hours to pack with a 2-person crew. Homes with large garages, workshop equipment, or extensive outdoor furniture take longer. For large Sammamish homes, we recommend a 2-day packing schedule, packing the main living areas on day one and the garage and outdoor items on day two, so everything is ready when the truck arrives on move day.",
      },
      {
        q: "Do you pack outdoor furniture and garage equipment for Sammamish moves?",
        a: "Yes. Outdoor furniture, grills, lawn equipment, and garage tools are often the most time-consuming part of a Sammamish move. We bring heavy-duty boxes, stretch wrap, and weatherproof packing materials for outdoor items. For large power tools and equipment, we can disassemble and wrap components for safe transport. For items going into storage, we use weatherproof wrapping to protect against moisture.",
      },
    ],
  },

// ===================================================================
// BOTHELL
// ===================================================================

  "bothell-residential": {
    intro: `Bothell's residential moving market spans two counties, King and Snohomish, and our crews navigate both with ease. North Creek and Queensborough are the city's largest planned communities, with HOA move-in rules that require certificates of insurance and designated move windows. Canyon Park's newer construction features large homes with long driveways and oversized furniture that demands proper equipment. Downtown Bothell's revitalized core has older homes with narrow doorways and limited street parking, our crews scout access points before move day. I-405 and SR-522 are the main corridors; we schedule around peak traffic to keep your move on time. Our Redmond warehouse is 11 miles south, a fast 18-minute drive.`,
    buildingCalloutsHeading: "Residential Moving Across Bothell Neighborhoods",
    buildingCallouts: `On The Go Moving serves every Bothell neighborhood: North Creek (HOA coordination, COI required, large single-family homes), Queensborough (planned community, HOA move-in rules, newer construction), Canyon Park (dense residential and office mix, large homes, long driveways), Downtown Bothell (older homes, narrow streets, limited parking, historic character), Thrasher's Corner (newer suburban homes, standard access), and Westhill (established residential, mix of home sizes).`,
    extraFaqs: [
      {
        q: "Do you handle moves that cross the King/Snohomish county line in Bothell?",
        a: "Yes. Bothell straddles King and Snohomish counties, and many moves within the city cross the county line. Our license covers both counties, there's no additional charge or complication for cross-county moves within Bothell.",
      },
      {
        q: "How do you handle HOA move-in requirements in North Creek and Queensborough?",
        a: "We're experienced with both communities. We provide certificates of insurance on request, coordinate with HOA management for move-in windows, and ensure our crews follow all community rules. We recommend contacting your HOA 2–3 weeks before your move to confirm requirements.",
      },
    ],
  },
  "bothell-apartment": {
    intro: `Bothell's apartment market is concentrated in Canyon Park and Downtown Bothell's newer mixed-use buildings. Canyon Park has seen significant apartment development over the past decade, with buildings that require elevator reservations and certificates of insurance. Downtown Bothell's revitalized core has brought new mixed-use buildings along Main Street with standard elevator and move-in window requirements. Our crews coordinate directly with building management to secure your elevator reservation and confirm move-in windows before move day, so you're not scrambling the morning of your move.`,
    buildingCalloutsHeading: "Apartment Buildings We Serve in Bothell",
    buildingCallouts: `Our apartment moving crews are experienced throughout Bothell: Canyon Park apartment complexes (elevator reservations required, COI required, standard move-in windows), Downtown Bothell mixed-use buildings along Main Street (elevator coordination, limited street parking, weekday and weekend moves available), North Creek apartment communities (standard move-in requirements, HOA coordination), and Thrasher's Corner apartment complexes (newer buildings, standard access, ample parking).`,
    extraFaqs: [
      {
        q: "How do I get a certificate of insurance for my Canyon Park apartment move?",
        a: "We provide certificates of insurance at no charge for all apartment moves. Just send us your building management's requirements, typically the building's name, address, and required coverage amounts, and we'll issue the COI within 24 hours.",
      },
      {
        q: "Can you move me into a new Canyon Park apartment on a weekend?",
        a: "Yes. We offer weekend moves throughout Canyon Park and Downtown Bothell. Weekend availability fills quickly in summer, we recommend booking 2–3 weeks in advance for weekend dates.",
      },
    ],
  },
  "bothell-packing": {
    intro: `Bothell's mix of large planned-community homes and older downtown properties creates a wide range of packing scenarios. North Creek and Queensborough homes tend to be large and well-furnished, full-pack service is common for these moves, and our crews bring all materials. Canyon Park homes often have large garages with workshop equipment and outdoor furniture that requires weatherproof packing. Downtown Bothell's older homes sometimes have fragile antiques and collectibles that need custom wrapping. Whatever your Bothell home contains, our packing crews have the materials and experience to protect it.`,
    buildingCalloutsHeading: "Packing Services Across Bothell Neighborhoods",
    buildingCallouts: `Our packing crews serve all Bothell neighborhoods: North Creek and Queensborough (large homes, extensive contents, HOA move-out compliance, full-pack service common), Canyon Park (large garages, workshop equipment, outdoor furniture, weatherproof packing), Downtown Bothell (older homes, antiques and collectibles, custom wrapping available), and Thrasher's Corner (newer suburban homes, standard packing, efficient turnaround).`,
    extraFaqs: [
      {
        q: "How long does it take to pack a large North Creek home?",
        a: "A typical 4-bedroom North Creek home takes 8–12 hours to pack with a 2-person crew. Homes with large garages or workshop equipment take longer. We recommend a 2-day packing schedule for large Bothell homes, packing the main living areas on day one and the garage and outdoor items on day two.",
      },
      {
        q: "Do you pack antiques and collectibles in Downtown Bothell homes?",
        a: "Yes. We have experience packing antiques, artwork, and collectibles. We use custom wrapping, double-boxing, and specialty packing materials for fragile and high-value items. For very high-value pieces, we can arrange custom crating.",
      },
    ],
  },
  "bothell-commercial": {
    intro: `Canyon Park is one of the largest office parks in the north Eastside, and it's one of our most active commercial moving areas. The park's mix of tech companies, professional services firms, and medical offices means we handle everything from standard workstation moves to sensitive IT equipment and medical device relocation. Downtown Bothell's growing commercial corridor has added retail and restaurant moves to our Bothell workload. We work after hours and on weekends to minimize business disruption, and our project managers coordinate directly with your facilities team.`,
    buildingCalloutsHeading: "Commercial Moving in Bothell's Business Districts",
    buildingCallouts: `We serve Bothell's major commercial areas: Canyon Park Business Center (large office campus, IT equipment handling, after-hours moves, workstation disassembly/reassembly), North Creek Business Park (tech and professional services, sensitive equipment, weekend moves), Downtown Bothell commercial corridor (retail and restaurant moves, storefront access, flexible scheduling), and Thrasher's Corner commercial area (standard office moves, ample parking, efficient access).`,
    extraFaqs: [
      {
        q: "Do you handle IT equipment moves in Canyon Park?",
        a: "Yes. Canyon Park is one of our most active IT equipment move areas. Our crews are trained on proper handling for servers, workstations, and networking equipment. We use anti-static bags, custom crating, and climate-controlled transport for sensitive equipment.",
      },
      {
        q: "Can you move our Canyon Park office over a weekend to avoid downtime?",
        a: "Yes. Weekend moves are standard for Canyon Park office relocations. We coordinate with your facilities team to plan the move sequence, handle IT equipment first, and have your new space operational by Monday morning.",
      },
    ],
  },
  "bothell-storage": {
    intro: `Bothell residents and businesses frequently need storage during moves, whether bridging a gap between closing dates, downsizing from a North Creek family home, or staging a Canyon Park office relocation. Our secure, climate-controlled storage facility in Redmond is 11 miles south of Bothell, a fast 18-minute drive via I-405. We offer month-to-month storage with no long-term contracts, and storage is available month-to-month, contact us for current pricing. Items are stored in individual vaulted units, your belongings are never co-mingled with other customers' items.`,
    buildingCalloutsHeading: "Storage Solutions for Bothell Residents and Businesses",
    buildingCallouts: `Common Bothell storage scenarios we handle: North Creek and Queensborough home downsizing (large furniture, seasonal items, long-term storage available), Canyon Park office staging (furniture, equipment, records storage during office relocation), Downtown Bothell home renovation storage (full household contents, month-to-month, secure vault storage available), and business inventory storage (palletized storage, forklift access, commercial rates available).`,
    extraFaqs: [
      {
        q: "How far is your storage facility from Bothell?",
        a: "Our Redmond storage facility is 11 miles south of Bothell, about 18 minutes via I-405. We can pick up your items in Bothell and deliver them to storage, then deliver back to your new Bothell address when you're ready.",
      },
      {
        q: "Do you offer long-term storage for Bothell residents who are relocating out of state?",
        a: "Yes. We offer month-to-month storage with no minimum commitment. Many Bothell residents use our storage while they're between homes or waiting for a new home to close. We can store your belongings for as long as you need.",
      },
    ],
  },
  "bothell-senior": {
    intro: `Senior moves in Bothell require patience, careful planning, and crews who understand that this move is more than just boxes and furniture. Whether you're downsizing from a large North Creek home into a smaller residence, or moving a parent into one of Bothell's assisted living communities, our senior moving crews bring the care and communication that makes the difference. We work at a pace that's comfortable for seniors, handle fragile items with extra care, and coordinate directly with family members who are managing the move remotely.`,
    buildingCalloutsHeading: "Senior Moving Resources in Bothell",
    buildingCallouts: `We regularly assist seniors moving to and from Bothell's senior communities: Sunrise of Bothell (assisted living, coordinated move-in, elevator access), Brookdale Bothell (memory care and assisted living, move-in coordination with staff), Chateau at Bothell Landing (independent living, standard move-in requirements), and private residences throughout North Creek, Queensborough, and Canyon Park (downsizing, estate moves, family coordination).`,
    extraFaqs: [
      {
        q: "How do you coordinate a senior move into an assisted living facility in Bothell?",
        a: "We contact the facility in advance to confirm move-in procedures, elevator access, and any items that cannot be brought in. On move day, we coordinate with facility staff to ensure a smooth transition. We can also help with furniture placement in the new room.",
      },
      {
        q: "Can you help downsize a large North Creek home for a senior move?",
        a: "Yes. We work with seniors and their families on downsizing moves. We can move selected items to the new residence, transport donations to local charities, and coordinate with junk removal services for items that won't be kept. We take the logistics off your plate.",
      },
    ],
  },
  "bothell-furniture": {
    intro: `Bothell's large North Creek and Queensborough homes are full of oversized furniture, sectional sofas, king beds, dining sets, and entertainment centers that challenge even experienced movers. Canyon Park's newer construction often features open-plan layouts where furniture was assembled in place and can't exit through standard doorways without disassembly. Our Bothell furniture crews carry the right equipment for every scenario: furniture boards, appliance dollies, stair-climbing hand trucks, and moving straps. Single-item moves, in-home rearranging, or full furniture relocation, we handle all of it.`,
    buildingCalloutsHeading: "Furniture Moving Across Bothell",
    buildingCallouts: `Our furniture crews serve all Bothell neighborhoods: North Creek and Queensborough (large homes, oversized furniture, HOA move-in coordination), Canyon Park (newer construction, open-plan layouts, furniture disassembly/reassembly), Downtown Bothell (older homes, narrow doorways and staircases, careful maneuvering required), and Thrasher's Corner (standard suburban homes, efficient access, ample parking).`,
    extraFaqs: [
      {
        q: "Can you move a large sectional sofa out of a North Creek home?",
        a: "Yes. Large sectional sofas are one of the most common furniture challenges in North Creek and Queensborough homes. Our crews assess the best exit path, sometimes through a sliding door or garage, and disassemble sectionals when needed to navigate doorways safely.",
      },
      {
        q: "Do you offer in-home furniture rearranging in Bothell?",
        a: "Yes. We offer in-home furniture rearranging throughout Bothell. Our crews bring dollies and moving equipment to safely move heavy furniture within your home without damaging floors or walls. Minimum 2-hour booking applies.",
      },
    ],
  },
  "bothell-appliance": {
    intro: `Appliance moves in Bothell require the right equipment and the right technique. A refrigerator dragged across hardwood floors in a North Creek home leaves scratches that cost more to fix than the moving service. Our Bothell appliance crews use appliance dollies, floor runners, and moving straps on every job, the refrigerator never touches your floor directly. We move refrigerators, washers, dryers, dishwashers, and large ranges throughout Bothell, and we coordinate disconnection and reconnection assistance for standard appliances.`,
    buildingCalloutsHeading: "Appliance Moving Across Bothell",
    buildingCallouts: `Our appliance moving crews serve all Bothell neighborhoods: North Creek and Queensborough (large homes, multiple appliances, hardwood floor protection), Canyon Park (newer construction, standard appliance access, garage appliance moves), Downtown Bothell (older homes, narrow doorways, careful maneuvering), and Thrasher's Corner (standard suburban homes, efficient appliance moves).`,
    extraFaqs: [
      {
        q: "Can you disconnect and reconnect appliances in Bothell?",
        a: "We can disconnect and reconnect standard appliances including washers, dryers, and refrigerators with standard water line connections. For gas appliances, we recommend a licensed plumber for disconnection and reconnection.",
      },
      {
        q: "How much does it cost to move a refrigerator in Bothell?",
        a: "A single appliance move in Bothell typically costs $150–$350 depending on size, weight, and distance. Multiple appliance moves are priced hourly at $120–$160/hr. We provide flat-rate quotes for all appliance jobs.",
      },
    ],
  },
  "bothell-unpacking": {
    intro: `After a Bothell move, the last thing most people want to do is face a house full of boxes. Our unpacking crews come in after your move and turn those stacked boxes into a functional home. We unpack room by room, place items where you want them, and remove all packing materials when we're done. For large North Creek and Queensborough homes, we recommend scheduling unpacking for the day after your move, it's more efficient and less chaotic than trying to unpack while the moving crew is still working.`,
    buildingCalloutsHeading: "Unpacking Services Across Bothell",
    buildingCallouts: `Our unpacking crews serve all Bothell neighborhoods and specialize in: North Creek and Queensborough (large homes, extensive contents, full-unpack service, box removal), Canyon Park (newer construction, efficient layouts, kitchen and bedroom unpacking), Downtown Bothell (older homes, careful placement of antiques and collectibles), and Thrasher's Corner (standard suburban homes, efficient unpacking turnaround).`,
    extraFaqs: [
      {
        q: "How long does it take to unpack a large Bothell home?",
        a: "A typical 4-bedroom Bothell home takes 6–10 hours to unpack with a 2-person crew. We work room by room and remove all packing materials as we go. For large North Creek homes, we recommend a full-day unpacking service.",
      },
      {
        q: "Do you remove boxes and packing materials after unpacking in Bothell?",
        a: "Yes. We remove all boxes and packing materials at the end of the unpacking service. We break down boxes and take them with us, you don't need to arrange separate recycling pickup.",
      },
    ],
  },
  "bothell-warehousing": {
    intro: `Bothell businesses in Canyon Park and along the SR-522 corridor frequently need warehousing and distribution support, whether for office furniture during a relocation, inventory overflow, or equipment staging. Our Redmond warehouse facility is 11 miles south of Bothell, offering climate-controlled storage, palletized storage with forklift access, and flexible month-to-month terms. We handle the full logistics chain: pickup from your Bothell location, storage at our facility, and delivery to your new address or distribution point.`,
    buildingCalloutsHeading: "Warehousing and Distribution for Bothell Businesses",
    buildingCallouts: `We serve Bothell's major business areas with warehousing solutions: Canyon Park Business Center (office furniture storage, equipment staging, IT equipment storage), North Creek Business Park (inventory overflow, palletized storage, forklift access), Downtown Bothell commercial (retail inventory, seasonal storage, flexible terms), and Thrasher's Corner commercial (standard warehousing, efficient pickup and delivery).`,
    extraFaqs: [
      {
        q: "Do you offer short-term warehousing for Canyon Park office relocations?",
        a: "Yes. Short-term warehousing is one of our most common services for Canyon Park office relocations. We store furniture and equipment during the transition and deliver to your new location when it's ready. Month-to-month terms, no long-term commitment required.",
      },
      {
        q: "Can you handle palletized inventory storage for a Bothell business?",
        a: "Yes. Our Redmond facility has forklift access and can handle palletized inventory storage. We offer commercial rates for businesses with ongoing storage needs. Contact us for a custom quote based on your volume and service level.",
      },
    ],
  },

// ===================================================================
// ISSAQUAH
// ===================================================================

  "issaquah-residential": {
    intro: `Issaquah's residential moving landscape is defined by its hillside geography and its large planned communities. Issaquah Highlands sits on a ridge above the city, with steep internal roads that require experienced drivers and properly loaded trucks. Talus has strict HOA move-in rules including certificates of insurance and designated move windows. Historic Downtown Issaquah has narrow streets with limited truck parking, our crews arrive early to secure the best access position. I-90 makes Issaquah one of our most efficient service areas from our Redmond warehouse, just 10 miles northwest.`,
    buildingCalloutsHeading: "Residential Moving Across Issaquah Neighborhoods",
    buildingCallouts: `On The Go Moving serves every Issaquah neighborhood: Issaquah Highlands (steep internal roads, HOA coordination, large single-family homes, COI required), Talus (strict HOA move-in rules, newer construction, COI required), Downtown Issaquah (narrow streets, limited parking, older homes, historic character), Grand Ridge (newer development, standard access, large homes), Montreux (gated community, estate homes, advance coordination required), and Gilman Village (mixed residential/retail, standard access).`,
    extraFaqs: [
      {
        q: "How do you navigate the steep roads in Issaquah Highlands?",
        a: "Our drivers know Issaquah Highlands well. We use the most efficient truck access routes and load trucks with weight distribution optimized for hillside driving. For very steep driveways, we use our smaller trucks for the initial approach and stage the larger truck at a safe distance.",
      },
      {
        q: "What HOA documentation do I need for a Talus move?",
        a: "Talus typically requires a certificate of insurance from your moving company, advance notice to HOA management, and adherence to designated move-in windows. We provide COIs at no charge and recommend contacting Talus HOA management 2–3 weeks before your move to confirm current requirements.",
      },
    ],
  },
  "issaquah-apartment": {
    intro: `Issaquah's apartment market is centered around Issaquah Highlands and the newer mixed-use developments near downtown. Highlands apartment buildings have standard elevator and move-in window requirements, our crews coordinate directly with building management to secure your reservation before move day. The newer buildings near Gilman Village and Front Street have similar requirements. Most Issaquah apartment moves complete in 2–4 hours, and we provide flat-rate quotes so you know the final price before we start.`,
    buildingCalloutsHeading: "Apartment Buildings We Serve in Issaquah",
    buildingCallouts: `Our apartment moving crews are experienced throughout Issaquah: Issaquah Highlands apartment communities (elevator reservations required, COI required, standard move-in windows, hillside access), Gilman Village mixed-use apartments (standard move-in requirements, limited street parking, weekday and weekend moves), Front Street apartment buildings (newer construction, elevator coordination, efficient access), and Talus apartment units (HOA coordination, COI required, advance scheduling recommended).`,
    extraFaqs: [
      {
        q: "Do Issaquah Highlands apartment buildings require a certificate of insurance?",
        a: "Most Issaquah Highlands apartment buildings require a COI from your moving company. We provide certificates of insurance at no charge, just send us your building's requirements and we'll issue the COI within 24 hours.",
      },
      {
        q: "How far in advance should I book an Issaquah apartment move?",
        a: "We recommend booking 2–3 weeks in advance for Issaquah apartment moves, especially for Highlands buildings where elevator reservations fill quickly on weekends and end-of-month dates.",
      },
    ],
  },
  "issaquah-packing": {
    intro: `Issaquah Highlands homes are large and well-furnished, full-pack service is common for these moves, and our crews bring all materials. Talus homes often have extensive outdoor furniture and garage equipment that requires weatherproof packing. Historic Downtown Issaquah homes sometimes contain antiques and collectibles that need custom wrapping. Whatever your Issaquah home contains, our packing crews have the experience and materials to protect it for the move.`,
    buildingCalloutsHeading: "Packing Services Across Issaquah Neighborhoods",
    buildingCallouts: `Our packing crews serve all Issaquah neighborhoods: Issaquah Highlands (large homes, extensive contents, HOA move-out compliance, full-pack service common), Talus (large garages, outdoor furniture, weatherproof packing, HOA compliance), Downtown Issaquah (older homes, antiques and collectibles, custom wrapping available), Grand Ridge (newer construction, standard packing, efficient turnaround), and Montreux (estate homes, high-value contents, custom crating available).`,
    extraFaqs: [
      {
        q: "How long does it take to pack a large Issaquah Highlands home?",
        a: "A typical 4-bedroom Issaquah Highlands home takes 8–14 hours to pack with a 2-person crew. Homes with large garages or extensive outdoor furniture take longer. We recommend a 2-day packing schedule for large Highlands homes.",
      },
      {
        q: "Can you pack wine collections for Issaquah moves?",
        a: "Yes. We pack wine collections with proper padding and temperature-aware wrapping. For large collections, we recommend our full packing service to ensure every bottle is properly protected. We can also arrange climate-controlled transport for valuable collections.",
      },
    ],
  },
  "issaquah-commercial": {
    intro: `Issaquah's business community is concentrated along Front Street and in the Gilman Village area, with a growing tech presence near I-90. Our commercial crews handle office moves with minimal disruption, we work after hours and on weekends, and our project managers coordinate directly with your facilities team. For tech companies near I-90, we have experience with sensitive IT equipment handling and workstation disassembly/reassembly. Flat-rate quotes available for all Issaquah commercial moves.`,
    buildingCalloutsHeading: "Commercial Moving in Issaquah's Business Districts",
    buildingCallouts: `We serve Issaquah's major commercial areas: Front Street business corridor (retail and office moves, standard access, flexible scheduling), Gilman Village commercial (retail and restaurant moves, historic buildings, careful access), I-90 tech corridor (IT equipment handling, workstation moves, after-hours available), and Issaquah Highlands commercial (office parks, standard move-in requirements, ample parking).`,
    extraFaqs: [
      {
        q: "Do you handle IT equipment moves for Issaquah tech companies?",
        a: "Yes. We regularly move IT equipment for tech companies near I-90 and in Issaquah Highlands. Our crews use anti-static bags, custom crating, and climate-controlled transport for sensitive equipment.",
      },
      {
        q: "Can you move a Gilman Village retail store after hours?",
        a: "Yes. We offer after-hours and weekend moves for Gilman Village retail stores. We coordinate with building management and work efficiently to minimize your downtime.",
      },
    ],
  },
  "issaquah-storage": {
    intro: `Issaquah residents frequently need storage during moves, whether bridging a gap between closing dates, downsizing from a large Highlands home, or staging a relocation. Our secure, climate-controlled storage facility in Redmond is 10 miles from Issaquah via I-90, a fast 15-minute drive. We offer month-to-month storage with no long-term contracts, and storage is available month-to-month, contact us for current pricing. Items are stored in individual vaulted units, your belongings are never co-mingled with other customers' items.`,
    buildingCalloutsHeading: "Storage Solutions for Issaquah Residents and Businesses",
    buildingCallouts: `Common Issaquah storage scenarios we handle: Issaquah Highlands home downsizing (large furniture, seasonal items, long-term storage available), Talus home renovation storage (full household contents, month-to-month, secure vault storage available), Downtown Issaquah estate storage (antiques, collectibles, climate-controlled units), and business inventory storage (palletized storage, forklift access, commercial rates available).`,
    extraFaqs: [
      {
        q: "How far is your storage facility from Issaquah?",
        a: "Our Redmond storage facility is 10 miles from Issaquah via I-90, about 15 minutes. We can pick up your items in Issaquah and deliver them to storage, then deliver back to your new Issaquah address when you're ready.",
      },
      {
        q: "Do you offer climate-controlled storage for antiques from Downtown Issaquah homes?",
        a: "Yes. Our Redmond facility is climate-controlled, making it suitable for antiques, artwork, wine collections, and other temperature-sensitive items. All storage units maintain consistent temperature and humidity year-round.",
      },
    ],
  },
  "issaquah-senior": {
    intro: `Senior moves in Issaquah often involve downsizing from large Highlands or Talus homes into smaller residences or assisted living communities. Our senior moving crews understand that this transition is significant, we work at a pace that's comfortable, handle fragile items with extra care, and coordinate with family members who may be managing the move from a distance. We regularly assist seniors moving into Issaquah's assisted living communities and can help navigate the specific move-in requirements for each facility.`,
    buildingCalloutsHeading: "Senior Moving Resources in Issaquah",
    buildingCallouts: `We regularly assist seniors moving to and from Issaquah's senior communities: Emerald City Senior Living (assisted living, coordinated move-in), Issaquah Senior Center area residences (independent living, standard move-in), private residences throughout Issaquah Highlands and Talus (downsizing, estate moves, family coordination), and moves to senior communities in nearby Bellevue, Sammamish, and Renton.`,
    extraFaqs: [
      {
        q: "Can you help downsize a large Issaquah Highlands home for a senior move?",
        a: "Yes. We work with seniors and their families on downsizing moves from large Highlands homes. We move selected items to the new residence, transport donations to local charities, and coordinate with junk removal services for items that won't be kept.",
      },
      {
        q: "How do you handle the steep driveways in Issaquah Highlands for senior moves?",
        a: "We assess the driveway in advance and bring the appropriate equipment. For very steep driveways, we use our smaller trucks for the initial approach. We take extra time on senior moves to ensure nothing is rushed or damaged.",
      },
    ],
  },
  "issaquah-furniture": {
    intro: `Issaquah Highlands homes are large and full of oversized furniture, sectionals, king beds, and dining sets that challenge even experienced movers on the community's steep internal roads. Talus homes often have furniture that was assembled in place and requires disassembly to exit through standard doorways. Our Issaquah furniture crews carry furniture boards, appliance dollies, stair-climbing hand trucks, and moving straps on every job. Single-item moves, in-home rearranging, or full furniture relocation, we handle all of it.`,
    buildingCalloutsHeading: "Furniture Moving Across Issaquah",
    buildingCallouts: `Our furniture crews serve all Issaquah neighborhoods: Issaquah Highlands (steep roads, large homes, oversized furniture, HOA coordination), Talus (newer construction, furniture disassembly/reassembly, HOA compliance), Downtown Issaquah (older homes, narrow doorways, careful maneuvering), Grand Ridge (newer construction, standard access, large furniture common), and Montreux (estate homes, high-value furniture, white-glove handling available).`,
    extraFaqs: [
      {
        q: "Can you move furniture up and down the steep roads in Issaquah Highlands?",
        a: "Yes. Our drivers and crews are experienced with Issaquah Highlands' steep internal roads. We load trucks with proper weight distribution for hillside driving and use the safest access routes for each property.",
      },
      {
        q: "Do you offer furniture disassembly and reassembly in Issaquah?",
        a: "Yes. We disassemble and reassemble furniture as needed for moves throughout Issaquah. Common items include bed frames, large dining tables, sectional sofas, and wardrobe systems. Disassembly and reassembly is included in our standard move pricing.",
      },
    ],
  },
  "issaquah-appliance": {
    intro: `Appliance moves in Issaquah require careful planning, especially in Issaquah Highlands, where steep driveways and hillside access add complexity. Our Issaquah appliance crews use appliance dollies, floor runners, and moving straps on every job to protect both the appliance and your floors. We move refrigerators, washers, dryers, dishwashers, and large ranges throughout Issaquah, and we coordinate disconnection and reconnection assistance for standard appliances.`,
    buildingCalloutsHeading: "Appliance Moving Across Issaquah",
    buildingCallouts: `Our appliance moving crews serve all Issaquah neighborhoods: Issaquah Highlands (steep driveways, careful appliance handling, floor protection), Talus (newer construction, standard appliance access, garage appliance moves), Downtown Issaquah (older homes, narrow doorways, careful maneuvering), and Grand Ridge (newer construction, standard appliance moves, efficient turnaround).`,
    extraFaqs: [
      {
        q: "How do you move appliances on steep Issaquah Highlands driveways?",
        a: "We use appliance dollies with straps and wheel chocks for steep driveway appliance moves. Our crews are trained on safe appliance handling on inclines. For very steep driveways, we use our smaller trucks for the initial approach.",
      },
      {
        q: "Can you move a wine refrigerator or beverage cooler in Issaquah?",
        a: "Yes. We regularly move wine refrigerators and beverage coolers in Issaquah. We empty and pad these units before moving, and we can coordinate with a wine storage specialist if you need climate-controlled transport for valuable collections.",
      },
    ],
  },
  "issaquah-unpacking": {
    intro: `After a move into Issaquah Highlands or Talus, the last thing you want to face is a house full of boxes. Our unpacking crews come in after your move and turn those stacked boxes into a functional home, room by room, with all packing materials removed when we're done. For large Highlands homes, we recommend scheduling unpacking for the day after your move for maximum efficiency.`,
    buildingCalloutsHeading: "Unpacking Services Across Issaquah",
    buildingCallouts: `Our unpacking crews serve all Issaquah neighborhoods: Issaquah Highlands (large homes, extensive contents, full-unpack service, box removal), Talus (newer construction, efficient layouts, kitchen and bedroom unpacking), Downtown Issaquah (older homes, careful placement of antiques and collectibles), and Grand Ridge (newer construction, standard unpacking, efficient turnaround).`,
    extraFaqs: [
      {
        q: "How long does it take to unpack a large Issaquah Highlands home?",
        a: "A typical 4-bedroom Issaquah Highlands home takes 6–10 hours to unpack with a 2-person crew. We work room by room and remove all packing materials as we go. For large Highlands homes, we recommend a full-day unpacking service.",
      },
      {
        q: "Can you unpack and organize a kitchen in an Issaquah home?",
        a: "Yes. Kitchen unpacking and organization is one of our most popular services. We unpack all kitchen boxes, place items in logical locations, and remove all packing materials. You can direct placement or let us use our standard kitchen organization approach.",
      },
    ],
  },
  "issaquah-warehousing": {
    intro: `Issaquah businesses along Front Street and near I-90 frequently need warehousing support during relocations or for inventory overflow. Our Redmond warehouse facility is 10 miles from Issaquah via I-90, offering climate-controlled storage, palletized storage with forklift access, and flexible month-to-month terms. We handle the full logistics chain: pickup from your Issaquah location, storage at our facility, and delivery to your new address or distribution point.`,
    buildingCalloutsHeading: "Warehousing and Distribution for Issaquah Businesses",
    buildingCallouts: `We serve Issaquah's major business areas with warehousing solutions: Front Street business corridor (office furniture storage, retail inventory, flexible terms), I-90 tech corridor (IT equipment staging, workstation storage, climate-controlled units), Gilman Village commercial (retail inventory, seasonal storage, efficient pickup and delivery), and Issaquah Highlands commercial (office furniture, equipment staging, standard warehousing).`,
    extraFaqs: [
      {
        q: "Do you offer warehousing for Issaquah tech companies during office relocations?",
        a: "Yes. We regularly provide warehousing for tech companies near I-90 during office relocations. We store furniture and equipment during the transition and deliver to your new location when it's ready.",
      },
      {
        q: "Can you store wine inventory for an Issaquah wine business?",
        a: "Our climate-controlled facility is suitable for wine storage. For large commercial wine inventories, contact us for a custom quote based on your volume and storage requirements.",
      },
    ],
  },

// ===================================================================
// RENTON
// ===================================================================

  "renton-residential": {
    intro: `Renton is one of King County's most diverse and rapidly growing cities, and its residential moving market reflects that diversity. The Landing near Renton Airport has dense apartment buildings with standard elevator and move-in window requirements. Kennydale and Talbot Hill feature homes on steep hillside lots, our crews know the best access routes for each neighborhood. Fairwood and Cascade are established suburban neighborhoods with standard access. I-405 is the main corridor; our crews plan around peak traffic to keep your Renton move on time. Our Redmond warehouse is 13 miles north, a 20-minute drive.`,
    buildingCalloutsHeading: "Residential Moving Across Renton Neighborhoods",
    buildingCallouts: `On The Go Moving serves every Renton neighborhood: The Landing (elevator coordination, COI required, standard move-in windows), Kennydale (steep hillside lots, challenging access, large homes), Talbot Hill (hillside properties, careful truck access, established neighborhood), Highlands (established residential, mix of home sizes, standard access), Fairwood (suburban homes, ample parking, efficient moves), and Cascade (established neighborhood, standard access, mix of home sizes).`,
    extraFaqs: [
      {
        q: "How do you handle steep hillside lots in Kennydale and Talbot Hill?",
        a: "Our crews are experienced with Renton's hillside neighborhoods. We assess driveway access in advance and use the appropriate truck size for each property. For very steep driveways, we use our smaller trucks for the initial approach and stage the larger truck at a safe distance.",
      },
      {
        q: "Do you handle moves near Boeing's Renton facility?",
        a: "Yes. We regularly move Boeing employees and contractors in and out of Renton. We're familiar with the neighborhoods near the Boeing facility and can work around shift schedules for moves that need to happen on specific days.",
      },
    ],
  },
  "renton-apartment": {
    intro: `Renton's apartment market is concentrated at The Landing near Renton Airport and in the Highlands area. The Landing buildings have standard elevator and move-in window requirements, our crews coordinate directly with building management to secure your reservation before move day. The Highlands has a mix of older and newer apartment buildings with varying requirements. Most Renton apartment moves complete in 2–4 hours, and we provide flat-rate quotes so you know the final price before we start.`,
    buildingCalloutsHeading: "Apartment Buildings We Serve in Renton",
    buildingCallouts: `Our apartment moving crews are experienced throughout Renton: The Landing apartment buildings (elevator reservations required, COI required, standard move-in windows, near Renton Airport), Highlands apartment complexes (mix of older and newer buildings, standard move-in requirements), Benson Hill apartments (newer construction, standard access, ample parking), and Cascade apartment communities (established buildings, standard move-in requirements).`,
    extraFaqs: [
      {
        q: "How do I reserve an elevator at The Landing in Renton?",
        a: "We coordinate elevator reservations directly with The Landing building management as part of our move planning process. We contact the building 1–2 weeks before your move to secure your reservation and confirm move-in window requirements.",
      },
      {
        q: "Can you move me into a new Renton apartment on a weekend?",
        a: "Yes. We offer weekend moves throughout Renton. Weekend availability fills quickly in summer and at end-of-month dates, we recommend booking 2–3 weeks in advance.",
      },
    ],
  },
  "renton-packing": {
    intro: `Renton's diverse housing stock creates a wide range of packing scenarios. The Landing's apartment buildings require efficient packing that fits within move-in windows. Kennydale and Talbot Hill homes often have large garages and outdoor equipment that requires weatherproof packing. Fairwood and Cascade homes are typically well-furnished suburban properties where full-pack service is popular. Whatever your Renton home contains, our packing crews bring all materials and have the experience to protect it.`,
    buildingCalloutsHeading: "Packing Services Across Renton Neighborhoods",
    buildingCallouts: `Our packing crews serve all Renton neighborhoods: The Landing (apartment packing, efficient turnaround, move-in window compliance), Kennydale and Talbot Hill (large homes, garages, outdoor equipment, weatherproof packing), Highlands (established homes, standard packing, full-pack service available), Fairwood and Cascade (suburban homes, extensive contents, full-pack service popular), and Benson Hill (newer construction, standard packing, efficient turnaround).`,
    extraFaqs: [
      {
        q: "How long does it take to pack a Renton home?",
        a: "A typical 3-bedroom Renton home takes 6–10 hours to pack with a 2-person crew. Homes with large garages or extensive outdoor furniture take longer. We provide a time estimate after a free in-home or virtual consultation.",
      },
      {
        q: "Do you pack items for long-term storage in Renton?",
        a: "Yes. We pack items specifically for long-term storage using double-boxing, moisture barriers, and weatherproof wrapping for items going into storage. We label all boxes clearly for easy retrieval.",
      },
    ],
  },
  "renton-commercial": {
    intro: `Renton's commercial moving market is anchored by Boeing's major manufacturing presence and a growing tech sector near I-405. Our commercial crews handle everything from standard office moves to sensitive IT equipment and manufacturing equipment relocation. Downtown Renton's older commercial buildings have freight elevator requirements that our crews know how to navigate. We work after hours and on weekends to minimize business disruption, and our project managers coordinate directly with your facilities team.`,
    buildingCalloutsHeading: "Commercial Moving in Renton's Business Districts",
    buildingCallouts: `We serve Renton's major commercial areas: The Landing commercial district (retail and office moves, standard access, flexible scheduling), Downtown Renton (older commercial buildings, freight elevator coordination, historic character), I-405 tech corridor (IT equipment handling, workstation moves, after-hours available), and Benson Hill commercial (newer office parks, standard move-in requirements, ample parking).`,
    extraFaqs: [
      {
        q: "Do you handle office moves for Boeing contractors in Renton?",
        a: "Yes. We regularly move Boeing contractors and suppliers in Renton. We're experienced with the security requirements near Boeing facilities and can coordinate moves that need to happen on specific days around production schedules.",
      },
      {
        q: "Can you move a Renton restaurant or retail store?",
        a: "Yes. We handle restaurant and retail moves throughout Renton. We coordinate with building management for after-hours access and work efficiently to minimize your downtime.",
      },
    ],
  },
  "renton-storage": {
    intro: `Renton residents and businesses frequently need storage during moves, whether bridging a gap between closing dates, downsizing from a Kennydale hillside home, or staging a Landing apartment relocation. Our secure, climate-controlled storage facility in Redmond is 13 miles north of Renton, a 20-minute drive via I-405. We offer month-to-month storage with no long-term contracts, and storage is available month-to-month, contact us for current pricing.`,
    buildingCalloutsHeading: "Storage Solutions for Renton Residents and Businesses",
    buildingCallouts: `Common Renton storage scenarios we handle: Kennydale and Talbot Hill home downsizing (large furniture, seasonal items, long-term storage available), The Landing apartment staging (furniture and boxes during renovation or relocation), Highlands home renovation storage (full household contents, month-to-month), and business inventory storage (palletized storage, forklift access, commercial rates available).`,
    extraFaqs: [
      {
        q: "How far is your storage facility from Renton?",
        a: "Our Redmond storage facility is 13 miles north of Renton, about 20 minutes via I-405. We can pick up your items in Renton and deliver them to storage, then deliver back to your new Renton address when you're ready.",
      },
      {
        q: "Do you offer storage for Boeing contractors between assignments in Renton?",
        a: "Yes. We offer flexible month-to-month storage for contractors and employees between assignments. No long-term commitment required, store your belongings for as long as you need.",
      },
    ],
  },
  "renton-senior": {
    intro: `Senior moves in Renton require patience and careful planning. Whether you're downsizing from a Kennydale hillside home, moving a parent into one of Renton's assisted living communities, or transitioning from a Fairwood family home, our senior moving crews bring the care and communication that makes the difference. We work at a pace that's comfortable for seniors, handle fragile items with extra care, and coordinate directly with family members managing the move remotely.`,
    buildingCalloutsHeading: "Senior Moving Resources in Renton",
    buildingCallouts: `We regularly assist seniors moving to and from Renton's senior communities: Merrill Gardens at Renton (assisted living, coordinated move-in, elevator access), Fairwood Retirement Village (independent and assisted living, standard move-in), Renton Highlands senior residences (established neighborhood, standard access), and private residences throughout Kennydale, Talbot Hill, and Fairwood (downsizing, estate moves, family coordination).`,
    extraFaqs: [
      {
        q: "How do you handle steep driveways in Kennydale for senior moves?",
        a: "We assess the driveway in advance and bring the appropriate equipment. For steep Kennydale driveways, we use our smaller trucks for the initial approach. We take extra time on senior moves to ensure nothing is rushed.",
      },
      {
        q: "Can you coordinate a senior move into Merrill Gardens at Renton?",
        a: "Yes. We contact Merrill Gardens in advance to confirm move-in procedures, elevator access, and any items that cannot be brought in. On move day, we coordinate with facility staff to ensure a smooth transition.",
      },
    ],
  },
  "renton-furniture": {
    intro: `Renton's diverse housing stock creates a wide range of furniture moving challenges. The Landing's apartment buildings have elevator constraints that limit the size of items that can be moved in one piece. Kennydale and Talbot Hill homes have steep driveways where furniture must be carefully secured. Fairwood and Cascade homes often have large sectionals and entertainment centers that require disassembly. Our Renton furniture crews carry the right equipment for every scenario.`,
    buildingCalloutsHeading: "Furniture Moving Across Renton",
    buildingCallouts: `Our furniture crews serve all Renton neighborhoods: The Landing (elevator constraints, careful measurement, disassembly when needed), Kennydale and Talbot Hill (steep driveways, careful securing, large homes), Highlands (established homes, standard furniture moves, efficient access), Fairwood and Cascade (suburban homes, large sectionals and entertainment centers, disassembly/reassembly), and Benson Hill (newer construction, standard furniture moves).`,
    extraFaqs: [
      {
        q: "Can you move furniture into The Landing apartments in Renton?",
        a: "Yes. We regularly move furniture into The Landing. We measure elevator dimensions in advance to confirm what can be moved in one piece, and we disassemble items that won't fit. We coordinate elevator reservations with building management.",
      },
      {
        q: "Do you move pianos in Renton?",
        a: "Yes. We have specialized equipment and trained crews for upright and grand pianos. Renton's hillside neighborhoods can make piano moves particularly challenging, our crews have the experience to handle it safely.",
      },
    ],
  },
  "renton-appliance": {
    intro: `Appliance moves in Renton require the right equipment and technique, especially in Kennydale and Talbot Hill, where steep driveways add complexity. Our Renton appliance crews use appliance dollies, floor runners, and moving straps on every job. We move refrigerators, washers, dryers, dishwashers, and large ranges throughout Renton, and we coordinate disconnection and reconnection assistance for standard appliances.`,
    buildingCalloutsHeading: "Appliance Moving Across Renton",
    buildingCallouts: `Our appliance moving crews serve all Renton neighborhoods: Kennydale and Talbot Hill (steep driveways, careful appliance handling, floor protection), The Landing (elevator coordination, standard appliance moves), Highlands (established homes, standard appliance access), Fairwood and Cascade (suburban homes, multiple appliance moves common), and Benson Hill (newer construction, standard appliance moves).`,
    extraFaqs: [
      {
        q: "How do you move appliances on steep Renton driveways?",
        a: "We use appliance dollies with straps and wheel chocks for steep driveway appliance moves. Our crews are trained on safe appliance handling on inclines. For very steep driveways, we use our smaller trucks for the initial approach.",
      },
      {
        q: "Can you move a washer and dryer in a Renton apartment building?",
        a: "Yes. We regularly move washers and dryers in Renton apartment buildings. We coordinate elevator access and use appliance dollies and floor protection to move appliances safely through common areas.",
      },
    ],
  },
  "renton-unpacking": {
    intro: `After a Renton move, our unpacking crews come in and turn those stacked boxes into a functional home. We unpack room by room, place items where you want them, and remove all packing materials when we're done. For large Kennydale and Fairwood homes, we recommend scheduling unpacking for the day after your move for maximum efficiency.`,
    buildingCalloutsHeading: "Unpacking Services Across Renton",
    buildingCallouts: `Our unpacking crews serve all Renton neighborhoods: The Landing (apartment unpacking, efficient turnaround, box removal), Kennydale and Talbot Hill (large homes, full-unpack service, box removal), Highlands (established homes, standard unpacking), Fairwood and Cascade (suburban homes, extensive contents, full-unpack service popular), and Benson Hill (newer construction, efficient unpacking turnaround).`,
    extraFaqs: [
      {
        q: "How long does it take to unpack a Renton home?",
        a: "A typical 3-bedroom Renton home takes 5–8 hours to unpack with a 2-person crew. We work room by room and remove all packing materials as we go.",
      },
      {
        q: "Do you offer unpacking services for The Landing apartments in Renton?",
        a: "Yes. We offer unpacking services for all Renton apartment buildings including The Landing. We coordinate with building management for elevator access and work efficiently within your move-in window.",
      },
    ],
  },
  "renton-warehousing": {
    intro: `Renton businesses near I-405 and in the Downtown corridor frequently need warehousing support during relocations or for inventory overflow. Our Redmond warehouse facility is 13 miles north of Renton, offering climate-controlled storage, palletized storage with forklift access, and flexible month-to-month terms. We handle the full logistics chain: pickup from your Renton location, storage at our facility, and delivery to your new address or distribution point.`,
    buildingCalloutsHeading: "Warehousing and Distribution for Renton Businesses",
    buildingCallouts: `We serve Renton's major business areas with warehousing solutions: The Landing commercial (retail inventory, office furniture, flexible terms), Downtown Renton (older commercial buildings, records storage, equipment staging), I-405 commercial corridor (office furniture, equipment staging, palletized storage), and Benson Hill commercial (newer office parks, standard warehousing, efficient pickup and delivery).`,
    extraFaqs: [
      {
        q: "Do you offer warehousing for Renton businesses during office relocations?",
        a: "Yes. We regularly provide warehousing for Renton businesses during office relocations. We store furniture and equipment during the transition and deliver to your new location when it's ready.",
      },
      {
        q: "Can you handle palletized inventory storage for a Renton business?",
        a: "Yes. Our Redmond facility has forklift access and can handle palletized inventory storage. We offer commercial rates for businesses with ongoing storage needs.",
      },
    ],
  },

// ===================================================================
// WOODINVILLE
// ===================================================================

  "woodinville-residential": {
    intro: `Woodinville is one of the most distinctive moving markets in the Greater Seattle area, large estate homes on wooded lots, Hollywood Hill's steep and narrow roads, and a wine country character that sets it apart from the typical Eastside suburb. Our crews know Hollywood Hill well: the steep grades, the narrow roads, and the properties set far back from the street that require careful truck positioning. Wellington Hills and other planned communities have HOA move-in rules that we navigate regularly. Our Redmond warehouse is 8 miles south, a fast 13-minute drive.`,
    buildingCalloutsHeading: "Residential Moving Across Woodinville Neighborhoods",
    buildingCallouts: `On The Go Moving serves every Woodinville neighborhood: Hollywood Hill (steep narrow roads, long driveways, estate homes, smaller trucks for initial access), Wellington Hills (HOA move-in rules, COI required, newer construction), Bear Creek (wooded lots, long driveways, challenging truck access), Downtown Woodinville (mixed residential/commercial, standard access), Cottage Lake (established neighborhood, wooded lots, standard access), and Leota (rural character, long driveways, estate properties).`,
    extraFaqs: [
      {
        q: "How do you access properties on Hollywood Hill in Woodinville?",
        a: "Hollywood Hill is one of the most challenging access areas in our service region. We use our smaller trucks for the initial approach on very steep or narrow driveways, staging the larger truck at a safe distance. Our drivers know the hill well and plan the best access route for each property in advance.",
      },
      {
        q: "Do you move wine collections in Woodinville?",
        a: "Yes. We handle wine collections with care, proper padding, temperature-aware transport, and careful handling. For large collections, we recommend our full packing service to ensure every bottle is properly protected. We can also arrange climate-controlled transport for valuable collections.",
      },
    ],
  },
  "woodinville-apartment": {
    intro: `Woodinville has limited apartment inventory compared to other Eastside cities, most moves here are residential. The newer mixed-use developments near Downtown Woodinville have standard elevator and move-in window requirements. Our crews coordinate directly with building management to secure elevator reservations before move day. Most Woodinville apartment moves complete in 2–3 hours.`,
    buildingCalloutsHeading: "Apartment Buildings We Serve in Woodinville",
    buildingCallouts: `Our apartment moving crews serve Woodinville's apartment communities: Downtown Woodinville mixed-use apartments (elevator coordination, limited street parking, weekday and weekend moves), Wellington Hills apartment units (HOA coordination, COI required, standard move-in windows), and newer apartment developments along SR-522 (standard move-in requirements, ample parking).`,
    extraFaqs: [
      {
        q: "Are there many apartment buildings in Woodinville?",
        a: "Woodinville has fewer apartment buildings than other Eastside cities, most of our Woodinville moves are single-family homes. The newer mixed-use buildings near downtown are the main apartment inventory. We handle all of them regularly.",
      },
      {
        q: "How far in advance should I book a Woodinville apartment move?",
        a: "We recommend booking 2–3 weeks in advance for Woodinville apartment moves. Woodinville has fewer buildings, so elevator reservations are generally easier to secure than in denser cities.",
      },
    ],
  },
  "woodinville-packing": {
    intro: `Woodinville's large estate homes are a significant packing undertaking. Hollywood Hill homes often have extensive wine collections, outdoor furniture, and garage equipment that requires specialized packing. Wellington Hills homes tend to be large and well-furnished, full-pack service is common. Bear Creek properties often have workshop equipment and tools that require careful wrapping. Our Woodinville packing crews bring all materials and are experienced with the full range of packing scenarios for large Eastside estate homes.`,
    buildingCalloutsHeading: "Packing Services Across Woodinville Neighborhoods",
    buildingCallouts: `Our packing crews serve all Woodinville neighborhoods: Hollywood Hill (estate homes, wine collections, outdoor furniture, custom wrapping), Wellington Hills (large homes, extensive contents, HOA move-out compliance, full-pack service common), Bear Creek (wooded-lot homes, workshop equipment, outdoor items, weatherproof packing), Downtown Woodinville (mixed residential, standard packing), and Cottage Lake (established homes, standard packing, efficient turnaround).`,
    extraFaqs: [
      {
        q: "How do you pack a wine collection for a Woodinville move?",
        a: "We pack wine collections using wine-specific boxes with individual cell dividers, proper padding between bottles, and temperature-aware wrapping. For large collections, we recommend a dedicated packing day for the wine cellar or storage area. We can also arrange climate-controlled transport for valuable collections.",
      },
      {
        q: "How long does it take to pack a large Hollywood Hill estate?",
        a: "A large Hollywood Hill estate typically takes 12–20 hours to pack with a 2-person crew, depending on the size of the home and the extent of the wine collection, outdoor furniture, and garage equipment. We recommend a 2–3 day packing schedule for large estates.",
      },
    ],
  },
  "woodinville-commercial": {
    intro: `Woodinville's business community is centered around its wine industry and the commercial corridor along SR-522. Our commercial crews handle winery and tasting room moves, office relocations, and retail moves throughout Woodinville. We work after hours and on weekends to minimize business disruption, and our project managers coordinate directly with your facilities team. For winery equipment moves, we have experience with specialized handling requirements.`,
    buildingCalloutsHeading: "Commercial Moving in Woodinville's Business Districts",
    buildingCallouts: `We serve Woodinville's major commercial areas: Woodinville Wine Country (winery and tasting room moves, specialized equipment handling, flexible scheduling), SR-522 commercial corridor (retail and office moves, standard access, efficient turnaround), Downtown Woodinville (mixed commercial, standard access, limited street parking), and Hollywood Hill commercial properties (estate-based businesses, challenging access, advance planning required).`,
    extraFaqs: [
      {
        q: "Do you handle winery and tasting room moves in Woodinville?",
        a: "Yes. We regularly move winery and tasting room equipment in Woodinville's wine country. We handle wine barrels, tasting room furniture, and specialized winery equipment with care. We work around your production and tasting schedule to minimize disruption.",
      },
      {
        q: "Can you move a Woodinville retail store after hours?",
        a: "Yes. We offer after-hours and weekend moves for Woodinville retail stores. We coordinate with building management and work efficiently to minimize your downtime.",
      },
    ],
  },
  "woodinville-storage": {
    intro: `Woodinville residents frequently need storage during moves, whether bridging a gap between closing dates, downsizing from a large Hollywood Hill estate, or staging a wine country property sale. Our secure, climate-controlled storage facility in Redmond is 8 miles south of Woodinville, a fast 13-minute drive. We offer month-to-month storage with no long-term contracts, and storage is available month-to-month, contact us for current pricing.`,
    buildingCalloutsHeading: "Storage Solutions for Woodinville Residents and Businesses",
    buildingCallouts: `Common Woodinville storage scenarios we handle: Hollywood Hill estate downsizing (large furniture, wine collections, seasonal items, long-term storage), Wellington Hills home renovation storage (full household contents, month-to-month, secure vault storage available), Bear Creek property staging (furniture and contents during home sale preparation), and winery inventory storage (wine equipment, tasting room furniture, seasonal storage).`,
    extraFaqs: [
      {
        q: "Do you offer climate-controlled storage for wine collections from Woodinville homes?",
        a: "Yes. Our Redmond facility is climate-controlled, making it suitable for wine collections and other temperature-sensitive items. All storage units maintain consistent temperature and humidity year-round.",
      },
      {
        q: "How far is your storage facility from Woodinville?",
        a: "Our Redmond storage facility is 8 miles south of Woodinville, about 13 minutes. We can pick up your items in Woodinville and deliver them to storage, then deliver back to your new address when you're ready.",
      },
    ],
  },
  "woodinville-senior": {
    intro: `Senior moves in Woodinville often involve downsizing from large Hollywood Hill or Wellington Hills estates, a significant undertaking that requires careful planning and patient crews. Our senior moving crews work at a pace that's comfortable, handle fragile items with extra care, and coordinate with family members who may be managing the move from a distance. We regularly assist seniors moving from Woodinville's large estate homes into smaller residences or assisted living communities in nearby Bothell, Kirkland, and Redmond.`,
    buildingCalloutsHeading: "Senior Moving Resources in Woodinville",
    buildingCallouts: `We regularly assist seniors moving from Woodinville's neighborhoods: Hollywood Hill (estate downsizing, large furniture, wine collections, family coordination), Wellington Hills (planned community homes, HOA coordination, downsizing assistance), Bear Creek (wooded-lot homes, challenging access, patient crews), and moves to senior communities in nearby Bothell, Kirkland, Redmond, and Kenmore.`,
    extraFaqs: [
      {
        q: "Can you help downsize a large Hollywood Hill estate for a senior move?",
        a: "Yes. We work with seniors and their families on downsizing moves from large Woodinville estates. We move selected items to the new residence, transport donations to local charities, and coordinate with junk removal services for items that won't be kept.",
      },
      {
        q: "How do you handle the challenging access on Hollywood Hill for senior moves?",
        a: "We assess the driveway and road access in advance for every Hollywood Hill senior move. We use our smaller trucks for the initial approach on steep or narrow roads, and we take extra time to ensure nothing is rushed or damaged.",
      },
    ],
  },
  "woodinville-furniture": {
    intro: `Woodinville's large estate homes are full of oversized furniture, grand dining sets, king beds, sectionals, and entertainment centers that challenge even experienced movers on Hollywood Hill's steep roads. Wellington Hills homes often have furniture that was assembled in place and requires disassembly to exit through standard doorways. Our Woodinville furniture crews carry furniture boards, appliance dollies, stair-climbing hand trucks, and moving straps on every job.`,
    buildingCalloutsHeading: "Furniture Moving Across Woodinville",
    buildingCallouts: `Our furniture crews serve all Woodinville neighborhoods: Hollywood Hill (steep roads, estate homes, oversized furniture, careful truck positioning), Wellington Hills (newer construction, furniture disassembly/reassembly, HOA compliance), Bear Creek (wooded lots, long carries, large furniture), Downtown Woodinville (standard access, mixed furniture types), and Cottage Lake (established homes, standard furniture moves).`,
    extraFaqs: [
      {
        q: "Can you move a grand piano from a Hollywood Hill estate?",
        a: "Yes. We have specialized equipment and trained crews for grand piano moves. Hollywood Hill's steep roads make piano moves particularly challenging, we assess the access route in advance and bring the appropriate equipment for a safe move.",
      },
      {
        q: "Do you move large outdoor furniture from Woodinville estates?",
        a: "Yes. We regularly move large outdoor furniture from Woodinville estates, teak dining sets, large patio sectionals, fire pits, and outdoor kitchens. We use proper wrapping and securing for outdoor furniture transport.",
      },
    ],
  },
  "woodinville-appliance": {
    intro: `Appliance moves in Woodinville require careful planning, especially on Hollywood Hill, where steep driveways and narrow roads add significant complexity. Our Woodinville appliance crews use appliance dollies, floor runners, and moving straps on every job. We move refrigerators, washers, dryers, dishwashers, and large ranges throughout Woodinville, and we coordinate disconnection and reconnection assistance for standard appliances.`,
    buildingCalloutsHeading: "Appliance Moving Across Woodinville",
    buildingCallouts: `Our appliance moving crews serve all Woodinville neighborhoods: Hollywood Hill (steep driveways, careful appliance handling, floor protection, smaller trucks for initial access), Wellington Hills (newer construction, standard appliance access, HOA compliance), Bear Creek (wooded lots, long carries, careful handling), and Downtown Woodinville (standard appliance moves, efficient access).`,
    extraFaqs: [
      {
        q: "How do you move appliances on steep Hollywood Hill driveways?",
        a: "We use appliance dollies with straps and wheel chocks for steep driveway appliance moves. For very steep Hollywood Hill driveways, we use our smaller trucks for the initial approach and stage the larger truck at a safe distance.",
      },
      {
        q: "Can you move a wine refrigerator or wine cellar cooling unit in Woodinville?",
        a: "Yes. We regularly move wine refrigerators and wine cellar cooling units in Woodinville. We coordinate with a wine storage specialist if you need climate-controlled transport for valuable collections.",
      },
    ],
  },
  "woodinville-unpacking": {
    intro: `After a move into a Woodinville estate, the last thing you want to face is a house full of boxes. Our unpacking crews come in after your move and turn those stacked boxes into a functional home, room by room, with all packing materials removed when we're done. For large Hollywood Hill and Wellington Hills estates, we recommend scheduling unpacking for the day after your move for maximum efficiency.`,
    buildingCalloutsHeading: "Unpacking Services Across Woodinville",
    buildingCallouts: `Our unpacking crews serve all Woodinville neighborhoods: Hollywood Hill (estate homes, extensive contents, full-unpack service, box removal), Wellington Hills (large homes, HOA compliance, efficient unpacking), Bear Creek (wooded-lot homes, standard unpacking, box removal), and Downtown Woodinville (mixed residential, standard unpacking, efficient turnaround).`,
    extraFaqs: [
      {
        q: "How long does it take to unpack a large Woodinville estate?",
        a: "A large Woodinville estate typically takes 8–14 hours to unpack with a 2-person crew. For very large estates, we recommend a 2-day unpacking service. We work room by room and remove all packing materials as we go.",
      },
      {
        q: "Can you set up a wine cellar or wine storage area during unpacking in Woodinville?",
        a: "Yes. We can organize and set up wine storage areas during unpacking. We place wine racks, organize collections by your preferred system, and ensure proper storage conditions are in place.",
      },
    ],
  },
  "woodinville-warehousing": {
    intro: `Woodinville businesses in the wine country and along SR-522 frequently need warehousing support during relocations or for seasonal inventory. Our Redmond warehouse facility is 8 miles south of Woodinville, offering climate-controlled storage, palletized storage with forklift access, and flexible month-to-month terms. We handle the full logistics chain: pickup from your Woodinville location, storage at our facility, and delivery to your new address or distribution point.`,
    buildingCalloutsHeading: "Warehousing and Distribution for Woodinville Businesses",
    buildingCallouts: `We serve Woodinville's major business areas with warehousing solutions: Woodinville Wine Country (winery equipment storage, seasonal inventory, climate-controlled units), SR-522 commercial corridor (retail inventory, office furniture, flexible terms), Downtown Woodinville (mixed commercial storage, efficient pickup and delivery), and Hollywood Hill commercial properties (estate-based business storage, flexible terms).`,
    extraFaqs: [
      {
        q: "Do you offer climate-controlled warehousing for winery equipment in Woodinville?",
        a: "Yes. Our Redmond facility is climate-controlled and suitable for winery equipment, tasting room furniture, and wine inventory. Contact us for commercial rates based on your volume and storage requirements.",
      },
      {
        q: "Can you handle seasonal inventory storage for a Woodinville winery?",
        a: "Yes. We offer flexible month-to-month storage for seasonal inventory. Many Woodinville wineries use our storage for tasting room furniture and equipment during the off-season.",
      },
    ],
  },

// ===================================================================
// SHORELINE
// ===================================================================

  "shoreline-residential": {
    intro: `Shoreline is a North Seattle suburb undergoing significant transformation around its two future light rail stations at 145th and 185th Street. The city's residential market spans a wide range, from older mid-century homes in Richmond Beach and Ridgecrest to newer construction near the light rail corridors. Our crews know the Aurora Ave N traffic patterns, the waterfront access challenges in Richmond Beach, and the mix of older and newer housing stock throughout the city. Our Redmond warehouse is 16 miles east, a 25-minute drive.`,
    buildingCalloutsHeading: "Residential Moving Across Shoreline Neighborhoods",
    buildingCallouts: `On The Go Moving serves every Shoreline neighborhood: Richmond Beach (waterfront properties, challenging access, older homes), Ridgecrest (established residential, mix of home sizes, standard access), Briarcrest (older homes, narrow streets, limited parking), Echo Lake (established neighborhood, standard access), Ronald Bog (newer development, standard access), Parkwood (mid-century homes, standard access), and North City (established residential, mix of home sizes).`,
    extraFaqs: [
      {
        q: "How do you handle waterfront property moves in Richmond Beach?",
        a: "Richmond Beach waterfront properties often have challenging access, steep paths to the water, limited parking, and narrow roads. We assess access points in advance and bring the right equipment for challenging carries. We recommend a site visit before move day for waterfront properties.",
      },
      {
        q: "Do you handle moves near the new light rail stations in Shoreline?",
        a: "Yes. We regularly move in and out of the new apartment buildings near Shoreline's 145th and 185th Street light rail stations. We coordinate elevator reservations and work within building move-in windows.",
      },
    ],
  },
  "shoreline-apartment": {
    intro: `Shoreline's apartment market is growing rapidly around the Aurora Ave N corridor and the new light rail stations at 145th and 185th Street. New buildings near the light rail stations have standard elevator and move-in window requirements, our crews coordinate directly with building management to secure your reservation before move day. The Aurora Ave N corridor has a mix of older and newer apartment buildings with varying requirements. Most Shoreline apartment moves complete in 2–4 hours.`,
    buildingCalloutsHeading: "Apartment Buildings We Serve in Shoreline",
    buildingCallouts: `Our apartment moving crews are experienced throughout Shoreline: New light rail station apartments at 145th Street (elevator reservations required, COI required, standard move-in windows), New light rail station apartments at 185th Street (elevator coordination, newer construction, efficient access), Aurora Ave N apartment corridor (mix of older and newer buildings, standard move-in requirements), and Richmond Beach apartment communities (established buildings, standard access).`,
    extraFaqs: [
      {
        q: "How do I reserve an elevator at a new Shoreline light rail apartment building?",
        a: "We coordinate elevator reservations directly with building management as part of our move planning process. We contact the building 1–2 weeks before your move to secure your reservation and confirm move-in window requirements.",
      },
      {
        q: "Can you move me into a new Shoreline apartment on a weekend?",
        a: "Yes. We offer weekend moves throughout Shoreline. Weekend availability fills quickly in summer, we recommend booking 2–3 weeks in advance for weekend dates.",
      },
    ],
  },
  "shoreline-packing": {
    intro: `Shoreline's mix of older mid-century homes and newer construction creates a wide range of packing scenarios. Richmond Beach homes often have antiques and collectibles that need custom wrapping. Newer homes near the light rail corridors are typically well-furnished, full-pack service is popular for these moves. Whatever your Shoreline home contains, our packing crews bring all materials and have the experience to protect it.`,
    buildingCalloutsHeading: "Packing Services Across Shoreline Neighborhoods",
    buildingCallouts: `Our packing crews serve all Shoreline neighborhoods: Richmond Beach (older homes, antiques and collectibles, custom wrapping available), Ridgecrest and Briarcrest (established homes, standard packing, full-pack service available), Echo Lake and Ronald Bog (newer construction, standard packing, efficient turnaround), Aurora Ave N corridor (apartment packing, efficient turnaround, move-in window compliance), and North City (established homes, standard packing).`,
    extraFaqs: [
      {
        q: "How long does it take to pack a Shoreline home?",
        a: "A typical 3-bedroom Shoreline home takes 6–10 hours to pack with a 2-person crew. Homes with antiques, collectibles, or large garages take longer. We provide a time estimate after a free in-home or virtual consultation.",
      },
      {
        q: "Do you pack items for moves near the Shoreline light rail stations?",
        a: "Yes. We offer full packing services for moves into and out of the new apartment buildings near Shoreline's light rail stations. We pack efficiently to fit within your move-in window.",
      },
    ],
  },
  "shoreline-commercial": {
    intro: `Shoreline's business community is concentrated along Aurora Ave N and near the light rail stations, with a growing number of transit-oriented businesses. Our commercial crews handle office moves, retail relocations, and restaurant moves throughout Shoreline. We work after hours and on weekends to minimize business disruption, and our project managers coordinate directly with your facilities team.`,
    buildingCalloutsHeading: "Commercial Moving in Shoreline's Business Districts",
    buildingCallouts: `We serve Shoreline's major commercial areas: Aurora Ave N commercial corridor (retail and office moves, standard access, flexible scheduling), 145th Street light rail district (new commercial buildings, elevator coordination, efficient access), 185th Street light rail district (newer construction, standard move-in requirements, ample parking), and Richmond Beach commercial (smaller businesses, standard access, flexible scheduling).`,
    extraFaqs: [
      {
        q: "Do you handle retail moves along Aurora Ave N in Shoreline?",
        a: "Yes. Aurora Ave N is one of our most active commercial move corridors. We handle retail and office moves throughout the Aurora Ave N corridor, working after hours and on weekends to minimize your downtime.",
      },
      {
        q: "Can you move a Shoreline business into a new light rail station building?",
        a: "Yes. We regularly move businesses into the new transit-oriented buildings near Shoreline's light rail stations. We coordinate elevator access and work efficiently to get your business operational quickly.",
      },
    ],
  },
  "shoreline-storage": {
    intro: `Shoreline residents and businesses frequently need storage during moves, whether bridging a gap between closing dates, downsizing from a Richmond Beach waterfront home, or staging a light rail corridor apartment relocation. Our secure, climate-controlled storage facility in Redmond is 16 miles east of Shoreline. We offer month-to-month storage with no long-term contracts, and storage is available month-to-month, contact us for current pricing.`,
    buildingCalloutsHeading: "Storage Solutions for Shoreline Residents and Businesses",
    buildingCallouts: `Common Shoreline storage scenarios we handle: Richmond Beach home downsizing (waterfront furniture, antiques, long-term storage available), Light rail corridor apartment staging (furniture and boxes during renovation or relocation), Aurora Ave N business storage (retail inventory, office furniture, flexible terms), and Ridgecrest and Briarcrest home renovation storage (full household contents, month-to-month).`,
    extraFaqs: [
      {
        q: "How far is your storage facility from Shoreline?",
        a: "Our Redmond storage facility is 16 miles east of Shoreline, about 25 minutes. We can pick up your items in Shoreline and deliver them to storage, then deliver back to your new Shoreline address when you're ready.",
      },
      {
        q: "Do you offer climate-controlled storage for antiques from Richmond Beach homes?",
        a: "Yes. Our Redmond facility is climate-controlled, making it suitable for antiques, artwork, and other temperature-sensitive items. All storage units maintain consistent temperature and humidity year-round.",
      },
    ],
  },
  "shoreline-senior": {
    intro: `Senior moves in Shoreline require patience and careful planning. Whether you're downsizing from a Richmond Beach waterfront home, moving a parent into one of Shoreline's senior communities, or transitioning from an established Ridgecrest neighborhood home, our senior moving crews bring the care and communication that makes the difference. We work at a pace that's comfortable for seniors and coordinate directly with family members managing the move remotely.`,
    buildingCalloutsHeading: "Senior Moving Resources in Shoreline",
    buildingCallouts: `We regularly assist seniors moving to and from Shoreline's senior communities: Shoreline Place Senior Living (assisted living, coordinated move-in, elevator access), Aegis Living Shoreline (memory care and assisted living, move-in coordination with staff), private residences throughout Richmond Beach, Ridgecrest, and Briarcrest (downsizing, estate moves, family coordination), and moves to senior communities in nearby Seattle, Kenmore, and Lake Forest Park.`,
    extraFaqs: [
      {
        q: "Can you help downsize a Richmond Beach waterfront home for a senior move?",
        a: "Yes. We work with seniors and their families on downsizing moves from Richmond Beach homes. We move selected items to the new residence, transport donations to local charities, and coordinate with junk removal services for items that won't be kept.",
      },
      {
        q: "How do you coordinate a senior move into Aegis Living Shoreline?",
        a: "We contact Aegis Living in advance to confirm move-in procedures, elevator access, and any items that cannot be brought in. On move day, we coordinate with facility staff to ensure a smooth transition and help with furniture placement in the new room.",
      },
    ],
  },
  "shoreline-furniture": {
    intro: `Shoreline's mix of older mid-century homes and newer construction creates a wide range of furniture moving challenges. Richmond Beach's older homes have narrow doorways and staircases that require careful maneuvering. Newer homes near the light rail corridors often have large sectionals and entertainment centers that require disassembly. Our Shoreline furniture crews carry the right equipment for every scenario.`,
    buildingCalloutsHeading: "Furniture Moving Across Shoreline",
    buildingCallouts: `Our furniture crews serve all Shoreline neighborhoods: Richmond Beach (older homes, narrow doorways, antique furniture, careful maneuvering), Ridgecrest and Briarcrest (established homes, standard furniture moves, mix of sizes), Echo Lake and Ronald Bog (newer construction, large sectionals, disassembly/reassembly), Aurora Ave N corridor (apartment buildings, elevator constraints, careful measurement), and North City (established homes, standard furniture moves).`,
    extraFaqs: [
      {
        q: "Can you move antique furniture from a Richmond Beach home?",
        a: "Yes. We regularly move antique furniture from Richmond Beach homes. We use furniture pads, custom wrapping, and careful handling for antique pieces. For very high-value antiques, we can arrange custom crating.",
      },
      {
        q: "Do you move furniture into the new Shoreline light rail apartment buildings?",
        a: "Yes. We regularly move furniture into the new apartment buildings near Shoreline's light rail stations. We measure elevator dimensions in advance and disassemble items that won't fit.",
      },
    ],
  },
  "shoreline-appliance": {
    intro: `Appliance moves in Shoreline require the right equipment and technique. Richmond Beach's older homes have narrow doorways and staircases that add complexity. Newer homes near the light rail corridors have standard appliance access. Our Shoreline appliance crews use appliance dollies, floor runners, and moving straps on every job to protect both the appliance and your floors.`,
    buildingCalloutsHeading: "Appliance Moving Across Shoreline",
    buildingCallouts: `Our appliance moving crews serve all Shoreline neighborhoods: Richmond Beach (older homes, narrow doorways, careful maneuvering, floor protection), Ridgecrest and Briarcrest (established homes, standard appliance access), Echo Lake and Ronald Bog (newer construction, standard appliance moves), Aurora Ave N corridor (apartment buildings, elevator coordination), and North City (established homes, standard appliance moves).`,
    extraFaqs: [
      {
        q: "Can you move appliances through narrow doorways in older Shoreline homes?",
        a: "Yes. Older Shoreline homes, especially in Richmond Beach, often have narrow doorways that require careful maneuvering. We measure doorways in advance and use appliance dollies designed for tight spaces.",
      },
      {
        q: "How much does it cost to move a refrigerator in Shoreline?",
        a: "A single appliance move in Shoreline typically costs $150–$350 depending on size, weight, and distance. Multiple appliance moves are priced hourly at $120–$160/hr. We provide flat-rate quotes for all appliance jobs.",
      },
    ],
  },
  "shoreline-unpacking": {
    intro: `After a Shoreline move, our unpacking crews come in and turn those stacked boxes into a functional home. We unpack room by room, place items where you want them, and remove all packing materials when we're done. For older Richmond Beach homes with antiques and collectibles, we take extra care with placement and handling during unpacking.`,
    buildingCalloutsHeading: "Unpacking Services Across Shoreline",
    buildingCallouts: `Our unpacking crews serve all Shoreline neighborhoods: Richmond Beach (older homes, antiques and collectibles, careful placement), Ridgecrest and Briarcrest (established homes, standard unpacking, box removal), Echo Lake and Ronald Bog (newer construction, efficient unpacking turnaround), Aurora Ave N corridor (apartment unpacking, efficient turnaround, box removal), and North City (established homes, standard unpacking).`,
    extraFaqs: [
      {
        q: "How long does it take to unpack a Shoreline home?",
        a: "A typical 3-bedroom Shoreline home takes 5–8 hours to unpack with a 2-person crew. We work room by room and remove all packing materials as we go.",
      },
      {
        q: "Do you offer unpacking services for new Shoreline light rail apartments?",
        a: "Yes. We offer unpacking services for all Shoreline apartment buildings including the new light rail station buildings. We coordinate elevator access and work efficiently within your move-in window.",
      },
    ],
  },
  "shoreline-warehousing": {
    intro: `Shoreline businesses along Aurora Ave N and near the light rail stations frequently need warehousing support during relocations or for inventory overflow. Our Redmond warehouse facility is 16 miles east of Shoreline, offering climate-controlled storage, palletized storage with forklift access, and flexible month-to-month terms. We handle the full logistics chain: pickup from your Shoreline location, storage at our facility, and delivery to your new address or distribution point.`,
    buildingCalloutsHeading: "Warehousing and Distribution for Shoreline Businesses",
    buildingCallouts: `We serve Shoreline's major business areas with warehousing solutions: Aurora Ave N commercial corridor (retail inventory, office furniture, flexible terms), 145th Street light rail district (new commercial buildings, equipment staging, standard warehousing), 185th Street light rail district (newer construction, inventory overflow, efficient pickup and delivery), and Richmond Beach commercial (smaller businesses, flexible terms, standard warehousing).`,
    extraFaqs: [
      {
        q: "Do you offer warehousing for Shoreline businesses during office relocations?",
        a: "Yes. We regularly provide warehousing for Shoreline businesses during office relocations. We store furniture and equipment during the transition and deliver to your new location when it's ready.",
      },
      {
        q: "Can you handle inventory storage for an Aurora Ave N retail business in Shoreline?",
        a: "Yes. We offer flexible month-to-month storage for retail inventory. Many Aurora Ave N businesses use our Redmond facility for seasonal inventory overflow.",
      },
    ],
  },

// ===================================================================
// KENMORE
// ===================================================================

  "kenmore-residential": {
    intro: `Kenmore sits at the north end of Lake Washington, and its residential moving landscape reflects that geography. Waterfront properties along the lake often have steep paths to the water and limited truck access on narrow shoreline roads, our crews assess every waterfront property in advance and bring the right equipment for challenging carries. Moorlands and Inglemoor are Kenmore's newer residential areas, with larger homes and standard access. The SR-522 corridor is Kenmore's main artery, and we plan every move to avoid peak congestion windows. Our Redmond warehouse is 10 miles southeast, a 15-minute drive that keeps our costs and your price low.`,
    buildingCalloutsHeading: "Kenmore Neighborhoods We Know Best",
    buildingCallouts: `Our residential crews serve all Kenmore neighborhoods: Kenmore waterfront (Lake Washington shoreline properties, steep access paths, limited truck parking, advance assessment required), Moorlands (newer large-lot homes, standard access, long carries common), Inglemoor (established residential, mix of older and newer homes, standard access), Log Boom Park area (waterfront-adjacent, narrow roads, advance planning required), Kenmore Village (mixed residential, standard access, compact homes), and Arrowhead (established neighborhood, standard access, mix of home sizes).`,
    extraFaqs: [
      {
        q: "How do you handle waterfront property moves in Kenmore?",
        a: "We assess every Kenmore waterfront property before move day. We identify the best truck parking position, the safest carry path to the water, and any equipment we need. For very steep or narrow access, we use a smaller vehicle for the final approach and stage the larger truck at the nearest safe position.",
      },
      {
        q: "What's the best time to schedule a Kenmore move to avoid SR-522 traffic?",
        a: "We recommend starting before 8 a.m. or after 10 a.m. to avoid the SR-522 morning rush, and before 3 p.m. or after 7 p.m. to avoid the evening rush. For large moves, we often start at 7 a.m. to maximize the available window before afternoon traffic builds.",
      },
    ],
  },

  "kenmore-apartment": {
    intro: `Kenmore's apartment market is a mix of older complexes near the waterfront and newer buildings along the SR-522 corridor. Most Kenmore apartment buildings have standard move-in requirements, elevator reservations where applicable, designated move-in windows, and parking coordination. Waterfront apartment buildings may have additional access considerations. Our crews coordinate directly with building management before move day so there are no surprises. Most Kenmore apartment moves complete in 2–3 hours, and we provide flat-rate quotes so you know the final price before we start.`,
    buildingCalloutsHeading: "Apartment Buildings We Serve in Kenmore",
    buildingCallouts: `Our apartment moving crews serve Kenmore's major complexes: SR-522 corridor apartments (newer construction, standard elevator and move-in window requirements, ample parking), Kenmore waterfront apartments (additional access coordination, limited parking, advance assessment recommended), Kenmore Village apartments (standard access, compact units, efficient moves), and Moorlands area apartments (newer construction, standard requirements, ample parking).`,
    extraFaqs: [
      {
        q: "How far in advance should I book a Kenmore apartment move?",
        a: "We recommend booking 2–3 weeks in advance for Kenmore apartment moves. End-of-month dates and summer weekends fill quickly. We accommodate last-minute moves when availability allows, call us to check.",
      },
      {
        q: "Do Kenmore apartment buildings require a certificate of insurance?",
        a: "Some Kenmore apartment buildings require a COI from your moving company. We provide certificates of insurance at no charge, just send us your building's requirements and we'll issue the COI within 24 hours.",
      },
    ],
  },

  "kenmore-packing": {
    intro: `Kenmore homes range from compact older properties near the waterfront to large newer construction in Moorlands and Inglemoor. Our packing crews bring all materials and are experienced with the full range of Kenmore home types. Waterfront properties often contain outdoor furniture, water sports equipment, and other items that require weatherproof packing. Moorlands and Inglemoor homes tend to be larger and well-furnished, making full-pack service a popular choice. We provide flat-rate packing quotes so you know the final price before we start.`,
    buildingCalloutsHeading: "Packing Services Across Kenmore Neighborhoods",
    buildingCallouts: `Our packing crews serve all Kenmore neighborhoods: Kenmore waterfront (outdoor furniture, water sports equipment, weatherproof packing, challenging carry paths), Moorlands (large homes, extensive contents, full-pack service common), Inglemoor (established homes, mix of contents, partial and full-pack available), Log Boom Park area (waterfront-adjacent, outdoor equipment, standard packing), and Kenmore Village (compact homes, efficient packing, standard materials).`,
    extraFaqs: [
      {
        q: "How long does it take to pack a Kenmore home?",
        a: "A typical 2-bedroom Kenmore home takes 4–6 hours to pack with a 2-person crew. A larger Moorlands or Inglemoor home with 4 bedrooms takes 8–14 hours. We recommend a free walkthrough quote for larger homes so we can give you an accurate time and cost estimate.",
      },
      {
        q: "Do you pack outdoor and water sports equipment for Kenmore waterfront moves?",
        a: "Yes. We pack kayaks, paddleboards, outdoor furniture, and water sports equipment using weatherproof wrapping and custom crating where needed. For large or unusually shaped items, we recommend a walkthrough so we can plan the right packing approach.",
      },
    ],
  },

  "kenmore-commercial": {
    intro: `Kenmore's business community is concentrated along the SR-522 corridor, with a mix of retail, professional services, and light industrial. Our commercial crews handle office and retail moves with minimal disruption, we work after hours and on weekends, and our project managers coordinate directly with your facilities team. For businesses near the SR-522 corridor, we plan truck access and parking in advance to avoid congestion. Flat-rate quotes available for all Kenmore commercial moves.`,
    buildingCalloutsHeading: "Commercial Moving in Kenmore's Business Areas",
    buildingCallouts: `We serve Kenmore's major commercial areas: SR-522 corridor (retail and office moves, standard access, flexible scheduling, traffic-aware routing), Kenmore Village commercial (retail and service businesses, standard access, compact spaces), waterfront commercial (marine businesses, outdoor equipment, advance access planning required), and North Kenmore business areas (standard access, ample parking, efficient moves).`,
    extraFaqs: [
      {
        q: "Can you move our Kenmore office on a weekend?",
        a: "Yes. Weekend moves are our most common request for Kenmore commercial relocations. We work Saturday and Sunday and can start as early as 6 a.m. to maximize your available window. Most Kenmore commercial buildings allow weekend access with advance notice.",
      },
      {
        q: "Do you handle IT equipment moves for Kenmore businesses?",
        a: "Yes. We use anti-static bags, custom crating, and careful handling for all IT equipment. For large server rooms or sensitive equipment, we recommend a free on-site walkthrough to plan the move sequence.",
      },
    ],
  },

  "kenmore-storage": {
    intro: `Our climate-controlled storage facility in Redmond is just 10 miles from Kenmore, a 15-minute drive via SR-522. We offer month-to-month storage with no long-term contracts, and storage is available month-to-month, contact us for current pricing. Kenmore customers commonly use our storage for waterfront property transitions, home staging, and between-home storage during real estate transactions. All items are stored in individually locked units with 24/7 security monitoring.`,
    buildingCalloutsHeading: "Storage Solutions for Kenmore Residents and Businesses",
    buildingCallouts: `Our Redmond storage facility serves all Kenmore neighborhoods: waterfront property storage (seasonal equipment, outdoor furniture, water sports gear, climate-controlled units), Moorlands and Inglemoor home storage (between-home storage, staging storage, renovation storage), SR-522 corridor business storage (retail inventory overflow, office equipment, document storage), and general household storage (month-to-month, no long-term contracts, secure vault storage available).`,
    extraFaqs: [
      {
        q: "How far is your storage facility from Kenmore?",
        a: "Our Redmond storage facility is 10 miles from Kenmore, about 15 minutes via SR-522. We can pick up items from your Kenmore home and deliver them directly to storage, or hold them in storage during a move.",
      },
      {
        q: "Can I store seasonal waterfront equipment at your facility?",
        a: "Yes. We store kayaks, paddleboards, outdoor furniture, and other seasonal equipment. Our climate-controlled units protect items from the Pacific Northwest's wet winters. Month-to-month contracts mean you can retrieve items when the season changes.",
      },
    ],
  },

  "kenmore-senior": {
    intro: `Kenmore has a significant senior population in its established neighborhoods, and we have extensive experience with senior moves in the area. Our senior moving crews work at a pace that's comfortable for you, we never rush, we communicate clearly about what we're doing, and we take extra care with items that have sentimental value. We coordinate with family members, senior living facilities, and downsizing specialists as needed. For moves from Kenmore waterfront properties, we handle the challenging access so you don't have to worry about it.`,
    buildingCalloutsHeading: "Senior Moving Services Across Kenmore",
    buildingCallouts: `Our senior moving crews serve all Kenmore neighborhoods and destinations: Kenmore waterfront homes (careful access planning, no rushing, family coordination available), Moorlands and Inglemoor (larger home downsizing, full packing available, estate coordination), senior living facilities in and near Kenmore (direct coordination with facility management, move-in window compliance), and in-Kenmore downsizing moves (from larger home to smaller home or apartment, partial-pack available).`,
    extraFaqs: [
      {
        q: "Do you help with downsizing moves from large Kenmore homes?",
        a: "Yes. We work with seniors and families downsizing from larger Kenmore homes. We can pack, move, and help coordinate donation pickups or estate sale logistics. We move at your pace and communicate clearly throughout the process.",
      },
      {
        q: "Can you coordinate directly with a Kenmore senior living facility?",
        a: "Yes. We coordinate directly with senior living facility management to confirm move-in windows, elevator reservations, and any COI requirements. We handle all the logistics so you and your family can focus on the transition.",
      },
    ],
  },

  "kenmore-furniture": {
    intro: `Kenmore's waterfront properties and larger Moorlands homes often contain oversized furniture, sectional sofas, king beds, dining sets, and outdoor furniture, that requires careful handling and sometimes disassembly for doorways and stairwells. Our furniture moving crews are experienced with all furniture types and bring the tools for disassembly and reassembly. For waterfront properties with challenging access paths, we plan the carry route in advance to protect both your furniture and the property.`,
    buildingCalloutsHeading: "Furniture Moving Across Kenmore Neighborhoods",
    buildingCallouts: `Our furniture moving crews serve all Kenmore neighborhoods: Kenmore waterfront (oversized outdoor furniture, challenging carry paths, advance access planning), Moorlands (large sectionals, king beds, dining sets, disassembly available), Inglemoor (established homes, standard furniture, efficient moves), Kenmore Village (compact homes, careful maneuvering, narrow doorways common in older properties), and SR-522 corridor apartments (elevator coordination, standard furniture, efficient moves).`,
    extraFaqs: [
      {
        q: "Can you move large outdoor furniture from a Kenmore waterfront property?",
        a: "Yes. We regularly move large outdoor furniture, teak sets, Adirondack chairs, fire pits, and patio sectionals, from Kenmore waterfront properties. We assess the carry path in advance and bring the right equipment for challenging access.",
      },
      {
        q: "Do you disassemble and reassemble furniture for Kenmore moves?",
        a: "Yes. We disassemble and reassemble bed frames, sectional sofas, dining tables, and other furniture as needed. We bring the tools and hardware bags to keep everything organized. Reassembly is included in our standard service.",
      },
    ],
  },

  "kenmore-appliance": {
    intro: `Moving appliances in Kenmore requires the right equipment and experience, refrigerators, washers, dryers, and ranges are heavy, awkward, and easy to damage without proper technique. Our appliance moving crews use appliance dollies, furniture pads, and straps to protect both the appliance and your floors. For waterfront properties with challenging access, we plan the carry route in advance. We also disconnect and reconnect standard appliance hookups as part of our service.`,
    buildingCalloutsHeading: "Appliance Moving Across Kenmore",
    buildingCallouts: `Our appliance moving crews serve all Kenmore neighborhoods: Kenmore waterfront (challenging carry paths, advance planning, outdoor appliances common), Moorlands (large homes with multiple appliances, standard access, efficient moves), Inglemoor (established homes, standard appliances, efficient moves), Kenmore Village (compact homes, narrow doorways, careful maneuvering), and SR-522 corridor apartments (elevator coordination, standard appliances, efficient moves).`,
    extraFaqs: [
      {
        q: "Do you disconnect and reconnect appliances for Kenmore moves?",
        a: "Yes. We disconnect and reconnect standard appliance hookups, water lines for refrigerators and dishwashers, gas or electric connections for ranges (gas disconnection requires a licensed plumber, which we can coordinate). We bring the tools and supplies needed.",
      },
      {
        q: "Can you move a large refrigerator from a Kenmore waterfront home?",
        a: "Yes. We regularly move large refrigerators and other appliances from Kenmore waterfront properties with challenging access. We assess the carry path in advance and bring the right equipment, appliance dollies, furniture pads, and straps, to protect the appliance and your property.",
      },
    ],
  },

  "kenmore-unpacking": {
    intro: `After a Kenmore move, our unpacking crews can set up your new home so you're living comfortably from day one. We unpack boxes, place items in their designated rooms, and remove all packing materials. For waterfront properties, we're experienced with setting up outdoor living spaces and water-adjacent storage. We work at your pace and follow your instructions for where everything goes. Unpacking service is available as a standalone booking or as an add-on to any Kenmore move.`,
    buildingCalloutsHeading: "Unpacking Services Across Kenmore",
    buildingCallouts: `Our unpacking crews serve all Kenmore neighborhoods and home types: Kenmore waterfront (indoor and outdoor setup, water sports equipment placement, patio furniture arrangement), Moorlands and Inglemoor (large homes, full unpacking service, room-by-room setup), Kenmore Village (compact homes, efficient unpacking, standard setup), and SR-522 corridor apartments (standard apartment setup, efficient unpacking, all materials removed).`,
    extraFaqs: [
      {
        q: "How long does unpacking take for a Kenmore home?",
        a: "A typical 2-bedroom Kenmore home takes 3–5 hours to unpack with a 2-person crew. A larger Moorlands or Inglemoor home takes 6–10 hours. We remove all boxes and packing materials when we're done.",
      },
      {
        q: "Can I book unpacking service separately from the move?",
        a: "Yes. We offer unpacking as a standalone service, you don't have to use us for the move itself. We can schedule unpacking the day after your move or whenever works best for you.",
      },
    ],
  },

  "kenmore-warehousing": {
    intro: `Our Redmond warehouse is 10 miles from Kenmore and offers flexible warehousing and distribution services for Kenmore businesses. We handle receiving, storage, inventory management, and last-mile delivery. For businesses along the SR-522 corridor, our location provides efficient access for both inbound and outbound freight. Month-to-month contracts available, no long-term commitment required.`,
    buildingCalloutsHeading: "Warehousing and Distribution for Kenmore Businesses",
    buildingCallouts: `Our warehousing services support Kenmore businesses of all types: SR-522 corridor retail (inventory storage, seasonal overflow, last-mile delivery), waterfront businesses (marine equipment storage, seasonal inventory, flexible terms), professional services (document storage, equipment storage, month-to-month), and light industrial (pallet storage, receiving and distribution, cross-docking available).`,
    extraFaqs: [
      {
        q: "How far is your warehouse from Kenmore businesses?",
        a: "Our Redmond warehouse is 10 miles from Kenmore, about 15 minutes via SR-522. We offer pickup and delivery from your Kenmore location, or you can drop off and pick up directly at our facility.",
      },
      {
        q: "Do you offer month-to-month warehousing for Kenmore businesses?",
        a: "Yes. All our warehousing contracts are month-to-month, no long-term commitment required. We scale storage space up or down as your needs change.",
      },
    ],
  },

// ===================================================================
// MERCER ISLAND
// ===================================================================

  "mercer-island-residential": {
    intro: `Mercer Island is one of the most distinctive moving markets in the Seattle area, an island city accessible only via I-90, with a mix of luxury waterfront estates, mid-century homes, and newer construction. All truck access is via I-90, and we plan every Mercer Island move around traffic patterns to ensure on-time arrival. Waterfront properties on the north and south ends often have steep paths to the water and limited truck parking. Town Center has newer mixed-use buildings with elevator requirements. Our crews have been moving Mercer Island homes since 2009 and know every neighborhood's specific logistics.`,
    buildingCalloutsHeading: "Mercer Island Neighborhoods We Know Best",
    buildingCallouts: `Our residential crews serve all Mercer Island neighborhoods: North End (luxury waterfront estates, steep access paths, high-value items, advance assessment required), South End (large residential properties, waterfront access, estate homes), Town Center (mixed-use buildings, elevator coordination, limited truck parking), Island Crest (established mid-century homes, standard access, long carries common), West Mercer (newer construction, standard access, large homes), Clarke Beach (waterfront-adjacent, narrow roads, advance planning), and Roanoke (established residential, standard access, mix of home sizes).`,
    extraFaqs: [
      {
        q: "How do you plan truck access for Mercer Island moves?",
        a: "All access to Mercer Island is via I-90. We schedule moves to avoid peak I-90 congestion, typically starting before 8 a.m. or after 10 a.m. for morning moves, and completing before 3 p.m. to avoid afternoon traffic. For large estate moves, we sometimes use two smaller trucks rather than one large truck to improve maneuverability on island roads.",
      },
      {
        q: "Do you have experience moving high-value items on Mercer Island?",
        a: "Yes. Mercer Island is one of our most active markets for high-value item moves, fine art, antiques, grand pianos, and custom furniture. Our specialty moving crews use custom crating, white-glove handling, and climate-controlled transport for valuable items.",
      },
    ],
  },

  "mercer-island-apartment": {
    intro: `Mercer Island's Town Center has newer mixed-use apartment buildings with standard elevator and move-in window requirements. These buildings are well-managed and our crews coordinate directly with building management before move day. Most Mercer Island apartment moves complete in 2–4 hours. We provide flat-rate quotes so you know the final price before we start, and our Redmond warehouse is just 9 miles away via I-90.`,
    buildingCalloutsHeading: "Apartment Buildings We Serve on Mercer Island",
    buildingCallouts: `Our apartment moving crews serve Mercer Island's residential buildings: Town Center mixed-use apartments (elevator reservations required, COI required, standard move-in windows, limited street parking), Island Crest apartments (standard access, efficient moves, ample parking), and smaller residential buildings throughout the island (standard requirements, direct building coordination, efficient moves).`,
    extraFaqs: [
      {
        q: "Do Mercer Island apartment buildings require a certificate of insurance?",
        a: "Most Mercer Island Town Center buildings require a COI from your moving company. We provide certificates of insurance at no charge, just send us your building's requirements and we'll issue the COI within 24 hours.",
      },
      {
        q: "How far in advance should I book a Mercer Island apartment move?",
        a: "We recommend booking 2–3 weeks in advance. Town Center buildings have limited elevator reservation windows, especially on weekends and end-of-month dates.",
      },
    ],
  },

  "mercer-island-packing": {
    intro: `Mercer Island homes are among the most well-appointed in the Seattle area, fine art, antiques, custom furniture, and extensive wine collections are common. Our packing crews bring all materials and are experienced with white-glove packing for high-value contents. For waterfront estates, we pack outdoor furniture, water sports equipment, and dock accessories. We provide flat-rate packing quotes and recommend a walkthrough for large estates so we can give you an accurate estimate.`,
    buildingCalloutsHeading: "Packing Services Across Mercer Island",
    buildingCallouts: `Our packing crews serve all Mercer Island neighborhoods: North End estates (fine art, antiques, custom crating, white-glove service, full-pack common), South End homes (large residential, extensive contents, full-pack available), Town Center apartments (standard packing, efficient turnaround), Island Crest (mid-century homes, vintage contents, specialty wrapping available), and waterfront properties (outdoor furniture, water sports equipment, weatherproof packing).`,
    extraFaqs: [
      {
        q: "Do you pack fine art and antiques for Mercer Island moves?",
        a: "Yes. We regularly pack fine art, antiques, and custom furniture for Mercer Island estate moves. We use acid-free tissue, custom crating, and white-glove handling. For very high-value items, we recommend a walkthrough so we can plan the right packing approach.",
      },
      {
        q: "How much does it cost to pack a large Mercer Island estate?",
        a: "A large Mercer Island estate (4–6 bedrooms) typically requires 2–3 days of packing with a 3-person crew. We provide flat-rate quotes after a walkthrough so you know the final price before we start. All packing materials are included.",
      },
    ],
  },

  "mercer-island-commercial": {
    intro: `Mercer Island's business community is centered in Town Center, with professional services, retail, and medical offices. Our commercial crews handle office moves with minimal disruption, we work after hours and on weekends, and our project managers coordinate directly with your facilities team. For Town Center buildings with limited truck parking, we plan access in advance. Flat-rate quotes available for all Mercer Island commercial moves.`,
    buildingCalloutsHeading: "Commercial Moving on Mercer Island",
    buildingCallouts: `We serve Mercer Island's commercial areas: Town Center office buildings (limited truck parking, elevator coordination, after-hours available), Town Center retail (standard access, flexible scheduling, weekend moves available), medical and professional offices (sensitive equipment handling, after-hours preferred, COI required by most buildings), and Island Crest commercial (standard access, ample parking, efficient moves).`,
    extraFaqs: [
      {
        q: "Can you move our Mercer Island office on a weekend?",
        a: "Yes. Weekend moves are our most common request for Mercer Island commercial relocations. We work Saturday and Sunday and can start as early as 6 a.m. Most Town Center buildings allow weekend access with advance notice.",
      },
      {
        q: "Do you handle medical equipment moves on Mercer Island?",
        a: "Yes. We handle medical office moves including examination tables, medical equipment, and sensitive electronics. We use proper padding and handling techniques and can coordinate with your equipment vendors for specialized items.",
      },
    ],
  },

  "mercer-island-storage": {
    intro: `Our climate-controlled storage facility in Redmond is 9 miles from Mercer Island, a 15-minute drive via I-90. We offer month-to-month storage with no long-term contracts, and storage is available month-to-month, contact us for current pricing. Mercer Island customers commonly use our storage for estate transitions, home staging, renovation projects, and seasonal waterfront equipment. All items are stored in individually locked units with 24/7 security monitoring.`,
    buildingCalloutsHeading: "Storage Solutions for Mercer Island Residents and Businesses",
    buildingCallouts: `Our Redmond storage facility serves all Mercer Island neighborhoods: estate and luxury home storage (fine art, antiques, custom furniture, climate-controlled units), waterfront property storage (seasonal equipment, outdoor furniture, water sports gear), renovation and staging storage (between-home storage, staging furniture, construction period storage), and business storage (document storage, office equipment, retail inventory).`,
    extraFaqs: [
      {
        q: "Can you store fine art and antiques from a Mercer Island estate?",
        a: "Yes. Our climate-controlled storage facility protects fine art, antiques, and high-value items from temperature and humidity fluctuations. We use proper padding and racking to keep items secure. For very high-value items, we recommend a walkthrough to plan the right storage approach.",
      },
      {
        q: "How far is your storage facility from Mercer Island?",
        a: "Our Redmond facility is 9 miles from Mercer Island, about 15 minutes via I-90. We offer pickup and delivery from your Mercer Island property, or you can drop off and pick up directly at our facility.",
      },
    ],
  },

  "mercer-island-senior": {
    intro: `Mercer Island has a significant senior population in its established neighborhoods, and we have extensive experience with senior moves on the island. Our senior moving crews work at a pace that's comfortable for you, we never rush, we communicate clearly, and we take extra care with items that have sentimental value. For estate downsizing moves, we coordinate with family members, estate sale specialists, and senior living facilities. We handle the I-90 logistics so you don't have to worry about access.`,
    buildingCalloutsHeading: "Senior Moving Services on Mercer Island",
    buildingCallouts: `Our senior moving crews serve all Mercer Island neighborhoods and destinations: North End and South End estates (downsizing from large properties, full packing available, estate coordination), Island Crest and West Mercer (established homes, standard downsizing, partial-pack available), Town Center apartments (move-in coordination, elevator reservation, COI handling), and senior living facilities near Mercer Island (direct facility coordination, move-in window compliance, family communication).`,
    extraFaqs: [
      {
        q: "Do you help with estate downsizing moves from large Mercer Island homes?",
        a: "Yes. We work with seniors and families downsizing from large Mercer Island estates. We can pack, move, and help coordinate donation pickups or estate sale logistics. We move at your pace and communicate clearly throughout the process.",
      },
      {
        q: "Can you coordinate with a senior living facility near Mercer Island?",
        a: "Yes. We coordinate directly with senior living facility management to confirm move-in windows, elevator reservations, and COI requirements. We handle all the logistics so you and your family can focus on the transition.",
      },
    ],
  },

  "mercer-island-furniture": {
    intro: `Mercer Island homes regularly contain high-end furniture, custom pieces, antiques, grand pianos, and oversized outdoor furniture for waterfront properties. Our furniture moving crews are experienced with white-glove handling for valuable pieces and bring the tools for disassembly and reassembly. For waterfront properties with challenging access paths, we plan the carry route in advance. We use furniture pads, custom crating, and floor runners to protect both your furniture and your property.`,
    buildingCalloutsHeading: "Furniture Moving Across Mercer Island",
    buildingCallouts: `Our furniture moving crews serve all Mercer Island neighborhoods: North End estates (antiques, custom pieces, grand pianos, white-glove handling, advance access planning), South End homes (large furniture, waterfront access, careful handling), Town Center apartments (elevator coordination, standard furniture, efficient moves), Island Crest (mid-century furniture, vintage pieces, careful handling), and waterfront properties (outdoor furniture, teak sets, patio sectionals, weatherproof handling).`,
    extraFaqs: [
      {
        q: "Do you move grand pianos on Mercer Island?",
        a: "Yes. Grand piano moves are one of our specialties on Mercer Island. We use piano boards, skid boards, and proper padding to protect the instrument. For waterfront properties with challenging access, we assess the carry path in advance and bring the right equipment.",
      },
      {
        q: "Can you move custom or antique furniture from a Mercer Island estate?",
        a: "Yes. We regularly move custom and antique furniture for Mercer Island estate moves. We use acid-free padding, custom crating for fragile pieces, and white-glove handling throughout. We recommend a walkthrough for large estates so we can plan the right handling approach.",
      },
    ],
  },

  "mercer-island-appliance": {
    intro: `Mercer Island homes often have high-end appliances, Sub-Zero refrigerators, Wolf ranges, Miele dishwashers, that require careful handling and proper technique. Our appliance moving crews use appliance dollies, furniture pads, and straps to protect both the appliance and your floors. For waterfront properties with challenging access, we plan the carry route in advance. We disconnect and reconnect standard appliance hookups as part of our service.`,
    buildingCalloutsHeading: "Appliance Moving Across Mercer Island",
    buildingCallouts: `Our appliance moving crews serve all Mercer Island neighborhoods: North End and South End estates (high-end appliances, Sub-Zero, Wolf, Miele, careful handling, advance access planning), Town Center apartments (standard appliances, elevator coordination, efficient moves), Island Crest (established homes, standard appliances, efficient moves), and waterfront properties (outdoor appliances, BBQ grills, outdoor kitchens, weatherproof handling).`,
    extraFaqs: [
      {
        q: "Do you move high-end appliances like Sub-Zero and Wolf on Mercer Island?",
        a: "Yes. We regularly move high-end appliances on Mercer Island. We use appliance dollies, furniture pads, and careful handling to protect expensive appliances. For very large or unusual appliances, we recommend a walkthrough to plan the right approach.",
      },
      {
        q: "Do you disconnect and reconnect appliances for Mercer Island moves?",
        a: "Yes. We disconnect and reconnect standard appliance hookups, water lines for refrigerators and dishwashers, electric connections for ranges. Gas disconnection requires a licensed plumber, which we can coordinate.",
      },
    ],
  },

  "mercer-island-unpacking": {
    intro: `After a Mercer Island move, our unpacking crews can set up your new home so you're living comfortably from day one. We unpack boxes, place items in their designated rooms, and remove all packing materials. For estate moves with fine art and antiques, we work carefully and follow your instructions for placement. We work at your pace and can coordinate with interior designers or decorators if needed. Unpacking service is available as a standalone booking or as an add-on to any Mercer Island move.`,
    buildingCalloutsHeading: "Unpacking Services Across Mercer Island",
    buildingCallouts: `Our unpacking crews serve all Mercer Island neighborhoods and home types: North End and South End estates (fine art placement, antique arrangement, full unpacking service), Town Center apartments (standard apartment setup, efficient unpacking, all materials removed), Island Crest (established homes, standard unpacking, room-by-room setup), and waterfront properties (indoor and outdoor setup, patio furniture arrangement, water sports equipment placement).`,
    extraFaqs: [
      {
        q: "Can you coordinate with an interior designer for a Mercer Island unpacking?",
        a: "Yes. We work with interior designers and decorators on Mercer Island estate moves. We follow placement instructions, handle art hanging coordination, and work carefully around designer-specified arrangements.",
      },
      {
        q: "How long does unpacking take for a large Mercer Island estate?",
        a: "A large Mercer Island estate (4–6 bedrooms) typically takes 2–3 days to fully unpack with a 3-person crew. We remove all boxes and packing materials when we're done.",
      },
    ],
  },

  "mercer-island-warehousing": {
    intro: `Our Redmond warehouse is 9 miles from Mercer Island and offers flexible warehousing and distribution services for island businesses. We handle receiving, storage, inventory management, and last-mile delivery. For businesses in Town Center with limited on-site storage, our facility provides a convenient overflow solution. Month-to-month contracts available, no long-term commitment required.`,
    buildingCalloutsHeading: "Warehousing and Distribution for Mercer Island Businesses",
    buildingCallouts: `Our warehousing services support Mercer Island businesses: Town Center retail (inventory storage, seasonal overflow, last-mile delivery to island), professional services (document storage, equipment storage, month-to-month), medical offices (medical supply storage, equipment storage, secure units), and general business storage (flexible terms, pickup and delivery available, 9 miles via I-90).`,
    extraFaqs: [
      {
        q: "How far is your warehouse from Mercer Island businesses?",
        a: "Our Redmond warehouse is 9 miles from Mercer Island, about 15 minutes via I-90. We offer pickup and delivery from your Mercer Island location, or you can drop off and pick up directly at our facility.",
      },
      {
        q: "Do you offer last-mile delivery to Mercer Island from your warehouse?",
        a: "Yes. We deliver from our Redmond warehouse to any Mercer Island address. We plan deliveries to avoid peak I-90 congestion and provide accurate delivery windows.",
      },
    ],
  },

// ===================================================================
// TUKWILA
// ===================================================================

  "tukwila-residential": {
    intro: `Tukwila's residential neighborhoods, Foster, Riverton Heights, Allentown, and Tukwila Village, offer a mix of older and newer housing at accessible price points. The city's location at the junction of I-5, I-405, and SR-99 makes it one of the most accessible cities in the region for moving trucks, but peak traffic on these corridors requires careful scheduling. Our crews have been serving Tukwila since 2009 and know the neighborhood-specific access considerations, from the older homes in Foster to the newer construction near Southcenter.`,
    buildingCalloutsHeading: "Tukwila Neighborhoods We Know Best",
    buildingCallouts: `Our residential crews serve all Tukwila neighborhoods: Foster (established residential, older homes, standard access, mix of home sizes), Riverton Heights (established neighborhood, standard access, efficient moves), Allentown (mixed residential, standard access, compact homes), Tukwila Village (newer development, standard access, larger homes), and Southcenter area (newer construction near light rail, standard access, apartment-heavy).`,
    extraFaqs: [
      {
        q: "What's the best time to schedule a Tukwila move to avoid I-5 traffic?",
        a: "We recommend starting before 8 a.m. or after 10 a.m. to avoid the I-5 morning rush, and completing before 3 p.m. to avoid afternoon congestion. For large moves, we often start at 7 a.m. to maximize the available window.",
      },
      {
        q: "Do you serve all Tukwila neighborhoods including Riverton Heights and Foster?",
        a: "Yes. We serve all Tukwila neighborhoods, Foster, Riverton Heights, Allentown, Tukwila Village, and the Southcenter area. Our crews know the specific access considerations for each area.",
      },
    ],
  },

  "tukwila-apartment": {
    intro: `Tukwila's apartment market is concentrated near Southcenter and the light rail corridor, with newer buildings that have standard elevator and move-in window requirements. Our crews coordinate directly with building management before move day to secure elevator reservations and confirm parking. Most Tukwila apartment moves complete in 2–3 hours, and we provide flat-rate quotes so you know the final price before we start.`,
    buildingCalloutsHeading: "Apartment Buildings We Serve in Tukwila",
    buildingCallouts: `Our apartment moving crews serve Tukwila's major complexes: Southcenter light rail apartments (elevator reservations required, COI required, standard move-in windows, limited street parking), Tukwila Village apartments (newer construction, standard requirements, ample parking), Foster area apartments (older buildings, standard access, efficient moves), and Riverton Heights apartments (established buildings, standard requirements, efficient moves).`,
    extraFaqs: [
      {
        q: "Do Tukwila Southcenter apartment buildings require a certificate of insurance?",
        a: "Most newer Southcenter area apartment buildings require a COI from your moving company. We provide certificates of insurance at no charge, just send us your building's requirements and we'll issue the COI within 24 hours.",
      },
      {
        q: "How far in advance should I book a Tukwila apartment move?",
        a: "We recommend booking 2–3 weeks in advance for Tukwila apartment moves. Southcenter area buildings fill quickly on weekends and end-of-month dates. We accommodate last-minute moves when availability allows.",
      },
    ],
  },

  "tukwila-packing": {
    intro: `Tukwila homes range from compact older properties in Foster and Riverton Heights to newer construction near Southcenter. Our packing crews bring all materials and are experienced with the full range of Tukwila home types. For older homes with vintage contents, we use specialty wrapping for fragile items. For newer construction with large kitchens and extensive contents, full-pack service is a popular choice. We provide flat-rate packing quotes so you know the final price before we start.`,
    buildingCalloutsHeading: "Packing Services Across Tukwila Neighborhoods",
    buildingCallouts: `Our packing crews serve all Tukwila neighborhoods: Foster (older homes, vintage contents, specialty wrapping available), Riverton Heights (established homes, standard packing, efficient turnaround), Allentown (compact homes, efficient packing, standard materials), Tukwila Village (newer construction, large kitchens, full-pack service common), and Southcenter area (apartments, standard packing, efficient turnaround).`,
    extraFaqs: [
      {
        q: "How long does it take to pack a Tukwila home?",
        a: "A typical 2-bedroom Tukwila home takes 4–6 hours to pack with a 2-person crew. A larger newer construction home with 3–4 bedrooms takes 6–10 hours. We recommend a free walkthrough quote for larger homes.",
      },
      {
        q: "Do you bring packing materials for Tukwila moves?",
        a: "Yes. We bring all packing materials, boxes, tape, bubble wrap, packing paper, and specialty materials for fragile items. There are no surprise supply charges; materials are included in our flat-rate packing quotes.",
      },
    ],
  },

  "tukwila-commercial": {
    intro: `Tukwila is a major commercial hub in South King County, with Westfield Southcenter, significant warehouse and distribution activity, and a growing office market near I-5 and I-405. Our commercial crews handle office, retail, and warehouse moves with minimal disruption. We work after hours and on weekends, and our project managers coordinate directly with your facilities team. For Southcenter area businesses, we plan truck access and parking in advance. Flat-rate quotes available for all Tukwila commercial moves.`,
    buildingCalloutsHeading: "Commercial Moving in Tukwila's Business Districts",
    buildingCallouts: `We serve Tukwila's major commercial areas: Southcenter retail corridor (retail and restaurant moves, Westfield Southcenter area, standard access, flexible scheduling), I-5/I-405 corridor office parks (office moves, after-hours available, IT equipment handling), warehouse and distribution (pallet moves, equipment relocation, loading dock coordination), and light industrial (machinery moves, equipment relocation, specialized handling available).`,
    extraFaqs: [
      {
        q: "Do you handle warehouse and distribution moves in Tukwila?",
        a: "Yes. We regularly move warehouse and distribution operations in Tukwila. We handle pallet moves, equipment relocation, and loading dock coordination. For large warehouse moves, we recommend a free on-site walkthrough to plan the move sequence.",
      },
      {
        q: "Can you move our Tukwila retail store on a weekend?",
        a: "Yes. Weekend retail moves are common in Tukwila. We work Saturday and Sunday and can coordinate with Westfield Southcenter or other retail management for after-hours access.",
      },
    ],
  },

  "tukwila-storage": {
    intro: `Our climate-controlled storage facility in Redmond is 16 miles from Tukwila, about 24 minutes via I-405. We offer month-to-month storage with no long-term contracts, and storage is available month-to-month, contact us for current pricing. Tukwila customers commonly use our storage for between-home transitions, home staging, and business inventory overflow. All items are stored in individually locked units with 24/7 security monitoring.`,
    buildingCalloutsHeading: "Storage Solutions for Tukwila Residents and Businesses",
    buildingCallouts: `Our Redmond storage facility serves all Tukwila neighborhoods: residential storage (between-home storage, staging storage, renovation storage, secure vault storage available), Southcenter business storage (retail inventory overflow, seasonal storage, month-to-month), warehouse overflow (pallet storage, equipment storage, flexible terms), and general household storage (month-to-month, no long-term contracts).`,
    extraFaqs: [
      {
        q: "How far is your storage facility from Tukwila?",
        a: "Our Redmond storage facility is 16 miles from Tukwila, about 24 minutes via I-405. We offer pickup and delivery from your Tukwila location, or you can drop off and pick up directly at our facility.",
      },
      {
        q: "Do you offer business storage for Tukwila retail businesses?",
        a: "Yes. We offer flexible month-to-month storage for retail inventory, seasonal overflow, and equipment. Many Tukwila businesses use our Redmond facility for seasonal inventory management.",
      },
    ],
  },

  "tukwila-senior": {
    intro: `Tukwila has established residential neighborhoods with a significant senior population, and we have extensive experience with senior moves in the area. Our senior moving crews work at a pace that's comfortable for you, we never rush, we communicate clearly, and we take extra care with items that have sentimental value. We coordinate with family members, senior living facilities, and downsizing specialists as needed. Our I-5 and I-405 access makes us efficient for Tukwila senior moves.`,
    buildingCalloutsHeading: "Senior Moving Services Across Tukwila",
    buildingCallouts: `Our senior moving crews serve all Tukwila neighborhoods and destinations: Foster and Riverton Heights (established homes, downsizing moves, full packing available), Allentown and Tukwila Village (standard moves, partial-pack available, family coordination), senior living facilities in and near Tukwila (direct facility coordination, move-in window compliance, COI handling), and in-Tukwila downsizing moves (from larger home to smaller home or apartment).`,
    extraFaqs: [
      {
        q: "Do you help with downsizing moves from Tukwila homes?",
        a: "Yes. We work with seniors and families downsizing from Tukwila homes. We can pack, move, and help coordinate donation pickups. We move at your pace and communicate clearly throughout the process.",
      },
      {
        q: "Can you coordinate with a senior living facility near Tukwila?",
        a: "Yes. We coordinate directly with senior living facility management to confirm move-in windows, elevator reservations, and COI requirements.",
      },
    ],
  },

  "tukwila-furniture": {
    intro: `Moving furniture in Tukwila requires the right equipment and experience, from older homes in Foster with narrow doorways to newer construction near Southcenter with oversized pieces. Our furniture moving crews bring the tools for disassembly and reassembly, and use furniture pads and floor runners to protect both your furniture and your property. We handle the full range, sectional sofas, king beds, dining sets, and outdoor furniture.`,
    buildingCalloutsHeading: "Furniture Moving Across Tukwila Neighborhoods",
    buildingCallouts: `Our furniture moving crews serve all Tukwila neighborhoods: Foster (older homes, narrow doorways, careful maneuvering), Riverton Heights (established homes, standard furniture, efficient moves), Tukwila Village (newer construction, oversized pieces, disassembly available), Southcenter area apartments (elevator coordination, standard furniture, efficient moves), and Allentown (compact homes, standard furniture, efficient moves).`,
    extraFaqs: [
      {
        q: "Do you disassemble and reassemble furniture for Tukwila moves?",
        a: "Yes. We disassemble and reassemble bed frames, sectional sofas, dining tables, and other furniture as needed. We bring the tools and hardware bags to keep everything organized.",
      },
      {
        q: "Can you move large furniture through narrow doorways in older Tukwila homes?",
        a: "Yes. Older homes in Foster and Riverton Heights often have narrow doorways and tight stairwells. Our crews are experienced with maneuvering large furniture through challenging spaces, we assess access before move day and plan accordingly.",
      },
    ],
  },

  "tukwila-appliance": {
    intro: `Moving appliances in Tukwila requires the right equipment, refrigerators, washers, dryers, and ranges are heavy and easy to damage without proper technique. Our appliance moving crews use appliance dollies, furniture pads, and straps to protect both the appliance and your floors. We disconnect and reconnect standard appliance hookups as part of our service, and we're experienced with the full range of Tukwila home types.`,
    buildingCalloutsHeading: "Appliance Moving Across Tukwila",
    buildingCallouts: `Our appliance moving crews serve all Tukwila neighborhoods: Foster (older homes, standard appliances, narrow access in some properties), Riverton Heights (established homes, standard appliances, efficient moves), Tukwila Village (newer construction, large appliances, standard access), Southcenter area apartments (elevator coordination, standard appliances, efficient moves), and Allentown (compact homes, standard appliances, efficient moves).`,
    extraFaqs: [
      {
        q: "Do you disconnect and reconnect appliances for Tukwila moves?",
        a: "Yes. We disconnect and reconnect standard appliance hookups, water lines for refrigerators and dishwashers, electric connections for ranges. Gas disconnection requires a licensed plumber, which we can coordinate.",
      },
      {
        q: "Can you move appliances through narrow doorways in older Tukwila homes?",
        a: "Yes. We're experienced with moving appliances through challenging spaces in older Tukwila homes. We assess doorway and stairwell dimensions before move day and plan accordingly.",
      },
    ],
  },

  "tukwila-unpacking": {
    intro: `After a Tukwila move, our unpacking crews can set up your new home so you're living comfortably from day one. We unpack boxes, place items in their designated rooms, and remove all packing materials. We work at your pace and follow your instructions for where everything goes. Unpacking service is available as a standalone booking or as an add-on to any Tukwila move.`,
    buildingCalloutsHeading: "Unpacking Services Across Tukwila",
    buildingCallouts: `Our unpacking crews serve all Tukwila neighborhoods and home types: Foster and Riverton Heights (established homes, standard unpacking, room-by-room setup), Tukwila Village (newer construction, full unpacking service, all materials removed), Southcenter area apartments (standard apartment setup, efficient unpacking), and Allentown (compact homes, efficient unpacking, standard setup).`,
    extraFaqs: [
      {
        q: "How long does unpacking take for a Tukwila home?",
        a: "A typical 2-bedroom Tukwila home takes 3–5 hours to unpack with a 2-person crew. A larger 3–4 bedroom home takes 5–8 hours. We remove all boxes and packing materials when we're done.",
      },
      {
        q: "Can I book unpacking service separately from the move in Tukwila?",
        a: "Yes. We offer unpacking as a standalone service, you don't have to use us for the move itself. We can schedule unpacking the day after your move or whenever works best for you.",
      },
    ],
  },

  "tukwila-warehousing": {
    intro: `Our Redmond warehouse is 16 miles from Tukwila and offers flexible warehousing and distribution services for South King County businesses. We handle receiving, storage, inventory management, and last-mile delivery. Tukwila's position at the I-5/I-405/SR-99 junction makes it a natural distribution hub, and our facility provides efficient access for both inbound and outbound freight. Month-to-month contracts available.`,
    buildingCalloutsHeading: "Warehousing and Distribution for Tukwila Businesses",
    buildingCallouts: `Our warehousing services support Tukwila businesses: Southcenter retail (inventory storage, seasonal overflow, last-mile delivery), warehouse and distribution operations (pallet storage, cross-docking, receiving and distribution), light industrial (equipment storage, machinery storage, flexible terms), and general business storage (month-to-month, pickup and delivery available).`,
    extraFaqs: [
      {
        q: "Do you offer cross-docking services for Tukwila distribution businesses?",
        a: "Yes. We offer cross-docking at our Redmond facility for Tukwila distribution businesses. We receive inbound freight, sort, and redistribute for last-mile delivery.",
      },
      {
        q: "How far is your warehouse from Tukwila?",
        a: "Our Redmond warehouse is 16 miles from Tukwila, about 24 minutes via I-405. We offer pickup and delivery from your Tukwila location.",
      },
    ],
  },

// ===================================================================
// MOUNTLAKE TERRACE
// ===================================================================

  "mountlake-terrace-residential": {
    intro: `Mountlake Terrace is experiencing a significant transformation around its new Lynnwood Link light rail station, with new apartment development alongside established mid-century residential neighborhoods. Our crews have been serving Mountlake Terrace since 2009 and know the mix of older homes in Ballinger and Terrace Creek alongside the newer construction near the City Center station. I-5 provides the main access route from our Redmond warehouse, 17 miles southeast, a 22-minute drive that keeps our response time fast.`,
    buildingCalloutsHeading: "Mountlake Terrace Neighborhoods We Know Best",
    buildingCallouts: `Our residential crews serve all Mountlake Terrace neighborhoods: Downtown Mountlake Terrace (newer development, standard access, mixed housing), Ballinger (established residential, mid-century homes, standard access), Terrace Creek (established neighborhood, mix of home sizes, standard access), Lakeview (residential, lake-adjacent properties, standard access), North Mountlake Terrace (established residential, standard access, efficient moves), and light rail corridor (new apartment development, elevator requirements, standard move-in windows).`,
    extraFaqs: [
      {
        q: "Do you serve the new apartments near Mountlake Terrace's light rail station?",
        a: "Yes. We regularly move in and out of the new apartment buildings near Mountlake Terrace's light rail station. We coordinate elevator reservations and work within building move-in windows.",
      },
      {
        q: "What's the best time to schedule a Mountlake Terrace move to avoid I-5 traffic?",
        a: "We recommend starting before 8 a.m. or after 10 a.m. to avoid the I-5 morning rush, and completing before 3 p.m. to avoid afternoon congestion. For large moves, we often start at 7 a.m.",
      },
    ],
  },

  "mountlake-terrace-apartment": {
    intro: `Mountlake Terrace's apartment market is growing rapidly around the new light rail station, with newer buildings that have standard elevator and move-in window requirements. Our crews coordinate directly with building management before move day to secure elevator reservations and confirm parking. Most Mountlake Terrace apartment moves complete in 2–3 hours, and we provide flat-rate quotes so you know the final price before we start.`,
    buildingCalloutsHeading: "Apartment Buildings We Serve in Mountlake Terrace",
    buildingCallouts: `Our apartment moving crews serve Mountlake Terrace's major complexes: light rail corridor apartments (elevator reservations required, COI required, standard move-in windows, newer construction), Downtown Mountlake Terrace apartments (standard requirements, mixed housing, efficient moves), Ballinger area apartments (established buildings, standard access, efficient moves), and Terrace Creek apartments (standard requirements, ample parking, efficient moves).`,
    extraFaqs: [
      {
        q: "Do the new Mountlake Terrace light rail apartments require a certificate of insurance?",
        a: "Most newer light rail corridor apartment buildings require a COI from your moving company. We provide certificates of insurance at no charge, just send us your building's requirements and we'll issue the COI within 24 hours.",
      },
      {
        q: "How far in advance should I book a Mountlake Terrace apartment move?",
        a: "We recommend booking 2–3 weeks in advance. Light rail corridor buildings fill quickly on weekends and end-of-month dates due to high turnover.",
      },
    ],
  },

  "mountlake-terrace-packing": {
    intro: `Mountlake Terrace homes range from compact mid-century properties in Ballinger and Terrace Creek to newer construction near the light rail corridor. Our packing crews bring all materials and are experienced with the full range of home types. For mid-century homes with vintage contents, we use specialty wrapping for fragile items. For newer construction with large kitchens and extensive contents, full-pack service is a popular choice. We provide flat-rate packing quotes.`,
    buildingCalloutsHeading: "Packing Services Across Mountlake Terrace",
    buildingCallouts: `Our packing crews serve all Mountlake Terrace neighborhoods: Ballinger (mid-century homes, vintage contents, specialty wrapping available), Terrace Creek (established homes, standard packing, efficient turnaround), Downtown Mountlake Terrace (mixed housing, standard packing, efficient turnaround), light rail corridor apartments (standard packing, efficient turnaround, all materials included), and Lakeview (residential, standard packing, efficient moves).`,
    extraFaqs: [
      {
        q: "How long does it take to pack a Mountlake Terrace home?",
        a: "A typical 2-bedroom Mountlake Terrace home takes 4–6 hours to pack with a 2-person crew. A larger 3–4 bedroom home takes 6–10 hours. We recommend a free walkthrough quote for larger homes.",
      },
      {
        q: "Do you pack vintage and mid-century items for Mountlake Terrace moves?",
        a: "Yes. We use specialty wrapping and careful handling for vintage furniture, mid-century modern pieces, and fragile collectibles. We bring acid-free tissue and custom padding for delicate items.",
      },
    ],
  },

  "mountlake-terrace-commercial": {
    intro: `Mountlake Terrace's business community is growing around the new light rail station, with new retail and office development alongside established businesses along 236th Street SW. Our commercial crews handle office and retail moves with minimal disruption, we work after hours and on weekends. For businesses near the light rail corridor, we plan truck access and parking in advance. Flat-rate quotes available for all Mountlake Terrace commercial moves.`,
    buildingCalloutsHeading: "Commercial Moving in Mountlake Terrace",
    buildingCallouts: `We serve Mountlake Terrace's commercial areas: light rail corridor commercial (new retail and office, standard access, flexible scheduling), 236th Street SW corridor (established businesses, standard access, efficient moves), Downtown Mountlake Terrace (mixed commercial, standard access, weekend moves available), and Ballinger area commercial (established businesses, standard access, ample parking).`,
    extraFaqs: [
      {
        q: "Can you move our Mountlake Terrace office on a weekend?",
        a: "Yes. Weekend moves are our most common request for Mountlake Terrace commercial relocations. We work Saturday and Sunday and can start as early as 6 a.m.",
      },
      {
        q: "Do you handle moves for businesses near the Mountlake Terrace light rail station?",
        a: "Yes. We regularly move businesses near the Mountlake Terrace light rail station. We plan truck access and parking in advance to work efficiently in the busy corridor.",
      },
    ],
  },

  "mountlake-terrace-storage": {
    intro: `Our climate-controlled storage facility in Redmond is 17 miles from Mountlake Terrace, about 22 minutes via I-5. We offer month-to-month storage with no long-term contracts, and storage is available month-to-month, contact us for current pricing. Customers commonly use our storage for between-home transitions, home staging, and renovation projects. All items are stored in individually locked units with 24/7 security monitoring.`,
    buildingCalloutsHeading: "Storage Solutions for Mountlake Terrace Residents and Businesses",
    buildingCallouts: `Our Redmond storage facility serves all Mountlake Terrace neighborhoods: residential storage (between-home storage, staging storage, renovation storage, secure vault storage available), light rail corridor business storage (retail inventory overflow, seasonal storage, month-to-month), established neighborhood storage (household goods, furniture, general storage), and general business storage (month-to-month, pickup and delivery available).`,
    extraFaqs: [
      {
        q: "How far is your storage facility from Mountlake Terrace?",
        a: "Our Redmond storage facility is 17 miles from Mountlake Terrace, about 22 minutes via I-5. We offer pickup and delivery from your Mountlake Terrace location.",
      },
      {
        q: "Do you offer month-to-month storage for Mountlake Terrace residents?",
        a: "Yes. All our storage contracts are month-to-month, no long-term commitment required. Storage is available month-to-month, contact us for current pricing.",
      },
    ],
  },

  "mountlake-terrace-senior": {
    intro: `Mountlake Terrace has established residential neighborhoods with a significant senior population, and we have extensive experience with senior moves in the area. Our senior moving crews work at a pace that's comfortable for you, we never rush, we communicate clearly, and we take extra care with items that have sentimental value. We coordinate with family members, senior living facilities, and downsizing specialists as needed.`,
    buildingCalloutsHeading: "Senior Moving Services Across Mountlake Terrace",
    buildingCallouts: `Our senior moving crews serve all Mountlake Terrace neighborhoods and destinations: Ballinger and Terrace Creek (established homes, downsizing moves, full packing available), Downtown Mountlake Terrace (standard moves, partial-pack available, family coordination), senior living facilities in and near Mountlake Terrace (direct facility coordination, move-in window compliance), and in-Mountlake Terrace downsizing moves (from larger home to smaller home or apartment).`,
    extraFaqs: [
      {
        q: "Do you help with downsizing moves from Mountlake Terrace homes?",
        a: "Yes. We work with seniors and families downsizing from Mountlake Terrace homes. We can pack, move, and help coordinate donation pickups. We move at your pace.",
      },
      {
        q: "Can you coordinate with a senior living facility near Mountlake Terrace?",
        a: "Yes. We coordinate directly with senior living facility management to confirm move-in windows, elevator reservations, and COI requirements.",
      },
    ],
  },

  "mountlake-terrace-furniture": {
    intro: `Mountlake Terrace homes range from compact mid-century properties to newer construction near the light rail corridor. Our furniture moving crews bring the tools for disassembly and reassembly, and use furniture pads and floor runners to protect both your furniture and your property. For mid-century homes with narrow doorways, we assess access before move day and plan accordingly.`,
    buildingCalloutsHeading: "Furniture Moving Across Mountlake Terrace",
    buildingCallouts: `Our furniture moving crews serve all Mountlake Terrace neighborhoods: Ballinger (mid-century homes, narrow doorways, careful maneuvering), Terrace Creek (established homes, standard furniture, efficient moves), Downtown Mountlake Terrace (mixed housing, standard furniture, efficient moves), light rail corridor apartments (elevator coordination, standard furniture, efficient moves), and Lakeview (residential, standard furniture, efficient moves).`,
    extraFaqs: [
      {
        q: "Do you disassemble and reassemble furniture for Mountlake Terrace moves?",
        a: "Yes. We disassemble and reassemble bed frames, sectional sofas, dining tables, and other furniture as needed. We bring the tools and hardware bags to keep everything organized.",
      },
      {
        q: "Can you move large furniture through narrow doorways in older Mountlake Terrace homes?",
        a: "Yes. Mid-century homes in Ballinger and Terrace Creek often have narrow doorways. Our crews are experienced with maneuvering large furniture through challenging spaces.",
      },
    ],
  },

  "mountlake-terrace-appliance": {
    intro: `Moving appliances in Mountlake Terrace requires the right equipment and experience. Our appliance moving crews use appliance dollies, furniture pads, and straps to protect both the appliance and your floors. We disconnect and reconnect standard appliance hookups as part of our service, and we're experienced with the full range of Mountlake Terrace home types, from compact mid-century homes to newer construction.`,
    buildingCalloutsHeading: "Appliance Moving Across Mountlake Terrace",
    buildingCallouts: `Our appliance moving crews serve all Mountlake Terrace neighborhoods: Ballinger (mid-century homes, standard appliances, narrow access in some properties), Terrace Creek (established homes, standard appliances, efficient moves), Downtown Mountlake Terrace (mixed housing, standard appliances, efficient moves), light rail corridor apartments (elevator coordination, standard appliances, efficient moves), and Lakeview (residential, standard appliances, efficient moves).`,
    extraFaqs: [
      {
        q: "Do you disconnect and reconnect appliances for Mountlake Terrace moves?",
        a: "Yes. We disconnect and reconnect standard appliance hookups, water lines for refrigerators and dishwashers, electric connections for ranges.",
      },
      {
        q: "Can you move appliances through narrow doorways in older Mountlake Terrace homes?",
        a: "Yes. We're experienced with moving appliances through challenging spaces in older Mountlake Terrace homes. We assess doorway dimensions before move day and plan accordingly.",
      },
    ],
  },

  "mountlake-terrace-unpacking": {
    intro: `After a Mountlake Terrace move, our unpacking crews can set up your new home so you're living comfortably from day one. We unpack boxes, place items in their designated rooms, and remove all packing materials. We work at your pace and follow your instructions for where everything goes. Unpacking service is available as a standalone booking or as an add-on to any Mountlake Terrace move.`,
    buildingCalloutsHeading: "Unpacking Services Across Mountlake Terrace",
    buildingCallouts: `Our unpacking crews serve all Mountlake Terrace neighborhoods and home types: Ballinger and Terrace Creek (established homes, standard unpacking, room-by-room setup), Downtown Mountlake Terrace (mixed housing, standard unpacking, all materials removed), light rail corridor apartments (standard apartment setup, efficient unpacking), and Lakeview (residential, standard unpacking, efficient setup).`,
    extraFaqs: [
      {
        q: "How long does unpacking take for a Mountlake Terrace home?",
        a: "A typical 2-bedroom Mountlake Terrace home takes 3–5 hours to unpack with a 2-person crew. A larger 3–4 bedroom home takes 5–8 hours. We remove all boxes and packing materials when we're done.",
      },
      {
        q: "Can I book unpacking service separately from the move in Mountlake Terrace?",
        a: "Yes. We offer unpacking as a standalone service. We can schedule unpacking the day after your move or whenever works best for you.",
      },
    ],
  },

  "mountlake-terrace-warehousing": {
    intro: `Our Redmond warehouse is 17 miles from Mountlake Terrace and offers flexible warehousing and distribution services for Snohomish County businesses. We handle receiving, storage, inventory management, and last-mile delivery. For businesses near the light rail corridor, our facility provides efficient access via I-5. Month-to-month contracts available.`,
    buildingCalloutsHeading: "Warehousing and Distribution for Mountlake Terrace Businesses",
    buildingCallouts: `Our warehousing services support Mountlake Terrace businesses: light rail corridor retail (inventory storage, seasonal overflow, last-mile delivery), professional services (document storage, equipment storage, month-to-month), established businesses (general storage, flexible terms, pickup and delivery available), and general business storage (month-to-month, no long-term commitment).`,
    extraFaqs: [
      {
        q: "How far is your warehouse from Mountlake Terrace?",
        a: "Our Redmond warehouse is 17 miles from Mountlake Terrace, about 22 minutes via I-5. We offer pickup and delivery from your Mountlake Terrace location.",
      },
      {
        q: "Do you offer month-to-month warehousing for Mountlake Terrace businesses?",
        a: "Yes. All our warehousing contracts are month-to-month, no long-term commitment required.",
      },
    ],
  },

// ===================================================================
// LYNNWOOD
// ===================================================================

  "lynnwood-residential": {
    intro: `Lynnwood is the commercial hub of South Snohomish County and the northern terminus of the Lynnwood Link light rail extension, a status that's driving significant new apartment development around the City Center station. Our crews have been serving Lynnwood since 2009 and know the established Alderwood and Meadowdale neighborhoods as well as the newer construction near the light rail corridor. I-5 provides the main access route from our Redmond warehouse, 18 miles southeast, a 28-minute drive.`,
    buildingCalloutsHeading: "Lynnwood Neighborhoods We Know Best",
    buildingCallouts: `Our residential crews serve all Lynnwood neighborhoods: Alderwood (established residential, mix of older and newer homes, standard access), Scriber Lake (residential, lake-adjacent properties, standard access), Lynnwood City Center (newer development, light rail corridor, mixed housing), Meadowdale (established neighborhood, standard access, efficient moves), Larch Way (residential, standard access, mix of home sizes), Lynnwood Crossing (newer development, standard access, larger homes), and North Lynnwood (established residential, standard access, efficient moves).`,
    extraFaqs: [
      {
        q: "Do you serve the new apartments near Lynnwood's City Center light rail station?",
        a: "Yes. We regularly move in and out of the new apartment buildings near Lynnwood's City Center light rail station. We coordinate elevator reservations and work within building move-in windows.",
      },
      {
        q: "What's the best time to schedule a Lynnwood move to avoid I-5 traffic?",
        a: "We recommend starting before 8 a.m. or after 10 a.m. to avoid the I-5 morning rush, and completing before 3 p.m. to avoid afternoon congestion. For large moves, we often start at 7 a.m.",
      },
    ],
  },

  "lynnwood-apartment": {
    intro: `Lynnwood's apartment market is growing rapidly around the City Center light rail station, with newer buildings that have standard elevator and move-in window requirements. Our crews coordinate directly with building management before move day to secure elevator reservations and confirm parking. Most Lynnwood apartment moves complete in 2–3 hours, and we provide flat-rate quotes so you know the final price before we start.`,
    buildingCalloutsHeading: "Apartment Buildings We Serve in Lynnwood",
    buildingCallouts: `Our apartment moving crews serve Lynnwood's major complexes: City Center light rail apartments (elevator reservations required, COI required, standard move-in windows, newer construction), Alderwood area apartments (established buildings, standard access, efficient moves), Meadowdale apartments (standard requirements, ample parking, efficient moves), Larch Way apartments (standard requirements, efficient moves), and North Lynnwood apartments (established buildings, standard access, efficient moves).`,
    extraFaqs: [
      {
        q: "Do the new Lynnwood City Center apartments require a certificate of insurance?",
        a: "Most newer City Center light rail apartment buildings require a COI from your moving company. We provide certificates of insurance at no charge, just send us your building's requirements and we'll issue the COI within 24 hours.",
      },
      {
        q: "How far in advance should I book a Lynnwood apartment move?",
        a: "We recommend booking 2–3 weeks in advance. City Center buildings fill quickly on weekends and end-of-month dates due to high turnover near the light rail station.",
      },
    ],
  },

  "lynnwood-packing": {
    intro: `Lynnwood homes range from compact older properties in Alderwood to newer construction near the City Center light rail corridor. Our packing crews bring all materials and are experienced with the full range of home types. For older Alderwood homes with vintage contents, we use specialty wrapping for fragile items. For newer construction with large kitchens and extensive contents, full-pack service is a popular choice. We provide flat-rate packing quotes.`,
    buildingCalloutsHeading: "Packing Services Across Lynnwood Neighborhoods",
    buildingCallouts: `Our packing crews serve all Lynnwood neighborhoods: Alderwood (established homes, vintage contents, specialty wrapping available), Scriber Lake (residential, standard packing, efficient turnaround), City Center (newer construction, full-pack service common, all materials included), Meadowdale (established homes, standard packing, efficient turnaround), Larch Way (residential, standard packing, efficient moves), and North Lynnwood (established homes, standard packing, efficient moves).`,
    extraFaqs: [
      {
        q: "How long does it take to pack a Lynnwood home?",
        a: "A typical 2-bedroom Lynnwood home takes 4–6 hours to pack with a 2-person crew. A larger 3–4 bedroom home takes 6–10 hours. We recommend a free walkthrough quote for larger homes.",
      },
      {
        q: "Do you bring packing materials for Lynnwood moves?",
        a: "Yes. We bring all packing materials, boxes, tape, bubble wrap, packing paper, and specialty materials for fragile items. All materials are included in our flat-rate packing quotes.",
      },
    ],
  },

  "lynnwood-commercial": {
    intro: `Lynnwood is the commercial hub of South Snohomish County, with Alderwood Mall, significant retail development, and a growing office market near the City Center light rail station. Our commercial crews handle office, retail, and restaurant moves with minimal disruption, we work after hours and on weekends. For Alderwood Mall area businesses, we plan truck access and parking in advance. Flat-rate quotes available for all Lynnwood commercial moves.`,
    buildingCalloutsHeading: "Commercial Moving in Lynnwood's Business Districts",
    buildingCallouts: `We serve Lynnwood's major commercial areas: Alderwood Mall corridor (retail and restaurant moves, standard access, flexible scheduling, after-hours available), City Center light rail corridor (new retail and office, standard access, elevator coordination), 44th Avenue W corridor (established businesses, standard access, efficient moves), and North Lynnwood commercial (standard access, ample parking, efficient moves).`,
    extraFaqs: [
      {
        q: "Do you handle retail moves in the Alderwood Mall area?",
        a: "Yes. We regularly move retail businesses in the Alderwood Mall corridor. We coordinate with mall management for after-hours access and plan truck parking in advance.",
      },
      {
        q: "Can you move our Lynnwood office on a weekend?",
        a: "Yes. Weekend moves are our most common request for Lynnwood commercial relocations. We work Saturday and Sunday and can start as early as 6 a.m.",
      },
    ],
  },

  "lynnwood-storage": {
    intro: `Our climate-controlled storage facility in Redmond is 18 miles from Lynnwood, about 28 minutes via I-5. We offer month-to-month storage with no long-term contracts, and storage is available month-to-month, contact us for current pricing. Lynnwood customers commonly use our storage for between-home transitions, home staging, and business inventory overflow. All items are stored in individually locked units with 24/7 security monitoring.`,
    buildingCalloutsHeading: "Storage Solutions for Lynnwood Residents and Businesses",
    buildingCallouts: `Our Redmond storage facility serves all Lynnwood neighborhoods: residential storage (between-home storage, staging storage, renovation storage, secure vault storage available), Alderwood Mall business storage (retail inventory overflow, seasonal storage, month-to-month), City Center business storage (new retail and office inventory, flexible terms), and general household storage (month-to-month, no long-term contracts).`,
    extraFaqs: [
      {
        q: "How far is your storage facility from Lynnwood?",
        a: "Our Redmond storage facility is 18 miles from Lynnwood, about 28 minutes via I-5. We offer pickup and delivery from your Lynnwood location.",
      },
      {
        q: "Do you offer business storage for Lynnwood retail businesses?",
        a: "Yes. We offer flexible month-to-month storage for retail inventory, seasonal overflow, and equipment. Many Lynnwood businesses use our Redmond facility for seasonal inventory management.",
      },
    ],
  },

  "lynnwood-senior": {
    intro: `Lynnwood has established residential neighborhoods with a significant senior population, and we have extensive experience with senior moves in the area. Our senior moving crews work at a pace that's comfortable for you, we never rush, we communicate clearly, and we take extra care with items that have sentimental value. We coordinate with family members, senior living facilities, and downsizing specialists as needed.`,
    buildingCalloutsHeading: "Senior Moving Services Across Lynnwood",
    buildingCallouts: `Our senior moving crews serve all Lynnwood neighborhoods and destinations: Alderwood and Meadowdale (established homes, downsizing moves, full packing available), City Center (standard moves, partial-pack available, family coordination), senior living facilities in and near Lynnwood (direct facility coordination, move-in window compliance, COI handling), and in-Lynnwood downsizing moves (from larger home to smaller home or apartment).`,
    extraFaqs: [
      {
        q: "Do you help with downsizing moves from Lynnwood homes?",
        a: "Yes. We work with seniors and families downsizing from Lynnwood homes. We can pack, move, and help coordinate donation pickups. We move at your pace and communicate clearly throughout the process.",
      },
      {
        q: "Can you coordinate with a senior living facility near Lynnwood?",
        a: "Yes. We coordinate directly with senior living facility management to confirm move-in windows, elevator reservations, and COI requirements.",
      },
    ],
  },

  "lynnwood-furniture": {
    intro: `Lynnwood homes range from compact older properties in Alderwood to newer construction near the City Center light rail corridor. Our furniture moving crews bring the tools for disassembly and reassembly, and use furniture pads and floor runners to protect both your furniture and your property. For older Alderwood homes with narrow doorways, we assess access before move day and plan accordingly.`,
    buildingCalloutsHeading: "Furniture Moving Across Lynnwood Neighborhoods",
    buildingCallouts: `Our furniture moving crews serve all Lynnwood neighborhoods: Alderwood (older homes, narrow doorways, careful maneuvering), Scriber Lake (residential, standard furniture, efficient moves), City Center (newer construction, oversized pieces, disassembly available), Meadowdale (established homes, standard furniture, efficient moves), Larch Way (residential, standard furniture, efficient moves), and North Lynnwood (established homes, standard furniture, efficient moves).`,
    extraFaqs: [
      {
        q: "Do you disassemble and reassemble furniture for Lynnwood moves?",
        a: "Yes. We disassemble and reassemble bed frames, sectional sofas, dining tables, and other furniture as needed. We bring the tools and hardware bags to keep everything organized.",
      },
      {
        q: "Can you move large furniture through narrow doorways in older Lynnwood homes?",
        a: "Yes. Older homes in Alderwood often have narrow doorways. Our crews are experienced with maneuvering large furniture through challenging spaces.",
      },
    ],
  },

  "lynnwood-appliance": {
    intro: `Moving appliances in Lynnwood requires the right equipment and experience. Our appliance moving crews use appliance dollies, furniture pads, and straps to protect both the appliance and your floors. We disconnect and reconnect standard appliance hookups as part of our service, and we're experienced with the full range of Lynnwood home types, from compact older homes to newer construction.`,
    buildingCalloutsHeading: "Appliance Moving Across Lynnwood",
    buildingCallouts: `Our appliance moving crews serve all Lynnwood neighborhoods: Alderwood (older homes, standard appliances, narrow access in some properties), Scriber Lake (residential, standard appliances, efficient moves), City Center (newer construction, large appliances, standard access), Meadowdale (established homes, standard appliances, efficient moves), and North Lynnwood (established homes, standard appliances, efficient moves).`,
    extraFaqs: [
      {
        q: "Do you disconnect and reconnect appliances for Lynnwood moves?",
        a: "Yes. We disconnect and reconnect standard appliance hookups, water lines for refrigerators and dishwashers, electric connections for ranges.",
      },
      {
        q: "Can you move appliances through narrow doorways in older Lynnwood homes?",
        a: "Yes. We're experienced with moving appliances through challenging spaces in older Lynnwood homes. We assess doorway dimensions before move day and plan accordingly.",
      },
    ],
  },

  "lynnwood-unpacking": {
    intro: `After a Lynnwood move, our unpacking crews can set up your new home so you're living comfortably from day one. We unpack boxes, place items in their designated rooms, and remove all packing materials. We work at your pace and follow your instructions for where everything goes. Unpacking service is available as a standalone booking or as an add-on to any Lynnwood move.`,
    buildingCalloutsHeading: "Unpacking Services Across Lynnwood",
    buildingCallouts: `Our unpacking crews serve all Lynnwood neighborhoods and home types: Alderwood and Meadowdale (established homes, standard unpacking, room-by-room setup), City Center (newer construction, full unpacking service, all materials removed), Scriber Lake (residential, standard unpacking, efficient setup), and North Lynnwood (established homes, standard unpacking, efficient setup).`,
    extraFaqs: [
      {
        q: "How long does unpacking take for a Lynnwood home?",
        a: "A typical 2-bedroom Lynnwood home takes 3–5 hours to unpack with a 2-person crew. A larger 3–4 bedroom home takes 5–8 hours. We remove all boxes and packing materials when we're done.",
      },
      {
        q: "Can I book unpacking service separately from the move in Lynnwood?",
        a: "Yes. We offer unpacking as a standalone service. We can schedule unpacking the day after your move or whenever works best for you.",
      },
    ],
  },

  "lynnwood-warehousing": {
    intro: `Our Redmond warehouse is 18 miles from Lynnwood and offers flexible warehousing and distribution services for South Snohomish County businesses. We handle receiving, storage, inventory management, and last-mile delivery. For Alderwood Mall area businesses and the growing City Center corridor, our facility provides efficient access via I-5. Month-to-month contracts available.`,
    buildingCalloutsHeading: "Warehousing and Distribution for Lynnwood Businesses",
    buildingCallouts: `Our warehousing services support Lynnwood businesses: Alderwood Mall retail (inventory storage, seasonal overflow, last-mile delivery), City Center commercial (new retail and office storage, flexible terms), professional services (document storage, equipment storage, month-to-month), and general business storage (month-to-month, no long-term commitment, pickup and delivery available).`,
    extraFaqs: [
      {
        q: "How far is your warehouse from Lynnwood?",
        a: "Our Redmond warehouse is 18 miles from Lynnwood, about 28 minutes via I-5. We offer pickup and delivery from your Lynnwood location.",
      },
      {
        q: "Do you offer last-mile delivery to Lynnwood from your warehouse?",
        a: "Yes. We deliver from our Redmond warehouse to any Lynnwood address. We plan deliveries to avoid peak I-5 congestion and provide accurate delivery windows.",
      },
    ],
  },

// ===================================================================
// MUKILTEO
// ===================================================================

  "mukilteo-residential": {
    intro: `Mukilteo is a scenic waterfront community anchored by the Mukilteo ferry terminal, Paine Field airport, and the large Harbour Pointe planned community, one of the largest HOA communities in Snohomish County. Our crews have been moving Mukilteo homes since 2009 and know every neighborhood's specific logistics. Harbour Pointe has strict HOA move-in rules: designated windows, COI requirements, and elevator reservations in multi-story buildings. Waterfront properties near the ferry terminal have limited truck access and require advance planning. Our Redmond warehouse is 18 miles southeast, a 28-minute drive via I-5 and SR-525.`,
    buildingCalloutsHeading: "Mukilteo Neighborhoods We Know Best",
    buildingCallouts: `Our residential crews serve all Mukilteo neighborhoods: Harbour Pointe (HOA move-in rules, COI required, designated windows, largest planned community in Snohomish County), Mukilteo waterfront (limited truck access near ferry terminal, advance planning required, scenic properties), Paine Field area (residential near airport, standard access, flight path awareness), Japanese Gulch (established residential, standard access, mix of home sizes), and North Mukilteo (established neighborhood, standard access, efficient moves).`,
    extraFaqs: [
      {
        q: "How do you handle HOA move-in requirements in Harbour Pointe?",
        a: "We are very familiar with Harbour Pointe's HOA move-in rules. We provide certificates of insurance, work within designated move-in windows, and coordinate directly with the HOA management office before move day. We've completed hundreds of Harbour Pointe moves.",
      },
      {
        q: "How do you handle waterfront property moves near the Mukilteo ferry terminal?",
        a: "We assess every waterfront property near the Mukilteo ferry terminal before move day. We identify the best truck parking position, the safest carry path, and any equipment we need. For very limited access, we use a smaller vehicle for the final approach.",
      },
    ],
  },

  "mukilteo-apartment": {
    intro: `Mukilteo has limited apartment inventory outside of Harbour Pointe, where multi-story buildings have HOA-enforced move-in windows and COI requirements. Our crews coordinate directly with building management and the Harbour Pointe HOA before move day to secure elevator reservations and confirm all requirements. Most Mukilteo apartment moves complete in 2–3 hours, and we provide flat-rate quotes so you know the final price before we start.`,
    buildingCalloutsHeading: "Apartment Buildings We Serve in Mukilteo",
    buildingCallouts: `Our apartment moving crews serve Mukilteo's residential buildings: Harbour Pointe multi-story buildings (HOA move-in rules, elevator reservations required, COI required, designated windows), waterfront area apartments (limited access, advance planning required, standard move-in requirements), and Paine Field area apartments (standard requirements, ample parking, efficient moves).`,
    extraFaqs: [
      {
        q: "Do Harbour Pointe apartment buildings require a certificate of insurance?",
        a: "Yes. Harbour Pointe HOA requires a COI from your moving company. We provide certificates of insurance at no charge, just send us the HOA's requirements and we'll issue the COI within 24 hours.",
      },
      {
        q: "How far in advance should I book a Mukilteo apartment move?",
        a: "We recommend booking 3–4 weeks in advance for Harbour Pointe moves due to limited HOA-approved move-in windows. We accommodate last-minute moves when availability allows.",
      },
    ],
  },

  "mukilteo-packing": {
    intro: `Mukilteo homes range from large Harbour Pointe residences to waterfront properties near the ferry terminal. Our packing crews bring all materials and are experienced with the full range of Mukilteo home types. Harbour Pointe homes tend to be large and well-furnished, making full-pack service a popular choice. Waterfront properties often contain outdoor furniture, water sports equipment, and dock accessories that require weatherproof packing. We provide flat-rate packing quotes so you know the final price before we start.`,
    buildingCalloutsHeading: "Packing Services Across Mukilteo Neighborhoods",
    buildingCallouts: `Our packing crews serve all Mukilteo neighborhoods: Harbour Pointe (large homes, extensive contents, full-pack service common, HOA coordination included), Mukilteo waterfront (outdoor furniture, water sports equipment, weatherproof packing, advance access planning), Paine Field area (residential, standard packing, efficient turnaround), Japanese Gulch (established homes, standard packing, efficient turnaround), and North Mukilteo (standard packing, efficient moves).`,
    extraFaqs: [
      {
        q: "How long does it take to pack a Harbour Pointe home?",
        a: "A typical 3-bedroom Harbour Pointe home takes 6–10 hours to pack with a 2-person crew. Larger 4–5 bedroom homes take 10–16 hours. We recommend a free walkthrough quote for larger homes so we can give you an accurate time and cost estimate.",
      },
      {
        q: "Do you pack outdoor and water sports equipment for Mukilteo waterfront moves?",
        a: "Yes. We pack kayaks, paddleboards, outdoor furniture, and water sports equipment using weatherproof wrapping and custom crating where needed.",
      },
    ],
  },

  "mukilteo-commercial": {
    intro: `Mukilteo's business community is concentrated near Paine Field, with aerospace-related businesses, professional services, and light industrial. Our commercial crews handle office and industrial moves with minimal disruption, we work after hours and on weekends. For Paine Field area businesses, we plan truck access and parking in advance. Flat-rate quotes available for all Mukilteo commercial moves.`,
    buildingCalloutsHeading: "Commercial Moving in Mukilteo's Business Areas",
    buildingCallouts: `We serve Mukilteo's major commercial areas: Paine Field corridor (aerospace and industrial businesses, standard access, flexible scheduling, after-hours available), Mukilteo waterfront commercial (marine businesses, limited access, advance planning required), and general commercial (professional services, standard access, efficient moves).`,
    extraFaqs: [
      {
        q: "Do you handle aerospace or industrial equipment moves near Paine Field?",
        a: "Yes. We handle office and light industrial moves near Paine Field. For specialized equipment, we recommend a free on-site walkthrough to plan the move sequence and identify any equipment needs.",
      },
      {
        q: "Can you move our Mukilteo office on a weekend?",
        a: "Yes. Weekend moves are our most common request for Mukilteo commercial relocations. We work Saturday and Sunday and can start as early as 6 a.m.",
      },
    ],
  },

  "mukilteo-storage": {
    intro: `Our climate-controlled storage facility in Redmond is 18 miles from Mukilteo, a 28-minute drive via I-5 and SR-525. We offer month-to-month storage with no long-term contracts, and storage is available month-to-month, contact us for current pricing. Mukilteo customers commonly use our storage for Harbour Pointe home transitions, waterfront property staging, and seasonal equipment. All items are stored in individually locked units with 24/7 security monitoring.`,
    buildingCalloutsHeading: "Storage Solutions for Mukilteo Residents and Businesses",
    buildingCallouts: `Our Redmond storage facility serves all Mukilteo neighborhoods: Harbour Pointe storage (between-home storage, staging storage, renovation storage, secure vault storage available), waterfront property storage (seasonal equipment, outdoor furniture, water sports gear, climate-controlled units), Paine Field business storage (equipment storage, document storage, month-to-month), and general household storage (month-to-month, no long-term contracts).`,
    extraFaqs: [
      {
        q: "How far is your storage facility from Mukilteo?",
        a: "Our Redmond storage facility is 18 miles from Mukilteo, about 28 minutes via I-5 and SR-525. We offer pickup and delivery from your Mukilteo home, or you can drop off and pick up directly at our facility.",
      },
      {
        q: "Can I store seasonal waterfront equipment at your Redmond facility?",
        a: "Yes. We store kayaks, paddleboards, outdoor furniture, and other seasonal equipment. Our climate-controlled units protect items from the Pacific Northwest's wet winters. Month-to-month contracts mean you can retrieve items when the season changes.",
      },
    ],
  },

  "mukilteo-senior": {
    intro: `Mukilteo has a significant senior population in its established neighborhoods, and we have extensive experience with senior moves in the area. Our senior moving crews work at a pace that's comfortable for you, we never rush, we communicate clearly, and we take extra care with items that have sentimental value. For Harbour Pointe moves, we handle all HOA coordination so you don't have to. We coordinate with family members, senior living facilities, and downsizing specialists as needed.`,
    buildingCalloutsHeading: "Senior Moving Services Across Mukilteo",
    buildingCallouts: `Our senior moving crews serve all Mukilteo neighborhoods and destinations: Harbour Pointe (HOA coordination handled, full packing available, family communication), Mukilteo waterfront (careful access planning, no rushing, family coordination), senior living facilities in and near Mukilteo (direct facility coordination, move-in window compliance, COI handling), and in-Mukilteo downsizing moves (from larger home to smaller home or apartment).`,
    extraFaqs: [
      {
        q: "Do you help with downsizing moves from large Harbour Pointe homes?",
        a: "Yes. We work with seniors and families downsizing from Harbour Pointe homes. We can pack, move, and help coordinate donation pickups. We handle all HOA coordination and move at your pace.",
      },
      {
        q: "Can you coordinate with a senior living facility near Mukilteo?",
        a: "Yes. We coordinate directly with senior living facility management to confirm move-in windows, elevator reservations, and COI requirements.",
      },
    ],
  },

  "mukilteo-furniture": {
    intro: `Mukilteo homes, especially in Harbour Pointe, often contain large, well-appointed furniture: sectional sofas, king beds, dining sets, and outdoor furniture for waterfront properties. Our furniture moving crews bring the tools for disassembly and reassembly, and use furniture pads and floor runners to protect both your furniture and your property. For waterfront properties with challenging access, we plan the carry route in advance.`,
    buildingCalloutsHeading: "Furniture Moving Across Mukilteo Neighborhoods",
    buildingCallouts: `Our furniture moving crews serve all Mukilteo neighborhoods: Harbour Pointe (large sectionals, king beds, dining sets, disassembly available, HOA coordination), Mukilteo waterfront (outdoor furniture, teak sets, patio sectionals, challenging access planning), Paine Field area (standard furniture, efficient moves), Japanese Gulch (established homes, standard furniture, efficient moves), and North Mukilteo (standard furniture, efficient moves).`,
    extraFaqs: [
      {
        q: "Do you disassemble and reassemble furniture for Mukilteo moves?",
        a: "Yes. We disassemble and reassemble bed frames, sectional sofas, dining tables, and other furniture as needed. We bring the tools and hardware bags to keep everything organized. Reassembly is included in our standard service.",
      },
      {
        q: "Can you move large outdoor furniture from a Mukilteo waterfront property?",
        a: "Yes. We regularly move large outdoor furniture from Mukilteo waterfront properties. We assess the carry path in advance and bring the right equipment for challenging access near the ferry terminal.",
      },
    ],
  },

  "mukilteo-appliance": {
    intro: `Moving appliances in Mukilteo requires the right equipment and experience. Our appliance moving crews use appliance dollies, furniture pads, and straps to protect both the appliance and your floors. For Harbour Pointe homes with HOA requirements, we work within designated move-in windows. For waterfront properties with challenging access, we plan the carry route in advance. We disconnect and reconnect standard appliance hookups as part of our service.`,
    buildingCalloutsHeading: "Appliance Moving Across Mukilteo",
    buildingCallouts: `Our appliance moving crews serve all Mukilteo neighborhoods: Harbour Pointe (HOA coordination, designated windows, standard appliances, efficient moves), Mukilteo waterfront (challenging access, outdoor appliances, advance planning), Paine Field area (standard appliances, efficient moves), Japanese Gulch (established homes, standard appliances, efficient moves), and North Mukilteo (standard appliances, efficient moves).`,
    extraFaqs: [
      {
        q: "Do you disconnect and reconnect appliances for Mukilteo moves?",
        a: "Yes. We disconnect and reconnect standard appliance hookups, water lines for refrigerators and dishwashers, electric connections for ranges. Gas disconnection requires a licensed plumber, which we can coordinate.",
      },
      {
        q: "Can you move appliances within Harbour Pointe's HOA move-in windows?",
        a: "Yes. We work within Harbour Pointe's designated move-in windows for all appliance moves. We coordinate with the HOA management office before move day to confirm timing.",
      },
    ],
  },

  "mukilteo-unpacking": {
    intro: `After a Mukilteo move, our unpacking crews can set up your new home so you're living comfortably from day one. We unpack boxes, place items in their designated rooms, and remove all packing materials. For Harbour Pointe homes, we work within HOA move-in windows. For waterfront properties, we set up outdoor living spaces and water-adjacent storage. Unpacking service is available as a standalone booking or as an add-on to any Mukilteo move.`,
    buildingCalloutsHeading: "Unpacking Services Across Mukilteo",
    buildingCallouts: `Our unpacking crews serve all Mukilteo neighborhoods and home types: Harbour Pointe (HOA window compliance, full unpacking service, room-by-room setup), Mukilteo waterfront (indoor and outdoor setup, patio furniture arrangement, water sports equipment placement), Paine Field area (standard setup, efficient unpacking), and North Mukilteo (standard setup, efficient unpacking, all materials removed).`,
    extraFaqs: [
      {
        q: "How long does unpacking take for a Harbour Pointe home?",
        a: "A typical 3-bedroom Harbour Pointe home takes 5–8 hours to unpack with a 2-person crew. Larger homes take 8–12 hours. We remove all boxes and packing materials when we're done.",
      },
      {
        q: "Can I book unpacking service separately from the move in Mukilteo?",
        a: "Yes. We offer unpacking as a standalone service. We can schedule unpacking the day after your move or whenever works best for you.",
      },
    ],
  },

  "mukilteo-warehousing": {
    intro: `Our Redmond warehouse is 18 miles from Mukilteo and offers flexible warehousing and distribution services for Snohomish County businesses. We handle receiving, storage, inventory management, and last-mile delivery. For Paine Field area businesses, our facility provides efficient access via I-5 and SR-525. Month-to-month contracts available, no long-term commitment required.`,
    buildingCalloutsHeading: "Warehousing and Distribution for Mukilteo Businesses",
    buildingCallouts: `Our warehousing services support Mukilteo businesses: Paine Field corridor (aerospace and industrial storage, equipment storage, flexible terms), waterfront commercial (marine equipment storage, seasonal inventory, month-to-month), professional services (document storage, equipment storage, month-to-month), and general business storage (month-to-month, pickup and delivery available, 18 miles via I-5/SR-525).`,
    extraFaqs: [
      {
        q: "How far is your warehouse from Mukilteo businesses?",
        a: "Our Redmond warehouse is 18 miles from Mukilteo, about 28 minutes via I-5 and SR-525. We offer pickup and delivery from your Mukilteo location.",
      },
      {
        q: "Do you offer month-to-month warehousing for Mukilteo businesses?",
        a: "Yes. All our warehousing contracts are month-to-month, no long-term commitment required. We scale storage space up or down as your needs change.",
      },
    ],
  },

// ===================================================================
// BURIEN
// ===================================================================

  "burien-residential": {
    intro: `Burien is a diverse community in South King County with a revitalized downtown, waterfront neighborhoods on Puget Sound, and easy access to Seattle-Tacoma International Airport. Our crews have been moving Burien homes since 2009 and know every neighborhood's specific logistics. Three Tree Point and Seahurst have waterfront properties with limited truck access and steep paths to the water. Downtown Burien's revitalization has brought new apartment buildings with standard elevator requirements. Our Redmond warehouse is 18 miles northeast, a 28-minute drive via I-5.`,
    buildingCalloutsHeading: "Burien Neighborhoods We Know Best",
    buildingCallouts: `Our residential crews serve all Burien neighborhoods: Downtown Burien (new apartment buildings, elevator coordination, standard move-in requirements), Three Tree Point (waterfront properties, limited truck access, steep paths, advance planning required), Seahurst (waterfront-adjacent, Puget Sound views, standard access), Gregory Heights (established residential, older homes, standard access), Boulevard Park (established neighborhood, standard access, mix of home sizes), and Sunnydale (residential, standard access, efficient moves).`,
    extraFaqs: [
      {
        q: "How do you handle waterfront property moves in Three Tree Point and Seahurst?",
        a: "We assess every Three Tree Point and Seahurst waterfront property before move day. We identify the best truck parking position, the safest carry path to the water, and any equipment we need. For very steep or narrow access, we use a smaller vehicle for the final approach.",
      },
      {
        q: "What's the best time to schedule a Burien move to avoid Sea-Tac airport traffic?",
        a: "We recommend starting before 8 a.m. or after 10 a.m. to avoid the morning rush on I-5 and SR-509. For large moves, we often start at 7 a.m. to maximize the available window before afternoon traffic builds.",
      },
    ],
  },

  "burien-apartment": {
    intro: `Burien's apartment market is growing in Downtown Burien, with new buildings that have standard elevator and move-in window requirements. Our crews coordinate directly with building management before move day to secure elevator reservations and confirm parking. Most Burien apartment moves complete in 2–3 hours, and we provide flat-rate quotes so you know the final price before we start.`,
    buildingCalloutsHeading: "Apartment Buildings We Serve in Burien",
    buildingCallouts: `Our apartment moving crews serve Burien's major complexes: Downtown Burien apartments (elevator reservations required, COI required, standard move-in windows, newer construction), Gregory Heights apartments (established buildings, standard access, efficient moves), Boulevard Park apartments (standard requirements, ample parking, efficient moves), and Sunnydale apartments (standard requirements, efficient moves).`,
    extraFaqs: [
      {
        q: "Do Downtown Burien apartment buildings require a certificate of insurance?",
        a: "Most newer Downtown Burien apartment buildings require a COI from your moving company. We provide certificates of insurance at no charge, just send us your building's requirements and we'll issue the COI within 24 hours.",
      },
      {
        q: "How far in advance should I book a Burien apartment move?",
        a: "We recommend booking 2–3 weeks in advance for Burien apartment moves. Downtown Burien buildings fill quickly on weekends and end-of-month dates.",
      },
    ],
  },

  "burien-packing": {
    intro: `Burien homes range from compact older properties in Gregory Heights to newer construction in Downtown Burien and waterfront homes in Three Tree Point. Our packing crews bring all materials and are experienced with the full range of Burien home types. For waterfront properties, we pack outdoor furniture, water sports equipment, and patio accessories. For older Gregory Heights homes with vintage contents, we use specialty wrapping. We provide flat-rate packing quotes.`,
    buildingCalloutsHeading: "Packing Services Across Burien Neighborhoods",
    buildingCallouts: `Our packing crews serve all Burien neighborhoods: Three Tree Point and Seahurst (outdoor furniture, water sports equipment, weatherproof packing, advance access planning), Gregory Heights (older homes, vintage contents, specialty wrapping available), Downtown Burien (newer construction, standard packing, efficient turnaround), Boulevard Park (established homes, standard packing, efficient turnaround), and Sunnydale (residential, standard packing, efficient moves).`,
    extraFaqs: [
      {
        q: "How long does it take to pack a Burien home?",
        a: "A typical 2-bedroom Burien home takes 4–6 hours to pack with a 2-person crew. A larger 3–4 bedroom home takes 6–10 hours. We recommend a free walkthrough quote for larger homes.",
      },
      {
        q: "Do you pack outdoor and waterfront equipment for Burien moves?",
        a: "Yes. We pack outdoor furniture, kayaks, paddleboards, and patio accessories for Burien waterfront moves using weatherproof wrapping and custom crating where needed.",
      },
    ],
  },

  "burien-commercial": {
    intro: `Burien's business community is concentrated in Downtown Burien and near Sea-Tac Airport, with retail, professional services, and hospitality businesses. Our commercial crews handle office and retail moves with minimal disruption, we work after hours and on weekends. For Downtown Burien businesses with limited truck parking, we plan access in advance. Flat-rate quotes available for all Burien commercial moves.`,
    buildingCalloutsHeading: "Commercial Moving in Burien's Business Districts",
    buildingCallouts: `We serve Burien's major commercial areas: Downtown Burien (retail and office moves, limited truck parking, after-hours available, elevator coordination), Sea-Tac Airport corridor (hospitality and service businesses, standard access, flexible scheduling), Gregory Heights commercial (established businesses, standard access, efficient moves), and Boulevard Park commercial (standard access, ample parking, efficient moves).`,
    extraFaqs: [
      {
        q: "Can you move our Burien office on a weekend?",
        a: "Yes. Weekend moves are our most common request for Burien commercial relocations. We work Saturday and Sunday and can start as early as 6 a.m.",
      },
      {
        q: "Do you handle restaurant or hospitality moves near Sea-Tac in Burien?",
        a: "Yes. We handle restaurant and hospitality moves including kitchen equipment, furniture, and fixtures. We work after hours to minimize disruption to your business.",
      },
    ],
  },

  "burien-storage": {
    intro: `Our climate-controlled storage facility in Redmond is 18 miles from Burien, a 28-minute drive via I-5. We offer month-to-month storage with no long-term contracts, and storage is available month-to-month, contact us for current pricing. Burien customers commonly use our storage for between-home transitions, home staging, and renovation projects. All items are stored in individually locked units with 24/7 security monitoring.`,
    buildingCalloutsHeading: "Storage Solutions for Burien Residents and Businesses",
    buildingCallouts: `Our Redmond storage facility serves all Burien neighborhoods: Three Tree Point and Seahurst storage (seasonal equipment, outdoor furniture, water sports gear, climate-controlled units), Downtown Burien business storage (retail inventory overflow, seasonal storage, month-to-month), residential storage (between-home storage, staging storage, renovation storage, secure vault storage available), and general household storage (month-to-month, no long-term contracts).`,
    extraFaqs: [
      {
        q: "How far is your storage facility from Burien?",
        a: "Our Redmond storage facility is 18 miles from Burien, about 28 minutes via I-5. We offer pickup and delivery from your Burien home, or you can drop off and pick up directly at our facility.",
      },
      {
        q: "Do you offer business storage for Burien retail businesses?",
        a: "Yes. We offer flexible month-to-month storage for retail inventory, seasonal overflow, and equipment. Many Burien businesses use our Redmond facility for seasonal inventory management.",
      },
    ],
  },

  "burien-senior": {
    intro: `Burien has established residential neighborhoods with a significant senior population, and we have extensive experience with senior moves in the area. Our senior moving crews work at a pace that's comfortable for you, we never rush, we communicate clearly, and we take extra care with items that have sentimental value. For waterfront property moves in Three Tree Point, we handle the challenging access so you don't have to. We coordinate with family members, senior living facilities, and downsizing specialists as needed.`,
    buildingCalloutsHeading: "Senior Moving Services Across Burien",
    buildingCallouts: `Our senior moving crews serve all Burien neighborhoods and destinations: Gregory Heights and Boulevard Park (established homes, downsizing moves, full packing available), Three Tree Point and Seahurst (careful access planning, no rushing, family coordination), senior living facilities in and near Burien (direct facility coordination, move-in window compliance, COI handling), and in-Burien downsizing moves (from larger home to smaller home or apartment).`,
    extraFaqs: [
      {
        q: "Do you help with downsizing moves from Burien homes?",
        a: "Yes. We work with seniors and families downsizing from Burien homes. We can pack, move, and help coordinate donation pickups. We move at your pace and communicate clearly throughout the process.",
      },
      {
        q: "Can you coordinate with a senior living facility near Burien?",
        a: "Yes. We coordinate directly with senior living facility management to confirm move-in windows, elevator reservations, and COI requirements.",
      },
    ],
  },

  "burien-furniture": {
    intro: `Burien homes range from compact older properties in Gregory Heights to waterfront homes in Three Tree Point with large outdoor furniture. Our furniture moving crews bring the tools for disassembly and reassembly, and use furniture pads and floor runners to protect both your furniture and your property. For waterfront properties with challenging access, we plan the carry route in advance. For older Gregory Heights homes with narrow doorways, we assess access before move day.`,
    buildingCalloutsHeading: "Furniture Moving Across Burien Neighborhoods",
    buildingCallouts: `Our furniture moving crews serve all Burien neighborhoods: Three Tree Point and Seahurst (outdoor furniture, teak sets, patio sectionals, challenging access planning), Gregory Heights (older homes, narrow doorways, careful maneuvering), Downtown Burien (newer construction, standard furniture, elevator coordination), Boulevard Park (established homes, standard furniture, efficient moves), and Sunnydale (residential, standard furniture, efficient moves).`,
    extraFaqs: [
      {
        q: "Do you disassemble and reassemble furniture for Burien moves?",
        a: "Yes. We disassemble and reassemble bed frames, sectional sofas, dining tables, and other furniture as needed. We bring the tools and hardware bags to keep everything organized.",
      },
      {
        q: "Can you move large outdoor furniture from a Burien waterfront property?",
        a: "Yes. We regularly move large outdoor furniture from Three Tree Point and Seahurst waterfront properties. We assess the carry path in advance and bring the right equipment for challenging access.",
      },
    ],
  },

  "burien-appliance": {
    intro: `Moving appliances in Burien requires the right equipment and experience. Our appliance moving crews use appliance dollies, furniture pads, and straps to protect both the appliance and your floors. For older Gregory Heights homes with narrow doorways, we assess access before move day. For Downtown Burien apartments with elevators, we coordinate timing in advance. We disconnect and reconnect standard appliance hookups as part of our service.`,
    buildingCalloutsHeading: "Appliance Moving Across Burien",
    buildingCallouts: `Our appliance moving crews serve all Burien neighborhoods: Three Tree Point and Seahurst (waterfront properties, outdoor appliances, advance planning), Gregory Heights (older homes, narrow access, careful maneuvering), Downtown Burien (elevator coordination, standard appliances, efficient moves), Boulevard Park (established homes, standard appliances, efficient moves), and Sunnydale (residential, standard appliances, efficient moves).`,
    extraFaqs: [
      {
        q: "Do you disconnect and reconnect appliances for Burien moves?",
        a: "Yes. We disconnect and reconnect standard appliance hookups, water lines for refrigerators and dishwashers, electric connections for ranges. Gas disconnection requires a licensed plumber, which we can coordinate.",
      },
      {
        q: "Can you move appliances through narrow doorways in older Burien homes?",
        a: "Yes. We're experienced with moving appliances through challenging spaces in older Gregory Heights homes. We assess doorway dimensions before move day and plan accordingly.",
      },
    ],
  },

  "burien-unpacking": {
    intro: `After a Burien move, our unpacking crews can set up your new home so you're living comfortably from day one. We unpack boxes, place items in their designated rooms, and remove all packing materials. For waterfront properties, we set up outdoor living spaces and patio furniture. We work at your pace and follow your instructions for where everything goes. Unpacking service is available as a standalone booking or as an add-on to any Burien move.`,
    buildingCalloutsHeading: "Unpacking Services Across Burien",
    buildingCallouts: `Our unpacking crews serve all Burien neighborhoods and home types: Three Tree Point and Seahurst (indoor and outdoor setup, patio furniture arrangement, water sports equipment placement), Gregory Heights (established homes, standard unpacking, room-by-room setup), Downtown Burien (newer construction, standard unpacking, all materials removed), Boulevard Park (established homes, efficient unpacking, standard setup), and Sunnydale (residential, efficient unpacking, standard setup).`,
    extraFaqs: [
      {
        q: "How long does unpacking take for a Burien home?",
        a: "A typical 2-bedroom Burien home takes 3–5 hours to unpack with a 2-person crew. A larger 3–4 bedroom home takes 5–8 hours. We remove all boxes and packing materials when we're done.",
      },
      {
        q: "Can I book unpacking service separately from the move in Burien?",
        a: "Yes. We offer unpacking as a standalone service. We can schedule unpacking the day after your move or whenever works best for you.",
      },
    ],
  },

  "burien-warehousing": {
    intro: `Our Redmond warehouse is 18 miles from Burien and offers flexible warehousing and distribution services for South King County businesses. We handle receiving, storage, inventory management, and last-mile delivery. For businesses near Sea-Tac Airport and Downtown Burien, our facility provides efficient access via I-5. Month-to-month contracts available, no long-term commitment required.`,
    buildingCalloutsHeading: "Warehousing and Distribution for Burien Businesses",
    buildingCallouts: `Our warehousing services support Burien businesses: Downtown Burien retail (inventory storage, seasonal overflow, last-mile delivery), Sea-Tac corridor businesses (hospitality supply storage, equipment storage, flexible terms), professional services (document storage, equipment storage, month-to-month), and general business storage (month-to-month, pickup and delivery available, 18 miles via I-5).`,
    extraFaqs: [
      {
        q: "How far is your warehouse from Burien?",
        a: "Our Redmond warehouse is 18 miles from Burien, about 28 minutes via I-5. We offer pickup and delivery from your Burien location.",
      },
      {
        q: "Do you offer month-to-month warehousing for Burien businesses?",
        a: "Yes. All our warehousing contracts are month-to-month, no long-term commitment required.",
      },
    ],
  },

// ===================================================================
// SNOQUALMIE
// ===================================================================

  "snoqualmie-residential": {
    intro: `Snoqualmie is a growing community at the foot of the Cascades, anchored by Snoqualmie Ridge, one of the largest master-planned communities in Washington State, with thousands of homes and strict HOA move-in rules. Our crews have been moving Snoqualmie homes since 2009 and know Snoqualmie Ridge's HOA requirements inside and out. Downtown Snoqualmie has older homes with narrow access near Snoqualmie Falls. I-90 provides the main access route from our Redmond warehouse, 17 miles northwest, a 25-minute drive.`,
    buildingCalloutsHeading: "Snoqualmie Neighborhoods We Know Best",
    buildingCallouts: `Our residential crews serve all Snoqualmie neighborhoods: Snoqualmie Ridge (HOA move-in rules, COI required, designated windows, one of the largest planned communities in WA), Downtown Snoqualmie (older homes, narrow streets, Snoqualmie Falls area, advance planning for large trucks), Grand Ridge (newer construction, standard access, large homes), Meadowbrook (established residential, standard access, efficient moves), and Snoqualmie Valley rural properties (challenging access, advance planning required, right-size truck selection).`,
    extraFaqs: [
      {
        q: "How do you handle HOA move-in requirements in Snoqualmie Ridge?",
        a: "We are very familiar with Snoqualmie Ridge's HOA move-in rules. We provide certificates of insurance, work within designated move-in windows, and coordinate directly with the HOA management office before move day. We've completed hundreds of Snoqualmie Ridge moves.",
      },
      {
        q: "Do you move homes in Downtown Snoqualmie near Snoqualmie Falls?",
        a: "Yes. We regularly move homes in historic Downtown Snoqualmie. We use smaller trucks for narrow streets and plan access in advance. The area near Snoqualmie Falls has limited truck parking, we assess each property before move day.",
      },
    ],
  },

  "snoqualmie-apartment": {
    intro: `Snoqualmie has limited apartment inventory, with most residential moves in Snoqualmie Ridge's single-family homes. Snoqualmie Ridge multi-story buildings have HOA-enforced move-in windows and COI requirements. Our crews coordinate directly with building management and the HOA before move day. Most Snoqualmie apartment moves complete in 2–3 hours, and we provide flat-rate quotes so you know the final price before we start.`,
    buildingCalloutsHeading: "Apartment Buildings We Serve in Snoqualmie",
    buildingCallouts: `Our apartment moving crews serve Snoqualmie's residential buildings: Snoqualmie Ridge townhomes and condos (HOA move-in rules, COI required, designated windows, elevator coordination where applicable), Downtown Snoqualmie apartments (standard requirements, narrow street access, advance planning), and Grand Ridge condos (standard requirements, ample parking, efficient moves).`,
    extraFaqs: [
      {
        q: "Do Snoqualmie Ridge condos require a certificate of insurance?",
        a: "Yes. Snoqualmie Ridge HOA requires a COI from your moving company. We provide certificates of insurance at no charge, just send us the HOA's requirements and we'll issue the COI within 24 hours.",
      },
      {
        q: "How far in advance should I book a Snoqualmie apartment move?",
        a: "We recommend booking 3–4 weeks in advance for Snoqualmie Ridge moves due to limited HOA-approved move-in windows. We accommodate last-minute moves when availability allows.",
      },
    ],
  },

  "snoqualmie-packing": {
    intro: `Snoqualmie Ridge homes are large and well-appointed, full-pack service is a popular choice for families moving in or out of the Ridge. Our packing crews bring all materials and are experienced with large Snoqualmie Ridge homes. For Downtown Snoqualmie homes with vintage contents, we use specialty wrapping for fragile items. We provide flat-rate packing quotes and recommend a walkthrough for larger homes so we can give you an accurate estimate.`,
    buildingCalloutsHeading: "Packing Services Across Snoqualmie Neighborhoods",
    buildingCallouts: `Our packing crews serve all Snoqualmie neighborhoods: Snoqualmie Ridge (large homes, extensive contents, full-pack service common, HOA coordination included), Downtown Snoqualmie (older homes, vintage contents, specialty wrapping available), Grand Ridge (newer construction, large kitchens, full-pack available), Meadowbrook (established homes, standard packing, efficient turnaround), and Snoqualmie Valley rural (standard packing, advance access planning).`,
    extraFaqs: [
      {
        q: "How long does it take to pack a Snoqualmie Ridge home?",
        a: "A typical 3-bedroom Snoqualmie Ridge home takes 6–10 hours to pack with a 2-person crew. Larger 4–5 bedroom homes take 10–16 hours. We recommend a free walkthrough quote for larger homes.",
      },
      {
        q: "Do you bring packing materials for Snoqualmie moves?",
        a: "Yes. We bring all packing materials, boxes, tape, bubble wrap, packing paper, and specialty materials for fragile items. All materials are included in our flat-rate packing quotes.",
      },
    ],
  },

  "snoqualmie-commercial": {
    intro: `Snoqualmie has limited commercial development, with small businesses concentrated near Snoqualmie Ridge's commercial areas and Downtown Snoqualmie. Our commercial crews handle small office and retail moves with minimal disruption. For Downtown Snoqualmie businesses with narrow street access, we plan truck access in advance. Flat-rate quotes available for all Snoqualmie commercial moves.`,
    buildingCalloutsHeading: "Commercial Moving in Snoqualmie",
    buildingCallouts: `We serve Snoqualmie's commercial areas: Snoqualmie Ridge commercial (retail and professional services, standard access, flexible scheduling), Downtown Snoqualmie (small businesses, narrow street access, advance planning required), and Snoqualmie Valley commercial (standard access, ample parking, efficient moves).`,
    extraFaqs: [
      {
        q: "Can you move our Snoqualmie office on a weekend?",
        a: "Yes. Weekend moves are our most common request for Snoqualmie commercial relocations. We work Saturday and Sunday and can start as early as 6 a.m.",
      },
      {
        q: "Do you handle moves for businesses in Downtown Snoqualmie?",
        a: "Yes. We regularly move businesses in historic Downtown Snoqualmie. We use smaller trucks for narrow streets and plan access in advance.",
      },
    ],
  },

  "snoqualmie-storage": {
    intro: `Our climate-controlled storage facility in Redmond is 17 miles from Snoqualmie, a 25-minute drive via I-90. We offer month-to-month storage with no long-term contracts, and storage is available month-to-month, contact us for current pricing. Snoqualmie customers commonly use our storage for Snoqualmie Ridge home transitions, renovation projects, and between-home storage during real estate transactions. All items are stored in individually locked units with 24/7 security monitoring.`,
    buildingCalloutsHeading: "Storage Solutions for Snoqualmie Residents and Businesses",
    buildingCallouts: `Our Redmond storage facility serves all Snoqualmie neighborhoods: Snoqualmie Ridge storage (between-home storage, staging storage, renovation storage, secure vault storage available), Downtown Snoqualmie storage (household goods, vintage items, general storage), Grand Ridge storage (between-home storage, staging, general household), and general business storage (month-to-month, pickup and delivery available, 17 miles via I-90).`,
    extraFaqs: [
      {
        q: "How far is your storage facility from Snoqualmie?",
        a: "Our Redmond storage facility is 17 miles from Snoqualmie, about 25 minutes via I-90. We offer pickup and delivery from your Snoqualmie home, or you can drop off and pick up directly at our facility.",
      },
      {
        q: "Do you offer month-to-month storage for Snoqualmie residents?",
        a: "Yes. All our storage contracts are month-to-month, no long-term commitment required. Storage is available month-to-month, contact us for current pricing.",
      },
    ],
  },

  "snoqualmie-senior": {
    intro: `Snoqualmie Ridge has a growing senior population, and we have extensive experience with senior moves in the community. Our senior moving crews work at a pace that's comfortable for you, we never rush, we communicate clearly, and we take extra care with items that have sentimental value. For Snoqualmie Ridge moves, we handle all HOA coordination so you don't have to. We coordinate with family members, senior living facilities, and downsizing specialists as needed.`,
    buildingCalloutsHeading: "Senior Moving Services Across Snoqualmie",
    buildingCallouts: `Our senior moving crews serve all Snoqualmie neighborhoods and destinations: Snoqualmie Ridge (HOA coordination handled, full packing available, family communication), Downtown Snoqualmie (careful access planning, no rushing, family coordination), senior living facilities in and near Snoqualmie (direct facility coordination, move-in window compliance), and in-Snoqualmie downsizing moves (from larger Ridge home to smaller home or apartment).`,
    extraFaqs: [
      {
        q: "Do you help with downsizing moves from large Snoqualmie Ridge homes?",
        a: "Yes. We work with seniors and families downsizing from Snoqualmie Ridge homes. We can pack, move, and help coordinate donation pickups. We handle all HOA coordination and move at your pace.",
      },
      {
        q: "Can you coordinate with a senior living facility near Snoqualmie?",
        a: "Yes. We coordinate directly with senior living facility management to confirm move-in windows, elevator reservations, and COI requirements.",
      },
    ],
  },

  "snoqualmie-furniture": {
    intro: `Snoqualmie Ridge homes are large and well-furnished, sectional sofas, king beds, dining sets, and home office furniture are common. Our furniture moving crews bring the tools for disassembly and reassembly, and use furniture pads and floor runners to protect both your furniture and your property. For Downtown Snoqualmie homes with narrow doorways, we assess access before move day. HOA coordination for Snoqualmie Ridge is included in our service.`,
    buildingCalloutsHeading: "Furniture Moving Across Snoqualmie Neighborhoods",
    buildingCallouts: `Our furniture moving crews serve all Snoqualmie neighborhoods: Snoqualmie Ridge (large sectionals, king beds, dining sets, disassembly available, HOA coordination), Downtown Snoqualmie (older homes, narrow doorways, careful maneuvering), Grand Ridge (newer construction, oversized pieces, standard access), Meadowbrook (established homes, standard furniture, efficient moves), and Snoqualmie Valley rural (standard furniture, advance access planning).`,
    extraFaqs: [
      {
        q: "Do you disassemble and reassemble furniture for Snoqualmie Ridge moves?",
        a: "Yes. We disassemble and reassemble bed frames, sectional sofas, dining tables, and other furniture as needed. We bring the tools and hardware bags to keep everything organized.",
      },
      {
        q: "Can you move large furniture through narrow doorways in Downtown Snoqualmie homes?",
        a: "Yes. We're experienced with maneuvering large furniture through challenging spaces in older Downtown Snoqualmie homes. We assess access before move day and plan accordingly.",
      },
    ],
  },

  "snoqualmie-appliance": {
    intro: `Moving appliances in Snoqualmie requires the right equipment and experience. Our appliance moving crews use appliance dollies, furniture pads, and straps to protect both the appliance and your floors. For Snoqualmie Ridge homes with HOA requirements, we work within designated move-in windows. For Downtown Snoqualmie homes with narrow access, we assess before move day. We disconnect and reconnect standard appliance hookups as part of our service.`,
    buildingCalloutsHeading: "Appliance Moving Across Snoqualmie",
    buildingCallouts: `Our appliance moving crews serve all Snoqualmie neighborhoods: Snoqualmie Ridge (HOA coordination, designated windows, standard appliances, efficient moves), Downtown Snoqualmie (narrow access, careful maneuvering, standard appliances), Grand Ridge (newer construction, large appliances, standard access), Meadowbrook (established homes, standard appliances, efficient moves), and Snoqualmie Valley rural (advance access planning, right-size truck selection).`,
    extraFaqs: [
      {
        q: "Do you disconnect and reconnect appliances for Snoqualmie moves?",
        a: "Yes. We disconnect and reconnect standard appliance hookups, water lines for refrigerators and dishwashers, electric connections for ranges.",
      },
      {
        q: "Can you move appliances within Snoqualmie Ridge's HOA move-in windows?",
        a: "Yes. We work within Snoqualmie Ridge's designated move-in windows for all appliance moves. We coordinate with the HOA management office before move day to confirm timing.",
      },
    ],
  },

  "snoqualmie-unpacking": {
    intro: `After a Snoqualmie move, our unpacking crews can set up your new home so you're living comfortably from day one. We unpack boxes, place items in their designated rooms, and remove all packing materials. For Snoqualmie Ridge homes, we work within HOA move-in windows. We work at your pace and follow your instructions for where everything goes. Unpacking service is available as a standalone booking or as an add-on to any Snoqualmie move.`,
    buildingCalloutsHeading: "Unpacking Services Across Snoqualmie",
    buildingCallouts: `Our unpacking crews serve all Snoqualmie neighborhoods and home types: Snoqualmie Ridge (HOA window compliance, full unpacking service, room-by-room setup), Downtown Snoqualmie (careful handling, standard unpacking, all materials removed), Grand Ridge (newer construction, full unpacking service, efficient setup), and Meadowbrook (established homes, standard unpacking, efficient setup).`,
    extraFaqs: [
      {
        q: "How long does unpacking take for a Snoqualmie Ridge home?",
        a: "A typical 3-bedroom Snoqualmie Ridge home takes 5–8 hours to unpack with a 2-person crew. Larger homes take 8–12 hours. We remove all boxes and packing materials when we're done.",
      },
      {
        q: "Can I book unpacking service separately from the move in Snoqualmie?",
        a: "Yes. We offer unpacking as a standalone service. We can schedule unpacking the day after your move or whenever works best for you.",
      },
    ],
  },

  "snoqualmie-warehousing": {
    intro: `Our Redmond warehouse is 17 miles from Snoqualmie and offers flexible warehousing and distribution services for Snoqualmie Valley businesses. We handle receiving, storage, inventory management, and last-mile delivery. For Snoqualmie Ridge commercial businesses, our facility provides efficient access via I-90. Month-to-month contracts available, no long-term commitment required.`,
    buildingCalloutsHeading: "Warehousing and Distribution for Snoqualmie Businesses",
    buildingCallouts: `Our warehousing services support Snoqualmie businesses: Snoqualmie Ridge commercial (retail inventory storage, seasonal overflow, last-mile delivery), Downtown Snoqualmie (small business storage, document storage, month-to-month), professional services (equipment storage, general storage, flexible terms), and general business storage (month-to-month, pickup and delivery available, 17 miles via I-90).`,
    extraFaqs: [
      {
        q: "How far is your warehouse from Snoqualmie?",
        a: "Our Redmond warehouse is 17 miles from Snoqualmie, about 25 minutes via I-90. We offer pickup and delivery from your Snoqualmie location.",
      },
      {
        q: "Do you offer month-to-month warehousing for Snoqualmie businesses?",
        a: "Yes. All our warehousing contracts are month-to-month, no long-term commitment required.",
      },
    ],
  },

// ===================================================================
// NORTH BEND
// ===================================================================

  "north-bend-residential": {
    intro: `North Bend is a gateway community to the Cascade Mountains, known for its outdoor recreation, Twin Peaks filming locations, and a mix of rural and suburban residential neighborhoods. Our crews have been moving North Bend homes since 2009 and know the specific challenges of this area. I-90 provides the main access route from our Redmond warehouse, 18 miles west, a 28-minute drive. Some North Bend properties are on rural roads with challenging access for large trucks, and we assess every property before move day.`,
    buildingCalloutsHeading: "North Bend Neighborhoods We Know Best",
    buildingCallouts: `Our residential crews serve all North Bend neighborhoods: North Bend Way (downtown area, older homes, limited truck parking, advance planning), Edgewick (residential, standard access, mix of home sizes), Tanner (established neighborhood, standard access, efficient moves), Rattlesnake Ridge area (rural-adjacent, some challenging access, advance planning), Cedar Falls (rural residential, unpaved roads possible, right-size truck selection), and new North Bend development (newer construction, standard access, larger homes).`,
    extraFaqs: [
      {
        q: "How do you handle moves on rural roads in North Bend?",
        a: "We regularly move on rural roads in the North Bend area. We assess access points in advance and use the right size truck for each property, sometimes a smaller truck is needed for the final approach on narrow or unpaved roads.",
      },
      {
        q: "Do you move homes in North Bend during winter near Snoqualmie Pass?",
        a: "Yes. We move year-round in North Bend. For winter moves, we monitor I-90 road conditions and may adjust scheduling if Snoqualmie Pass is affected by snow or ice. We communicate any changes proactively.",
      },
    ],
  },

  "north-bend-apartment": {
    intro: `North Bend has limited apartment inventory, with most residential moves in single-family homes. Our crews handle the full range of North Bend residential moves, from compact downtown apartments to larger homes in Edgewick and Tanner. Most North Bend apartment moves complete in 2–3 hours, and we provide flat-rate quotes so you know the final price before we start.`,
    buildingCalloutsHeading: "Apartment Buildings We Serve in North Bend",
    buildingCallouts: `Our apartment moving crews serve North Bend's residential buildings: North Bend Way apartments (standard requirements, limited truck parking, advance planning), Edgewick area apartments (standard access, efficient moves, ample parking), and Tanner area apartments (standard requirements, efficient moves).`,
    extraFaqs: [
      {
        q: "How far in advance should I book a North Bend apartment move?",
        a: "We recommend booking 2–3 weeks in advance for North Bend apartment moves. We accommodate last-minute moves when availability allows.",
      },
      {
        q: "Do North Bend apartment buildings require a certificate of insurance?",
        a: "Most North Bend apartment buildings do not require a COI, but some newer buildings do. We provide certificates of insurance at no charge if needed.",
      },
    ],
  },

  "north-bend-packing": {
    intro: `North Bend homes range from compact older properties near downtown to newer construction in the surrounding valleys. Our packing crews bring all materials and are experienced with the full range of North Bend home types. For rural properties with outdoor equipment, we use weatherproof packing. For older downtown homes with vintage contents, we use specialty wrapping. We provide flat-rate packing quotes so you know the final price before we start.`,
    buildingCalloutsHeading: "Packing Services Across North Bend Neighborhoods",
    buildingCallouts: `Our packing crews serve all North Bend neighborhoods: North Bend Way (older homes, vintage contents, specialty wrapping available), Edgewick (established homes, standard packing, efficient turnaround), Tanner (established homes, standard packing, efficient moves), Rattlesnake Ridge area (rural properties, outdoor equipment, weatherproof packing), and Cedar Falls (rural residential, outdoor equipment, standard packing).`,
    extraFaqs: [
      {
        q: "How long does it take to pack a North Bend home?",
        a: "A typical 2-bedroom North Bend home takes 4–6 hours to pack with a 2-person crew. A larger 3–4 bedroom home takes 6–10 hours. We recommend a free walkthrough quote for larger homes.",
      },
      {
        q: "Do you pack outdoor and recreational equipment for North Bend moves?",
        a: "Yes. North Bend residents often have extensive outdoor gear, skis, snowboards, camping equipment, and mountain bikes. We pack and wrap all outdoor equipment using weatherproof materials.",
      },
    ],
  },

  "north-bend-commercial": {
    intro: `North Bend has limited commercial development, with small businesses concentrated near North Bend Way and the Premium Outlets. Our commercial crews handle small office and retail moves with minimal disruption. For downtown North Bend businesses with limited truck parking, we plan access in advance. Flat-rate quotes available for all North Bend commercial moves.`,
    buildingCalloutsHeading: "Commercial Moving in North Bend",
    buildingCallouts: `We serve North Bend's commercial areas: North Bend Way (small businesses, limited truck parking, advance planning required), North Bend Premium Outlets area (retail moves, standard access, flexible scheduling), and Edgewick commercial (standard access, ample parking, efficient moves).`,
    extraFaqs: [
      {
        q: "Can you move our North Bend business on a weekend?",
        a: "Yes. Weekend moves are our most common request for North Bend commercial relocations. We work Saturday and Sunday and can start as early as 6 a.m.",
      },
      {
        q: "Do you handle retail moves near North Bend Premium Outlets?",
        a: "Yes. We handle retail moves in the North Bend Premium Outlets area. We coordinate with outlet management for access and plan truck parking in advance.",
      },
    ],
  },

  "north-bend-storage": {
    intro: `Our climate-controlled storage facility in Redmond is 18 miles from North Bend, a 28-minute drive via I-90. We offer month-to-month storage with no long-term contracts, and storage is available month-to-month, contact us for current pricing. North Bend customers commonly use our storage for between-home transitions, seasonal outdoor equipment, and renovation projects. All items are stored in individually locked units with 24/7 security monitoring.`,
    buildingCalloutsHeading: "Storage Solutions for North Bend Residents and Businesses",
    buildingCallouts: `Our Redmond storage facility serves all North Bend neighborhoods: residential storage (between-home storage, staging storage, renovation storage, secure vault storage available), outdoor equipment storage (skis, snowboards, camping gear, mountain bikes, climate-controlled units), rural property storage (seasonal equipment, farm equipment, flexible terms), and general business storage (month-to-month, pickup and delivery available, 18 miles via I-90).`,
    extraFaqs: [
      {
        q: "How far is your storage facility from North Bend?",
        a: "Our Redmond storage facility is 18 miles from North Bend, about 28 minutes via I-90. We offer pickup and delivery from your North Bend home, or you can drop off and pick up directly at our facility.",
      },
      {
        q: "Can I store seasonal outdoor equipment from a North Bend home?",
        a: "Yes. We store skis, snowboards, camping equipment, mountain bikes, and other seasonal gear. Our climate-controlled units protect items from the Pacific Northwest's wet winters.",
      },
    ],
  },

  "north-bend-senior": {
    intro: `North Bend has established residential neighborhoods with a senior population, and we have experience with senior moves in the area. Our senior moving crews work at a pace that's comfortable for you, we never rush, we communicate clearly, and we take extra care with items that have sentimental value. For rural properties with challenging access, we handle the logistics so you don't have to. We coordinate with family members, senior living facilities, and downsizing specialists as needed.`,
    buildingCalloutsHeading: "Senior Moving Services Across North Bend",
    buildingCallouts: `Our senior moving crews serve all North Bend neighborhoods and destinations: North Bend Way (careful access planning, no rushing, family coordination), Edgewick and Tanner (established homes, downsizing moves, full packing available), senior living facilities near North Bend (direct facility coordination, move-in window compliance), and in-North Bend downsizing moves (from larger home to smaller home or apartment).`,
    extraFaqs: [
      {
        q: "Do you help with downsizing moves from North Bend homes?",
        a: "Yes. We work with seniors and families downsizing from North Bend homes. We can pack, move, and help coordinate donation pickups. We move at your pace and communicate clearly throughout the process.",
      },
      {
        q: "Can you coordinate with a senior living facility near North Bend?",
        a: "Yes. We coordinate directly with senior living facility management to confirm move-in windows, elevator reservations, and COI requirements.",
      },
    ],
  },

  "north-bend-furniture": {
    intro: `North Bend homes range from compact older properties near downtown to larger homes in Edgewick and Tanner. Our furniture moving crews bring the tools for disassembly and reassembly, and use furniture pads and floor runners to protect both your furniture and your property. For rural properties with challenging access, we plan the carry route in advance. For older downtown homes with narrow doorways, we assess access before move day.`,
    buildingCalloutsHeading: "Furniture Moving Across North Bend Neighborhoods",
    buildingCallouts: `Our furniture moving crews serve all North Bend neighborhoods: North Bend Way (older homes, narrow doorways, careful maneuvering), Edgewick (established homes, standard furniture, efficient moves), Tanner (established homes, standard furniture, efficient moves), Rattlesnake Ridge area (rural properties, advance access planning), and Cedar Falls (rural residential, right-size truck selection, advance planning).`,
    extraFaqs: [
      {
        q: "Do you disassemble and reassemble furniture for North Bend moves?",
        a: "Yes. We disassemble and reassemble bed frames, sectional sofas, dining tables, and other furniture as needed. We bring the tools and hardware bags to keep everything organized.",
      },
      {
        q: "Can you move large furniture to rural properties in North Bend?",
        a: "Yes. We regularly move large furniture to rural North Bend properties. We assess access in advance and use the right size truck, sometimes a smaller vehicle for the final approach on narrow roads.",
      },
    ],
  },

  "north-bend-appliance": {
    intro: `Moving appliances in North Bend requires the right equipment and experience. Our appliance moving crews use appliance dollies, furniture pads, and straps to protect both the appliance and your floors. For rural properties with challenging access, we plan the carry route in advance. For older downtown homes with narrow doorways, we assess before move day. We disconnect and reconnect standard appliance hookups as part of our service.`,
    buildingCalloutsHeading: "Appliance Moving Across North Bend",
    buildingCallouts: `Our appliance moving crews serve all North Bend neighborhoods: North Bend Way (older homes, narrow access, careful maneuvering), Edgewick (established homes, standard appliances, efficient moves), Tanner (standard appliances, efficient moves), Rattlesnake Ridge area (rural properties, advance access planning), and Cedar Falls (rural residential, right-size truck selection).`,
    extraFaqs: [
      {
        q: "Do you disconnect and reconnect appliances for North Bend moves?",
        a: "Yes. We disconnect and reconnect standard appliance hookups, water lines for refrigerators and dishwashers, electric connections for ranges.",
      },
      {
        q: "Can you move appliances to rural properties in North Bend?",
        a: "Yes. We regularly deliver appliances to rural North Bend properties. We assess access in advance and use the right size truck for each property.",
      },
    ],
  },

  "north-bend-unpacking": {
    intro: `After a North Bend move, our unpacking crews can set up your new home so you're living comfortably from day one. We unpack boxes, place items in their designated rooms, and remove all packing materials. We work at your pace and follow your instructions for where everything goes. Unpacking service is available as a standalone booking or as an add-on to any North Bend move.`,
    buildingCalloutsHeading: "Unpacking Services Across North Bend",
    buildingCallouts: `Our unpacking crews serve all North Bend neighborhoods and home types: North Bend Way (older homes, careful handling, standard unpacking), Edgewick and Tanner (established homes, standard unpacking, room-by-room setup), Rattlesnake Ridge area (rural properties, standard unpacking, all materials removed), and Cedar Falls (rural residential, efficient unpacking, standard setup).`,
    extraFaqs: [
      {
        q: "How long does unpacking take for a North Bend home?",
        a: "A typical 2-bedroom North Bend home takes 3–5 hours to unpack with a 2-person crew. A larger 3–4 bedroom home takes 5–8 hours. We remove all boxes and packing materials when we're done.",
      },
      {
        q: "Can I book unpacking service separately from the move in North Bend?",
        a: "Yes. We offer unpacking as a standalone service. We can schedule unpacking the day after your move or whenever works best for you.",
      },
    ],
  },

  "north-bend-warehousing": {
    intro: `Our Redmond warehouse is 18 miles from North Bend and offers flexible warehousing and distribution services for Snoqualmie Valley businesses. We handle receiving, storage, inventory management, and last-mile delivery. For North Bend businesses along I-90, our facility provides efficient access. Month-to-month contracts available, no long-term commitment required.`,
    buildingCalloutsHeading: "Warehousing and Distribution for North Bend Businesses",
    buildingCallouts: `Our warehousing services support North Bend businesses: North Bend Way retail (inventory storage, seasonal overflow, last-minute delivery), outdoor recreation businesses (seasonal equipment storage, flexible terms), professional services (document storage, equipment storage, month-to-month), and general business storage (month-to-month, pickup and delivery available, 18 miles via I-90).`,
    extraFaqs: [
      {
        q: "How far is your warehouse from North Bend?",
        a: "Our Redmond warehouse is 18 miles from North Bend, about 28 minutes via I-90. We offer pickup and delivery from your North Bend location.",
      },
      {
        q: "Do you offer month-to-month warehousing for North Bend businesses?",
        a: "Yes. All our warehousing contracts are month-to-month, no long-term commitment required.",
      },
    ],
  },

// ===================================================================
// DUVALL
// ===================================================================

  "duvall-residential": {
    intro: `Duvall is a small, charming community in the Snoqualmie Valley, known for its historic downtown, rural character, and proximity to the Cascade foothills. Our crews have been moving Duvall homes since 2009 and know the specific challenges of this area. The Woodinville-Duvall Road is the main access route from our Redmond warehouse, 17 miles southwest, a 28-minute drive. Some Duvall properties are on rural roads with challenging access for large trucks, and we assess every property before move day.`,
    buildingCalloutsHeading: "Duvall Neighborhoods We Know Best",
    buildingCallouts: `Our residential crews serve all Duvall neighborhoods: Downtown Duvall (historic homes, narrow streets, limited truck parking, advance planning required), Cherry Valley (newer construction, standard access, large homes), Big Rock (established residential, standard access, mix of home sizes), Novelty Hill adjacent (newer development, standard access, larger homes), and Duvall rural properties (challenging access, rural roads, right-size truck selection, advance planning).`,
    extraFaqs: [
      {
        q: "How do you handle moves on rural roads in Duvall?",
        a: "We regularly move on rural roads in the Duvall area. We assess access points in advance and use the right size truck for each property, sometimes a smaller truck is needed for the final approach on narrow or unpaved roads.",
      },
      {
        q: "Do you move homes in historic Downtown Duvall?",
        a: "Yes. We regularly move homes in historic Downtown Duvall. We use smaller trucks for narrow streets and plan access in advance. Downtown Duvall has limited truck parking, we assess each property before move day.",
      },
    ],
  },

  "duvall-apartment": {
    intro: `Duvall has limited apartment inventory, with most residential moves in single-family homes. Our crews handle the full range of Duvall residential moves, from compact downtown apartments to larger homes in Cherry Valley and Big Rock. Most Duvall apartment moves complete in 2–3 hours, and we provide flat-rate quotes so you know the final price before we start.`,
    buildingCalloutsHeading: "Apartment Buildings We Serve in Duvall",
    buildingCallouts: `Our apartment moving crews serve Duvall's residential buildings: Downtown Duvall apartments (standard requirements, narrow street access, advance planning), Cherry Valley area apartments (standard access, efficient moves, ample parking), and Big Rock area apartments (standard requirements, efficient moves).`,
    extraFaqs: [
      {
        q: "How far in advance should I book a Duvall apartment move?",
        a: "We recommend booking 2–3 weeks in advance for Duvall apartment moves. We accommodate last-minute moves when availability allows.",
      },
      {
        q: "Do Duvall apartment buildings require a certificate of insurance?",
        a: "Most Duvall apartment buildings do not require a COI, but some newer buildings do. We provide certificates of insurance at no charge if needed.",
      },
    ],
  },

  "duvall-packing": {
    intro: `Duvall homes range from compact older properties in historic downtown to newer construction in Cherry Valley and Big Rock. Our packing crews bring all materials and are experienced with the full range of Duvall home types. For rural properties with outdoor equipment, we use weatherproof packing. For older downtown homes with vintage contents, we use specialty wrapping. We provide flat-rate packing quotes so you know the final price before we start.`,
    buildingCalloutsHeading: "Packing Services Across Duvall Neighborhoods",
    buildingCallouts: `Our packing crews serve all Duvall neighborhoods: Downtown Duvall (older homes, vintage contents, specialty wrapping available), Cherry Valley (newer construction, large kitchens, full-pack service common), Big Rock (established homes, standard packing, efficient turnaround), Novelty Hill adjacent (newer development, standard packing, efficient moves), and Duvall rural (outdoor equipment, weatherproof packing, advance access planning).`,
    extraFaqs: [
      {
        q: "How long does it take to pack a Duvall home?",
        a: "A typical 2-bedroom Duvall home takes 4–6 hours to pack with a 2-person crew. A larger Cherry Valley or Big Rock home with 3–4 bedrooms takes 6–10 hours. We recommend a free walkthrough quote for larger homes.",
      },
      {
        q: "Do you pack outdoor and rural property equipment for Duvall moves?",
        a: "Yes. Duvall residents often have extensive outdoor gear and rural property equipment. We pack and wrap all items using weatherproof materials and custom crating where needed.",
      },
    ],
  },

  "duvall-commercial": {
    intro: `Duvall has limited commercial development, with small businesses concentrated in historic Downtown Duvall. Our commercial crews handle small office and retail moves with minimal disruption. For downtown Duvall businesses with narrow street access, we plan truck access in advance. Flat-rate quotes available for all Duvall commercial moves.`,
    buildingCalloutsHeading: "Commercial Moving in Duvall",
    buildingCallouts: `We serve Duvall's commercial areas: Downtown Duvall (small businesses, narrow street access, advance planning required, after-hours available), Cherry Valley commercial (standard access, ample parking, efficient moves), and Big Rock area commercial (standard access, efficient moves).`,
    extraFaqs: [
      {
        q: "Can you move our Duvall business on a weekend?",
        a: "Yes. Weekend moves are our most common request for Duvall commercial relocations. We work Saturday and Sunday and can start as early as 6 a.m.",
      },
      {
        q: "Do you handle moves for businesses in historic Downtown Duvall?",
        a: "Yes. We regularly move businesses in historic Downtown Duvall. We use smaller trucks for narrow streets and plan access in advance.",
      },
    ],
  },

  "duvall-storage": {
    intro: `Our climate-controlled storage facility in Redmond is 17 miles from Duvall, a 28-minute drive via the Woodinville-Duvall Road. We offer month-to-month storage with no long-term contracts, and storage is available month-to-month, contact us for current pricing. Duvall customers commonly use our storage for between-home transitions, rural property equipment, and renovation projects. All items are stored in individually locked units with 24/7 security monitoring.`,
    buildingCalloutsHeading: "Storage Solutions for Duvall Residents and Businesses",
    buildingCallouts: `Our Redmond storage facility serves all Duvall neighborhoods: residential storage (between-home storage, staging storage, renovation storage, secure vault storage available), rural property storage (outdoor equipment, farm equipment, seasonal items, climate-controlled units), Downtown Duvall business storage (small business storage, document storage, month-to-month), and general household storage (month-to-month, no long-term contracts).`,
    extraFaqs: [
      {
        q: "How far is your storage facility from Duvall?",
        a: "Our Redmond storage facility is 17 miles from Duvall, about 28 minutes via the Woodinville-Duvall Road. We offer pickup and delivery from your Duvall home, or you can drop off and pick up directly at our facility.",
      },
      {
        q: "Do you offer month-to-month storage for Duvall residents?",
        a: "Yes. All our storage contracts are month-to-month, no long-term commitment required. Storage is available month-to-month, contact us for current pricing.",
      },
    ],
  },

  "duvall-senior": {
    intro: `Duvall has established residential neighborhoods with a senior population, and we have experience with senior moves in the area. Our senior moving crews work at a pace that's comfortable for you, we never rush, we communicate clearly, and we take extra care with items that have sentimental value. For rural properties with challenging access, we handle the logistics so you don't have to. We coordinate with family members, senior living facilities, and downsizing specialists as needed.`,
    buildingCalloutsHeading: "Senior Moving Services Across Duvall",
    buildingCallouts: `Our senior moving crews serve all Duvall neighborhoods and destinations: Downtown Duvall (careful access planning, no rushing, family coordination), Cherry Valley and Big Rock (established homes, downsizing moves, full packing available), senior living facilities near Duvall (direct facility coordination, move-in window compliance), and in-Duvall downsizing moves (from larger home to smaller home or apartment).`,
    extraFaqs: [
      {
        q: "Do you help with downsizing moves from Duvall homes?",
        a: "Yes. We work with seniors and families downsizing from Duvall homes. We can pack, move, and help coordinate donation pickups. We move at your pace and communicate clearly throughout the process.",
      },
      {
        q: "Can you coordinate with a senior living facility near Duvall?",
        a: "Yes. We coordinate directly with senior living facility management to confirm move-in windows, elevator reservations, and COI requirements.",
      },
    ],
  },

  "duvall-furniture": {
    intro: `Duvall homes range from compact older properties in historic downtown to newer construction in Cherry Valley and Big Rock. Our furniture moving crews bring the tools for disassembly and reassembly, and use furniture pads and floor runners to protect both your furniture and your property. For rural properties with challenging access, we plan the carry route in advance. For older downtown homes with narrow doorways, we assess access before move day.`,
    buildingCalloutsHeading: "Furniture Moving Across Duvall Neighborhoods",
    buildingCallouts: `Our furniture moving crews serve all Duvall neighborhoods: Downtown Duvall (older homes, narrow doorways, careful maneuvering), Cherry Valley (newer construction, oversized pieces, disassembly available), Big Rock (established homes, standard furniture, efficient moves), Novelty Hill adjacent (newer development, standard furniture, efficient moves), and Duvall rural (advance access planning, right-size truck selection).`,
    extraFaqs: [
      {
        q: "Do you disassemble and reassemble furniture for Duvall moves?",
        a: "Yes. We disassemble and reassemble bed frames, sectional sofas, dining tables, and other furniture as needed. We bring the tools and hardware bags to keep everything organized.",
      },
      {
        q: "Can you move large furniture to rural properties in Duvall?",
        a: "Yes. We regularly move large furniture to rural Duvall properties. We assess access in advance and use the right size truck, sometimes a smaller vehicle for the final approach on narrow roads.",
      },
    ],
  },

  "duvall-appliance": {
    intro: `Moving appliances in Duvall requires the right equipment and experience. Our appliance moving crews use appliance dollies, furniture pads, and straps to protect both the appliance and your floors. For rural properties with challenging access, we plan the carry route in advance. For older downtown homes with narrow doorways, we assess before move day. We disconnect and reconnect standard appliance hookups as part of our service.`,
    buildingCalloutsHeading: "Appliance Moving Across Duvall",
    buildingCallouts: `Our appliance moving crews serve all Duvall neighborhoods: Downtown Duvall (older homes, narrow access, careful maneuvering), Cherry Valley (newer construction, large appliances, standard access), Big Rock (established homes, standard appliances, efficient moves), Novelty Hill adjacent (standard appliances, efficient moves), and Duvall rural (advance access planning, right-size truck selection).`,
    extraFaqs: [
      {
        q: "Do you disconnect and reconnect appliances for Duvall moves?",
        a: "Yes. We disconnect and reconnect standard appliance hookups, water lines for refrigerators and dishwashers, electric connections for ranges.",
      },
      {
        q: "Can you move appliances to rural properties in Duvall?",
        a: "Yes. We regularly deliver appliances to rural Duvall properties. We assess access in advance and use the right size truck for each property.",
      },
    ],
  },

  "duvall-unpacking": {
    intro: `After a Duvall move, our unpacking crews can set up your new home so you're living comfortably from day one. We unpack boxes, place items in their designated rooms, and remove all packing materials. We work at your pace and follow your instructions for where everything goes. Unpacking service is available as a standalone booking or as an add-on to any Duvall move.`,
    buildingCalloutsHeading: "Unpacking Services Across Duvall",
    buildingCallouts: `Our unpacking crews serve all Duvall neighborhoods and home types: Downtown Duvall (older homes, careful handling, standard unpacking), Cherry Valley (newer construction, full unpacking service, all materials removed), Big Rock (established homes, standard unpacking, room-by-room setup), and Duvall rural (standard unpacking, efficient setup, all materials removed).`,
    extraFaqs: [
      {
        q: "How long does unpacking take for a Duvall home?",
        a: "A typical 2-bedroom Duvall home takes 3–5 hours to unpack with a 2-person crew. A larger Cherry Valley or Big Rock home takes 5–8 hours. We remove all boxes and packing materials when we're done.",
      },
      {
        q: "Can I book unpacking service separately from the move in Duvall?",
        a: "Yes. We offer unpacking as a standalone service. We can schedule unpacking the day after your move or whenever works best for you.",
      },
    ],
  },

  "duvall-warehousing": {
    intro: `Our Redmond warehouse is 17 miles from Duvall and offers flexible warehousing and distribution services for Snoqualmie Valley businesses. We handle receiving, storage, inventory management, and last-mile delivery. For Duvall businesses along the Woodinville-Duvall Road corridor, our facility provides efficient access. Month-to-month contracts available, no long-term commitment required.`,
    buildingCalloutsHeading: "Warehousing and Distribution for Duvall Businesses",
    buildingCallouts: `Our warehousing services support Duvall businesses: Downtown Duvall retail (inventory storage, seasonal overflow, last-mile delivery), rural businesses (equipment storage, seasonal inventory, flexible terms), professional services (document storage, equipment storage, month-to-month), and general business storage (month-to-month, pickup and delivery available, 17 miles via Woodinville-Duvall Road).`,
    extraFaqs: [
      {
        q: "How far is your warehouse from Duvall?",
        a: "Our Redmond warehouse is 17 miles from Duvall, about 28 minutes via the Woodinville-Duvall Road. We offer pickup and delivery from your Duvall location.",
      },
      {
        q: "Do you offer month-to-month warehousing for Duvall businesses?",
        a: "Yes. All our warehousing contracts are month-to-month, no long-term commitment required.",
      },
    ],
  },

// ===================================================================
// CARNATION
// ===================================================================

  "carnation-residential": {
    intro: `Carnation is a small agricultural community in the Snoqualmie Valley, anchored by the Tolt River, historic dairy farms, and a tight-knit downtown. Our crews have been moving Carnation homes since 2009 and know every neighborhood's specific logistics. Downtown Carnation homes sit on compact lots with limited truck parking, while rural properties on Carnation Farm Road and Tolt River Road have long driveways and unpaved access that require right-sized trucks. SR-203 is the main corridor from our Redmond warehouse, 16 miles southeast, a 25-minute drive.`,
    buildingCalloutsHeading: "Carnation Neighborhoods We Know Best",
    buildingCallouts: `Our residential crews serve all Carnation neighborhoods: Downtown Carnation (compact lots, limited truck parking, older homes), Tolt River area (rural properties, long driveways, flood-plain awareness), Carnation Farm Road (agricultural properties, unpaved access, advance truck sizing required), Stillwater (rural residential, standard access, mix of home sizes), and Ames Lake adjacent (semi-rural, newer construction, standard access).`,
    extraFaqs: [
      {
        q: "How do you handle rural road access for Carnation residential moves?",
        a: "We assess every Carnation property's access in advance, driveway length, road surface, and truck turnaround space. For properties on unpaved roads or farm lanes, we bring a smaller truck and shuttle loads if needed. We've been doing this in the Snoqualmie Valley since 2009.",
      },
      {
        q: "What does a residential move in Carnation typically cost?",
        a: "Most Carnation residential moves run $120–$160 per hour for a 2-person crew. A 2-bedroom home typically costs $750–$1,300. Rural properties with long driveways or challenging access may take additional time. We provide flat-rate quotes after reviewing your specific move.",
      },
    ],
  },

  "carnation-apartment": {
    intro: `Carnation has very limited apartment inventory, the community is primarily single-family residential. If you're moving from an apartment in a nearby city (Redmond, Woodinville, Duvall) to a Carnation home, we handle the full move seamlessly. Our crews know the SR-203 corridor well and can coordinate same-day moves from apartment to Carnation property. The Redmond warehouse is 16 miles away, allowing us to provide efficient service with no long travel delays.`,
    buildingCalloutsHeading: "Apartment Move Logistics for Carnation",
    buildingCallouts: `Most apartment moves to or from Carnation originate in nearby cities: Redmond (16 miles, 25 min via SR-202 and SR-203), Woodinville (12 miles, 20 min via SR-202), Duvall (6 miles, 10 min via SR-203), and Kirkland (18 miles, 30 min via SR-202). We coordinate elevator reservations and COI requirements at the origin apartment building and handle rural property access at the Carnation destination.`,
    extraFaqs: [
      {
        q: "Can you move me from a Redmond apartment to a Carnation home?",
        a: "Yes, this is a common move for us. We handle elevator reservations and COI requirements at the Redmond apartment, then manage rural road access at your Carnation property. We provide a flat-rate quote for the full move.",
      },
      {
        q: "Are there any apartments in Carnation itself?",
        a: "Carnation has very limited apartment inventory. Most housing is single-family residential. If you're looking for apartments near Carnation, Duvall (6 miles north) and Woodinville (12 miles west) have more options.",
      },
    ],
  },

  "carnation-packing": {
    intro: `Carnation homes range from older farmhouses in downtown to rural properties with large outbuildings, and packing for a rural move requires a different approach than packing a city apartment. Our Carnation packing crews bring all materials on the truck: double-wall boxes, wardrobe boxes, mattress bags, furniture pads, and specialty wrapping for fragile items. We pack room by room, label everything clearly, and load in a sequence that makes unpacking logical. For rural Carnation properties with outbuildings, we pack and label separately so barn items, garage tools, and household goods don't get mixed.`,
    buildingCalloutsHeading: "Packing Services for Carnation Homes",
    buildingCallouts: `We offer full packing, partial packing, and packing supplies delivery for all Carnation property types: farmhouses (full-service packing including outbuildings and barn items), rural residential (specialty wrapping for antiques and farm equipment, labeled by room and building), downtown Carnation homes (standard full-service packing, compact lot logistics), and Tolt River area properties (flood-plain awareness, moisture-resistant packing for items stored near water).`,
    extraFaqs: [
      {
        q: "Do you pack outbuildings and garages for Carnation farm properties?",
        a: "Yes. We pack outbuildings, garages, and barns separately from household goods, with clear labeling so everything goes to the right place at your destination. Let us know about outbuildings when you request a quote so we can allocate enough time.",
      },
      {
        q: "How much does packing service cost for a Carnation home?",
        a: "Full packing for a 2-bedroom Carnation home typically adds $300–$600 to the move cost, depending on the volume of items. We provide an itemized quote that separates packing labor from move labor.",
      },
    ],
  },

  "carnation-commercial": {
    intro: `Carnation has limited commercial development, primarily small businesses along Tolt Avenue and a handful of agricultural operations. Our commercial crews handle small office moves, retail relocations, and agricultural business moves with the same care and efficiency we bring to larger commercial jobs. We work after hours or on weekends to minimize disruption, and our Redmond warehouse is 16 miles away for any short-term storage needs during a commercial transition.`,
    buildingCalloutsHeading: "Commercial Move Locations in Carnation",
    buildingCallouts: `We serve all commercial locations in Carnation: Tolt Avenue businesses (small retail and office, limited truck parking, advance coordination required), agricultural operations (equipment moves, outbuilding contents, specialized handling), and home offices (full packing and move service, same as residential).`,
    extraFaqs: [
      {
        q: "Can you move a small business in Carnation over a weekend?",
        a: "Yes. We regularly schedule commercial moves on weekends to minimize business disruption. We provide a flat-rate quote and a guaranteed start time.",
      },
      {
        q: "Do you move agricultural equipment in Carnation?",
        a: "We move farm office contents, tools, and smaller agricultural equipment. For heavy machinery, we recommend a specialized agricultural equipment mover. Contact us and we'll advise on what we can handle.",
      },
    ],
  },

  "carnation-storage": {
    intro: `Our secure, climate-controlled storage facility in Redmond is 16 miles from Carnation, a 25-minute drive via SR-202 and SR-203. Carnation residents use our storage during home sales, renovations, and seasonal moves. Rural Carnation properties often have outbuildings for storage, but when you need climate-controlled, secure storage for furniture, electronics, documents, or valuables, our Redmond facility provides the right environment. Storage is available month-to-month, contact us for current pricing.`,
    buildingCalloutsHeading: "Storage Options for Carnation Residents",
    buildingCallouts: `Our Redmond storage facility serves Carnation residents with: climate-controlled units (furniture, electronics, documents, wine, antiques), standard units (tools, outdoor equipment, seasonal items), short-term storage (during home sales or renovations, secure vault storage available), and long-term storage (month-to-month, no long-term contracts required).`,
    extraFaqs: [
      {
        q: "Is your storage facility close enough to Carnation to be practical?",
        a: "Yes. Our Redmond facility is 16 miles from Carnation, a 25-minute drive via SR-202 and SR-203. We pick up from your Carnation property and deliver back when you're ready. Most clients access their storage 1–2 times per month.",
      },
      {
        q: "Do you offer storage for farm equipment or large items from Carnation?",
        a: "We store furniture, boxes, and standard household items. For large farm equipment, we recommend an agricultural storage facility. Contact us and we'll advise on the best solution for your specific items.",
      },
    ],
  },

  "carnation-senior": {
    intro: `Carnation's senior community is small but tight-knit, with many long-time residents who have lived in their homes for decades. Moving after years in a Snoqualmie Valley farmhouse or rural property requires patience, careful planning, and crews who understand the emotional weight of leaving a longtime home. Our senior moving specialists take extra time, communicate clearly, and handle every item with care. We coordinate with family members, senior communities, and care facilities in Redmond, Kirkland, and Bellevue for Carnation seniors transitioning to assisted living.`,
    buildingCalloutsHeading: "Senior Move Destinations from Carnation",
    buildingCallouts: `We move Carnation seniors to destinations throughout the Eastside and beyond: Redmond senior communities (16 miles, 25 min), Kirkland senior communities (18 miles, 30 min), Bellevue senior communities (22 miles, 35 min), Woodinville senior communities (12 miles, 20 min), and in-Carnation downsizing (smaller home or cottage in the same community).`,
    extraFaqs: [
      {
        q: "How do you handle a senior move from a longtime Carnation farmhouse?",
        a: "We start with a detailed walkthrough to understand what's moving, what's being donated, and what family members are taking. We pack room by room, label everything clearly, and take extra care with sentimental items. We coordinate with the destination facility for move-in requirements.",
      },
      {
        q: "Can you help coordinate donation pickups for items a Carnation senior isn't taking?",
        a: "Yes. We work with local donation organizations and can coordinate pickup of items you're not taking. We can also help arrange estate sale services for larger volumes of items.",
      },
    ],
  },

  "carnation-furniture": {
    intro: `Carnation homes, from historic farmhouses to newer rural builds, often contain large, heavy furniture that requires careful handling on rural roads and through narrow doorways. Our furniture moving crews bring the right equipment: furniture dollies, stair climbers, moving blankets, and straps. We disassemble and reassemble large pieces, protect hardwood floors and doorframes, and navigate the rural access challenges common to Carnation properties. For antique farm furniture or heirloom pieces, we use custom wrapping and extra padding.`,
    buildingCalloutsHeading: "Furniture Moving Challenges in Carnation",
    buildingCallouts: `Common furniture moving challenges in Carnation: farmhouse staircases (narrow, steep, often original construction), rural road access (right-sized truck selection, shuttle loads for very long driveways), antique and heirloom furniture (custom wrapping, extra padding, white-glove handling), large outbuilding furniture (barn furniture, workshop items, outdoor pieces), and tight downtown lots (limited staging space, careful truck positioning).`,
    extraFaqs: [
      {
        q: "Can you move antique farm furniture from a Carnation property?",
        a: "Yes. We use custom wrapping, extra padding, and white-glove handling for antique and heirloom furniture. We assess each piece before the move and use the appropriate protection materials.",
      },
      {
        q: "How do you handle furniture moves on rural Carnation roads?",
        a: "We assess the access route in advance, road surface, driveway length, and truck turnaround space. For very long or unpaved driveways, we use a smaller truck and shuttle loads. We've been doing this in the Snoqualmie Valley since 2009.",
      },
    ],
  },

  "carnation-appliance": {
    intro: `Carnation homes often have older appliances in farmhouses or newer appliances in recently renovated rural properties. Our appliance moving crews handle refrigerators, washers, dryers, ranges, and dishwashers with the right equipment: appliance dollies, stair climbers, and moving straps. We disconnect and reconnect standard appliances, protect floors and doorframes, and navigate rural access challenges. For Carnation properties with outbuildings, we also move workshop equipment and outdoor appliances.`,
    buildingCalloutsHeading: "Appliance Moving in Carnation",
    buildingCallouts: `We move all standard appliances in Carnation homes: refrigerators (standard and French door, floor protection required), washers and dryers (disconnect and reconnect, stacked units handled), ranges and ovens (gas and electric, standard disconnect), dishwashers (standard disconnect), and outdoor appliances (grills, outdoor refrigerators, workshop equipment).`,
    extraFaqs: [
      {
        q: "Do you disconnect and reconnect appliances for Carnation moves?",
        a: "We disconnect and reconnect standard appliances (washer/dryer hookups, refrigerator water lines). For gas appliances, we recommend a licensed plumber for the final gas connection. We can refer you to a local plumber if needed.",
      },
      {
        q: "Can you move a large chest freezer from a Carnation farmhouse?",
        a: "Yes. We move chest freezers, upright freezers, and commercial-style refrigerators. We recommend emptying and defrosting freezers 24 hours before the move. We protect floors and doorframes throughout.",
      },
    ],
  },

  "carnation-unpacking": {
    intro: `After a Carnation move, especially from a larger property or farmhouse, unpacking can feel overwhelming. Our unpacking crews work systematically: we unpack boxes room by room, place furniture where you want it, and remove all packing materials when we're done. For Carnation seniors or families moving into a new home, we can set up kitchens, make beds, and hang basic items so your new home feels livable from day one. We leave your home tidy, with all boxes broken down and removed.`,
    buildingCalloutsHeading: "Unpacking Services for Carnation Homes",
    buildingCallouts: `We offer full unpacking, partial unpacking, and kitchen setup for all Carnation home types: farmhouses (large volume, multiple rooms, outbuilding contents), rural residential (standard unpacking, furniture placement, box removal), downsizing moves (selective unpacking, donation coordination for excess items), and senior moves (full setup including kitchen, bedroom, and bathroom essentials).`,
    extraFaqs: [
      {
        q: "Can you set up my kitchen and bedroom after a Carnation move?",
        a: "Yes. Our full unpacking service includes kitchen setup (dishes, cookware, pantry items placed where you want them), bedroom setup (beds assembled and made, clothing hung), and bathroom setup (toiletries and towels placed). We remove all packing materials when we're done.",
      },
      {
        q: "How long does unpacking take for a Carnation home?",
        a: "A 2-bedroom home typically takes 3–5 hours to fully unpack. Larger homes or those with significant kitchen and closet contents take longer. We provide a time estimate when you book.",
      },
    ],
  },

  "carnation-warehousing": {
    intro: `Our Redmond warehouse serves Carnation businesses and residents needing short- or long-term warehousing. Located 16 miles from Carnation via SR-202 and SR-203, our facility offers climate-controlled and standard storage bays, receiving and inventory management, and last-mile delivery back to Carnation. Agricultural businesses, small retailers, and homeowners in transition all use our warehousing services. We provide monthly inventory reports and flexible access scheduling.`,
    buildingCalloutsHeading: "Warehousing Services for Carnation",
    buildingCallouts: `Our Redmond warehouse provides: climate-controlled storage (furniture, electronics, documents, wine, antiques), standard storage bays (tools, equipment, inventory), receiving and inventory management (accept deliveries on your behalf, maintain inventory log), last-mile delivery to Carnation (scheduled delivery back to your Carnation property or business), and flexible access (schedule access appointments, monthly inventory reports).`,
    extraFaqs: [
      {
        q: "Can you store business inventory for a Carnation small business?",
        a: "Yes. We store business inventory, office furniture, and equipment for Carnation businesses. We provide monthly inventory reports and can deliver items back to your Carnation location on a scheduled basis.",
      },
      {
        q: "How far is your warehouse from Carnation?",
        a: "Our Redmond warehouse is 16 miles from Carnation, a 25-minute drive via SR-202 and SR-203. We pick up from your Carnation location and deliver back when you're ready.",
      },
    ],
  },

// ===================================================================
// FALL CITY
// ===================================================================

  "fall-city-residential": {
    intro: `Fall City is a small, rural community in the Snoqualmie Valley between Redmond and Snoqualmie, known for its equestrian properties, the Raging River, and a quiet rural character. Our crews have been moving Fall City homes since 2009 and know every neighborhood's specific logistics. Properties on Fall City Way and SE 43rd Street have standard residential access, while rural properties on Raging River Road and Ames Lake Road have long driveways and unpaved access that require right-sized trucks. Our Redmond warehouse is just 12 miles west, an 18-minute drive via SR-202.`,
    buildingCalloutsHeading: "Fall City Neighborhoods We Know Best",
    buildingCallouts: `Our residential crews serve all Fall City neighborhoods: Fall City Way (standard residential, mix of home sizes, good truck access), Raging River area (rural properties, long driveways, river proximity awareness), Preston (semi-rural, newer construction, standard access), Ames Lake adjacent (semi-rural, mix of older and newer homes, standard access), and equestrian properties (long driveways, outbuildings, specialized access planning).`,
    extraFaqs: [
      {
        q: "How do you handle equestrian property moves in Fall City?",
        a: "We assess every Fall City equestrian property's access in advance, driveway length, road surface, and truck turnaround space. We pack and label barn and tack room contents separately from household goods. We've been handling rural Snoqualmie Valley moves since 2009.",
      },
      {
        q: "What does a residential move in Fall City typically cost?",
        a: "Most Fall City residential moves run $120–$160 per hour for a 2-person crew. A 2-bedroom home typically costs $750–$1,300. Rural properties with long driveways or challenging access may take additional time. We provide flat-rate quotes after reviewing your specific move.",
      },
    ],
  },

  "fall-city-apartment": {
    intro: `Fall City has very limited apartment inventory, the community is primarily single-family residential with a rural character. Most apartment moves involving Fall City are from nearby cities (Redmond, Issaquah, Sammamish) to a Fall City home, or from Fall City to an apartment in a larger city. Our crews handle the full move seamlessly, managing elevator reservations and COI requirements at the apartment building and rural access logistics at the Fall City property. The Redmond warehouse is 12 miles away for any storage needs during the transition.`,
    buildingCalloutsHeading: "Apartment Move Logistics for Fall City",
    buildingCallouts: `Most apartment moves to or from Fall City originate in nearby cities: Redmond (12 miles, 18 min via SR-202), Issaquah (8 miles, 15 min via SR-202), Sammamish (10 miles, 18 min via SR-202), and Bellevue (16 miles, 25 min via SR-202). We coordinate elevator reservations and COI requirements at the origin apartment and handle rural property access at the Fall City destination.`,
    extraFaqs: [
      {
        q: "Can you move me from an Issaquah apartment to a Fall City home?",
        a: "Yes, this is a common move for us. We handle elevator reservations and COI requirements at the Issaquah apartment, then manage rural road access at your Fall City property. We provide a flat-rate quote for the full move.",
      },
      {
        q: "Are there any apartments in Fall City itself?",
        a: "Fall City has very limited apartment inventory. Most housing is single-family residential. If you're looking for apartments near Fall City, Issaquah (8 miles east) and Redmond (12 miles west) have more options.",
      },
    ],
  },

  "fall-city-packing": {
    intro: `Fall City homes, from equestrian properties to rural farmhouses, require a thoughtful packing approach. Our Fall City packing crews bring all materials on the truck: double-wall boxes, wardrobe boxes, mattress bags, furniture pads, and specialty wrapping for fragile items. We pack room by room, label everything clearly, and pack outbuildings and tack rooms separately from household goods. For equestrian properties, we have experience packing saddles, tack, and barn equipment with appropriate protection.`,
    buildingCalloutsHeading: "Packing Services for Fall City Homes",
    buildingCallouts: `We offer full packing, partial packing, and packing supplies delivery for all Fall City property types: equestrian properties (tack room packing, barn equipment, household goods packed and labeled separately), rural residential (specialty wrapping for antiques and valuables, labeled by room), Fall City Way homes (standard full-service packing, efficient loading), and Preston area homes (standard packing, newer construction, efficient access).`,
    extraFaqs: [
      {
        q: "Do you pack tack rooms and barn contents for Fall City equestrian properties?",
        a: "Yes. We pack tack rooms, barn contents, and equestrian equipment separately from household goods, with clear labeling so everything goes to the right place. Let us know about outbuildings and tack rooms when you request a quote.",
      },
      {
        q: "How much does packing service cost for a Fall City home?",
        a: "Full packing for a 2-bedroom Fall City home typically adds $300–$600 to the move cost, depending on the volume of items. Properties with outbuildings or tack rooms will take additional time. We provide an itemized quote.",
      },
    ],
  },

  "fall-city-commercial": {
    intro: `Fall City has very limited commercial development, primarily small businesses along Fall City Way and a handful of agricultural operations. Our commercial crews handle small office moves, retail relocations, and agricultural business moves efficiently. We work after hours or on weekends to minimize disruption, and our Redmond warehouse is 12 miles away for any short-term storage needs during a commercial transition.`,
    buildingCalloutsHeading: "Commercial Move Locations in Fall City",
    buildingCallouts: `We serve all commercial locations in Fall City: Fall City Way businesses (small retail and office, limited truck parking, advance coordination required), agricultural operations (equipment moves, outbuilding contents, specialized handling), and home offices (full packing and move service, same as residential).`,
    extraFaqs: [
      {
        q: "Can you move a small business in Fall City over a weekend?",
        a: "Yes. We regularly schedule commercial moves on weekends to minimize business disruption. We provide a flat-rate quote and a guaranteed start time.",
      },
      {
        q: "Do you move farm or equestrian business equipment in Fall City?",
        a: "We move farm office contents, tools, and smaller equipment. For heavy machinery, we recommend a specialized equipment mover. Contact us and we'll advise on what we can handle.",
      },
    ],
  },

  "fall-city-storage": {
    intro: `Our secure, climate-controlled storage facility in Redmond is 12 miles from Fall City, an 18-minute drive via SR-202. Fall City residents use our storage during home sales, renovations, and seasonal moves. Rural Fall City properties often have outbuildings, but when you need climate-controlled, secure storage for furniture, electronics, documents, or valuables, our Redmond facility provides the right environment. Storage is available month-to-month, contact us for current pricing.`,
    buildingCalloutsHeading: "Storage Options for Fall City Residents",
    buildingCallouts: `Our Redmond storage facility serves Fall City residents with: climate-controlled units (furniture, electronics, documents, wine, antiques, tack and equestrian equipment), standard units (tools, outdoor equipment, seasonal items), short-term storage (during home sales or renovations, secure vault storage available), and long-term storage (month-to-month, no long-term contracts required).`,
    extraFaqs: [
      {
        q: "Can you store equestrian equipment from a Fall City property?",
        a: "Yes. We store saddles, tack, and equestrian equipment in our Redmond facility. Climate-controlled units are available for leather goods and sensitive equipment. We pick up from your Fall City property and deliver back when you're ready.",
      },
      {
        q: "How far is your storage from Fall City?",
        a: "Our Redmond facility is 12 miles from Fall City, an 18-minute drive via SR-202. We pick up and deliver on a scheduled basis.",
      },
    ],
  },

  "fall-city-senior": {
    intro: `Fall City's senior community includes long-time residents who have lived in their rural properties for decades. Moving after years in a Snoqualmie Valley home requires patience, careful planning, and crews who understand the emotional weight of leaving a longtime property. Our senior moving specialists take extra time, communicate clearly, and handle every item with care. We coordinate with family members, senior communities, and care facilities in Redmond, Issaquah, and Bellevue for Fall City seniors transitioning to assisted living.`,
    buildingCalloutsHeading: "Senior Move Destinations from Fall City",
    buildingCallouts: `We move Fall City seniors to destinations throughout the Eastside: Redmond senior communities (12 miles, 18 min), Issaquah senior communities (8 miles, 15 min), Bellevue senior communities (20 miles, 30 min), Sammamish senior communities (10 miles, 18 min), and in-Fall City downsizing (smaller home in the same community).`,
    extraFaqs: [
      {
        q: "How do you handle a senior move from a longtime Fall City rural property?",
        a: "We start with a detailed walkthrough to understand what's moving, what's being donated, and what family members are taking. We pack room by room, label everything clearly, and take extra care with sentimental items. We coordinate with the destination facility for move-in requirements.",
      },
      {
        q: "Can you help coordinate donation pickups for items a Fall City senior isn't taking?",
        a: "Yes. We work with local donation organizations and can coordinate pickup of items you're not taking. We can also help arrange estate sale services for larger volumes of items.",
      },
    ],
  },

  "fall-city-furniture": {
    intro: `Fall City homes, from equestrian properties to rural farmhouses, often contain large, heavy furniture that requires careful handling on rural roads and through narrow doorways. Our furniture moving crews bring the right equipment: furniture dollies, stair climbers, moving blankets, and straps. We disassemble and reassemble large pieces, protect hardwood floors and doorframes, and navigate the rural access challenges common to Fall City properties. For antique or heirloom furniture, we use custom wrapping and extra padding.`,
    buildingCalloutsHeading: "Furniture Moving Challenges in Fall City",
    buildingCallouts: `Common furniture moving challenges in Fall City: rural road access (right-sized truck selection, shuttle loads for very long driveways), equestrian property logistics (outbuilding furniture, tack room items, barn furniture), antique and heirloom furniture (custom wrapping, extra padding, white-glove handling), farmhouse staircases (narrow, steep, careful maneuvering), and limited staging space on rural lots.`,
    extraFaqs: [
      {
        q: "Can you move large furniture from a Fall City equestrian property?",
        a: "Yes. We handle all furniture types from Fall City properties, including barn furniture, workshop items, and outdoor pieces. We assess access in advance and bring the right equipment for each property.",
      },
      {
        q: "How do you handle furniture moves on Fall City rural roads?",
        a: "We assess the access route in advance, road surface, driveway length, and truck turnaround space. For very long or unpaved driveways, we use a smaller truck and shuttle loads. We've been doing this in the Snoqualmie Valley since 2009.",
      },
    ],
  },

  "fall-city-appliance": {
    intro: `Fall City homes often have older appliances in farmhouses or newer appliances in recently renovated rural properties. Our appliance moving crews handle refrigerators, washers, dryers, ranges, and dishwashers with the right equipment: appliance dollies, stair climbers, and moving straps. We disconnect and reconnect standard appliances, protect floors and doorframes, and navigate rural access challenges. For Fall City properties with outbuildings, we also move workshop equipment and outdoor appliances.`,
    buildingCalloutsHeading: "Appliance Moving in Fall City",
    buildingCallouts: `We move all standard appliances in Fall City homes: refrigerators (standard and French door, floor protection required), washers and dryers (disconnect and reconnect, stacked units handled), ranges and ovens (gas and electric, standard disconnect), dishwashers (standard disconnect), and outdoor appliances (grills, outdoor refrigerators, workshop equipment, barn appliances).`,
    extraFaqs: [
      {
        q: "Do you disconnect and reconnect appliances for Fall City moves?",
        a: "We disconnect and reconnect standard appliances (washer/dryer hookups, refrigerator water lines). For gas appliances, we recommend a licensed plumber for the final gas connection. We can refer you to a local plumber if needed.",
      },
      {
        q: "Can you move a large chest freezer from a Fall City farmhouse?",
        a: "Yes. We move chest freezers, upright freezers, and commercial-style refrigerators. We recommend emptying and defrosting freezers 24 hours before the move. We protect floors and doorframes throughout.",
      },
    ],
  },

  "fall-city-unpacking": {
    intro: `After a Fall City move, especially from a larger rural property, unpacking can feel overwhelming. Our unpacking crews work systematically: we unpack boxes room by room, place furniture where you want it, and remove all packing materials when we're done. For Fall City seniors or families moving into a new home, we can set up kitchens, make beds, and hang basic items so your new home feels livable from day one. We leave your home tidy, with all boxes broken down and removed.`,
    buildingCalloutsHeading: "Unpacking Services for Fall City Homes",
    buildingCallouts: `We offer full unpacking, partial unpacking, and kitchen setup for all Fall City home types: rural residential (large volume, multiple rooms, outbuilding contents), equestrian properties (tack room setup, barn items, household goods), downsizing moves (selective unpacking, donation coordination for excess items), and senior moves (full setup including kitchen, bedroom, and bathroom essentials).`,
    extraFaqs: [
      {
        q: "Can you set up my kitchen and bedroom after a Fall City move?",
        a: "Yes. Our full unpacking service includes kitchen setup, bedroom setup (beds assembled and made, clothing hung), and bathroom setup. We remove all packing materials when we're done.",
      },
      {
        q: "How long does unpacking take for a Fall City home?",
        a: "A 2-bedroom home typically takes 3–5 hours to fully unpack. Larger homes or those with significant outbuilding contents take longer. We provide a time estimate when you book.",
      },
    ],
  },

  "fall-city-warehousing": {
    intro: `Our Redmond warehouse serves Fall City businesses and residents needing short- or long-term warehousing. Located 12 miles from Fall City via SR-202, our facility offers climate-controlled and standard storage bays, receiving and inventory management, and last-mile delivery back to Fall City. Agricultural businesses, small retailers, and homeowners in transition all use our warehousing services. We provide monthly inventory reports and flexible access scheduling.`,
    buildingCalloutsHeading: "Warehousing Services for Fall City",
    buildingCallouts: `Our Redmond warehouse provides: climate-controlled storage (furniture, electronics, documents, wine, antiques, equestrian equipment), standard storage bays (tools, equipment, inventory), receiving and inventory management (accept deliveries on your behalf, maintain inventory log), last-mile delivery to Fall City (scheduled delivery back to your Fall City property or business), and flexible access (schedule access appointments, monthly inventory reports).`,
    extraFaqs: [
      {
        q: "Can you store business inventory for a Fall City small business?",
        a: "Yes. We store business inventory, office furniture, and equipment for Fall City businesses. We provide monthly inventory reports and can deliver items back to your Fall City location on a scheduled basis.",
      },
      {
        q: "How far is your warehouse from Fall City?",
        a: "Our Redmond warehouse is 12 miles from Fall City, an 18-minute drive via SR-202. We pick up from your Fall City location and deliver back when you're ready.",
      },
    ],
  },

// ===================================================================
// MAPLE VALLEY
// ===================================================================

  "maple-valley-residential": {
    intro: `Maple Valley is one of the fastest-growing communities in King County, with significant new residential development in Lake Wilderness, Rock Creek, and Wilderness Village. Our crews have been moving Maple Valley homes since 2009 and know every neighborhood's specific logistics. Lake Wilderness and Rock Creek have HOA move-in rules, designated windows, COI requirements, and elevator reservations in multi-story buildings. SR-169 is the main corridor from our Redmond warehouse, 18 miles north, plan for peak-hour congestion on this route.`,
    buildingCalloutsHeading: "Maple Valley Neighborhoods We Know Best",
    buildingCallouts: `Our residential crews serve all Maple Valley neighborhoods: Lake Wilderness (HOA move-in rules, COI required, designated windows, newer planned community), Rock Creek (newer planned community, HOA coordination required, large home sizes), Wilderness Village (established planned community, standard access, mix of home sizes), Hobart (rural residential, standard access, older homes), Summit (established neighborhood, standard access), and Four Corners (commercial and residential mix, good truck access).`,
    extraFaqs: [
      {
        q: "How do you handle HOA move-in requirements in Maple Valley's planned communities?",
        a: "We are familiar with HOA move-in rules in Maple Valley's communities, Lake Wilderness, Rock Creek, and Wilderness Village all have specific requirements. We provide certificates of insurance, work within designated move-in windows, and coordinate with HOA management in advance.",
      },
      {
        q: "What does a residential move in Maple Valley typically cost?",
        a: "Most Maple Valley residential moves run $120–$160 per hour for a 2-person crew. A 3-bedroom home (common in Maple Valley's planned communities) typically costs $1,200–$2,000. We provide flat-rate quotes after reviewing your specific move.",
      },
    ],
  },

  "maple-valley-apartment": {
    intro: `Maple Valley has limited apartment inventory compared to its large residential base. Most apartment moves involving Maple Valley are from Renton, Tukwila, or Kent apartments to a Maple Valley home, or from Maple Valley to a larger city. Our crews manage elevator reservations and COI requirements at apartment buildings and HOA coordination at Maple Valley planned communities. The Redmond warehouse is 18 miles away for any storage needs during the transition.`,
    buildingCalloutsHeading: "Apartment Move Logistics for Maple Valley",
    buildingCallouts: `Most apartment moves to or from Maple Valley originate in nearby cities: Renton (10 miles, 18 min via SR-169), Tukwila (14 miles, 22 min via SR-169 and I-405), Kent (8 miles, 15 min via SR-516), and Covington (4 miles, 8 min via SE 272nd St). We coordinate elevator reservations and COI requirements at the origin apartment and HOA coordination at the Maple Valley destination.`,
    extraFaqs: [
      {
        q: "Can you move me from a Renton apartment to a Maple Valley home?",
        a: "Yes, this is a common move for us. We handle elevator reservations and COI requirements at the Renton apartment, then manage HOA coordination at your Maple Valley planned community. We provide a flat-rate quote for the full move.",
      },
      {
        q: "Are there apartments in Maple Valley itself?",
        a: "Maple Valley has a growing apartment inventory, primarily near the Four Corners area along SR-169. If you're moving within Maple Valley, we handle the full move including any HOA requirements.",
      },
    ],
  },

  "maple-valley-packing": {
    intro: `Maple Valley's large planned-community homes, often 2,500–4,000 square feet, require significant packing resources. Our Maple Valley packing crews bring all materials on the truck: double-wall boxes, wardrobe boxes, mattress bags, furniture pads, and specialty wrapping for fragile items. We pack room by room, label everything clearly, and load in a sequence that makes unpacking logical. For Maple Valley homes with large garages and outdoor storage, we pack and label separately so garage items don't get mixed with household goods.`,
    buildingCalloutsHeading: "Packing Services for Maple Valley Homes",
    buildingCallouts: `We offer full packing, partial packing, and packing supplies delivery for all Maple Valley home types: Lake Wilderness planned community homes (large volume, HOA coordination, full-service packing), Rock Creek homes (newer construction, large square footage, efficient packing), Wilderness Village homes (established community, standard full-service packing), Hobart rural properties (outbuilding contents, garage items, labeled separately), and Four Corners area homes (mix of residential types, standard packing).`,
    extraFaqs: [
      {
        q: "How much does packing service cost for a large Maple Valley home?",
        a: "Full packing for a 3-bedroom Maple Valley home typically adds $500–$900 to the move cost, depending on the volume of items. Larger homes (4+ bedrooms) will take additional time. We provide an itemized quote that separates packing labor from move labor.",
      },
      {
        q: "Do you pack garages and outdoor storage for Maple Valley homes?",
        a: "Yes. We pack garages, outdoor storage, and sheds separately from household goods, with clear labeling so everything goes to the right place at your destination. Let us know about garages and outbuildings when you request a quote.",
      },
    ],
  },

  "maple-valley-commercial": {
    intro: `Maple Valley has a growing business community along SR-169, particularly near the Four Corners area. Our commercial crews handle office moves, retail relocations, and small business moves with minimal disruption. We work after hours or on weekends, provide flat-rate quotes, and coordinate with building management for loading dock access. Our Redmond warehouse is 18 miles away for any short-term storage needs during a commercial transition.`,
    buildingCalloutsHeading: "Commercial Move Locations in Maple Valley",
    buildingCallouts: `We serve all commercial locations in Maple Valley: Four Corners commercial corridor (retail and office, good truck access, loading dock coordination), SR-169 businesses (strip mall and standalone retail, standard access), Lake Wilderness business park (office and light industrial, HOA coordination may be required), and home offices (full packing and move service, same as residential).`,
    extraFaqs: [
      {
        q: "Can you move a Maple Valley business over a weekend?",
        a: "Yes. We regularly schedule commercial moves on weekends to minimize business disruption. We provide a flat-rate quote and a guaranteed start time.",
      },
      {
        q: "Do you handle office moves in Maple Valley's business parks?",
        a: "Yes. We handle office moves in all Maple Valley commercial areas, including HOA-managed business parks. We coordinate with property management for loading dock access and move-in windows.",
      },
    ],
  },

  "maple-valley-storage": {
    intro: `Our secure, climate-controlled storage facility in Redmond is 18 miles from Maple Valley, a 28-minute drive via SR-169. Maple Valley residents use our storage during home sales, renovations, and seasonal moves. With Maple Valley's large planned-community homes, many residents need temporary storage when downsizing or staging a home for sale. Storage is available month-to-month, contact us for current pricing.`,
    buildingCalloutsHeading: "Storage Options for Maple Valley Residents",
    buildingCallouts: `Our Redmond storage facility serves Maple Valley residents with: climate-controlled units (furniture, electronics, documents, wine, antiques), standard units (tools, outdoor equipment, seasonal items, garage overflow), short-term storage (during home sales or renovations, secure vault storage available), and long-term storage (month-to-month, no long-term contracts required).`,
    extraFaqs: [
      {
        q: "Can you store furniture while I stage my Maple Valley home for sale?",
        a: "Yes. Home staging storage is one of our most common requests from Maple Valley residents. We pick up the furniture you want removed, store it in our Redmond facility, and deliver it back after closing. Storage is available month-to-month, contact us for current pricing.",
      },
      {
        q: "How far is your storage from Maple Valley?",
        a: "Our Redmond facility is 18 miles from Maple Valley, a 28-minute drive via SR-169. We pick up and deliver on a scheduled basis.",
      },
    ],
  },

  "maple-valley-senior": {
    intro: `Maple Valley's senior community is growing, with many retirees drawn to the community's family-friendly character and newer homes. Moving from a large Maple Valley planned-community home to a smaller residence or assisted living requires careful planning and crews who understand the emotional weight of the transition. Our senior moving specialists take extra time, communicate clearly, and handle every item with care. We coordinate with family members, senior communities, and care facilities in Renton, Bellevue, and Issaquah.`,
    buildingCalloutsHeading: "Senior Move Destinations from Maple Valley",
    buildingCallouts: `We move Maple Valley seniors to destinations throughout the region: Renton senior communities (10 miles, 18 min), Bellevue senior communities (22 miles, 35 min), Issaquah senior communities (12 miles, 20 min), Covington senior communities (4 miles, 8 min), and in-Maple Valley downsizing (smaller home or cottage in the same community).`,
    extraFaqs: [
      {
        q: "How do you handle a senior move from a large Maple Valley planned-community home?",
        a: "We start with a detailed walkthrough to understand what's moving, what's being donated, and what family members are taking. We pack room by room, label everything clearly, and take extra care with sentimental items. We coordinate with the destination facility for move-in requirements.",
      },
      {
        q: "Can you help coordinate donation pickups for items a Maple Valley senior isn't taking?",
        a: "Yes. We work with local donation organizations and can coordinate pickup of items you're not taking. We can also help arrange estate sale services for larger volumes of items.",
      },
    ],
  },

  "maple-valley-furniture": {
    intro: `Maple Valley's large planned-community homes often contain substantial furniture, oversized sofas, sectionals, large dining sets, and bedroom suites that require careful handling through wide hallways and on staircases. Our furniture moving crews bring the right equipment: furniture dollies, stair climbers, moving blankets, and straps. We disassemble and reassemble large pieces, protect hardwood floors and doorframes, and coordinate with HOA management for move-in windows.`,
    buildingCalloutsHeading: "Furniture Moving Challenges in Maple Valley",
    buildingCallouts: `Common furniture moving challenges in Maple Valley: large planned-community homes (oversized furniture, wide hallways, HOA move-in windows), Lake Wilderness and Rock Creek HOA requirements (COI required, designated windows, elevator reservations in multi-story buildings), garage and outdoor furniture (patio sets, workshop furniture, labeled separately), and Hobart rural properties (rural road access, outbuilding furniture).`,
    extraFaqs: [
      {
        q: "Can you move oversized sectional sofas in Maple Valley planned communities?",
        a: "Yes. We handle oversized sectionals, large dining sets, and bedroom suites in all Maple Valley planned communities. We assess doorway and staircase dimensions in advance and disassemble pieces that won't fit through standard openings.",
      },
      {
        q: "Do you coordinate with Maple Valley HOA management for furniture deliveries?",
        a: "Yes. We contact HOA management in advance to confirm move-in windows, COI requirements, and elevator reservations. We arrive within the designated window and follow all HOA rules.",
      },
    ],
  },

  "maple-valley-appliance": {
    intro: `Maple Valley's newer planned-community homes typically have modern appliances, large French door refrigerators, front-load washers and dryers, and built-in dishwashers. Our appliance moving crews handle all appliance types with the right equipment: appliance dollies, stair climbers, and moving straps. We disconnect and reconnect standard appliances, protect floors and doorframes, and coordinate with HOA management for move-in windows. For Maple Valley homes with outdoor kitchens, we also move outdoor appliances.`,
    buildingCalloutsHeading: "Appliance Moving in Maple Valley",
    buildingCallouts: `We move all standard appliances in Maple Valley homes: refrigerators (French door and standard, floor protection required), washers and dryers (front-load and top-load, disconnect and reconnect), ranges and ovens (gas and electric, standard disconnect), dishwashers (standard disconnect), outdoor appliances (outdoor refrigerators, grills, outdoor kitchen equipment), and garage appliances (chest freezers, workshop refrigerators).`,
    extraFaqs: [
      {
        q: "Do you disconnect and reconnect appliances for Maple Valley moves?",
        a: "We disconnect and reconnect standard appliances (washer/dryer hookups, refrigerator water lines). For gas appliances, we recommend a licensed plumber for the final gas connection. We can refer you to a local plumber if needed.",
      },
      {
        q: "Can you move a large French door refrigerator in a Maple Valley planned community?",
        a: "Yes. We handle large French door refrigerators in all Maple Valley planned communities. We protect floors and doorframes throughout and coordinate with HOA management for move-in windows.",
      },
    ],
  },

  "maple-valley-unpacking": {
    intro: `After a Maple Valley move, especially from a large planned-community home, unpacking can feel overwhelming. Our unpacking crews work systematically: we unpack boxes room by room, place furniture where you want it, and remove all packing materials when we're done. For Maple Valley families moving into a new home, we can set up kitchens, make beds, and hang basic items so your new home feels livable from day one. We leave your home tidy, with all boxes broken down and removed.`,
    buildingCalloutsHeading: "Unpacking Services for Maple Valley Homes",
    buildingCallouts: `We offer full unpacking, partial unpacking, and kitchen setup for all Maple Valley home types: Lake Wilderness planned community homes (large volume, multiple rooms, full-service unpacking), Rock Creek homes (newer construction, large square footage, efficient unpacking), Wilderness Village homes (established community, standard unpacking), Hobart rural properties (outbuilding contents, garage items, household goods), and downsizing moves (selective unpacking, donation coordination).`,
    extraFaqs: [
      {
        q: "Can you set up my kitchen and bedroom after a Maple Valley move?",
        a: "Yes. Our full unpacking service includes kitchen setup (dishes, cookware, pantry items placed where you want them), bedroom setup (beds assembled and made, clothing hung), and bathroom setup. We remove all packing materials when we're done.",
      },
      {
        q: "How long does unpacking take for a large Maple Valley home?",
        a: "A 3-bedroom Maple Valley home typically takes 5–8 hours to fully unpack. Larger homes (4+ bedrooms) take longer. We provide a time estimate when you book.",
      },
    ],
  },

  "maple-valley-warehousing": {
    intro: `Our Redmond warehouse serves Maple Valley businesses and residents needing short- or long-term warehousing. Located 18 miles from Maple Valley via SR-169, our facility offers climate-controlled and standard storage bays, receiving and inventory management, and last-mile delivery back to Maple Valley. Businesses along SR-169 and homeowners in transition use our warehousing services regularly. We provide monthly inventory reports and flexible access scheduling.`,
    buildingCalloutsHeading: "Warehousing Services for Maple Valley",
    buildingCallouts: `Our Redmond warehouse provides: climate-controlled storage (furniture, electronics, documents, wine, antiques), standard storage bays (tools, equipment, business inventory), receiving and inventory management (accept deliveries on your behalf, maintain inventory log), last-mile delivery to Maple Valley (scheduled delivery back to your Maple Valley property or business), and flexible access (schedule access appointments, monthly inventory reports).`,
    extraFaqs: [
      {
        q: "Can you store business inventory for a Maple Valley small business?",
        a: "Yes. We store business inventory, office furniture, and equipment for Maple Valley businesses. We provide monthly inventory reports and can deliver items back to your Maple Valley location on a scheduled basis.",
      },
      {
        q: "How far is your warehouse from Maple Valley?",
        a: "Our Redmond warehouse is 18 miles from Maple Valley, a 28-minute drive via SR-169. We pick up from your Maple Valley location and deliver back when you're ready.",
      },
    ],
  },

// ===================================================================
// COVINGTON
// ===================================================================

  "covington-residential": {
    intro: `Covington is a growing unincorporated community in southeast King County, known for its family-friendly neighborhoods and proximity to both Renton and Maple Valley. Our crews have been moving Covington homes since 2009 and know every neighborhood's specific logistics. Covington Meadows and Timberlane have HOA move-in rules, designated windows and COI requirements. SR-516 and SE 272nd Street are the main access routes from our Redmond warehouse, 18 miles north, plan for peak-hour congestion on SR-516.`,
    buildingCalloutsHeading: "Covington Neighborhoods We Know Best",
    buildingCallouts: `Our residential crews serve all Covington neighborhoods: Covington Way (main residential corridor, good truck access, mix of home sizes), Jenkins Creek (established neighborhood, standard access, older homes), Lake Morton (semi-rural, lake views, standard access), Covington Meadows (newer planned community, HOA coordination required), and Timberlane (established neighborhood, standard access, mix of home sizes).`,
    extraFaqs: [
      {
        q: "How do you handle HOA move-in requirements in Covington's planned communities?",
        a: "We are familiar with HOA move-in rules in Covington's communities, Covington Meadows and other newer developments have specific requirements. We provide certificates of insurance, work within designated move-in windows, and coordinate with HOA management in advance.",
      },
      {
        q: "What does a residential move in Covington typically cost?",
        a: "Most Covington residential moves run $120–$160 per hour for a 2-person crew. A 3-bedroom home typically costs $1,200–$2,000. We provide flat-rate quotes after reviewing your specific move.",
      },
    ],
  },

  "covington-apartment": {
    intro: `Covington has limited apartment inventory compared to its large residential base. Most apartment moves involving Covington are from Renton, Kent, or Auburn apartments to a Covington home, or from Covington to a larger city. Our crews manage elevator reservations and COI requirements at apartment buildings and HOA coordination at Covington planned communities. The Redmond warehouse is 18 miles away for any storage needs during the transition.`,
    buildingCalloutsHeading: "Apartment Move Logistics for Covington",
    buildingCallouts: `Most apartment moves to or from Covington originate in nearby cities: Renton (12 miles, 20 min via SR-169 and SE 272nd St), Kent (8 miles, 15 min via SR-516), Auburn (12 miles, 20 min via SR-18), and Maple Valley (4 miles, 8 min via SE 272nd St). We coordinate elevator reservations and COI requirements at the origin apartment and HOA coordination at the Covington destination.`,
    extraFaqs: [
      {
        q: "Can you move me from a Kent apartment to a Covington home?",
        a: "Yes, this is a common move for us. We handle elevator reservations and COI requirements at the Kent apartment, then manage HOA coordination at your Covington planned community. We provide a flat-rate quote for the full move.",
      },
      {
        q: "Are there apartments in Covington itself?",
        a: "Covington has a growing apartment inventory near the Covington Way commercial corridor. If you're moving within Covington, we handle the full move including any HOA requirements.",
      },
    ],
  },

  "covington-packing": {
    intro: `Covington's newer planned-community homes and established residential neighborhoods require thorough packing. Our Covington packing crews bring all materials on the truck: double-wall boxes, wardrobe boxes, mattress bags, furniture pads, and specialty wrapping for fragile items. We pack room by room, label everything clearly, and load in a sequence that makes unpacking logical. For Covington homes with large garages, we pack and label garage items separately from household goods.`,
    buildingCalloutsHeading: "Packing Services for Covington Homes",
    buildingCallouts: `We offer full packing, partial packing, and packing supplies delivery for all Covington home types: Covington Meadows planned community homes (full-service packing, HOA coordination), Jenkins Creek homes (standard full-service packing, efficient loading), Lake Morton homes (standard packing, lake-view properties), Timberlane homes (established neighborhood, standard packing), and Covington Way homes (mix of residential types, standard packing).`,
    extraFaqs: [
      {
        q: "How much does packing service cost for a Covington home?",
        a: "Full packing for a 3-bedroom Covington home typically adds $500–$900 to the move cost, depending on the volume of items. We provide an itemized quote that separates packing labor from move labor.",
      },
      {
        q: "Do you pack garages for Covington homes?",
        a: "Yes. We pack garages separately from household goods, with clear labeling so everything goes to the right place at your destination. Let us know about garages and outbuildings when you request a quote.",
      },
    ],
  },

  "covington-commercial": {
    intro: `Covington has a growing business community along Covington Way, with retail, restaurants, and professional services. Our commercial crews handle office moves, retail relocations, and small business moves with minimal disruption. We work after hours or on weekends, provide flat-rate quotes, and coordinate with building management for loading dock access. Our Redmond warehouse is 18 miles away for any short-term storage needs during a commercial transition.`,
    buildingCalloutsHeading: "Commercial Move Locations in Covington",
    buildingCallouts: `We serve all commercial locations in Covington: Covington Way commercial corridor (retail and office, good truck access, loading dock coordination), SE 272nd Street businesses (strip mall and standalone retail, standard access), Covington business parks (office and light industrial, HOA coordination may be required), and home offices (full packing and move service, same as residential).`,
    extraFaqs: [
      {
        q: "Can you move a Covington business over a weekend?",
        a: "Yes. We regularly schedule commercial moves on weekends to minimize business disruption. We provide a flat-rate quote and a guaranteed start time.",
      },
      {
        q: "Do you handle retail moves in Covington's commercial corridor?",
        a: "Yes. We handle retail moves in all Covington commercial areas, including coordination with property management for loading dock access and move-in windows.",
      },
    ],
  },

  "covington-storage": {
    intro: `Our secure, climate-controlled storage facility in Redmond is 18 miles from Covington, a 28-minute drive via SR-516 and I-405. Covington residents use our storage during home sales, renovations, and seasonal moves. With Covington's growing residential market, many residents need temporary storage when staging a home for sale or during a renovation. Storage is available month-to-month, contact us for current pricing.`,
    buildingCalloutsHeading: "Storage Options for Covington Residents",
    buildingCallouts: `Our Redmond storage facility serves Covington residents with: climate-controlled units (furniture, electronics, documents, wine, antiques), standard units (tools, outdoor equipment, seasonal items, garage overflow), short-term storage (during home sales or renovations, secure vault storage available), and long-term storage (month-to-month, no long-term contracts required).`,
    extraFaqs: [
      {
        q: "Can you store furniture while I stage my Covington home for sale?",
        a: "Yes. Home staging storage is a common request from Covington residents. We pick up the furniture you want removed, store it in our Redmond facility, and deliver it back after closing. Storage is available month-to-month, contact us for current pricing.",
      },
      {
        q: "How far is your storage from Covington?",
        a: "Our Redmond facility is 18 miles from Covington, a 28-minute drive via SR-516 and I-405. We pick up and deliver on a scheduled basis.",
      },
    ],
  },

  "covington-senior": {
    intro: `Covington's senior community is growing, with many retirees drawn to the community's family-friendly character and newer homes. Moving from a large Covington home to a smaller residence or assisted living requires careful planning and crews who understand the emotional weight of the transition. Our senior moving specialists take extra time, communicate clearly, and handle every item with care. We coordinate with family members, senior communities, and care facilities in Renton, Kent, and Bellevue.`,
    buildingCalloutsHeading: "Senior Move Destinations from Covington",
    buildingCallouts: `We move Covington seniors to destinations throughout the region: Renton senior communities (12 miles, 20 min), Kent senior communities (8 miles, 15 min), Bellevue senior communities (25 miles, 38 min), Maple Valley senior communities (4 miles, 8 min), and in-Covington downsizing (smaller home or cottage in the same community).`,
    extraFaqs: [
      {
        q: "How do you handle a senior move from a Covington home?",
        a: "We start with a detailed walkthrough to understand what's moving, what's being donated, and what family members are taking. We pack room by room, label everything clearly, and take extra care with sentimental items. We coordinate with the destination facility for move-in requirements.",
      },
      {
        q: "Can you help coordinate donation pickups for items a Covington senior isn't taking?",
        a: "Yes. We work with local donation organizations and can coordinate pickup of items you're not taking. We can also help arrange estate sale services for larger volumes of items.",
      },
    ],
  },

  "covington-furniture": {
    intro: `Covington's newer planned-community homes and established neighborhoods often contain substantial furniture, oversized sofas, sectionals, large dining sets, and bedroom suites. Our furniture moving crews bring the right equipment: furniture dollies, stair climbers, moving blankets, and straps. We disassemble and reassemble large pieces, protect hardwood floors and doorframes, and coordinate with HOA management for move-in windows in Covington's planned communities.`,
    buildingCalloutsHeading: "Furniture Moving Challenges in Covington",
    buildingCallouts: `Common furniture moving challenges in Covington: Covington Meadows HOA requirements (COI required, designated windows), large planned-community homes (oversized furniture, wide hallways), Jenkins Creek older homes (narrower doorways, careful maneuvering), garage and outdoor furniture (patio sets, workshop furniture, labeled separately), and Lake Morton properties (standard access, mix of furniture types).`,
    extraFaqs: [
      {
        q: "Can you move oversized sectional sofas in Covington planned communities?",
        a: "Yes. We handle oversized sectionals, large dining sets, and bedroom suites in all Covington planned communities. We assess doorway and staircase dimensions in advance and disassemble pieces that won't fit through standard openings.",
      },
      {
        q: "Do you coordinate with Covington HOA management for furniture deliveries?",
        a: "Yes. We contact HOA management in advance to confirm move-in windows and COI requirements. We arrive within the designated window and follow all HOA rules.",
      },
    ],
  },

  "covington-appliance": {
    intro: `Covington's newer planned-community homes typically have modern appliances, large refrigerators, front-load washers and dryers, and built-in dishwashers. Our appliance moving crews handle all appliance types with the right equipment: appliance dollies, stair climbers, and moving straps. We disconnect and reconnect standard appliances, protect floors and doorframes, and coordinate with HOA management for move-in windows.`,
    buildingCalloutsHeading: "Appliance Moving in Covington",
    buildingCallouts: `We move all standard appliances in Covington homes: refrigerators (French door and standard, floor protection required), washers and dryers (front-load and top-load, disconnect and reconnect), ranges and ovens (gas and electric, standard disconnect), dishwashers (standard disconnect), outdoor appliances (grills, outdoor refrigerators), and garage appliances (chest freezers, workshop refrigerators).`,
    extraFaqs: [
      {
        q: "Do you disconnect and reconnect appliances for Covington moves?",
        a: "We disconnect and reconnect standard appliances (washer/dryer hookups, refrigerator water lines). For gas appliances, we recommend a licensed plumber for the final gas connection. We can refer you to a local plumber if needed.",
      },
      {
        q: "Can you move a large refrigerator in a Covington planned community?",
        a: "Yes. We handle large refrigerators in all Covington planned communities. We protect floors and doorframes throughout and coordinate with HOA management for move-in windows.",
      },
    ],
  },

  "covington-unpacking": {
    intro: `After a Covington move, unpacking can feel overwhelming, especially in a large planned-community home. Our unpacking crews work systematically: we unpack boxes room by room, place furniture where you want it, and remove all packing materials when we're done. For Covington families moving into a new home, we can set up kitchens, make beds, and hang basic items so your new home feels livable from day one.`,
    buildingCalloutsHeading: "Unpacking Services for Covington Homes",
    buildingCallouts: `We offer full unpacking, partial unpacking, and kitchen setup for all Covington home types: Covington Meadows planned community homes (large volume, multiple rooms, full-service unpacking), Jenkins Creek homes (standard unpacking, efficient service), Lake Morton homes (standard unpacking, lake-view properties), Timberlane homes (established neighborhood, standard unpacking), and downsizing moves (selective unpacking, donation coordination).`,
    extraFaqs: [
      {
        q: "Can you set up my kitchen and bedroom after a Covington move?",
        a: "Yes. Our full unpacking service includes kitchen setup, bedroom setup (beds assembled and made, clothing hung), and bathroom setup. We remove all packing materials when we're done.",
      },
      {
        q: "How long does unpacking take for a Covington home?",
        a: "A 3-bedroom Covington home typically takes 5–8 hours to fully unpack. Larger homes take longer. We provide a time estimate when you book.",
      },
    ],
  },

  "covington-warehousing": {
    intro: `Our Redmond warehouse serves Covington businesses and residents needing short- or long-term warehousing. Located 18 miles from Covington via SR-516 and I-405, our facility offers climate-controlled and standard storage bays, receiving and inventory management, and last-mile delivery back to Covington. Businesses along Covington Way and homeowners in transition use our warehousing services regularly.`,
    buildingCalloutsHeading: "Warehousing Services for Covington",
    buildingCallouts: `Our Redmond warehouse provides: climate-controlled storage (furniture, electronics, documents, wine, antiques), standard storage bays (tools, equipment, business inventory), receiving and inventory management (accept deliveries on your behalf, maintain inventory log), last-mile delivery to Covington (scheduled delivery back to your Covington property or business), and flexible access (schedule access appointments, monthly inventory reports).`,
    extraFaqs: [
      {
        q: "Can you store business inventory for a Covington small business?",
        a: "Yes. We store business inventory, office furniture, and equipment for Covington businesses. We provide monthly inventory reports and can deliver items back to your Covington location on a scheduled basis.",
      },
      {
        q: "How far is your warehouse from Covington?",
        a: "Our Redmond warehouse is 18 miles from Covington, a 28-minute drive via SR-516 and I-405. We pick up from your Covington location and deliver back when you're ready.",
      },
    ],
  },

// ===================================================================
// MEDINA
// ===================================================================

  "medina-residential": {
    intro: `Medina is one of the most exclusive communities on the Eastside, home to large waterfront estates, gated properties, and high-value residences that demand the highest level of care. Our crews have been serving Medina residents since 2009, with crews trained in the specific requirements of luxury home moves, from oversized furniture and art collections to gated entries and long driveways. Medina Park, Evergreen Point, and the Overlake Golf Club area each have distinct access requirements that our crews know well. Our Redmond warehouse is just 8 miles away, a 14-minute drive.`,
    buildingCalloutsHeading: "Medina Neighborhoods We Know Best",
    buildingCallouts: `Our residential crews serve all Medina neighborhoods: Medina Park (established luxury residential, gated entries, large lots), Evergreen Point (waterfront estates, limited truck access near lake, advance coordination required), Overlake Golf Club area (large estates, long driveways, standard truck access), Medina Beach (waterfront properties, multiple levels, narrow staircases), and Hunt's Point adjacent (ultra-high-value properties, maximum care protocols).`,
    extraFaqs: [
      {
        q: "How do you handle gated entry access for Medina moves?",
        a: "We coordinate gate access with your property manager or HOA in advance. Just provide us with the gate code or contact information when you book. We arrive at the scheduled time and follow all community protocols.",
      },
      {
        q: "What does a residential move in Medina typically cost?",
        a: "Medina moves typically run $140–$180 per hour for a 2-person crew. Most 3-bedroom estate moves cost $1,400–$2,500. We provide flat-rate quotes after reviewing your specific move requirements, including access logistics and high-value item inventory.",
      },
    ],
  },

  "medina-apartment": {
    intro: `Medina has very few apartment buildings, the community is primarily single-family estates and luxury homes. Most apartment moves involving Medina are from high-end apartments in Bellevue or Kirkland to a Medina estate, or from Medina to a luxury apartment in Seattle or Bellevue. Our crews manage elevator reservations and COI requirements at apartment buildings and gated entry coordination at Medina properties. We bring white-glove handling protocols for all Medina moves, regardless of origin.`,
    buildingCalloutsHeading: "Apartment Move Logistics for Medina",
    buildingCallouts: `Most apartment moves to or from Medina originate in nearby luxury buildings: Bellevue (8 miles, 14 min via SR-520), Kirkland (6 miles, 12 min via 84th Ave NE), Seattle (10 miles, 18 min via SR-520), and Redmond (8 miles, 14 min via SR-520). We coordinate elevator reservations and COI requirements at the origin apartment and gated entry coordination at the Medina destination.`,
    extraFaqs: [
      {
        q: "Can you move me from a Bellevue luxury apartment to a Medina estate?",
        a: "Yes, this is a common move for us. We handle elevator reservations and COI requirements at the Bellevue apartment, then manage gated entry and long driveway logistics at your Medina estate. We bring white-glove handling protocols for all high-value items.",
      },
      {
        q: "Are there any apartments in Medina itself?",
        a: "Medina has very limited apartment inventory. The community is primarily single-family estates and luxury homes. If you're looking for apartments near Medina, Bellevue and Kirkland have extensive luxury apartment options.",
      },
    ],
  },

  "medina-packing": {
    intro: `Packing a Medina estate requires a different level of care than a standard residential move. Our Medina packing specialists bring custom wrapping materials, specialty boxes for art and antiques, wine packing supplies, and the expertise to protect irreplaceable items. We inventory high-value items before packing, use custom crating for oversized art and sculptures, and label everything with a detailed manifest. For Medina clients with extensive art collections or wine cellars, we provide a dedicated packing team and a pre-move consultation.`,
    buildingCalloutsHeading: "Specialty Packing for Medina Estates",
    buildingCallouts: `We offer specialty packing services for all Medina property types: art and sculpture (custom crating, acid-free wrapping, detailed inventory), wine collections (specialty wine boxes, temperature-aware transport, cellar inventory), antiques and heirlooms (custom wrapping, extra padding, white-glove handling), oversized furniture (custom blanket wrapping, disassembly as needed), and standard household goods (full-service packing, room-by-room labeling).`,
    extraFaqs: [
      {
        q: "Do you pack art collections and wine cellars for Medina estates?",
        a: "Yes. We have experience packing extensive art collections and wine cellars. We provide a pre-move consultation to inventory and assess each item, then use appropriate packing materials, custom crating for large art, specialty wine boxes, and acid-free wrapping for antiques.",
      },
      {
        q: "How much does packing service cost for a Medina estate?",
        a: "Packing for a Medina estate varies significantly based on the volume and type of items. A 4-bedroom estate typically adds $1,000–$2,500 to the move cost. We provide an itemized quote after a pre-move consultation.",
      },
    ],
  },

  "medina-commercial": {
    intro: `Medina has very limited commercial development, primarily home offices and a handful of small professional services. Our commercial crews handle home office moves, small professional office relocations, and corporate relocation services for Medina residents. For executives relocating to or from Medina, we offer white-glove corporate relocation services including full packing, storage, and coordinated delivery. Our Redmond warehouse is 8 miles away for any short-term storage needs.`,
    buildingCalloutsHeading: "Commercial Move Services for Medina",
    buildingCallouts: `We serve all commercial needs in Medina: home offices (full packing and move service, white-glove handling for high-value equipment), corporate relocation (executive moves to/from Medina, full-service packing and storage), small professional offices (standard commercial move, after-hours scheduling available), and estate office contents (art, antiques, high-value equipment from estate offices).`,
    extraFaqs: [
      {
        q: "Do you handle corporate relocation for executives moving to Medina?",
        a: "Yes. We offer white-glove corporate relocation services for executives moving to or from Medina. This includes full packing, storage, coordinated delivery, and unpacking. We work with corporate HR departments and relocation management companies.",
      },
      {
        q: "Can you move a home office in a Medina estate?",
        a: "Yes. We move home offices in Medina estates with the same white-glove care we bring to the rest of the estate. We handle high-value electronics, artwork, and custom furniture with appropriate protection.",
      },
    ],
  },

  "medina-storage": {
    intro: `Our secure, climate-controlled storage facility in Redmond is 8 miles from Medina, a 14-minute drive via SR-520. Medina residents use our storage during estate renovations, home sales, and international relocations. For high-value furniture, art, and antiques, our climate-controlled units provide the right environment. We provide detailed inventory management, monthly reports, and white-glove pickup and delivery. Storage is available month-to-month, contact us for current pricing.`,
    buildingCalloutsHeading: "Storage Options for Medina Residents",
    buildingCallouts: `Our Redmond storage facility serves Medina residents with: climate-controlled units (furniture, electronics, art, antiques, wine, high-value items), secure access (24-hour security, access by appointment), detailed inventory management (itemized inventory, monthly reports, photo documentation available), white-glove pickup and delivery (Medina to Redmond and back, scheduled service), and short-term storage (during renovations or home sales, secure vault storage available).`,
    extraFaqs: [
      {
        q: "Can you store high-value art and antiques from a Medina estate?",
        a: "Yes. Our climate-controlled units are appropriate for high-value art, antiques, and furniture. We provide detailed inventory management with photos and monthly reports. For extremely high-value items, we recommend consulting with your insurance provider about coverage during storage.",
      },
      {
        q: "How far is your storage from Medina?",
        a: "Our Redmond facility is 8 miles from Medina, a 14-minute drive via SR-520. We provide white-glove pickup and delivery service on a scheduled basis.",
      },
    ],
  },

  "medina-senior": {
    intro: `Medina's senior community includes long-time residents who have lived in their estates for decades, often with extensive collections of art, antiques, and heirlooms. Moving from a Medina estate to a smaller residence or assisted living requires exceptional care, discretion, and crews who understand the emotional weight of leaving a longtime luxury home. Our senior moving specialists take extra time, communicate clearly, and handle every item with white-glove care. We coordinate with family members, estate attorneys, and senior communities throughout the Eastside.`,
    buildingCalloutsHeading: "Senior Move Destinations from Medina",
    buildingCallouts: `We move Medina seniors to destinations throughout the region: Bellevue luxury senior communities (8 miles, 14 min), Kirkland senior communities (6 miles, 12 min), Seattle luxury senior communities (10 miles, 18 min), Redmond senior communities (8 miles, 14 min), and in-Medina or Eastside downsizing (smaller luxury home or estate cottage).`,
    extraFaqs: [
      {
        q: "How do you handle a senior move from a longtime Medina estate?",
        a: "We start with a detailed walkthrough and inventory to understand what's moving, what's going to family members, and what's being donated or sold. We pack room by room with white-glove care, coordinate with estate attorneys if needed, and take extra care with sentimental items. We coordinate with the destination facility for move-in requirements.",
      },
      {
        q: "Can you help coordinate donation or auction of items a Medina senior isn't taking?",
        a: "Yes. We work with estate sale companies, auction houses, and donation organizations familiar with high-value items. We can coordinate pickup and provide an inventory of items being donated or sold.",
      },
    ],
  },

  "medina-furniture": {
    intro: `Medina estates contain some of the most valuable furniture on the Eastside, custom pieces, antiques, designer furniture, and oversized items that require exceptional care. Our furniture moving specialists bring custom wrapping materials, extra padding, furniture dollies, and stair climbers. We disassemble and reassemble large pieces, protect hardwood floors and doorframes, and navigate gated entries and long driveways. For irreplaceable antique or custom furniture, we provide a pre-move assessment and custom protection plan.`,
    buildingCalloutsHeading: "Furniture Moving Challenges in Medina",
    buildingCallouts: `Common furniture moving challenges in Medina: gated entries (advance coordination required, gate code or contact information needed), long driveways (right-sized truck selection, careful maneuvering), waterfront homes (multiple levels, narrow staircases, limited staging space), high-value antique furniture (custom wrapping, extra padding, white-glove handling), and oversized custom pieces (disassembly assessment, custom protection plan).`,
    extraFaqs: [
      {
        q: "How do you protect high-value antique furniture during a Medina move?",
        a: "We use custom wrapping materials, extra padding, and white-glove handling for all high-value antique furniture. We conduct a pre-move assessment of each piece and create a custom protection plan. For irreplaceable items, we recommend consulting with your insurance provider about coverage during the move.",
      },
      {
        q: "Can you move oversized custom furniture through narrow Medina waterfront staircases?",
        a: "Yes. We assess staircase dimensions and doorway widths in advance. For pieces that won't fit through standard openings, we disassemble and reassemble on-site. We protect all surfaces throughout the process.",
      },
    ],
  },

  "medina-appliance": {
    intro: `Medina estates often feature high-end appliances, Sub-Zero refrigerators, Wolf ranges, Miele dishwashers, and custom wine coolers. Our appliance moving crews handle all appliance types with the right equipment and the care these premium appliances deserve. We disconnect and reconnect standard appliances, protect custom cabinetry and flooring, and coordinate with appliance technicians for complex installations. For Medina estates with outdoor kitchens, we also move high-end outdoor appliances.`,
    buildingCalloutsHeading: "Appliance Moving in Medina",
    buildingCallouts: `We move all appliance types in Medina estates: high-end refrigerators (Sub-Zero, French door, built-in, floor and cabinetry protection required), professional ranges (Wolf, Viking, gas and electric, standard disconnect), dishwashers (Miele, Bosch, standard disconnect), wine coolers and wine cellars (temperature-aware transport, careful handling), outdoor appliances (outdoor refrigerators, grills, outdoor kitchen equipment), and laundry appliances (front-load, stacked, disconnect and reconnect).`,
    extraFaqs: [
      {
        q: "Do you move Sub-Zero refrigerators and Wolf ranges in Medina estates?",
        a: "Yes. We handle high-end appliances including Sub-Zero, Wolf, Viking, Miele, and other premium brands. We use appropriate equipment and protection for each appliance type. For complex installations, we recommend coordinating with a certified appliance technician for the final hookup.",
      },
      {
        q: "Can you move a wine cellar from a Medina estate?",
        a: "Yes. We move wine coolers and wine cellar contents with temperature-aware transport and careful handling. We recommend emptying wine storage 24 hours before the move and keeping wine in a temperature-controlled environment during transport.",
      },
    ],
  },

  "medina-unpacking": {
    intro: `After a Medina estate move, unpacking requires the same white-glove care as the move itself. Our unpacking specialists work systematically: we unpack boxes room by room, place furniture and art where you want them, and remove all packing materials when we're done. For Medina clients, we can set up kitchens, arrange art, make beds, and organize closets so your new home feels like home from day one. We leave your estate immaculate, with all boxes broken down and removed.`,
    buildingCalloutsHeading: "Unpacking Services for Medina Estates",
    buildingCallouts: `We offer full unpacking, partial unpacking, and room setup for all Medina property types: estate homes (large volume, multiple rooms, art placement, full-service unpacking), waterfront properties (careful unpacking on multiple levels, art and antique placement), downsizing moves (selective unpacking, coordination with estate sale company for excess items), and senior moves (full setup including kitchen, bedroom, bathroom, and art placement).`,
    extraFaqs: [
      {
        q: "Can you arrange art and place high-value furniture after a Medina move?",
        a: "Yes. Our full unpacking service includes furniture placement and basic art arrangement. For complex art installations (hanging large pieces, gallery walls), we recommend coordinating with an art installer. We can refer you to trusted art installation services in the area.",
      },
      {
        q: "How long does unpacking take for a Medina estate?",
        a: "A 4-bedroom Medina estate typically takes 8–12 hours to fully unpack, depending on the volume and type of items. We provide a time estimate after reviewing your specific move. For large estates, we can provide a multi-day unpacking service.",
      },
    ],
  },

  "medina-warehousing": {
    intro: `Our Redmond warehouse serves Medina residents needing short- or long-term warehousing for high-value items. Located 8 miles from Medina via SR-520, our climate-controlled facility provides secure storage for furniture, art, antiques, wine, and other valuables during estate renovations, international relocations, or home sales. We provide detailed inventory management, monthly reports, and white-glove pickup and delivery. For Medina clients, we offer dedicated storage bays with enhanced security protocols.`,
    buildingCalloutsHeading: "Warehousing Services for Medina",
    buildingCallouts: `Our Redmond warehouse provides for Medina clients: climate-controlled storage (furniture, art, antiques, wine, high-value electronics), enhanced security protocols (24-hour security, access by appointment only), detailed inventory management (itemized inventory, photo documentation, monthly reports), white-glove pickup and delivery (Medina to Redmond and back, scheduled service), and flexible duration (short-term during renovations, long-term for international relocations).`,
    extraFaqs: [
      {
        q: "Can you store high-value art and antiques from a Medina estate during a renovation?",
        a: "Yes. Our climate-controlled units are appropriate for high-value art, antiques, and furniture during estate renovations. We provide detailed inventory management with photos and monthly reports. We recommend consulting with your insurance provider about coverage during storage.",
      },
      {
        q: "Do you offer warehousing for Medina residents relocating internationally?",
        a: "Yes. We offer long-term warehousing for Medina residents relocating internationally. We store your items securely, provide monthly inventory reports, and coordinate delivery back to Medina or to your new location when you return.",
      },
    ],
  },
// ===================================================================
// BALLARD
// ===================================================================

  "ballard-residential": {
    intro: `Ballard is one of Seattle's fastest-growing neighborhoods, with a mix of historic craftsman homes, newer townhomes, and mid-rise condos along its main corridors. Our crews have been moving Ballard residents since 2009 and know every block's quirks, from the overhead utility lines on 24th Ave NW to the limited truck parking along NW Market Street. Many Ballard craftsman homes have narrow doorways (28–30 inches) and tight staircases that require disassembly of larger furniture pieces. Our Redmond warehouse is 14 miles east, a 22-minute drive, keeping us highly responsive for Ballard residential moves.`,
    buildingCalloutsHeading: "Ballard Neighborhoods & Communities We Serve",
    buildingCallouts: `**Old Ballard / Historic Core**, The blocks around Ballard Ave NW and NW Market St feature the oldest craftsman homes in the neighborhood. Truck parking requires SDOT temporary no-parking permits on most streets. **Sunset Hill**, Elevated residential area with stunning Sound views. Streets are generally accessible but have steep grades near the bluff. **Crown Hill**, Quieter residential area north of 85th St with good truck access and newer housing stock. **Loyal Heights**, Family-friendly area with a mix of craftsman bungalows and newer construction. **Shilshole**, Waterfront area near the marina with some access restrictions during peak marina season.`,
    extraFaqs: [
      {
        q: "Do you handle SDOT parking permits for Ballard residential moves?",
        a: "Yes. Most moves along NW Market Street and the Old Ballard core require a temporary no-parking permit from SDOT. We assist with the application process, permit fees are passed through at cost, typically $50–$100.",
      },
      {
        q: "Can you move furniture through Ballard's narrow craftsman doorways?",
        a: "Yes. Our crews are trained to disassemble and reassemble large furniture pieces, bed frames, sectional sofas, wardrobes, that won't fit through standard 28–30 inch craftsman doorways. We bring the tools and hardware to handle this on every move.",
      },
    ],
    pricingNote: "Ballard residential moves typically run $125–$165/hr for a 2-person crew. A 1-bedroom craftsman home usually takes 3–4 hours ($375–$660). A 3-bedroom home typically runs 6–9 hours ($750–$1,485). Flat-rate quotes available.",
  },

  "ballard-apartment": {
    intro: `Ballard's apartment market spans everything from vintage walk-up buildings in Old Ballard to modern mid-rise towers along the Leary Way corridor. Our crews have moved hundreds of Ballard apartment residents and know the building-specific quirks, which buildings have freight elevators, which require stair carries, and which have loading dock time windows. Many Ballard apartment buildings were built before 1970 and have no service elevator, making stair carries standard. We bring stair rollers, furniture dollies, and the right crew size to handle any Ballard apartment building efficiently.`,
    buildingCalloutsHeading: "Ballard Apartment Buildings We Frequently Serve",
    buildingCallouts: `**Ballard Landmark** (5555 Leary Ave NW), Modern mid-rise with freight elevator access. Loading dock on the alley side. **The Lyric** (2222 NW Market St), Mixed-use building with resident elevator and street-level loading. Parking permits required on NW Market St. **Ballard Vue** (1420 NW 56th St), Older walk-up building, no elevator, stair carries required. **Vik's Flats** (5400 Leary Ave NW), Newer construction with loading zone. **Vintage Ballard Walk-Ups**, Dozens of pre-1970 buildings throughout Old Ballard with no elevator and narrow stairwells.`,
    extraFaqs: [
      {
        q: "Do Ballard apartment buildings require elevator reservations?",
        a: "Most older Ballard apartment buildings have no elevator at all. Newer mid-rise buildings typically require elevator reservations made 48–72 hours in advance. We coordinate directly with your building management to secure the reservation.",
      },
      {
        q: "How do you handle stair carries in Ballard walk-up buildings?",
        a: "We bring stair rollers, furniture straps, and the right crew size for stair carry jobs. For buildings with more than 3 floors, we recommend a 3-person crew to maintain safe carry speeds and protect your furniture.",
      },
    ],
    pricingNote: "Ballard apartment moves typically run $125–$165/hr for a 2-person crew. A studio apartment usually takes 2–3 hours ($250–$495). A 1-bedroom apartment typically runs 3–4 hours ($375–$660). Stair carry surcharges may apply for buildings above 3 floors.",
  },

  "ballard-packing": {
    intro: `Ballard's dense residential mix, craftsman homes, vintage apartments, and modern condos, creates a wide variety of packing challenges. Our professional packing crews have packed thousands of Ballard homes and know how to handle everything from antique craftsman-era furniture to modern tech setups. We use double-walled boxes, acid-free tissue for artwork, and custom crating for fragile items. For Ballard's many vintage homes, we take extra care with antique mirrors, period furniture, and original artwork that often accompanies older homes in the neighborhood.`,
    buildingCalloutsHeading: "Packing Services for Ballard's Unique Housing Stock",
    buildingCallouts: `**Craftsman Home Packing**, Ballard's craftsman homes often contain antique furniture, vintage artwork, and period pieces that require specialized packing. We use custom crating and acid-free materials for fragile items. **Apartment Packing**, For Ballard's many apartment residents, we offer full-pack, partial-pack, and kitchen-only packing services. **Condo Packing**, Modern Ballard condos often have large-format art, wine collections, and high-end electronics that require careful packing. **Unpacking Services**, We also offer full unpacking and setup at your new Ballard or destination home.`,
    extraFaqs: [
      {
        q: "Do you pack antique and vintage furniture for Ballard moves?",
        a: "Yes. We have experience packing antique furniture, vintage mirrors, and period pieces common in Ballard's older craftsman homes. We use custom crating, furniture blankets, and acid-free materials to protect valuable items.",
      },
      {
        q: "How much does professional packing cost in Ballard?",
        a: "Packing costs depend on the volume of items. A 1-bedroom apartment typically runs $200–$400 for materials and labor. A 3-bedroom craftsman home usually costs $600–$1,200. We provide exact quotes after a free in-home assessment.",
      },
    ],
    pricingNote: "Ballard packing services run $45–$65/hr per packer plus materials. A 1-bedroom apartment typically costs $200–$400 all-in. A 3-bedroom home usually runs $600–$1,200. Full-pack, partial-pack, and kitchen-only options available.",
  },

  "ballard-commercial": {
    intro: `Ballard has one of Seattle's most vibrant small business communities, with a concentration of restaurants, boutiques, tech offices, and creative studios along Ballard Ave NW, NW Market Street, and the Leary Way corridor. Our commercial moving crews have relocated dozens of Ballard businesses, from restaurant kitchen equipment to tech office buildouts. We work after-hours and on weekends to minimize disruption to your business operations, and we coordinate with building management for loading dock access and elevator reservations.`,
    buildingCalloutsHeading: "Ballard Commercial Districts We Serve",
    buildingCallouts: `**Ballard Ave NW Historic District**, Boutiques, restaurants, and creative studios in Ballard's historic commercial core. Limited loading access requires careful scheduling. **NW Market Street Corridor**, Mixed retail and office space with SDOT parking permit requirements for loading. **Leary Way Corridor**, Light industrial, tech offices, and mixed-use commercial space with better truck access. **Shilshole Industrial Area**, Marine industry businesses and warehouses near the marina with good truck access.`,
    extraFaqs: [
      {
        q: "Do you move restaurant equipment in Ballard?",
        a: "Yes. We move commercial kitchen equipment including ranges, refrigeration units, hood systems, and prep tables. We coordinate with your kitchen equipment vendor for disconnection and reconnection as needed.",
      },
      {
        q: "Can you move a Ballard office over a weekend?",
        a: "Yes. Weekend and after-hours moves are our most common commercial move type. We work Friday evening through Sunday to have your office fully operational by Monday morning.",
      },
    ],
    pricingNote: "Ballard commercial moves are priced by scope. Small office moves (under 10 workstations) typically run $800–$1,500. Restaurant equipment moves are quoted individually based on equipment volume and complexity. Free on-site quotes available.",
  },

  "ballard-storage": {
    intro: `Ballard residents frequently need storage during the neighborhood's active real estate market, whether bridging a gap between a home sale and purchase, staging a craftsman home for sale, or managing the overflow from a downsizing move. On The Go Moving & Storage offers climate-controlled storage at our Redmond facility, just 14 miles from Ballard. We pick up from your Ballard home, store your items securely, and deliver to your new location when you're ready, no second truck rental needed.`,
    buildingCalloutsHeading: "Storage Solutions for Ballard Residents",
    buildingCallouts: `**Home Sale Bridge Storage**, Ballard's competitive real estate market often requires sellers to clear out furniture for staging. We store your items during the sale and deliver to your new home after closing. **Renovation Storage**, Ballard craftsman homes are frequently renovated. We store furniture and belongings while your kitchen, bathroom, or addition is under construction. **Downsizing Storage**, Many Ballard residents downsizing from larger craftsman homes to condos need temporary storage while deciding what to keep. **Long-Term Storage**, Month-to-month climate-controlled storage at our Redmond facility for Ballard residents needing extended storage.`,
    extraFaqs: [
      {
        q: "How far is your storage facility from Ballard?",
        a: "Our climate-controlled storage facility is in Redmond, 14 miles from Ballard, a 22-minute drive. We pick up from your Ballard home and deliver to your new location, so you never need to visit the facility.",
      },
      {
        q: "Do you offer staging storage for Ballard home sales?",
        a: "Yes. We work with Ballard homeowners and real estate agents to clear furniture for home staging. We store your items during the sale and deliver to your new home after closing. Short-term rates available.",
      },
    ],
    pricingNote: "Ballard storage vault rental starts at $100/month per vault at our Redmond facility. Oversized items: $80/month. Short-term storage: $200/day. Pick-up and delivery from Ballard available. Month-to-month contracts with no long-term commitment.",
  },

  "ballard-senior": {
    intro: `Ballard has a significant senior population, particularly in the older craftsman neighborhoods and in senior living communities near the neighborhood core. Our senior moving specialists understand the emotional and physical complexity of a senior move, whether it's downsizing from a longtime Ballard craftsman home, transitioning to an assisted living community, or relocating closer to family. We work at a pace that's comfortable for you, handle all the heavy lifting, and treat every item with the care it deserves.`,
    buildingCalloutsHeading: "Senior Living Communities Near Ballard We Serve",
    buildingCallouts: `**Sunrise of Ballard** (1545 NW 57th St), Assisted living and memory care community in the heart of Ballard. We coordinate move-in logistics with Sunrise staff. **Merrill Gardens at Ballard** (5450 Leary Ave NW), Independent and assisted living. We handle full-service moves including packing, transport, and setup. **Aegis Living Ballard**, Memory care community. We work with families to manage the move with sensitivity and care. **Crown Hill Senior Residences**, Independent senior apartments in the Crown Hill area north of Ballard.`,
    extraFaqs: [
      {
        q: "Do you help seniors downsize from Ballard craftsman homes?",
        a: "Yes. We offer full downsizing support, helping sort items for donation, storage, and the new home. We work at your pace, handle all the packing and moving, and coordinate donation pickups for items you're not keeping.",
      },
      {
        q: "Do you coordinate with Ballard assisted living communities?",
        a: "Yes. We have experience moving residents into Sunrise of Ballard, Merrill Gardens, and Aegis Living. We coordinate move-in windows with community staff and work within their building access requirements.",
      },
    ],
    pricingNote: "Senior moves in Ballard are priced by scope. A downsizing move from a 2-bedroom craftsman to a 1-bedroom senior apartment typically runs $600–$1,200 including packing. Full-service senior moves with packing, transport, and setup available.",
  },

  "ballard-furniture": {
    intro: `Ballard's housing stock presents some of Seattle's most challenging furniture moving scenarios, narrow craftsman doorways, steep staircases, and tight hallways that require experienced crews and the right equipment. Our furniture moving specialists have navigated hundreds of Ballard homes and know exactly how to handle a sectional sofa through a 28-inch doorway, a king bed frame up a craftsman staircase, or a vintage armoire through a tight hallway. We bring furniture dollies, stair rollers, moving straps, and disassembly tools on every Ballard furniture move.`,
    buildingCalloutsHeading: "Furniture Moving Challenges in Ballard",
    buildingCallouts: `**Craftsman Home Furniture**, Ballard's craftsman homes have 28–30 inch doorways and steep staircases that often require furniture disassembly. We bring the tools and expertise to handle any piece. **Condo Furniture**, Modern Ballard condos often have large sectionals, king beds, and oversized furniture that require careful maneuvering through hallways and elevator doors. **Vintage & Antique Furniture**, Many Ballard craftsman homes contain antique and vintage furniture that requires extra care. We use furniture blankets, custom padding, and careful handling for valuable pieces. **Piano Moving**, We move upright and baby grand pianos throughout Ballard, including up and down craftsman staircases.`,
    extraFaqs: [
      {
        q: "Can you move large furniture through Ballard craftsman doorways?",
        a: "Yes. We disassemble and reassemble large furniture pieces, sectional sofas, king bed frames, wardrobes, bookshelves, that won't fit through standard craftsman doorways. We bring all necessary tools and hardware.",
      },
      {
        q: "Do you move pianos in Ballard?",
        a: "Yes. We move upright pianos, baby grands, and grand pianos throughout Ballard. Piano moves require specialized equipment and trained crews, we have both. We also move pianos up and down Ballard's craftsman staircases.",
      },
    ],
    pricingNote: "Furniture-only moves in Ballard start at $185/hr for a 2-person crew with a 2-hour minimum. Piano moves are quoted separately based on piano type and access. Disassembly and reassembly included at no extra charge.",
  },

  "ballard-appliance": {
    intro: `Moving appliances in Ballard requires navigating the neighborhood's narrow craftsman doorways, steep staircases, and tight kitchen layouts. Our appliance moving crews handle refrigerators, washers, dryers, ranges, and dishwashers throughout Ballard, including in the older craftsman homes where appliances must be carefully angled through tight spaces. We disconnect and reconnect standard appliances, protect your floors with Masonite boards, and handle all the heavy lifting so you don't have to.`,
    buildingCalloutsHeading: "Appliance Moving in Ballard Homes",
    buildingCallouts: `**Craftsman Kitchen Appliances**, Older Ballard craftsman homes often have narrow kitchen doorways and tight layouts that make appliance removal challenging. We have the equipment to angle refrigerators and ranges through tight spaces. **Laundry Room Appliances**, Many Ballard craftsman homes have laundry rooms in tight basement spaces or narrow closets. We disconnect and move washers and dryers from any location. **Apartment Appliances**, Ballard apartment buildings often have stacked washer/dryer units and compact refrigerators that require careful handling. **New Construction Appliances**, Modern Ballard condos often have large French door refrigerators and slide-in ranges that require careful installation.`,
    extraFaqs: [
      {
        q: "Do you disconnect and reconnect appliances in Ballard?",
        a: "We disconnect and reconnect standard water, gas, and electrical connections for washers, dryers, refrigerators, and dishwashers. For gas appliances, we work with a licensed plumber if required by local code.",
      },
      {
        q: "Can you move appliances through Ballard craftsman doorways?",
        a: "Yes. We have experience moving full-size refrigerators, ranges, and washers through the narrow 28–30 inch doorways common in Ballard craftsman homes. We use appliance dollies, furniture sliders, and door frame protection on every job.",
      },
    ],
    pricingNote: "Appliance moves in Ballard start at $185/hr for a 2-person crew with a 2-hour minimum. Single appliance moves (e.g., refrigerator only) are available starting at $150. Disconnection/reconnection included for standard connections.",
  },

  "ballard-unpacking": {
    intro: `After a Ballard move, the last thing you want to do is spend days unpacking boxes. Our professional unpacking crews unbox, organize, and set up your new Ballard home, putting dishes in the kitchen, clothes in the closets, and books on the shelves, so you can start enjoying your new space immediately. We work systematically room by room, break down all boxes, and remove all packing materials when we're done. Whether you've moved into a craftsman home in Old Ballard or a new condo on Leary Way, we'll have you settled in faster than you thought possible.`,
    buildingCalloutsHeading: "Unpacking Services for Ballard Homes",
    buildingCallouts: `**Full Unpack**, We unbox and organize every room in your new Ballard home, from kitchen to bedroom to living room. All boxes broken down and packing materials removed. **Partial Unpack**, Choose specific rooms or areas for us to unpack, kitchen and master bedroom are the most popular choices. **Kitchen Setup**, We unpack and organize your kitchen, dishes, cookware, pantry items, and small appliances, so it's fully functional on day one. **Bedroom Setup**, We assemble beds, unpack clothing, and organize closets so you can sleep comfortably your first night.`,
    extraFaqs: [
      {
        q: "How long does unpacking a Ballard home take?",
        a: "A 1-bedroom apartment typically takes 2–3 hours with a 2-person crew. A 3-bedroom craftsman home usually takes 5–8 hours. We provide time estimates after reviewing your move details.",
      },
      {
        q: "Do you remove packing materials after unpacking in Ballard?",
        a: "Yes. We break down all boxes, collect all packing paper and bubble wrap, and remove everything from your new Ballard home. We recycle cardboard boxes and dispose of packing materials responsibly.",
      },
    ],
    pricingNote: "Unpacking services in Ballard run $95–$125/hr per unpacker. A 1-bedroom apartment typically costs $190–$375. A 3-bedroom home usually runs $475–$1,000. Combined move + unpack packages available at a discounted rate.",
  },

  "ballard-warehousing": {
    intro: `Ballard's growing business community, from marine industry suppliers near Shilshole to tech companies along Leary Way, increasingly needs flexible warehousing and distribution solutions. On The Go Moving & Storage offers short-term and long-term warehousing at our Redmond facility, just 14 miles from Ballard. We handle receiving, inventory management, pick-and-pack, and last-mile delivery throughout the greater Seattle area. Our month-to-month contracts give Ballard businesses the flexibility to scale storage up or down as needed.`,
    buildingCalloutsHeading: "Warehousing Solutions for Ballard Businesses",
    buildingCallouts: `**Marine Industry Storage**, Ballard's marine industry businesses need specialized storage for equipment, parts, and seasonal inventory. Our Redmond facility handles oversized and heavy items. **Restaurant & Retail Storage**, Ballard's restaurants and boutiques use our warehousing for seasonal inventory overflow and equipment storage during renovations. **Tech Office Storage**, Ballard's growing tech sector uses our warehousing for IT equipment, office furniture, and archive storage. **E-commerce Fulfillment**, Small Ballard e-commerce businesses use our pick-and-pack services for order fulfillment.`,
    extraFaqs: [
      {
        q: "Do you offer short-term warehousing for Ballard businesses?",
        a: "Yes. All our warehousing contracts are month-to-month, no long-term commitment required. Minimum storage period is 30 days. We can accommodate short-term storage for Ballard businesses during renovations, seasonal inventory peaks, or office transitions.",
      },
      {
        q: "Can you handle receiving and inventory management for Ballard businesses?",
        a: "Yes. We offer receiving, inventory tracking, and reporting for Ballard businesses using our warehousing services. We provide monthly inventory reports and can notify you of low-stock items.",
      },
    ],
    pricingNote: "Warehousing for Ballard businesses starts at $195/month for a 10×10 space at our Redmond facility. Larger spaces and pallet storage available. Pick-and-pack and last-mile delivery services priced separately. Month-to-month contracts.",
  },

// ===================================================================
// CAPITOL HILL
// ===================================================================

  "capitol-hill-residential": {
    intro: `Capitol Hill is one of Seattle's most densely populated neighborhoods, with a mix of Victorian homes, craftsman bungalows, modern apartment towers, and everything in between. Moving in Capitol Hill requires navigating steep hills, limited parking, and dense residential blocks. Our crews have been serving Capitol Hill residents since 2009 and know every block's logistics, from the SDOT permit requirements on Broadway to the steep grades on 10th and 12th Ave. Our Redmond warehouse is 13 miles east, a 21-minute drive.`,
    buildingCalloutsHeading: "Capitol Hill Neighborhoods & Communities We Serve",
    buildingCallouts: `**Broadway Corridor**, Dense mixed-use area with limited truck parking. SDOT temporary no-parking permits required for most moves. **Pike/Pine**, Seattle's most active nightlife corridor. After-hours moves recommended to avoid congestion. **First Hill**, High-rise residential towers near Swedish and Virginia Mason hospitals. Elevator reservations required. **Volunteer Park Area**, Quieter residential streets with better truck access. Victorian homes with narrow doorways. **Squire Park**, Transitional neighborhood with a mix of older homes and newer construction. **Stevens / Montlake Adjacent**, Family-friendly area near the Arboretum with good truck access.`,
    extraFaqs: [
      {
        q: "Do you handle SDOT parking permits for Capitol Hill residential moves?",
        a: "Yes. Most Capitol Hill moves require a temporary no-parking permit from SDOT, especially on Broadway, Pike/Pine, and the main arterials. We assist with the application process. Permit fees are passed through at cost, typically $50–$100.",
      },
      {
        q: "How do you handle Capitol Hill's steep streets?",
        a: "Our drivers are experienced with Capitol Hill's steep grades on 10th, 11th, and 12th Ave. We load trucks properly to prevent shifting on hills, use wheel chocks when parked on slopes, and plan routes to avoid the steepest sections where possible.",
      },
    ],
    pricingNote: "Capitol Hill residential moves typically run $125–$165/hr for a 2-person crew. A 1-bedroom apartment usually takes 3–4 hours ($375–$660). A 3-bedroom Victorian home typically runs 7–10 hours ($875–$1,650). Flat-rate quotes available.",
  },

  "capitol-hill-apartment": {
    intro: `Capitol Hill has one of Seattle's most active apartment markets, ranging from vintage walk-up buildings on Broadway to modern high-rises on First Hill. Our crews have moved hundreds of Capitol Hill apartment residents and know the building-specific requirements, which First Hill towers require elevator reservations, which Broadway walk-ups have no elevator, and which Pike/Pine buildings have loading dock time windows. We coordinate directly with building management to ensure smooth move-in and move-out logistics.`,
    buildingCalloutsHeading: "Capitol Hill Apartment Buildings We Frequently Serve",
    buildingCallouts: `**Olive 8** (1635 8th Ave), Luxury high-rise on First Hill with freight elevator and strict move-in windows. **The Paramount** (724 Pine St), Mixed-use building near Pike/Pine. Loading access from side street. **Capitol Hill Tower** (323 Broadway E), Mid-rise with resident elevator. SDOT permit required for Broadway loading. **Vintage Broadway Walk-Ups**, Dozens of pre-1960 buildings on Broadway and side streets with no elevator and narrow stairwells. **Anhalt Apartments** (1005 E Roy St), Historic 1920s courtyard apartments near Volunteer Park. Stair carries required.`,
    extraFaqs: [
      {
        q: "Do First Hill high-rises require elevator reservations for moves?",
        a: "Yes. First Hill high-rises like Olive 8 and similar towers require elevator reservations made 48–72 hours in advance. We coordinate directly with your building management to secure the reservation and work within your building's move window.",
      },
      {
        q: "How do you handle stair carries in Capitol Hill walk-up buildings?",
        a: "We bring stair rollers, furniture straps, and the right crew size for stair carry jobs. For buildings with more than 3 floors, we recommend a 3-person crew. Most Capitol Hill walk-ups are 3–4 stories.",
      },
    ],
    pricingNote: "Capitol Hill apartment moves typically run $125–$165/hr for a 2-person crew. A studio apartment usually takes 2–3 hours ($250–$495). A 1-bedroom apartment typically runs 3–4 hours ($375–$660). Stair carry surcharges may apply for buildings above 3 floors.",
  },

  "capitol-hill-packing": {
    intro: `Capitol Hill's diverse housing stock, Victorian homes, craftsman bungalows, modern condos, and vintage apartments, creates a wide variety of packing needs. Our professional packing crews have packed thousands of Capitol Hill homes and know how to handle everything from antique Victorian furniture to modern tech setups. We use double-walled boxes, acid-free tissue for artwork, and custom crating for fragile items. Capitol Hill's art-forward community means we frequently pack original artwork, sculptures, and gallery pieces that require specialized handling.`,
    buildingCalloutsHeading: "Packing Services for Capitol Hill's Unique Housing Stock",
    buildingCallouts: `**Victorian Home Packing**, Capitol Hill's Victorian homes often contain antique furniture, original artwork, and period pieces requiring specialized packing. We use custom crating and acid-free materials. **Apartment Packing**, Full-pack, partial-pack, and kitchen-only packing for Capitol Hill's many apartment residents. **Art & Gallery Packing**, Capitol Hill's vibrant arts community means we frequently pack original artwork, sculptures, and gallery collections. **Condo Packing**, Modern Capitol Hill condos often have large-format art, wine collections, and high-end electronics requiring careful packing.`,
    extraFaqs: [
      {
        q: "Do you pack original artwork and sculptures for Capitol Hill moves?",
        a: "Yes. We have experience packing original artwork, framed pieces, sculptures, and gallery collections common in Capitol Hill's arts community. We use custom crating, acid-free tissue, and foam padding for valuable pieces.",
      },
      {
        q: "How much does professional packing cost in Capitol Hill?",
        a: "Packing costs depend on volume. A 1-bedroom apartment typically runs $200–$400 for materials and labor. A 3-bedroom Victorian home usually costs $700–$1,400. We provide exact quotes after a free in-home assessment.",
      },
    ],
    pricingNote: "Capitol Hill packing services run $45–$65/hr per packer plus materials. A 1-bedroom apartment typically costs $200–$400 all-in. A 3-bedroom Victorian home usually runs $700–$1,400. Full-pack, partial-pack, and kitchen-only options available.",
  },

  "capitol-hill-commercial": {
    intro: `Capitol Hill's commercial landscape spans tech companies, creative agencies, restaurants, retail boutiques, and medical offices near First Hill's hospital cluster. Our commercial moving crews have relocated dozens of Capitol Hill businesses, from Pike/Pine restaurant equipment to First Hill medical offices. We work after-hours and on weekends to minimize business disruption, and we coordinate with building management for loading dock access, elevator reservations, and SDOT parking permits.`,
    buildingCalloutsHeading: "Capitol Hill Commercial Districts We Serve",
    buildingCallouts: `**Pike/Pine Corridor**, Restaurants, bars, boutiques, and creative agencies. After-hours moves recommended. Limited loading access requires SDOT permits. **Broadway Commercial Core**, Retail and service businesses along Broadway. SDOT permits required for loading. **First Hill Medical District**, Medical offices near Swedish, Virginia Mason, and Harborview. Elevator reservations required in most buildings. **Cal Anderson Park Area**, Creative studios, galleries, and small offices in the residential core.`,
    extraFaqs: [
      {
        q: "Do you move medical offices in Capitol Hill's First Hill district?",
        a: "Yes. We have experience moving medical offices near Swedish Medical Center, Virginia Mason, and Harborview. We handle sensitive medical equipment, patient records (in secure containers), and office furniture. We coordinate elevator reservations with building management.",
      },
      {
        q: "Can you move a Capitol Hill restaurant over a weekend?",
        a: "Yes. Weekend and after-hours moves are our most common commercial move type in Capitol Hill. We work Friday evening through Sunday to have your restaurant or business fully operational by Monday morning.",
      },
    ],
    pricingNote: "Capitol Hill commercial moves are priced by scope. Small office moves (under 10 workstations) typically run $800–$1,500. Restaurant equipment moves are quoted individually. Medical office moves quoted based on equipment volume and sensitivity. Free on-site quotes available.",
  },

  "capitol-hill-storage": {
    intro: `Capitol Hill's dense housing market and active real estate scene create frequent storage needs, from home staging during a sale to bridging the gap between a lease end and a new home closing. On The Go Moving & Storage offers climate-controlled storage at our Redmond facility, just 13 miles from Capitol Hill. We pick up from your Capitol Hill home or apartment, store your items securely, and deliver to your new location when you're ready.`,
    buildingCalloutsHeading: "Storage Solutions for Capitol Hill Residents",
    buildingCallouts: `**Home Sale Bridge Storage**, Capitol Hill's competitive real estate market often requires sellers to clear furniture for staging. We store your items during the sale and deliver to your new home after closing. **Apartment Transition Storage**, When your lease ends before your new place is ready, we bridge the gap with short-term storage. **Renovation Storage**, Capitol Hill Victorian homes are frequently renovated. We store furniture during kitchen, bathroom, or addition projects. **Long-Term Storage**, Month-to-month climate-controlled storage for Capitol Hill residents needing extended storage.`,
    extraFaqs: [
      {
        q: "How far is your storage facility from Capitol Hill?",
        a: "Our climate-controlled storage facility is in Redmond, 13 miles from Capitol Hill, a 21-minute drive. We pick up from your Capitol Hill home and deliver to your new location, so you never need to visit the facility.",
      },
      {
        q: "Do you offer short-term storage for Capitol Hill apartment transitions?",
        a: "Yes. We offer month-to-month storage with no minimum commitment beyond 30 days. This is ideal for Capitol Hill renters who need to vacate before their new place is ready.",
      },
    ],
    pricingNote: "Capitol Hill storage vault rental starts at $100/month per vault at our Redmond facility. Oversized items: $80/month. Short-term storage: $200/day. Pick-up and delivery from Capitol Hill available. Month-to-month contracts with no long-term commitment.",
  },

  "capitol-hill-senior": {
    intro: `Capitol Hill has several senior living communities serving the neighborhood's long-term residents who are ready to downsize from their Victorian homes or apartments. Our senior moving specialists understand the emotional weight of leaving a longtime Capitol Hill home, whether it's a craftsman bungalow near Volunteer Park or a vintage apartment on Broadway. We work at a comfortable pace, handle all the packing and heavy lifting, and treat every item with the care it deserves.`,
    buildingCalloutsHeading: "Senior Living Communities Near Capitol Hill We Serve",
    buildingCallouts: `**Horizon House** (900 University St, First Hill), Continuing care retirement community on First Hill. We coordinate move-in logistics with Horizon House staff. **Emerald City Senior Living**, Independent and assisted living near Capitol Hill. We handle full-service moves including packing, transport, and setup. **First Hill Senior Residences**, Several senior apartment buildings near the hospital district. We work within building move-in windows. **Aging in Place**, Many Capitol Hill seniors prefer to stay in their Victorian homes. We help with furniture rearrangement and downsizing within the home.`,
    extraFaqs: [
      {
        q: "Do you help seniors downsize from Capitol Hill Victorian homes?",
        a: "Yes. We offer full downsizing support, helping sort items for donation, storage, and the new home. We work at your pace, handle all packing and moving, and coordinate donation pickups for items you're not keeping.",
      },
      {
        q: "Do you coordinate with Capitol Hill senior living communities?",
        a: "Yes. We have experience moving residents into Horizon House and other First Hill senior communities. We coordinate move-in windows with community staff and work within their building access requirements.",
      },
    ],
    pricingNote: "Senior moves in Capitol Hill are priced by scope. A downsizing move from a 2-bedroom Victorian to a 1-bedroom senior apartment typically runs $700–$1,400 including packing. Full-service senior moves with packing, transport, and setup available.",
  },

  "capitol-hill-furniture": {
    intro: `Capitol Hill's Victorian homes and craftsman bungalows present some of Seattle's most challenging furniture moving scenarios, narrow doorways, steep staircases, and tight hallways that require experienced crews and specialized equipment. Our furniture moving specialists have navigated hundreds of Capitol Hill homes and know exactly how to handle a sectional sofa through a 28-inch Victorian doorway, a king bed up a steep craftsman staircase, or an antique armoire through a tight hallway.`,
    buildingCalloutsHeading: "Furniture Moving Challenges in Capitol Hill",
    buildingCallouts: `**Victorian Home Furniture**, Capitol Hill's Victorian homes have 28–30 inch doorways, steep staircases, and tight hallways. Large furniture pieces often require disassembly. **Craftsman Bungalow Furniture**, Similar access challenges to Victorian homes, with the addition of low-clearance basement stairs in many bungalows. **High-Rise Condo Furniture**, First Hill high-rises have elevator doors that limit furniture dimensions. We measure and plan before move day. **Antique & Period Furniture**, Capitol Hill's older homes contain valuable antique furniture requiring extra care and specialized handling.`,
    extraFaqs: [
      {
        q: "Can you move large furniture through Capitol Hill Victorian doorways?",
        a: "Yes. We disassemble and reassemble large furniture pieces, sectional sofas, king bed frames, wardrobes, that won't fit through standard Victorian doorways. We bring all necessary tools and hardware.",
      },
      {
        q: "Do you move antique furniture in Capitol Hill?",
        a: "Yes. We have experience with antique Victorian furniture, period pieces, and vintage items common in Capitol Hill's older homes. We use furniture blankets, custom padding, and careful handling for valuable pieces.",
      },
    ],
    pricingNote: "Furniture-only moves in Capitol Hill start at $185/hr for a 2-person crew with a 2-hour minimum. Piano moves quoted separately. Disassembly and reassembly included at no extra charge.",
  },

  "capitol-hill-appliance": {
    intro: `Moving appliances in Capitol Hill's Victorian homes and older apartment buildings requires navigating narrow doorways, steep staircases, and tight kitchen layouts. Our appliance moving crews handle refrigerators, washers, dryers, ranges, and dishwashers throughout Capitol Hill, including in the older Victorian homes where appliances must be carefully angled through tight spaces. We protect your floors with Masonite boards and handle all the heavy lifting.`,
    buildingCalloutsHeading: "Appliance Moving in Capitol Hill Homes",
    buildingCallouts: `**Victorian Kitchen Appliances**, Older Capitol Hill Victorian homes often have narrow kitchen doorways and tight layouts. We have the equipment to angle refrigerators and ranges through tight spaces. **Basement Laundry**, Many Capitol Hill homes have laundry rooms in steep basement spaces. We disconnect and move washers and dryers from any location. **Apartment Appliances**, Capitol Hill apartment buildings often have stacked washer/dryer units and compact refrigerators. **High-Rise Appliances**, First Hill high-rises often have large French door refrigerators and built-in appliances requiring careful removal.`,
    extraFaqs: [
      {
        q: "Do you disconnect and reconnect appliances in Capitol Hill?",
        a: "We disconnect and reconnect standard water, gas, and electrical connections for washers, dryers, refrigerators, and dishwashers. For gas appliances requiring licensed work, we coordinate with a licensed plumber.",
      },
      {
        q: "Can you move appliances through Capitol Hill Victorian doorways?",
        a: "Yes. We have experience moving full-size refrigerators and ranges through the narrow 28–30 inch doorways common in Capitol Hill Victorian homes. We use appliance dollies, furniture sliders, and door frame protection on every job.",
      },
    ],
    pricingNote: "Appliance moves in Capitol Hill start at $185/hr for a 2-person crew with a 2-hour minimum. Single appliance moves start at $150. Disconnection/reconnection included for standard connections.",
  },

  "capitol-hill-unpacking": {
    intro: `After a Capitol Hill move, the last thing you want is to spend days surrounded by boxes. Our professional unpacking crews unbox, organize, and set up your new Capitol Hill home, putting dishes in the kitchen, clothes in the closets, and books on the shelves, so you can start enjoying your new space immediately. We work room by room, break down all boxes, and remove all packing materials when we're done.`,
    buildingCalloutsHeading: "Unpacking Services for Capitol Hill Homes",
    buildingCallouts: `**Full Unpack**, We unbox and organize every room in your new Capitol Hill home. All boxes broken down and packing materials removed. **Partial Unpack**, Choose specific rooms, kitchen and master bedroom are the most popular. **Kitchen Setup**, We unpack and organize your kitchen so it's fully functional on day one. **Art & Decor Placement**, Capitol Hill residents often have extensive art collections. We help hang and place artwork in your new home.`,
    extraFaqs: [
      {
        q: "How long does unpacking a Capitol Hill home take?",
        a: "A 1-bedroom apartment typically takes 2–3 hours with a 2-person crew. A 3-bedroom Victorian home usually takes 6–9 hours. We provide time estimates after reviewing your move details.",
      },
      {
        q: "Do you help with art placement in Capitol Hill homes?",
        a: "Yes. Many Capitol Hill residents have extensive art collections. We help hang and place artwork in your new home as part of our unpacking service. We bring picture hooks, a level, and the tools needed for proper art installation.",
      },
    ],
    pricingNote: "Unpacking services in Capitol Hill run $95–$125/hr per unpacker. A 1-bedroom apartment typically costs $190–$375. A 3-bedroom Victorian home usually runs $475–$1,125. Combined move + unpack packages available at a discounted rate.",
  },

  "capitol-hill-warehousing": {
    intro: `Capitol Hill's growing business community, from tech companies near First Hill to creative agencies along Pike/Pine, increasingly needs flexible warehousing solutions. On The Go Moving & Storage offers short-term and long-term warehousing at our Redmond facility, just 13 miles from Capitol Hill. We handle receiving, inventory management, and last-mile delivery throughout the greater Seattle area.`,
    buildingCalloutsHeading: "Warehousing Solutions for Capitol Hill Businesses",
    buildingCallouts: `**Creative Agency Storage**, Capitol Hill's creative agencies use our warehousing for set pieces, props, equipment, and archive storage. **Restaurant & Bar Storage**, Capitol Hill's restaurants and bars use our warehousing for seasonal inventory and equipment storage during renovations. **Medical Office Storage**, First Hill medical practices use our warehousing for archive records, medical equipment, and office furniture during office transitions. **Tech Company Storage**, Capitol Hill tech companies use our warehousing for IT equipment, office furniture, and archive storage.`,
    extraFaqs: [
      {
        q: "Do you offer short-term warehousing for Capitol Hill businesses?",
        a: "Yes. All our warehousing contracts are month-to-month, no long-term commitment required. Minimum storage period is 30 days. Ideal for Capitol Hill businesses during renovations, office transitions, or seasonal inventory peaks.",
      },
      {
        q: "Can you handle medical records storage for First Hill practices?",
        a: "Yes. We offer secure, climate-controlled storage for medical office records and equipment. We provide inventory tracking and can retrieve specific items on request.",
      },
    ],
    pricingNote: "Warehousing for Capitol Hill businesses starts at $195/month for a 10×10 space at our Redmond facility. Larger spaces and pallet storage available. Month-to-month contracts.",
  },

// ===================================================================
// QUEEN ANNE
// ===================================================================

  "queen-anne-residential": {
    intro: `Queen Anne is one of Seattle's most iconic neighborhoods, known for its stunning views, Victorian architecture, and the steep hill that defines the community. Moving in Queen Anne requires experienced crews who know how to navigate steep grades, limited parking, and historic homes. Our crews have been serving Queen Anne residents since 2009, from the grand Victorians near Kerry Park to the dense apartments of Lower Queen Anne (Uptown). Our Redmond warehouse is 13 miles east, a 20-minute drive.`,
    buildingCalloutsHeading: "Queen Anne Neighborhoods & Communities We Serve",
    buildingCallouts: `**Upper Queen Anne**, The hilltop neighborhood with stunning Sound views. Steep grades on all approach streets require experienced drivers. Victorian homes with narrow doorways and staircases. **Lower Queen Anne / Uptown**, Dense apartment buildings near Seattle Center. Limited truck parking. SDOT permits often required. **Kerry Park Area**, Prestigious residential area with large Victorian homes and limited street parking. **Queen Anne Ave N Corridor**, Main commercial and residential artery. Limited truck loading zones. **Bigelow Ave N**, Quieter residential street with better truck access and a mix of housing types.`,
    extraFaqs: [
      {
        q: "How do you handle Queen Anne's steep hill for residential moves?",
        a: "Our drivers are experienced with Queen Anne's steep grades. We load trucks properly to prevent shifting, use wheel chocks when parked on slopes, and plan routes to use the most accessible approach streets. We've never had a hill-related incident in Queen Anne.",
      },
      {
        q: "Do you handle SDOT parking permits for Queen Anne moves?",
        a: "Yes. Most Queen Anne moves, especially in Lower Queen Anne and along Queen Anne Ave N, require a temporary no-parking permit from SDOT. We assist with the application. Permit fees are passed through at cost, typically $50–$100.",
      },
    ],
    pricingNote: "Queen Anne residential moves typically run $125–$165/hr for a 2-person crew. A 1-bedroom apartment usually takes 3–4 hours ($375–$660). A 3-bedroom Victorian home typically runs 7–10 hours ($875–$1,650). Flat-rate quotes available.",
  },

  "queen-anne-apartment": {
    intro: `Queen Anne's apartment market spans the dense towers of Lower Queen Anne (Uptown) near Seattle Center to the smaller walk-up buildings of Upper Queen Anne. Our crews have moved hundreds of Queen Anne apartment residents and know the building-specific requirements, which Uptown towers require elevator reservations, which Upper Queen Anne walk-ups have no elevator, and which buildings have loading dock time windows. We coordinate with building management to ensure smooth move logistics.`,
    buildingCalloutsHeading: "Queen Anne Apartment Buildings We Frequently Serve",
    buildingCallouts: `**The Mercer** (583 Mercer St), Large apartment complex in Lower Queen Anne near Seattle Center. Freight elevator available. Loading from Mercer St. **Queen Anne Manor** (1318 Queen Anne Ave N), Mid-rise on the main corridor. SDOT permit required for loading. **Uptown Flats**, Several newer apartment buildings in Lower Queen Anne with resident elevators. **Upper Queen Anne Walk-Ups**, Older 2–4 story buildings throughout Upper Queen Anne with no elevator and narrow stairwells. **Seattle Center Area Apartments**, Dense apartment buildings near the Seattle Center campus with limited parking.`,
    extraFaqs: [
      {
        q: "Do Queen Anne apartment buildings require elevator reservations?",
        a: "Larger Uptown buildings typically require elevator reservations 48–72 hours in advance. Upper Queen Anne walk-up buildings have no elevator. We coordinate with your building management regardless of building type.",
      },
      {
        q: "How do you handle stair carries in Upper Queen Anne walk-up buildings?",
        a: "We bring stair rollers, furniture straps, and the right crew size for stair carry jobs. For buildings with more than 3 floors, we recommend a 3-person crew. We charge a stair carry surcharge for buildings above 3 floors.",
      },
    ],
    pricingNote: "Queen Anne apartment moves typically run $125–$165/hr for a 2-person crew. A studio apartment usually takes 2–3 hours ($250–$495). A 1-bedroom apartment typically runs 3–4 hours ($375–$660). Stair carry surcharges may apply.",
  },

  "queen-anne-packing": {
    intro: `Queen Anne's Victorian homes and historic residences contain some of Seattle's most valuable and irreplaceable furniture, artwork, and period pieces. Our professional packing crews have packed hundreds of Queen Anne homes and know how to handle antique Victorian furniture, original artwork, and fragile period pieces with the care they deserve. We use double-walled boxes, acid-free tissue, custom crating, and furniture blankets on every Queen Anne packing job.`,
    buildingCalloutsHeading: "Packing Services for Queen Anne's Historic Homes",
    buildingCallouts: `**Victorian Home Packing**, Queen Anne's Victorian homes often contain antique furniture, original artwork, and period pieces requiring specialized packing and custom crating. **Apartment Packing**, Full-pack, partial-pack, and kitchen-only packing for Queen Anne apartment residents. **Art & Antique Packing**, Queen Anne's historic homes frequently contain valuable antiques and original artwork requiring museum-quality packing. **Condo Packing**, Modern Queen Anne condos with large-format art, wine collections, and high-end electronics.`,
    extraFaqs: [
      {
        q: "Do you pack antique Victorian furniture for Queen Anne moves?",
        a: "Yes. We have extensive experience packing antique Victorian furniture, period mirrors, and valuable artwork common in Queen Anne's historic homes. We use custom crating, acid-free tissue, and furniture blankets for valuable pieces.",
      },
      {
        q: "How much does professional packing cost in Queen Anne?",
        a: "A 1-bedroom apartment typically runs $200–$400. A 3-bedroom Victorian home usually costs $700–$1,400. We provide exact quotes after a free in-home assessment.",
      },
    ],
    pricingNote: "Queen Anne packing services run $45–$65/hr per packer plus materials. A 1-bedroom apartment typically costs $200–$400 all-in. A 3-bedroom Victorian home usually runs $700–$1,400. Full-pack, partial-pack, and kitchen-only options available.",
  },

  "queen-anne-commercial": {
    intro: `Queen Anne's commercial district along Queen Anne Ave N and the Uptown area near Seattle Center includes restaurants, boutiques, creative agencies, and entertainment businesses. Our commercial moving crews have relocated Queen Anne businesses of all sizes, from small boutiques on Queen Anne Ave to production companies near Seattle Center. We work after-hours and on weekends to minimize disruption to your business.`,
    buildingCalloutsHeading: "Queen Anne Commercial Districts We Serve",
    buildingCallouts: `**Queen Anne Ave N Corridor**, Boutiques, restaurants, and service businesses. SDOT permits required for loading. After-hours moves recommended. **Lower Queen Anne / Uptown**, Entertainment businesses, production companies, and offices near Seattle Center. **Seattle Center Campus**, Event and entertainment businesses within the Seattle Center campus. Special access coordination required. **Mercer Street Corridor**, Mixed commercial and residential with better truck access than the main corridor.`,
    extraFaqs: [
      {
        q: "Do you move businesses near Seattle Center in Queen Anne?",
        a: "Yes. We have experience with production companies, event businesses, and offices near Seattle Center. We coordinate access with Seattle Center management when required and work within your operational schedule.",
      },
      {
        q: "Can you move a Queen Anne restaurant over a weekend?",
        a: "Yes. Weekend and after-hours moves are our most common commercial move type. We work Friday evening through Sunday to have your Queen Anne restaurant or business fully operational by Monday morning.",
      },
    ],
    pricingNote: "Queen Anne commercial moves are priced by scope. Small office moves typically run $800–$1,500. Restaurant equipment moves quoted individually. Free on-site quotes available.",
  },

  "queen-anne-storage": {
    intro: `Queen Anne's active real estate market and historic home renovations create frequent storage needs for residents. On The Go Moving & Storage offers climate-controlled storage at our Redmond facility, just 13 miles from Queen Anne. We pick up from your Queen Anne home, store your items securely, and deliver to your new location when you're ready.`,
    buildingCalloutsHeading: "Storage Solutions for Queen Anne Residents",
    buildingCallouts: `**Home Sale Bridge Storage**, Queen Anne's competitive real estate market often requires sellers to clear furniture for staging. We store your items during the sale and deliver to your new home after closing. **Victorian Home Renovation Storage**, Queen Anne's Victorian homes are frequently renovated. We store furniture during major renovation projects. **Apartment Transition Storage**, When your lease ends before your new place is ready, we bridge the gap with short-term storage. **Long-Term Storage**, Month-to-month climate-controlled storage for Queen Anne residents needing extended storage.`,
    extraFaqs: [
      {
        q: "How far is your storage facility from Queen Anne?",
        a: "Our climate-controlled storage facility is in Redmond, 13 miles from Queen Anne, a 20-minute drive. We pick up from your Queen Anne home and deliver to your new location.",
      },
      {
        q: "Do you offer staging storage for Queen Anne home sales?",
        a: "Yes. We work with Queen Anne homeowners and real estate agents to clear furniture for home staging. Short-term rates available. We deliver to your new home after closing.",
      },
    ],
    pricingNote: "Queen Anne storage vault rental starts at $100/month per vault at our Redmond facility. Oversized items: $80/month. Short-term storage: $200/day. Pick-up and delivery from Queen Anne available. Month-to-month contracts with no long-term commitment.",
  },

  "queen-anne-senior": {
    intro: `Queen Anne has a significant senior population, particularly in the older Victorian neighborhoods and in senior communities near the neighborhood core. Our senior moving specialists understand the emotional complexity of leaving a longtime Queen Anne home, whether it's a grand Victorian near Kerry Park or a longtime apartment in Uptown. We work at a comfortable pace, handle all the heavy lifting, and treat every item with the care it deserves.`,
    buildingCalloutsHeading: "Senior Living Communities Near Queen Anne We Serve",
    buildingCallouts: `**Queen Anne Manor** (100 Crockett St), Assisted living in the heart of Upper Queen Anne. We coordinate move-in logistics with Queen Anne Manor staff. **Bayview Manor** (11 W Aloha St), Senior living community on the north slope of Queen Anne Hill. We handle full-service moves including packing, transport, and setup. **Uptown Senior Residences**, Several senior apartment buildings in Lower Queen Anne near Seattle Center. **Aging in Place**, Many Queen Anne seniors prefer to stay in their Victorian homes. We help with furniture rearrangement and downsizing.`,
    extraFaqs: [
      {
        q: "Do you help seniors downsize from Queen Anne Victorian homes?",
        a: "Yes. We offer full downsizing support, helping sort items for donation, storage, and the new home. We work at your pace and coordinate donation pickups for items you're not keeping.",
      },
      {
        q: "Do you coordinate with Queen Anne Manor and Bayview Manor?",
        a: "Yes. We have experience moving residents into both communities. We coordinate move-in windows with staff and work within their building access requirements.",
      },
    ],
    pricingNote: "Senior moves in Queen Anne are priced by scope. A downsizing move from a 2-bedroom Victorian to a 1-bedroom senior apartment typically runs $700–$1,400 including packing. Full-service senior moves available.",
  },

  "queen-anne-furniture": {
    intro: `Queen Anne's Victorian homes present some of Seattle's most challenging furniture moving scenarios, narrow doorways, steep staircases, and tight hallways that require experienced crews and specialized equipment. Our furniture moving specialists have navigated hundreds of Queen Anne homes and know exactly how to handle a sectional sofa through a Victorian doorway or an antique armoire up a steep staircase.`,
    buildingCalloutsHeading: "Furniture Moving Challenges in Queen Anne",
    buildingCallouts: `**Victorian Home Furniture**, Queen Anne's Victorian homes have 28–30 inch doorways and steep staircases. Large furniture pieces often require disassembly. **Antique & Period Furniture**, Queen Anne's historic homes contain valuable antique furniture requiring extra care and specialized handling. **Condo Furniture**, Modern Queen Anne condos often have large sectionals and oversized furniture requiring careful maneuvering. **Piano Moving**, We move upright and baby grand pianos throughout Queen Anne, including up and down steep Victorian staircases.`,
    extraFaqs: [
      {
        q: "Can you move large furniture through Queen Anne Victorian doorways?",
        a: "Yes. We disassemble and reassemble large furniture pieces that won't fit through standard Victorian doorways. We bring all necessary tools and hardware.",
      },
      {
        q: "Do you move pianos in Queen Anne?",
        a: "Yes. We move upright pianos, baby grands, and grand pianos throughout Queen Anne. Piano moves require specialized equipment and trained crews, we have both.",
      },
    ],
    pricingNote: "Furniture-only moves in Queen Anne start at $185/hr for a 2-person crew with a 2-hour minimum. Piano moves quoted separately. Disassembly and reassembly included.",
  },

  "queen-anne-appliance": {
    intro: `Moving appliances in Queen Anne's Victorian homes requires navigating narrow doorways, steep staircases, and tight kitchen layouts. Our appliance moving crews handle refrigerators, washers, dryers, ranges, and dishwashers throughout Queen Anne, including in the older Victorian homes where appliances must be carefully angled through tight spaces.`,
    buildingCalloutsHeading: "Appliance Moving in Queen Anne Homes",
    buildingCallouts: `**Victorian Kitchen Appliances**, Older Queen Anne Victorian homes often have narrow kitchen doorways and tight layouts. We angle refrigerators and ranges through tight spaces safely. **Basement Laundry**, Many Queen Anne homes have laundry rooms in steep basement spaces. We disconnect and move washers and dryers from any location. **Apartment Appliances**, Queen Anne apartment buildings often have compact appliances requiring careful handling. **High-End Appliances**, Queen Anne's upscale homes often have Sub-Zero refrigerators and Wolf ranges requiring specialized handling.`,
    extraFaqs: [
      {
        q: "Do you disconnect and reconnect appliances in Queen Anne?",
        a: "We disconnect and reconnect standard water, gas, and electrical connections for washers, dryers, refrigerators, and dishwashers. For gas appliances requiring licensed work, we coordinate with a licensed plumber.",
      },
      {
        q: "Can you move high-end appliances like Sub-Zero and Wolf in Queen Anne?",
        a: "Yes. We have experience moving high-end built-in appliances including Sub-Zero refrigerators, Wolf ranges, and Miele dishwashers. We use appliance-specific dollies and protection to prevent damage to these expensive units.",
      },
    ],
    pricingNote: "Appliance moves in Queen Anne start at $185/hr for a 2-person crew with a 2-hour minimum. Single appliance moves start at $150. Disconnection/reconnection included for standard connections.",
  },

  "queen-anne-unpacking": {
    intro: `After a Queen Anne move, our professional unpacking crews unbox, organize, and set up your new home so you can start enjoying your new space immediately. We work room by room, break down all boxes, and remove all packing materials when we're done. Whether you've moved into a Victorian on Kerry Park or a condo in Uptown, we'll have you settled in faster than you thought possible.`,
    buildingCalloutsHeading: "Unpacking Services for Queen Anne Homes",
    buildingCallouts: `**Full Unpack**, We unbox and organize every room in your new Queen Anne home. All boxes broken down and packing materials removed. **Partial Unpack**, Choose specific rooms, kitchen and master bedroom are the most popular choices. **Kitchen Setup**, We unpack and organize your kitchen so it's fully functional on day one. **Art & Antique Placement**, Queen Anne residents often have valuable art and antiques. We help place and hang items in your new home.`,
    extraFaqs: [
      {
        q: "How long does unpacking a Queen Anne home take?",
        a: "A 1-bedroom apartment typically takes 2–3 hours with a 2-person crew. A 3-bedroom Victorian home usually takes 6–9 hours. We provide time estimates after reviewing your move details.",
      },
      {
        q: "Do you help with art and antique placement in Queen Anne homes?",
        a: "Yes. We help hang and place artwork and antiques in your new Queen Anne home as part of our unpacking service. We bring picture hooks, a level, and the tools needed for proper installation.",
      },
    ],
    pricingNote: "Unpacking services in Queen Anne run $95–$125/hr per unpacker. A 1-bedroom apartment typically costs $190–$375. A 3-bedroom Victorian home usually runs $475–$1,125. Combined move + unpack packages available.",
  },

  "queen-anne-warehousing": {
    intro: `Queen Anne's businesses, from production companies near Seattle Center to boutiques along Queen Anne Ave N, need flexible warehousing solutions. On The Go Moving & Storage offers short-term and long-term warehousing at our Redmond facility, just 13 miles from Queen Anne. We handle receiving, inventory management, and last-mile delivery throughout the greater Seattle area.`,
    buildingCalloutsHeading: "Warehousing Solutions for Queen Anne Businesses",
    buildingCallouts: `**Production & Entertainment Storage**, Queen Anne's production companies and entertainment businesses near Seattle Center use our warehousing for sets, props, and equipment. **Retail Storage**, Queen Anne Ave N boutiques use our warehousing for seasonal inventory overflow. **Restaurant Storage**, Queen Anne restaurants use our warehousing for equipment storage during renovations. **Home-Based Business Storage**, Queen Anne's many home-based businesses use our warehousing for inventory overflow.`,
    extraFaqs: [
      {
        q: "Do you offer short-term warehousing for Queen Anne businesses?",
        a: "Yes. All our warehousing contracts are month-to-month, no long-term commitment required. Minimum storage period is 30 days.",
      },
      {
        q: "Can you handle production equipment storage for Queen Anne entertainment businesses?",
        a: "Yes. We have experience storing production equipment, sets, and props for entertainment businesses near Seattle Center. We provide inventory tracking and can retrieve specific items on request.",
      },
    ],
    pricingNote: "Warehousing for Queen Anne businesses starts at $195/month for a 10×10 space at our Redmond facility. Larger spaces and pallet storage available. Month-to-month contracts.",
  },

// ===================================================================
// FREMONT
// ===================================================================

  "fremont-residential": {
    intro: `Fremont, the self-proclaimed Center of the Universe, is one of Seattle's most eclectic neighborhoods, with a mix of craftsman homes, modern condos, and tech offices along the Ship Canal. Moving in Fremont requires navigating narrow residential streets, limited parking near the commercial core, and the occasional quirky access challenge. Our crews have been serving Fremont residents since 2009 and know every block's logistics. Our Redmond warehouse is 13 miles east, a 21-minute drive.`,
    buildingCalloutsHeading: "Fremont Neighborhoods & Communities We Serve",
    buildingCallouts: `**Fremont Core**, The commercial heart of Fremont along Fremont Ave N and N 36th St. Limited truck parking. After-hours moves recommended. **North Fremont**, Quieter residential area north of N 50th St with better truck access and a mix of craftsman homes and newer construction. **Stone Way N Corridor**, Mixed residential and light industrial. Good truck access. **Phinney Ridge Adjacent**, Residential streets bordering Phinney Ridge with craftsman homes and good access. **Wallingford Adjacent**, Eastern Fremont bordering Wallingford with a mix of housing types.`,
    extraFaqs: [
      {
        q: "How do you handle parking for Fremont residential moves?",
        a: "Fremont's commercial core has virtually no truck parking. For moves near Fremont Ave N and N 36th St, we obtain SDOT temporary no-parking permits. For residential streets north of N 50th St, parking is generally available. We assess your specific address and plan accordingly.",
      },
      {
        q: "Do you move craftsman homes in Fremont?",
        a: "Yes. We have extensive experience with Fremont's craftsman homes, including their narrow doorways, steep staircases, and tight hallways. We bring the tools to disassemble and reassemble large furniture pieces that won't fit through standard craftsman doorways.",
      },
    ],
    pricingNote: "Fremont residential moves typically run $125–$165/hr for a 2-person crew. A 1-bedroom apartment usually takes 3–4 hours ($375–$660). A 3-bedroom craftsman home typically runs 6–9 hours ($750–$1,485). Flat-rate quotes available.",
  },

  "fremont-apartment": {
    intro: `Fremont's apartment market spans vintage walk-up buildings near the commercial core to newer condos along the Ship Canal waterfront. Our crews have moved hundreds of Fremont apartment residents and know the building-specific requirements, which buildings have freight elevators, which require stair carries, and which have loading dock time windows. We coordinate with building management to ensure smooth move logistics.`,
    buildingCalloutsHeading: "Fremont Apartment Buildings We Frequently Serve",
    buildingCallouts: `**Fremont Canal Park Apartments** (3601 Fremont Ave N), Modern apartments near the Ship Canal with resident elevator. **The Fremont Building** (3600 Stone Way N), Mixed-use building with commercial ground floor and residential above. **Vintage Fremont Walk-Ups**, Dozens of pre-1970 buildings throughout Fremont with no elevator and narrow stairwells. **Phinney Ridge Apartments**, Smaller apartment buildings on the Phinney Ridge border with good access. **Stone Way Condos**, Newer condos along Stone Way N with better access than the commercial core.`,
    extraFaqs: [
      {
        q: "Do Fremont apartment buildings require elevator reservations?",
        a: "Most older Fremont apartment buildings have no elevator. Newer buildings along the Ship Canal waterfront typically require elevator reservations 48–72 hours in advance. We coordinate with your building management.",
      },
      {
        q: "How do you handle stair carries in Fremont walk-up buildings?",
        a: "We bring stair rollers, furniture straps, and the right crew size for stair carry jobs. For buildings with more than 3 floors, we recommend a 3-person crew.",
      },
    ],
    pricingNote: "Fremont apartment moves typically run $125–$165/hr for a 2-person crew. A studio apartment usually takes 2–3 hours ($250–$495). A 1-bedroom apartment typically runs 3–4 hours ($375–$660). Stair carry surcharges may apply.",
  },

  "fremont-packing": {
    intro: `Fremont's eclectic community, artists, tech workers, and longtime residents, creates a wide variety of packing needs. Our professional packing crews have packed hundreds of Fremont homes and know how to handle everything from vintage record collections and art installations to modern tech setups and craftsman-era antiques. We use double-walled boxes, acid-free tissue for artwork, and custom crating for fragile items.`,
    buildingCalloutsHeading: "Packing Services for Fremont's Unique Homes",
    buildingCallouts: `**Craftsman Home Packing**, Fremont's craftsman homes often contain vintage furniture, art collections, and period pieces requiring specialized packing. **Apartment Packing**, Full-pack, partial-pack, and kitchen-only packing for Fremont apartment residents. **Art & Collection Packing**, Fremont's arts community means we frequently pack original artwork, sculptures, vinyl record collections, and unique items. **Tech Worker Packing**, Fremont's tech workers (Google campus nearby) often have extensive electronics and home office setups requiring careful packing.`,
    extraFaqs: [
      {
        q: "Do you pack art and unique collections for Fremont moves?",
        a: "Yes. Fremont's arts community means we regularly pack original artwork, sculptures, vintage collections, and unique items. We use custom crating, acid-free tissue, and foam padding for valuable pieces.",
      },
      {
        q: "How much does professional packing cost in Fremont?",
        a: "A 1-bedroom apartment typically runs $200–$400. A 3-bedroom craftsman home usually costs $600–$1,200. We provide exact quotes after a free in-home assessment.",
      },
    ],
    pricingNote: "Fremont packing services run $45–$65/hr per packer plus materials. A 1-bedroom apartment typically costs $200–$400 all-in. A 3-bedroom craftsman home usually runs $600–$1,200. Full-pack, partial-pack, and kitchen-only options available.",
  },

  "fremont-commercial": {
    intro: `Fremont is home to Google's Seattle campus, dozens of tech companies, creative agencies, restaurants, and boutiques along the Ship Canal. Our commercial moving crews have relocated Fremont businesses of all sizes, from small boutiques on Fremont Ave to tech office buildouts near the Google campus. We work after-hours and on weekends to minimize disruption to your business operations.`,
    buildingCalloutsHeading: "Fremont Commercial Districts We Serve",
    buildingCallouts: `**Google Seattle Campus** (601 N 34th St), Large tech campus with specific move-in requirements. We coordinate with Google facilities management. **Fremont Ave N Commercial Core**, Boutiques, restaurants, and creative agencies. Limited loading access requires SDOT permits. **Stone Way N Corridor**, Light industrial, tech offices, and mixed-use commercial with better truck access. **Ship Canal Waterfront**, Tech companies and creative offices with waterfront access.`,
    extraFaqs: [
      {
        q: "Do you move tech offices near the Google campus in Fremont?",
        a: "Yes. We have experience with tech office moves in Fremont, including coordination with building facilities management for loading dock access and elevator reservations. We work after-hours to minimize disruption.",
      },
      {
        q: "Can you move a Fremont restaurant or bar over a weekend?",
        a: "Yes. Weekend and after-hours moves are our most common commercial move type in Fremont. We work Friday evening through Sunday to have your business fully operational by Monday morning.",
      },
    ],
    pricingNote: "Fremont commercial moves are priced by scope. Small office moves (under 10 workstations) typically run $800–$1,500. Restaurant equipment moves quoted individually. Free on-site quotes available.",
  },

  "fremont-storage": {
    intro: `Fremont's active real estate market and frequent apartment transitions create regular storage needs. On The Go Moving & Storage offers climate-controlled storage at our Redmond facility, just 13 miles from Fremont. We pick up from your Fremont home or apartment, store your items securely, and deliver to your new location when you're ready.`,
    buildingCalloutsHeading: "Storage Solutions for Fremont Residents",
    buildingCallouts: `**Home Sale Bridge Storage**, Fremont's competitive real estate market often requires sellers to clear furniture for staging. We store your items during the sale and deliver to your new home after closing. **Apartment Transition Storage**, When your lease ends before your new place is ready, we bridge the gap with short-term storage. **Renovation Storage**, Fremont craftsman homes are frequently renovated. We store furniture during major projects. **Long-Term Storage**, Month-to-month climate-controlled storage for Fremont residents needing extended storage.`,
    extraFaqs: [
      {
        q: "How far is your storage facility from Fremont?",
        a: "Our climate-controlled storage facility is in Redmond, 13 miles from Fremont, a 21-minute drive. We pick up from your Fremont home and deliver to your new location.",
      },
      {
        q: "Do you offer short-term storage for Fremont apartment transitions?",
        a: "Yes. We offer month-to-month storage with no minimum commitment beyond 30 days. Ideal for Fremont renters who need to vacate before their new place is ready.",
      },
    ],
    pricingNote: "Fremont storage vault rental starts at $100/month per vault at our Redmond facility. Oversized items: $80/month. Short-term storage: $200/day. Pick-up and delivery from Fremont available. Month-to-month contracts with no long-term commitment.",
  },

  "fremont-senior": {
    intro: `Fremont has a longtime residential community with many seniors who have called the neighborhood home for decades. Our senior moving specialists understand the emotional weight of leaving a longtime Fremont craftsman home or apartment. We work at a comfortable pace, handle all the packing and heavy lifting, and treat every item with the care it deserves.`,
    buildingCalloutsHeading: "Senior Living Communities Near Fremont We Serve",
    buildingCallouts: `**Fremont Senior Center**, Community resource for Fremont seniors. We partner with local senior services to coordinate moves. **Phinney Neighborhood Senior Housing**, Senior apartments on the Phinney Ridge border near Fremont. We coordinate move-in logistics with building management. **Wallingford Senior Residences**, Senior housing in nearby Wallingford. **Aging in Place**, Many Fremont seniors prefer to stay in their craftsman homes. We help with furniture rearrangement and downsizing within the home.`,
    extraFaqs: [
      {
        q: "Do you help seniors downsize from Fremont craftsman homes?",
        a: "Yes. We offer full downsizing support, helping sort items for donation, storage, and the new home. We work at your pace and coordinate donation pickups for items you're not keeping.",
      },
      {
        q: "Do you offer senior discounts for Fremont moves?",
        a: "Yes. We offer a 10% senior discount for residents 65 and older on all Fremont moves. Please mention this when requesting your quote.",
      },
    ],
    pricingNote: "Senior moves in Fremont are priced by scope. A downsizing move from a 2-bedroom craftsman to a 1-bedroom senior apartment typically runs $600–$1,200 including packing. Full-service senior moves available. 10% senior discount available.",
  },

  "fremont-furniture": {
    intro: `Fremont's craftsman homes and vintage apartments present furniture moving challenges that require experienced crews, narrow doorways, steep staircases, and tight hallways. Our furniture moving specialists have navigated hundreds of Fremont homes and know exactly how to handle a sectional sofa through a craftsman doorway or a vintage armoire up a steep staircase.`,
    buildingCalloutsHeading: "Furniture Moving Challenges in Fremont",
    buildingCallouts: `**Craftsman Home Furniture**, Fremont's craftsman homes have 28–30 inch doorways and steep staircases. Large furniture pieces often require disassembly. **Vintage & Antique Furniture**, Fremont's eclectic community means we frequently move vintage and antique furniture requiring extra care. **Tech Worker Furniture**, Fremont's tech workers often have large standing desks, ergonomic chairs, and extensive home office setups. **Piano Moving**, We move upright and baby grand pianos throughout Fremont, including up and down craftsman staircases.`,
    extraFaqs: [
      {
        q: "Can you move large furniture through Fremont craftsman doorways?",
        a: "Yes. We disassemble and reassemble large furniture pieces that won't fit through standard craftsman doorways. We bring all necessary tools and hardware.",
      },
      {
        q: "Do you move vintage and antique furniture in Fremont?",
        a: "Yes. Fremont's eclectic community means we regularly move vintage and antique furniture. We use furniture blankets, custom padding, and careful handling for valuable pieces.",
      },
    ],
    pricingNote: "Furniture-only moves in Fremont start at $185/hr for a 2-person crew with a 2-hour minimum. Piano moves quoted separately. Disassembly and reassembly included.",
  },

  "fremont-appliance": {
    intro: `Moving appliances in Fremont's craftsman homes requires navigating narrow doorways, steep staircases, and tight kitchen layouts. Our appliance moving crews handle refrigerators, washers, dryers, ranges, and dishwashers throughout Fremont, including in the older craftsman homes where appliances must be carefully angled through tight spaces.`,
    buildingCalloutsHeading: "Appliance Moving in Fremont Homes",
    buildingCallouts: `**Craftsman Kitchen Appliances**, Older Fremont craftsman homes often have narrow kitchen doorways and tight layouts. We angle refrigerators and ranges through tight spaces safely. **Basement Laundry**, Many Fremont craftsman homes have laundry rooms in tight basement spaces. We disconnect and move washers and dryers from any location. **Apartment Appliances**, Fremont apartment buildings often have stacked washer/dryer units and compact refrigerators. **Tech Worker Appliances**, Fremont's tech workers often have high-end appliances requiring careful handling.`,
    extraFaqs: [
      {
        q: "Do you disconnect and reconnect appliances in Fremont?",
        a: "We disconnect and reconnect standard water, gas, and electrical connections for washers, dryers, refrigerators, and dishwashers. For gas appliances requiring licensed work, we coordinate with a licensed plumber.",
      },
      {
        q: "Can you move appliances through Fremont craftsman doorways?",
        a: "Yes. We have experience moving full-size refrigerators and ranges through the narrow 28–30 inch doorways common in Fremont craftsman homes. We use appliance dollies, furniture sliders, and door frame protection.",
      },
    ],
    pricingNote: "Appliance moves in Fremont start at $185/hr for a 2-person crew with a 2-hour minimum. Single appliance moves start at $150. Disconnection/reconnection included for standard connections.",
  },

  "fremont-unpacking": {
    intro: `After a Fremont move, our professional unpacking crews unbox, organize, and set up your new home so you can start enjoying your new space immediately. We work room by room, break down all boxes, and remove all packing materials when we're done. Whether you've moved into a craftsman on North Fremont or a condo near the Ship Canal, we'll have you settled in faster than you thought possible.`,
    buildingCalloutsHeading: "Unpacking Services for Fremont Homes",
    buildingCallouts: `**Full Unpack**, We unbox and organize every room in your new Fremont home. All boxes broken down and packing materials removed. **Partial Unpack**, Choose specific rooms, kitchen and master bedroom are the most popular choices. **Kitchen Setup**, We unpack and organize your kitchen so it's fully functional on day one. **Home Office Setup**, Fremont's tech workers often need home office setup. We assemble desks, set up monitors, and organize cables.`,
    extraFaqs: [
      {
        q: "How long does unpacking a Fremont home take?",
        a: "A 1-bedroom apartment typically takes 2–3 hours with a 2-person crew. A 3-bedroom craftsman home usually takes 5–8 hours. We provide time estimates after reviewing your move details.",
      },
      {
        q: "Do you help with home office setup in Fremont?",
        a: "Yes. Many Fremont tech workers need home office setup after a move. We assemble standing desks, set up monitor arms, and organize cable management as part of our unpacking service.",
      },
    ],
    pricingNote: "Unpacking services in Fremont run $95–$125/hr per unpacker. A 1-bedroom apartment typically costs $190–$375. A 3-bedroom craftsman home usually runs $475–$1,000. Combined move + unpack packages available.",
  },

  "fremont-warehousing": {
    intro: `Fremont's growing business community, from Google's Seattle campus to the creative agencies and tech startups along Stone Way, needs flexible warehousing solutions. On The Go Moving & Storage offers short-term and long-term warehousing at our Redmond facility, just 13 miles from Fremont. We handle receiving, inventory management, and last-mile delivery throughout the greater Seattle area.`,
    buildingCalloutsHeading: "Warehousing Solutions for Fremont Businesses",
    buildingCallouts: `**Tech Company Storage**, Fremont's tech companies use our warehousing for IT equipment, office furniture, and archive storage. **Creative Agency Storage**, Fremont's creative agencies use our warehousing for set pieces, props, and equipment. **Restaurant & Bar Storage**, Fremont's restaurants and bars use our warehousing for seasonal inventory and equipment storage during renovations. **Small Business Storage**, Fremont's small businesses and home-based businesses use our warehousing for inventory overflow.`,
    extraFaqs: [
      {
        q: "Do you offer short-term warehousing for Fremont businesses?",
        a: "Yes. All our warehousing contracts are month-to-month, no long-term commitment required. Minimum storage period is 30 days.",
      },
      {
        q: "Can you handle IT equipment storage for Fremont tech companies?",
        a: "Yes. We offer secure, climate-controlled storage for IT equipment, servers, and electronics. We provide inventory tracking and can retrieve specific items on request.",
      },
    ],
    pricingNote: "Warehousing for Fremont businesses starts at $195/month for a 10×10 space at our Redmond facility. Larger spaces and pallet storage available. Month-to-month contracts.",
  },

// ===================================================================
// JUANITA
// ===================================================================

  "juanita-residential": {
    intro: `Juanita is a beautiful waterfront community within Kirkland, known for Juanita Beach Park, quiet residential streets, and a mix of single-family homes and condos along the eastern shore of Lake Washington. On The Go Moving & Storage is just 7 miles from Juanita, making us one of the closest and most responsive moving companies for Juanita residents. Our Redmond warehouse is a 12-minute drive, which keeps travel time costs low and allows us to be highly responsive for same-week bookings.`,
    buildingCalloutsHeading: "Juanita Neighborhoods & Communities We Serve",
    buildingCallouts: `**Juanita Beach Area**, Waterfront homes and condos near Juanita Beach Park. Some waterfront properties have limited truck access. **Juanita Village**, The commercial and residential core of Juanita with good truck access. **Holmes Point**, Quieter residential area north of Juanita with a mix of older homes and newer construction. **Finn Hill Adjacent**, Hillside residential area bordering Juanita with steep driveways on some properties. **Totem Lake Adjacent**, Eastern Juanita bordering the Totem Lake commercial district.`,
    extraFaqs: [
      {
        q: "How close are you to Juanita for residential moves?",
        a: "Our Redmond warehouse is just 7 miles from Juanita, a 12-minute drive. This means lower travel time costs and faster response times. We can often accommodate same-week bookings for Juanita residential moves.",
      },
      {
        q: "Do you move waterfront homes in Juanita?",
        a: "Yes. We have experience with Juanita's waterfront homes, including properties with limited truck access near the lake. We assess access before move day and bring appropriately sized trucks for tight waterfront driveways.",
      },
    ],
    pricingNote: "Juanita residential moves typically run $120–$160/hr for a 2-person crew. A 1-bedroom apartment usually takes 3–4 hours ($360–$640). A 3-bedroom home typically runs 6–8 hours ($720–$1,280). Flat-rate quotes available.",
  },

  "juanita-apartment": {
    intro: `Juanita has a mix of apartment complexes and condos, particularly near Juanita Village and along the main corridors. Most Juanita apartment buildings are accessible with standard moving trucks and have reasonable parking. Our crews have moved many Juanita apartment residents and know the building-specific requirements. Being just 7 miles from Juanita, we can often accommodate short-notice apartment moves.`,
    buildingCalloutsHeading: "Juanita Apartment Buildings We Frequently Serve",
    buildingCallouts: `**Juanita Village Apartments**, Several apartment complexes near the Juanita Village commercial area with good access. **Lakeview Condos**, Condos with lake views near Juanita Beach. Elevator access in most buildings. **Holmes Point Apartments**, Smaller apartment buildings in the Holmes Point area with good access. **Finn Hill Condos**, Newer condos on the Finn Hill hillside with good access but steep driveways on some properties.`,
    extraFaqs: [
      {
        q: "Do Juanita apartment buildings require elevator reservations?",
        a: "Most Juanita apartment buildings are smaller and don't require formal elevator reservations. Larger condo buildings near Juanita Beach may require advance notice. We coordinate with your building management.",
      },
      {
        q: "Can you accommodate short-notice apartment moves in Juanita?",
        a: "Yes. Being just 7 miles from Juanita, we can often accommodate short-notice moves. Contact us and we'll do our best to fit you in, even on short notice.",
      },
    ],
    pricingNote: "Juanita apartment moves typically run $120–$160/hr for a 2-person crew. A studio apartment usually takes 2–3 hours ($240–$480). A 1-bedroom apartment typically runs 3–4 hours ($360–$640).",
  },

  "juanita-packing": {
    intro: `Juanita's mix of single-family homes, waterfront properties, and condos creates a variety of packing needs. Our professional packing crews have packed hundreds of Juanita homes and know how to handle everything from waterfront home collections to modern condo setups. We use double-walled boxes, acid-free tissue for artwork, and custom crating for fragile items.`,
    buildingCalloutsHeading: "Packing Services for Juanita Homes",
    buildingCallouts: `**Single-Family Home Packing**, Juanita's single-family homes often contain a full household of furniture, appliances, and personal items. We offer full-pack, partial-pack, and kitchen-only packing. **Waterfront Home Packing**, Juanita's waterfront homes often contain valuable artwork, nautical collections, and high-end furnishings requiring specialized packing. **Condo Packing**, Juanita condos often have large-format art, wine collections, and high-end electronics requiring careful packing. **Downsizing Packing**, Many Juanita residents downsizing from larger homes need help deciding what to pack and what to donate.`,
    extraFaqs: [
      {
        q: "Do you pack waterfront home collections in Juanita?",
        a: "Yes. Juanita's waterfront homes often contain valuable artwork, nautical collections, and high-end furnishings. We use custom crating, acid-free tissue, and furniture blankets for valuable pieces.",
      },
      {
        q: "How much does professional packing cost in Juanita?",
        a: "A 1-bedroom apartment typically runs $200–$400. A 3-bedroom home usually costs $600–$1,200. We provide exact quotes after a free in-home assessment.",
      },
    ],
    pricingNote: "Juanita packing services run $45–$65/hr per packer plus materials. A 1-bedroom apartment typically costs $200–$400 all-in. A 3-bedroom home usually runs $600–$1,200. Full-pack, partial-pack, and kitchen-only options available.",
  },

  "juanita-commercial": {
    intro: `Juanita's commercial district near Juanita Village includes small businesses, professional offices, and service businesses. Our commercial moving crews handle Juanita business moves of all sizes, from small professional offices to retail relocations. Being just 7 miles from Juanita, we can respond quickly and keep travel costs low for Juanita commercial moves.`,
    buildingCalloutsHeading: "Juanita Commercial Districts We Serve",
    buildingCallouts: `**Juanita Village Commercial Core**, Small businesses, restaurants, and service businesses near the Juanita Village shopping area. Good truck access. **Professional Offices**, Medical, dental, and professional offices throughout Juanita. **Home-Based Businesses**, Many Juanita residents run home-based businesses. We handle moves for home offices and small business inventory.`,
    extraFaqs: [
      {
        q: "Do you move small businesses in Juanita?",
        a: "Yes. We handle commercial moves for Juanita businesses of all sizes, from small professional offices to retail relocations. We work after-hours and on weekends to minimize business disruption.",
      },
      {
        q: "How quickly can you respond for a Juanita commercial move?",
        a: "Being just 7 miles from Juanita, we can often respond quickly for commercial moves. Contact us and we'll provide a same-day or next-day quote for most Juanita commercial moves.",
      },
    ],
    pricingNote: "Juanita commercial moves are priced by scope. Small office moves (under 10 workstations) typically run $700–$1,300. Free on-site quotes available.",
  },

  "juanita-storage": {
    intro: `Juanita residents frequently need storage during home sales, renovations, or transitions between homes. On The Go Moving & Storage offers climate-controlled storage at our Redmond facility, just 7 miles from Juanita. We pick up from your Juanita home, store your items securely, and deliver to your new location when you're ready.`,
    buildingCalloutsHeading: "Storage Solutions for Juanita Residents",
    buildingCallouts: `**Home Sale Bridge Storage**, Juanita's active real estate market often requires sellers to clear furniture for staging. We store your items during the sale and deliver to your new home after closing. **Renovation Storage**, Juanita homes are frequently renovated. We store furniture during kitchen, bathroom, or addition projects. **Waterfront Home Storage**, Juanita's waterfront homeowners often need seasonal storage for outdoor furniture and equipment. **Long-Term Storage**, Month-to-month climate-controlled storage for Juanita residents needing extended storage.`,
    extraFaqs: [
      {
        q: "How far is your storage facility from Juanita?",
        a: "Our climate-controlled storage facility is in Redmond, just 7 miles from Juanita, a 12-minute drive. We pick up from your Juanita home and deliver to your new location.",
      },
      {
        q: "Do you offer seasonal storage for Juanita waterfront homeowners?",
        a: "Yes. We offer seasonal storage for outdoor furniture, boats, and equipment for Juanita's waterfront homeowners. Month-to-month contracts with flexible pickup and delivery.",
      },
    ],
    pricingNote: "Juanita storage vault rental starts at $100/month per vault at our Redmond facility. Oversized items: $80/month. Short-term storage: $200/day. Pick-up and delivery from Juanita available. Month-to-month contracts with no long-term commitment.",
  },

  "juanita-senior": {
    intro: `Juanita's quiet residential character and waterfront setting make it a popular community for seniors. Our senior moving specialists understand the emotional complexity of leaving a longtime Juanita home, whether it's a waterfront property near Juanita Beach or a longtime family home in Holmes Point. We work at a comfortable pace, handle all the heavy lifting, and treat every item with the care it deserves.`,
    buildingCalloutsHeading: "Senior Living Communities Near Juanita We Serve",
    buildingCallouts: `**Aegis Living Kirkland** (near Juanita), Assisted living and memory care near Juanita. We coordinate move-in logistics with Aegis staff. **Kirkland Senior Housing**, Several senior apartment communities in Kirkland near Juanita. **Juanita Area Aging in Place**, Many Juanita seniors prefer to stay in their homes. We help with furniture rearrangement and downsizing within the home. **Totem Lake Senior Communities**, Senior living communities in nearby Totem Lake.`,
    extraFaqs: [
      {
        q: "Do you help seniors downsize from Juanita waterfront homes?",
        a: "Yes. We offer full downsizing support, helping sort items for donation, storage, and the new home. We work at your pace and coordinate donation pickups for items you're not keeping.",
      },
      {
        q: "Do you offer senior discounts for Juanita moves?",
        a: "Yes. We offer a 10% senior discount for residents 65 and older on all Juanita moves. Please mention this when requesting your quote.",
      },
    ],
    pricingNote: "Senior moves in Juanita are priced by scope. A downsizing move from a 3-bedroom home to a 1-bedroom senior apartment typically runs $600–$1,200 including packing. Full-service senior moves available. 10% senior discount available.",
  },

  "juanita-furniture": {
    intro: `Juanita's mix of single-family homes, waterfront properties, and condos creates a variety of furniture moving needs. Our furniture moving specialists handle everything from large waterfront home furniture to modern condo pieces. Being just 7 miles from Juanita, we can respond quickly and keep travel costs low for Juanita furniture moves.`,
    buildingCalloutsHeading: "Furniture Moving in Juanita Homes",
    buildingCallouts: `**Waterfront Home Furniture**, Juanita's waterfront homes often contain large, high-value furniture pieces requiring careful handling. We use furniture blankets and custom padding for valuable pieces. **Single-Family Home Furniture**, Standard household furniture moves throughout Juanita. **Condo Furniture**, Juanita condos often have large sectionals and oversized furniture requiring careful maneuvering through hallways and elevator doors. **Piano Moving**, We move upright and baby grand pianos throughout Juanita.`,
    extraFaqs: [
      {
        q: "Do you move large furniture from Juanita waterfront homes?",
        a: "Yes. We have experience with large furniture pieces from Juanita's waterfront homes, including oversized sofas, dining tables, and bedroom sets. We use furniture blankets and custom padding for valuable pieces.",
      },
      {
        q: "Do you move pianos in Juanita?",
        a: "Yes. We move upright pianos, baby grands, and grand pianos throughout Juanita. Piano moves require specialized equipment and trained crews, we have both.",
      },
    ],
    pricingNote: "Furniture-only moves in Juanita start at $175/hr for a 2-person crew with a 2-hour minimum. Piano moves quoted separately. Disassembly and reassembly included.",
  },

  "juanita-appliance": {
    intro: `Moving appliances in Juanita's homes and condos is straightforward compared to Seattle's urban neighborhoods, most Juanita properties have good truck access and standard doorway widths. Our appliance moving crews handle refrigerators, washers, dryers, ranges, and dishwashers throughout Juanita with efficiency and care.`,
    buildingCalloutsHeading: "Appliance Moving in Juanita Homes",
    buildingCallouts: `**Single-Family Home Appliances**, Standard appliance moves throughout Juanita's single-family homes. We disconnect and reconnect all standard connections. **Waterfront Home Appliances**, Juanita's waterfront homes often have high-end appliances requiring careful handling. **Condo Appliances**, Juanita condos often have compact appliances and built-in units requiring careful removal. **Garage Appliances**, Many Juanita homes have garage refrigerators and freezers that need to be moved separately.`,
    extraFaqs: [
      {
        q: "Do you disconnect and reconnect appliances in Juanita?",
        a: "We disconnect and reconnect standard water, gas, and electrical connections for washers, dryers, refrigerators, and dishwashers. For gas appliances requiring licensed work, we coordinate with a licensed plumber.",
      },
      {
        q: "Can you move high-end appliances in Juanita waterfront homes?",
        a: "Yes. We have experience moving high-end built-in appliances including Sub-Zero refrigerators, Wolf ranges, and Miele dishwashers. We use appliance-specific dollies and protection to prevent damage.",
      },
    ],
    pricingNote: "Appliance moves in Juanita start at $175/hr for a 2-person crew with a 2-hour minimum. Single appliance moves start at $145. Disconnection/reconnection included for standard connections.",
  },

  "juanita-unpacking": {
    intro: `After a Juanita move, our professional unpacking crews unbox, organize, and set up your new home so you can start enjoying your new space immediately. We work room by room, break down all boxes, and remove all packing materials when we're done. Being just 7 miles from Juanita, we can often schedule unpacking services the same day or the day after your move.`,
    buildingCalloutsHeading: "Unpacking Services for Juanita Homes",
    buildingCallouts: `**Full Unpack**, We unbox and organize every room in your new Juanita home. All boxes broken down and packing materials removed. **Partial Unpack**, Choose specific rooms, kitchen and master bedroom are the most popular choices. **Kitchen Setup**, We unpack and organize your kitchen so it's fully functional on day one. **Bedroom Setup**, We assemble beds, unpack clothing, and organize closets so you can sleep comfortably your first night.`,
    extraFaqs: [
      {
        q: "How long does unpacking a Juanita home take?",
        a: "A 1-bedroom apartment typically takes 2–3 hours with a 2-person crew. A 3-bedroom home usually takes 5–7 hours. We provide time estimates after reviewing your move details.",
      },
      {
        q: "Can you schedule same-day unpacking for Juanita moves?",
        a: "Yes. Being just 7 miles from Juanita, we can often schedule unpacking services the same day or the day after your move. Contact us to check availability.",
      },
    ],
    pricingNote: "Unpacking services in Juanita run $90–$120/hr per unpacker. A 1-bedroom apartment typically costs $180–$360. A 3-bedroom home usually runs $450–$840. Combined move + unpack packages available.",
  },

  "juanita-warehousing": {
    intro: `Juanita's businesses and home-based entrepreneurs need flexible warehousing solutions close to home. On The Go Moving & Storage offers short-term and long-term warehousing at our Redmond facility, just 7 miles from Juanita. We handle receiving, inventory management, and last-mile delivery throughout the greater Seattle area.`,
    buildingCalloutsHeading: "Warehousing Solutions for Juanita Businesses",
    buildingCallouts: `**Home-Based Business Storage**, Juanita's many home-based businesses use our warehousing for inventory overflow and business equipment. **Small Business Storage**, Juanita Village businesses use our warehousing for seasonal inventory and equipment storage during renovations. **E-commerce Fulfillment**, Juanita-based e-commerce businesses use our pick-and-pack services for order fulfillment. **Professional Office Storage**, Juanita's professional offices use our warehousing for archive records and equipment storage.`,
    extraFaqs: [
      {
        q: "Do you offer short-term warehousing for Juanita businesses?",
        a: "Yes. All our warehousing contracts are month-to-month, no long-term commitment required. Minimum storage period is 30 days.",
      },
      {
        q: "How far is your warehouse from Juanita?",
        a: "Our Redmond warehouse is just 7 miles from Juanita, a 12-minute drive. This makes us one of the closest warehousing options for Juanita businesses.",
      },
    ],
    pricingNote: "Warehousing for Juanita businesses starts at $195/month for a 10×10 space at our Redmond facility. Larger spaces and pallet storage available. Month-to-month contracts.",
  },

// ===================================================================
// OLYMPIA
// ===================================================================

  "olympia-residential": {
    intro: `On The Go Moving & Storage serves moves between Olympia and the Greater Seattle area. Whether you're relocating from Seattle to Olympia for a state government job, moving a family to the South Sound, or heading north to the Eastside, our experienced crews handle the full move with the same care and professionalism we bring to every job. Olympia moves are priced as flat-rate jobs based on the scope of the move, no hourly surprises on a 65-mile haul.`,
    buildingCalloutsHeading: "Olympia Neighborhoods & Communities We Serve",
    buildingCallouts: `**Downtown Olympia**, Historic downtown with older homes and limited truck access on some streets. We plan routes in advance for downtown Olympia moves. **Eastside**, Established residential neighborhoods east of downtown with good truck access. **Westside**, Growing residential area west of downtown with newer construction. **South Capitol**, Historic neighborhood near the State Capitol campus with a mix of older homes and state government buildings. **Lacey**, Suburban community east of Olympia with good truck access and newer housing stock. **Tumwater**, South of Olympia with industrial and residential areas. **Hawks Prairie**, Fast-growing area in Lacey with newer construction and good truck access.`,
    extraFaqs: [
      {
        q: "How do you price moves between Seattle and Olympia?",
        a: "Olympia moves are priced as flat-rate jobs based on the volume of your move and the specific addresses. We don't charge hourly for long-distance local moves, you get a firm price upfront with no surprises.",
      },
      {
        q: "How long does a move from Seattle to Olympia take?",
        a: "The drive is about 65 minutes from our Redmond warehouse to Olympia. A typical 2-bedroom move takes 6–8 hours total including loading, driving, and unloading. A 3-bedroom home typically takes 8–11 hours.",
      },
    ],
    pricingNote: "Olympia residential moves are flat-rate priced. A 1-bedroom move typically costs $800–$1,200. A 2-bedroom home usually runs $1,200–$1,800. A 3-bedroom home typically costs $1,800–$2,800. Free quotes provided after reviewing your move details.",
  },

  "olympia-apartment": {
    intro: `Olympia has a growing apartment market, particularly in the downtown core, Lacey, and Hawks Prairie. Our crews handle Olympia apartment moves as flat-rate jobs, no hourly uncertainty on a 65-mile haul. We coordinate with Olympia apartment building management for elevator reservations and move-in windows, and we handle all the logistics so you can focus on your new start in the South Sound.`,
    buildingCalloutsHeading: "Olympia Apartment Areas We Serve",
    buildingCallouts: `**Downtown Olympia Apartments**, Several apartment buildings in the downtown core with varying access. We coordinate with building management for move-in logistics. **Lacey Apartment Complexes**, Large apartment communities in Lacey with good truck access and standard move-in procedures. **Hawks Prairie Apartments**, Newer apartment communities in the fast-growing Hawks Prairie area. **Tumwater Apartments**, Affordable apartment options in Tumwater with good access. **Capitol Campus Area**, Apartments near the State Capitol campus popular with state government workers.`,
    extraFaqs: [
      {
        q: "Do you move apartments to and from Olympia?",
        a: "Yes. We handle apartment moves both to Olympia (from Seattle/Eastside) and from Olympia (to Seattle/Eastside). All Olympia apartment moves are priced as flat-rate jobs.",
      },
      {
        q: "Do you coordinate with Olympia apartment building management?",
        a: "Yes. We coordinate elevator reservations and move-in windows with Olympia apartment building management. We handle all the logistics so you can focus on your move.",
      },
    ],
    pricingNote: "Olympia apartment moves are flat-rate priced. A studio apartment typically costs $600–$900. A 1-bedroom apartment usually runs $800–$1,200. A 2-bedroom apartment typically costs $1,200–$1,800.",
  },

  "olympia-packing": {
    intro: `For moves between Olympia and the Greater Seattle area, proper packing is essential, your belongings will be in the truck for a 65-mile haul. Our professional packing crews pack Olympia homes to the same standard we use for all our moves: double-walled boxes, furniture blankets, and careful attention to fragile items. We offer full-pack, partial-pack, and kitchen-only packing for Olympia moves.`,
    buildingCalloutsHeading: "Packing Services for Olympia Moves",
    buildingCallouts: `**Full-Service Packing**, We pack your entire Olympia home, load the truck, drive to your new location, and unload. One company handles everything. **Partial Packing**, We pack the items you don't want to handle, kitchen, fragile items, artwork, while you pack the rest. **Kitchen Packing**, Kitchen packing is the most time-consuming part of any move. We pack your kitchen efficiently and safely. **Fragile Item Packing**, We specialize in packing fragile items, dishes, glassware, artwork, electronics, for the 65-mile haul between Olympia and Seattle.`,
    extraFaqs: [
      {
        q: "Do you pack and move in the same day for Olympia moves?",
        a: "Yes. For smaller Olympia moves (1–2 bedrooms), we can pack and move in the same day. For larger homes, we recommend packing the day before the move to ensure everything is ready.",
      },
      {
        q: "How much does professional packing cost for an Olympia move?",
        a: "Packing costs are included in our flat-rate Olympia move quotes. A 1-bedroom apartment pack typically adds $200–$400 to the move cost. A 3-bedroom home pack typically adds $600–$1,200.",
      },
    ],
    pricingNote: "Olympia packing services are typically included in flat-rate move quotes. Standalone packing services run $45–$65/hr per packer plus materials. Full-pack, partial-pack, and kitchen-only options available.",
  },

  "olympia-commercial": {
    intro: `Olympia is the state capital and home to a large state government workforce, as well as a growing private sector. Our commercial moving crews handle Olympia business moves, from state agency office relocations to private sector office moves. We work after-hours and on weekends to minimize disruption, and we price Olympia commercial moves as flat-rate jobs based on scope.`,
    buildingCalloutsHeading: "Olympia Commercial Districts We Serve",
    buildingCallouts: `**State Capitol Campus**, State agency offices in the Capitol Campus buildings. We coordinate with state facilities management for move logistics. **Downtown Olympia Commercial Core**, Private sector offices, law firms, and service businesses in downtown Olympia. **Lacey Commercial District**, Growing commercial area in Lacey with good truck access. **Tumwater Industrial Area**, Light industrial and commercial businesses in Tumwater. **Hawks Prairie Commercial**, New commercial development in the fast-growing Hawks Prairie area.`,
    extraFaqs: [
      {
        q: "Do you move state agency offices in Olympia?",
        a: "Yes. We have experience with state agency office moves in Olympia's Capitol Campus. We coordinate with state facilities management for building access, elevator reservations, and move logistics.",
      },
      {
        q: "How do you price commercial moves between Seattle and Olympia?",
        a: "Olympia commercial moves are priced as flat-rate jobs based on the volume of office furniture, equipment, and the specific addresses. We provide detailed quotes after an on-site assessment.",
      },
    ],
    pricingNote: "Olympia commercial moves are flat-rate priced based on scope. Small office moves (under 10 workstations) typically run $1,200–$2,000 for Seattle-to-Olympia moves. Free on-site quotes available.",
  },

  "olympia-storage": {
    intro: `For Olympia residents and businesses needing storage during a move or transition, On The Go Moving & Storage offers climate-controlled storage at our Redmond facility. We pick up from your Olympia home or business, store your items securely at our Redmond facility, and deliver to your new Olympia or Seattle-area location when you're ready.`,
    buildingCalloutsHeading: "Storage Solutions for Olympia Residents",
    buildingCallouts: `**Move Bridge Storage**, When your Olympia home closes before your new Seattle-area home is ready (or vice versa), we store your items in between. **State Worker Relocation Storage**, State government workers relocating between Olympia and Seattle often need temporary storage during the transition. **Renovation Storage**, Olympia homeowners renovating their homes use our storage during major projects. **Long-Term Storage**, Month-to-month climate-controlled storage for Olympia residents and businesses.`,
    extraFaqs: [
      {
        q: "Do you pick up from Olympia for storage?",
        a: "Yes. We pick up from Olympia and store your items at our climate-controlled Redmond facility. Pickup from Olympia is available with advance scheduling. We deliver to your new location when you're ready.",
      },
      {
        q: "How much does storage cost for an Olympia move?",
        a: "Storage starts at $95/month for a 5×5 unit and $195/month for a 10×10 unit. Pickup from Olympia and delivery to your new location are priced separately based on distance.",
      },
    ],
    pricingNote: "Olympia storage vault rental starts at $100/month per vault at our Redmond facility. Oversized items: $80/month. Short-term storage: $200/day. Pickup from Olympia and delivery to your new location priced separately. Month-to-month contracts.",
  },

  "olympia-senior": {
    intro: `Many Olympia seniors are relocating to be closer to family in the Greater Seattle area, or moving from Seattle to Olympia for a quieter retirement. Our senior moving specialists handle the full move with sensitivity and care, from packing a longtime Olympia home to setting up a new residence in the Seattle area. We work at a pace that's comfortable for you and treat every item with the respect it deserves.`,
    buildingCalloutsHeading: "Senior Living Communities Near Olympia We Serve",
    buildingCallouts: `**Panorama City** (1751 Circle Lane SE, Lacey), Large continuing care retirement community in Lacey near Olympia. We coordinate move-in logistics with Panorama City staff. **Capital Place Senior Living** (Downtown Olympia), Senior apartments in downtown Olympia. **Olympia Senior Center**, Community resource for Olympia seniors. **Lacey Senior Communities**, Several senior living options in Lacey near Olympia.`,
    extraFaqs: [
      {
        q: "Do you help seniors relocate from Olympia to the Seattle area?",
        a: "Yes. We handle full-service senior moves from Olympia to any Seattle-area destination, packing, transport, and setup. We work at your pace and treat every item with care.",
      },
      {
        q: "Do you coordinate with Panorama City and other Olympia senior communities?",
        a: "Yes. We have experience moving residents into Panorama City and other Olympia-area senior communities. We coordinate move-in windows with community staff.",
      },
    ],
    pricingNote: "Senior moves between Olympia and Seattle are flat-rate priced. A downsizing move from a 2-bedroom Olympia home to a 1-bedroom Seattle-area senior apartment typically runs $1,000–$1,600 including packing. Full-service senior moves available.",
  },

  "olympia-furniture": {
    intro: `For furniture-only moves between Olympia and the Greater Seattle area, On The Go Moving & Storage handles the full haul with the same care we bring to complete household moves. Whether you're moving a few large pieces or a full room of furniture, we price furniture-only Olympia moves as flat-rate jobs based on the volume and addresses.`,
    buildingCalloutsHeading: "Furniture Moving Between Olympia and Seattle",
    buildingCallouts: `**Large Furniture Hauls**, Moving large furniture pieces, sectional sofas, bedroom sets, dining tables, between Olympia and Seattle. Flat-rate pricing. **Antique & Valuable Furniture**, We use furniture blankets, custom padding, and careful handling for valuable pieces on the 65-mile haul. **Piano Moving**, We move upright and baby grand pianos between Olympia and the Greater Seattle area. **Office Furniture**, We move office furniture between Olympia state agency offices and Seattle-area locations.`,
    extraFaqs: [
      {
        q: "Do you move furniture-only between Olympia and Seattle?",
        a: "Yes. We handle furniture-only moves between Olympia and the Greater Seattle area. These are priced as flat-rate jobs based on the volume of furniture and the specific addresses.",
      },
      {
        q: "Do you move pianos between Olympia and Seattle?",
        a: "Yes. We move upright pianos, baby grands, and grand pianos between Olympia and the Greater Seattle area. Piano moves are quoted separately based on piano type and access.",
      },
    ],
    pricingNote: "Olympia furniture-only moves are flat-rate priced. A small furniture haul (1–5 pieces) typically costs $400–$700. A full room of furniture typically runs $700–$1,200. Piano moves quoted separately.",
  },

  "olympia-appliance": {
    intro: `Moving appliances between Olympia and the Greater Seattle area requires careful handling for the 65-mile haul. Our appliance moving crews handle refrigerators, washers, dryers, ranges, and dishwashers on Olympia moves, disconnecting at the origin, securing for transport, and reconnecting at the destination.`,
    buildingCalloutsHeading: "Appliance Moving Between Olympia and Seattle",
    buildingCallouts: `**Refrigerators**, We disconnect, transport, and reconnect refrigerators between Olympia and Seattle. We allow proper settling time before reconnecting. **Washers & Dryers**, We disconnect, transport, and reconnect washers and dryers. We bring drum stabilizers for washer transport. **Ranges & Dishwashers**, We disconnect and reconnect gas and electric ranges and dishwashers. **High-End Appliances**, We handle Sub-Zero, Wolf, and other high-end appliances with the specialized care they require.`,
    extraFaqs: [
      {
        q: "Do you disconnect and reconnect appliances for Olympia moves?",
        a: "We disconnect and reconnect standard water, gas, and electrical connections for washers, dryers, refrigerators, and dishwashers. For gas appliances requiring licensed work, we coordinate with a licensed plumber.",
      },
      {
        q: "How do you price appliance moves between Olympia and Seattle?",
        a: "Appliance moves between Olympia and Seattle are typically included in our flat-rate move quotes. Standalone appliance hauls are priced based on the number of appliances and the specific addresses.",
      },
    ],
    pricingNote: "Olympia appliance moves are typically included in flat-rate move quotes. Standalone appliance hauls start at $300 for a single appliance between Olympia and Seattle. Disconnection/reconnection included for standard connections.",
  },

  "olympia-unpacking": {
    intro: `After a long-distance local move from Seattle to Olympia (or vice versa), the last thing you want is to spend days surrounded by boxes. Our professional unpacking crews travel to Olympia to unbox, organize, and set up your new home, putting dishes in the kitchen, clothes in the closets, and books on the shelves, so you can start enjoying your new South Sound life immediately.`,
    buildingCalloutsHeading: "Unpacking Services for Olympia Moves",
    buildingCallouts: `**Full Unpack**, We unbox and organize every room in your new Olympia home. All boxes broken down and packing materials removed. **Partial Unpack**, Choose specific rooms, kitchen and master bedroom are the most popular choices. **Kitchen Setup**, We unpack and organize your kitchen so it's fully functional on day one. **Bedroom Setup**, We assemble beds, unpack clothing, and organize closets so you can sleep comfortably your first night.`,
    extraFaqs: [
      {
        q: "Do you offer unpacking services in Olympia?",
        a: "Yes. Our unpacking crews travel to Olympia to unbox and set up your new home. Unpacking services can be scheduled on move day or the day after.",
      },
      {
        q: "How long does unpacking an Olympia home take?",
        a: "A 1-bedroom apartment typically takes 2–3 hours with a 2-person crew. A 3-bedroom home usually takes 5–8 hours. Travel time to Olympia is included in the unpacking quote.",
      },
    ],
    pricingNote: "Unpacking services in Olympia run $95–$125/hr per unpacker plus travel time to Olympia. A 1-bedroom apartment typically costs $250–$500 including travel. A 3-bedroom home usually runs $600–$1,200 including travel.",
  },

  "olympia-warehousing": {
    intro: `Olympia businesses, from state agency contractors to private sector companies, need flexible warehousing solutions for the South Sound market. On The Go Moving & Storage offers short-term and long-term warehousing at our Redmond facility, with pickup and delivery service to Olympia. We handle receiving, inventory management, and last-mile delivery throughout the greater Seattle and South Sound area.`,
    buildingCalloutsHeading: "Warehousing Solutions for Olympia Businesses",
    buildingCallouts: `**State Agency Contractor Storage**, State government contractors in Olympia use our warehousing for equipment, supplies, and project materials. **Private Sector Business Storage**, Olympia's growing private sector uses our warehousing for inventory overflow and equipment storage. **Construction & Contractor Storage**, Olympia-area contractors use our warehousing for materials and equipment between projects. **E-commerce Fulfillment**, Olympia-based e-commerce businesses use our pick-and-pack services for order fulfillment.`,
    extraFaqs: [
      {
        q: "Do you offer warehousing with delivery to Olympia?",
        a: "Yes. We store your items at our Redmond facility and deliver to Olympia on a scheduled basis. Delivery to Olympia is available weekly or on-demand based on your business needs.",
      },
      {
        q: "Do you offer month-to-month warehousing for Olympia businesses?",
        a: "Yes. All our warehousing contracts are month-to-month, no long-term commitment required. Minimum storage period is 30 days.",
      },
    ],
    pricingNote: "Warehousing for Olympia businesses starts at $195/month for a 10×10 space at our Redmond facility. Delivery to Olympia priced separately based on frequency and volume. Month-to-month contracts.",
  },
};