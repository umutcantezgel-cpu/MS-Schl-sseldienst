import { NextResponse } from 'next/server';

/**
 * Consent Audit Trail Endpoint.
 * Logs consent proof to Vercel Function Logs (always available).
 * Optionally stores to Vercel KV if configured (dynamic import).
 */
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
    /* 
    if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
      try {
        // Requires @vercel/kv to be installed
        // const { kv } = await import('@vercel/kv');
        // await kv.set(`consent:${data.consent_receipt_id}`, auditRecord);
        // await kv.lpush('recent_consents', data.consent_receipt_id);
        // await kv.ltrim('recent_consents', 0, 999);
      } catch (kvError) {
        console.warn('Vercel KV not configured or failed, relying on stdout logging', kvError);
      }
    }
    */

    return NextResponse.json({ success: true, receiptId: data.consent_receipt_id }, { status: 200 });

  } catch (error) {
    console.error('Consent audit error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
