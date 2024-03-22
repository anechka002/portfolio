import React from 'react';
import Icon from '../icon/Icon';
import { animateScroll as scroll } from 'react-scroll';

const Logo: React.FC = () => {
  return (
    <a onClick={()=>{scroll.scrollToTop()}}>
      <Icon iconId={'code'}/>
    </a>
  )
}

export default Logo;