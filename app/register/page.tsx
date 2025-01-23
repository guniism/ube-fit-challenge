"use client"

import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
export function UBEFitChallenge(){
  return(
    <div className='flex flex-col justify-center items-center mb-7 mt-5'>
      <h1 className='text-blue font-medium text-[34px] flex'>UBE Fit&nbsp;<div className='text-gray'>Challenge</div></h1>
      <hr className="border-t-4 border-blue w-72 " />
    </div>
  )
}

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  // console.log(name, email, password, confirmPassword, error);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    if(password != confirmPassword){
      setError("รหัสผ่านไม่ตรงกัน");
      return;
    }

    if(!name || !email || !password || !confirmPassword){
      setError("กรุณากรอกข้อมูลให้ครบ");
      return;
    }

    const resCheckUser = await fetch("http://localhost:3000/api/usercheck", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email})
    })

    const {user} = await resCheckUser.json();

    if(user){
      setError("อีเมลนี้ถูกใช้ลงทะเบียนไปแล้ว");
      return;
    }

    try { 
      const res = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name, email, password
        })
      })

      if(res.ok){
        const form = e.target;
        setError("");
        setSuccess("สมัครสมาชิกสำเร็จ");
        form.reset();
      }
      else{
        console.log("User registration failed");
      }

    } catch (error) {
      console.log("Error during registration: ", error);
    }
  }

  return (
    <div>
      <div className='px-10'>
        <UBEFitChallenge />
        <h2 className='text-center font-medium text-2xl'>สมัครสมาชิก</h2>
        <form onSubmit={handleSubmit} className='flex flex-col justify-evenly'>
          <h3 className='ml-2 font-normal text-lg mb-1 mt-3'>ชื่อ</h3>
          <input onChange={(e) => setName(e.target.value)} className='rounded-2xl p-3 block mx-auto bg-[#F5F5F5] w-full text-gray' type='text' placeholder='กรุณากรอกชื่อ'></input>
          
          <h3 className='ml-2 font-normal text-lg mb-1 mt-3'>อีเมล</h3>
          <input onChange={(e) => setEmail(e.target.value.toLowerCase())} className='rounded-2xl p-3 block mx-auto bg-[#F5F5F5] w-full text-gray' type='email' placeholder='กรุณากรอกอีเมล'></input>
          
          <h3 className='ml-2 font-normal text-lg mb-1 mt-3'>รหัสผ่าน</h3>
          <input onChange={(e) => setPassword(e.target.value)} className='rounded-2xl p-3 block mx-auto bg-[#F5F5F5] w-full text-gray' type='password' placeholder='กรุณากรอกรหัสผ่าน'></input>
          
          <h3 className='ml-2 font-normal text-lg mb-1 mt-3'>ยืนยันรหัสผ่าน</h3>
          <input onChange={(e) => setConfirmPassword(e.target.value)} className='rounded-2xl p-3 block mx-auto bg-[#F5F5F5] w-full text-gray mb-5' type='password' placeholder='กรุณายืนยันหัสผ่าน'></input>

          {error && (
            <div className='block rounded-2xl text-base text-red py-1 mx-auto w-full border border-red text-center'>{error}</div>
          )}

          {success && (
            <div className='block rounded-2xl text-base text-green py-1 mx-auto w-full border border-green text-center'>{success}</div>
          )}
          

          <button type='submit' className='block rounded-2xl text-xl mt-5 text-white py-4 mx-auto w-full bg-blue'>ลงทะเบียน</button>
          <div className='flex flex-row mt-4 text-lg mx-auto'>
            <p className=''>เป็นสมาชิกอยู่แล้ว?</p>&nbsp;<Link href="login" className='text-blue'>เข้าสู่ระบบ</Link>
          </div>
        </form>

      </div>
    </div>
  )
}

export default RegisterPage;
