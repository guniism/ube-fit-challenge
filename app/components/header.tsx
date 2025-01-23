import { useSession } from "next-auth/react"
import Image from "next/image";
import Link from "next/link";

export default function Header({style, profile} : {style: any, profile: boolean}){
    // const {data: session} = useSession();
    return(
        <div className="h-28 flex flex-row px-10 justify-between items-center">
            <div className="pt-5">
                {style}
            </div>
            {profile ? (
                        <Link href="/profile">
                                <Image 
                                src={"/assets/img/avatar.png"}
                                width={1080}
                                height={1080}
                                alt={"User profile"}
                                className="w-12 h-12 rounded-full border-2 border-lightblue"
                            />
                        </Link>
            ) : (
                <></>
            )}

        </div>
    )
}