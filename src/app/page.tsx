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
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.push('/signup')
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
