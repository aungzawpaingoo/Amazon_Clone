import React from 'react'
import TodayDealCard from './TodayDealCard'

const KitchenAppliances = () => {
  return (

    <div className='bg-gray-100 py-0'>
    
    <div className='bg-white mx-7 rounded-md pb-8'>
    

    <h4 className='py-4 pl-4 font-bold text-2xl font-san items-center'>Today's Deals</h4>


    <div className='py-4 mx-4 flex'>
     
     <TodayDealCard/>

     <TodayDealCard/>

     <TodayDealCard/>

     <TodayDealCard/>

     <TodayDealCard/>

     

    </div>

    </div>

    </div>

  )
}

export default KitchenAppliances