import connectdb from "@/lib/mongodb";
import { NewsletterSubscriber } from "@/models/NewsletterSchema";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email } = body;
    // connect to database +++
    await connectdb();

    if (!email) {
      return NextResponse.json(
        { success: false, error: true, message: "Email is required!" },
        { status: 400 }
      );
    }

    const existingUser = await NewsletterSubscriber.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { success: false, error: true, message: "User Already Exists!" },
        { status: 409 }
      );
    }

    const result = await NewsletterSubscriber.create({ email });

    return NextResponse.json(
      { success: true, email, message: "Thank you for subscribing! 🎉" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in Newsletter Subscription:", error);
    return NextResponse.json(
      { success: false, error: true, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
