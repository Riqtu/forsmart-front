import React, { useState } from 'react'
import {
  Block,
  Title,
  Date,
  Description,
  Adress,
  Time,
  BlockBack,
  TextPosition,
  Contacts,
  FormWrapper
} from './Events.styles'

const EventBlock = props => {
  const [active, setActive] = useState(false)
  const [fileActive, setFileActive] = useState(false)
  const file =
    props.data[props.index].fields.file &&
    props.data[props.index].fields.file.fields.file.url

  console.log(file)
  return (
    <React.Fragment>
      <Block
        file={props.file}
        onClick={() => {
          setActive(!active)
        }}
      >
        <BlockBack active={active}></BlockBack>
        <TextPosition>
          <Title className="active">{props.title}</Title>
          <Date>{props.date}</Date>
          <Description>{props.description}</Description>
        </TextPosition>
        <Adress>{props.adress}</Adress>
        <Time>{props.time}</Time>
        <Contacts active={active} onClick={() => props.setFormActive(true)}>
          Записаться
        </Contacts>
        {props.data[props.index].fields.fileImg ? (
          <Contacts active={active} onClick={() => setFileActive(true)}>
            Программа
          </Contacts>
        ) : (
          ''
        )}
      </Block>
      <FormWrapper
        active={fileActive}
        onClick={() => {
          setFileActive(!fileActive)
        }}
      >
        <img src={file} alt="Фоновая картинка" />
      </FormWrapper>
    </React.Fragment>
  )
}

export default EventBlock
