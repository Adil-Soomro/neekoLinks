import { redirect, notFound } from "next/navigation";
import { url } from "@/models/URLSchema";
import connectdb from "@/lib/mongodb";
import InactivePage from "@/components/pages/inActive";

const Page = async ({ params }) => {
    const Params = await params;
    const shorturl = decodeURIComponent(Params.shortUrl);

    // Connect to the database +++
    await connectdb();

    // Find and update document
    const doc = await url.findOneAndUpdate(
        { shortUrl: shorturl },
        { 
            $set: { lastAccess: new Date() },
            $inc: { clicks: 1 }
        },
        { new: true, timestamps: false }
    );
    
    
    if (!doc) return notFound();

    if (doc.isActive) {
        redirect(doc.url);
    } else {
        return <InactivePage />;
    }
};

export default Page;
