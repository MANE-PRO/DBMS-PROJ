"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC } from 'react'

type P = {}

const Nav: FC<P> = () => {
  const router = useRouter()
  return <div className='flex items-center justify-between p-4'>
    <div className='flex items-center gap-3' onClick={() => router.push("/")}>
      <Image src={'/nav/logo.svg'} height={60} width={60} alt='logo' />
      <p className='text-3xl font-bold text-white '>Oncoplantia</p>
    </div>
    <div>
      <Image src={'/nav/logout.svg'} height={50} width={50} alt='logo' onClick={() => {
        localStorage.clear()
        router.push("/")
      }
      } />
    </div>
  </div>
}
export default Nav;