"use client";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Image from "next/image";
import Head from "next/head";

const images = [
  { src: "/galeria/galeria1.jpeg", alt: "Vista exterior de la cabaña" },
  { src: "/galeria/galeria2.jpeg", alt: "Interior rústico de la cabaña" },
  { src: "/galeria/galeria3.jpeg", alt: "Sendero hacia las cabañas" },
  {
    src: "/galeria/galeria4.jpeg",
    alt: "Paisaje de montaña desde las cabañas",
  },
  { src: "/galeria/galeria5.jpeg", alt: "Cabañas en el amanecer" },
  { src: "/galeria/galeria6.jpeg", alt: "Atardecer sobre las cabañas" },
  { src: "/galeria/galeria7.jpeg", alt: "Rústica decoración interior" },
  { src: "/galeria/galeria8.jpeg", alt: "Vista panorámica del predio" },
  // { src: "/galeria/galeria9.jpg", alt: "Vista interior1 cabañas" },
  { src: "/galeria/galeria10.jpg", alt: "Vista interior2 cabañas" },
  { src: "/galeria/galeria11.jpg", alt: "Vista interior3 cabañas" },
  { src: "/galeria/galeria12.jpg", alt: "Vista interior4 cabañas" },
  { src: "/galeria/galeria13.jpg", alt: "Vista interior5 cabañas" },
  { src: "/galeria/galeria14.jpg", alt: "Vista interior6 cabañas" },
  { src: "/galeria/galeria15.jpg", alt: "Vista interior7 cabañas" },
  { src: "/galeria/galeria16.jpg", alt: "Vista interior8 cabañas" },
  { src: "/galeria/galeria17.jpg", alt: "Vista interior9 cabañas" },
];

export default function Galeria() {
  return (
    <>
      <Head>
        <title>Galería de Fotos | Conocé ALMAMARKA y su Entorno Natural</title>
        <meta
          name="description"
          content="Explorá nuestra galería de imágenes y sentí la esencia de ALMAMARKA: cabañas rústicas, paisajes de montaña, amaneceres mágicos y naturaleza virgen."
        />
      </Head>
      <section id="galeria" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Galería</h2>
          <PhotoProvider>
            <div className="flex overflow-x-auto gap-4">
              {images.map((image, index) => (
                <PhotoView key={index} src={image.src}>
                  <div className="flex-shrink-0">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={200} // Tamaño fijo, no usamos fill
                      height={200}
                      className="rounded-lg object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                      loading="lazy" // Forzar lazy loading
                    />
                  </div>
                </PhotoView>
              ))}
            </div>
          </PhotoProvider>
        </div>
      </section>
    </>
  );
}
