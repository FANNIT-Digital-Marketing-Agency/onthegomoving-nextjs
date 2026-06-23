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
export function netlifyImg(url: string, quality = 82): string {
  return `/.netlify/images?url=${encodeURIComponent(url)}&fm=webp&q=${quality}`;
}

export const BRAND_IMAGES = {
  // ---- Logo ----
  logo: `${CDN}/logo-1_2b575a68.png`,

  // ---- Hero / Primary Photos ----
  /** Crew unloading truck — best hero image, bright daylight, branded truck */
  heroMovingCrew: `${CDN}/moving-scaled-1_bc87e2e0.jpeg`,
  /** Full team in front of fleet of branded trucks */
  teamFleet: `${CDN}/otgmteam-3-scaled_558bddff.jpg`,
  /** Crew carrying furniture up ramp */
  crewRamp: `${CDN}/00019081-1-scaled_03f770cc.jpg`,
  /** Crew working at truck — close action shot */
  crewAction: `${CDN}/00019098-1_222cda83.jpg`,
  /** Office moving — transporting equipment */
  officeMoveAction: `${CDN}/office-moving-transporting-4-scaled_4e84f8b9.jpg`,
  /** Office moving — smaller web-optimized version */
  officeMoveWeb: `${CDN}/office-moving-transporting-4-scaled-1024x684-1_2f2bcd32.jpg`,
  /** Branded OTGM truck — side view */
  brandedTruck: `${CDN}/truck-1_f9a45bbc.png`,
  /** Residential moving illustration */
  residentialService: `${CDN}/Residential_5f9b52d8.png`,
  /** Our company — team/company overview image */
  ourCompany: `${CDN}/our_company_4cd02c70.png`,
  /** Seattle moving company — city + truck */
  seattleMovingCompany: `${CDN}/seattle-moving-company_58b6726f.png`,
  /** Storage/warehouse interior */
  storageWarehouse: `${CDN}/image2_dd236ebf.jpg`,
  /** Packing/boxes service image — OTGM crew wrapping furniture with plastic film */
  packingBoxes: `${CDN}/28_ltg_-0988_copy_644ef179.jpg`,
  /** Packing supplies close-up — OTGM crew wrapping furniture with plastic in entryway */
  packingSupplies: `${CDN}/25_ltg_-0963_copy_b2d8c9e7.jpg`,
  /** Map background for service areas */
  mapBackground: `${CDN}/bg-map-1_d237af86.png`,
  /** Moving crew — alternate shot (same as heroMovingCrew, slightly different crop) */
  movingCrewAlt: `${CDN}/moving-scaled_dac14e85.jpeg`,

  // ---- Review / Social Proof Badges ----
  googleReviewsBadge: `${CDN}/on-the-go-moving-reviews-1_a3059665.jpg`,
  googleLogo: `${CDN}/on-the-go-google-logo-1_6b37f963.png`,
  angiLogo: `${CDN}/on-the-go-angi-logo-1_7fe145ee.png`,
  yelpLogo: `${CDN}/on-the-go-yelp-logo-1_1e3c8cc9.png`,

  // ---- Award Badges ----
  awardAngiesList: `${CDN}/award-angies-list-1_109ac5a6.gif`,
  awardBBB: `${CDN}/award-bbb-1_b0c7fe02.gif`,
  awardHomeAdvisor: `${CDN}/award-homeadvisor-top-rated-1_c513f8b8.gif`,
  awardThreeBestRated: `${CDN}/award-threebest-rated-1_4e07d325.jpg`,
  awardBestOfIndustry: `${CDN}/Best-Of-Industry-Oversight_110ab2d9.png`,

  // ---- Community / Partner Logos ----
  partnerSeattleChildrens: `${CDN}/Seattle_Childrens_logo_14245490.png`,
  partnerBennett: `${CDN}/logo_bennett_8ff949b7.png`,
  /** Cancellation policy graphic */
  cancellationPolicy: `${CDN}/Screenshot_2026-01-16_182726-removebg-preview_09792d02.png`,

  // ---- New Service Hero Photos (2025) ----
  /** Fleet of branded trucks — used for Commercial Moving */
  commercialFleet: `${CDN}/Commercial_97cc8853.webp`,
  /** Mover at truck door — used for Specialty Moving */
  specialtyMover: `${CDN}/Specialty_270d07d3.webp`,
  /** Forklift in warehouse — used for Storage Services */
  storageForklift: `${CDN}/Storage_8bb7c9f7.webp`,
  /** Two movers passing a box — used for Packing Services */
  packingCrew: `${CDN}/Packing_0e9a6b12.webp`,
  /** Full crew in front of fleet — used for Labor Only Moving */
  laborOnlyCrew: `${CDN}/laboronly_d1b1e48b.webp`,
  /** Crew loading furniture up ramp at residential home — used for Residential Moving */
  residentialMoving: `${CDN}/residential_f4dfd0c6.webp`,
  /** Team in front of branded truck — used as fallback/location page image */
  onTheGoTeam: `${CDN}/onthegomoving_4418a232.jpg`,

  // ---- New Photos from Google Drive (April 2026) ----
  /** #1 - OTGM box truck with Seattle skyline + Space Needle in background */
  truckSeattleSkyline: `${CDN}/01_26_Foot_box_Van_truck_b46983f0.jpg`,
  /** #2 - OTGM truck on street, Seattle skyline (2013) */
  truckSeattle2013: `${CDN}/02_20130524_184132_7149cd36.jpg`,
  /** #3 - OTGM truck on residential street, Bellevue skyline across water */
  truckBellevueSkyline: `${CDN}/03_Bellevue-OTGM_93eee439.jpg`,
  /** #4 - Interior of moving truck packed with blanket-wrapped furniture */
  truckInteriorPacked: `${CDN}/04_imagejpeg_2_1_007aa6cb.jpg`,
  /** #5 - Warehouse interior with wooden crates, pallets, forklift */
  warehouseInterior: `${CDN}/05_IMG_3985_3b5dfa95.jpg`,
  /** #6 - Wooden storage crates stacked in commercial warehouse */
  warehouseCrates: `${CDN}/06_IMG_3986_204699a9.jpg`,
  /** #7 - Wooden storage crates in warehouse (alternate angle) */
  warehouseCratesAlt: `${CDN}/07_IMG_3986_8d089d1c.jpg`,
  /** #8 - Smiling OTGM team member in green polo in warehouse */
  teamMemberWarehouse: `${CDN}/08_IMG_3987_85818be0.jpg`,
  /** #9 - OTGM crew member operating forklift in warehouse */
  crewForklift: `${CDN}/09_IMG_4001_708be44c.jpg`,
  /** #10 - OTGM truck parked in front of multi-story brick building */
  truckBrickBuilding: `${CDN}/10_IMG_5438_025fb9cf.jpg`,
  /** #11 - OTGM truck parked in front of modern brick residential building */
  truckResidentialBuilding: `${CDN}/11_IMG_5439_84191d78.jpg`,
  /** #12 - Two men shaking hands in front of OTGM truck (customer satisfaction) */
  customerHandshake: `${CDN}/12_IMG_5476_85d7c08f.jpg`,
  /** #13 - Two movers loading large box onto OTGM truck via ramp at house */
  crewLoadingTruckRamp: `${CDN}/13_IMG_5533_d9bca0eb.jpg`,
  /** #14 - OTGM truck with mover carrying item up ramp outside building */
  crewCarryingUpRamp: `${CDN}/14_IMG_5575_758748e7.jpg`,
  /** #15 - OTGM truck parked on residential street (Beacon Ave) */
  truckResidentialStreet: `${CDN}/15_IMG_5584_c8476b11.jpg`,
  /** #16 - Jason (owner/manager) portrait in green OTGM polo */
  jasonPortrait: `${CDN}/16_jason2_aa60e60f.jpg`,
  /** #17 - OTGM truck parked in front of two-story house, Kirkland */
  truckKirklandHouse: `${CDN}/17_Kirkland-OTGM_e9423062.jpg`,
  /** #18 - Professional shot: OTGM truck in paved lot, modern building background */
  truckProfessionalLot: `${CDN}/18_ltg_-0070_copy_7e1c251b.jpg`,
  /** #19 - Crew member from behind in OTGM hoodie reaching into truck */
  crewHoodieAtTruck: `${CDN}/19_ltg_-0159_copy_227bd199.jpg`,
  /** #20 - Two OTGM movers greeting smiling customer at commercial building */
  crewCustomerCommercial: `${CDN}/20_ltg_-0373_copy_10a18c84.jpg`,
  /** #21 - Two movers wrapping furniture with blanket in office/commercial building */
  crewWrappingOffice: `${CDN}/21_ltg_-0479_copy_9ca99010.jpg`,
  /** #22 - Two movers maneuvering wrapped furniture through residential entryway */
  crewEntryway1: `${CDN}/22_ltg_-0951_copy_0868f304.jpg`,
  /** #23 - Two movers moving wrapped furniture through residential entryway (alt) */
  crewEntryway2: `${CDN}/23_ltg_-0954_copy_d9eaafbd.jpg`,
  /** #24 - Two movers carrying padded item up wooden staircase */
  crewStaircase1: `${CDN}/24_ltg_-0959_copy_81a6f6b2.jpg`,
  /** #25 - Two men wrapping furniture with plastic in residential entryway */
  crewWrappingEntryway: `${CDN}/25_ltg_-0963_copy_b2d8c9e7.jpg`,
  /** #26 - Two movers carrying blanket-wrapped item through entryway */
  crewEntryway3: `${CDN}/26_ltg_-0965_copy_f2ddc2b0.jpg`,
  /** #27 - Two movers moving plastic-wrapped furniture through entryway */
  crewEntryway4: `${CDN}/27_ltg_-0974_copy_cfe580bb.jpg`,
  /** #28 - Two movers wrapping furniture with plastic film in entryway */
  crewWrappingFurniture: `${CDN}/28_ltg_-0988_copy_644ef179.jpg`,
  /** #29 - Two movers carrying shrink-wrapped furniture down staircase out door */
  crewStaircaseExit: `${CDN}/29_ltg_-1016_copy_00953a76.jpg`,
  /** #30 - Overhead view: two movers entering home with wrapped item */
  crewOverheadEntrance: `${CDN}/30_ltg_-1044_copy_47406d07.jpg`,
  /** #31 - Two movers carrying wrapped furniture through residential doorway */
  crewDoorway1: `${CDN}/31_ltg_-1047_copy_55fb5eb8.jpg`,
  /** #32 - Two movers carrying blanket-wrapped item through entryway */
  crewDoorway2: `${CDN}/32_ltg_-1054_copy_2645e242.jpg`,
  /** #33 - THREE movers loading blue-wrapped furniture onto OTGM truck at house */
  threeCrewLoadingTruck: `${CDN}/33_ltg_-1059_copy_721a9c3a.jpg`,
  /** #34 - Three movers loading wrapped furniture onto OTGM truck via ramp */
  threeCrewRampLoading: `${CDN}/34_ltg_-1061_copy_10717b8e.jpg`,
  /** #35 - Single mover in OTGM shirt carrying padded item out of front door */
  crewFrontDoorExit: `${CDN}/35_ltg_-1077_copy_05ed7bf0.jpg`,
  /** #36 - Two movers carrying wrapped furniture out of residential house */
  crewCarryingOut: `${CDN}/36_ltg_-1081_copy_9e76884f.jpg`,
  /** #37 - Two movers carrying dark furniture out of residential house */
  crewCarryingFurniture: `${CDN}/37_ltg_-1125_copy_608332d9.jpg`,
  /** #38 - Two movers carrying mattress out of residential house */
  crewMattress: `${CDN}/38_ltg_-1143_copy_a06101ce.jpg`,
  /** #39 - Two movers carrying plastic-wrapped item through residential doorway */
  crewDoorway3: `${CDN}/39_ltg_-1162_copy_c65885b2.jpg`,
  /** #40 - Mover rolling up large rug in residential entryway */
  crewRollingRug: `${CDN}/40_ltg_-1206_copy_dc8f515e.jpg`,
  /** #41 - Mover placing blue moving blanket in residential entryway */
  crewFloorProtection1: `${CDN}/41_ltg_-1214_copy_cd891938.jpg`,
  /** #42 - Mover unrolling blue floor protector at residential entrance */
  crewFloorProtection2: `${CDN}/42_ltg_-1215_copy_c179c58c.jpg`,
  /** #43 - Two movers carrying protective roll up carpeted staircase */
  crewStairProtection1: `${CDN}/43_ltg_-1220_copy_d3a0f133.jpg`,
  /** #44 - Two movers protecting staircase with plastic sheeting */
  crewStairProtection2: `${CDN}/44_ltg_-1224_copy_7ee86f13.jpg`,
  /** #45 - Two movers protecting carpeted staircase (portrait orientation) */
  crewStairProtection3: `${CDN}/45_ltg_-1225_copy_a595ddff.jpg`,
  /** #46 - Two movers wrapping staircase banister with plastic film */
  crewBanisterWrap: `${CDN}/46_ltg_-1226_copy_3666313c.jpg`,
  /** #47 - Two movers covering staircase with protective film (portrait) */
  crewStairProtection4: `${CDN}/47_ltg_-1229_copy_14436eb8.jpg`,
  /** #48 - Two movers applying plastic wrap to carpeted staircase */
  crewStairProtection5: `${CDN}/48_ltg_-1235_copy_fa1dbf4f.jpg`,
  /** #49 - Two movers on plastic-protected staircase with moving blanket */
  crewStaircaseWithBlanket: `${CDN}/49_ltg_-1238_copy_5bb64996.jpg`,
  /** #50 - Two movers carrying blanket-covered item up protected staircase */
  crewStaircaseCarrying: `${CDN}/50_ltg_-1240_copy_afd3b941.jpg`,
  /** Jason Sexton — founder & owner professional headshot (blue OTGM polo, white background) */
  jasonSextonHeadshot: "/assets/jason-sexton-headshot.jpg",
} as const;

export type BrandImageKey = keyof typeof BRAND_IMAGES;

/**
 * Helper to get a brand image URL by key.
 * Usage: getBrandImage("heroMovingCrew")
 */
export function getBrandImage(key: BrandImageKey): string {
  return BRAND_IMAGES[key];
}
