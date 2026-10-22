import { NextResponse } from "next/server";

export const revalidate = 3600; // Cache for 1 hour

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username") || "SanketPathare";
  const year = searchParams.get("year") || "last";

  try {
    const url = `https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`;
    const res = await fetch(url, {
      next: { revalidate: 3600 },
      headers: {
        "User-Agent": "Portfolio-App",
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch from upstream: ${res.statusText}`);
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Error fetching GitHub contributions:", error);
    return NextResponse.json(
      {
        error: "Failed to load live GitHub contributions",
        message: error?.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}
