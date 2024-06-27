'use client'
import React from 'react'
import Card from './card'
import SearchBar from './searchBar';
import { useState, useEffect} from 'react'
import Fuse from 'fuse.js';
import CircularProgress from '@mui/material/CircularProgress';

export default function ProductList({category = []}) {
    const [products, setProducts] = useState([]);
    const [filtered, setfiltered] = useState([]);
    const [searchQuery, setSearch] = useState("")
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true); 
        const fetchProducts = async () => {
        const res = await fetch('https://fakestoreapi.com/products', {
        next: {
            revalidate: 60
        }
        });
        const data = await res.json();
        setProducts(data); 
        setIsLoading(false); 
        };
        fetchProducts();
    }, []);
    
    const options = {
        keys: ['title'], 
        threshold: 0.3, 
        includeScore: false
    };

    const fuse = new Fuse(products, options);

    const handleSearch = (event)=>{
        const query = event.target.value.trim().toLowerCase();
        setSearch(query);
        const result = fuse.search(query);
        const matchedProducts = result.map(res=>res.item)
        setfiltered(matchedProducts);
    }
    if (isLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex:"1" }}>
                <CircularProgress sx={{ color: '#ee6f57' }} size={80}/>
            </div>
        );
    }
    return (
        <div className='mainC'>
            <SearchBar onSearch={handleSearch}></SearchBar>
            <div className='cardHolder'>
                {searchQuery.length == 0 && products.map(prod =>
                    category.some(cat=>cat === prod.category) && <Card key={prod.id} cardData={prod} />
                )}
                {searchQuery.length > 0 && filtered.map(prod =>
                    category.some(cat=>cat === prod.category) && <Card key={prod.id} cardData={prod} />
                )}
            </div>
        </div>

    )
}
