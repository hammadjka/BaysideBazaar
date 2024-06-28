import React from 'react'
import { useCart } from '../cartContext';

export default function bagItem({itemData}) {
  const { addProductToCart, decrementQuantity, getProductCount} = useCart(); // Access the addProductToCart function
  const divStyle = {
    backgroundImage: `url(${itemData.image})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#ffffff',
  };
  const addProd = ()=>{
    addProductToCart(itemData)
  }
  const removeProd = ()=>{
    decrementQuantity(itemData)
  }
  return (
    <div className='outerBagItem'>
        <div style={divStyle} className='bagItem'>
        </div>
        <div className='itemDesc'>
            <div>   
                <p>{itemData.title}</p>
            </div>
            <div>
                <h3 style={{fontWeight:"bold"}}> CA${itemData.price}</h3>
            </div>
            <div className='cartButtonDiv'>
            <button onClick={addProd} className='add'></button>
            <h3 className='count'>{getProductCount(itemData)}</h3>
            <button onClick={removeProd}  className='remove'></button>
      </div>
        </div>
    </div>
  )

}
