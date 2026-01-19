import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// 1. Initialisation de Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// 2. Schéma de validation (Sécurité)
const contactSchema = z.object({
  name: z.string().min(2, "Le nom est trop court"),
  email: z.string().email("Email invalide"),
  message: z.string().min(10, "Le message doit faire au moins 10 caractères"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validation des données reçues
    const { name, email, message } = contactSchema.parse(body);

    // 3. Envoi de l'email
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Domaine par défaut 
      to: ['nemendmd@gmail.com'], 
      subject: `Nouveau message de ${name} via le portfolio`,
      replyTo: email,
      text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true, data });

  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Erreur lors de l\'envoi' },
      { status: 500 }
    );
  }
}
