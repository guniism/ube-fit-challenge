import { NextResponse } from "next/server";
import { connectMongoDb } from "@/lib/mongodb";
import User from "@/models/user";
import Exercise from "@/models/exercise";

export async function POST(req: any){
        try {
            
            await connectMongoDb();
            const {date, type, quantity, imgurl, userEmail} = await req.json();
            const user = await User.findOne({ email: userEmail }).select("_id");
            // console.log("User: ", user)
            await Exercise.create({userId: user, date, type, quantity, imgurl});
            return NextResponse.json({ user })
    
        } catch (error) {
            return NextResponse.json({message: "Error while user register."}, {status: 500});
        }
}