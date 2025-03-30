"use client"
import Nav from '@/components/Nav'
import AuthRouter from '@/components/auth/AuthRouter'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import axios from 'axios'
import { validateEmail } from '@/util/localSet'

export default function SearchResponse() {
    const searchParams = useSearchParams();
    const router = useRouter()
    if (!validateEmail()) {
        router.push("signup");
    }
    console.log(localStorage.getItem('search'))
    const data: { SCIENTIFIC_NAME: string, MEDICINAL_RATING: string, BIOACTIVITY: string }[] = JSON.parse(localStorage.getItem('search')!)

    function callVendor(plantName: string) {
        axios.get(process.env.NEXT_PUBLIC_BASE_URL + "/api/vendor", { params: { plant: plantName } }).then((res) => {
            router.push("/checkout?data=" + JSON.stringify(res.data))
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <AuthRouter>
            <div className="bg-gradient-to-br from-green-800 to-green-900 bg-blur w-full min-h-[90vh]">
                <Nav />
                <div className=' flex justify-center relative '>
                    <Image src={'/signup/background.svg'} height={40} width={500} alt='background' className=' absolute ' />
                    <div className='flex justify-between w-full shadow-xl max-w-7xl pt-20 rounded-3xl z-30 bg-gray-50 bg-opacity-10 border-white border relative bottom-4 '>
                        <Image src={'/search-response/leftImage.svg'} width={500} height={850} alt='response' className='relative z-10 w-1/3 ' />
                        <div className='w-1/3 text-4xl relative z-50 flex flex-col gap-8 text-white right-20 font-bold self-center '>
                            <Carousel className="w-full max-w-md">
                                <CarouselContent className='flex gap-2 text-xl w-[100vh] '>
                                    {
                                        data.map((d, index) => {
                                            return <CarouselItem key={index} className='w-[100vh] flex flex-col gap-2 text-xl ' >
                                                <div key={index} className='flex flex-col gap-2 text-xl '>
                                                    <p className=' whitespace-nowrap p-1 rounded-full bg-white'></p>
                                                    <p className='whitespace-nowrap'>Scientific Name: {d?.SCIENTIFIC_NAME || ""}</p>
                                                    <p className='whitespace-nowrap'>Medicinal Rating: {d?.MEDICINAL_RATING || ""}</p>
                                                    <p className='whitespace-nowrap'>Bio Activity: {d?.BIOACTIVITY || ""}</p>
                                                </div>
                                                <Button onClick={() => callVendor(d?.SCIENTIFIC_NAME)} className='text-2xl font-bold bg-white w-fit text-black p-1 px-3 opacity-100 '>Buy Now</Button>
                                            </CarouselItem>
                                        })
                                    }

                                </CarouselContent>
                            </Carousel>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthRouter>
    )
}
