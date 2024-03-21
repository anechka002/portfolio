import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import Icon from '../../../components/icon/Icon'
import Slider from '../../../components/slider/Slider'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Container } from '../../../components/Container'
import {S} from '../skills/Skills_Styles'

const Testimony: React.FC = () => {
  return (
    <StyledTestimony>
      <Container>
        <SectionTitle>Testimony</SectionTitle>
        <FlexWrapper direction={'column'} align={'center'}>
          <S.IconWrapper>
            <Icon iconId={'quote'}/>
          </S.IconWrapper>
          <Slider />
        </FlexWrapper>
      </Container>
    </StyledTestimony>
  )
}

export default Testimony

const StyledTestimony = styled.section`
  min-height: 50vh;

  ${S.IconWrapper} {
    margin: 40px 0 72px;
  }
  
  position: relative;
`