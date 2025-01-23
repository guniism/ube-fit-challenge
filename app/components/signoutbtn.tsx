"use client"
import { signOut } from "next-auth/react"
import Image from "next/image"
export default function SignOutBtn(){
    return(
        <div>
            <button className="border-2 border-red w-full rounded-2xl h-14  text-red flex flex-row justify-center items-center" onClick={() => signOut()}>
                <div className="mr-1 text-xl font-normal">ออกจากระบบ</div>
                <Image
                    height="24"
                    width="24"
                    src={`/assets/icons/logout-red.svg`}
                    alt={`signout icon`}
                    className="ml-1"
                />
            </button>
        </div>
    )
}