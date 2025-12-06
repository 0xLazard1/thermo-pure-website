import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validation basique
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs requis doivent être remplis' },
        { status: 400 }
      );
    }

    // Envoi de l'email
    const { data, error } = await resend.emails.send({
      from: 'Thermo Pure Contact <onboarding@resend.dev>', // Adresse par défaut de Resend (à changer avec votre domaine vérifié)
      to: ['contact@thermopure.fr'],
      replyTo: email,
      subject: `[Site Web] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0369a1; border-bottom: 2px solid #0369a1; padding-bottom: 10px;">
            Nouveau message depuis le site Thermo Pure
          </h2>

          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Informations du contact :</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; background-color: #f0f9ff; font-weight: bold; width: 120px;">Nom :</td>
                <td style="padding: 8px; background-color: #f0f9ff;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold;">Email :</td>
                <td style="padding: 8px;">${email}</td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 8px; background-color: #f0f9ff; font-weight: bold;">Téléphone :</td>
                <td style="padding: 8px; background-color: #f0f9ff;">${phone}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px; font-weight: bold;">Sujet :</td>
                <td style="padding: 8px;">${subject}</td>
              </tr>
            </table>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Message :</h3>
            <div style="background-color: #f9fafb; padding: 15px; border-left: 4px solid #0369a1; border-radius: 4px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>Ce message a été envoyé depuis le formulaire de contact du site Thermo Pure.</p>
            <p>Vous pouvez répondre directement à cet email pour contacter ${name}.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Erreur Resend:', error);
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Email envoyé avec succès' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur serveur:', error);
    return NextResponse.json(
      { error: 'Erreur serveur lors de l\'envoi' },
      { status: 500 }
    );
  }
}
