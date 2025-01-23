import { NextResponse } from "next/server";
import { connectMongoDb } from "@/lib/mongodb";
import User from "@/models/user";
import Exercise from "@/models/exercise";

export async function GET(req: Request) {
  try {
    await connectMongoDb();
    
    const url = new URL(req.url);
    const userEmail = url.searchParams.get("userEmail");

    if (!userEmail){
        return NextResponse.json({ message: "userEmail query parameter is required" }, { status: 400 });
    }
  
    const user = await User.findOne({ email: userEmail }).select("_id");

    if (!user){
    return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const exercises = await Exercise.find({ userId: user._id }).sort({ date: -1 });
    // console.log(exercises);

    return NextResponse.json({ exercises });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error fetching data." }, { status: 500 });
  }
}
