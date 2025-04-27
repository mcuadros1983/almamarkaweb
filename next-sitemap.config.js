/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.almamarka.com',
  generateRobotsTxt: true,
  sitemapSize: 7000, // 👈 Esto fuerza que haya solo un sitemap.xml
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    // Si querés más adelante agregás otras rutas manuales
    // await config.transform(config, '/galeria'),
  ],
};
