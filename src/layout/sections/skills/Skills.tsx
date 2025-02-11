import React from 'react'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import Skill from './skill/Skill'
import { Container } from '../../../components/Container'
import {S} from './Skills_Styles';
import { Fade } from "react-awesome-reveal";

const skillData = [
  {
    iconId: 'code',
    title: 'html5',
    description: 'Cтандартный язык разметки, используемый для создания веб-страниц. Семантическая, кроссбраузерная, адаптивная верстка.'
  },
  {
    iconId: 'css',
    title: 'css3',
    description: 'Язык стилевой разметки, используемый для описания внешнего вида и форматирования документов, написанных на HTML и XML. Именование классов по методологии БЭМ, css модули'
  },
  {
    iconId: 'react',
    title: 'React',
    description: 'Библиотека для создания пользовательских интерфейсов. Позволяет строить многокомпонентные приложения, обеспечивая быструю и эффективную работу с динамическими данными.'
  },
  {
    iconId: 'typescript',
    title: 'typescript',
    description: 'Язык программирования, который является надстройкой над JavaScript. Он добавляет статическую типизацию, что делает разработку более предсказуемой и менее подверженной ошибкам.'
  },
  {
    iconId: 'styled-components',
    title: 'styled components',
    description: 'Библиотека для стилизации компонентов в приложениях, разработанных на React и других библиотеках, использующих JavaScript. Она использует подход CSS-in-JS, позволяя писать CSS прямо внутри JavaScript-кода. '
  },
  {
    iconId: 'figma',
    title: 'WEB DESIgN',
    description: 'Figma — это облачный инструмент для дизайна пользовательских интерфейсов и прототипирования, который позволяет командам совместно работать над проектами в реальном времени.'
  },
]

const Skills: React.FC = () => {
  return (
    <S.Skills id='skills'>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper wrap={'wrap'} justify={'space-between'}>

          <Fade cascade={true} damping={0.2}>
            {skillData.map((s, index) => {
              return <Skill key={index}
                            iconId={s.iconId} 
                            title={s.title} 
                            description={s.description}/>
            })}
          </Fade>
  
        </FlexWrapper>
      </Container>
    </S.Skills>
  )
}

export default Skills;