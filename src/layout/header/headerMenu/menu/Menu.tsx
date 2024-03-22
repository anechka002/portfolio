import React from 'react';
import {S} from '../HeaderMenu_Styles';

const items = [
  {
    title: 'Home',
    href: 'home'
  },
  {
    title: 'Skills',
    href: 'skills'
  },
  {
    title: 'Works',
    href: 'works'
  },
  {
    title: 'Testimony',
    href: 'testimony'
  },
  {
    title: 'Contact',
    href: 'contact'
  },
];

const Menu: React.FC = () => {
  return (
    <ul>
      {items.map((item, id) => {
        return (
          <S.MenuItem key={id}>
            <S.NavLink to={item.href} smooth={true} activeClass="active" spy={true}>
              {item.title}
              <S.Mask>
                <span>{item.title}</span>
              </S.Mask>
              <S.Mask>
                <span>{item.title}</span>
              </S.Mask>
            </S.NavLink>
          </S.MenuItem>
        );
      })}
    </ul>
  );
};

export default Menu;