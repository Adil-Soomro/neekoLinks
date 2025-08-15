import connectdb from "@/lib/mongodb";
import { url } from "@/models/URLSchema";
import { NextResponse } from "next/server";

export async function GET() {

    try {
        await connectdb()

        const doc = await url.find({}, { clicks: 1, url: 1, _id: 0 })
            .sort({ clicks: -1 })
            .limit(3)

        return NextResponse.json({ success: true, doc })
    }
    catch (error) {
        return NextResponse.json({ success: false, message: 'Server Error!', error: error }, {status: 400})
    }

}