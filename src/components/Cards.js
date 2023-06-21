import React from 'react'

export const Cards = (props) => {
   let options = props.options;
   let priceoptions = Object.keys(options);
     
  return (
    <div  >
        <div className="card mt-3 inline flex "  style={{"width":"20rem", "maxHeight":"360px"}}>
  <img src={props.imgSrc} alt="..."  style={{height:"250px", objectFit: 'fill'}}/>
  <div className="card-body">
    <h5 className="card-title">{props.foodName}</h5>
     <div className='container' >
      <select className='m-2 w-auto bg-success rounded  '>
        {Array.from(Array(6), (e ,i) =>{
            return(
                <option key={i+1} value={i+1}>{i+1}</option>
            ) 
        })}
        </select>
        <select className='m-2 w-auto rounded'>
        {priceoptions.map((data)=>{
          return <option key={data} value={data}>{data}</option>
        })}
         
        </select>
      
        <div className='fs-5'>Price</div>
       
      </div>
     
  </div>
</div>

    </div>
  )
}

export default Cards;