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
    intro: `Seattle's residential neighborhoods each impose their own logistical demands, and the difference between a smooth move and a stressful one often comes down to whether your moving company has done it before. Capitol Hill's dense blocks require SDOT temporary no-parking permits filed 72 hours in advance — we handle that paperwork on your behalf. Queen Anne's steep grades demand properly loaded trucks and experienced drivers who know how to position a 26-foot box truck on a hillside. Ballard and Fremont have overhead utility lines that limit truck height on certain residential streets, so we scout routes before move day. Our crews have been navigating Seattle's neighborhoods since 2009, and that institutional knowledge is built into every quote we give.`,
    buildingCalloutsHeading: "Seattle Neighborhoods We Know Best",
    buildingCallouts: `We move homes in every Seattle neighborhood, but some areas come up most often: Capitol Hill (permit coordination on Broadway and Pine), Queen Anne (steep lots on 1st Ave N and Taylor Ave N), Ballard (narrow residential streets in the 24th Ave NW corridor), Magnolia (long driveways and limited street access), Beacon Hill (steep grades and parking restrictions near the light rail station), and South Lake Union (new construction with loading dock coordination). If your home is in any of these areas, mention it when you request a quote — we'll flag any access issues before move day.`,
    extraFaqs: [
      {
        q: "Do you handle the SDOT parking permit for Seattle home moves?",
        a: "Yes. For moves in Capitol Hill, Belltown, First Hill, and other dense Seattle neighborhoods where street parking is limited, we file the SDOT temporary no-parking permit on your behalf. The permit reserves curb space for our truck so we can park directly in front of your home. We handle the application, the fee, and the posting — you don't have to do anything.",
      },
      {
        q: "Can you move a home on Queen Anne's steep streets?",
        a: "Yes — Queen Anne is one of our most active areas. We use properly loaded trucks with weight distributed toward the rear for steep-grade streets, and our drivers are trained on the specific grades on Taylor Ave N, 1st Ave N, and Queen Anne Ave N. We also carry wheel chocks and use them on every steep-street job. Call us to discuss your specific address and we'll confirm the right truck size.",
      },
    ],
    pricingNote: "Seattle rates reflect SDOT permit costs where applicable.",
  },

  "seattle-apartment": {
    intro: `Seattle's apartment market is among the most active in the country, and the logistics vary dramatically by building and neighborhood. South Lake Union high-rises — including buildings in the Amazon campus corridor — require elevator reservations booked 48–72 hours in advance and enforce strict move-in windows, typically 8 a.m. to 5 p.m. on weekdays. Capitol Hill buildings like AVA Capitol Hill and The Danforth have their own COI requirements that name the building as additional insured. Ballard and Fremont low-rises have narrower truck access and often no freight elevator, which means stair carries and careful furniture disassembly. We call the building management before every move to confirm requirements, so none of it lands on you.`,
    buildingCalloutsHeading: "Seattle Apartment Buildings We Move Regularly",
    buildingCallouts: `We have on-file experience with the following Seattle apartment buildings and their specific requirements: Modera Ballard (elevator reservation, 4-hour window), AVA Capitol Hill (COI required, named insured), The Danforth (elevator key from management), Cascade Tower in South Lake Union (loading dock coordination, 2-hour window), Insignia Towers in Belltown (elevator reservation, $500 damage deposit), and 2nd & Pike in Downtown (street-level loading only, no dock). If your building isn't on this list, we'll call them directly — we do this for every move.`,
    extraFaqs: [
      {
        q: "My Seattle apartment building requires a certificate of insurance. Can you provide one?",
        a: "Yes. We carry general liability and cargo insurance and can provide a certificate of insurance (COI) naming your building as additional insured. Most buildings require this, and we've provided COIs for hundreds of Seattle buildings. When you book, let us know your building's requirements — we'll have the COI ready before move day.",
      },
      {
        q: "What if my Seattle apartment building only allows moves on weekdays?",
        a: "Many Seattle high-rises restrict moves to weekday business hours. We work Monday through Sunday and can accommodate weekday moves with advance notice. If your building has a specific move-in window (e.g., 8 a.m.–5 p.m. weekdays only), we'll schedule your move to start early enough to complete within that window. Let us know your building's restrictions when you request a quote.",
      },
    ],
    pricingNote: "Elevator reservation fees (if charged by building) are not included in our quote.",
  },

  "seattle-commercial": {
    intro: `Seattle's commercial moving market is shaped by its tech-heavy economy and the density of its office corridors. South Lake Union — home to Amazon's headquarters and dozens of tech companies — has loading dock schedules that require advance coordination and often restrict moves to off-peak hours. The Pioneer Square and Downtown core have street-level loading restrictions that require permits on certain blocks. Capitol Hill's Pike/Pine corridor has narrow alleys and limited truck access that require smaller vehicles for the final approach. Our commercial crews have relocated offices for companies ranging from five-person startups to 200-person teams, and we've done it in every major Seattle office building. We work evenings and weekends to keep your business running.`,
    buildingCalloutsHeading: "Seattle Office Buildings We Move Regularly",
    buildingCallouts: `We have direct experience with loading dock procedures and building requirements at: 1201 Third Avenue (after-hours loading dock, security escort required), Columbia Center (freight elevator reservation, 2-hour window), Amazon Day 1 Tower area buildings (loading dock scheduling through building management), WeWork locations on Capitol Hill and South Lake Union (standard COI, coordinate with community manager), and Pioneer Square buildings (street-level loading, SDOT permit required on certain blocks). For any Seattle office move, we recommend a free on-site walkthrough 1–2 weeks before your move date.`,
    extraFaqs: [
      {
        q: "Can you move our Seattle office over a weekend to avoid business disruption?",
        a: "Yes — weekend moves are our most common request for Seattle office relocations. We work Saturday and Sunday, and we can start as early as 6 a.m. to maximize your available time. Most Seattle office buildings allow weekend access with advance notice to building management. We'll coordinate directly with your building's security or property manager to confirm access.",
      },
      {
        q: "Do you handle IT equipment and server moves in Seattle?",
        a: "Yes. Our commercial crews are trained on IT equipment handling — monitors are wrapped and crated, towers are padded and secured upright, and server racks are handled with anti-static precautions. We do not disconnect or reconnect networking equipment, but we work alongside your IT team and can coordinate timing around their schedule. For server room moves, we recommend a pre-move walkthrough with your IT lead.",
      },
    ],
    pricingNote: "Commercial rates include 2-person crew minimum. Larger crews quoted on-site.",
  },

  "seattle-packing": {
    intro: `Professional packing in Seattle is more nuanced than it looks. Capitol Hill apartments often have narrow hallways and tight stairwells that require furniture disassembly before packing can begin. South Lake Union high-rises have strict move-out inspection requirements, so every item needs to be packed in a way that prevents wall and floor damage during the carry-out. Ballard craftsman homes frequently have fragile vintage fixtures and antique furniture that require specialty wrapping. Our packing crews bring all materials — boxes, tape, bubble wrap, packing paper, wardrobe boxes, and specialty dish packs — and they're trained to pack for both protection and efficient loading. We also offer a fragile-only option for customers who want to pack most items themselves.`,
    buildingCalloutsHeading: "Packing Services Across Seattle Neighborhoods",
    buildingCallouts: `Our packing crews work throughout Seattle and are experienced with the specific challenges of each area: Capitol Hill and First Hill (tight stairwells, narrow hallways requiring furniture disassembly before packing), Magnolia and Madison Park (large homes with extensive art collections and antique furniture), Ballard and Fremont (craftsman homes with vintage fixtures and irregular-sized items), South Lake Union and Belltown (high-rise move-out inspections requiring careful floor and wall protection), and Queen Anne (steep-lot homes where packing sequence matters for load balance on the truck).`,
    extraFaqs: [
      {
        q: "How far in advance should I book packing services for a Seattle move?",
        a: "For most Seattle moves, booking 1–2 weeks in advance is sufficient. For peak season (May–September) and end-of-month dates, we recommend 3–4 weeks. If you're in a South Lake Union high-rise with a fixed move-out window, book as early as possible — we need to schedule the packing crew to finish the day before your move so the truck can load within your building's time window.",
      },
      {
        q: "Can you pack just my fragile items and art for my Seattle move?",
        a: "Yes. Fragile-only packing is one of our most popular options in Seattle, especially for homes in Magnolia, Madison Park, and Capitol Hill that have significant art collections or antique furniture. Our packers bring specialty materials — mirror boxes, dish packs, custom foam inserts, and wardrobe boxes — and they'll focus exclusively on the items you identify as fragile. Everything else you can pack yourself.",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // BELLEVUE
  // ──────────────────────────────────────────────────────────────────────────

  "bellevue-residential": {
    intro: `Bellevue home moves require a level of preparation that most moving companies don't provide. Somerset and Newport Hills have some of the steepest residential driveways on the Eastside — we assess access on every quote and bring the right equipment. The Crossroads and Lake Hills neighborhoods have dense townhome developments with shared driveways and HOA move-in windows that close at 5 p.m. sharp. West Bellevue and Medina have large estates with long carries and gated access that requires advance coordination with property managers. Our Redmond warehouse is five miles from central Bellevue — the closest of any major moving company — which means faster response times and lower fuel surcharges on your quote.`,
    buildingCalloutsHeading: "Bellevue Neighborhoods We Know Best",
    buildingCallouts: `We move homes throughout Bellevue and have specific experience with the access challenges in each area: Somerset (steep driveways on SE 60th St and Somerset Blvd SE, long carries), Newport Hills (narrow cul-de-sacs, limited truck turnaround), Crossroads (dense townhome complexes, shared driveways, HOA coordination), Factoria (newer construction with loading dock access for some complexes), Bridle Trails (gated community, advance notice required), and West Bellevue / Medina (large estates, long carries, private road access). Mention your neighborhood when you request a quote and we'll flag any access considerations.`,
    extraFaqs: [
      {
        q: "Do you move homes in gated Bellevue communities like Bridle Trails?",
        a: "Yes. We move in and out of gated communities throughout Bellevue regularly. For gated communities, we need the gate code or a contact number for the gate attendant — your HOA or property manager can provide this. We recommend confirming access details at least 48 hours before your move date. We've moved in Bridle Trails, Clyde Hill, and other gated Bellevue neighborhoods many times.",
      },
      {
        q: "How do you handle steep driveways in Somerset and Newport Hills?",
        a: "Steep driveways are one of the most common challenges in Bellevue's hillside neighborhoods. We assess driveway grade on every quote — if a driveway is too steep for our standard truck, we use a smaller vehicle for the driveway approach and shuttle items to the main truck on the street. We also carry wheel chocks and use them on every steep-grade job. There's no additional charge for this — it's part of our standard preparation for Bellevue hillside moves.",
      },
    ],
    pricingNote: "Bellevue rates reflect Eastside market pricing. Flat-rate quotes available.",
  },

  "bellevue-apartment": {
    intro: `Bellevue's apartment market spans a wide range — from luxury high-rises in Downtown to mid-rise complexes in Crossroads and Eastgate — and each building type has its own requirements. The Bravern and Cirrus in Downtown Bellevue require elevator reservations booked 48–72 hours in advance and enforce strict move-in windows. Bellevue Towers requires a $500 refundable damage deposit and a COI naming the building as additional insured. Crossroads and Eastgate complexes often have limited parking for moving trucks — we scout access points before move day to avoid blocking fire lanes or shared driveways. Our crews handle all building coordination before your move date so you don't have to navigate it yourself.`,
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
    intro: `Bellevue's commercial moving market is driven by its position as the Eastside's primary business hub. The Spring District — home to REI's headquarters, T-Mobile's campus, and dozens of tech companies — has loading dock schedules that require advance coordination and often restrict moves to after-hours or weekends. Downtown Bellevue's office towers on 106th Ave NE and Bellevue Way NE have freight elevator reservations that book out weeks in advance during peak season. The Bel-Red corridor has newer office parks with loading docks but limited street access for large trucks. Our commercial crews have relocated offices of every size in Bellevue, and we work evenings and weekends to keep your business running without interruption.`,
    buildingCalloutsHeading: "Bellevue Office Buildings We Move Regularly",
    buildingCallouts: `We have direct experience with the following Bellevue office buildings and their move-in procedures: One Bellevue Center (freight elevator reservation, after-hours preferred), Lincoln Square (loading dock on NE 8th St, advance scheduling required), Skyline Tower (freight elevator, COI required), Spring District buildings (loading dock coordination through property management), T-Mobile campus (security badge coordination, after-hours access), and Eastgate office parks (surface parking, standard access). For any Bellevue commercial move, we recommend a free on-site walkthrough 2 weeks before your move date.`,
    extraFaqs: [
      {
        q: "Can you relocate our Bellevue office to the Spring District?",
        a: "Yes — the Spring District is one of our most active commercial move destinations. We're familiar with the loading dock procedures for the major Spring District buildings and have moved teams into REI's campus, T-Mobile's offices, and several tech startups in the area. We'll coordinate directly with your building's property manager and can work weekends or evenings to minimize business disruption.",
      },
      {
        q: "Do you provide chain-of-custody documentation for Bellevue office moves?",
        a: "Yes. For commercial moves that require documentation — particularly IT equipment, server moves, and confidential file transfers — we provide an itemized inventory with condition notes for every item. Each box is numbered and logged. We can also provide a signed chain-of-custody form if your company requires it for compliance purposes.",
      },
    ],
    pricingNote: "Commercial rates from $140–$180/hr (2-person crew). Free on-site estimate available.",
  },

  "bellevue-packing": {
    intro: `Bellevue homes tend to be larger and better-furnished than the regional average, which means packing takes longer and requires more specialty materials than a typical move. Somerset and Newport Hills estates often have extensive art collections, antique furniture, and custom cabinetry that require custom crating or specialty wrapping. Downtown Bellevue high-rises have strict move-out inspection requirements — every item needs to be packed and carried out in a way that prevents damage to common area walls and floors. Our Bellevue packing crews bring all materials and are trained on the full range of specialty packing: mirror boxes, dish packs, wardrobe boxes, custom foam inserts, and flat-screen TV boxes. We also offer a pack-and-move-same-day option for customers with tight schedules.`,
    buildingCalloutsHeading: "Packing Services Across Bellevue Neighborhoods",
    buildingCallouts: `Our packing crews work throughout Bellevue and are experienced with the specific requirements of each area: Downtown Bellevue high-rises (move-out inspection compliance, floor and wall protection during carry-out), Somerset and Newport Hills (large homes, art collections, antique furniture requiring specialty wrapping), Crossroads and Eastgate (mid-size apartments and townhomes, standard packing), Factoria and Newport Hills (newer construction with oversized furniture common in recent builds), and Bridle Trails (gated community estates with extensive contents requiring full-pack service).`,
    extraFaqs: [
      {
        q: "Can you pack and move our Bellevue home on the same day?",
        a: "Yes, for homes up to 2 bedrooms. For a same-day pack-and-move, we send a larger crew — typically 3–4 people — so packing and loading can happen simultaneously. One team packs while another loads the truck. This works well for Bellevue apartments and smaller homes. For 3+ bedroom homes, we recommend packing the day before the move to ensure everything is ready when the truck arrives.",
      },
      {
        q: "Do you provide custom crating for art and antiques in Bellevue?",
        a: "Yes. For high-value art, antiques, and fragile collectibles, we offer custom crating using wood or foam-lined boxes built to the specific dimensions of your item. This is particularly common for Bellevue clients in Somerset and West Bellevue who have significant art collections. Custom crating is quoted separately — contact us with photos and dimensions of the items you need crated.",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // KIRKLAND
  // ──────────────────────────────────────────────────────────────────────────

  "kirkland-residential": {
    intro: `Kirkland's residential neighborhoods range from compact bungalows in Norkirk and Houghton to large waterfront properties in Moss Bay and Highlands — and the logistical challenges vary just as widely. Downtown Kirkland's waterfront streets have limited truck parking and require early-morning scheduling to avoid tourist traffic on summer weekends. Lakeview and Highlands have steep hillside lots with long carries and limited truck access on certain streets. Juanita's older neighborhoods have narrow residential streets where we use smaller trucks for the final approach. Our crews have been moving Kirkland homes since 2009 and know every street, every HOA rule, and every access quirk in the city.`,
    buildingCalloutsHeading: "Kirkland Neighborhoods We Know Best",
    buildingCallouts: `We move homes throughout Kirkland and have specific experience with the access challenges in each area: Downtown Kirkland waterfront (limited parking on Lake St S and Central Way, early-morning scheduling recommended), Moss Bay (large waterfront properties, long carries, dock access coordination), Lakeview and Highlands (steep hillside lots, limited truck turnaround on upper streets), Juanita (narrow streets near Juanita Beach Park, smaller trucks required on some blocks), Bridle Trails (gated community, advance notice required), and Totem Lake (newer mixed-use development, standard access). Mention your neighborhood when you request a quote.`,
    extraFaqs: [
      {
        q: "Do you move homes near Kirkland's waterfront on Lake Washington?",
        a: "Yes — Kirkland's waterfront is one of our most active areas. Waterfront properties in Moss Bay and Downtown Kirkland often have dock access, steep paths to the water, and limited street parking. We assess access on every waterfront quote and bring the right equipment — dollies, furniture straps, and stair-climbing equipment — for properties with challenging approaches. We recommend scheduling waterfront moves on weekday mornings to avoid the summer tourist traffic on Lake Street.",
      },
      {
        q: "Are there HOA move-in restrictions in Kirkland's Bridle Trails neighborhood?",
        a: "Yes. Bridle Trails is a gated community with HOA move-in rules that vary by section. Most sections require advance notice to the HOA (typically 48–72 hours), a gate code or escort, and sometimes a refundable damage deposit. We handle all HOA coordination on your behalf — just provide us with your HOA contact when you book and we'll take it from there.",
      },
    ],
  },

  "kirkland-apartment": {
    intro: `Kirkland's apartment market is concentrated in two main areas: Totem Lake, near Google's major campus, and Downtown Kirkland. Totem Lake complexes — including Parkview Totem Lake and the newer mixed-use buildings on 124th Ave NE — require elevator reservations and certificates of insurance, and many have move-in windows that align with Google's campus security schedule. The Parkplace complex in Downtown Kirkland is one of the most active move locations in the city; our crews know its specific elevator booking process and the parking restrictions on the surrounding streets. We call every building before your move to confirm current requirements — policies change, and we don't want you to find out about a new COI requirement on move day.`,
    buildingCalloutsHeading: "Kirkland Apartment Buildings We Move Regularly",
    buildingCallouts: `We have on-file experience with the following Kirkland apartment buildings: Parkplace (Downtown Kirkland, elevator reservation required, limited street parking on Central Way), Totem Lake complexes including Parkview Totem Lake (COI required, elevator reservation, 8 a.m.–5 p.m. window), Google campus-area apartments on 124th Ave NE (security coordination, COI required), Juanita Village (mid-rise, standard elevator reservation), and Houghton-area complexes (older buildings, no freight elevator, stair carries common). If your building isn't listed, we'll call them directly.`,
    extraFaqs: [
      {
        q: "Do you move in and out of the Parkplace complex in Downtown Kirkland?",
        a: "Yes — Parkplace is one of our most frequent Kirkland move locations. We know the building's elevator reservation process, the parking restrictions on Central Way, and the specific move-in window hours. When you book, let us know your unit number and we'll handle the building coordination. We typically book the elevator 72 hours in advance to ensure availability.",
      },
      {
        q: "What are the move-in requirements for Totem Lake apartments near Google's campus?",
        a: "Most Totem Lake apartment buildings near Google's campus require a certificate of insurance naming the building as additional insured, an elevator reservation booked 48–72 hours in advance, and moves restricted to weekday hours (typically 8 a.m.–5 p.m.). Some buildings also require a refundable damage deposit. We handle all of this — just let us know your building when you book.",
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
        a: "Yes. We've moved teams within and between Google's Kirkland campus buildings. Campus moves require security badge coordination and advance approval from Google's facilities team — we work directly with your facilities contact to get the necessary access. We also carry the required COI for Google campus work. Intra-campus moves are typically done on weekends to avoid disrupting the work week.",
      },
      {
        q: "Do you move law firms and professional services offices in Downtown Kirkland?",
        a: "Yes. We move law firms, financial services offices, and professional services companies in Downtown Kirkland regularly. For these moves, we're particularly careful with confidential files and document boxes — each box is numbered, logged, and delivered to the correct room at the destination. We can also provide a signed chain-of-custody form if your firm requires it.",
      },
    ],
  },

  "kirkland-packing": {
    intro: `Kirkland homes range from compact Norkirk bungalows to large Moss Bay waterfront estates, and packing requirements vary accordingly. Waterfront properties often have extensive art collections, nautical antiques, and custom furniture that require specialty wrapping and custom crating. Lakeview and Highlands homes tend to have large, heavy furniture on steep lots — packing sequence matters here because items need to be loaded in the right order for the truck to navigate the driveway safely. Our Kirkland packing crews bring all materials and are experienced with the full range of specialty packing. We also know which Kirkland apartment buildings require move-out inspections, and we pack accordingly to protect common area walls and floors.`,
    buildingCalloutsHeading: "Packing Services Across Kirkland Neighborhoods",
    buildingCallouts: `Our packing crews work throughout Kirkland and are experienced with the specific requirements of each area: Moss Bay and Downtown Kirkland waterfront (art collections, nautical antiques, custom furniture requiring specialty wrapping), Lakeview and Highlands (large homes on steep lots, packing sequence critical for safe loading), Juanita (older homes with vintage fixtures and irregular-sized items), Totem Lake apartments (move-out inspection compliance, floor and wall protection), and Bridle Trails (large estates, full-pack service common, advance scheduling recommended).`,
    extraFaqs: [
      {
        q: "Do you offer packing services for Kirkland waterfront homes?",
        a: "Yes. Kirkland waterfront homes in Moss Bay and the Downtown Kirkland area often have significant art collections, antique furniture, and custom pieces that require specialty packing. We bring mirror boxes, custom foam inserts, and specialty wrapping materials for high-value items. For items that require custom crating — oversized art, sculptures, or antique furniture — we can arrange that as well. Contact us with photos and dimensions.",
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
    intro: `Redmond is our home city — our warehouse is on Redmond Way, and our crews have been moving Redmond homes since the company was founded in 2009. That means we know Education Hill's long wooded driveways and the specific streets where a 26-foot truck can't make the turn. We know which Redmond Ridge developments have HOA move-in windows that close at 6 p.m. and which ones require a refundable damage deposit. We know the traffic patterns on 520 and Redmond Way and how to route around them on move day. No other moving company has this depth of local knowledge in Redmond, and it shows in the smoothness of every move we do here.`,
    buildingCalloutsHeading: "Redmond Neighborhoods We Know Best",
    buildingCallouts: `We move homes throughout Redmond and have specific experience with every neighborhood: Education Hill (long wooded driveways, some streets require smaller trucks, steep grades on upper lots), Bear Creek (rural properties with long carries, limited road access in some areas), Overlake (tech campus-adjacent apartments and townhomes, HOA coordination), Redmond Ridge (newer planned community, strict HOA move-in rules, damage deposit common), Downtown Redmond (mixed-use blocks, limited truck parking, early-morning scheduling recommended), and Novelty Hill (newer large-lot homes, long carries, gated access in some developments).`,
    extraFaqs: [
      {
        q: "What are the HOA move-in rules in Redmond Ridge?",
        a: "Redmond Ridge HOA rules vary by section, but most require advance notice (48–72 hours), a refundable damage deposit ($200–$500), and moves restricted to daylight hours. Some sections also require a COI. We handle all HOA coordination on your behalf — just provide your HOA contact when you book and we'll confirm the requirements before move day. We've moved in and out of Redmond Ridge dozens of times and know the process well.",
      },
      {
        q: "Can you access homes on Education Hill with long driveways?",
        a: "Yes. Education Hill is one of our most active areas. Many Education Hill homes have long wooded driveways that require careful truck positioning — on some properties, we use a smaller vehicle for the driveway approach and shuttle items to the main truck on the street. We assess driveway access on every Education Hill quote. There's no additional charge for shuttle service — it's part of our standard preparation for this neighborhood.",
      },
    ],
    pricingNote: "Redmond is our home base — no travel surcharge for any Redmond move.",
  },

  "redmond-apartment": {
    intro: `Redmond's apartment market is heavily shaped by Microsoft's nearby campus, and the Overlake neighborhood — directly adjacent to Microsoft's main campus — has some of the most active apartment move traffic on the Eastside. Overlake complexes like Modera Overlake and The Reserve at Overlake require elevator reservations, certificates of insurance, and move-in fees that vary by building. Downtown Redmond's newer mixed-use buildings on Redmond Way have loading dock access but strict move-in window requirements. Our Redmond-based crews handle all building coordination before your move date, and because we're based here, we can often accommodate last-minute bookings that out-of-area companies can't.`,
    buildingCalloutsHeading: "Redmond Apartment Buildings We Move Regularly",
    buildingCallouts: `We have on-file experience with the following Redmond apartment buildings: Modera Overlake (elevator reservation, COI required, 8 a.m.–5 p.m. window), The Reserve at Overlake (standard elevator reservation, move-in fee), Esterra Park apartments (newer complex, loading dock access, COI required), Downtown Redmond mixed-use buildings on Redmond Way (loading dock, advance scheduling required), and Redmond Town Center-area apartments (standard elevator reservation, limited street parking). If your building isn't listed, we'll call them directly.`,
    extraFaqs: [
      {
        q: "Do you move in and out of Modera Overlake in Redmond?",
        a: "Yes — Modera Overlake is one of our most frequent Redmond move locations. We know the building's elevator reservation process, the COI requirements, and the move-in window hours. When you book, let us know your unit number and we'll handle the building coordination. Because we're based in Redmond, we can often accommodate same-week bookings at Modera Overlake when other companies can't.",
      },
      {
        q: "How close is your warehouse to the Overlake area of Redmond?",
        a: "Our warehouse on Redmond Way is approximately 2 miles from the Overlake neighborhood. This means our crew can be at your Overlake apartment within 10–15 minutes of leaving the warehouse — no long drive time, no travel surcharge. For Microsoft employees moving within Overlake or between Overlake and other Eastside locations, this proximity translates directly into lower move costs.",
      },
    ],
    pricingNote: "No travel surcharge for Redmond moves. Overlake proximity = lower total cost.",
  },

  "redmond-commercial": {
    intro: `Redmond is home to Microsoft, Nintendo of America, and hundreds of tech companies, making it one of the most active commercial moving markets in Washington State. Microsoft's campus alone generates dozens of office relocations every year — intra-campus moves, team consolidations, and full department relocations. Our commercial crews are trained on IT equipment handling, server room moves, and the chain-of-custody documentation that Microsoft's facilities team requires. Nintendo of America's campus on 118th Ave NE has its own security and access procedures that we've navigated many times. For smaller Redmond tech companies, we offer after-hours and weekend moves that keep your team productive through the transition.`,
    buildingCalloutsHeading: "Redmond Office Buildings We Move Regularly",
    buildingCallouts: `We have direct experience with the following Redmond office locations: Microsoft main campus (security badge coordination, facilities team approval, COI required), Nintendo of America campus on 118th Ave NE (security coordination, advance notice required), Redmond Town Center office buildings (loading dock access, standard COI), Overlake tech park buildings (surface parking, standard access), and Downtown Redmond mixed-use office space (street-level loading, limited parking on Redmond Way). Our Redmond warehouse allows us to stage large commercial moves efficiently — we can pre-position equipment and supplies the day before your move.`,
    extraFaqs: [
      {
        q: "Can you move our team within Microsoft's Redmond campus?",
        a: "Yes. We've done intra-campus moves at Microsoft's Redmond campus many times. Campus moves require advance approval from Microsoft's facilities team and security badge coordination — we work directly with your facilities contact to get the necessary access. We carry the required COI for Microsoft campus work and are familiar with the loading dock procedures for the major campus buildings. Intra-campus moves are typically done on weekends.",
      },
      {
        q: "Do you handle server room moves for Redmond tech companies?",
        a: "Yes. Server room moves require anti-static precautions, careful handling of rack-mounted equipment, and coordination with your IT team on shutdown and startup sequencing. We don't disconnect or reconnect networking equipment, but we work alongside your IT team and can coordinate timing around their schedule. We provide an itemized inventory with condition notes for every piece of server equipment. For server room moves, a pre-move walkthrough with your IT lead is strongly recommended.",
      },
    ],
    pricingNote: "Commercial rates from $140–$175/hr. Redmond-based crew = no travel surcharge.",
  },

  "redmond-packing": {
    intro: `Redmond homes range from compact townhomes near Redmond Town Center to large wooded properties on Education Hill and Bear Creek, and packing requirements vary accordingly. Education Hill and Bear Creek properties often have extensive contents — large homes with multiple levels, garages full of equipment, and outdoor furniture that needs weatherproofing for storage. Overlake apartments have strict move-out inspection requirements, so packing needs to protect common area walls and floors during carry-out. Our Redmond packing crews bring all materials and are experienced with the full range of packing scenarios. Because we're based in Redmond, we can often accommodate same-week packing bookings that out-of-area companies can't.`,
    buildingCalloutsHeading: "Packing Services Across Redmond Neighborhoods",
    buildingCallouts: `Our packing crews work throughout Redmond and are experienced with the specific requirements of each area: Education Hill and Bear Creek (large homes on wooded lots, multi-level packing, garage and outdoor equipment), Overlake apartments (move-out inspection compliance, floor and wall protection during carry-out), Redmond Ridge (large planned-community homes, HOA move-out inspection requirements), Downtown Redmond mixed-use (tight stairwells in some buildings, furniture disassembly before packing), and Novelty Hill (newer large-lot homes, extensive contents, full-pack service common).`,
    extraFaqs: [
      {
        q: "Can you pack our Redmond home the day before the move?",
        a: "Yes — packing the day before is our recommended approach for most Redmond homes. We send the packing crew the day before your move so everything is boxed, labeled, and ready when the moving truck arrives the next morning. This is especially useful for Education Hill and Bear Creek homes with large amounts of content. Same-day pack-and-move is available for homes up to 2 bedrooms.",
      },
      {
        q: "Do you pack garages and outdoor equipment for Redmond moves?",
        a: "Yes. Garages and outdoor equipment are often the most time-consuming part of a Redmond move — especially for Education Hill and Bear Creek homes with large garages, workshop equipment, and outdoor furniture. We bring heavy-duty boxes, stretch wrap, and weatherproof packing materials for outdoor items. For large power tools and equipment, we can disassemble and wrap components for safe transport.",
      },
    ],
    pricingNote: "Redmond packing rates: $35–$55/hr per packer. All materials included.",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // ISSAQUAH
  // ──────────────────────────────────────────────────────────────────────────

  "issaquah-residential": {
    intro: `Issaquah's residential neighborhoods present a unique combination of challenges: the steep internal roads of Issaquah Highlands, the HOA move-in rules of Talus, the narrow historic streets of Downtown Issaquah, and the I-90 traffic that can add an hour to any move that isn't scheduled carefully. Issaquah Highlands — one of the largest planned communities in Washington State — has HOA move-in rules that require advance notice, a COI, and moves restricted to specific hours. Talus has similar requirements plus steep hillside lots that require careful truck positioning. Our crews have been moving Issaquah homes since 2009 and know every neighborhood's specific requirements before the truck leaves the yard.`,
    buildingCalloutsHeading: "Issaquah Neighborhoods We Know Best",
    buildingCallouts: `We move homes throughout Issaquah and have specific experience with each area: Issaquah Highlands (HOA move-in rules, COI required, restricted hours, steep internal roads), Talus (HOA coordination, steep hillside lots, limited truck access on upper streets), Downtown Issaquah (narrow historic streets near Gilman Village, limited truck parking), Grand Ridge (newer large-lot homes, long carries, HOA coordination), Montreux (gated community, advance notice required, large estate homes), and East Issaquah (rural properties, long driveways, limited road access in some areas).`,
    extraFaqs: [
      {
        q: "What are the HOA move-in rules in Issaquah Highlands?",
        a: "Issaquah Highlands HOA move-in rules require advance notice (typically 48–72 hours to the HOA), a certificate of insurance naming the HOA as additional insured, and moves restricted to daylight hours (typically 8 a.m.–6 p.m.). Some sections also require a refundable damage deposit. We handle all HOA coordination on your behalf — just provide your HOA contact when you book and we'll confirm the requirements before move day.",
      },
      {
        q: "How do you handle I-90 traffic for Issaquah moves?",
        a: "I-90 traffic between Issaquah and the rest of the Eastside can be significant during peak hours, especially on weekday mornings and Friday afternoons. We schedule Issaquah moves to avoid peak traffic — typically starting at 7–8 a.m. on weekdays to get ahead of the morning rush. For moves that involve multiple trips (large homes or long-distance moves within the region), we plan the route and timing to minimize I-90 exposure.",
      },
    ],
  },

  "issaquah-apartment": {
    intro: `Issaquah's apartment market is centered around Issaquah Highlands and the newer mixed-use developments near downtown. Issaquah Highlands apartment buildings have standard elevator and move-in window requirements, and the HOA-level rules that apply to the broader Highlands community also apply to apartment residents. The newer mixed-use buildings near Front Street and Gilman Village have loading dock access but limited street parking for moving trucks. Our crews handle all building coordination before your move date, and because we're based nearby in Redmond, we can often accommodate last-minute bookings that out-of-area companies can't.`,
    buildingCalloutsHeading: "Issaquah Apartment Buildings We Move Regularly",
    buildingCallouts: `We have on-file experience with the following Issaquah apartment buildings: Issaquah Highlands apartment complexes (HOA and building elevator coordination, COI required, restricted hours), Front Street mixed-use buildings in Downtown Issaquah (loading dock access, limited street parking), Gilman Village-area apartments (older buildings, no freight elevator, stair carries common on upper floors), Grand Ridge apartments (newer construction, standard elevator reservation), and Talus-area townhomes (HOA coordination, steep access on some lots).`,
    extraFaqs: [
      {
        q: "Do Issaquah Highlands apartments require a COI for moving companies?",
        a: "Yes. Most apartment buildings in Issaquah Highlands require a certificate of insurance (COI) naming the building as additional insured. The HOA-level rules for Issaquah Highlands also require advance notice and moves restricted to specific hours. We carry the required insurance and can provide a COI for any Issaquah Highlands building. When you book, let us know your building and we'll handle the coordination.",
      },
      {
        q: "Is there parking for moving trucks near Downtown Issaquah apartments?",
        a: "Parking for large moving trucks near Downtown Issaquah and Gilman Village can be limited. We scout parking options before every Downtown Issaquah move — in some cases, we use a smaller vehicle for the final approach and shuttle items to the main truck on Front Street or a nearby side street. There's no additional charge for this — it's part of our standard preparation for Downtown Issaquah moves.",
      },
    ],
  },

  "issaquah-commercial": {
    intro: `Issaquah's commercial moving market is smaller than Seattle or Bellevue but growing steadily, driven by the expansion of businesses along Front Street and in the Gilman Village area. The Front Street corridor has street-level loading that requires careful scheduling around Issaquah's peak traffic hours on I-90. Gilman Village's historic buildings have narrow access and no loading docks, requiring hand-carry from the street. Our commercial crews handle office moves of every size in Issaquah and work evenings and weekends to minimize business disruption. We're based in Redmond — 15 minutes from Issaquah — which means fast response times and no travel surcharge.`,
    buildingCalloutsHeading: "Issaquah Office Buildings We Move Regularly",
    buildingCallouts: `We have direct experience with the following Issaquah office locations: Front Street office buildings (street-level loading, I-90 traffic scheduling important), Gilman Village office spaces (historic buildings, narrow access, hand-carry from street), Issaquah Highlands commercial buildings (standard loading dock access, HOA coordination may apply), and East Issaquah office parks (surface parking, standard access). For any Issaquah commercial move, we recommend a free on-site walkthrough to assess access and plan the move sequence.`,
    extraFaqs: [
      {
        q: "Can you move our Issaquah office on a weekend?",
        a: "Yes — weekend moves are our most common request for Issaquah office relocations. We work Saturday and Sunday, and we can start as early as 6 a.m. to maximize your available time. Most Issaquah commercial buildings allow weekend access with advance notice. We'll coordinate directly with your building's property manager or landlord to confirm access.",
      },
      {
        q: "How long does a typical Issaquah office move take?",
        a: "A small Issaquah office (5–10 workstations) typically takes 4–6 hours with a 2-person crew. A medium office (20–30 workstations) takes 8–12 hours with a 3-person crew. For larger offices, we recommend a free on-site walkthrough to provide an accurate time and cost estimate. We provide flat-rate quotes for commercial moves so you know the final price before we start.",
      },
    ],
  },

  "issaquah-packing": {
    intro: `Issaquah homes range from historic downtown properties to large new construction in Issaquah Highlands and Talus, and packing requirements vary accordingly. Issaquah Highlands and Talus homes tend to be large and well-furnished, with extensive contents that benefit from professional packing. Historic Downtown Issaquah homes often have vintage fixtures, antique furniture, and irregular-sized items that require specialty wrapping. Our Issaquah packing crews bring all materials and are experienced with the full range of packing scenarios. We also know the HOA move-out inspection requirements for Issaquah Highlands and Talus, and we pack accordingly to protect common area walls and floors.`,
    buildingCalloutsHeading: "Packing Services Across Issaquah Neighborhoods",
    buildingCallouts: `Our packing crews work throughout Issaquah and are experienced with the specific requirements of each area: Issaquah Highlands (large homes, HOA move-out inspection compliance, COI required), Talus (steep hillside homes, HOA coordination, packing sequence important for safe loading), Downtown Issaquah (historic homes with vintage fixtures and antique furniture, specialty wrapping required), Grand Ridge (newer large-lot homes, extensive contents, full-pack service common), and Montreux (gated estate homes, high-value contents, custom crating available).`,
    extraFaqs: [
      {
        q: "Do you pack homes in Issaquah Highlands with HOA move-out requirements?",
        a: "Yes. Issaquah Highlands HOA move-out requirements typically include protecting common area walls and floors during carry-out, which means every item needs to be properly wrapped and padded before it leaves your unit. Our packing crews are experienced with these requirements and bring floor runners, door jamb protectors, and furniture pads for every Issaquah Highlands move. We also coordinate with the HOA on your behalf to confirm specific requirements before move day.",
      },
      {
        q: "How much does it cost to pack a 3-bedroom Issaquah Highlands home?",
        a: "A typical 3-bedroom Issaquah Highlands home takes 6–10 hours to pack with a 2-person crew at $35–$55 per hour per packer. All packing materials are included — no surprise supply charges. For homes with extensive art, antiques, or a large kitchen, packing takes longer. We recommend getting a quote based on a walkthrough of your home so we can give you an accurate estimate.",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // SAMMAMISH
  // ──────────────────────────────────────────────────────────────────────────

  "sammamish-residential": {
    intro: `Sammamish is defined by its large planned communities — Klahanie, Trossachs, Pine Lake, and Beaver Lake — and the HOA move-in rules that govern them. Klahanie and Trossachs both require advance notice to the HOA, a certificate of insurance, and moves restricted to specific hours. Pine Lake and Beaver Lake have long wooded driveways that require careful truck positioning and sometimes a smaller vehicle for the final approach. The limited road network on the Sammamish Plateau means that traffic on SE 8th Street and 228th Ave SE can add significant time to a move if not scheduled carefully. Our crews know every Sammamish community's specific requirements and plan every move accordingly.`,
    buildingCalloutsHeading: "Sammamish Neighborhoods We Know Best",
    buildingCallouts: `We move homes throughout Sammamish and have specific experience with each community: Klahanie (HOA move-in rules, COI required, restricted hours, dense townhome sections), Trossachs (HOA coordination, large single-family homes, long carries), Pine Lake (wooded lots, long driveways, smaller trucks required on some streets), Beaver Lake (rural properties, long carries, limited road access in some areas), Sahalee (gated community, advance notice required, large estate homes), and Sammamish Town Center area (newer mixed-use, standard access).`,
    extraFaqs: [
      {
        q: "What are the HOA move-in rules in Klahanie?",
        a: "Klahanie HOA move-in rules require advance notice (typically 48–72 hours), a certificate of insurance naming the Klahanie HOA as additional insured, and moves restricted to daylight hours (typically 8 a.m.–6 p.m.). Some sections also require a refundable damage deposit. We handle all HOA coordination on your behalf — just provide your HOA contact when you book and we'll confirm the requirements before move day. We've moved in and out of Klahanie dozens of times.",
      },
      {
        q: "Can you access homes in Pine Lake and Beaver Lake with long driveways?",
        a: "Yes. Pine Lake and Beaver Lake properties often have long wooded driveways that require careful truck positioning. On some properties, we use a smaller vehicle for the driveway approach and shuttle items to the main truck on the street. We assess driveway access on every Pine Lake and Beaver Lake quote. There's no additional charge for shuttle service — it's part of our standard preparation for these neighborhoods.",
      },
    ],
    pricingNote: "Sammamish rates reflect large-home market. Flat-rate quotes available.",
  },

  "sammamish-apartment": {
    intro: `Sammamish has fewer apartment complexes than other Eastside cities, but the newer mixed-use developments near Sammamish Town Center have standard elevator and move-in window requirements. The Sammamish Town Center mixed-use buildings are the most active apartment move locations in the city, and our crews are familiar with their specific elevator reservation processes and parking restrictions. For apartment residents in Klahanie and Trossachs, the HOA-level rules that apply to the broader community also apply to apartment and townhome residents — we handle all of that coordination before your move date.`,
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
    intro: `Sammamish's commercial moving market is smaller than other Eastside cities but growing steadily, driven by the expansion of businesses along SE 8th Street and near Sammamish Town Center. The limited road network on the Sammamish Plateau means that access for large moving trucks requires careful route planning — SE 8th Street and 228th Ave SE are the main commercial corridors, and traffic on these roads can be significant during peak hours. Our commercial crews handle office moves of every size in Sammamish and work evenings and weekends to minimize business disruption. We're based in Redmond — 12 minutes from Sammamish — which means fast response times and no travel surcharge.`,
    buildingCalloutsHeading: "Sammamish Office Buildings We Move Regularly",
    buildingCallouts: `We have direct experience with the following Sammamish office locations: SE 8th Street office buildings (surface parking, I-90 access via 228th Ave SE), Sammamish Town Center commercial space (standard loading access, limited street parking), and Klahanie-area office parks (HOA coordination may apply, surface parking). For any Sammamish commercial move, we recommend a free on-site walkthrough to assess access and plan the move sequence.`,
    extraFaqs: [
      {
        q: "How do you route large moving trucks to Sammamish offices?",
        a: "The Sammamish Plateau has a limited road network, and the main access routes — SE 8th Street from I-90 and 228th Ave SE — can have significant traffic during peak hours. We schedule Sammamish commercial moves to avoid peak traffic, typically starting at 7–8 a.m. on weekdays. For moves involving large trucks, we plan the route in advance to ensure there are no low-clearance bridges or weight restrictions on the approach.",
      },
      {
        q: "Can you move our Sammamish business on a weekend?",
        a: "Yes — weekend moves are our most common request for Sammamish office relocations. We work Saturday and Sunday, and we can start as early as 6 a.m. to maximize your available time. Most Sammamish commercial buildings allow weekend access with advance notice. We'll coordinate directly with your building's property manager or landlord to confirm access.",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // STORAGE — all 5 cities
  // ──────────────────────────────────────────────────────────────────────────

  "seattle-storage": {
    intro: `Seattle's storage market is shaped by its high cost of living and the frequency with which residents downsize, stage homes for sale, or need temporary storage between leases. Our storage vaults are held at our Redmond facility — 12 miles from central Seattle — and we handle the entire process: we pack your items, load them into a vault, transport them to our facility, and return them when you're ready. For Capitol Hill and South Lake Union residents staging apartments for sale, we can clear a unit in a single morning. For Magnolia and Madison Park homeowners downsizing, we offer partial-load vaults so you only pay for the space you use.`,
    buildingCalloutsHeading: "Seattle Storage Scenarios We Handle Regularly",
    buildingCallouts: `Our Seattle storage clients come from a wide range of situations: Capitol Hill and First Hill apartment residents staging for sale (we clear and vault in one trip), South Lake Union tech workers on international assignments (long-term vault storage, flexible return scheduling), Magnolia and Madison Park homeowners downsizing (partial-load vaults, inventory provided), Queen Anne homes under renovation (furniture vaulted and returned room-by-room), and Ballard and Fremont craftsman homeowners with antique furniture requiring climate-sensitive storage. All vaults are stored at our Redmond facility in a secure, climate-controlled environment.`,
    extraFaqs: [
      {
        q: "How does vault storage work for a Seattle apartment?",
        a: "We bring a portable vault to your Seattle apartment, load your items directly into it, seal it, and transport it to our Redmond facility. Your belongings stay in the same vault the entire time — nothing is transferred to a shared warehouse shelf. When you're ready for delivery, we schedule a return window and bring the vault back. Most Seattle apartment vaults are loaded and transported in a single morning.",
      },
      {
        q: "Can you store furniture for a Seattle home renovation?",
        a: "Yes. Home renovation storage is one of our most common requests from Seattle homeowners in Magnolia, Madison Park, and Queen Anne. We can vault your furniture room by room — clearing the kitchen first while you renovate, then returning it before moving on to the next room. We provide a detailed inventory of every item in storage so you know exactly what's in your vault.",
      },
    ],
    pricingNote: "Seattle storage rates: $95–$145/month per vault depending on size. First month free with any move.",
  },

  "bellevue-storage": {
    intro: `Bellevue's storage needs are driven by its active real estate market and the frequency of corporate relocations among its tech-sector workforce. When a Microsoft or Expedia employee accepts an international assignment, they need a trusted partner to vault their belongings and hold them securely until they return. When a Bellevue homeowner lists their Somerset or Newport Hills home, staging often means clearing 30–50% of the furniture. Our storage vaults at our Redmond facility — 5 miles from central Bellevue — are the closest professional vault storage option to Downtown Bellevue, and our crews can mobilize faster than any other storage provider in the area.`,
    buildingCalloutsHeading: "Bellevue Storage Scenarios We Handle Regularly",
    buildingCallouts: `Our Bellevue storage clients include: Downtown Bellevue high-rise residents at The Bravern and Cirrus staging for sale (we coordinate elevator access and clear units in one trip), Somerset and Newport Hills homeowners downsizing to smaller homes (partial-load vaults, room-by-room inventory), Microsoft and Expedia employees on international assignments (long-term vault storage, flexible return scheduling), Crossroads and Eastgate apartment residents between leases (short-term storage, 1–3 months), and West Bellevue and Medina estate homeowners with high-value art and antiques requiring climate-controlled vaults.`,
    extraFaqs: [
      {
        q: "How quickly can you pick up and vault furniture from a Bellevue home?",
        a: "For most Bellevue homes, we can schedule a vault pickup within 3–5 business days. For urgent requests — such as a seller who just accepted an offer and needs to stage quickly — we often have next-day availability. Our Redmond warehouse is 5 miles from central Bellevue, so mobilization is fast. Call us with your timeline and we'll confirm availability.",
      },
      {
        q: "Do you provide an inventory of what's in my Bellevue storage vault?",
        a: "Yes. We provide a written inventory of every item loaded into your vault, including photos of high-value items. This inventory is your reference for insurance purposes and for scheduling returns. When you're ready to retrieve specific items, you can request individual pieces from your vault — we'll retrieve them and deliver them to your Bellevue address.",
      },
    ],
    pricingNote: "Bellevue storage rates: $90–$140/month per vault. First month free with any move.",
  },

  "redmond-storage": {
    intro: `Redmond is home to our storage facility, which means Redmond customers get the fastest service and the lowest transport costs of any city we serve. Our vaults are stored on Redmond Way — the same address as our main warehouse — and our crews can load, transport, and vault a Redmond home's contents in a single morning. For Overlake tech workers between leases, for Education Hill homeowners staging for sale, and for Bear Creek families downsizing, our Redmond storage operation is the most convenient option on the Eastside. No long hauls, no third-party facilities, no uncertainty about where your belongings are stored.`,
    buildingCalloutsHeading: "Redmond Storage Scenarios We Handle Regularly",
    buildingCallouts: `Our Redmond storage clients include: Overlake apartment residents near Microsoft's campus staging for sale or between leases (we coordinate building access and vault in one trip), Education Hill homeowners downsizing to smaller homes (partial-load vaults, room-by-room inventory), Bear Creek and Grass Lawn families renovating (furniture vaulted room-by-room, returned on schedule), Redmond Ridge HOA communities with strict move-out requirements (we document condition before vaulting), and Downtown Redmond mixed-use residents needing short-term storage between leases. All vaults are stored on-site at our Redmond Way facility.`,
    extraFaqs: [
      {
        q: "Where is your Redmond storage facility located?",
        a: "Our storage facility is on Redmond Way in Redmond, WA 98052 — the same location as our main warehouse. Vaults are stored in a secure, climate-controlled environment on-site. Because we own and operate the facility directly, there are no third-party handling fees and no uncertainty about the condition of your belongings. Redmond customers can visit the facility by appointment.",
      },
      {
        q: "Can I access my stored items in Redmond without scheduling a full delivery?",
        a: "Yes. Redmond customers can schedule a facility visit to access their vault by appointment. We'll have your vault staged and accessible within 24 hours of your request. If you need specific items returned to your Redmond address, we can deliver individual pieces from your vault — you don't have to retrieve everything at once.",
      },
    ],
    pricingNote: "Redmond storage rates: $85–$135/month per vault. First month free with any move. No travel surcharge — facility is on-site.",
  },

  "kirkland-storage": {
    intro: `Kirkland's waterfront real estate market creates a consistent demand for staging storage — sellers clearing Downtown Kirkland homes and Moss Bay waterfront properties to maximize sale price. Our storage vaults at our Redmond facility are 5 miles from central Kirkland, and our crews can load and transport a Kirkland home's contents in a single trip. For Totem Lake apartment residents between leases and for Juanita and Lakeview homeowners downsizing, our vault storage offers a simpler alternative to self-storage: we do all the heavy lifting, and your belongings stay in a sealed vault rather than being handled multiple times.`,
    buildingCalloutsHeading: "Kirkland Storage Scenarios We Handle Regularly",
    buildingCallouts: `Our Kirkland storage clients include: Downtown Kirkland and Moss Bay homeowners staging for sale (we coordinate parking logistics and clear homes in one trip), Totem Lake apartment residents near Google's campus between leases (short-term vault storage, 1–3 months), Juanita and Lakeview hillside homeowners downsizing (partial-load vaults, inventory provided), Parkplace complex residents staging apartments (elevator coordination, single-morning vault loading), and Bridle Trails and Kingsgate homeowners with large furniture collections requiring climate-controlled storage.`,
    extraFaqs: [
      {
        q: "How does vault storage work for a Kirkland waterfront home staging?",
        a: "For Kirkland home staging, we typically work with your real estate agent to identify which furniture pieces should be removed. We bring vaults to your home, load the designated items, and transport them to our Redmond facility. The process usually takes one morning for a 3-bedroom home. When your home sells and you're ready for delivery, we schedule a return window and bring everything back — or deliver directly to your new address.",
      },
      {
        q: "Can you store items from a Kirkland apartment while I'm between leases?",
        a: "Yes. Short-term vault storage between leases is one of our most common requests from Kirkland apartment residents. We can vault your belongings from your old apartment and hold them for 30–90 days while you're in temporary housing, then deliver to your new address when you're ready. We'll coordinate elevator access at both buildings and handle all the logistics.",
      },
    ],
    pricingNote: "Kirkland storage rates: $90–$140/month per vault. First month free with any move.",
  },

  "sammamish-storage": {
    intro: `Sammamish's large planned-community homes create a specific storage dynamic: when families downsize or stage for sale, the volume of furniture is substantial. A typical 4-bedroom Klahanie or Trossachs home has enough furniture to fill two or three vaults. Our storage operation handles this scale efficiently — we bring multiple vaults, load them in sequence, and transport everything to our Redmond facility in a single trip. For Sammamish families on extended travel or military deployment, long-term vault storage provides peace of mind that their belongings are secure and climate-controlled while they're away.`,
    buildingCalloutsHeading: "Sammamish Storage Scenarios We Handle Regularly",
    buildingCallouts: `Our Sammamish storage clients include: Klahanie and Trossachs homeowners staging for sale (large homes, multiple vaults, HOA move-out compliance), Pine Lake and Beaver Lake families downsizing (wooded-lot homes, large garages, outdoor equipment vaulted separately), Sahalee estate homeowners with high-value art and antiques (climate-controlled vaults, custom crating available), Sammamish families on military deployment or extended international assignments (long-term storage, flexible return scheduling), and Aldarra and Inglewood Hill homeowners renovating (room-by-room vaulting and scheduled returns).`,
    extraFaqs: [
      {
        q: "How many vaults does a typical Sammamish home require?",
        a: "A typical 3-bedroom Sammamish home fills 1–2 vaults. A 4-bedroom home with a large garage typically fills 2–3 vaults. We assess your home's contents during the quote process and give you an accurate vault count before move day. You only pay for the vaults you use — we don't charge for unused space within a vault.",
      },
      {
        q: "Do you offer long-term storage for Sammamish families on military deployment?",
        a: "Yes. We offer long-term vault storage with no minimum commitment beyond the first month. Military families receive priority scheduling for both vault pickup and delivery. We can coordinate with a family member or designated contact for access to the vault if needed during the deployment period. Our Redmond facility is secure, climate-controlled, and monitored 24/7.",
      },
    ],
    pricingNote: "Sammamish storage rates: $90–$145/month per vault. First month free with any move. Multi-vault discounts available.",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // SENIOR MOVING — all 5 cities
  // ──────────────────────────────────────────────────────────────────────────

  "seattle-senior": {
    intro: `Senior moves in Seattle require a different pace and a different kind of crew. Many of Seattle's senior residents are leaving homes they've lived in for 20–40 years — in Magnolia, Madison Park, Madrona, or Leschi — and the emotional weight of the move is as real as the physical one. Our senior moving crews are selected for patience and communication skills, not just physical ability. We work at a pace that's comfortable for the client, we label boxes clearly so unpacking is intuitive, and we take the time to place furniture exactly where it's wanted in the new home. For moves to senior living communities in Seattle — including Aegis Living Queen Anne, Sunrise of Bellevue, and Merrill Gardens at First Hill — we know the building policies and elevator requirements.`,
    buildingCalloutsHeading: "Seattle Senior Living Communities We Move Regularly",
    buildingCallouts: `We have direct experience moving residents into and out of the following Seattle-area senior living communities: Aegis Living Queen Anne (elevator reservation required, 4-hour window), Merrill Gardens at First Hill (COI required, weekday moves only), Emerald City Senior Living in Northgate (ground-floor units, no elevator required), Horizon House in First Hill (strict move-in window, building coordinator contact required), and Sunrise Senior Living locations in the greater Seattle area (standard COI and elevator coordination). For any senior community not on this list, we call the community directly before move day.`,
    extraFaqs: [
      {
        q: "Do you help seniors downsize before a Seattle move?",
        a: "Yes. Many of our Seattle senior clients need help deciding what to take, what to donate, and what to discard before the move. We work at a pace that's comfortable and can coordinate with estate sale companies, donation pickups (Goodwill, Habitat for Humanity ReStore), and junk removal services. We don't rush the process — a senior move done right takes more time than a standard residential move, and we plan for that.",
      },
      {
        q: "Can you move a senior from a Seattle home into an assisted living community?",
        a: "Yes. We regularly move seniors from Seattle homes into assisted living and memory care communities throughout the region. We coordinate directly with the community's move-in coordinator to confirm elevator access, move-in windows, and any COI requirements. We also work with families who are managing the move on behalf of a parent — we can take direction from a family member and keep them updated throughout the day.",
      },
    ],
    pricingNote: "Senior move rates reflect smaller crew sizes and longer time allowances. Flat-rate quotes available.",
  },

  "bellevue-senior": {
    intro: `Bellevue has one of the highest concentrations of senior living communities on the Eastside, and many of our most meaningful moves involve helping long-time Bellevue residents transition from Somerset or Newport Hills homes they've owned for decades into communities like Sunrise of Bellevue, Aegis Living Bellevue, or The Chateau at Bothell Landing. Our senior moving crews understand that the physical move is only part of the job — the other part is making the transition feel manageable. We work at a pace set by the client, we handle furniture placement with care, and we make sure every box is labeled so unpacking is as easy as possible.`,
    buildingCalloutsHeading: "Bellevue Senior Living Communities We Move Regularly",
    buildingCallouts: `We have direct experience with the following Bellevue-area senior living communities: Sunrise of Bellevue (elevator reservation, COI required, weekday moves preferred), Aegis Living Bellevue (move-in coordinator contact required, 4-hour window), Bellevue Club Residences (strict move-in window, building security escort), The Watermark at Bellevue (ground-floor and elevator units, standard COI), and Emerald Heights in Redmond (close to Bellevue, elevator coordination, COI required). For any community not on this list, we contact the move-in coordinator directly before scheduling.`,
    extraFaqs: [
      {
        q: "How do you handle a Bellevue senior move when the family is coordinating remotely?",
        a: "Remote family coordination is common for Bellevue senior moves. We work directly with a designated family contact — by phone, email, or text — and provide updates throughout the move day. We can take direction from the family contact for furniture placement and box labeling, and we'll call when we arrive at the destination so the family knows the move is on track. We've coordinated dozens of Bellevue senior moves with out-of-state family members.",
      },
      {
        q: "Do you provide packing services for Bellevue senior moves?",
        a: "Yes. Full packing is strongly recommended for senior moves in Bellevue. Our packers label every box clearly by room and contents, which makes unpacking in the new community much easier. For seniors moving from large Somerset or Newport Hills homes, we offer a 2-day packing schedule — packing the main living areas on day one and completing the remaining rooms on day two — so the process isn't rushed.",
      },
    ],
    pricingNote: "Bellevue senior move rates include extra time allowance. Flat-rate quotes available.",
  },

  "redmond-senior": {
    intro: `Redmond's senior population is served by a growing number of senior living communities, and our proximity — our warehouse is on Redmond Way — means we can respond faster to Redmond senior moves than any other company in the area. Many of our Redmond senior clients are leaving Education Hill or Bear Creek homes they've owned for 20–30 years, and the move to Emerald Heights, Sunrise of Redmond, or a family member's home requires the kind of careful, unhurried service that our senior crews specialize in. We work at the client's pace, we handle every item with care, and we make sure the new space feels like home before we leave.`,
    buildingCalloutsHeading: "Redmond Senior Living Communities We Move Regularly",
    buildingCallouts: `We have direct experience with the following Redmond-area senior living communities: Emerald Heights in Redmond (elevator coordination, COI required, move-in coordinator contact), Sunrise of Redmond (standard COI, elevator reservation, weekday moves preferred), Vineyard Park of Redmond (ground-floor and elevator units, standard move-in process), Cogir of Redmond (move-in window coordination, COI required), and Aljoya Thornton Place in nearby Northgate (for Redmond seniors moving closer to family in Seattle). For any community not listed, we call the move-in coordinator before scheduling.`,
    extraFaqs: [
      {
        q: "How far in advance should I book a senior move from a Redmond home?",
        a: "We recommend booking senior moves 3–4 weeks in advance to allow time for packing coordination, community move-in scheduling, and any downsizing decisions. For Redmond clients, we often have more flexibility than other areas because our warehouse is local — but senior moves benefit from extra planning time regardless. Call us early and we'll walk you through the full process.",
      },
      {
        q: "Can you move a piano or antique furniture from a Redmond senior's home?",
        a: "Yes. Many Redmond senior clients have pianos, antique furniture, and heirloom pieces that require special handling. We have specialized equipment for upright and grand pianos, and our crews are trained on antique furniture wrapping and carrying techniques. For items that won't fit in the new community, we can vault them at our Redmond facility or coordinate donation or estate sale pickup.",
      },
    ],
    pricingNote: "Redmond senior move rates include extra time allowance. No travel surcharge — our warehouse is local.",
  },

  "kirkland-senior": {
    intro: `Kirkland's senior community is well-served by several high-quality senior living facilities, and many of our most thoughtful moves involve helping long-time Kirkland residents leave waterfront homes or hillside properties in Juanita and Lakeview to transition into communities like Aegis Living Kirkland or Sunrise of Kirkland. Our senior moving crews are trained to work at a pace that's comfortable for the client, to communicate clearly about what's happening at each stage of the move, and to handle every item — from everyday furniture to irreplaceable family heirlooms — with the same level of care.`,
    buildingCalloutsHeading: "Kirkland Senior Living Communities We Move Regularly",
    buildingCallouts: `We have direct experience with the following Kirkland-area senior living communities: Aegis Living Kirkland (elevator reservation, COI required, move-in coordinator contact), Sunrise of Kirkland (standard COI, elevator coordination, weekday moves preferred), Emerald City Senior Living locations in the Kirkland area (ground-floor and elevator units), Lakeview Senior Living in Kirkland (move-in window coordination, COI required), and The Gardens at Town Square in Bellevue (close to Kirkland, standard COI and elevator coordination). For any community not listed, we contact the move-in coordinator directly.`,
    extraFaqs: [
      {
        q: "Do you help with furniture placement at the Kirkland senior living community?",
        a: "Yes. Furniture placement is one of the most important parts of a senior move. Our crews take direction from the client — or from a family member if the client prefers — and place every piece of furniture exactly where it's wanted before we leave. We also reassemble any furniture that was disassembled for the move. We don't consider the job done until the new space feels settled and comfortable.",
      },
      {
        q: "Can you coordinate a Kirkland senior move when the senior has limited mobility?",
        a: "Yes. We regularly move seniors with limited mobility, including those who use walkers, wheelchairs, or require assistance. Our crews work around the client's needs — we don't ask seniors to move out of the way or rush through areas they're occupying. For clients with significant mobility limitations, we recommend scheduling the move on a weekday when building staff are available to assist with any needs that fall outside our scope.",
      },
    ],
    pricingNote: "Kirkland senior move rates include extra time allowance. Flat-rate quotes available.",
  },

  "sammamish-senior": {
    intro: `Sammamish's senior residents are often leaving large planned-community homes in Klahanie, Trossachs, or Pine Lake — homes they've owned for 15–25 years and filled with a lifetime of belongings. The move to a senior living community or a smaller home is a significant transition, and our senior moving crews approach it with the patience and care it deserves. We work at the client's pace, we handle downsizing decisions with sensitivity, and we make sure every item that's coming to the new home arrives safely and is placed exactly where it's wanted.`,
    buildingCalloutsHeading: "Sammamish Senior Living Communities We Move Regularly",
    buildingCallouts: `We have direct experience with the following senior living communities serving Sammamish residents: Sunrise of Issaquah (close to Sammamish, elevator coordination, COI required), Aegis Living Issaquah (standard COI, move-in window coordination), Emerald Heights in Redmond (7 miles from Sammamish, elevator coordination, COI required), Sunrise of Sammamish (newer community, standard move-in process), and Cogir of Redmond (for Sammamish seniors moving closer to family in Redmond). For any community not listed, we contact the move-in coordinator before scheduling.`,
    extraFaqs: [
      {
        q: "How do you handle the large volume of belongings in a Sammamish senior move?",
        a: "Large Sammamish homes often have 20–30 years of accumulated belongings, and sorting through everything before a senior move is one of the biggest challenges. We work with families to identify what's coming to the new home, what's going to family members, what's being donated, and what needs to be discarded. We can coordinate donation pickups and junk removal on the same day as the move to minimize the number of trips and decisions required.",
      },
      {
        q: "Can you move a senior from Sammamish to a community in another city?",
        a: "Yes. We regularly move Sammamish seniors to communities throughout the greater Seattle area — Bellevue, Redmond, Kirkland, Issaquah, and beyond. Distance within the region doesn't affect our service level. We'll coordinate with the destination community's move-in coordinator regardless of location and handle all the logistics from start to finish.",
      },
    ],
    pricingNote: "Sammamish senior move rates include extra time allowance for large homes. Flat-rate quotes available.",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // FURNITURE MOVING — all 5 cities
  // ──────────────────────────────────────────────────────────────────────────

  "seattle-furniture": {
    intro: `Seattle's furniture moving market is shaped by the city's dense apartment stock and the frequency with which residents rearrange, upgrade, or move single pieces between homes. Capitol Hill and South Lake Union apartments often have narrow hallways and tight stairwells that make large sectionals and bed frames a real challenge. Magnolia and Madison Park homes frequently have oversized furniture — large dining tables, California king beds, and sectional sofas — that require disassembly before they can be moved. Our furniture-only crews are equipped with the same tools as our full-service crews: furniture dollies, stair rollers, moving blankets, and disassembly tools. We move single pieces or entire rooms.`,
    buildingCalloutsHeading: "Seattle Furniture Moving Scenarios We Handle Regularly",
    buildingCallouts: `We handle furniture moves throughout Seattle with specific experience in: Capitol Hill and First Hill apartments (narrow hallways, tight stairwells, furniture disassembly required for large pieces), South Lake Union high-rises (elevator coordination, strict move-in windows for building access), Magnolia and Madison Park homes (oversized dining tables, large sectionals, California king beds), Queen Anne hillside homes (steep stairways, large furniture requiring 3-person carries), and Ballard and Fremont craftsman homes (narrow doorways, vintage furniture requiring extra padding). We move single pieces, room sets, or full homes.`,
    extraFaqs: [
      {
        q: "Can you move a single piece of furniture within Seattle — not a full move?",
        a: "Yes. Single-item furniture moves are one of our most common requests in Seattle. Whether it's a sectional sofa from Capitol Hill to Ballard, a dining table from South Lake Union to Queen Anne, or a dresser from a storage unit to a new apartment, we handle it. We have a 2-hour minimum for furniture-only moves. Call us with the item, the pickup address, and the delivery address and we'll give you a flat-rate quote.",
      },
      {
        q: "Do you disassemble and reassemble furniture for Seattle apartment moves?",
        a: "Yes. Furniture disassembly and reassembly is included in our furniture moving service. For Capitol Hill and South Lake Union apartments with narrow hallways, we often need to disassemble bed frames, sectionals, and large bookshelves to get them through doorways. We bring all necessary tools and reassemble everything at the destination. There's no additional charge for standard disassembly and reassembly.",
      },
    ],
  },

  "bellevue-furniture": {
    intro: `Bellevue's furniture moving market reflects the city's affluent demographics — large sectionals, California king beds, solid-wood dining sets, and high-end home office furniture are the norm in Somerset, Newport Hills, and West Bellevue. Moving these pieces requires more than a pickup truck and a friend: it requires proper moving blankets, furniture dollies, stair rollers, and crews trained in disassembly and reassembly. Our Bellevue furniture moving crews handle everything from single-piece deliveries to full-room rearrangements, and our Redmond warehouse is 5 miles away — which means fast response times and no travel surcharges for Bellevue furniture moves.`,
    buildingCalloutsHeading: "Bellevue Furniture Moving Scenarios We Handle Regularly",
    buildingCallouts: `We handle furniture moves throughout Bellevue with specific experience in: Downtown Bellevue high-rises at The Bravern and Cirrus (elevator coordination, strict move-in windows, COI required), Somerset and Newport Hills homes (large furniture, steep driveways, long carry distances), Crossroads and Eastgate apartments (limited truck access, furniture disassembly for narrow hallways), West Bellevue and Medina estates (oversized furniture, long carries, gated access), and Factoria and Wilburton townhomes (narrow stairways, furniture disassembly required for upper floors).`,
    extraFaqs: [
      {
        q: "Can you move furniture between two Bellevue addresses — not a full household move?",
        a: "Yes. We regularly move furniture between Bellevue addresses — from a home to a storage unit, from one room to another in the same house, or from a furniture store delivery to a specific room. We have a 2-hour minimum for furniture-only moves. Call us with the details and we'll provide a flat-rate quote. Our Redmond warehouse is 5 miles from central Bellevue, so we can often schedule furniture moves within 2–3 business days.",
      },
      {
        q: "Do you move high-end furniture in Bellevue without damaging it?",
        a: "Yes. High-end furniture protection is a priority for our Bellevue crews. We use thick moving blankets on every piece, furniture dollies to avoid dragging, and corner protectors on doorways and walls. For particularly valuable pieces — antique furniture, custom-built pieces, or designer sofas — we use additional padding and carry by hand rather than using dollies. If you have specific concerns about a piece, mention it when you request a quote and we'll plan accordingly.",
      },
    ],
  },

  "redmond-furniture": {
    intro: `Redmond's furniture moving market is driven by its active real estate market and the frequency with which Microsoft and tech-sector employees upgrade their home offices and living spaces. Education Hill and Bear Creek homes often have large, heavy furniture — solid-wood desks, California king beds, and large sectionals — that require professional handling. Our Redmond furniture crews are based at our Redmond Way warehouse, which means zero travel time and no fuel surcharge for Redmond furniture moves. We move single pieces, room sets, or full homes, and we handle disassembly and reassembly as part of the service.`,
    buildingCalloutsHeading: "Redmond Furniture Moving Scenarios We Handle Regularly",
    buildingCallouts: `We handle furniture moves throughout Redmond with specific experience in: Overlake apartments near Microsoft's campus (elevator coordination, furniture disassembly for narrow hallways), Education Hill homes (large furniture, steep driveways, long carry distances), Bear Creek and Grass Lawn homes (wooded-lot properties, long carries, oversized furniture), Downtown Redmond mixed-use buildings (elevator coordination, standard COI), and Redmond Ridge HOA communities (move-in window coordination, COI required for building access). We move single pieces or full rooms.`,
    extraFaqs: [
      {
        q: "Can you move a home office setup in Redmond — desk, monitors, and all?",
        a: "Yes. Home office furniture moves are one of our most common requests in Redmond, given the high concentration of remote tech workers. We move desks, monitor stands, ergonomic chairs, and filing cabinets. We do not disconnect or reconnect electronics, but we work alongside you and can move equipment to a staging area while you handle the cables. For large standing desks, we disassemble the frame for safe transport and reassemble at the destination.",
      },
      {
        q: "How quickly can you schedule a furniture move in Redmond?",
        a: "Because our warehouse is in Redmond, we often have same-week availability for furniture-only moves. For urgent requests, we sometimes have next-day availability. Call us with your timeline and we'll confirm. Furniture moves are typically scheduled for 2–4 hours depending on the number of pieces and the access at both locations.",
      },
    ],
  },

  "kirkland-furniture": {
    intro: `Kirkland's waterfront location and its mix of historic downtown homes and newer developments in Totem Lake and Kingsgate create a diverse furniture moving market. Moss Bay and Highlands waterfront properties often have large, heavy furniture that's been in place for years — solid-wood dining sets, oversized sofas, and antique pieces that require careful handling. Totem Lake apartments near Google's campus have the typical high-rise challenges: elevator coordination, narrow hallways, and strict move-in windows. Our Kirkland furniture crews handle all of it, and our Redmond warehouse is 5 miles east — which means fast response and no travel surcharge.`,
    buildingCalloutsHeading: "Kirkland Furniture Moving Scenarios We Handle Regularly",
    buildingCallouts: `We handle furniture moves throughout Kirkland with specific experience in: Downtown Kirkland waterfront homes (large furniture, limited truck parking, permit coordination), Moss Bay and Highlands homes (steep hillside lots, large furniture, long carry distances), Totem Lake apartments near Google's campus (elevator coordination, COI required, strict move-in windows), Parkplace complex in downtown (elevator coordination, standard move-in process), and Juanita and Lakeview hillside homes (steep stairways, furniture disassembly for large pieces, 3-person carries).`,
    extraFaqs: [
      {
        q: "Can you move antique furniture from a Kirkland waterfront home?",
        a: "Yes. Antique furniture moves are a specialty for our Kirkland crews. We use thick moving blankets, hand-carry techniques, and custom padding for fragile antique pieces. For particularly valuable items, we recommend a pre-move walkthrough so we can assess the best approach for each piece. We've moved antique furniture from Kirkland waterfront homes and Highlands estates many times — call us to discuss your specific pieces.",
      },
      {
        q: "Do you move furniture up and down steep stairs in Kirkland hillside homes?",
        a: "Yes. Steep stairways are one of the most common challenges in Kirkland's Juanita and Lakeview neighborhoods. We use stair rollers for large pieces, carry in teams of 2–3 for heavy items, and disassemble furniture when necessary to navigate tight turns. There's no additional charge for stair carries — it's part of our standard service for Kirkland hillside homes.",
      },
    ],
  },

  "sammamish-furniture": {
    intro: `Sammamish's large planned-community homes are filled with large furniture — 4-bedroom homes in Klahanie and Trossachs typically have California king beds, large sectionals, solid-wood dining sets, and fully equipped home offices. Moving these pieces requires professional equipment and experienced crews. Our Sammamish furniture moving service handles single pieces, room sets, or full homes, and we bring all necessary equipment: furniture dollies, stair rollers, moving blankets, and disassembly tools. For HOA communities like Klahanie and Trossachs, we coordinate move-in windows and provide COIs as needed.`,
    buildingCalloutsHeading: "Sammamish Furniture Moving Scenarios We Handle Regularly",
    buildingCallouts: `We handle furniture moves throughout Sammamish with specific experience in: Klahanie and Trossachs homes (large furniture, HOA move-in coordination, COI required), Pine Lake and Beaver Lake properties (wooded-lot homes, long carry distances, large furniture), Sahalee gated community (advance access coordination, high-value furniture, custom padding), Sammamish Town Center mixed-use buildings (elevator coordination, standard move-in process), and Aldarra and Inglewood Hill homes (large single-family homes, oversized furniture, long carries).`,
    extraFaqs: [
      {
        q: "Can you move a large sectional sofa in a Sammamish home?",
        a: "Yes. Large sectionals are one of the most common furniture moving challenges in Sammamish. We assess the sofa dimensions and doorway/hallway measurements before the move to determine whether disassembly is needed. Most large sectionals can be moved in sections without full disassembly. For sectionals that are too large to fit through doorways even in sections, we can remove door frames temporarily to create the necessary clearance — and reinstall them afterward.",
      },
      {
        q: "Do you move furniture within the same Sammamish home — room rearrangements?",
        a: "Yes. In-home furniture rearrangements are a common request in Sammamish, especially when homeowners are staging for sale or redecorating. We have a 2-hour minimum for in-home moves. Our crews can rearrange an entire floor of a large Sammamish home in 2–3 hours. Call us with the number of pieces and the rooms involved and we'll provide a flat-rate quote.",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // APPLIANCE MOVING — all 5 cities
  // ──────────────────────────────────────────────────────────────────────────

  "seattle-appliance": {
    intro: `Appliance moves in Seattle present challenges that go beyond weight and size. Capitol Hill and First Hill apartments often have narrow hallways and tight elevator dimensions that make refrigerator and washer/dryer moves a precise operation. Queen Anne hillside homes have steep stairways where appliance dollies require experienced operators. South Lake Union high-rises have strict elevator weight limits and move-in windows that constrain scheduling. Our appliance moving crews use professional appliance dollies, stair walkers, and furniture straps rated for 1,000+ lbs, and they're trained on the specific challenges of Seattle's building stock. We do not disconnect or reconnect appliances — that requires a licensed plumber or electrician — but we handle all the heavy lifting.`,
    buildingCalloutsHeading: "Seattle Appliance Moving Scenarios We Handle Regularly",
    buildingCallouts: `We handle appliance moves throughout Seattle with specific experience in: Capitol Hill and First Hill apartments (narrow hallways, elevator dimensions, refrigerator and washer/dryer moves), South Lake Union high-rises (elevator weight limits, strict move-in windows, appliance dollies required), Queen Anne hillside homes (steep stairways, appliance stair walkers, 2-person minimum for heavy appliances), Magnolia and Madison Park homes (large appliances, long carries, oversized refrigerators), and Ballard and Fremont craftsman homes (narrow doorways, appliance disassembly for door removal when needed).`,
    extraFaqs: [
      {
        q: "Do you disconnect and reconnect appliances for Seattle moves?",
        a: "We do not disconnect or reconnect appliances — gas lines, water lines, and electrical connections require licensed plumbers and electricians. However, we coordinate with your utility contractors and handle all the moving once appliances are disconnected. For refrigerators, we defrost and drain them before moving. For washers, we install shipping bolts if available. We move the appliance from point A to point B — your contractors handle the connections.",
      },
      {
        q: "Can you move a refrigerator up stairs in a Seattle home?",
        a: "Yes. Refrigerator stair moves are one of the most common appliance challenges in Seattle's hillside neighborhoods — Queen Anne, Capitol Hill, and Beacon Hill homes frequently have appliances on upper floors. We use professional stair walkers (motorized stair-climbing dollies) for refrigerators and other large appliances. For particularly steep or narrow stairways, we assess the route before committing and will tell you honestly if the appliance cannot be safely moved without modification to the space.",
      },
    ],
  },

  "bellevue-appliance": {
    intro: `Bellevue's appliance moving market is shaped by its high rate of kitchen and laundry room upgrades among homeowners in Somerset, Newport Hills, and West Bellevue. When a homeowner replaces a built-in refrigerator or a stacked washer/dryer unit, the old appliance needs to go out and the new one needs to come in — often through narrow kitchen corridors or up flights of stairs. Our Bellevue appliance crews use professional appliance dollies and stair walkers, and they're trained on the specific access challenges of Bellevue's housing stock. We also handle appliance moves for Downtown Bellevue high-rises, coordinating elevator access and working within building move-in windows.`,
    buildingCalloutsHeading: "Bellevue Appliance Moving Scenarios We Handle Regularly",
    buildingCallouts: `We handle appliance moves throughout Bellevue with specific experience in: Downtown Bellevue high-rises at The Bravern and Cirrus (elevator coordination, appliance dollies, strict move-in windows), Somerset and Newport Hills homes (large appliances, steep driveways, long carry distances), Crossroads and Eastgate apartments (limited truck access, elevator coordination, standard appliance moves), West Bellevue and Medina estates (oversized built-in refrigerators, stacked washer/dryer units, long carries), and Factoria and Wilburton townhomes (narrow stairways, appliance stair walkers required).`,
    extraFaqs: [
      {
        q: "Can you move a built-in refrigerator from a Bellevue kitchen?",
        a: "Yes. Built-in and counter-depth refrigerators are common in Bellevue's higher-end homes, and moving them requires removing the surrounding cabinetry trim or door panels to create clearance. We assess the installation before the move and bring the right tools. For refrigerators that are truly built-in (integrated panel fronts), we recommend having a carpenter or cabinet installer present to remove and reinstall the panels — we handle the moving portion.",
      },
      {
        q: "How much does it cost to move an appliance in Bellevue?",
        a: "Appliance moves in Bellevue are quoted at our standard 2-hour minimum rate, which covers most single-appliance moves. For multiple appliances or moves requiring stair walkers, the job typically runs 2–3 hours. We provide flat-rate quotes so you know the final price before we start. Call us with the appliance type, the pickup and delivery addresses, and any access challenges (stairs, elevators, narrow hallways) and we'll give you an accurate quote.",
      },
    ],
  },

  "redmond-appliance": {
    intro: `Redmond's appliance moving market is driven by the city's active real estate turnover and the frequency with which homeowners upgrade appliances before listing or after purchasing. Education Hill and Bear Creek homes often have large appliances on upper floors — refrigerators, washer/dryer units, and chest freezers that were moved in when the home was first furnished and haven't moved since. Our Redmond appliance crews are based at our Redmond Way warehouse, which means zero travel time and fast scheduling. We use professional appliance dollies and stair walkers, and we're trained on the specific access challenges of Redmond's housing stock.`,
    buildingCalloutsHeading: "Redmond Appliance Moving Scenarios We Handle Regularly",
    buildingCallouts: `We handle appliance moves throughout Redmond with specific experience in: Overlake apartments near Microsoft's campus (elevator coordination, standard appliance moves), Education Hill homes (large appliances on upper floors, stair walkers required, steep driveways), Bear Creek and Grass Lawn homes (wooded-lot properties, long carry distances, large appliances), Downtown Redmond mixed-use buildings (elevator coordination, standard move-in process), and Redmond Ridge HOA communities (move-in window coordination, COI required for building access).`,
    extraFaqs: [
      {
        q: "Can you move a chest freezer from a Redmond garage?",
        a: "Yes. Chest freezers are one of the most common appliance move requests in Redmond, especially for Education Hill and Bear Creek homeowners who are downsizing or moving. We recommend emptying and defrosting the freezer 24 hours before the move. We use appliance dollies rated for the weight and can navigate garage steps and narrow doorways. For freezers going into storage, we ensure they're fully dry before loading.",
      },
      {
        q: "How quickly can you schedule an appliance move in Redmond?",
        a: "Because our warehouse is in Redmond, we often have same-week availability for appliance moves. For urgent requests — such as a new appliance delivery arriving and the old one needing to be removed — we sometimes have next-day availability. Call us with your timeline and we'll confirm. Most Redmond appliance moves are completed in 1–2 hours.",
      },
    ],
  },

  "kirkland-appliance": {
    intro: `Kirkland's appliance moving market is shaped by its mix of waterfront homes, hillside properties, and apartment complexes near Google's campus. Moss Bay and Highlands waterfront homes often have large appliances on upper floors — refrigerators and washer/dryer units that were moved in during construction and haven't been touched since. Totem Lake apartments have standard elevator access but strict move-in windows that constrain scheduling. Our Kirkland appliance crews handle all of it, and our Redmond warehouse is 5 miles east — which means fast response and no travel surcharge for Kirkland appliance moves.`,
    buildingCalloutsHeading: "Kirkland Appliance Moving Scenarios We Handle Regularly",
    buildingCallouts: `We handle appliance moves throughout Kirkland with specific experience in: Downtown Kirkland waterfront homes (large appliances, limited truck parking, permit coordination), Moss Bay and Highlands homes (steep hillside lots, stair walkers required, large appliances on upper floors), Totem Lake apartments near Google's campus (elevator coordination, COI required, strict move-in windows), Juanita and Lakeview hillside homes (steep stairways, appliance stair walkers, 2-person minimum), and Kingsgate and Finn Hill homes (standard residential appliance moves, large refrigerators and washer/dryer units).`,
    extraFaqs: [
      {
        q: "Can you move a washer and dryer in a Kirkland apartment building?",
        a: "Yes. Washer/dryer moves in Kirkland apartment buildings require elevator coordination and, in some buildings, a COI naming the building as additional insured. We handle both. For stacked washer/dryer units, we separate the units for transport and restabilize them at the destination. For front-load units on pedestals, we remove the pedestals for transport and reinstall them. We do not disconnect or reconnect water lines — that requires a licensed plumber.",
      },
      {
        q: "How do you move a large refrigerator down a steep Kirkland hillside driveway?",
        a: "Steep driveways in Kirkland's Juanita and Lakeview neighborhoods require careful planning for appliance moves. We use appliance dollies with wheel locks and carry in teams of 2–3 on steep grades. For very steep driveways, we may use a smaller vehicle to stage the appliance at the street level before loading onto the main truck. We assess every steep-driveway appliance move before committing and will tell you honestly if additional equipment or crew is needed.",
      },
    ],
  },

  "sammamish-appliance": {
    intro: `Sammamish's large planned-community homes frequently have large appliances — oversized refrigerators, side-by-side washer/dryer units, and chest freezers — that require professional equipment to move safely. Klahanie and Trossachs homes often have appliances on upper floors, and the HOA move-in rules in these communities require COIs and move-in window coordination even for appliance-only moves. Our Sammamish appliance crews use professional appliance dollies and stair walkers, and they're familiar with the HOA requirements in Sammamish's major planned communities.`,
    buildingCalloutsHeading: "Sammamish Appliance Moving Scenarios We Handle Regularly",
    buildingCallouts: `We handle appliance moves throughout Sammamish with specific experience in: Klahanie and Trossachs homes (HOA move-in coordination, COI required, large appliances on upper floors), Pine Lake and Beaver Lake properties (wooded-lot homes, long carry distances, large appliances), Sahalee gated community (advance access coordination, large appliances, stair walkers required), Sammamish Town Center mixed-use buildings (elevator coordination, standard move-in process), and Aldarra and Inglewood Hill homes (large single-family homes, oversized refrigerators, chest freezers).`,
    extraFaqs: [
      {
        q: "Do Sammamish HOA communities require a COI for appliance moves?",
        a: "Yes — many Sammamish HOA communities, including Klahanie and Trossachs, require a certificate of insurance (COI) naming the HOA as additional insured even for appliance-only moves. We carry general liability insurance and can provide a COI for any Sammamish HOA community. When you request a quote, let us know your community and we'll confirm the COI requirements and have the paperwork ready before move day.",
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
    intro: `Unpacking services in Seattle are most in demand among South Lake Union tech workers who move frequently and don't have time to unpack between jobs, and among Capitol Hill and Belltown residents who are moving into smaller spaces and need help deciding what goes where. Our unpacking crews work systematically — kitchen first, then bedrooms, then living areas — and they don't just pull items out of boxes; they place everything in a logical location and break down all the boxes before they leave. For moves into Seattle high-rises with strict move-in windows, we can schedule unpacking for the day after move day so the elevator reservation doesn't constrain the unpacking timeline.`,
    buildingCalloutsHeading: "Seattle Unpacking Scenarios We Handle Regularly",
    buildingCallouts: `Our unpacking crews work throughout Seattle and are experienced with the specific challenges of each area: South Lake Union high-rises (unpacking scheduled day after move to avoid elevator window conflicts), Capitol Hill and First Hill apartments (smaller spaces, strategic placement to maximize storage), Magnolia and Madison Park homes (large homes, full-house unpacking over 1–2 days), Ballard and Fremont craftsman homes (kitchen unpacking with vintage cabinetry, careful placement), and Queen Anne homes (multiple floors, systematic room-by-room unpacking with box breakdown included).`,
    extraFaqs: [
      {
        q: "How long does unpacking take for a Seattle apartment?",
        a: "A 1-bedroom Seattle apartment typically takes 3–5 hours to unpack with a 2-person crew. A 2-bedroom apartment takes 5–8 hours. We work systematically — kitchen first, then bedrooms, then living areas — and we break down all boxes before we leave. For South Lake Union high-rises with strict elevator windows, we recommend scheduling unpacking for the day after move day so we're not racing against a building deadline.",
      },
      {
        q: "Do you put items away in cabinets and drawers, or just unbox them?",
        a: "We put everything away — dishes in cabinets, clothes in drawers, books on shelves. We take direction from you on where things should go, and if you're not sure, we suggest logical placements based on how kitchens and bedrooms are typically organized. We don't just pull items out of boxes and stack them on counters. The goal is for your new Seattle home to feel functional and settled when we leave.",
      },
    ],
  },

  "bellevue-unpacking": {
    intro: `Bellevue's unpacking service market is driven by its high concentration of corporate relocations — Microsoft, T-Mobile, and Expedia employees who arrive in Bellevue on tight timelines and need their homes functional as quickly as possible. Our unpacking crews work efficiently and systematically, prioritizing the rooms that make a home livable first: kitchen, master bedroom, and bathrooms. For moves into Downtown Bellevue high-rises, we coordinate with building management to ensure elevator access for the unpacking crew. For large Somerset and Newport Hills homes, we offer multi-day unpacking packages that work through the home room by room without rushing.`,
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
    intro: `Redmond's unpacking service market is shaped by the high volume of Microsoft and tech-sector employees who move to Redmond on corporate timelines and need their homes functional quickly. Our unpacking crews are based at our Redmond Way warehouse, which means zero travel time and fast scheduling for Redmond unpacking jobs. We work systematically — kitchen, master bedroom, and bathrooms first — and we take direction from the homeowner or their designated contact on placement. For Overlake apartment residents and Education Hill homeowners, we offer same-week unpacking scheduling in most cases.`,
    buildingCalloutsHeading: "Redmond Unpacking Scenarios We Handle Regularly",
    buildingCallouts: `Our unpacking crews work throughout Redmond and are experienced with: Overlake apartments near Microsoft's campus (elevator coordination, standard apartment unpacking, kitchen and bedroom priority), Education Hill homes (large homes, multi-day unpacking packages, systematic room-by-room approach), Bear Creek and Grass Lawn homes (wooded-lot properties, large homes, full-house unpacking), Downtown Redmond mixed-use buildings (elevator coordination, standard apartment unpacking), and Redmond Ridge HOA communities (move-in window coordination, unpacking crew COI required in some communities).`,
    extraFaqs: [
      {
        q: "Can you unpack a Redmond home the day after the move?",
        a: "Yes. Same-day or next-day unpacking is one of the most popular options for Redmond homeowners. We can schedule the unpacking crew to arrive the morning after your move day, when you've had a chance to sleep and think about where things should go. Because our warehouse is in Redmond, we have more scheduling flexibility than companies coming from Seattle or Bellevue. Call us when you book your move and we'll reserve an unpacking slot for the following day.",
      },
      {
        q: "Do you unpack boxes from a Redmond storage vault delivery?",
        a: "Yes. When we deliver your vault from our Redmond storage facility, we can schedule an unpacking crew to arrive at the same time or the following day. This is a popular option for Redmond residents who have been in temporary housing while waiting for their new home to be ready — we deliver the vault and unpack everything in one coordinated visit.",
      },
    ],
  },

  "kirkland-unpacking": {
    intro: `Kirkland's unpacking service market is driven by its active real estate market and the frequency with which families move into larger homes in Moss Bay, Highlands, and Kingsgate. Moving into a new home is exciting, but unpacking is exhausting — and for Kirkland families with young children or demanding work schedules, professional unpacking is often the difference between feeling settled in a week and living out of boxes for a month. Our Kirkland unpacking crews work systematically, prioritize the rooms that matter most, and break down every box before they leave.`,
    buildingCalloutsHeading: "Kirkland Unpacking Scenarios We Handle Regularly",
    buildingCallouts: `Our unpacking crews work throughout Kirkland and are experienced with: Downtown Kirkland waterfront homes (large homes, multi-day unpacking, kitchen and master bedroom priority), Moss Bay and Highlands homes (steep hillside properties, multi-floor unpacking, box breakdown on all floors), Totem Lake apartments near Google's campus (elevator coordination for unpacking crew, standard apartment unpacking), Juanita and Lakeview homes (hillside properties, systematic room-by-room approach), and Kingsgate and Finn Hill homes (newer construction, large homes, full-house unpacking packages).`,
    extraFaqs: [
      {
        q: "How long does unpacking take for a Kirkland family home?",
        a: "A typical 3-bedroom Kirkland home takes 6–10 hours to unpack with a 2-person crew. A 4-bedroom home in Moss Bay or Highlands takes 8–12 hours. For large homes, we recommend a 2-day unpacking schedule — completing the kitchen, master bedroom, and bathrooms on day one, and finishing the remaining rooms on day two. This gives you time to review placement after day one and make adjustments before we complete the rest of the home.",
      },
      {
        q: "Can you unpack a Kirkland home while I'm at work?",
        a: "Yes. Many Kirkland clients prefer to have unpacking done while they're at work so they come home to a settled house. We work with a designated contact — a family member, a neighbor with a key, or a property manager — and provide updates throughout the day. We take direction in advance on placement priorities and call if we have questions. At the end of the job, we send a completion summary so you know exactly what was done.",
      },
    ],
  },

  "sammamish-unpacking": {
    intro: `Sammamish's large planned-community homes present a significant unpacking challenge — a 4-bedroom Klahanie or Trossachs home can have 150–200 boxes, and unpacking them without professional help can take weeks. Our Sammamish unpacking crews are experienced with large homes and work efficiently: kitchen first, then master bedroom, then children's rooms, then living areas. We take direction from the homeowner on placement, we label shelves and drawers before filling them, and we break down every box before we leave. For Sammamish families with young children, we prioritize getting the kids' rooms functional first so the transition is as smooth as possible.`,
    buildingCalloutsHeading: "Sammamish Unpacking Scenarios We Handle Regularly",
    buildingCallouts: `Our unpacking crews work throughout Sammamish and are experienced with: Klahanie and Trossachs homes (large homes, 150–200 boxes, multi-day unpacking packages), Pine Lake and Beaver Lake properties (wooded-lot homes, large garages, outdoor equipment unpacking), Sahalee estate homes (high-value items, careful placement, custom shelving coordination), Sammamish Town Center mixed-use buildings (standard apartment unpacking, kitchen and bedroom priority), and Aldarra and Inglewood Hill homes (large single-family homes, full-house unpacking, box breakdown included).`,
    extraFaqs: [
      {
        q: "How long does it take to unpack a large Sammamish home?",
        a: "A typical 4-bedroom Sammamish home takes 10–16 hours to fully unpack with a 2-person crew. For large homes with 150+ boxes, we recommend a 2-day unpacking schedule. On day one, we complete the kitchen, master bedroom, and bathrooms — the rooms that make the home livable. On day two, we finish the remaining bedrooms, living areas, and garage. This approach lets you sleep in a functional home after day one without waiting for the entire house to be done.",
      },
      {
        q: "Do you unpack the garage and outdoor storage in Sammamish homes?",
        a: "Yes. Garage and outdoor storage unpacking is often the last priority but one of the most time-consuming parts of a Sammamish move. We unpack and organize garage items — tools, sports equipment, seasonal items — and place them in logical locations. For large garages with workshop equipment, we recommend discussing the layout in advance so we can place heavy items in their final positions before organizing smaller items around them.",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // WAREHOUSING / STORAGE VAULTS — all 5 cities
  // ──────────────────────────────────────────────────────────────────────────

  "seattle-warehousing": {
    intro: `Seattle businesses and residents needing warehousing and distribution services have a direct line to our Redmond facility — 12 miles from central Seattle — where we operate secure, climate-controlled vault storage for both commercial and residential clients. For Seattle businesses managing inventory overflow, staging furniture for model units, or storing equipment between projects, our warehousing operation provides a professional alternative to self-storage. We handle receiving, inventory tracking, and scheduled distribution. For residential clients, our vault storage service is the same operation described under storage — portable vaults, full inventory, and scheduled delivery.`,
    buildingCalloutsHeading: "Seattle Warehousing Clients We Serve Regularly",
    buildingCallouts: `Our Seattle warehousing clients include: South Lake Union tech companies storing office furniture and equipment during office renovations, Capitol Hill property management companies staging furniture for model apartment units, Downtown Seattle law firms and professional services offices storing archived files and equipment, Seattle real estate developers staging furniture for model homes and show units, and residential clients from Magnolia, Madison Park, and Queen Anne storing high-value furniture and art during home renovations. All items are inventoried on intake and tracked throughout the storage period.`,
    extraFaqs: [
      {
        q: "Can you receive and store furniture deliveries for a Seattle business?",
        a: "Yes. We offer receiving and warehousing services for Seattle businesses that need a local receiving address for furniture and equipment deliveries. We receive the delivery at our Redmond facility, inspect for damage, photograph and inventory every item, and store it until you're ready for delivery to your Seattle address. This is a popular service for businesses renovating offices or staging model units who need a staging location between the vendor and the final destination.",
      },
      {
        q: "What is the difference between vault storage and warehousing at your Redmond facility?",
        a: "Vault storage is our residential service — your belongings are loaded into a sealed portable vault and stored as a unit. Warehousing is our commercial service — items are received individually, inventoried, and stored on shelving or in designated floor space. Warehousing allows for individual item retrieval without accessing an entire vault. Both services are available to Seattle clients, and both are stored at our Redmond facility in a climate-controlled environment.",
      },
    ],
    pricingNote: "Seattle warehousing rates quoted based on volume and service level. Contact us for commercial rates.",
  },

  "bellevue-warehousing": {
    intro: `Bellevue's commercial warehousing needs are driven by its concentration of tech companies, professional services firms, and real estate developers who need a reliable local warehousing partner. Our Redmond facility — 5 miles from central Bellevue — provides climate-controlled vault and warehousing storage with full inventory tracking and scheduled distribution. For Bellevue businesses staging furniture for the Spring District's new office buildings, for property managers staging model units in Downtown Bellevue high-rises, and for corporate relocation managers coordinating employee moves, our warehousing operation provides the professional infrastructure that self-storage cannot.`,
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
    intro: `Redmond is home to our warehousing and storage facility on Redmond Way, which means Redmond clients get the most direct and cost-effective warehousing service we offer. Microsoft's campus, Nintendo of America, and the growing number of tech companies in Overlake and the Redmond Town Center area create consistent demand for commercial warehousing — office furniture storage during renovations, equipment staging for new office fit-outs, and model unit furniture management for Redmond's new residential developments. Our facility is climate-controlled, fully inventoried, and staffed by the same crews who handle our moving operations.`,
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
    intro: `Kirkland's warehousing needs are shaped by its growing tech sector — Google's major campus in Totem Lake, plus a growing number of startups and professional services firms — and by its active real estate market. Our Redmond facility is 5 miles from central Kirkland, making it the closest professional warehousing option for Kirkland businesses. For Google's facilities team managing office furniture during campus renovations, for Kirkland property managers staging model units in Totem Lake apartment buildings, and for Downtown Kirkland retailers storing seasonal inventory, our warehousing operation provides professional infrastructure at Eastside proximity.`,
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
    intro: `Sammamish's warehousing needs are primarily residential — large planned-community homes whose owners need professional storage during renovations, staging for sale, or downsizing. Our Redmond facility is 7 miles from central Sammamish, and our vault storage operation is the most convenient professional option for Sammamish homeowners who need more than a self-storage unit. For Sammamish businesses along SE 8th Street and near Sammamish Town Center, we offer commercial warehousing with inventory tracking and scheduled distribution. All items are stored in our climate-controlled Redmond facility.`,
    buildingCalloutsHeading: "Sammamish Warehousing Clients We Serve Regularly",
    buildingCallouts: `Our Sammamish warehousing clients include: Klahanie and Trossachs homeowners storing furniture during major renovations (multiple vaults, room-by-room inventory), Sahalee estate homeowners storing high-value art and antiques during renovations (climate-controlled vaults, custom crating available), Sammamish real estate developers storing model home furniture between projects, SE 8th Street businesses storing equipment and inventory during office renovations, and Pine Lake and Beaver Lake homeowners storing outdoor furniture and equipment during winter months.`,
    extraFaqs: [
      {
        q: "Can you warehouse furniture from a Sammamish home during a major renovation?",
        a: "Yes. Home renovation warehousing is one of our most common requests from Sammamish homeowners. We vault your furniture room by room as the renovation progresses — clearing the kitchen before the kitchen renovation, then returning it when the work is done before moving on to the next room. We provide a detailed inventory of every item in storage and can return specific pieces on request without requiring a full vault delivery.",
      },
      {
        q: "How far is your warehousing facility from Sammamish?",
        a: "Our warehousing and storage facility is on Redmond Way in Redmond, WA — approximately 7 miles from central Sammamish, a 12-minute drive via SE 8th Street and 228th Ave SE. For Sammamish clients, we handle all transportation between your home and our facility — you never need to drive to the warehouse. We pick up your items, store them, and deliver them back when you're ready.",
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
        a: "A typical 4-bedroom Sammamish home takes 8–12 hours to pack with a 2-person crew. Homes with large garages, workshop equipment, or extensive outdoor furniture take longer. For large Sammamish homes, we recommend a 2-day packing schedule — packing the main living areas on day one and the garage and outdoor items on day two — so everything is ready when the truck arrives on move day.",
      },
      {
        q: "Do you pack outdoor furniture and garage equipment for Sammamish moves?",
        a: "Yes. Outdoor furniture, grills, lawn equipment, and garage tools are often the most time-consuming part of a Sammamish move. We bring heavy-duty boxes, stretch wrap, and weatherproof packing materials for outdoor items. For large power tools and equipment, we can disassemble and wrap components for safe transport. For items going into storage, we use weatherproof wrapping to protect against moisture.",
      },
    ],
  },
};
