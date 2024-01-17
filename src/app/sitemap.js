export default function sitemap() {
  return [
    {
      url: "https://explorecubainclassiccars.com/en",
      lastModified: new Date(),
      // changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: "https://explorecubainclassiccars.com/en/about",
      lastModified: new Date(),
      // changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://explorecubainclassiccars.com/en/cars",
      lastModified: new Date(),
      // changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: "https://explorecubainclassiccars.com/en/places",
      lastModified: new Date(),
      // changeFrequency: 'weekly',
      priority: 0.6,
    },
  ];
}
