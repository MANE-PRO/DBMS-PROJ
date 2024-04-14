"use client"
import Nav from '@/components/Nav';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent } from '@/components/ui/carousel';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { FC } from 'react'

type P = {}

export interface Vendor {
    PLANTS_NAME: string;
    SID: number;
    SNAME: string;
    SPHONE: string;
    CITY: string;
    STREET_NO: string;
    ZIP: string;
    COUNTRY: string;
}

const Checkout: FC<P> = () => {
    const searchParams = useSearchParams();
    const vendors: Vendor[] = JSON.parse(searchParams.get("data")!)

    return <div className="bg-gradient-to-br from-green-800 to-green-900 bg-blur w-full min-h-[90vh]">
        <Nav />
        <div className=' flex justify-center relative '>
            <Image src={'/signup/background.svg'} height={40} width={500} alt='background' className=' absolute ' />
            <div className='flex justify-between w-full shadow-xl max-w-7xl pt-20 pb-10 rounded-3xl z-30 bg-gray-50 bg-opacity-10 border-white border relative bottom-4 '>
                <Image src={'/search-response/leftImage.svg'} width={500} height={850} alt='response' className='relative z-10 w-1/3 ' />

                <div className='w-1/3 text-4xl relative z-50 flex flex-col gap-8 text-white right-20 font-bold self-center '>
                    <Carousel className="w-full">
                        {
                            vendors.map((obj) => {
                                return <CarouselContent className='flex flex-col gap-2 text-xl '>
                                    <h1>Check-out</h1>
                                    <h1>Name of seller: {obj.SNAME}</h1>
                                    <h1>Phone no: {obj.SPHONE}</h1>
                                    <h1>Street no: {obj.STREET_NO}</h1>
                                    <Input placeholder='Delivery Address' />
                                    <h1>Playment mode: {"Cash on Delivery"}</h1>
                                    <Button children="Buy now" />
                                </CarouselContent>
                            })
                        }
                    </Carousel>
                </div>
                <div>
                </div>
            </div>
        </div>
    </div>
}
export default Checkout;