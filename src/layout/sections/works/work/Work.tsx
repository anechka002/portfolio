import React from 'react'
import { TabLink } from '../../../../components/TabLink'
import { Button } from '../../../../components/Button'
import {S} from '../Works_Styles'

type WorksPropsType = {
  title: string
  text: string
  techno: string
  src: string
  linkGit: string
  link: string
}

const Work: React.FC<WorksPropsType> = (props: WorksPropsType) => {
  return (
    <S.Work>
      <S.ImgWrapper>
        <S.Image src={props.src} alt="" />
        <Button as='a' href={props.link} target='_blank' rel='noopener noreferrer'>
          view project
        </Button>
      </S.ImgWrapper>
      <S.Description>
        <S.Title>{props.title}</S.Title>
        <S.Text>{props.text}</S.Text>
        <S.Text>{props.techno}</S.Text>
        <TabLink active href={'#'}>demo</TabLink>
        <TabLink href={props.linkGit} target='_blank' rel='noopener noreferrer'>code</TabLink>
      </S.Description>
    </S.Work>
  )
}

export default Work;