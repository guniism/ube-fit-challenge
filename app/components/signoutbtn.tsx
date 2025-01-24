"use client"
import { signOut } from "next-auth/react"
import Image from "next/image"
import { useSession } from "next-auth/react"
export default function SignOutBtn(){
    const {data: session} = useSession();
    return(
        <div>
            { session &&  <button className="border-2 border-red w-full rounded-2xl h-14  text-red flex flex-row justify-center items-center" onClick={() => {signOut()}}>
                <div className="mr-1 text-xl lg:text-base font-normal">ออกจากระบบ</div>
                <Image
                    height="24"
                    width="24"
                    src={`/assets/icons/logout-red.svg`}
                    alt={`signout icon`}
                    className="ml-1"
                />
            </button>}

        </div>
    )
}