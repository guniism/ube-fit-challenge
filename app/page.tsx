"use client"

import Navbar from "./components/navbar";
import Header from "./components/header";
import { useSession } from "next-auth/react";
export default function Home() {
  const {data: session} = useSession();
  const title = <div>
      <p className="text-2xl font-normal text-black">สวัสดี</p>
      <h1 className="text-3xl font-normal text-black">
        {session?.user?.name}         
      </h1>
    </div>;
  return(
    <div>
        <Header style={title} profile={true}/>
        <Navbar />
    </div>
  )
}


