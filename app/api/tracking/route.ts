import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    // Always return 200 so we don't break the client with failed tracking requests
    return NextResponse.json({ success: false, error: "Tracking failed" }, { status: 200 });
  }
}
