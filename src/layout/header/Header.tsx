import React from 'react'
import styled from 'styled-components'
import Logo from '../../components/logo/Logo'
import Menu from '../../components/menu/Menu'

function Header() {
  return (
    <div>
      <StyledHeader>
        <Logo/>
        <Menu/>
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