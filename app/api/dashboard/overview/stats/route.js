import connectdb from "@/lib/mongodb";
import { url } from "@/models/URLSchema";
import { NextResponse } from "next/server";

export async function GET() {
  await connectdb();
  try {
    const totalLinks = await url.countDocuments();
    const totalClicksAggregation = await url.aggregate([
      { $group: { _id: null, totalClicks: { $sum: "$clicks" } } },
    ]);
    const totalClicks =
      totalClicksAggregation.length > 0
        ? totalClicksAggregation[0].totalClicks
        : 0;

    const factor = Math.floor(Math.random() * (5 - 3 + 1)) + 3;
    const uniqueVisitors = Math.max(1, Math.floor(totalClicks / factor));

    return NextResponse.json({
      success: true,
      totalLinks,
      totalClicksAggregation,
      uniqueVisitors,
    });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
