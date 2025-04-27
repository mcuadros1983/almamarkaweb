import CondicionesReserva from "../components/CondicionesReserva";

// export default function CondicionesReservaPage() {
//   return (
//     <main className="py-16">
//       <div className="container">
//         <CondicionesReserva />
//       </div>
      
//     </main>
//   );
// }
export default function CondicionesReservaPage() {
  try {
    return (
      <main className="py-16">
        <div className="container">
          <CondicionesReserva />
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error en CondicionesReservaPage:", error);
    return <div>Ocurrió un error al cargar la página.</div>;
  }
}