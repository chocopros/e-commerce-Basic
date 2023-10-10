import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { styled } from 'styled-components';
import ContainerInfo from './ContainerInfo/ContainerInfo';


const ProductDetails = () => {

  const { id } = useParams();
  
  const [product, setProduct] = useState('')

  useEffect(() => {
    const URL = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`
    axios.get(URL)
      .then(res => setProduct(res.data) )
      .catch(err => console.log(err))
  }, [])
  
  // console.log(product)
  return (
    <HeroMainProductDetails>

      <ContainerInfo product={product} />
      
    </HeroMainProductDetails>
  )
}

export default ProductDetails;

const HeroMainProductDetails = styled.section`
  min-height: calc(100vh - 118px);
  max-width: 1300px;
  margin: 0 auto;
  margin-top: 50px;
`;

