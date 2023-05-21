import React from 'react'

export const Cards = () => {
  return (
    <div>
        <div className="card mt-3" style={{"width":"18rem", "maxHeight":"360px"}}>
  <img src="https://turmerickitchen.files.wordpress.com/2012/08/marinated-grilled-matar-panee-recipe-1024x1024.jpg" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">panner tika</h5>
    <p>HEY THIS IS PANNER TIKA</p>
     
     <div className='container w-100 inlinex'>
      <select className='m-2 h-100 w-30 bg-success rounded '>
        {Array.from(Array(6), (e ,i) =>{
            return(
                <option key={i+1} value={i+1}>{i+1}</option>
            ) 
        })}
        </select>
        <select className='m-2 h-100  bg-success rounded '>
          <option>half</option>
          <option>Full</option>
          
        </select>
        <div className='d-inline fs-5'>Total Price</div>
       
      </div>
     
  </div>
</div>

    </div>
  )
}

export default Cards;