// import CondicionesReserva from "../components/CondicionesReserva";


// export default function CondicionesReservaPage() {
//   try {
//     return (
//       <main className="py-16">
//         <div className="container">
//           <CondicionesReserva />
//         </div>
//       </main>
//     );
//   } catch (error) {
//     console.error("Error en CondicionesReservaPage:", error);
//     return <div>Ocurrió un error al cargar la página.</div>;
//   }
// }

export default function GraciasPage() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">¡Gracias por tu reserva!</h1>
        <p className="text-lg mb-6 max-w-xl">
          Hemos recibido tu solicitud y en breve nos pondremos en contacto para confirmar todos los detalles.
        </p>
        <a
          href="/"
          className="mt-4 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
        >
          Volver al inicio
        </a>
      </main>
    </>
  );
}