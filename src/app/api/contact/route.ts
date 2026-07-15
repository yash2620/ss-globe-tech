import { NextResponse } from 'next/server';
import { getSupabaseClient } from '@/lib/supabase';

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

    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([{ name, email, phone, subject, message }])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to save your message. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Thank you! Your message has been received.', data },
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
