export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://viratsoftwaresolutions.com/sitemap.xml",
  };
}
