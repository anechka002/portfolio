import React from 'react'
import { SectionTitle } from '../../../components/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper'
import Work from './work/Work'
import socialImg from './../../../assets/images/prog-1.png'
import timer from './../../../assets/images/proj-2.png'
import { Container } from '../../../components/Container'
import TabMenu from './tabMenu/TabMenu'
import {S} from './Works_Styles'

const worksItems = ['All', 'landing page', 'React', 'spa']

const workData = [
  {
    src: socialImg,
    title: 'Social Network',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    src: timer,
    title: 'Timer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'
  },
]

const Works: React.FC = () => {
  return (
    <S.Works>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu menuItems={worksItems}/>
        <FlexWrapper justify='space-between' align='flex-start' wrap='wrap'>

          {workData.map((w, index) => {
            return <Work key={index}
                        src={w.src} 
                        title={w.title} 
                        text={w.text}/>
          })}

        </FlexWrapper>
      </Container>
    </S.Works>
  )
}

export default Works

