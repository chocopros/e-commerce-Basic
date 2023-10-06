import React, { Suspense, lazy } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Imagen = lazy(()=> import('../Utils/ImgLoading'))

const CardHome = ( {product}) => {
   const navigate = useNavigate()

    const handleClick = () => {
        navigate(`product/${product.id}`)
    }

  return (
    <Card onClick={handleClick}>
        <header>
            <Suspense fallback={<img src="Public\images\loading-dots.gif" />} >
                <Imagen url={product.images[0].url} alt={product.title} />
            </Suspense>
        </header>
        <div className="Card__body">
            <h1>{product.title} <span>{`- ${product.brand}`}</span></h1>
            <section className='info__body'>
                <h2>Price</h2>
                <h3>{`$${product.price}`}</h3>
                <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2L0WvS4Ostku0Q2hUVKCoiIYqWKgV3c0hpRkS7BaroWoXXUo74j5P88M19MOI5xszGvA&usqp=CAU" alt="Add-To-Cart" />
            </section>
        </div>
        
    </Card>
  )
}

export default CardHome;

const Card = styled.article`
    
    justify-content: center;
    align-items: center;
    border: 1px solid #00000043;
    width: 350px;
    border-radius: 15px;
    transition: all 350ms;
    
    &:hover {
        transform: scale(1.07);
        box-shadow: 1px 1px 10px 7px #00000035;
        border: none;
        border-radius: 30px;
    }
    

    header{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 20px;
    }
    
    
    img {
        height: 200px;
    }

    .Card__body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 150px;
        border-top: 1px solid #00000043;
        padding: 20px 20px;
        

        .info__body {
            
            position: relative;
        }

        h1{
            span{
                color: #0000005a
            }
        }

        h2{
            color: #0000005a
        }

        h3 {
            margin-left: 10px;
        }

        img {
            height: 50px;
            position: absolute;
            top: 0;
            right: 30px;
        }
    }
   
`