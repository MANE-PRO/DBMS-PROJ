import { FC } from 'react'
import { Input } from './input';
import { CiSearch } from "react-icons/ci";

type P = {
    search: boolean
}

const SearchForm: FC<P> = ({ search }) => {
    return <div className='flex flex-col relative z-10'>
        <div className='flex items-center opacity-60 relative bg-white rounded-2xl w-full min-w-[70vh] '>
            { search == true && <CiSearch size={20} className='left-2 absolute '/> }
            <Input className='px-8 py-4 rounded-2xl'/>
        </div>
    </div>
}
export default SearchForm;