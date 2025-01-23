"use client"
import { signOut } from "next-auth/react"

export default function SignOutBtn(){
    return(
        <div>
            <button onClick={() => signOut()}>ออกจากระบบ</button>
        </div>
    )
}