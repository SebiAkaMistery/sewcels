import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, company, interest, message } = req.body;

  if (!name || !email || !company || !interest || !message) {
    return res.status(400).json({ message: 'Toate câmpurile sunt obligatorii.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'mail.your-server.de',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"SEWCELS Contact" <${process.env.SMTP_USER}>`,
      to: 'contact@sewcels.ro',
      subject: `Cerere nouă de la ${name} (${company})`,
      html: `
        <h2>Formular Contact</h2>
        <p><strong>Nume:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Companie:</strong> ${company}</p>
        <p><strong>Interes:</strong> ${interest}</p>
        <p><strong>Mesaj:</strong><br />${message}</p>
      `,
    });

    res.status(200).json({ message: 'Mesajul a fost trimis cu succes!' });
  } catch (error) {
    console.error('Eroare la trimiterea emailului:', error);
    res.status(500).json({ message: 'A apărut o eroare la trimiterea mesajului. Încercați din nou.' });
  }
}