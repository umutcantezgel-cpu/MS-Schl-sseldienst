import { NextResponse } from "next/server";
import { aggregateRating } from "@/components/reviews/reviews.data";

// 24 Stunden lokaler Cache auf dem Vercel Edge Server
export const revalidate = 86400; 

export async function GET() {
  // Wir benötigen einen API-Key ohne HTTP-Referrer Limitierung für serverseitige Anfragen.
  const SERVER_API_KEY = process.env.GOOGLE_PLACES_SERVER_KEY;
  const PLACE_ID = process.env.GOOGLE_PLACE_ID;

  // SICHERHEITSWEICHE (Fallback)
  // Wenn die Konfiguration fehlt, wird nicht abgestürzt, sondern die statischen Daten werden genutzt.
  if (!SERVER_API_KEY || !PLACE_ID) {
    console.log("[Reviews API] No SERVER_KEY or PLACE_ID provided, using static fallback.");
    return NextResponse.json(aggregateRating);
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=rating,user_ratings_total&key=${SERVER_API_KEY}`,
      { next: { revalidate: 86400 } }
    );

    const data = await response.json();

    // Erfolgreiche Verbindung zum Google Server
    if (data.status === "OK" && data.result) {
      return NextResponse.json({
        ratingValue: data.result.rating || aggregateRating.ratingValue,
        reviewCount: data.result.user_ratings_total || aggregateRating.reviewCount,
      });
    }

    console.warn("[Reviews API] Google API returned non-OK status:", data.status);
    return NextResponse.json(aggregateRating);
  } catch (error) {
    console.error("[Reviews API] Connection Error:", error);
    // Ausfallsicherungs-Rettungsschirm
    return NextResponse.json(aggregateRating);
  }
}
