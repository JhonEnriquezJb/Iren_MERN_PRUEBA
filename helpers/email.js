import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos;

  
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Informacion del email

  const info = await transport.sendMail({
    from: '"AdminProject - Administrador de Proyectos" <cuenta@uptask.com>',
    to: email,
    subject: "AdminProject - Comprueba tu cuenta",
    text: "Comprueba tu cuenta en el Administrador de Proyectos",
    html: `<p> Hola: ${nombre} Comprueba tu cuenta en AdminProject</p>Tu cuenta ya esta 
    casi lista, solo debes comprobarla en el siguiente enlace:

    <a href="${process.env.FRONTEND_URL}/confirmar/${token}" >Comprobar Cuenta</a>

    <p> Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>

    
    `
  })

};

export const emailOlvidePassword = async (datos) => {
  const { email, nombre, token } = datos;

  
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Informacion del email

  const info = await transport.sendMail({
    from: '"AdminProject - Administrador de Proyectos" <cuenta@uptask.com>',
    to: email,
    subject: "AdminProject - Reestablece tu Password",
    text: "Restablece tu password",
    html: `<p> Hola: ${nombre} Has solicitado reestablecer tu password</p> Sigue
    el siguiente enlace para generar un nuevo password:

    <a href="${process.env.FRONTEND_URL}/olvide-password/${token}" >Reestablecer Password</a>

    <p> Si tu no solicitaste este email, puedes ignorar el mensaje</p>

    
    `
  })

};

