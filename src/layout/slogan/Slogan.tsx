import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../components/SectionTitle'
import { Button } from '../../components/Button'

function Slogan() {
  return (
    <StyledSlogan>
      <SectionTitle>I Am Available For Freelance</SectionTitle>
      <Button>Hire me</Button>
    </StyledSlogan>
  )
}

export default Slogan

const StyledSlogan = styled.section`
  min-height: 30vh;
  background-color: #d97feb;
`