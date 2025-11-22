import { NextResponse } from "next/server";
import connectdb from "@/lib/mongodb";
import { url } from "@/models/URLSchema";

export async function GET() {
  await connectdb();
  try {
    const recentLinks = await url.find().sort({ lastAccess: -1 }).limit(10);
    return NextResponse.json(recentLinks, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch recent activity." },
      { status: 500 }
    );
  }
}
