"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { CheckCircle, BedDouble, Utensils, Coffee, Car, Smile, CookingPot, ThermometerSnowflake, PartyPopper, Waves, Wifi } from "lucide-react";

const cabanas = [
  { id: 1, name: 'Carqueja', capacity: 4, image: '/cabanas/carqueja.jpg' },
  { id: 2, name: 'Malva', capacity: 4, image: '/cabanas/malva.jpg' },
  { id: 3, name: 'Jarilla', capacity: 4, image: '/cabanas/jarilla.jpg' },
  { id: 4, name: 'Tusca', capacity: 4, image: '/cabanas/tusca.jpg' },
  { id: 5, name: 'Retama', capacity: 4, image: '/cabanas/retama.jpg' },
  { id: 6, name: 'Pichanilla', capacity: 4, image: '/cabanas/pichanilla.jpg' },
  { id: 7, name: 'Acacia', capacity: 6, image: '/cabanas/acacia.jpg' },
  { id: 8, name: 'Tala', capacity: 6, image: '/cabanas/tala.jpg' },
];

const serviciosComunes = [
  { name: "Servicio de limpieza (cada 48hs)", icon: CheckCircle },
  { name: "Desayuno (café, mate cocido, té, leche, jugo, pan casero)", icon: Coffee },
  { name: "Agua caliente", icon: Utensils },
  { name: "Aire acondicionado", icon: ThermometerSnowflake },
  { name: "Juegos infantiles", icon: Smile },
  { name: "Cochera", icon: Car },
  { name: "Quincho para eventos", icon: PartyPopper },
  { name: "Asador por cabaña", icon: CookingPot },
  { name: "Bajada al río", icon: Waves },
  { name: "Wi-Fi", icon: Wifi },
  { name: "Cocina equipada", icon: Utensils },
  { name: "Calefacción", icon: ThermometerSnowflake },
];

export default function Amenidades() {
  return (
    // <section id="amenidades" className="py-16">
    <section id="cabanas" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Nuestras Cabañas & Servicios</h2>
        
        {/* Tarjetas de Cabañas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {cabanas.map((cabana) => (
            <Card key={cabana.id} className="overflow-hidden">
              <Image
                src={cabana.image}
                alt={`Cabaña ${cabana.name}`}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4 text-center">
                <h3 className="text-xl font-semibold">{cabana.name}</h3>
                <p className="text-muted-foreground mt-2">
                  Capacidad: {cabana.capacity} personas
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Servicios Comunes */}
        <div className="bg-muted rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Servicios incluidos en todas las cabañas</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviciosComunes.map((servicio, index) => (
              <li key={index} className="flex items-center text-lg">
                <servicio.icon className="w-6 h-6 mr-3 text-primary" />
                {servicio.name}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
