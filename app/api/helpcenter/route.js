import { NextResponse } from "next/server";
import connectdb from "@/lib/mongodb";
import { HelpCenterContacts } from "@/models/HelpContactSchema";

export async function POST(req) {
  try {
    await connectdb();

    const body = await req.json();
    const { email, message } = body;
    console.log(email, message);

    if (!email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }
    const newContact = await HelpCenterContacts.create({email, message})
      return NextResponse.json(
        { message: "Contact request saved successfully" },
        { status: 201 }
      );

  } catch (error) {
    console.error("Error saving contact:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
