import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Método não permitido');
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'Dados incompletos.' });
  }

  const mailData = {
    from: process.env.EMAIL_USER, 
    to: 'joaogilberto238@gmail.com', 
    subject: `[Formulário de Contato] - ${subject}`,
    html: `
      <h2>Nova Mensagem de Contato</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Assunto:</strong> ${subject}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailData);
    res.status(200).json({ success: true, message: 'Mensagem enviada!' });
  } catch (error) {
    console.error('Erro no Nodemailer:', error);
    res.status(500).json({ success: false, message: 'Erro no envio.' });
  }
}
