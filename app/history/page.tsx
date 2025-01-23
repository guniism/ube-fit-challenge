"use client"

import Navbar from "../components/navbar"
import Header from "../components/header"
import { useSession } from "next-auth/react";
import { redirect } from 'next/navigation';
import { useEffect, useState } from "react";
import Image from "next/image";

interface Exercise {
    date: string;
    type: string;
    quantity: number;
    imgurl: string;
  }

function returnType(type: string, mode: number){
    let text;
    if(type == "step"){
        text = (mode == 0) ? "นับก้าว" : "ก้าว";
    }
    else if(type == "distance"){
        text = (mode == 0) ? "ระยะทาง การเดิน/วิ่ง," : "กิโลเมคร";
    }
    else if(type == "calorie"){
        text = (mode == 0) ? "นับแคลอรี่" : "แคลอรี่";
    }
    return text;
}
export default function Page(){
    const {data: session, status} = useSession();
    if(!session) redirect("/login");
    const title = <div>
        <h1 className="text-3xl font-normal text-blue">ประวัติการบันทึก</h1>
    </div>;
    const [error,setError] = useState("");
    const [exercises,setExercises] = useState<Exercise[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const userEmail = session.user?.email;
      
              if (!userEmail) {
                setError("No email found in the session.");
                return;
              }
      
              const res = await fetch(`/api/getexercise?userEmail=${userEmail}`);
      
              if (!res.ok) {
                throw new Error("Failed to fetch data");
              }
      
              const data = await res.json();
              setExercises(data.exercises);
            } catch (error: any) {
              setError(error.message);
            }
        };
        fetchData();
    }, [session, status]);
    
    return(
        <div>
            <Header style={title} profile={true}/>
            <div className="px-10 mt-5">
                <div>
                    {error ? (<p>{error}</p>) : (<></>)}
                    <div className="space-y-3">
                        {exercises.length === 0 ? (
                        <p className="text-center text-xl mt-10">ไม่มีประวัติการออกกำลังกาย</p>
                        ) : (
                        exercises.map((exercise: any) => (
                            <div key={exercise._id} className="bg-lightgray rounded-2xl p-3 pl-4 items-center flex justify-between">
                                <div className="">
                                    
                                    <h2 className=""><strong>ประเภท:</strong> {returnType(exercise.type, 0)}</h2>
                                    <p className=""><strong>ปริมาณ:</strong> {exercise.quantity} {returnType(exercise.type, 1)}</p>
                                    <p className="text-sm">บันทึกเมื่อวันที่: {new Date(exercise.date).toLocaleDateString()}</p>
                                </div>
                                {(exercise.imgurl == "") ? (<></>) : (
                                    <Image
                                    src={exercise.imgurl}
                                    alt="exercise img"
                                    width={500}
                                    height={500}
                                    className="w-20 h-20 object-cover border border-lightblue rounded-lg"
                                    />
                                )}
  
                                
                            </div>
                        ))
                        )}
                    </div>
                </div>
            </div>
            <Navbar />
        </div>
    )
}