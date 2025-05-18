import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import PopularFoods from '../components/PopularFoods'
import Testimonail from '../components/Testimonail'
import Footer from '../components/Footer'

const Home = () => {
  return (
    
    <div className='bg-[#fffdf4] '>
    <Hero/>
    <Features/>
    <PopularFoods/>
    <Testimonail/>
    <div className='mx-auto max-w-[1440px] px-6 lg:px-12'>
     <Footer/>
    </div>
    </div>
  )
}

export default Home
