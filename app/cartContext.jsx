'use client'
import React, { createContext, useState, useContext } from 'react';


const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addProductToCart = (product) => {
        const productIndex = cart.findIndex(item => item.id === product.id);

        if (productIndex !== -1) {
            const updatedCart = cart.map((item, index) => {
                if (index === productIndex) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            setCart(updatedCart);
        } else {
            const productToAdd = {...product, quantity: 1};
            setCart([...cart, productToAdd]);
        }
    };

    const removeProductFromCart = (product) => {
        console.log(product)
        const newCart = cart.filter(prod => prod.id !== product.id)
        setCart(newCart)
    };
    const decrementQuantity = (product)=>{
        const productIndex = cart.findIndex(item => item.id === product.id);
        if (productIndex !== -1) {
            const updatedCart = [...cart];
            if (updatedCart[productIndex].quantity > 1) {
                updatedCart[productIndex] = { 
                    ...updatedCart[productIndex], 
                    quantity: updatedCart[productIndex].quantity - 1 
                };
            } else {
                updatedCart.splice(productIndex, 1);
            }
            setCart(updatedCart);
        }
    }

    const clearCart = ()=>{
        setCart([])
    }
    const getProductCount = (product)=>{
        const productIndex = cart.findIndex(item => item.id === product.id);
        if (productIndex === -1){
            return 0
        }
        return cart[productIndex].quantity
    };

  return (
    <CartContext.Provider value={{cart, clearCart, addProductToCart, removeProductFromCart, decrementQuantity, getProductCount}}>
      {children}
    </CartContext.Provider>
  );
};
