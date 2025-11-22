import { url } from "@/models/URLSchema";
import connectdb from "@/lib/mongodb";

export async function GET(req) {
    const { searchParams } = new URL(req.url);  // Access query params from the request URL
    const sortBy = searchParams.get("sortBy") || "lastAccess";
    const order = searchParams.get("order") || "desc";
    const filterStatus = searchParams.get("filterStatus") || "";
    const search = searchParams.get("search") || "";

    try {
        // Connect to the database
        await connectdb();

        let sortOption = {};
        if (sortBy) {
            sortOption[sortBy] = order === "desc" ? -1 : 1;
        }

        let filterOptions = {};
        if (filterStatus) {
            filterOptions.isActive = filterStatus === "active" ? true : false;
        }

        if (search) {
            filterOptions.$or = [
                { shortUrl: { $regex: search, $options: 'i' } },
                { url: { $regex: search, $options: 'i' } },
            ];
        }

        // Fetch sorted and filtered URLs
        const links = await url.find(filterOptions).sort(sortOption);

        return new Response(JSON.stringify(links), { status: 200 });
    } catch (error) {
        console.error("Error fetching URLs:", error);
        return new Response(JSON.stringify({ error: "Error fetching URLs" }), { status: 500 });
    }
}
