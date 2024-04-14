import {FC} from 'react'
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useFormik } from 'formik';
import axiosServices from '@/util/axios';
import axios from 'axios';
import { useRouter } from 'next/navigation';

type P = {}

const SingIn:FC<P> =()=>{
  const router = useRouter()
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues:{
      email:"",
      password:""
    },
    onSubmit(values) {
      axios.post(process.env.NEXT_PUBLIC_BASE_URL+"/api/signin",values).then((res)=>{
        console.log(res)
        if(Object.keys(res?.data).length == 11){
          localStorage.setItem("user", JSON.stringify(res?.data))
          router.push("/search")
        }
      }).catch((err)=>{
        console.log(err)
      })
    },
  })


  return <form className='w-full flex flex-col' onSubmit={handleSubmit}>
    <h1 className='text-6xl font-bold text-center '>Signin</h1>
    <div className='flex flex-col gap-4 mt-10 '>
        <Input name='email' value={values.email} onChange={handleChange} className='bg-gray-300 placeholder-gray-500::placeholder' placeholder='Email-id'/>
        <Input name='password' value={values.password} onChange={handleChange} className='bg-gray-300 placeholder-gray-500::placeholder' placeholder='Password'/>
    </div>

    <Button children="Sign-in" className='self-center mt-5 bg-white text-green-600' />

</form>
}
export default SingIn;