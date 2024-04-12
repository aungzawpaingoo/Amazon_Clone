import React from 'react'
import BannerImage from '../assets/bannerImage.jpg'
import BannerCards from './BannerCards'
import bp from '../assets/bp.jpg'
import cl from '../assets/cl.jpg'
import ct from '../assets/ct.jpg'
import el from '../assets/el.jpg'
import fl from '../assets/fl.jpg'
import fridge from '../assets/fridge.jpg'
import fur from '../assets/fur.jpg'
import fw from '../assets/fw.jpg'
import ha from '../assets/ha.jpg'
import la from '../assets/la.jpg'
import mw from '../assets/mw.jpg'
import t from '../assets/t.jpg'
import toy from '../assets/toy.jpg'
import w from '../assets/w.jpg'
import wm from '../assets/wm.jpg' 




const BannerImageCarousel = () => {

 const bannerCardsData = [

 {
    title: 'Appliances from your home',
    title2: 'Up to 55% off' ,
    image1: bp,
    image1Text: 'Bathrooms',
    image2: fridge,
    image2Text: 'Bathrooms',
    image3: mw,
    image3Text: 'Bathrooms',
    image4: wm,
    image4Text: 'Bathrooms',
 },

 {
    title: 'Styles for men',
    title2:'Up to 60% off ',
    image1: cl,
    image1Text: 'Bathrooms',
    image2: fw,
    image2Text: 'Bathrooms',
    image3: w,
    image3Text: 'Bathrooms',
    image4: bp,
    image4Text: 'Bathrooms',
 },

 {
    title: 'All your home needs',
    title2:'Starting $99',
    image1: ct,
    image1Text: 'Bathrooms',
    image2: ha,
    image2Text: 'Bathrooms',
    image3: t,
    image3Text: 'Bathrooms',
    image4: el,
    image4Text: 'Bathrooms',
 },

 {
    title: 'Revamp your home in style',
    title2:'Starting $50',
    image1: fl,
    image1Text: 'Bathrooms',
    image2: toy,
    image2Text: 'Bathrooms',
    image3: fur,
    image3Text: 'Bathrooms',
    image4: la,
    image4Text: 'Bathrooms',
 },



 ];



  return (

   <div className="bg-cover bg-center bg-no-repeat h-full relative" style={{backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 40%, rgba(255,255,255,1) 100%), url(${BannerImage})`}}>

     <div className='flex justify-around pt-96'>
     
     {bannerCardsData.map((cardData, index) => (
     <BannerCards
     key={index}
     title={cardData.title}
     title2={cardData.title2}
     image1={cardData.image1}
     image1Text={cardData.image1Text}
     image2={cardData.image2}
     image2Text={cardData.image2Text}
     image3={cardData.image3}
     image3Text={cardData.image3Text}
     image4={cardData.image4}
     image4Text={cardData.image4Text}
     />
     ))}

     
     
     </div>

    </div>

  )
}

export default BannerImageCarousel