import React from 'react'
import { useCart } from './cartContext';

export default function Card({cardData}) {
  const { addProductToCart, decrementQuantity, getProductCount} = useCart(); // Access the addProductToCart function
  const divStyle = {
    backgroundImage: `url(${cardData.image})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#ffffff',
  };
  const addProd = ()=>{
    addProductToCart(cardData)
  }
  const removeProd = ()=>{
    decrementQuantity(cardData)
  }
  return (
    <div className='outerCard'>
      <div className='buttonDiv'>
        <button onClick={addProd} className='add'></button>
        <h3 className='count'>{getProductCount(cardData)}</h3>
        <button onClick={removeProd}  className='remove'></button>
      </div>
      <div style={divStyle} className='card'>
      </div>
      <div className='cardDescription'>
          <div>
            <p>{cardData.title}</p>
          </div>
          <div>
            <h3 style={{fontWeight:"bold"}}> CA${cardData.price}</h3>
          </div>
        </div>
    </div>
  )

}
