import Nav from '@/components/Nav';
import SearchForm from '@/components/ui/SearchForm';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { FC } from 'react'

type P = {}

const Search: FC<P> = () => {

  return <div className="bg-gradient-to-br from-green-800 to-green-900 w-full min-h-[110vh]" >
    <Nav />
    <div className=' flex justify-center relative'>
      <Image src={'/signup/background.svg'} height={500} width={500} alt='background' className='absolute' />
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-10 relative top-10 '>
          <SearchForm search={true}/>
          <p className='text-7xl text-white text-center'>OR</p>
          <SearchForm search={true}/>
          <SearchForm search={false} />
        </div>
        <Button children={"Go!"} className=' relative z-20 top-20 self-center bg-white text-black ' />
      </div>
    </div>
  </div>
}
export default Search;