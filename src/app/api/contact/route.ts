import { NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    try {
      await sendContactEmail({ name, email, phone, subject, message });
    } catch (emailErr) {
      console.error('Email send error:', emailErr);
      return NextResponse.json(
        { error: 'Failed to send your message. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Thank you! Your message has been received.' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Request error:', error);
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}
