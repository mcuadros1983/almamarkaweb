import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Star } from 'lucide-react';


export const metadata = {
  title: "Reseñas | Opiniones Reales sobre ALMAMARKA",
  description:
    "Leé las opiniones de nuestros huéspedes y descubrí por qué ALMAMARKA es sinónimo de tranquilidad, confort y conexión con la naturaleza.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

const resenas = [
  {
    id: 1,
    nombre: 'María L.',
    comentario: 'Una experiencia inolvidable. Las cabañas son hermosas y el entorno natural es impresionante.',
    puntuacion: 5
  },
  {
    id: 2,
    nombre: 'Juan P.',
    comentario: 'Perfecto para desconectar. El servicio fue excelente y las actividades muy entretenidas.',
    puntuacion: 5
  },
  {
    id: 3,
    nombre: 'Ana G.',
    comentario: 'Nos encantó la cabaña y la tranquilidad del lugar. Definitivamente volveremos.',
    puntuacion: 4
  }
];

export default function Resenas() {
  return (
      <section id="resenas" className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Lo que dicen nuestros huéspedes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resenas.map((resena) => (
              <Card key={resena.id}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4" aria-label={`Puntuación: ${resena.puntuacion} estrellas`}>
                    {[...Array(resena.puntuacion)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{resena.comentario}"</p>
                  <p className="font-semibold">- {resena.nombre}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* <div className="text-center mt-8">
        <Button variant="outline">Comparte tu Experiencia</Button>
      </div> */}
        </div>
      </section>
  );
}
