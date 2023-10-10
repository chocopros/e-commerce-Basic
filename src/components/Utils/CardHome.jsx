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
                <div>
                    <h2>Price</h2>
                    <h3>{`$${product.price}`}</h3>
                </div>
                <button onClick={()=> console.log('buttonee')}>
                    <i className="fa-solid fa-cart-plus"></i>
                </button>
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
        height: 200px;
    }
    
    
    img {
        object-fit: contain;
        height: 100%;
        width: 100%;
    }

    .Card__body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 150px;
        border-top: 1px solid #00000043;
        padding: 20px 20px;
        

        .info__body {
            display: flex;
            justify-content: space-around;
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

        button{
            padding: 10px 10px;
            font-size: 20px;
            border-style: none;
            background-color: #efefef;
            border-radius: 50%;
            transition: all 350ms;
            
            &:hover {
                background-color: #000000;
                color: #fff;
            }
        }

       
    }
   
`