import connectdb from "@/lib/mongodb";
import { Contact } from "@/models/ContactSchema";

export async function POST(request) {
    try {
        const body = await request.json();

        if (!body.name || !body.email || !body.message) {
            return Response.json({
                success: false,
                error: true,
                message: "All fields are required.",
            }, { status: 400 });
        }

        // Connect to database +++
        await connectdb();

        await Contact.create({
            name: body.name,
            email: body.email,
            message: body.message,
        });
        return Response.json({
            success: true,
            error: false,
            message: "Your message has been sent successfully!",
        });
    } catch (error) {
        return Response.json({
            success: false,
            error: true,
            message: "Something went wrong. Please try again later.",
        }, { status: 500 });
    }
}
