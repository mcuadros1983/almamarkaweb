import { Card, CardContent } from "./ui/card";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "Ubicación | Cómo Llegar a ALMAMARKA Refugio de Adobe",
  description:
    "Encontranos en un entorno privilegiado en Banda de Varela, San Fernando del Valle de Catamarca. Acceso fácil en auto a solo 8 km del centro.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function Ubicacion() {
  return (
      <section id="ubicacion" className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Ubicación</h2>

          {/* Mapa de Google embebido */}
          <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1039.572214102384!2d-65.72984109787225!3d-28.426082566036946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDI1JzMyLjgiUyA2NcKwNDMnNDQuNiJX!5e1!3m2!1ses-419!2sar!4v1745419927200!5m2!1ses-419!2sar"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación en Google Maps"
            ></iframe>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Cómo llegar</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="mr-2" />
                    <span>En auto: Desde el centro de San Fernando del Valle de Catamarca, seguí hacia el sur por Sarmiento, doblá en Avenida Alem, luego en Avenida Acosta Villafañe/RP33, seguí derecho por Avenida Presidente Castillo, continuá por Avenida Coronel Felipe Varela/RP1 y Avenida Ricardo Balbín/RP106. Avanzá 2,2 km hasta el predio de SUTIAGA e ingresá por el callejón interno hasta llegar a las cabañas</span>
                  </li>
                  {/* <li className="flex items-center">
                <ChevronRight className="mr-2" />
                <span>Transporte público: Tomar el bus X desde la terminal Y...</span>
              </li> */}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Distancias</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="mr-2" />
                    <span>Centro de San Fernando del Valle de Catamarca: 8 km</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="mr-2" />
                    <span>Aeropuerto más cercano: 21 km</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> 
  );
}
