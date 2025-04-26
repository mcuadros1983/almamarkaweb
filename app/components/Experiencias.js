import Image from 'next/image';
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const experiencias = [
  {
    id: 1,
    title: 'Caminatas guiadas',
    description: 'Explora los senderos naturales con nuestros guías expertos y descubre la flora y fauna local.',
    image: '/caminata-guiada.webp'
  },
  {
    id: 2,
    title: 'Yoga en la naturaleza',
    description: 'Conecta cuerpo y mente con sesiones de yoga al aire libre, rodeado de paisajes impresionantes.',
    image: '/yoga-naturaleza.webp'
  },
  {
    id: 3,
    title: 'Visitas turísticas',
    description: 'Conoce los sitios históricos y culturales de San Fernando del Valle de Catamarca con nuestros tours.',
    image: '/visita-turistica.jpg'
  }
];

export default function Experiencias() {
  return (
    <section id="experiencias" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Experiencias Únicas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiencias.map((experiencia) => (
            <Card key={experiencia.id}>
              <Image
                src={experiencia.image}
                alt={`Imagen de la experiencia: ${experiencia.title}`}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{experiencia.title}</h3>
                <p className="text-muted-foreground mb-4">{experiencia.description}</p>
                <Button variant="outline">Reservar Experiencia</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
