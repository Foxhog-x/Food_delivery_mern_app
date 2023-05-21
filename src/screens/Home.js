import React from 'react'
import Footer from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Cards } from '../components/Cards'
import Carousal from '../components/Carousal'

export const Home = () => {
  return (

    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousal/>
      </div>
      <div className='m-3'>
      <Cards/>
      </div>  
      <div> 
      <Footer/>
      </div>
     

    </div>
  )
}
