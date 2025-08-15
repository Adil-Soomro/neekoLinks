import connectdb from "@/lib/mongodb";
import { url } from "@/models/URLSchema";

export async function POST(request) {

    const body = await request.json()
    const shorturl = body.shorturl;
    console.log(shorturl)

    // Connect to Database +++
    await connectdb()

    const doc = await url.findOne({ shortUrl: shorturl })
    if (doc) {
        return Response.json({ success: false, error: true, message: 'URL Already Exists!' })
    }

    const result = await url.create({
        url: body.url,
        shortUrl: body.shorturl,
        clicks: 0
    })
    console.log(result);

    return Response.json({ success: true, error: false, message: 'URL Generated Successfully!' })
}

//   export async function GET(req) {
//     const { shorturl } = req.query;

//     if (!shorturl) {
//         return new Response(
//             JSON.stringify({ success: false, message: "shorturl is required" }),
//             { status: 400 }
//         );
//     }

//     // connect to database +++
//     await connectdb()

//     const link = await url.findOne({ shorturl });
//     if (!link) {
//         return new Response(
//             JSON.stringify({ success: false, message: "URL not found" }),
//             { status: 404 }
//         );
//     }

//     // Increment the click count
//     await url.updateOne(
//         { shorturl },
//         { $inc: { clicks: 1 } }
//     );

//     // Redirect the user to the original URL
//     return new Response(null, {
//         status: 302,
//         headers: { Location: link.url },
//     });
// }
export async function GET() {
    // connect to database +++
    await connectdb();

    const data = await url.find().sort({ createdAt: -1 }).limit(6);

    return new Response(JSON.stringify({ success: true, data }),
        { status: 200, headers: { 'content-type': 'application/json' } });
}
