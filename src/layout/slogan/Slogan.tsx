import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../components/SectionTitle'
import { Button } from '../../components/Button'
import { Container } from '../../components/Container'
import { FlexWrapper } from '../../components/FlexWrapper'

function Slogan() {
  return (
    <StyledSlogan>
      <Container>
        <FlexWrapper direction='column' align='center'>
          <SectionTitle>I Am Available For Freelance</SectionTitle>
          <Button>Hire me</Button>
        </FlexWrapper>
      </Container>
    </StyledSlogan>
  )
}

export default Slogan

const StyledSlogan = styled.section`
  /* min-height: 30vh;
  background-color: #d97feb; */
`