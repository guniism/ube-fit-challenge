"use client"

import { useSession } from "next-auth/react"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header({style, profile} : {style: any, profile: boolean}){
    const router = useRouter();
    const {data: session} = useSession();
    return(
        <div className="w-full">
        <div className="w-full lg:pl-0 h-28 flex flex-row px-10 justify-between  items-center lg:fixed lg:border border-lightgray2 lg:h-20">
            <div className="flex-shrink-0 w-[320px] h-full hidden lg:block justify-center items-center">
                <div className='flex flex-col justify-center items-center pt-2'>
                    <h1 className='text-blue font-medium text-[34px] flex'>UBE Fit&nbsp;<div className='text-gray'>Challenge</div></h1>
                    <hr className="border-t-4 border-blue w-72" />
                </div>
            </div>
            <div className="flex-row flex justify-between w-full items-center lg:pl-10">
            {session ? (
                <>
                    <div className="pt-5 lg:pt-0">
                        {style}
                    </div>
                    {profile ? (
                    
                        <Link href="/profile" className="flex items-center space-x-5">
                            <div className="hidden lg:flex">
                                <p className="text-lg">{session.user?.name}</p>
                            </div>
                            <Image 
                                src={session?.user?.image ? session.user.image : "/assets/img/avatar.png"}
                                width={1080}
                                height={1080}
                                alt="User profile"
                                className="w-12 h-12 rounded-full border-2 border-lightblue"
                            />
                        </Link>
                    ) : null}
                </>
            ) : (
                <div className="flex justify-between w-full items-center ">
                    <div className="pt-5 lg:pt-0 hidden lg:flex">
                        {style}
                    </div>
                    <div className='flex flex-col justify-center items-center lg:hidden'>
                    <h1 className='text-blue font-medium text-[26px] flex'>UBE Fit&nbsp;<div className='text-gray'>Challenge</div></h1>
                    <hr className="border-t-2 border-blue w-52 " />
                    </div>
                    <button className="lg:px-5 px-2 py-1 h-12 rounded-xl bg-blue text-white hover:bg-white hover:border-2 hover:border-blue hover:text-blue text-sm" onClick={() => router.push('/login')}>เข้าสู่ระบบ</button>
                </div>
            )}
            </div>


        </div>
        <div className="h-20 hidden lg:block">

        </div>
        </div>
    )
}