import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Validate payload
    if (!data.consent_receipt_id || !data.consent) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Prepare audit record
    const auditRecord = {
      receiptId: data.consent_receipt_id,
      consent: data.consent,
      timestamp: data.timestamp || new Date().toISOString(),
      version: data.version,
      url: data.url,
      // Minimal user-agent info for proving consent context, but NO IP address (DSGVO compliant)
      userAgent: data.userAgent?.substring(0, 200) || 'Unknown',
    };

    // Edge-Logging for Vercel Function Logs (Free Tier Audit Trail)
    console.info('[CONSENT_AUDIT_TRAIL]', JSON.stringify(auditRecord));

    // Try Vercel KV if available
    try {
      if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
        // Store the consent with receipt ID as key
        await kv.set(`consent:${data.consent_receipt_id}`, auditRecord);
        // Add to a global list of recently updated consents
        await kv.lpush('recent_consents', data.consent_receipt_id);
        // Keep list bounded to last 1000
        await kv.ltrim('recent_consents', 0, 999);
      }
    } catch (kvError) {
      console.warn('Vercel KV not configured or failed, relying on stdout logging', kvError);
    }

    return NextResponse.json({ success: true, receiptId: data.consent_receipt_id }, { status: 200 });

  } catch (error) {
    console.error('Consent audit error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
