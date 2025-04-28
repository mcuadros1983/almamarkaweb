"use client";

import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";


// ✅ Modo correcto ahora (reemplaza el <Head>):
export const metadata = {
  title: "Condiciones de Reserva | Informate de nuestras condiciones de reserva",
  description:
    "Informate de nuestras condiciones de reserva.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function CondicionesReserva() {
  return (
    <section id="condiciones" className="py-16 bg-muted">
    <div className="container">
      <h2 className="text-3xl font-bold mb-8 text-center">Condiciones de Reserva</h2>

      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-6 space-y-6 text-base leading-relaxed text-gray-700">

          {/* Check-in y Check-out */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">1. Check-in y Check-out</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Check-in: A partir de las 15:00 – 00:00 hs.</li>
              <li>Check-out: Hasta las 11:00 hs.</li>
              <li>Fuera de horario, consultar disponibilidad.</li>
            </ul>
          </div>

          {/* Reservas y Pagos */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">2. Reservas y Pagos</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Se requiere un depósito del 50% del total para confirmar la reserva.</li>
              <li>Métodos de pago de la seña: Transferencia bancaria.</li>
              <li>Métodos de pago aceptados al ingreso: tarjetas de crédito/débito (Visa/Mastercard) o plataformas digitales (Mercado Pago, etc.).</li>
              <li>El saldo restante se abona al momento del check-in (efectivo, débito o tarjeta).</li>
            </ul>
          </div>

          {/* Cancelaciones */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">3. Cancelaciones</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Cancelación con más de 72 horas de anticipación: Se retiene el equivalente a una (1) noche de alojamiento.</li>
              <li>Cancelación con menos de 72 horas o no-show: Pérdida total del depósito.</li>
              <li>En temporada alta (fines de semana largos, vacaciones de invierno/verano), se requiere aviso con 14 días de anticipación para reembolso.</li>
              <li>Force Majeure (ej.: desastres naturales, cancelación de vuelos): Se reprograma la estadía sin costos adicionales y sujeto a disponibilidad.</li>
            </ul>
          </div>

          {/* Ocupación Máxima */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">4. Ocupación Máxima</h3>
            <p>Cada cabaña tiene una capacidad máxima según su tamaño: 2-4 o 2-6 pasajeros. Excederla implica multa o cancelación de la reserva sin reembolso.</p>
          </div>

          {/* Mascotas */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">5. Mascotas</h3>
            <p>El dueño debe respetar el reglamento para mascotas.</p>
          </div>

          {/* Normas de Uso */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">6. Normas de Convivencia</h3>
            <p>Se aceptan las normas de uso y convivencia del complejo.</p>
          </div>

          {/* Notas adicionales */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Notas Adicionales</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Precios sujetos a cambios sin previo aviso hasta confirmación de la reserva.</li>
              <li>En caso de cortes de servicios públicos (luz/agua), el complejo no se responsabiliza, pero brindará soluciones alternativas.</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Contacto</h3>
            <p>WhatsApp: +54 9 3834-902999</p>
            <p>Dirección: Av Ricardo Balbin – Banda de Varela - Catamarca</p>
          </div>

          {/* Aceptación de Términos */}
          <div className="border-t pt-4">
            <p className="text-center font-medium">
              Al realizar la reserva, el huésped acepta las condiciones mencionadas.
            </p>
          </div>

          {/* Botón de Reservar */}
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
    </div>
  </section>    
  );
}
