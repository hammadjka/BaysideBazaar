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
        setCart((prevCart) => prevCart.filter(prod => prod.id !== product.id));
    };
    const decrementQuantity = (product)=>{
        const productIndex = cart.findIndex(item => item.id === product.id);
        if (productIndex !== -1) {
            const updatedCart = cart.map((item, index) => {
                if (index === productIndex) {
                    if(item.quantity > 0){
                        return { ...item, quantity: item.quantity - 1 };
                    }else{
                        removeProductFromCart(product);
                    }
                }
                return item;
            });
            setCart(updatedCart);
        }
    }

    const getProductCount = (product)=>{
        const productIndex = cart.findIndex(item => item.id === product.id);
        if (productIndex === -1){
            return 0
        }
        return cart[productIndex].quantity
    };

  return (
    <CartContext.Provider value={{cart, addProductToCart, removeProductFromCart, decrementQuantity, getProductCount}}>
      {children}
    </CartContext.Provider>
  );
};
