import connectdb from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { url } from "@/models/URLSchema";
import mongoose from "mongoose";
import { ObjectId } from "mongodb";

export async function PATCH(request, { params }) {
    await connectdb();

    const { shortUrl, URL, status } = await request.json();
    const updatedStatus = status === "active" ? true : status === "inactive" ? false : null;

    const { id } = params;
    console.log("Received ID:", id);
    // Check if ID is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json({ success: false, message: "Invalid ID format!" }, { status: 400 });
    }
    
    
    const objectId = new mongoose.Types.ObjectId(id);
    const UpdatedDoc = await url.findById(objectId);
    console.log("Document Found:", UpdatedDoc);

    if (!UpdatedDoc) {
        return NextResponse.json({ success: false, message: "Document not found!" }, { status: 404 });
    }

    // Update fields
    UpdatedDoc.shortUrl = shortUrl;
    UpdatedDoc.url = URL;
    UpdatedDoc.isActive = updatedStatus;

    await UpdatedDoc.save();

    return NextResponse.json({ success: true, message: "Updated Successfully!" }, { status: 200 });
}
