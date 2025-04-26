"use client"
import Link from 'next/link';
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted py-8">
      <div className="container">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="https://instagram.com" aria-label="Síguenos en Instagram">
              <Instagram className="text-muted-foreground hover:text-primary" />
            </Link>
            <Link href="https://facebook.com" aria-label="Síguenos en Facebook">
              <Facebook className="text-muted-foreground hover:text-primary" />
            </Link>
            <Link href="https://youtube.com" aria-label="Visita nuestro canal de YouTube">
              <Youtube className="text-muted-foreground hover:text-primary" />
            </Link>
          </div>
          <div className="text-sm text-muted-foreground">
            <Link href="/condiciones-reserva" className="hover:underline">
              Condiciones de Reserva
            </Link>
            {/* <Link href="/politicas-cancelacion" className="hover:underline">
              Políticas de Cancelación
            </Link> */}
            {/* {' | '}
            <Link href="/terminos-uso" className="hover:underline">
              Términos de Uso
            </Link> */}
          </div>
          {/* <div className="w-full md:w-auto mt-4 md:mt-0">
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="Suscríbete al newsletter" 
                className="rounded-r-none"
                aria-label="Correo electrónico para suscripción"
              />
              <Button type="submit" className="rounded-l-none">
                Suscribirse
              </Button>
            </form>
          </div> */}
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} ALMAMARKA - Refugio de adobe. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
