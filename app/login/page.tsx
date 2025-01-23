"use client"

import React from 'react'
import { useState } from 'react';
import { UBEFitChallenge } from '../register/page';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if(!email || !password){
      setError("กรุณากรอกข้อมูลให้ครบ");
      return;
    }
    try {
      const res = await signIn("credentials", {
        email, password, redirect: false
    })

      if (!res) {
        setError("การเข้าสู่ระบบล้มเหลว");
        return;
      }

      if(res.error){
        setError("ข้อมูลไม่ถูกต้อง");
        return;
      }

      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <div className='px-10'>
        <UBEFitChallenge />
        <h2 className='text-center font-medium text-2xl'>เข้าสู่ระบบ</h2>
        <form onSubmit={handleSubmit} className='flex flex-col justify-evenly'>
          <h3 className='ml-2 font-normal text-lg mb-1 mt-3'>อีเมล</h3>
          <input onChange={(e) => setEmail(e.target.value.toLowerCase())} className='rounded-2xl p-3 block mx-auto bg-[#F5F5F5] w-full text-gray' type='email' placeholder='กรุณากรอกอีเมล'></input>
          <h3 className='ml-2 font-normal text-lg mb-1 mt-3'>รหัสผ่าน</h3>
          <input onChange={(e) => setPassword(e.target.value)} className='rounded-2xl p-3 block mx-auto bg-[#F5F5F5] w-full text-gray mb-5' type='password' placeholder='กรุณากรอกรหัสผ่าน'></input>

          {error && (
            <div className='block rounded-2xl text-base text-red py-1 mx-auto w-full border border-red text-center'>{error}</div>
          )}

          <button type='submit' className='block rounded-2xl text-xl mt-5 text-white py-4 mx-auto w-full bg-blue'>เข้าสู่ระบบ</button>
          <div className='flex flex-row mt-4 text-lg mx-auto'>
            <p className=''>ยังไม่ได้เป็นสมาชิก?</p>&nbsp;<Link href="/register" className='text-blue'>ลงทะเบียน</Link>
          </div>
        </form>

      </div>
    </div>
  )
}

export default RegisterPage;
