import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    // Log the tracking payload. In production, this might write to a database or a specialized logging service.
    // For "Zero-Breakage" local tracking, we just console.log it so no third-party scripts are strictly required.
    if (process.env.NODE_ENV === "development") {
      console.log("[Local Analytics Tracked]:", payload.event, payload);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Local tracking error:", error);
    // Always return 200 so we don't break the client with failed tracking requests
    return NextResponse.json({ success: false, error: "Tracking failed" }, { status: 200 });
  }
}
