"use client";  // Asegúrate de que el componente es Client Component

import Image from "next/image";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules"; // Importar EffectFade
import "swiper/css"; // Importar estilos base de swiper
import "swiper/css/navigation"; // Opcional: para botones de navegación
import "swiper/css/pagination"; // Opcional: para paginación
import "swiper/css/autoplay"; // Opcional: para autoplay
import "swiper/css/effect-fade"; // Importar estilos para el efecto fade

export default function Hero() {
  const slides = [
    {
      // src: "/hero-image.webp",
      src: "/hero-image.jpg",
      alt: "Cabañas rusticas interior",
      logo: "/logo_white.png", // Nueva imagen que se mostrará arriba del título
      title: "ALMAMARKA",
      title2: "Refugio de Adobe",
      subtitle: "Vive la calma del adobe en plena naturaleza",
      description: "Descubre la serenidad en nuestras cabañas rústicas de San Fernando del Valle de Catamarca",
    },
    {
      src: "/hero-image2.jpg",
      // src: "/hero-image2.webp",
      alt: "Cabañas rusticas interior2",
      logo: "/logo_white.png", // Nueva imagen que se mostrará arriba del título
      title: "ALMAMARKA",
      title2: "Refugio de Adobe",
      subtitle: "Un refugio en plena naturaleza",
      description: "Disfruta de la paz en nuestras cabañas rodeadas de montañas y paisajes naturales.",
    },
    {
      src: "/hero-image3.jpg",
      // src: "/hero-image2.webp",
      alt: "Cabañas rusticas exterior",
      logo: "/logo_white.png", // Nueva imagen que se mostrará arriba del título
      title: "ALMAMARKA",
      title2: "Refugio de Adobe",
      subtitle: "Un refugio en plena naturaleza",
      description: "Disfruta de la paz en nuestras cabañas rodeadas de montañas y paisajes naturales.",
    },
  ];

  return (
    <section className="relative h-[calc(100vh-3.5rem)]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]} // Habilitar EffectFade
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        effect="fade" // Activar el efecto fade
        fadeEffect={{ crossFade: true }} // Opción para un desvanecimiento más suave
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full flex items-center justify-center">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                style={{ objectFit: "cover" }}
                className="w-full h-full"
                priority={index === 0}
              />
              {/* Overlay para mejorar la legibilidad del texto */}
              <div className="absolute inset-0 bg-black bg-opacity-40 z-1"></div>

              <div className="relative z-10 text-center text-white">
                {/* Nueva imagen logo arriba del título centrado */}
                <div className="flex justify-center mb-4">
                  <Image
                    src={slide.logo}
                    alt="ALMAMARKA Logo"
                    width={200} // Ajusta el tamaño según lo que prefieras
                    height={200}
                  />
                </div>
                {/* Texto del slide */}
                {/* <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
                <h4 className="text-2xl font-bold mb-4">{slide.title2}</h4>
                <p className="text-lg mb-2">{slide.subtitle}</p>
                <p className="text-xl mb-6">{slide.description}</p> */}
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                <h4 className="text-2xl md:text-4xl font-bold mb-4">{slide.title2}</h4>
                <p className="text-lg md:text-xl mb-2">{slide.subtitle}</p>
                <p className="text-lg md:text-xl mb-2">{slide.description}</p>
                {/* <Button size="lg" asChild>
                  <a href="#reservar" aria-label="Reservar Ahora">
                    Reservar Ahora
                  </a>
                </Button> */}
                <Button size="lg" asChild>
                  <a
                    href="https://frame2.hotelpms.io/BookingFrameClient/hotel/22188458010DB1BA7B3735DEFABB1AB3/78cee572-7606-4029-bc3b-e056427711e7/book/rooms?currency=ARS&language=en-US&rp="
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Reservar Ahora"
                  >
                    Reservar Ahora
                  </a>
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}


