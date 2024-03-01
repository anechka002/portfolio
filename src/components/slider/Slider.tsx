import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../FlexWrapper'

function Slider() {
  return (
    <StyledSlider>
      <FlexWrapper>
        <Slide>
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
          <Name>@ivan ivanow</Name>
        </Slide>
      </FlexWrapper>
      <Pagination>
        <span></span>
        <span></span>
        <span></span>
      </Pagination>
    </StyledSlider>
  )
}

export default Slider

const StyledSlider = styled.div`
  border: 1px solid red;
  max-width: 500px;
`
const Slide = styled.div`
  text-align: center;
`
const Text = styled.p`
  
`
const Name = styled.span`
  
`
const Pagination = styled.div`
  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 5px;
    border-radius: 50%;
    background-color: #fff;
  }
`