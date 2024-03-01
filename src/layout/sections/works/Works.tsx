import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import Menu from '../../../components/menu/Menu'
import { FlexWrapper } from '../../../components/FlexWrapper'
import Work from './work/Work'
import socialImg from './../../../assets/images/prog-1.png'
import timer from './../../../assets/images/proj-2.png'

const worksItems = ['All', 'landing page', 'React', 'spa']

function Works() {
  return (
    <StyledWorks>
      <SectionTitle>My Works</SectionTitle>
      <Menu menuItems={worksItems}/>
      <FlexWrapper justify='space-around'>
        <Work
          src={socialImg} 
          title={'Social Network'} 
          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
        <Work
          src={timer} 
          title={'Timer'} 
          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'}/>
      </FlexWrapper>
    </StyledWorks>
  )
}

export default Works

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: #b5f1c3;
`