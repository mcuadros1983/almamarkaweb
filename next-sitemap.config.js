// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.almamarka.com', // ⬅️ CAMBIA esto por tu dominio final real
    generateRobotsTxt: true, // (opcional, pero recomendable)
    sitemapSize: 7000, // Número de URLs máximo por sitemap, suficiente para tu página
    changefreq: 'weekly', // Google sabrá que tu contenido cambia cada semana (o podés poner 'monthly')
    priority: 0.7, // Qué tan importante es tu página (0 a 1)
  };
  