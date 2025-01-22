"use client"

import React from 'react'
import { useState } from 'react';
import Link from 'next/link';

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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    if(password != confirmPassword){
      setError("รหัสผ่านไม่ตรงกัน");
      return;
    }
  }

  return (
    <div>
      <div className='px-10'>
        <UBEFitChallenge />
        <h2 className='text-center font-medium text-2xl'>สมัครสมาชิก</h2>
        <form action="" className='flex flex-col justify-evenly'>
          <h3 className='ml-2 font-normal text-lg mb-1 mt-3'>ชื่อ</h3>
          <input className='rounded-2xl p-3 block mx-auto bg-[#F5F5F5] w-full text-gray' type='text' placeholder='กรุณากรอกชื่อ'></input>
          <h3 className='ml-2 font-normal text-lg mb-1 mt-3'>อีเมล</h3>
          <input className='rounded-2xl p-3 block mx-auto bg-[#F5F5F5] w-full text-gray' type='email' placeholder='กรุณากรอกอีเมล'></input>
          <h3 className='ml-2 font-normal text-lg mb-1 mt-3'>รหัสผ่าน</h3>
          <input className='rounded-2xl p-3 block mx-auto bg-[#F5F5F5] w-full text-gray' type='password' placeholder='กรุณากรอกรหัสผ่าน'></input>
          <h3 className='ml-2 font-normal text-lg mb-1 mt-3'>ยืนยันรหัสผ่าน</h3>
          <input className='rounded-2xl p-3 block mx-auto bg-[#F5F5F5] w-full text-gray' type='password' placeholder='กรุณายืนยันหัสผ่าน'></input>
          <button type='submit' className='block rounded-2xl text-xl mt-10 text-white py-4 mx-auto w-full bg-blue'>ลงทะเบียน</button>
          <div className='flex flex-row mt-4 text-lg mx-auto'>
            <p className=''>เป็นสมาชิกอยู่แล้ว?</p>&nbsp;<Link href="login" className='text-blue'>เข้าสู่ระบบ</Link>
          </div>
        </form>

      </div>
    </div>
  )
}

export default RegisterPage;
