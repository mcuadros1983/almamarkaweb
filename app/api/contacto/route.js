// app/api/contacto/route.js
import nodemailer from "nodemailer";

export async function POST(request) {
  const { nombre, email, mensaje } = await request.json();

  // CONFIGURA TU SMTP AQUI
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // ejemplo: almamarkacabanas@gmail.com
      pass: process.env.EMAIL_PASS, // una contraseña de aplicación, no tu contraseña de Gmail común
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER, // Te lo mandas a vos
      subject: `Nueva consulta de ${nombre}`,
      html: `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br/>${mensaje}</p>
      `,
    });

    return new Response("Email enviado correctamente", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Error al enviar el email", { status: 500 });
  }
}
