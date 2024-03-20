import React from 'react';
import Menu from '../menu/Menu';
import { HeaderMenuPropsType } from '../../Header';
import {S} from '../HeaderMenu_Styles';

const DesktopMenu: React.FC<HeaderMenuPropsType> = (props: HeaderMenuPropsType) => {
  return (
    <S.DesktopMenu>
      <Menu menuItems={props.menuItems} />
    </S.DesktopMenu>
  );
};

export default DesktopMenu;