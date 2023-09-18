import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import './Header.css'

const HeaderMain = styled.header`
  height: 100px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavItems = styled.nav`
 
`;

const ListItems = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  
`;

const ItemNav = styled.li`
  text-decoration: none;
`;

const Header = () => {
    
  return (
    <HeaderMain>
      <NavLink to='/' style={{textDecoration: 'none'}} >
        <h1>e-commerce</h1>
      </NavLink>
      <NavItems>
        <ListItems>
          
          <ItemNav>
            <NavLink
              style={{textDecoration: 'none'}} 
              className={({isActive}) => isActive && 'active-link'}
              to='/login'
            >
            Login
            </NavLink>
          </ItemNav>

          <ItemNav><NavLink 
            style={{textDecoration: 'none'}} 
            className={({isActive}) => isActive && 'active-link'}
            to='/purchases'
            >
            Purchases
            </NavLink>
          </ItemNav>

          <ItemNav>
            <h2>Cart</h2>
          </ItemNav>
        </ListItems>
      </NavItems>
      


    </HeaderMain>
  )
}

export default Header