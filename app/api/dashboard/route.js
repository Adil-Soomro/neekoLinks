import connectdb from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { url } from "@/models/URLSchema";

export async function GET() {
  try {
    // Connect to Database +++
    await connectdb();

    // Fetch all items from the "contact" collection
    const items = await url.find();

    return Response.json({
      success: true,
      error: false,
      message: "Data fetched successfully!",
      data: items,
    });
  } catch (error) {
    console.error("Error fetching data:", error);

    return Response.json({
      success: false,
      error: true,
      message: "Failed to fetch data.",
    });
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return new Response(
        JSON.stringify({ success: false, message: "ID is required" }),
        { status: 400 }
      );
    }

    await connectdb();

    const result = await url.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 1) {
      return new Response(
        JSON.stringify({ success: true, message: "Item deleted successfully" }),
        { status: 200 }
      );
    } else {
      return new Response(
        JSON.stringify({ success: false, message: "Item not found" }),
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
