import React from 'react'
import styled from 'styled-components'
import Icon from '../../components/icon/Icon'
import { FlexWrapper } from '../../components/FlexWrapper'
import { theme } from '../../styles/Theme'

function Footer() {
  return (
    <StyledFooter>
      <FlexWrapper direction={'column'} align={'center'}>
        <Name>Svetlana</Name>
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon width={'21px'} height={'21px'} viewBox={'0 0 21px 21px'} iconId={'instagram'}/>
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon width={'21px'} height={'21px'} viewBox={'0 0 21px 21px'} iconId={'telegram'}/>
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon width={'21px'} height={'21px'} viewBox={'0 0 21px 21px'} iconId={'vk'}/>
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon width={'21px'} height={'21px'} viewBox={'0 0 21px 21px'} iconId={'linkedin'}/>
            </SocialLink>
          </SocialItem>
        </SocialList>
        <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
      </FlexWrapper>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
`
const Name = styled.span`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 3px;

`
const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`
const SocialItem = styled.li`
  
`
const SocialLink = styled.a`
  width: 35px;
  height: 35px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${theme.colors.accent};

  &:hover {
    color: ${theme.colors.primaryBg};
    transform: translateY(-4px);
  }
  
`
const Copyright = styled.small`
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  opacity: 0.5;
`