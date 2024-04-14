"use client"
import Nav from '@/components/Nav';
import SearchForm from '@/components/ui/SearchForm';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import axios from 'axios';
import { useFormik } from 'formik';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC } from 'react'

type P = {}

const Search: FC<P> = () => {

  const router = useRouter()
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues:{
      key:"plant",
      value:""
    },
    onSubmit(values) {
      axios.get(process.env.NEXT_PUBLIC_BASE_URL+"/api/search",{ params: { [values.key] : values.value  } }).then((res)=>{
        console.log(res)
          localStorage.setItem("user", JSON.stringify(res?.data))
          router.push("/search-response?data="+JSON.stringify(res.data))
      }).catch((err)=>{
        console.log(err)
      })
    },
  })
  

  return <div className="bg-gradient-to-br from-green-800 to-green-900 w-full min-h-[110vh]" >
    <Nav />
    <div className=' flex justify-center relative'>
      <Image src={'/signup/background.svg'} height={500} width={500} alt='background' className='absolute' />
      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
        <div className='flex flex-col gap-10 relative top-10 '>
          <select onChange={handleChange} name='key' className="p-2 border-white bg-transparent bg-gray-400 rounded-xl px-4 opacity-50 " value={values.key}>
              <option value="plant">plant</option>
              <option value="cancer">cancer</option>
          </select>
          <p className='text-7xl text-white text-center'>AND</p>
          <SearchForm placeholder='search...' value={values.value} name='value' onChange={handleChange} search={false}  />
        </div>
        <Button children={"Go!"} className=' relative z-20 top-20 self-center bg-white text-black ' />
      </form>
    </div>
  </div>
}
export default Search;