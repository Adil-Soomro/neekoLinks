import connectdb from "@/lib/mongodb";
import { url } from "@/models/URLSchema";

export async function POST(request) {
  const body = await request.json();
  const shorturl = body.shorturl;

  await connectdb();

  const doc = await url.findOne({ shortUrl: shorturl });
  if (doc) {
    return Response.json({
      success: false,
      error: true,
      message: "URL Already Exists!",
    });
  }

  const result = await url.create({
    url: body.url,
    shortUrl: body.shorturl,
    clicks: 0,
  });

  return Response.json({
    success: true,
    error: false,
    message: "URL Generated Successfully!",
  });
}

export async function GET() {
  await connectdb();

  const data = await url.find().sort({ createdAt: -1 }).limit(6);

  return new Response(JSON.stringify({ success: true, data }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}
