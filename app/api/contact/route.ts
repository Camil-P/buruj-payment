import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validacija na serveru
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Nedostaju podaci' }, { status: 400 });
    }

    // 1. Konfigurišite transporter (Ovo je primer za Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Npr. tvoj.email@gmail.com
        pass: process.env.EMAIL_PASS, // "App Password" koji generišete na Google nalogu
      },
    });

    // 2. Definišite podatke za slanje
    const mailOptions = {
      from: process.env.EMAIL_USER, // Od koga se tehnički šalje
      to: process.env.EMAIL_USER, // Tvoj email na koji želiš da stižu poruke
      replyTo: email, // Opciono: Kada klikneš "Reply" u mail klijentu, odgovaraće onome ko je popunio formu
      subject: `[Kontakt Forma] ${subject}`,
      html: `
        <h3>Nova poruka sa sajta</h3>
        <p><strong>Ime:</strong> ${name}</p>
        <p><strong>Email pošiljaoca:</strong> ${email}</p>
        <p><strong>Poruka:</strong></p>
        <p>${message}</p>
      `,
    };

    // 3. Pošalji email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email je uspešno poslat' }, { status: 200 });

  } catch (error) {
    console.error('Greška pri slanju email-a:', error);
    return NextResponse.json({ error: 'Došlo je do greške pri slanju' }, { status: 500 });
  }
}