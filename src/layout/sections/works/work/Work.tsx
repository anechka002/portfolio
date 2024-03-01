import React from 'react'
import styled from 'styled-components'

type WorksPropsType = {
  title: string
  text: string
  src: string
}

function Work(props: WorksPropsType) {
  return (
    <StyledWork>
      <Image src={props.src} alt="" />
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      <Link href={'#'}>demo</Link>
      <Link href={'#'}>code</Link>
    </StyledWork>
  )
}

export default Work

const StyledWork = styled.div`
  background-color: #daee8d;
  max-width: 540px;
  width: 100%;
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`
const Link = styled.a`
  
`
const Title = styled.h3`
  
`
const Text = styled.p`
  
`