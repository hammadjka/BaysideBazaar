'use client'
import React from 'react'
import OrderSummary from './orderSummary'
import { useCart } from '../cartContext';

export default function Checkout() {
  const {cart} = useCart(); 

  return (
    <div style={{width:"100%",}}>
      {cart.length > 0 && <OrderSummary/>}
      {cart.length == 0 && 
        <div style={{display:"flex",  marginTop:"calc(50px + var(--navbarHeight))", justifyContent:"center", width:"100%"}}>
          <h1>No products in cart</h1>
        </div>}
    </div>
  )
}
