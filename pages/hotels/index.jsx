import React from 'react'
import HotelCard from '../components/HotelCard'
import Header1 from '../components/Header1'

const Hotels = ({hotels}) => {
 console.log(hotels)
  return (
    <div className=' m-5 '>
        <Header1/>
   <div className='mt-2'>

    {
      hotels && hotels.map((item)=>{
        return    <HotelCard   data={item} />
      })
    }
   </div>

    </div>
  )
}

export async function getServerSideProps(ctx){
  let res = await fetch(`${process.env.BASE_URL}/api/hotels?city=${ctx.query.city}`)

   res =await res.json()

 
 return{
  props:{
    hotels:res.hotels
  }
 }
}

export default Hotels