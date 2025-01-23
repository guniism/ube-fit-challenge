import { NextResponse } from "next/server";
import { connectMongoDb } from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from 'bcryptjs';

export async function POST(req: any){
    try {
        const {name, email, password} = await req.json();

        const saltRounds = 10;
        const salt = await bcrypt.genSaltSync(saltRounds);
        const hash = await bcrypt.hashSync(password, salt);

        await connectMongoDb();
        // console.log(hash);
        await User.create({ name, email, password: hash});


        // console.log("Name: ", name);
        // console.log("Email: ", email);
        // console.log("Password: ", password);
        return NextResponse.json({message: "User registered."}, {status: 201});

    } catch (error) {
        return NextResponse.json({message: "Error while user register.", error}, {status: 500});
    }
}