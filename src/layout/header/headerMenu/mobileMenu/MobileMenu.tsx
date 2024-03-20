import React, { useState } from 'react';
import Menu from '../menu/Menu';
import { HeaderMenuPropsType } from '../../Header';
import {S} from '../HeaderMenu_Styles';

const MobileMenu: React.FC<HeaderMenuPropsType> = (props: HeaderMenuPropsType) => { 
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const onBurgerBtnClick = () => {setMenuIsOpen( !menuIsOpen )}

  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <span></span>
      </S.BurgerButton>

      <S.MobileMenuPopup isOpen={menuIsOpen} onClick={() => {setMenuIsOpen(false)}}>
        <Menu menuItems={props.menuItems} />
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};

export default MobileMenu;