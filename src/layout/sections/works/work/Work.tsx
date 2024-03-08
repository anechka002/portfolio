import React from 'react'
import styled from 'styled-components'
import { TabLink } from '../../../../components/TabLink'
import { theme } from '../../../../styles/Theme'
import { Button } from '../../../../components/Button'

type WorksPropsType = {
  title: string
  text: string
  src: string
}

function Work(props: WorksPropsType) {
  return (
    <StyledWork>
      <ImgWrapper>
        <Image src={props.src} alt="" />
        <Button>view project</Button>
      </ImgWrapper>
      <Description>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <TabLink href={'#'}>demo</TabLink>
        <TabLink href={'#'}>code</TabLink>
      </Description>
    </StyledWork>
  )
}

export default Work

const StyledWork = styled.div`
  background-color: ${theme.colors.secondaryBg};
  max-width: 540px;
  width: 100%;

  ${TabLink} {
    padding: 10px 0;

    & + ${TabLink} {
      margin-left: 20px;
    }
  }
`

const ImgWrapper = styled.div`
  position: relative;

  &:hover {
    &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      backdrop-filter: blur(4px);
      background: rgba(0, 0, 0, 0.3);
    }

    ${Button} {
      opacity: 1;
    }
    
  }

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    &::before {
      width: 100%;
      height: 100%;
    }
  }
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const Description = styled.div`
  padding: 25px 20px;
`

const Title = styled.h3``

const Text = styled.p`
  margin: 14px 0 10px;
`