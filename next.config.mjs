/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // 👈 Agregado para producción correcta en Railway
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'almamarka.com', // Detecta cuando entran sin www
          },
        ],
        destination: 'https://www.almamarka.com/:path*', // Redirige al www
        permanent: true, // Código 301 para SEO
      },
    ];
  },
};

export default nextConfig;

