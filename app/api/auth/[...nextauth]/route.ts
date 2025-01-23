import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import { connectMongoDb } from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from 'bcryptjs';

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
    name: "credentials",
    credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
    //   async authorize(credentials, req) {
        async authorize(credentials) {
        // const { email, password } = await credentials;
        
        const email = await credentials?.email;
        const password = await credentials?.password;
        
        try {
            
            await connectMongoDb();
            const user = await User.findOne({email});
            if(!user){
                return null;
            }
            if(!password) return;

            const match = await bcrypt.compare(password, user.password);

            if(!match){
                // console.log("password not match");
                return null;
            }
            return user;

        } catch (error) {
            console.log("Error: ", error);
        }
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login"
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

