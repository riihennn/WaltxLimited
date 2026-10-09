export function BreadcrumbsJsonLd({
  items,
}: {
  items: { name: string; item: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://waltx.ae",
      },
      ...items.map((breadcrumb, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: breadcrumb.name,
        item: breadcrumb.item,
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
