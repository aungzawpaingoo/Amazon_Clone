import React from 'react'
import CardImage from '../assets/cardImage.jpg'
import bp from '../assets/bp.jpg'
import cl from '../assets/cl.jpg'
import ct from '../assets/ct.jpg'
import el from '../assets/el.jpg'


const OptionsCards = ({title,title2,image1,image2,image3,image4,image1Text,image2Text,image3Text,image4Text}) => {
  return (
    
    <div className='bg-white rounded-md w-80 h-80'> 

     <h2 className='font-bold text-lg px-4 pt-3 pb-0'>{title}</h2>

     <h2 className='font-bold text-lg px-4 pt-0 pb-1'>{title2}</h2>

     <div className='flex justify-evenly py-2'>

     <div>
     <img src={image1} className='object-contain h-20 w-26 rounded-md'/>
     <h4 className='text-xs font-normal'>{image1Text}</h4>
     </div>

     <div>
     <img src={image2} className='object-contain h-20 w-26 rounded-md'/>
     <h4 className='text-xs font-normal'>{image2Text}</h4>
     </div>
      
     </div>  

     <div className='flex justify-evenly py-2'>

     <div>
     <img src={image3} className='object-contain h-20 w-26 rounded-md'/>
     <h4 className='text-xs font-normal'>{image3Text}</h4>
     </div>

     <div>
     <img src={image4} className='object-contain h-20 w-26 rounded-md'/>
     <h4 className='text-xs font-normal'>{image4Text}</h4>
     </div>
      
     </div>

     <h4 className='font-medium text-sm text-blue-600 pl-5 pt-0'>See more</h4>     

    </div>

  )
}

export default OptionsCards