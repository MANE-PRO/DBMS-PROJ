"use client"
import Nav from '@/components/Nav'
import AuthRouter from '@/components/auth/AuthRouter'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function SearchResponse() {
    return (
        <AuthRouter>
            <div className="bg-gradient-to-br from-green-800 to-green-900 bg-blur w-full min-h-[90vh]">
                <Nav />
                <div className=' flex justify-center relative '>
                    <Image src={'/signup/background.svg'} height={40} width={500} alt='background' className=' absolute ' />
                    <div className='flex justify-between w-full shadow-xl max-w-7xl pt-20 rounded-3xl z-30 bg-gray-50 bg-opacity-10 border-white border relative bottom-4 '>
                        <Image src={'/search-response/leftImage.svg'} width={500} height={850} alt='response' className='relative z-10 w-1/3 ' />
                        <div className='w-1/3 text-4xl relative z-50 flex flex-col gap-8 text-white right-20 font-bold self-center '>
                            {
                                [...Array(5)].map((d, index) => {
                                    return <div key={index} className='flex items-center gap-2'>
                                        <p className='p-1 rounded-full bg-white'></p>
                                        <p>mutagenesis</p>
                                    </div>
                                })
                            }
                            <Button className='text-2xl font-bold bg-white w-fit text-black p-1 px-3 opacity-100 '>Buy Now</Button>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthRouter>
    )
}
