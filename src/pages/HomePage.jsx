import React from 'react'
import BannerImageCarousel from '../components/BannerImageCarousel'
import OptionsCards from '../components/OptionsCards'
import OptionsSection from '../components/OptionsSection'
import TodayDeals from '../components/TodayDeals'
import KitchenAppliances from '../components/KitchenAppliances'
import OtherProductsNearYou from '../components/OtherProductsNearYou'

const HomePage = () => {
  return (
    
    <div className='bg-gray-200'>
    <div className='bg-white'>
 
    <BannerImageCarousel/>

    <OptionsSection/>

    <TodayDeals/>

    <KitchenAppliances/>

    <OtherProductsNearYou/>

    </div>
    </div>

  )
}

export default HomePage