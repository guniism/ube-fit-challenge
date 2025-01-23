"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation";
import clsx from "clsx";

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
            <div className=" bg-white fixed bottom-0 w-full py-[42px] element">
            </div>
            <div className="fixed bottom-0 w-full px-2">
                <ul className="flex flex-row justify-around content-center items-center">
                {links.map(({ href, label, filename }, index) => (
                    index === 2 ? (
                        <li key={`${filename}_nav`}>
                            <Link href={href}>
                                <div className="w-[75px] h-[75px] bg-blue content-center rounded-[24px] -translate-y-8">
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
                                
                                <p className={clsx('text-sm text-gray', {
                                    'text-blue2': pathname === href,
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