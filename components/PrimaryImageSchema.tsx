type PrimaryImageSchemaProps = {
  id: string;
  pageUrl: string;
  pageName: string;
  imageUrl: string;
  imageAlt: string;
};

export default function PrimaryImageSchema({
  id,
  pageUrl,
  pageName,
  imageUrl,
  imageAlt,
}: PrimaryImageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: pageUrl,
    name: pageName,
    primaryImageOfPage: {
      "@type": "ImageObject",
      contentUrl: imageUrl,
      caption: imageAlt,
    },
  };

  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
