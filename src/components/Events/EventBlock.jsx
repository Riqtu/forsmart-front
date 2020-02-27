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
  FormWrapper,
  PlayerWrapper
} from './Events.styles'

import ReactPlayer from 'react-player'
const EventBlock = props => {
  const [active, setActive] = useState(false)
  const [fileActive, setFileActive] = useState(false)
  const file =
    props.data[props.index].fields.file &&
    props.data[props.index].fields.file.fields.file.url

  //   const fileVideo =
  //     props.data[props.index].fields.video &&
  //     props.data[props.index].fields.video.fields.file.url
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
        <Contacts
          active={active}
          onClick={() => {
            props.setFormActive(true)
            props.setCourse(props.title)
          }}
        >
          Записаться
        </Contacts>
        {props.data[props.index].fields.fileImg ? (
          <Contacts active={active} onClick={() => setFileActive(true)}>
            Программа
          </Contacts>
        ) : (
          ''
        )}
        {props.data[props.index].fields.fileVideo ? (
          <Contacts active={active} onClick={() => setFileActive(true)}>
            Посмотреть
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
        {props.data[props.index].fields.fileImg ? (
          <img src={file} alt="Фоновая картинка" />
        ) : (
          ''
        )}
        {props.data[props.index].fields.fileVideo ? (
          <PlayerWrapper>
            <ReactPlayer
              url={props.youTube}
              width="100%"
              height="100%"
              playing={fileActive}
              // controls="true"
            />
          </PlayerWrapper>
        ) : (
          ''
        )}
      </FormWrapper>
    </React.Fragment>
  )
}

export default EventBlock
