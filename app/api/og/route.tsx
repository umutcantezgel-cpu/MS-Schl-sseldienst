import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);

        // Parameters
        const title = searchParams.get('title') || 'Schlüsseldienst Wetzlar';
        const time = searchParams.get('time') || '15';

        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#1E232A', // Charcoal/Dark background
                        position: 'relative',
                        overflow: 'hidden',
                        fontFamily: 'Inter',
                    }}
                >
                    {/* Background details */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '-50%',
                            right: '-20%',
                            width: '80%',
                            height: '150%',
                            background: 'radial-gradient(circle, rgba(200, 50, 50, 0.4) 0%, rgba(30,35,42,0) 70%)',
                            transform: 'rotate(-15deg)',
                        }}
                    />

                    {/* Logo/Header */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '40px',
                        }}
                    >
                        <svg
                            width="64"
                            height="64"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#EE3B3B" // Signal Red
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                        </svg>
                        <span
                            style={{
                                color: '#FFFFFF',
                                fontSize: 40,
                                fontWeight: 700,
                                marginLeft: '20px',
                                letterSpacing: '-0.02em',
                            }}
                        >
                            Schlüssel Schmiede
                        </span>
                    </div>

                    {/* Main Title */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '900px',
                            textAlign: 'center',
                            gap: '20px',
                        }}
                    >
                        <h1
                            style={{
                                fontSize: 72,
                                color: '#FFFFFF',
                                fontWeight: 900,
                                lineHeight: 1.1,
                                letterSpacing: '-0.04em',
                                margin: 0,
                            }}
                        >
                            {title}
                        </h1>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                background: 'rgba(238, 59, 59, 0.1)',
                                border: '2px solid rgba(238, 59, 59, 0.5)',
                                padding: '16px 32px',
                                borderRadius: '100px',
                                marginTop: '20px',
                            }}
                        >
                            <span
                                style={{
                                    color: '#EE3B3B',
                                    fontSize: 32,
                                    fontWeight: 700,
                                }}
                            >
                                In {time} Minuten bei Ihnen
                            </span>
                        </div>
                    </div>

                    {/* Footer elements */}
                    <div
                        style={{
                            position: 'absolute',
                            bottom: 40,
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'center',
                            gap: '40px',
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', color: '#9CA3AF', fontSize: 24, fontWeight: 500 }}>
                            <span style={{ color: '#22C55E', marginRight: '10px' }}>✓</span> Festpreis ab 99€
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', color: '#9CA3AF', fontSize: 24, fontWeight: 500 }}>
                            <span style={{ color: '#22C55E', marginRight: '10px' }}>✓</span> 24/7 Notdienst
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', color: '#9CA3AF', fontSize: 24, fontWeight: 500 }}>
                            <span style={{ color: '#22C55E', marginRight: '10px' }}>✓</span> Monteur aus der Region
                        </div>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        );
    } catch (e: unknown) {
        console.error('OG API Error:', e instanceof Error ? e.message : 'Unknown error');
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}
