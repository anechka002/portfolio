import React, { useState } from 'react'
import { SectionTitle } from '../../../components/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper'
import Work from './work/Work'
import todoImg from './../../../assets/images/To-Do-List.png'
import design from './../../../assets/images/design.png'
import counter from './../../../assets/images/counter.webp'
import { Container } from '../../../components/Container'
import TabMenu, { TabStatusItems } from './tabMenu/TabMenu'
import {S} from './Works_Styles';
import { AnimatePresence, motion } from "framer-motion";

const tabsItems:TabStatusItems[]  = [
  {
    title: 'All',
    status: 'all'
  },
  {
    title: 'landing page',
    status: 'landing'
  },
  {
    title: 'React',
    status: 'react'
  },
  {
    title: 'spa',
    status: 'spa'
  },
]

const worksData = [
  {
    id: 1,
    src: todoImg,
    title: 'Todo List',
    text: "Основные функции проекта To-Do List: Создание задач. Редактирование задач. Удаление задач. Отметка задач как выполненных. Фильтрация задач. Сохранение данных",
    techno: 'Технологии: React, RTK query, CSS/MUI',
    type: 'react',
    linkGit: 'https://github.com/anechka002/todolist',
    link: 'https://todolist-one-sooty.vercel.app'
  },
  {
    id: 2,
    src: design,
    title: 'Portfolio',
    text: 'Основные функции проекта: Сетка на flexbox. Семантическая, кроссбраузерная, адаптивная верстка. Именование классов по методологии БЭМ. SASS (импорт файлов, вложенные селекторы, переменные, миксины). Использование анимации (animation, transition). Работа с svg изображениями и svg спрайтами. ' ,
    techno: 'Технологии: React, CSS/Styled Components',
    type: 'landing',
    linkGit: 'https://github.com/anechka002/portfolio-designer',
    link: 'https://anechka002.github.io/portfolio-designer/'
  },
  {
    id: 2,
    src: counter,
    title: 'Count',
    text: 'Основные функции проекта: Увеличение счетчика. Уменьшение счетчика. Сброс счетчика. Отображение текущего значения счетчика. Настройка начального значения. Ограничение значений. Интерфейс пользователя.' ,
    techno: 'Технологии: React, Redux',
    type: 'spa',
    linkGit: 'https://github.com/anechka002/counter02',
    link: 'https://counter02.vercel.app/'
  },
]

const Works: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState('all')

  let filteredWorks = worksData

  if (currentFilterStatus === 'landing') {
    filteredWorks = worksData.filter(work => work.type === 'landing')
  }

  if (currentFilterStatus === 'react') {
    filteredWorks = worksData.filter(work => work.type === 'react')
  }

  if (currentFilterStatus === 'spa') {
    filteredWorks = worksData.filter(work => work.type === 'spa')
  }

  function changeFilterStatus(value: 'all' | 'landing' | 'react' | 'spa') {
    setCurrentFilterStatus(value)
  }

  return (
    <S.Works id='works'>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu tabsItems={tabsItems} 
                  changeFilterStatus={changeFilterStatus}
                  currentFilterStatus={currentFilterStatus}/>
        <FlexWrapper justify='space-between' align='flex-start' wrap='wrap'>

          <AnimatePresence>
            {filteredWorks.map((w) => {
              return (
                <motion.div style={{width: '400px', flexGrow: 1, maxWidth: '540px'}}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={w.id}
                >
                  <Work key={w.id}
                        src={w.src} 
                        title={w.title} 
                        text={w.text}
                        techno={w.techno}
                        linkGit={w.linkGit}
                        link={w.link}
                  />
                </motion.div>
              ) 
            })}
          </AnimatePresence>

        </FlexWrapper>
      </Container>
    </S.Works>
  )
}

export default Works

