import React from 'react';
import Menu from '../menu/Menu';
import { HeaderMenuPropsType } from '../../Header';
import {S} from '../HeaderMenu_Styles';

const MobileMenu: React.FC<HeaderMenuPropsType> = (props: HeaderMenuPropsType) => {
  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={false}>
        <span></span>
      </S.BurgerButton>

      <S.MobileMenuPopup isOpen={false}>
        <Menu menuItems={props.menuItems} />
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};

export default MobileMenu;