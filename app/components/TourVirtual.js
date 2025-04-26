"use client";

export default function TourVirtual() {
  return (
    <section id="tour-virtual" className="mt-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center">Tour Virtual 360°</h2>
        <p className="text-lg mb-8 text-center text-muted-foreground">
          Explora nuestras cabañas y el entorno natural de una manera inmersiva.
        </p>
        <div className="flex justify-center">
          {/* Aquí va el iframe del tour virtual 360° */}
          <iframe
            src="https://my.matterport.com/show/?m=1nk9SszkC59" // Reemplaza esto con la URL de tu tour virtual
            width="100%"
            height="500"
            frameBorder="0"
            allowFullScreen
            aria-label="Tour virtual 360 de las cabañas"
            className="w-full md:w-4/5 lg:w-3/5"
          ></iframe>
        </div>
      </div>
    </section>
  );
}