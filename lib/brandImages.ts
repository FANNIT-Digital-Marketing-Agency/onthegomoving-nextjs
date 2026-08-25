/**
 * ==========================================================================
 * ON THE GO MOVING & STORAGE — Brand Image Registry
 * ==========================================================================
 * RULE: Every image used anywhere in this site MUST come from this file.
 * Never hardcode image URLs in components or pages.
 * To add a new image: upload via `manus-upload-file --webdev`, add the CDN
 * URL here with a descriptive key, then import it where needed.
 * ==========================================================================
 */

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663327875635/AXcVm6gUw3wWRnzjKLx4pb";

/**
 * Wraps a CDN image URL through Netlify's image CDN for automatic WebP conversion.
 * Netlify serves WebP to supporting browsers and falls back to the original format.
 * Quality 82 balances visual fidelity with file size reduction (~30-60% smaller).
 * Only use for above-the-fold / LCP images where format matters most.
 */
export function netlifyImg(url: string, quality = 82, width?: number): string {
  const widthParameter = width ? `&w=${width}` : "";
  return `/.netlify/images?url=${encodeURIComponent(url)}&fm=webp&q=${quality}${widthParameter}`;
}

export const BRAND_IMAGES = {
  // ---- Logo ----
  /** Self-hosted after CloudFront/Manus origin outage (Aug 2026) */
  logo: "/assets/logo.webp",

  // ---- Hero / Primary Photos ----
  /** Crew unloading truck — best hero image, bright daylight, branded truck */
  heroMovingCrew: "/assets/hero-moving-crew.webp",
  /** Full team in front of fleet of branded trucks */
  teamFleet: "/assets/team-fleet.webp",
  /** Crew carrying furniture up ramp */
  crewRamp: "/assets/crew-ramp.webp",
  /** Crew working at truck — close action shot */
  crewAction: "/assets/crew-action.webp",
  /** Office moving — transporting equipment */
  officeMoveAction: "/assets/office-move-action.webp",
  /** Office moving — smaller web-optimized version */
  officeMoveWeb: "/assets/office-move-action.webp",
  /** Branded OTGM truck — side view */
  brandedTruck: "/assets/branded-truck.webp",
  /** Residential moving illustration */
  residentialService: "/assets/residential-service.webp",
  /** Our company — team/company overview image */
  ourCompany: "/assets/our-company.webp",
  /** Seattle moving company — city + truck */
  seattleMovingCompany: "/assets/truck-seattle-skyline.webp",
  /** Storage/warehouse interior */
  storageWarehouse: "/assets/storage-warehouse.webp",
  /** Packing/boxes service image — OTGM crew wrapping furniture with plastic film */
  packingBoxes: "/assets/packing-boxes.webp",
  /** Packing supplies close-up — OTGM crew wrapping furniture with plastic in entryway */
  packingSupplies: "/assets/packing-supplies.webp",
  /** Map background for service areas */
  mapBackground: `${CDN}/bg-map-1_d237af86.png`,
  /** Moving crew — alternate shot (same as heroMovingCrew, slightly different crop) */
  movingCrewAlt: "/assets/moving-crew-alt.webp",

  // ---- Review / Social Proof Badges ----
  googleReviewsBadge: "/assets/google-reviews-badge.webp",
  googleLogo: "/assets/google-logo.webp",
  angiLogo: "/assets/angi-logo.webp",
  yelpLogo: "/assets/yelp-logo.webp",

  // ---- Award Badges ----
  awardAngiesList: `${CDN}/award-angies-list-1_109ac5a6.gif`,
  awardBBB: `${CDN}/award-bbb-1_b0c7fe02.gif`,
  awardHomeAdvisor: `${CDN}/award-homeadvisor-top-rated-1_c513f8b8.gif`,
  awardThreeBestRated: `${CDN}/award-threebest-rated-1_4e07d325.jpg`,
  awardBestOfIndustry: `${CDN}/Best-Of-Industry-Oversight_110ab2d9.png`,

  // ---- Community / Partner Logos ----
  partnerSeattleChildrens: "/assets/seattle-childrens.webp",
  partnerBennett: "/assets/bennett-foundation.webp",
  /** Cancellation policy graphic */
  cancellationPolicy: `${CDN}/Screenshot_2026-01-16_182726-removebg-preview_09792d02.png`,

  // ---- New Service Hero Photos (2025) ----
  /** Fleet of branded trucks — used for Commercial Moving */
  commercialFleet: "/assets/commercial-fleet.webp",
  /** Mover at truck door — used for Specialty Moving */
  specialtyMover: "/assets/specialty-mover.webp",
  /** Forklift in warehouse — used for Storage Services */
  storageForklift: "/assets/storage-forklift.webp",
  /** Two movers passing a box — used for Packing Services */
  packingCrew: "/assets/packing-crew.webp",
  /** Full crew in front of fleet — used for Labor Only Moving */
  laborOnlyCrew: "/assets/labor-only-crew.webp",
  /** Crew loading furniture up ramp at residential home — used for Residential Moving */
  residentialMoving: "/assets/residential-moving.webp",
  /** Team in front of branded truck — used as fallback/location page image */
  onTheGoTeam: "/assets/on-the-go-team.webp",

  // ---- New Photos from Google Drive (April 2026) ----
  /** #1 - OTGM box truck with Seattle skyline + Space Needle in background */
  truckSeattleSkyline: "/assets/truck-seattle-skyline.webp",
  /** #3 - OTGM truck on residential street, Bellevue skyline across water */
  truckBellevueSkyline: "/assets/truck-bellevue-skyline.webp",
  /** #4 - Interior of moving truck packed with blanket-wrapped furniture */
  truckInteriorPacked: "/assets/truck-interior-packed.webp",
  /** #5 - Warehouse interior with wooden crates, pallets, forklift */
  warehouseInterior: "/assets/warehouse-interior.webp",
  /** #6 - Wooden storage crates stacked in commercial warehouse */
  warehouseCrates: "/assets/warehouse-crates.webp",
  /** #7 - Wooden storage crates in warehouse (alternate angle) */
  warehouseCratesAlt: "/assets/warehouse-crates-alt.webp",
  /** #8 - Smiling OTGM team member in green polo in warehouse */
  teamMemberWarehouse: "/assets/team-member-warehouse.webp",
  /** #9 - OTGM crew member operating forklift in warehouse */
  crewForklift: "/assets/crew-forklift.webp",
  /** #10 - OTGM truck parked in front of multi-story brick building */
  truckBrickBuilding: "/assets/truck-brick-building.webp",
  /** #11 - OTGM truck parked in front of modern brick residential building */
  truckResidentialBuilding: "/assets/truck-residential-building.webp",
  /** #12 - Two men shaking hands in front of OTGM truck (customer satisfaction) */
  customerHandshake: "/assets/customer-handshake.webp",
  /** #13 - Two movers loading large box onto OTGM truck via ramp at house */
  crewLoadingTruckRamp: "/assets/crew-loading-truck-ramp.webp",
  /** #14 - OTGM truck with mover carrying item up ramp outside building */
  crewCarryingUpRamp: "/assets/crew-carrying-up-ramp.webp",
  /** #15 - OTGM truck parked on residential street (Beacon Ave) */
  truckResidentialStreet: "/assets/truck-residential-street.webp",
  /** #16 - Jason (owner/manager) portrait in green OTGM polo */
  jasonPortrait: "/assets/jason-portrait.webp",
  /** #17 - OTGM truck parked in front of two-story house, Kirkland */
  truckKirklandHouse: "/assets/truck-kirkland-house.webp",
  /** #18 - Professional shot: OTGM truck in paved lot, modern building background */
  truckProfessionalLot: "/assets/truck-professional-lot.webp",
  /** #19 - Crew member from behind in OTGM hoodie reaching into truck */
  crewHoodieAtTruck: "/assets/crew-hoodie-at-truck.webp",
  /** #20 - Two OTGM movers greeting smiling customer at commercial building */
  crewCustomerCommercial: "/assets/crew-customer-commercial.webp",
  /** #21 - Two movers wrapping furniture with blanket in office/commercial building */
  crewWrappingOffice: "/assets/crew-wrapping-office.webp",
  /** #22 - Two movers maneuvering wrapped furniture through residential entryway */
  crewEntryway1: "/assets/crew-entryway1.webp",
  /** #23 - Two movers moving wrapped furniture through residential entryway (alt) */
  crewEntryway2: "/assets/crew-entryway2.webp",
  /** #24 - Two movers carrying padded item up wooden staircase */
  crewStaircase1: "/assets/crew-staircase1.webp",
  /** #25 - Two men wrapping furniture with plastic in residential entryway */
  crewWrappingEntryway: "/assets/packing-supplies.webp",
  /** #26 - Two movers carrying blanket-wrapped item through entryway */
  crewEntryway3: "/assets/crew-entryway3.webp",
  /** #27 - Two movers moving plastic-wrapped furniture through entryway */
  crewEntryway4: "/assets/crew-entryway4.webp",
  /** #28 - Two movers wrapping furniture with plastic film in entryway */
  crewWrappingFurniture: "/assets/packing-boxes.webp",
  /** #29 - Two movers carrying shrink-wrapped furniture down staircase out door */
  crewStaircaseExit: "/assets/crew-staircase-exit.webp",
  /** #30 - Overhead view: two movers entering home with wrapped item */
  crewOverheadEntrance: "/assets/crew-overhead-entrance.webp",
  /** #31 - Two movers carrying wrapped furniture through residential doorway */
  crewDoorway1: "/assets/crew-doorway1.webp",
  /** #32 - Two movers carrying blanket-wrapped item through entryway */
  crewDoorway2: "/assets/crew-doorway2.webp",
  /** #33 - THREE movers loading blue-wrapped furniture onto OTGM truck at house */
  threeCrewLoadingTruck: "/assets/three-crew-loading-truck.webp",
  /** #34 - Three movers loading wrapped furniture onto OTGM truck via ramp */
  threeCrewRampLoading: "/assets/three-crew-ramp-loading.webp",
  /** #35 - Single mover in OTGM shirt carrying padded item out of front door */
  crewFrontDoorExit: "/assets/crew-front-door-exit.webp",
  /** #36 - Two movers carrying wrapped furniture out of residential house */
  crewCarryingOut: "/assets/crew-carrying-out.webp",
  /** #37 - Two movers carrying dark furniture out of residential house */
  crewCarryingFurniture: "/assets/crew-carrying-furniture.webp",
  /** #38 - Two movers carrying mattress out of residential house */
  crewMattress: "/assets/crew-mattress.webp",
  /** #39 - Two movers carrying plastic-wrapped item through residential doorway */
  crewDoorway3: "/assets/crew-doorway3.webp",
  /** #40 - Mover rolling up large rug in residential entryway */
  crewRollingRug: "/assets/crew-rolling-rug.webp",
  /** #41 - Mover placing blue moving blanket in residential entryway */
  crewFloorProtection1: "/assets/crew-floor-protection1.webp",
  /** #42 - Mover unrolling blue floor protector at residential entrance */
  crewFloorProtection2: "/assets/crew-floor-protection2.webp",
  /** #43 - Two movers carrying protective roll up carpeted staircase */
  crewStairProtection1: "/assets/crew-stair-protection1.webp",
  /** #44 - Two movers protecting staircase with plastic sheeting */
  crewStairProtection2: "/assets/crew-stair-protection2.webp",
  /** #45 - Two movers protecting carpeted staircase (portrait orientation) */
  crewStairProtection3: "/assets/crew-stair-protection3.webp",
  /** #46 - Two movers wrapping staircase banister with plastic film */
  crewBanisterWrap: "/assets/crew-banister-wrap.webp",
  /** #47 - Two movers covering staircase with protective film (portrait) */
  crewStairProtection4: "/assets/crew-stair-protection4.webp",
  /** #48 - Two movers applying plastic wrap to carpeted staircase */
  crewStairProtection5: "/assets/crew-stair-protection5.webp",
  /** #49 - Two movers on plastic-protected staircase with moving blanket */
  crewStaircaseWithBlanket: "/assets/crew-staircase-with-blanket.webp",
  /** #50 - Two movers carrying blanket-covered item up protected staircase */
  crewStaircaseCarrying: "/assets/crew-staircase-carrying.webp",
  /** Jason Sexton — founder & owner professional headshot (blue OTGM polo, white background) */
  jasonSextonHeadshot: "/assets/jason-sexton-headshot.webp",
} as const;

export type BrandImageKey = keyof typeof BRAND_IMAGES;

/**
 * Helper to get a brand image URL by key.
 * Usage: getBrandImage("heroMovingCrew")
 */
export function getBrandImage(key: BrandImageKey): string {
  return BRAND_IMAGES[key];
}
