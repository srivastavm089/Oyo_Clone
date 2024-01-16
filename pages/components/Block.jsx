import React from 'react'
import Image from 'next/image'
const Block = ({title, para, logo}) => {
    
  return (
    <div className='w-48 h-full  flex items-center px-2 border-r '>
       <Image src={logo} alt='demo' width={100} height={100} className='w-6 h-6 rounded-full mr-4 ' />
       <div>
        <h3 className='font-bold font text-[12px] whitespace-nowrap'>{title}</h3>
        <p className='text-green-400 text-[10px] line-clamp-1'>{para}</p>
       </div>
    </div>
  )
}

export default Block