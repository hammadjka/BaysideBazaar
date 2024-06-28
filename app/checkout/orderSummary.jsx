import { useCart } from '../cartContext';
import BagItem from './bagItem';

import React from 'react'

export default function OrderSummary() {
    const {cart, clearCart, addProductToCart, decrementQuantity, removeProductFromCart, getProductCount} = useCart(); 
    const getTotal = ()=>{
      let total = 0
      cart.forEach(element => {
        total += element.price * element.quantity
      });
      return total.toFixed(2)
    }
    const getTax = (tax)=>{
      return (getTotal() * tax).toFixed(2)
    }
    const gst = parseFloat(getTax(0.05))
    const pst = parseFloat(getTax(0.07))
    const ship = parseFloat(getTax(0.1))
    const getOrderTotal = ()=>{
      return (gst + pst + ship + parseFloat(getTotal())).toFixed(2)
    }
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
          <h1>Order summary</h1>
          <div className='orderDetails'>
            <h3>Subtotal: ${getTotal()}</h3>
            <h3>Estimated GST/HST: ${gst}</h3>
            <h3>Estimated PST/RST/QST: ${pst}</h3>
            <h3>Shipping & Handling: ${ship}</h3>
            <h3>Order Total: ${getOrderTotal()}</h3>
          </div>
          <h1>Shipping Address</h1>
          <div className='orderDetails'>
            <div style={{display:"flex"}}><h3 style={{color:"#31d1a1"}}>RESEMBLE</h3> <h3 style={{color:"#569b87"}}>.AI</h3></div>
            <h3>301 Byte Boulevard</h3>
            <h3>Suite 404 (Not Found)</h3>
            <h3>Mountain View, CA 94040</h3>
          </div>
          <div style={{display:"flex", justifyContent:"center"}}>
            <button onClick={clearCart} className='button-54'>Checkout</button>
          </div>
        </div>
      </div>
    )
}
