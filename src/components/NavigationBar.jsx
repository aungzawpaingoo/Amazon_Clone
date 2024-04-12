import React from 'react'
import Logo from '../assets/logo.png'
import Location_Icon from '../assets/marker.png' 
import Search_Icon from '../assets/search.png'
import Cart from '../assets/shopping-cart.png'


const NavigationBar = () => {
  return (

    <div className='bg-gray-900 py-2.5 flex items-center'>
    
     <div>
      <img src={Logo} alt='logo' className='h-8 w-40 object-contain items-center'/>
     </div>

     <div>
     <h4 className='text-white text-xs'>Delivering to Yangon 90iu89</h4>
      <div className='flex items-center -ml-1'>
        <img src={Location_Icon} alt='location-icon' className='h-4 w-4' />
        <h4 className='text-white font-bold ml-1'>Update location</h4>
      </div>
     </div>

     <div className='flex'>

        <div>
        <h4 className='bg-gray-300 font-medium text-black py-2 px-4 rounded-l-lg ml-10'>All</h4>
        </div>

        <div>
         <input type='search' placeholder='Search' className='py-2 px-64 text-left'></input>
        </div>

        <div className='py-2 bg-yellow-600 px-4 rounded-r-lg'>
         <img src={Search_Icon} alt='Search-Icon' className='h-5 w-5 items-center object-contain' />
        </div>

     </div>
     
    <div>
    <h4 className='bg-gray-300 font-medium text-black py-2 px-4 rounded-lg ml-6'>All</h4>
    </div>

     <div className='ml-6'>
     <h4 className='text-white text-xs'>Hello,sign in</h4>
     <h4 className='text-white font-bold text-xs'>Account and List</h4>
     </div>


     <div className='ml-8'>
     <h4 className='text-white text-xs'>Returns</h4>
     <h4 className='text-white font-bold text-xs'>& Orders</h4>
     </div>

     <div className='ml-8 items-center'>
        <img src={Cart} alt='location-icon' className='h-4 w-4 items-center' />
        <h4 className='text-white font-bold text-xs -mb-1'>0 Items</h4>
     </div>




    </div>

  )
}

export default NavigationBar