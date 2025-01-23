import { NextResponse } from "next/server";
import { connectMongoDb } from "@/lib/mongodb";
import User from "@/models/user";

export async function POST(req: any){
    try {
        await connectMongoDb();
        const {email} = await req.json();


    } catch (error) {
        return NextResponse.json({message: "Error while user register."}, {status: 500});
    }
}