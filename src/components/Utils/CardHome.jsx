import React from 'react'
import styled from 'styled-components'

const CardHome = ( {product}) => {
    console.log(product)
  return (
    <Card>
        <header>
            <h1>{product.title}</h1>
            <img src={product.images[0].url} alt={product.title} />
        </header>
        <div>

        </div>
        
    </Card>
  )
}

export default CardHome

const Card = styled.article`

    border: 1px solid black;
    width: 350px;
    
    img {
        height: 200px;
    }
   
`