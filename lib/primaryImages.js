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

function getLocationPrimaryImage(slug) {
  return LOCATION_PRIMARY_IMAGES[slug] || DEFAULT_LOCATION_PRIMARY_IMAGE;
}

function getServicePrimaryImage(slug) {
  return SERVICE_PRIMARY_IMAGES[slug];
}

function absoluteImageUrl(src) {
  return src.startsWith("http") ? src : `${SITE_ORIGIN}${src}`;
}

module.exports = {
  SITE_ORIGIN,
  LOCATION_PRIMARY_IMAGES,
  SERVICE_PRIMARY_IMAGES,
  getLocationPrimaryImage,
  getServicePrimaryImage,
  absoluteImageUrl,
};
