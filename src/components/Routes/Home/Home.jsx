import React, { useEffect } from 'react'
import styled from 'styled-components'
import { getAllProducts } from '../../../store/slices/products.slice'
import { useDispatch, useSelector } from 'react-redux'

const HeroMainHome = styled.section`
  min-height: calc(100vh - 118px);
`

const Home = () => {

  const dispatch = useDispatch() 

  const products = useSelector(state => state.products)
  console.log(products)

  useEffect(()=> {
    dispatch(getAllProducts())
  },[])

  return (
    <HeroMainHome>
      <h1>Page Home</h1>
    </HeroMainHome>
  )
}

export default Home