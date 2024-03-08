import React from 'react';
import styled from 'styled-components';
import { TabLink } from '../../../../components/TabLink';

type TabMenuPropsType = {
  menuItems: Array<string>
}

function TabMenu(props: TabMenuPropsType) {
  return (
    <StyledMenu>
      <ul>

        {props.menuItems.map((item, id) => {
          return <ListItem key={id}>
          <TabLink href="">{item}</TabLink>
        </ListItem>
        })}

      </ul>
    </StyledMenu>
  );
}

export default TabMenu;

const StyledMenu = styled.nav`
  margin-bottom: 40px;

  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
`

const ListItem = styled.li`
  
`

