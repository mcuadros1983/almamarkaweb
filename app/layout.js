// app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header"; // que puede ser server o client
import FloatingButton from "./components/FloatingButton"; // client
import TagManagerInit from "./components/TagManagerInit"; // solo carga useEffect

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "ALMAMARKA | Cabañas de Adobe | Vive la calma del adobe en plena naturaleza",
  description:
    "Descubre nuestras cabañas de adobe en un entorno natural único. Experimenta la serenidad y la conexión con la naturaleza en San Fernando del Valle de Catamarca.",
  keywords: [
    "almamarka",
    "cabañas rústicas",
    "adobe",
    "naturaleza",
    "San Fernando del Valle de Catamarca",
    "turismo sustentable",
  ],
  authors: [{ name: "ALMAMARKA Cabañas" }],
  creator: "ALMAMARKA Cabañas",
  metadataBase: new URL("https://www.almamarka.com"),
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.almamarka.com",
    siteName: "ALMAMARKA Cabañas",
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
    images: ["https://www.almamarka.com/twitter-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  robots: "index,follow",
  alternates: {
    canonical: "https://www.almamarka.com/",
  },
};

// export default function RootLayout({ children }) {
//   useEffect(() => {
//     TagManager.initialize({ gtmId: "GTM-JZX6ZPF" });
//   }, []);

//   return (
//     <html lang="es">
//       <body className={inter.className}>
//         <Header />
//         <FloatingButton />
//         {children}
//       </body>
//     </html>
//   );
// }

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <FloatingButton />
        <TagManagerInit />
        {children}
      </body>
    </html>
  );
}
