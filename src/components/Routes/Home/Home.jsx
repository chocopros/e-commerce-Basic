import React, { useEffect } from 'react'
import styled from 'styled-components'
import { getAllProducts } from '../../../store/slices/products.slice'
import { useDispatch, useSelector } from 'react-redux'
import CardHome from '../../Utils/CardHome'



const Home = () => {

  const dispatch = useDispatch() 

  const products = useSelector(state => state.products)

  useEffect(()=> {
    dispatch(getAllProducts())
  },[])

  return (
    <HeroMainHome>
     
      {
        products?.map( p => (
          <CardHome
            key={p.id}
            product={p}
          />
        ))
      }
    </HeroMainHome>
  )
}

export default Home

const HeroMainHome = styled.section`

  min-height: calc(100vh - 118px);
  max-width: 1300px;
  margin: 0 auto;
  margin-top: 50px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
`;