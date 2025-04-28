import { Card, CardContent } from "./ui/card";
import { Leaf, Recycle } from 'lucide-react';

export const metadata = {
  title: "Sustentabilidad | Compromiso Ecológico en ALMAMARKA",
  description:
    "En ALMAMARKA apostamos al turismo responsable: construcción natural en adobe, energías renovables y prácticas que cuidan nuestro entorno.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};
export default function Sustentabilidad() {
  return (
      <section id="sustentabilidad" className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Sustentabilidad y Construcción</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Leaf className="mr-2" />
                  Proceso de Construcción Natural
                </h3>
                <p className="text-muted-foreground mb-4">
                  Nuestras cabañas están construidas con adobe, un material natural y sostenible que se integra
                  perfectamente con el entorno. Este método de construcción tradicional nos permite crear
                  estructuras duraderas y energéticamente eficientes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Recycle className="mr-2" />
                  Compromiso con la Naturaleza
                </h3>
                <p className="text-muted-foreground mb-4">
                  Implementamos prácticas ecológicas y de turismo responsable para minimizar nuestro impacto
                  en el medio ambiente. Esto incluye el uso de energías renovables, gestión responsable del agua
                  y programas de reciclaje y compostaje.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  );
}
