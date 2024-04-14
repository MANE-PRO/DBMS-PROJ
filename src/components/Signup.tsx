import {FC} from 'react'
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useFormik } from 'formik';
import axios from 'axios';
import { useRouter } from 'next/navigation';
type P = {}
const Signup:FC<P> =()=>{
  const router = useRouter();
  
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues:{
      name: '',
      gender: "",
      age: 0,
      email:"",
      country:""
    },
    onSubmit(values) {
      axios.post(process.env.NEXT_PUBLIC_BASE_URL+"/api/signup",values).then((res)=>{
        console.log(res)
        if(res?.data?.status == "success"){
          localStorage.setItem("user", JSON.stringify(res?.data))
          router.push("/search")
        }
      }).catch((err)=>{
        console.log(err)
      })
    },
  })

  return <form className='w-full flex flex-col' onSubmit={handleSubmit}>
    <h1 className='text-6xl font-bold text-center '>Signup</h1>
    <div className='flex flex-col gap-4 mt-10 '>
        <Input name='name' value={values.name} onChange={handleChange} className='bg-gray-300 placeholder-gray-500::placeholder' placeholder='Name'/>
        <Input name='gender' value={values.gender} onChange={handleChange} className='bg-gray-300 placeholder-gray-500::placeholder' placeholder='Gender'/>
        <Input name='age' type='number' value={values.age} onChange={handleChange} className='bg-gray-300 placeholder-gray-500::placeholder' placeholder='Age'/>
        <Input name='email' value={values.email} onChange={handleChange} className='bg-gray-300 placeholder-gray-500::placeholder' placeholder='Email-id'/>
        <Input name='country' value={values.country} onChange={handleChange} className='bg-gray-300 placeholder-gray-500::placeholder' placeholder='Country'/>
    </div>

    <Button children="Sign-up" className='self-center mt-5 bg-white text-green-600' />
</form>
}
export default Signup;