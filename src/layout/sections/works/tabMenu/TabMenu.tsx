import React from 'react';
import { TabLink } from '../../../../components/TabLink';
import {S} from '../Works_Styles';

export type TabStatusItems = {
  status: 'all' | 'landing' | 'react' | 'spa', 
  title: string,
}

export type TabMenuPropsType = {
  tabsItems: TabStatusItems[],
  changeFilterStatus: (value: 'all' | 'landing' | 'react' | 'spa') => void,
  currentFilterStatus: string
}

const TabMenu:React.FC<TabMenuPropsType> = (props: TabMenuPropsType) => {
  return (
    <S.Menu>
      <ul>

        {props.tabsItems.map((item, id) => {
          return <S.ListItem key={id}>
          <TabLink as={'button'} active={props.currentFilterStatus === item.status} onClick={() => {props.changeFilterStatus(item.status)}}>{item.title}</TabLink>
        </S.ListItem>
        })}

      </ul>
    </S.Menu>
  );
}

export default TabMenu;