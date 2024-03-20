import React from 'react'
import { TabLink } from '../../../../components/TabLink'
import { Button } from '../../../../components/Button'
import {S} from '../Works_Styles'

type WorksPropsType = {
  title: string
  text: string
  src: string
}

const Work: React.FC<WorksPropsType> = (props: WorksPropsType) => {
  return (
    <S.Work>
      <S.ImgWrapper>
        <S.Image src={props.src} alt="" />
        <Button>view project</Button>
      </S.ImgWrapper>
      <S.Description>
        <S.Title>{props.title}</S.Title>
        <S.Text>{props.text}</S.Text>
        <TabLink active href={'#'}>demo</TabLink>
        <TabLink href={'#'}>code</TabLink>
      </S.Description>
    </S.Work>
  )
}

export default Work;