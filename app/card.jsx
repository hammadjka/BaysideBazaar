import React from 'react'
import Image from 'next/image'

export default function card({cardData}) {
  // const imagesArray = JSON.parse(cardData.images); 
  // const backgroundImageUrl = imagesArray && imagesArray.length > 0
  // ? imagesArray[0]
  // : '';
  // console.log(`url(${cardData.category.image})`)
  const divStyle = {
    backgroundImage: `url(${cardData.image})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  
  return (
    <div className='outerCard'>
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
