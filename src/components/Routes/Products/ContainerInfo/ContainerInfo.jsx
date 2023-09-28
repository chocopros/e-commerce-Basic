import React from 'react'
import styled from 'styled-components';

const ContainerInfo = ( { product }) => {
  return (
    <MainContainer>
        <CarrouselContainer className='container-info'>
            <div className='carrousel'>
                <button>{`<`}</button>
                <div className='img-container'>
                 <img src={product.images?.[0].url} alt="imagen" />
                </div>
                <button>{`>`}</button>
            </div>
        </CarrouselContainer >
        <InfoContainer className='container-info'>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <div className='price-quantify'>
                <div className='info'>
                    <h2>Price</h2>
                    <h3>{`$${product.price}`}</h3>
                </div>
                <div className='info'>
                    <h2>Quantify</h2>
                    <div className='panel-quantify'>
                        <button>-</button>
                        <input type="number" />
                        <button>+</button>
                    </div>
                </div>
            </div>
            <button className='add-cart'>
                <h2>Add To Cart</h2>
                <img src="images/ShoppingTrolleyBlack.svg" alt="cart-icon" height='16px' />
            </button>
        </InfoContainer>
    </MainContainer>
  )
}

export default ContainerInfo;


const MainContainer = styled.article`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .container-info{
        width: 50%;
    }
`;


const InfoContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap:  25px;
    padding: 0 15px;

    min-width: 400px;

    p{
        text-align: justify;
    }

    .price-quantify{
        display: flex;
        width: 100%;
    }

    .info{
        width: 50%;
        

        h2{
            color: #888888;
            font-size: 18px;
        }

        .panel-quantify{
            display: flex;

            button {
                padding: 5px 10px;
                background-color: #3d3d3d67;
                border-style: none;
            }
            
            input {
                width: 50%;
                text-align: center;
            }
        }
    }

    .add-cart{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 10px;
        gap: 10px;

        background-color: #ff5500;
        border-style: none;

        h2{
            font-size: 14px;
            color: #fff;
        }
    }
`

const CarrouselContainer = styled.div`

    min-width: 460px;   
    
    .carrousel{

        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        
        
    

        button{
            color: white;
            padding: 10px 15px;
            background-color: #ff5500;
            border-style: none;
            border-radius: 50%;
        }

        .img-container {
            display: flex;
            justify-content: center;
            align-items: center;
            
            height: 250px;

            img{
                
                height: 100%;
               
            }
        }

    }

`
