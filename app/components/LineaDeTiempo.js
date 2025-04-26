"use client";

import { useState } from 'react';
import Image from 'next/image';

// Hitos con imágenes
const hitos = [
  {
    year: "2010",
    title: "Construcción de la primera cabaña",
    description: "Comienza la construcción de nuestra primera cabaña utilizando materiales sustentables como adobe.",
    image: "/hito-2010.jpg", // Imagen del hito
  },
  {
    year: "2012",
    title: "Apertura al público",
    description: "La cabaña original se abre al público, ofreciendo una experiencia única de contacto con la naturaleza.",
    image: "/hito-2012.jpg", // Imagen del hito
  },
  {
    year: "2015",
    title: "Expansión del complejo",
    description: "Se agregan nuevas cabañas y servicios para mejorar la experiencia de nuestros visitantes.",
    image: "/hito-2015.jpg", // Imagen del hito
  },
  {
    year: "2020",
    title: "Implementación de prácticas ecológicas",
    description: "Introducimos prácticas ecológicas avanzadas, como paneles solares y gestión responsable del agua.",
    image: "/hito-2020.jpg", // Imagen del hito
  },
  {
    year: "2023",
    title: "Tour virtual 360°",
    description: "Lanzamos un tour virtual interactivo para que los visitantes puedan explorar el complejo desde cualquier parte del mundo.",
    image: "/hito-2023.jpg", // Imagen del hito
  },
];

export default function LineaDeTiempo() {
  const [selectedHito, setSelectedHito] = useState(null);

  return (
    <section id="linea-de-tiempo" className="py-16">
      <div className="container flex flex-col items-center"> {/* Centrar la línea de tiempo */}
        <h2 className="text-3xl font-bold mb-8 text-center">Línea de Tiempo Interactiva</h2>
        
        <div className="relative border-l border-gray-300 pl-8"> {/* Línea de tiempo centrada */}
          {hitos.map((hito, index) => (
            <div key={index} className="mb-10 ml-6 text-center"> {/* Centrar los hitos */}
              <span className="absolute w-6 h-6 bg-primary rounded-full -left-3"></span>
              <h3 className="text-xl font-semibold">{hito.year}</h3>
              <button 
                className="text-lg text-muted-foreground hover:text-primary transition-colors mt-2" 
                onClick={() => setSelectedHito(selectedHito === index ? null : index)}
                aria-label={`Ver detalles del hito en ${hito.year}`}
              >
                {hito.title}
              </button>
              {/* Mostrar descripción e imagen al hacer clic */}
              {selectedHito === index && (
                <div className="mt-4">
                  <p className="text-base text-muted-foreground mb-4">{hito.description}</p>
                  <div className="w-full flex justify-center"> {/* Imagen centrada */}
                    <Image 
                      src={hito.image}
                      alt={`Imagen del hito ${hito.year}`}
                      width={400} // Ajusta el tamaño de la imagen según lo prefieras
                      height={300}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
