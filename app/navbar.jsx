'use client'
import Image from 'next/image'
import logo from '../public/cartLogo.svg'
import Link from "next/link";
import React from 'react'
import { usePathname } from 'next/navigation'

export default function navbar() {
    const currentPath = usePathname();

    const isActive = (href) => {
        return currentPath == `${href}` ? "active" : ""
    };
    return (
        <nav className="nav">
                <div className="logo">
                <Image
                    src={logo}
                    width={50}
                    height={50}
                    quality={100}
                    alt="main logo picture of a cart"
                />
                <h2 style={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>Bayside</h2> 
                <h2 style={ {fontFamily:"Georgia, 'Times New Roman', Times, serif", color:"#ee6f57"}}>Bazaar</h2>
                </div>
            <div className="links">
                <Link href={"/"}> <h5  className={`heroTitle ${isActive('/')}`}>All Products</h5></Link>
                <Link href={"/mens"}> <h5 className={`heroTitle  ${isActive('/mens')}`}>Men's</h5></Link>
                <Link href={"/womens"}> <h5 className={`heroTitle  ${isActive('/womens')}`}>Women's</h5></Link>
                <Link href={"/jewelery"}> <h5 className={`heroTitle  ${isActive('/jewelery')}`}>Jewelery</h5></Link>
                <Link href={"/electronics"}> <h5 className={`heroTitle  ${isActive('/electronics')}`}>Electronics</h5></Link>
            </div>
            <div className='checkout'>
                <Link href={"/checkout"}><h5 className={`heroTitle ${isActive('/checkout')}`}>Checkout</h5></Link>
            </div>
        </nav>
  )
}
