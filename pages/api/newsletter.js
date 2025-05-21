import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email } = req.body;

  if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    return res.status(400).json({ message: 'Email invalid' });
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
      to: 'office@sewcels.ro',
      subject: 'Abonare nouă la newsletter',
      text: `O nouă adresă de email s-a abonat: ${email}`,
      html: `<p>O nouă adresă de email s-a abonat la newsletter:</p><p><strong>${email}</strong></p>`,
    });

    return res.status(200).json({ message: 'Newsletter trimis cu succes' });
  } catch (error) {
    console.error('Newsletter error:', error);
    return res.status(500).json({ message: 'Eroare trimitere email' });
  }
}