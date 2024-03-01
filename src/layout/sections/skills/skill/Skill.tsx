import React from 'react';
import styled from 'styled-components';
import Icon from '../../../../components/icon/Icon';

type SkillPropsType = {
  iconId: string
  title: string
  description: string
}

function Skill(props: SkillPropsType) {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId} />
      <SkillTitle>{props.title}</SkillTitle>
      <SkillText>{props.description}</SkillText>
    </StyledSkill>
  );
}

export default Skill;

const StyledSkill = styled.div`
  width: 30%;
  background-color: #ffffff5b;
  margin: 10px;
`

const SkillTitle = styled.h3``

const SkillText = styled.p``