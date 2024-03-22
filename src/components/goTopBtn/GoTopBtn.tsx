import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Icon from '../icon/Icon';
import { animateScroll as scroll } from 'react-scroll';

const GoTopBtn: React.FC = () => {

  const [showBtn, setShowBtn] = useState(false)

  useEffect( () => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 200) {
        setShowBtn(true)
      } else {
        setShowBtn(false)
      }
    })
  }, [] )

  return (
    <>
      {showBtn && (
      <StyledGoTopBtn onClick={()=>{scroll.scrollToTop()}}>
        <Icon iconId={'arrowGoTop'} height={'30'} width={'30'} viewBox={'0 0 30 30'}/>
      </StyledGoTopBtn>
      )}
    </>

  )
}

export default GoTopBtn;

const StyledGoTopBtn = styled.button`
  background-color: transparent;
  padding: 8px;
  position: fixed;
  right: 30px;
  bottom: 30px;
`