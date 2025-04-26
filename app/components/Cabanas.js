// components/Cabanas.js

import Image from 'next/image';
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { MapPin, Calendar, Wifi, UtensilsCrossed, Thermometer } from 'lucide-react';

const cabanas = [
  {
    id: 1,
    name: 'Cabaña del Bosque',
    description: 'Sumergida en la tranquilidad del bosque, esta cabaña ofrece una experiencia única de conexión con la naturaleza.',
    capacity: 4,
    amenities: ['Wi-Fi', 'Cocina completa', 'Calefacción'],
    image: '/cabana-bosque.webp'
  },
  {
    id: 2,
    name: 'Cabaña del Río',
    description: 'Con vistas al río cristalino, esta cabaña es perfecta para los amantes del agua y la pesca.',
    capacity: 6,
    amenities: ['Wi-Fi', 'Cocina equipada', 'Aire acondicionado'],
    image: '/cabana-rio.webp'
  },
  {
    id: 3,
    name: 'Cabaña de la Montaña',
    description: 'Ubicada en lo alto, ofrece vistas panorámicas impresionantes del valle y las montañas circundantes.',
    capacity: 2,
    amenities: ['Wi-Fi', 'Cocina básica', 'Calefacción'],
    image: '/cabana-montana.webp'
  }
];

export default function Cabanas() {
  return (
    <section id="cabanas" className="py-16 bg-muted">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Nuestras Cabañas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cabanas.map((cabana) => (
            <Card key={cabana.id} className="overflow-hidden">
              <Image 
                src={cabana.image} 
                alt={`Vista de ${cabana.name}`} 
                width={400} 
                height={300} 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">{cabana.name}</h3>
                <p className="text-muted-foreground mb-4">{cabana.description}</p>
                <dl className="mb-4 space-y-2">
                  <dt className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" /> 
                    Capacidad: {cabana.capacity} personas
                  </dt>
                  <dt className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" /> 
                    Amenidades:
                  </dt>
                  <dd className="ml-6 space-y-1">
                    {cabana.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center">
                        {amenity === 'Wi-Fi' && <Wifi className="mr-2 h-4 w-4" />}
                        {amenity.includes('Cocina') && <UtensilsCrossed className="mr-2 h-4 w-4" />}
                        {(amenity === 'Calefacción' || amenity === 'Aire acondicionado') && <Thermometer className="mr-2 h-4 w-4" />}
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </dd>
                </dl>
                <Button variant="outline" className="w-full">Ver Disponibilidad</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
