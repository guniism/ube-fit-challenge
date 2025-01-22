"use client"

import React from 'react'
import { useState } from 'react';
import { UBEFitChallenge } from '../register/page';
import Link from 'next/link';

function RegisterPage() {
  return (
    <div>
      <div className='px-10'>
        <UBEFitChallenge />
        <h2 className='text-center font-medium text-2xl'>เข้าสู่ระบบ</h2>
        <form action="" className='flex flex-col justify-evenly'>
          <h3 className='ml-2 font-normal text-lg mb-1 mt-3'>อีเมล</h3>
          <input className='rounded-2xl p-3 block mx-auto bg-[#F5F5F5] w-full text-gray' type='email' placeholder='กรุณากรอกอีเมล'></input>
          <h3 className='ml-2 font-normal text-lg mb-1 mt-3'>รหัสผ่าน</h3>
          <input className='rounded-2xl p-3 block mx-auto bg-[#F5F5F5] w-full text-gray' type='password' placeholder='กรุณากรอกรหัสผ่าน'></input>
          <button type='submit' className='block rounded-2xl text-xl mt-10 text-white py-4 mx-auto w-full bg-blue'>เข้าสู่ระบบ</button>
          <div className='flex flex-row mt-4 text-lg mx-auto'>
            <p className=''>ยังไม่ได้เป็นสมาชิก?</p>&nbsp;<Link href="/register" className='text-blue'>ลงทะเบียน</Link>
          </div>
        </form>

      </div>
    </div>
  )
}

export default RegisterPage;
