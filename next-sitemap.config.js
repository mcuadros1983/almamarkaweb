/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.almamarka.com',
  generateRobotsTxt: true,
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/condiciones-reserva'),
    // Agregá más páginas si querés: 
    // await config.transform(config, '/galeria'),
    // await config.transform(config, '/contacto'),
  ],
};