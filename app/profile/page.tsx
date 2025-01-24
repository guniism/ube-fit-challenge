"use client"

import Navbar from "../components/navbar"
import Header from "../components/header"
import { useSession } from "next-auth/react";
import Image from "next/image";
import SignOutBtn from "../components/signoutbtn";
import { redirect } from 'next/navigation';

function UserDataDiv({head, data, icon}: {head: string, data: any, icon: string,  }){
    // const head = "อีเมล";
    // const data = "test@mail.com";
    // const icon = "mail";
    return (
        <div>
            <div>
                <h3 className="ml-3 text-lg">{head}</h3>
                <div className="w-full rounded-2xl h-14 bg-lightgray text-gray flex flex-row items-center ">
                    <Image
                        height="24"
                        width="24"
                        src={`/assets/icons/${icon}-gray.svg`}
                        alt={`signout icon`}
                        className="mr-1 ml-5"
                    />
                    <div className="ml-1 font-light text-lg">{data}</div>
                </div>
            </div>
        </div>
    )
}


export default function Page(){
    const title = <div>
        <h1 className="text-3xl font-normal text-blue lg:text-xl">โปรไฟล์ของฉัน</h1>
    </div>;
    const {data: session} = useSession();
    if(!session) redirect("/login");
    // console.log(session)
    return(
        <div>
            <Header style={title} profile={false}/>
            <Navbar />
            <div className="flex lg:flex-row flex-col">
                <div className="w-[320px] hidden lg:block "></div>
                <div className="flex flex-row justify-center w-full py-10 lg:py-32">
                    <div className="max-w-2xl w-full">
                        <div className="px-10">
                            <Image 
                                src={"/assets/img/avatar.png"}
                                width={1080}
                                height={1080}
                                alt={"User profile"}
                                className="w-36 mx-auto rounded-full border-2 border-lightblue"
                            />
                            <h2 className="text-2xl text-center mt-2">{session?.user?.name}</h2>
                            <div className="space-y-10 mt-6">
                                <UserDataDiv head="อีเมล" data={session?.user?.email} icon="mail"/>
                                <div className="lg:hidden">
                                    <SignOutBtn />
                                </div>
                                
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}