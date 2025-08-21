import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  // Basic validation
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  // Here, you could send email via an external API or store the lead in a DB.
  // For now, just return success (extend as needed)

  return NextResponse.json({ ok: true });
}
