import { Inter } from "next/font/google";
import "./globals.css";
import FloatingButton from "./components/FloatingButton";
import Header from "./components/Header"; // Asegúrate de que el Header se importe correctamente

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "ALMAMARKA | Cabañas de Adobe | Vive la calma del adobe en plena naturaleza",
  description:
    "Descubre nuestras cabañas de adobe en un entorno natural único. Experimenta la serenidad y la conexión con la naturaleza en San Fernando del Valle de Catamarca.",
  keywords:
    "almamarka, cabañas rústicas, adobe, naturaleza, San Fernando del Valle de Catamarca, turismo sustentable",
  author:"ALMAMARKA Cabañas",
  openGraph: {
    title: "ALMAMARKA | Cabañas Rústicas | Experiencia única en la naturaleza",
    description:
      "Vive una experiencia inolvidable en nuestras cabañas de adobe, rodeado de naturaleza y paz.",
    images: [
      {
        url: "https://www.almamarka.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cabañas Rústicas en la naturaleza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ALMAMARKA | Cabañas Rústicas | Experiencia única en la naturaleza",
    description:
      "Vive una experiencia inolvidable en nuestras cabañas de adobe, rodeado de naturaleza y paz.",
    images: ["https://www.almmarka.com/twitter-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="canonical" href="https://almamarkacabanas.com" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.almamarkacabanas.com" />
        <meta property="og:site_name" content="Almamarka Cabañas" />
      </head>
      <body className={inter.className}>
        <Header /> {/* El header ahora está dentro del body */}
        <FloatingButton /> {/* Botón flotante siempre visible */}
        {children}
      </body>
    </html>
  );
}
