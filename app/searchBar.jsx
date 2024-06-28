import React from 'react'
export default function SearchBar ({onSearch}) {
    return (
        <div className="searchdiv" >
            <input onChange={onSearch} className="searchbar" type="text" placeholder='Search' />
        </div>
    )
}
