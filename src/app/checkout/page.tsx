"use client"
import Nav from '@/components/Nav';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { FC } from 'react'
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from '@/components/ui/toaster';
import { validateEmail } from '@/util/localSet';

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
    const { toast } = useToast()
    const router = useRouter()
    if(!validateEmail()){
        router.push("/signup");
    }

    function createToast() {
        toast({
            title: "Scheduled: delivery ",
            description: "item will be deliver on 3 Days",
            action: (
                <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
        })
        router.push("/search")
    }

    return <div className="bg-gradient-to-br from-green-800 to-green-900 bg-blur w-full min-h-[90vh]">
        {/* <Toaster /> */}
        <Nav />
        <div className=' flex justify-center relative '>
            <Image src={'/signup/background.svg'} height={40} width={500} alt='background' className=' absolute ' />
            <div className='flex justify-between w-full shadow-xl max-w-7xl pt-20 pb-10 rounded-3xl z-30 bg-gray-50 bg-opacity-10 border-white border relative bottom-4 '>
                <Image src={'/search-response/leftImage.svg'} width={500} height={850} alt='response' className='relative z-10 w-1/3 ' />

                <div className='w-2/3 text-4xl relative z-50 flex flex-col gap-8 text-white pr-10 font-bold self-center '>
                    <Carousel className="w-full">
                        {
                            vendors.map((obj, index) => {
                                return <CarouselContent key={index} className='flex flex-col gap-2 text-xl '>
                                    <CarouselItem className='w-[100vh] flex flex-col gap-2 text-xl ' >
                                        <h1>Check-out</h1>
                                        <h1>Name of seller: {obj.SNAME}</h1>
                                        <h1>Phone no: {obj.SPHONE}</h1>
                                        <h1>Street no: {obj.STREET_NO}</h1>
                                        <Input className='w-2/3' placeholder='Delivery Address' />
                                        <h1>Playment mode: {"Cash on Delivery"}</h1>
                                        <Button
                                            className='w-2/3'
                                            children="Buy now"
                                            onClick={createToast} />
                                    </CarouselItem>
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