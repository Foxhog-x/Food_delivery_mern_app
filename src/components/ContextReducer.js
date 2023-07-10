import React, { useEffect, createContext, useContext, useReducer } from 'react'
 

const CartStateContext = createContext();
const CartDispatchContext = createContext();

 
const reducer = (state, action)=>{
  switch (action.type) {
    case 'ADD':
      return([...state, {id:action._id, name: action.name, price: action.price, qty: action.qty, size: action.size, img: action.img} ]);
  }
     
}

export const CartProvider = ({children}) => {

    const[state, dispatch] = useReducer(reducer, [])
    
  return (
    <CartDispatchContext.Provider value={dispatch}>
        <CartStateContext.Provider value={state}>
            {children}
        </CartStateContext.Provider>
    </CartDispatchContext.Provider>
    
  )
}



 export const useCart = () => useContext(CartStateContext);
 export const useDispatchCart = () => useContext(CartDispatchContext)