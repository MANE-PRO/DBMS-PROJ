import {FC} from 'react'
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useFormik } from 'formik';
type P = {}
const Signup:FC<P> =()=>{
  
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues:{
      name: '',
      gender: "",
      age: 0,
      email:"",
      country:""
    },
    onSubmit(values) {
        
    },
  })

  return <form className='w-full flex flex-col' onSubmit={handleSubmit}>
    <h1 className='text-6xl font-bold text-center '>Signup</h1>
    <div className='flex flex-col gap-4 mt-10 '>
        <Input name='name' value={values.name} onChange={handleChange} className='bg-gray-300 placeholder-gray-500::placeholder' placeholder='Name'/>
        <Input name='gender' value={values.email} onChange={handleChange} className='bg-gray-300 placeholder-gray-500::placeholder' placeholder='Gender'/>
        <Input name='age' type='number' value={values.age} onChange={handleChange} className='bg-gray-300 placeholder-gray-500::placeholder' placeholder='Age'/>
        <Input name='email' value={values.email} onChange={handleChange} className='bg-gray-300 placeholder-gray-500::placeholder' placeholder='Email-id'/>
        <Input name='country' value={values.country} onChange={handleChange} className='bg-gray-300 placeholder-gray-500::placeholder' placeholder='Country'/>
    </div>

    <Button children="Sign-up" className='self-center mt-5 bg-white text-green-600' />
</form>
}
export default Signup;