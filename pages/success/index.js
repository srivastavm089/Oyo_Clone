import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Link from 'next/link';
const Success = () => {
  return (
    <div className='bg-gray-200 h-screen w-full flex justify-center items-center'>
       <div className='bg-white flex flex-col gap-5 items-center py-10 px-10'>

<CheckCircleOutlineIcon className='w-96 h-36 text-green-500'/>
<p className='text-xl'>{`Hey Abhay Srivastava, `}</p>

<p className='text-3xl font-bold '>Your Order is Confirmed</p>
<p className='w-72  text-center'>We'll send you a shipping confirmation email as soon as your order ships</p>

<Link href="/orders" className='bg-green-500 text-white py-2 px-10' >CHECK STATUS</Link>
       </div>

    </div>
  )
}

export default Success