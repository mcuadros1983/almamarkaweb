// "use client"
// import Link from 'next/link';
// import { Input } from "./ui/input";
// import { Button } from "./ui/button";
// import { Instagram, Facebook, Youtube } from 'lucide-react';

// export default function Footer() {
//   return (
//     <footer className="bg-muted py-8">
//       <div className="container">
//         <div className="flex flex-wrap justify-between items-center">
//           <div className="flex space-x-4 mb-4 md:mb-0">
//             <Link href="https://instagram.com" aria-label="Síguenos en Instagram">
//               <Instagram className="text-muted-foreground hover:text-primary" />
//             </Link>
//             <Link href="https://facebook.com" aria-label="Síguenos en Facebook">
//               <Facebook className="text-muted-foreground hover:text-primary" />
//             </Link>
//             <Link href="https://youtube.com" aria-label="Visita nuestro canal de YouTube">
//               <Youtube className="text-muted-foreground hover:text-primary" />
//             </Link>
//           </div>
//           <div className="text-sm text-muted-foreground">
//             <Link href="/condiciones-reserva" className="hover:underline">
//               Condiciones de Reserva
//             </Link>
//             {/* <Link href="/politicas-cancelacion" className="hover:underline">
//               Políticas de Cancelación
//             </Link> */}
//             {/* {' | '}
//             <Link href="/terminos-uso" className="hover:underline">
//               Términos de Uso
//             </Link> */}
//           </div>
//           {/* <div className="w-full md:w-auto mt-4 md:mt-0">
//             <form className="flex" onSubmit={(e) => e.preventDefault()}>
//               <Input 
//                 type="email" 
//                 placeholder="Suscríbete al newsletter" 
//                 className="rounded-r-none"
//                 aria-label="Correo electrónico para suscripción"
//               />
//               <Button type="submit" className="rounded-l-none">
//                 Suscribirse
//               </Button>
//             </form>
//           </div> */}
//         </div>
//         <div className="mt-8 text-center text-sm text-muted-foreground">
//           © {new Date().getFullYear()} ALMAMARKA - Refugio de adobe. Todos los derechos reservados.
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
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
              <button
                onClick={() => setModalOpen(true)}
                className="hover:underline focus:outline-none"
              >
                Condiciones de Reserva
              </button>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} ALMAMARKA - Refugio de adobe. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-auto">
          <div className="bg-white rounded-lg p-8 max-w-4xl w-full mx-4 relative">
            <h2 className="text-2xl font-bold mb-6 text-center">Condiciones de Reserva</h2>

            <Card className="w-full">
              <CardContent className="p-6 space-y-6 text-base leading-relaxed text-gray-700 max-h-[75vh] overflow-y-auto">

                {/* Secciones de condiciones */}
                <div>
                  <h3 className="text-2xl font-semibold mb-2">1. Check-in y Check-out</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Check-in: A partir de las 15:00 – 00:00 hs.</li>
                    <li>Check-out: Hasta las 11:00 hs.</li>
                    <li>Fuera de horario, consultar disponibilidad.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-2">2. Reservas y Pagos</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Se requiere un depósito del 50% del total para confirmar la reserva.</li>
                    <li>Métodos de pago de la seña: Transferencia bancaria.</li>
                    <li>Métodos de pago aceptados al ingreso: tarjetas de crédito/débito (Visa/Mastercard) o plataformas digitales (Mercado Pago, etc.).</li>
                    <li>El saldo restante se abona al momento del check-in (efectivo, débito o tarjeta).</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-2">3. Cancelaciones</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Cancelación con más de 72 horas de anticipación: Se retiene el equivalente a una (1) noche de alojamiento.</li>
                    <li>Cancelación con menos de 72 horas o no-show: Pérdida total del depósito.</li>
                    <li>En temporada alta (fines de semana largos, vacaciones de invierno/verano), se requiere aviso con 14 días de anticipación para reembolso.</li>
                    <li>Force Majeure (ej.: desastres naturales, cancelación de vuelos): Se reprograma la estadía sin costos adicionales y sujeto a disponibilidad.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-2">4. Ocupación Máxima</h3>
                  <p>Cada cabaña tiene una capacidad máxima según su tamaño: 2-4 o 2-6 pasajeros. Excederla implica multa o cancelación de la reserva sin reembolso.</p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-2">5. Mascotas</h3>
                  <p>El dueño debe respetar el reglamento para mascotas.</p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-2">6. Normas de Convivencia</h3>
                  <p>Se aceptan las normas de uso y convivencia del complejo.</p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-2">Notas Adicionales</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Precios sujetos a cambios sin previo aviso hasta confirmación de la reserva.</li>
                    <li>En caso de cortes de servicios públicos (luz/agua), el complejo no se responsabiliza, pero brindará soluciones alternativas.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-2">Contacto</h3>
                  <p>WhatsApp: +54 9 3834-902999</p>
                  <p>Dirección: Av Ricardo Balbin – Banda de Varela - Catamarca</p>
                </div>

                <div className="border-t pt-4">
                  <p className="text-center font-medium">
                    Al realizar la reserva, el huésped acepta las condiciones mencionadas.
                  </p>
                </div>

                <div className="flex justify-center pt-6">
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

              </CardContent>
            </Card>

            {/* Botón para cerrar */}
            <Button onClick={() => setModalOpen(false)} className="w-full mt-6">
              Cerrar
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
