import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCATION_DATA } from "@/lib/locationData";
import { POSTS_DATA } from "@/lib/blogData";
import LocationPage from "@/components/pages/LocationPage";
import BlogPost from "@/components/pages/BlogPost";
import PrimaryImageSchema from "@/components/PrimaryImageSchema";
import primaryImages from "@/lib/primaryImages";

const { absoluteImageUrl, getLocationPrimaryImage } = primaryImages;

// Slugs that have dedicated static routes at a higher priority — exclude from
// dynamic generation to avoid conflicts.
const EXCLUDED_SLUGS = new Set([
  "about",
  "about-us",
  "apartment-moving",
  "appliance-moving",
  "blog",
  "business-movers",
  "commercial-moving",
  "condo-moving",
  "contact-us",
  "corporate-relocation",
  "faq",
  "freight-forwarding-service",
  "furniture-moving",
  "how-much-do-movers-cost",
  "jason-sexton",
  "labor-only-moving",
  "locations",
  "moving-supplies",
  "office-moving",
  "packing-services",
  "partners",
  "piano-moving",
  "privacy-policy",
  "real-estate-agents",
  "residential-moving",
  "senior-moving",
  "specialty-moving",
  "staging-professionals",
  "storage-services",
  "team",
  "thank-you-get-a-quote-services",
  "unpacking-services",
  "warehousing-distribution",
  "warehousing-services",
  "we-are-local",
]);

// All valid location slugs + all blog post slugs (excluding dedicated routes)
export async function generateStaticParams() {
  const locationSlugs = Object.keys(LOCATION_DATA).map((slug) => ({
    cityMovers: slug,
  }));
  const blogSlugs = Object.keys(POSTS_DATA)
    .filter((slug) => !EXCLUDED_SLUGS.has(slug) && !LOCATION_DATA[slug])
    .map((slug) => ({ cityMovers: slug }));
  return [...locationSlugs, ...blogSlugs];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cityMovers: string }>;
}): Promise<Metadata> {
  const { cityMovers } = await params;

  // Check location first
  const locationData = LOCATION_DATA[cityMovers];
  if (locationData) {
    const canonical = `https://onthegomoving.com/${locationData.slug}/`;
    const primaryImage = absoluteImageUrl(getLocationPrimaryImage(locationData.slug).src);
    return {
      title: locationData.metaTitle,
      description: locationData.metaDescription,
      alternates: { canonical },
      openGraph: {
        title: locationData.metaTitle,
        description: locationData.metaDescription,
        url: canonical,
        images: [{ url: primaryImage }],
      },
      twitter: {
        card: "summary_large_image",
        title: locationData.metaTitle,
        description: locationData.metaDescription,
        images: [primaryImage],
      },
    };
  }

  // Check blog post
  const post = POSTS_DATA[cityMovers];
  if (post) {
    // Canonical uses root-level URL matching the live WordPress site
    const canonical = `https://onthegomoving.com/${post.slug}/`;
    return {
      title: post.metaTitle || post.title,
      description: post.metaDescription,
      alternates: { canonical },
      openGraph: {
        title: post.metaTitle || post.title,
        description: post.metaDescription,
        url: canonical,
        type: "article",
      },
    };
  }

  return {};
}

export default async function DynamicRootRoute({
  params,
}: {
  params: Promise<{ cityMovers: string }>;
}) {
  const { cityMovers } = await params;

  // Location page takes priority
  const locationData = LOCATION_DATA[cityMovers];
  if (locationData) {
    const primaryImage = getLocationPrimaryImage(locationData.slug);
    return (
      <>
        <PrimaryImageSchema
          id="location-schema"
          pageUrl={`https://onthegomoving.com/${locationData.slug}/`}
          pageName={locationData.metaTitle}
          imageUrl={absoluteImageUrl(primaryImage.src)}
          imageAlt={primaryImage.alt}
        />
        <LocationPage slug={cityMovers} />
      </>
    );
  }

  // Blog post at root level (matching live site URL structure)
  const post = POSTS_DATA[cityMovers];
  if (post && !EXCLUDED_SLUGS.has(cityMovers)) {
    return <BlogPost slug={cityMovers} />;
  }

  notFound();
}
