"use client"
import axiosServices from "@/util/axios";
import { setLocalStorage } from "@/util/localSet";
import axios from "axios";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {

  useEffect(()=>{
    setLocalStorage()
  },[])
  const data = {
    "email":"himanshu@gmail.com",
    "password":"Himanshu"
  }

  useEffect(()=>{
    axios.post(process.env.NEXT_PUBLIC_BASE_URL+'/api/signin',data).then((res)=>{
      console.log(res)
    })
  },[])

  return (
    <div>
      Hello
    </div>
  );
}
