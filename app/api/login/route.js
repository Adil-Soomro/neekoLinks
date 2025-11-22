import connectdb from "@/lib/mongodb";
import { user } from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const email = "admin@gmail.com";
    const password = "admin123";

    const body = await req.json();
    console.log("I AM IN SERVER", body);

    if (!email) {
      return NextResponse.json(
        { success: false, error: true, message: "Email is required!" },
        { status: 400 }
      );
    }

    const AdminCheck = body.password === password && email === body.email;

    if (!AdminCheck) {
      return NextResponse.json(
        { success: false, error: true, message: "Invalid Credentials!" },
        { status: 401 }
      );
    }
    return NextResponse.json(
      { success: true, message: "Login Successful!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
