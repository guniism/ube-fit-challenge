"use client"
import Navbar from "../components/navbar"
import Header from "../components/header"
import { useState  } from "react";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import { redirect } from 'next/navigation';

export default function Page(){
    const {data: session} = useSession();
    if(!session) redirect("/login");
    const title = <div>
        <h1 className="text-xl font-normal text-blue hidden lg:block">
            บันทึกการออกกำลังกาย
        </h1>
        <h1 className="text-3xl font-normal text-blue lg:hidden">
            บันทึก
            <br></br>
            การออกกำลังกาย
        </h1>
    </div>;
    const userEmail = session?.user?.email;
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [type, setType] = useState("");
    const [quantity, setQuantity] = useState("");
    const [imgurl, setImgurl] = useState("");
    const [unit, setUnit] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    function handleType(type2: string){
        if(type2 == "step"){
            setUnit("ก้าว");
        }
        else if(type2 == "distance"){
            setUnit("กิโลเมตร");
        }
        else if(type2 == "calorie"){
            setUnit("แคลอรี่");
        }
    }
    // console.log(date, type, quantity, imgurl, unit);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        
    
        if(!date || !type || !quantity){
          setError("กรุณากรอกข้อมูลให้ครบ");
          return;
        }
        const apiUrl = "https://ube-fit-challenge.vercel.app";
        // const apiUrl = "http://localhost:3000";
        try { 
          const res = await fetch(`${apiUrl}/api/add`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
                date, type, quantity, imgurl, userEmail
            })
          })
    
          if(res.ok){
            const form = e.target;
            setError("");
            setSuccess("บันทึกสำเร็จ");
            form.reset();
          }
          else{
            console.log("Exercise add failed");
          }
    
        } catch (error) {
          console.log("Error during add exercise: ", error);
        }
      }
    return(
        <div>
            <Header style={title} profile={true}/>
            <Navbar />
            <div className="flex lg:flex-row flex-col">
            <div className="w-[320px] hidden lg:block"></div>
                <div className="lg:w-full lg:max-w-2xl lg:mx-auto lg:pt-16">
                    <div className="px-10">            
                        <form onSubmit={handleSubmit} className='flex flex-col justify-evenly'>

                        <h3 className='ml-2 font-normal text-lg mb-1 mt-3'>วันที่ออกกำลังกาย</h3>
                        <input type="date" onChange={(e) => setDate(e.target.value)} defaultValue={new Date().toISOString().split('T')[0]} className='rounded-2xl p-3 block mx-auto bg-[#F5F5F5] w-full text-gray'></input>

                        <h3 className='ml-2 font-normal text-lg mb-1 mt-3'>ประเภทการออกกำลังกาย</h3>
                        <select id="type" onChange={(e) => {setType(e.target.value); handleType(e.target.value)}} name="type" className='rounded-2xl p-3 block mx-auto bg-[#F5F5F5] w-full text-gray'>
                            <option value="" disabled selected>-- เลือกประเภท --</option>
                            <option value="step">นับก้าว</option>
                            <option value="distance">ระยะทาง เดิน/วิ่ง</option>
                            <option value="calorie">แคลอรี่</option>
                        </select>

                        <h3 className='ml-2 font-normal text-lg mb-1 mt-3'>จำนวน</h3>
                        <div className="flex flex-row items-center">
                            <input type="number" onChange={(e) => setQuantity(e.target.value)} className='rounded-2xl p-3 block mx-auto bg-[#F5F5F5] w-full text-gray' placeholder='กรุณากรอกจำนวน'></input>
                            <p className={clsx("text-lg ",
                                {
                                    "ml-5" : unit,
                                }
                            )}>
                                {unit}
                            </p>
                        </div>

                        <h3 className='ml-2 font-normal text-lg mb-1 mt-3'>ลิงค์รูปภาพ (ไม่จำเป็น)</h3>
                        <input type='text' onChange={(e) => setImgurl(e.target.value)} className='rounded-2xl p-3 block mx-auto bg-[#F5F5F5] w-full text-gray' placeholder='กรุณากรอกลิงค์รูปภาพ'></input>
                        
                        {error && (
                            <div className='block rounded-2xl text-base text-red py-1 mx-auto w-full border border-red text-center mt-5'>{error}</div>
                        )}

                        {success && (
                            <div className='block rounded-2xl text-base text-green py-1 mx-auto w-full border border-green text-center mt-5'>{success}</div>
                        )}

                        <button type='submit' className='block rounded-2xl text-xl mt-5 text-white py-4 mx-auto w-full bg-blue'>บันทึก</button>
            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}