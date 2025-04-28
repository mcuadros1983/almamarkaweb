"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "./ui/button";

export default function Header() {
  // Simulando el control del dueño de la página
  const showPromotionalHeader = true; // El dueño de la página puede cambiar este valor para habilitar o deshabilitar el header promocional

  const [isPromoVisible, setPromoVisible] = useState(showPromotionalHeader);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Header Promocional */}
      {/* {isPromoVisible && (
        <div className="bg-yellow-400 text-black py-2 px-4 flex justify-center items-center relative">
          <span className="text-sm font-bold">¡Aprovecha nuestras promociones especiales por tiempo limitado!</span>
          <button
            onClick={() => setPromoVisible(false)}
            aria-label="Cerrar promoción"
            className="absolute right-4 font-bold"
          >
            ✖
          </button>
        </div>
      )} */}

      {/* Header Principal */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2" aria-label="Página de inicio">
            <Image src="/logo3.png" alt="Cabañas Rústicas Logo" width={60} height={60} />
            <h1 className="font-bold text-3xl">ALMAMARKA</h1>
            {/* <span className="font-bold text-3xl">ALMAMARKA</span> */}
          </Link>

          {/* Botón de menú hamburguesa para móviles */}
          <button
            className="block md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {/* Icono de hamburguesa */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>

          {/* Menú de Navegación - Visible solo en pantallas grandes */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 mx-6">
            <Link href="/" aria-label="Inicio" className="font-semibold tracking-wide text-[15px] uppercase text-[#6B4226] transition-colors hover:text-primary hover:underline hover:underline-offset-4"
            >
              Inicio
            </Link>
            <Link href="#cabanas" aria-label="Nuestras Cabañas" className="font-semibold tracking-wide text-[15px] uppercase text-[#6B4226] transition-colors hover:text-primary hover:underline hover:underline-offset-4">
              NUESTRAS CABAÑAS
            </Link>
            <Link href="#galeria" aria-label="Galeria" className="font-semibold tracking-wide text-[15px] uppercase text-[#6B4226] transition-colors hover:text-primary hover:underline hover:underline-offset-4">
              GALERIA DE FOTOS
            </Link>
            {/* <Link href="#experiencias" aria-label="Experiencias" className="text-lg font-medium transition-colors hover:text-primary">
              Experiencias
            </Link> */}
            <Link href="#ubicacion" aria-label="Ubicación" className="font-semibold tracking-wide text-[15px] uppercase text-[#6B4226] transition-colors hover:text-primary hover:underline hover:underline-offset-4">
              UBICACION
            </Link>
            <Link href="#resenas" aria-label="Reseñas" className="font-semibold tracking-wide text-[15px] uppercase text-[#6B4226] transition-colors hover:text-primary hover:underline hover:underline-offset-4">
              RESEÑAS
            </Link>
            <Link href="#contacto" aria-label="Contacto" className="font-semibold tracking-wide text-[15px] uppercase text-[#6B4226] transition-colors hover:text-primary hover:underline hover:underline-offset-4">
              CONTACTO
            </Link>
          </nav>

          {/* Botón para reservar */}
          <div className="ml-auto hidden md:block">
            {/* <Button asChild>
              <Link href="#reservar" aria-label="Reservar Ahora">Reservar Ahora</Link>
            </Button> */}
            <Button asChild>
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

        {/* Menú de navegación desplegable en móviles */}
        {menuOpen && (
          <nav className="md:hidden bg-background w-full flex flex-col space-y-2 mt-2 p-4">
            <Link href="/" aria-label="Inicio" className="text-lg font-medium transition-colors hover:text-primary">
              Inicio
            </Link>
            <Link href="#cabanas" aria-label="Nuestras Cabañas" className="text-lg font-medium transition-colors hover:text-primary">
              Nuestras Cabañas
            </Link>
            <Link href="#experiencias" aria-label="Experiencias" className="text-lg font-medium transition-colors hover:text-primary">
              Experiencias
            </Link>
            <Link href="#ubicacion" aria-label="Ubicación" className="text-lg font-medium transition-colors hover:text-primary">
              Ubicación
            </Link>
            <Link href="#resenas" aria-label="Reseñas" className="text-lg font-medium transition-colors hover:text-primary">
              Reseñas
            </Link>
            <Link href="#contacto" aria-label="Contacto" className="text-lg font-medium transition-colors hover:text-primary">
              Contacto
            </Link>
            <Button asChild>
              <Link href="#reservar" aria-label="Reservar Ahora">Reservar Ahora</Link>
            </Button>
          </nav>
        )}
      </header>
    </>
  );
}
