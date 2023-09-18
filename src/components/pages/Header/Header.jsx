import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const HeaderMain = styled.header`
  height: 100px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom:  1px solid black;
`;

const NavItems = styled.nav`
 
`;

const ListItems = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  height: 100px; 
  
`;

const ItemNav = styled.li`
  text-decoration: none;
  margin: 0 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  
}
`;

const ContainerImg = styled.div`
  height: 70px;
`

const Logo = styled.img`
  height: 100%; 
`

const IconHeader = styled.img`
  height: 50px;
`

const Header = () => {
    
  return (
    <HeaderMain>
      <NavLink to='/' style={{textDecoration: 'none', color: 'black'}} >
        <ContainerImg>
          <Logo src="/images/LogoEcommerce.png" />
        </ContainerImg>
       
      </NavLink>
      <NavItems>
        <ListItems>
          
          <ItemNav >
            <NavLink
              style={{textDecoration: 'none', color: 'black'}} 
              className={({isActive}) => isActive ? 'active-link' : null}
              to='/login'
            >
            Login
            </NavLink>
          </ItemNav>

          <ItemNav>
            <NavLink 
              style={{textDecoration: 'none', color: 'black'}} 
              className={({isActive}) => isActive ? 'active-link' : null}
              to='/purchases'
            >
            Purchases
            </NavLink>
          </ItemNav>

          <ItemNav>
            <NavLink 
              style={{textDecoration: 'none', color: 'black'}} 
              className={({isActive}) => isActive ? 'active-link' : null}
              to='/contact'
            >
            Contact
            </NavLink>
          </ItemNav>

          <ItemNav>
            <IconHeader src='Public\images\shopping-cart.png' />
          </ItemNav>
        </ListItems>
      </NavItems>
      


    </HeaderMain>
  )
}

export default Header