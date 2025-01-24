"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation";
import clsx from "clsx";
import SignOutBtn from "./signoutbtn";

export default  function Navbar(){
    const pathname = usePathname();

    const links = [
        {href: "/", label: "หน้าหลัก", filename: "home"},
        {href: "/history", label: "ประวัติ", filename: "calendar"},
        {href: "/add", label: "บันทึก", filename: "plus"},
        {href: "/ranking", label: "จัดอันดับ", filename: "award"},
        {href: "/profile", label: "โปรไฟล์", filename: "user"},
    ];
    return (
        <div>
            <div className="lg:fixed lg:flex lg:flex-col hidden space-y-10 left-0 border border-x-lightgray2 border-y-0 w-[320px] h-full bg-white p-6">
                
                <div className="">
                    <Link href="/add">
                        <button className="border-2 hover:border-blue w-full rounded-2xl p-4 bg-blue hover:bg-white text-white hover:text-blue flex flex-row justify-center items-center">
                            
                            <Image
                                height="30"
                                width="30"
                                src={`/assets/icons/plus-white.svg`}
                                alt={`signout icon`}
                                className="ml-1 mr-1"
                            />
                            <div className="mr-1 text-lg font-normal">เพิ่มการออกกำลังกาย</div>
                        </button>
                    </Link>
                    <ul className="space-y-3 mt-3">
                        {links.map(({ href, label, filename }, index) => (
                            index === 2 ? (
                                <></>
                            ) : (
                                <li key={`${filename}_nav`}>
                                    <Link href={href} className={clsx('flex p-3 rounded-2xl hover:bg-lightgray ', 
                                        {
                                            'bg-lightgray': pathname === href,
                                        })}>
                                        <Image
                                            height="24"
                                            width="24"
                                            src={`/assets/icons/${filename}-${(href === pathname) ? "blue" : "gray"}.svg`}
                                            alt={`${filename} icon`}
                                            className="ml-4 mr-4"
                                        />
                                        
                                        <p className={clsx('text-base ', {
                                            'text-blue': pathname === href,
                                            'text-gblack': pathname != href,
                                        })}>{label}</p>
                                    </Link>
                                </li>
                            )
                        ))}
                    </ul>
                </div>
                <div>
                    <SignOutBtn />
                </div>

            </div>
            <div className=" bg-white fixed bottom-0 w-full py-[42px] element lg:hidden">
            </div>
            <div className="fixed bottom-0 w-full px-2 lg:hidden">
                <ul className="flex flex-row justify-around content-center items-center">
                {links.map(({ href, label, filename }, index) => (
                    index === 2 ? (
                        <li key={`${filename}_nav`}>
                            <Link href={href}>
                                <div className="w-[75px] h-[75px] bg-blue content-center rounded-[24px] -translate-y-8 ">
                                <Image
                                        height="24"
                                        width="24"
                                        src={`/assets/icons/${filename}-white.svg`}
                                        alt={`${filename} icon`}
                                        className="mx-auto w-12 h-auto"
                                        priority={false}
                                />
                                </div>
                            </Link>
                        </li>
                    ) : (
                        <li key={`${filename}_nav`}>
                            <Link href={href} className="flex flex-col w-14 text-center">
                                <Image
                                    height="24"
                                    width="24"
                                    src={`/assets/icons/${filename}-${(href === pathname) ? "blue" : "gray"}.svg`}
                                    alt={`${filename} icon`}
                                    className="mx-auto"
                                />
                                
                                <p className={clsx('text-sm ', {
                                    'text-blue': pathname === href,
                                    'text-gray': pathname != href,
                                })}>{label}</p>
                            </Link>
                        </li>
                    )
                ))}
                </ul>
                

    {/* <div className="relative w-80 h-48 bg-gray-200 border border-gray-400 flex items-center justify-center">
      <p className="text-lg text-gray-700">Content inside div</p>
      <button className="absolute bottom-0 translate-y-3 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg">
        Click Me
      </button>
    </div> */}

 
            </div>

        </div>
    )
}