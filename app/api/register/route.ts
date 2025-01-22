import { NextResponse } from "next/server";
import { connectMongoDb } from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from 'bcryptjs';

export async function POST(req: any){
    try {
        const {name, email, password} = await req.json();

        await connectMongoDb();
        await User.create({ name, email, password});



        // console.log("Name: ", name);
        // console.log("Email: ", email);
        // console.log("Password: ", password);
        return NextResponse.json({message: "User registered."}, {status: 201});

    } catch (error) {
        return NextResponse.json({message: "Error while user register."}, {status: 500});
    }
}