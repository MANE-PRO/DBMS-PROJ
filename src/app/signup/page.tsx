"use client"

import Nav from '@/components/Nav';
import SignIn from '@/components/SignIn';
import Signup from '@/components/Signup';
import { useFormik } from 'formik';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react'

type P = {}

const page: FC<P> = () => {

  const [isSignIn, setIsSignIn] = useState(false)

  return <div className="bg-gradient-to-br from-green-800 to-green-900 h-[100vh] w-full">
    <Nav />
    <div className=' flex gap-2 text-white w-full justify-center mx-auto px-10 '>
      <div className='flex flex-col gap-4 w-1/3 self-center'>
        <p className='text-5xl font-bold whitespace-pre-wrap'>Unlocking Nature's Cancer-fighting Potential</p>
        <p className='text-lg'>Explore the power of plant bioactives in the fight against cancer. Our database catalogues nature's remedies, offering insights into potential treatments, prevention strategies, and control measures.</p>
      </div>
      <div className='w-1/3'>
        <Image src={"/signup/background.svg"} height={1000} width={1000} alt="background" />
      </div>
      <div className='w-1/3'>
        { isSignIn ? <Signup /> : <SignIn />}
        <p className='text-white underline text-center' onClick={() => setIsSignIn(!isSignIn)}>{!isSignIn ? "create a new accout" : "already have an account"}</p>
      </div>
    </div>
  </div>
}
export default page;