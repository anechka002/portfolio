import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { Button } from '../../../components/Button'

function Contact() {
  return (
    <StyledContacts>
      <SectionTitle>Contact</SectionTitle>
      <StyledForm>
        <Field placeholder='name'/>
        <Field placeholder='subject'/>
        <Field placeholder='message' as ={'textarea'}/>
        <Button type={'submit'}>Send message</Button>
      </StyledForm>
    </StyledContacts>
  )
}

export default Contact

const StyledContacts = styled.section`
  min-height: 50vh;
  background-color: #f8faa9;
`
const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
`
const Field = styled.input`
  
`