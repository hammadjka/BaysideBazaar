'use client'
import React from 'react'
import { useCart } from '../cartContext';
import BagItem from './bagItem';

export default function Checkout() {
  const {cart, addProductToCart, decrementQuantity, removeProductFromCart, getProductCount} = useCart(); 
  console.log('useCart in Checkout:', cart.length);
  return (
    <div className='checkoutPage'>
      <div className='orderSummary'>
        <h2>My Bag</h2>
        <div className='baggedItems'>
          {cart.map((product)=>{
            return(
              <BagItem key={product.id} itemData={product} />
            )

          })}
        </div>
      </div>
      <div className='billing'>
      </div>
    </div>
  )
}
