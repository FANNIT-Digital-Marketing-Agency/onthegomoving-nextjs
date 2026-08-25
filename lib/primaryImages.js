const SITE_ORIGIN = "https://onthegomoving.com";

const LOCATION_PRIMARY_IMAGES = {
  "seattle-movers": {
    src: "/assets/truck-seattle-skyline.webp",
    alt: "On The Go Moving truck with the Seattle skyline in the background",
  },
  "bellevue-movers": {
    src: "/assets/truck-bellevue-skyline.webp",
    alt: "On The Go Moving truck with the Bellevue skyline in the background",
  },
  "redmond-movers": {
    src: "/assets/crew-loading-truck-ramp.webp",
    alt: "On The Go Moving crew loading furniture onto a moving truck",
  },
};

const DEFAULT_LOCATION_PRIMARY_IMAGE = {
  src: "/assets/on-the-go-team.webp",
  alt: "On The Go Moving team with a branded moving truck",
};

const SERVICE_PRIMARY_IMAGES = {
  "residential-moving": "/assets/residential-moving.webp",
  "apartment-moving": "/assets/three-crew-ramp-loading.webp",
  "commercial-moving": "/assets/commercial-fleet.webp",
};

const CITY_SERVICE_PRIMARY_IMAGES = {
  residential: {
    label: "Residential Movers",
    src: "/assets/three-crew-loading-truck.webp",
    alt: "Three On The Go Moving movers loading furniture onto a moving truck",
  },
  apartment: {
    label: "Apartment Movers",
    src: "/assets/three-crew-loading-truck.webp",
    alt: "Three On The Go Moving movers loading furniture onto a moving truck",
  },
  packing: {
    label: "Packing Services",
    src: "/assets/truck-kirkland-house.webp",
    alt: "On The Go Moving truck parked outside a residential home",
  },
  storage: {
    label: "Storage Services",
    src: "/assets/storage-warehouse.webp",
    alt: "On The Go Moving storage warehouse interior",
  },
  office: {
    label: "Office Movers",
    src: "/assets/crew-wrapping-office.webp",
    alt: "On The Go Moving crew wrapping furniture in an office",
  },
  commercial: {
    label: "Commercial Movers",
    src: "/assets/crew-wrapping-office.webp",
    alt: "On The Go Moving crew wrapping furniture in an office",
  },
  senior: {
    label: "Senior Movers",
    src: "/assets/crew-entryway2.webp",
    alt: "On The Go Moving movers carrying protected furniture through a home entryway",
  },
  furniture: {
    label: "Furniture Movers",
    src: "/assets/three-crew-loading-truck.webp",
    alt: "Three On The Go Moving movers loading furniture onto a moving truck",
  },
  condo: {
    label: "Condo Movers",
    src: "/assets/three-crew-loading-truck.webp",
    alt: "Three On The Go Moving movers loading furniture onto a moving truck",
  },
  appliance: {
    label: "Appliance Moving",
    src: "/assets/three-crew-loading-truck.webp",
    alt: "Three On The Go Moving movers loading furniture onto a moving truck",
  },
  unpacking: {
    label: "Unpacking Services",
    src: "/assets/truck-kirkland-house.webp",
    alt: "On The Go Moving truck parked outside a residential home",
  },
  warehousing: {
    label: "Warehousing Services",
    src: "/assets/storage-warehouse.webp",
    alt: "On The Go Moving storage warehouse interior",
  },
};

function getLocationPrimaryImage(slug) {
  return LOCATION_PRIMARY_IMAGES[slug] || DEFAULT_LOCATION_PRIMARY_IMAGE;
}

function getServicePrimaryImage(slug) {
  return SERVICE_PRIMARY_IMAGES[slug];
}

function getCityServicePrimaryImage(serviceKey) {
  return CITY_SERVICE_PRIMARY_IMAGES[serviceKey];
}

function absoluteImageUrl(src) {
  return src.startsWith("http") ? src : `${SITE_ORIGIN}${src}`;
}

module.exports = {
  SITE_ORIGIN,
  LOCATION_PRIMARY_IMAGES,
  SERVICE_PRIMARY_IMAGES,
  CITY_SERVICE_PRIMARY_IMAGES,
  getLocationPrimaryImage,
  getServicePrimaryImage,
  getCityServicePrimaryImage,
  absoluteImageUrl,
};
