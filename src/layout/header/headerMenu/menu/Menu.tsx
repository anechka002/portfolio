import React from 'react';
import { HeaderMenuPropsType } from '../../Header';
import {S} from '../HeaderMenu_Styles'

const Menu: React.FC<HeaderMenuPropsType> = (props: HeaderMenuPropsType) => {
  return (
    <ul>
      {props.menuItems.map((item, id) => {
        return (
          <S.MenuItem key={id}>
            <S.Link href="">
              {item}
              <S.Mask>
                <span>{item}</span>
              </S.Mask>
              <S.Mask>
                <span>{item}</span>
              </S.Mask>
            </S.Link>
          </S.MenuItem>
        );
      })}
    </ul>
  );
};

export default Menu;