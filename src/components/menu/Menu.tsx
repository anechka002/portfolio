import React from 'react';
import styled from 'styled-components';

type MenuPropsType = {
  menuItems: Array<string>
}

function Menu(props: MenuPropsType) {
  return (
    <StyledMenu>
      <ul>

        {props.menuItems.map((item, id) => {
          return <li key={id}>
          <a href="">{item}</a>
        </li>
        })}

      </ul>
    </StyledMenu>
  );
}

export default Menu;

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`