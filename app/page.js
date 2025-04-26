import Header from "./components/Header";
import Hero from "./components/Hero";
import Cabanas from "./components/Cabanas";
import Experiencias from "./components/Experiencias";
import Resenas from "./components/Resenas";
import Ubicacion from "./components/Ubicacion";
import Sustentabilidad from "./components/Sustentabilidad";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import TourVirtual from "./components/TourVirtual"; // Importar el nuevo componente
import LineaDeTiempo from "./components/LineaDeTiempo"; // Importamos el nuevo componente
import Galeria from "./components/Galeria";
import Amenidades from "./components/Amenidades";
import BookingEngine from "./components/BookingEngine"; // Importar el motor de reservas


export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Hero />
        <BookingEngine /> {/* << Motor de reservas aquí */}
        {/* <LineaDeTiempo />  */}
        <Amenidades />
        {/* <Cabanas /> */}
        {/* <TourVirtual />  */}
        {/* <Experiencias /> */}
        <Galeria />
        <Resenas />
        <Ubicacion />
        <Sustentabilidad />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
