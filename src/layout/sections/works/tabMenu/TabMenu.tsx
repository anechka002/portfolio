import React from 'react';
import { TabLink } from '../../../../components/TabLink';
import {S} from '../Works_Styles'

type TabMenuPropsType = {
  menuItems: Array<string>
}

const TabMenu:React.FC<TabMenuPropsType> = (props: TabMenuPropsType) => {
  return (
    <S.Menu>
      <ul>

        {props.menuItems.map((item, id) => {
          return <S.ListItem key={id}>
          <TabLink href="">{item}</TabLink>
        </S.ListItem>
        })}

      </ul>
    </S.Menu>
  );
}

export default TabMenu;