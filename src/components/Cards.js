import React, {  useState } from 'react'
import { useCart, useDispatchCart } from './ContextReducer';

export const Cards = (props) => {

   let disptch = useDispatchCart()
   let data = useCart()
   let options = props.options;
   let priceoptions = Object.keys(options);
    
   
  const [qty , setQty] = useState(1)
  const [size, setSize] = useState("") 


  const handleAddtoCard = async () =>{
    await disptch({type:'ADD',id:props.fooditem._id, name: props.fooditem.name, price: props.finalprice, qty: qty, size: size, img:props.fooditem.img})
     console.log(data)
  }


let finalprice = qty * parseInt(options[size]);

     
  return (
    <div  >
        <div className="card mt-3 inline flex "  style={{"width":"20rem", "maxHeight":"360px"}}>
  <img src={props.fooditem.img } alt="..."  style={{height:"250px", objectFit: 'fill'}}/>
  <div className="card-body">
    <h5 className="card-title">{props.fooditem.name}</h5>
     <div className='container m-auto'  >
      <select className='m-2 w-auto bg-success rounded' onChange={(e) => setQty(e.target.value)} >
        {Array.from(Array(6), (e ,i) =>{
            return(
                <option key={i+1} value={i+1}>{i+1}</option>
            ) 
        })}
        </select>
        <select className='m-2 w-auto rounded' onChange= {(e) => setSize(e.target.value)}>
        {priceoptions.map((data)=>{
          return <option key={data} value={data}>{data}</option>
        })}
         
        </select>
      
        <div className='fs-8 mx-auto position-relative'>₹{finalprice} <span><button className='m-2 w-auto bg-success rounded' onClick={handleAddtoCard}>Add to Cart</button></span></div>
 
     
       
      </div>
  </div>
</div>

    </div>
  )
}

export default Cards;