import React from 'react'
import styled from 'styled-components'
import Logo from '../../components/logo/Logo'
import Menu from '../../components/menu/Menu'

const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contact']

function Header() {
  return (
    <div>
      <StyledHeader>
        <Logo/>
        <Menu menuItems={items}/>
      </StyledHeader>
    </div>
  )
}

export default Header

const StyledHeader = styled.header`
  background-color: #e2affa;
  display: flex;
  justify-content: space-between;

`