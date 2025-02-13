import React from 'react'
import Icon from '../../components/icon/Icon'
import { FlexWrapper } from '../../components/FlexWrapper'
import {S} from './Footer_Styles'

const socialItemsData = [
  {
    iconId: 'instagram',
    link: 'https://www.instagram.com/anechka_ost',
  },
  {
    iconId: 'telegram',
    link: 'https://t.me/Anna_Blinova'
  },
  {
    iconId: 'vk',
    link: 'https://vk.com/ostrovskaya86',
  },
  {
    iconId: 'linkedin',
    link: 'https://www.linkedin.com/in/anna-blinova-4540b7346',
  },
]

const Footer: React.FC = () => {
  return (
    <S.Footer>
      <FlexWrapper direction={'column'} align={'center'}>
        <S.Name>Anna</S.Name>
        <S.SocialList>

          {socialItemsData.map((s, index)=>{
            return (
              <S.SocialItem key={index}>
                <S.SocialLink href={s.link} target="_blank" rel="noopener noreferrer">
                  <Icon width={'21'} height={'21'} viewBox={'0 0 21 21'} iconId={s.iconId}/>
                </S.SocialLink>
              </S.SocialItem>
            )
          })}

        </S.SocialList>
        <S.Copyright>© 2024-2025 Anna Blinova, All Rights Reserved.</S.Copyright>
      </FlexWrapper>
    </S.Footer>
  )
}

export default Footer;