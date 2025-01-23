"use client"

import { useSession } from "next-auth/react"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header({style, profile} : {style: any, profile: boolean}){
    const router = useRouter();
    const {data: session} = useSession();
    return(
        <div className="h-28 flex flex-row px-10 justify-between items-center">
            {session ? (
                <>
                    <div className="pt-5">
                        {style}
                    </div>
                    {profile ? (
                        <Link href="/profile">
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
                <div className="flex justify-between w-full items-center">
                    <div className='flex flex-col justify-center items-center '>
                    <h1 className='text-blue font-medium text-[26px] flex'>UBE Fit&nbsp;<div className='text-gray'>Challenge</div></h1>
                    <hr className="border-t-2 border-blue w-52 " />
                    </div>
                    <button className="px-2 py-1 h-12 rounded-xl bg-blue text-white hover:bg-white hover:border-2 hover:border-blue hover:text-blue" onClick={() => router.push('/login')}>เข้าสู่ระบบ</button>
                </div>
            )}
  


        </div>
    )
}