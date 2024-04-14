"use client"
import { setLocalStorage } from "@/util/localSet";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {

  useEffect(()=>{
    setLocalStorage()
  },[])

  return (
    <div>
      Hello
    </div>
  );
}
