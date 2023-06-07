import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Cards } from '../components/Cards'
import Carousal from '../components/Carousal'

export const Home = () => {
  const [fooditem, setfooditem] = useState([]);
  const [foodCategory, setfoodCategory] = useState([]);

  const loadData = async (req, res) =>{
    let response = await fetch('http://localhost:5000/api/foodData',{
      method: 'POST',
      headers:{
        'content-type' : 'application/json'
      }
    });

    let data = await response.json();
    console.log(data[0]);
     
  }
  
  useEffect(()=>{
    loadData()
  },[])
      
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

