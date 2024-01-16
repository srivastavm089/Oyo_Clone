import React, { useEffect, useState } from 'react'
import Header1 from './components/Header1'
import Header2 from './components/Header2'
import Header3 from './components/Header3'
import Image from 'next/image'
import Head from 'next/head'
import Header4 from './components/Header4'
import Footer from './components/Footer'

const Home = () => {
  const [data, setData] = useState(1)
  return (
    <div>
      <Head>
        <title>OYO : India's best online hotel Booking Site For Sanitized Stay</title>
     
      </Head>
 <Header1/>
 <Header2/>
 <Header3/>
 <div className='mx-20 my-10'>
 <Image src={"/banner1.avif"} alt='banner1' width={200} height={200} className='h-80 w-full'></Image>
 </div>

 <div className='mx-20 my-10'>
 <Image src={"/banner2.avif"} alt='banner1' width={200} height={200} className='h-40 w-full'></Image>
 </div>

 
 <Header4/>
 <Footer/>

    </div>
  )
}

export default Home