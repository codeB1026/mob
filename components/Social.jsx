import Link from 'next/link'
import {FaFacebookF, FaTwitter, FaLinkedinIn} from 'react-icons/fa'


const Social = () => {
  return (
    <div className='w-full h-full '>
        <div className='flex items-center justify-center text-primary text-[2rem] gap-4'>
            <Link
             href={'/'}
            >
                <FaFacebookF className='hover:text-green-400 ease-in duration-300' />
            </Link>
            <Link
             href={'/'}
            >
               <FaTwitter className='hover:text-green-400 ease-in duration-300' />
            </Link>
            <Link
             href={'/'}
            >
                <FaLinkedinIn className='hover:text-green-400 ease-in duration-300' />
            </Link>
           
            
            
        </div>
    </div>
  )
}

export default Social