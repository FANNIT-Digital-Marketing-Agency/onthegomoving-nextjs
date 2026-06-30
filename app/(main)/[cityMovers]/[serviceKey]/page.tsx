import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCATION_DATA } from "@/lib/locationData";
import CityServiceSubPage from "@/components/pages/CityServiceSubPage";


// All valid service keys
const SERVICE_KEYS = [
  "residential",
  "apartment",
  "packing",
  "storage",
  "office",
  "commercial",
  "senior",
  "furniture",
  "condo",
  "appliance",
  "unpacking",
  "warehousing",
];

export async function generateStaticParams() {
  const params: { cityMovers: string; serviceKey: string }[] = [];
  for (const locationSlug of Object.keys(LOCATION_DATA)) {
    for (const serviceKey of SERVICE_KEYS) {
      params.push({ cityMovers: locationSlug, serviceKey });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cityMovers: string; serviceKey: string }>;
}): Promise<Metadata> {
  const { cityMovers, serviceKey } = await params;
  const locationData = LOCATION_DATA[cityMovers];
  if (!locationData) return {};

  const city = locationData.city;

  // City-first title format — differentiates from hub service pages to prevent
  // keyword cannibalization. Hub pages own the generic term (e.g. "Apartment Moving");
  // city sub-pages own the geo-modified term (e.g. "Seattle Apartment Movers").
  const serviceTitles: Record<string, string> = {
    residential: `${city} Residential Movers`,
    apartment:   `${city} Apartment Movers`,
    packing:     `${city} Packing Services`,
    storage:     `${city} Storage Services`,
    office:      `${city} Office Movers`,
    commercial:  `${city} Commercial Movers`,
    senior:      `${city} Senior Movers`,
    furniture:   `${city} Furniture Movers`,
    condo:       `${city} Condo Movers`,
    appliance:   `${city} Appliance Movers`,
    unpacking:   `${city} Unpacking Services`,
    warehousing: `${city} Warehousing Services`,
  };

  // Lowercase labels used in meta descriptions
  const serviceDescLabels: Record<string, string> = {
    residential: "residential moving",
    apartment:   "apartment moving",
    packing:     "packing services",
    storage:     "storage services",
    office:      "office moving",
    commercial:  "commercial moving",
    senior:      "senior moving",
    furniture:   "furniture moving",
    condo:       "condo moving",
    appliance:   "appliance moving",
    unpacking:   "unpacking services",
    warehousing: "warehousing services",
  };

  const pageTitle = serviceTitles[serviceKey] || `${city} ${serviceKey}`;
  const descLabel = serviceDescLabels[serviceKey] || serviceKey;
  const canonical = `https://onthegomoving.com/${cityMovers}/${serviceKey}/`;

  const title = `${pageTitle}`;
  const description = `Local ${descLabel} in ${city}, WA. Licensed & insured movers serving ${city} and the greater Seattle area. Free quotes, (425) 761-8500.`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
    },
  };
}

export default async function CityServiceSubPageRoute({
  params,
}: {
  params: Promise<{ cityMovers: string; serviceKey: string }>;
}) {
  const { cityMovers, serviceKey } = await params;
  const locationData = LOCATION_DATA[cityMovers];
  if (!locationData) notFound();

  // Extract city slug (without -movers suffix)
  const citySlug = cityMovers
    .replace(/-movers$/, "")
    .replace(/-moving-services$/, "")
    .replace(/^moving-/, "");

  return <CityServiceSubPage citySlug={citySlug} serviceKey={serviceKey} />;
}
