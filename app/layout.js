import { Inter } from 'next/font/google';
import './globals.css';
import FloatingButton from './components/FloatingButton';
import Header from './components/Header'; // Asegúrate de que el Header se importe correctamente

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ALMAMARKA | Cabañas de Adobe | Vive la calma del adobe en plena naturaleza',
  description: 'Descubre nuestras cabañas de adobe en un entorno natural único. Experimenta la serenidad y la conexión con la naturaleza en San Fernando del Valle de Catamarca.',
  keywords: 'almamarka, cabañas rústicas, adobe, naturaleza, San Fernando del Valle de Catamarca, turismo sustentable',
  openGraph: {
    title: 'ALMAMARKA | Cabañas Rústicas | Experiencia única en la naturaleza',
    description: 'Vive una experiencia inolvidable en nuestras cabañas de adobe, rodeado de naturaleza y paz.',
    images: [
      {
        url: 'https://example.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cabañas Rústicas en la naturaleza',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ALMAMARKA | Cabañas Rústicas | Experiencia única en la naturaleza',
    description: 'Vive una experiencia inolvidable en nuestras cabañas de adobe, rodeado de naturaleza y paz.',
    images: ['https://example.com/twitter-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="canonical" href="https://example.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <Header /> {/* El header ahora está dentro del body */}
        <FloatingButton /> {/* Botón flotante siempre visible */}
        {children}
      </body>
    </html>
  );
}
