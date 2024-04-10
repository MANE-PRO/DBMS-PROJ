import Image from 'next/image';
import { FC } from 'react'

type P = {}

const Nav: FC<P> = () => {
  return <div className='flex items-center justify-between p-10'>
      <div className='flex items-center gap-3'>
        <Image src={'/nav/logo.svg'} height={60} width={60} alt='logo' />
        <p className='text-3xl font-bold text-white '>Oncoplantia</p>
      </div>
      <div>
        <Image src={'/nav/ham.svg'} height={50} width={50} alt='logo' />
      </div>
  </div>
}
export default Nav;