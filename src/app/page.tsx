"use client"
import axiosServices from "@/util/axios";
import { setLocalStorage } from "@/util/localSet";
import axios from "axios";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect } from "react";
import AuthRouter from "@/components/auth/AuthRouter";

const data = {
  "email": "himanshu@gmail.com",
  "password": "Himanshu"
}

export default function Home() {
  useEffect(() => {
    // setLocalStorage()
    axios.post(process.env.NEXT_PUBLIC_BASE_URL + '/api/signin', data).then((res) => {
      console.log(res)
    })
  }, [])

  return (
      <Carousel>
        <CarouselContent className="text-center p-8">
          <CarouselItem>Himanshu</CarouselItem>
          <CarouselItem>Akhil</CarouselItem>
          <CarouselItem>Aman</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
  );
}
