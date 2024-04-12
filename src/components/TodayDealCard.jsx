import React from 'react';
import Image from '../assets/mobile.webp';

const TodayDealCard = () => {
  return (

    <div className='bg-gray-900 w-60 h-64 rounded-lg flex flex-col justify-center items-center mx-4'>

      <img src={Image} className='h-40' alt='Deal' />

      <div className='flex py-2'>

        <h4 className='bg-red-800 rounded-md px-4 text-white font-normal'>45% Off</h4>

        <h4 className='font-normal text-sm pl-3 text-white'>Limited Time Deal</h4>

      </div>

      <div className='flex py-1'>

        <h4 className='px-2 text-base text-white font-bold'>Now : $100</h4>

        <h4 className='px-2 text-base text-white font-medium line-through'>Original : $150</h4>

      </div>



    </div>
  );
};

export default TodayDealCard;
