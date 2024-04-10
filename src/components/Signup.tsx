import {FC} from 'react'
import { Input } from './ui/input';
import { Button } from './ui/button';
type P = {}
const Signup:FC<P> =()=>{
  return <form className='w-full flex flex-col'>
    <h1 className='text-6xl font-bold text-center '>Signup</h1>
    <div className='flex flex-col gap-4 mt-10 '>
        <Input className='bg-gray-300 placeholder-gray-500::placeholder' placeholder='Name'/>
        <Input  className='bg-gray-300 placeholder-gray-500::placeholder' placeholder='Gender'/>
        <Input className='bg-gray-300 placeholder-gray-500::placeholder' placeholder='Age'/>
        <Input className='bg-gray-300 placeholder-gray-500::placeholder' placeholder='Email-id'/>
        <Input className='bg-gray-300 placeholder-gray-500::placeholder' placeholder='Country'/>
    </div>

    <Button children="Sign-up" className='self-center mt-5 bg-white text-green-600' />
</form>
}
export default Signup;