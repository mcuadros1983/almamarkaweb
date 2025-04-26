"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { Phone, Mail, MessageSquare } from "lucide-react";
import Head from "next/head";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    // fecha: "",
    mensaje: ""
  });
  const [status, setStatus] = useState(null); // Nuevo: mensaje de éxito o error
  const [loading, setLoading] = useState(false); // Nuevo: indicador de carga

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus({ success: true, message: "¡Tu consulta fue enviada correctamente! Nos pondremos en contacto a la brevedad." });
        setFormData({ nombre: "", email: "", mensaje: "" }); // Limpia el formulario
      } else {
        setStatus({ success: false, message: "Ocurrió un error al enviar tu consulta. Por favor, intenta nuevamente." });
      }
    } catch (error) {
      setStatus({ success: false, message: "Error inesperado. Intenta más tarde." });
    }

    setLoading(false);
  };

  return (
    <> <Head>
      <title>Contacto | Reservá tu estadía en ALMAMARKA</title>
      <meta
        name="description"
        content="Contactanos para consultas, reservas o más información. Estamos para ayudarte a planificar tu experiencia en nuestro refugio natural."
      />
    </Head><section id="contacto" className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Contacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4" onSubmit={handleSubmit} aria-label="Formulario de contacto">
                  <Input
                    name="nombre"
                    placeholder="Nombre"
                    aria-label="Nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Correo electrónico"
                    aria-label="Correo electrónico"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {/* <Input 
                name="fecha"
                type="date"
                placeholder="Fecha de estancia deseada"
                aria-label="Fecha de estancia deseada"
                required
                value={formData.fecha}
                onChange={handleChange}
              /> */}
                  <Textarea
                    name="mensaje"
                    placeholder="Mensaje"
                    aria-label="Mensaje"
                    required
                    value={formData.mensaje}
                    onChange={handleChange}
                  />

                  {/* Mensaje de respuesta bonito */}
                  {status && (
                    <div className={`p-3 rounded-md text-sm ${status.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {status.message}
                    </div>
                  )}

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Enviando..." : "Enviar Consulta"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* El card de información sigue igual */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Phone className="mr-2" />
                    <span>Teléfono: +54 383 4902999</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="mr-2" />
                    <span>Email: almamarkacabanas@gmail.com</span>
                  </li>
                  <li className="flex items-center">
                    <MessageSquare className="mr-2" />
                    <span>WhatsApp: +54 383 4902999</span>
                  </li>
                </ul>
                <h4 className="font-semibold mt-6 mb-2">Horario de Atención</h4>
                <p>Lunes a Domingo: 9:00 AM - 8:00 PM</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section></>

  );
}
