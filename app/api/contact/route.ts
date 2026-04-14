import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_Pu7i28me_5wAwXFuEgsHRxLACanMRv78N');

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const data = await resend.emails.send({
      from: 'onboarding@healyourhome.ie',
      to: ['bertiewalsh6@gmail.com'],
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      reply_to: email,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
