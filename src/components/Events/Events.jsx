import React, { useState, useEffect } from 'react'
import {
  EventsWrapper,
  Block,
  BlockWrapper,
  Title,
  Date,
  Description,
  Adress,
  Time,
  Logo,
  BlockBack,
  Contacts
} from './Events.styles'
// import HorizontalScroll from 'react-scroll-horizontal'
import Fade from 'react-reveal/Fade'
import moment from 'moment'
import 'moment/locale/ru' // without this line it didn't work
moment.locale('ru')

const contentful = require('contentful')

const client = contentful.createClient({
  space: 'a5m9sfy31eyk',
  accessToken: 'E2Qt3j-Cn_5Ze_Nlje9mKMPYhHV2x1VXyZKwAVBEDAw'
})

const Events = props => {
  const [data, setData] = useState([
    { fields: { photo: { fields: { file: '' } } }, sys: {} }
  ])
  useEffect(() => {
    async function fetchData() {
      await client
        .getEntries({
          content_type: 'events',
          order: 'fields.date'
        })
        .then(entry => {
          setData(entry.items)
          console.log(entry.items)
        })
        .catch(err => console.log(err))
    }
    fetchData()
  }, [])

  let allPosts = data.map((el, index) => {
    const date = moment(data[index].fields.date).format('L')
    const time = moment(data[index].fields.date).format('LT')
    let style = { display: 'block' }
    if (moment(data[index].fields.date).isBefore(moment())) {
      style = { display: 'none' }
    }
    const file =
      data[index].fields.photo && data[index].fields.photo.fields.file.url
    return (
      <Fade right key={index}>
        <Block style={style} file={file}>
          <BlockBack></BlockBack>
          <Title className="active">{data[index].fields.title}</Title>
          <Date>{date}</Date>
          <Description>{data[index].fields.description}</Description>
          <Adress>{data[index].fields.adress}</Adress>
          <Time>{time}</Time>
          <Contacts>Записаться:</Contacts>
        </Block>
      </Fade>
    )
  })
  return (
    <EventsWrapper>
      <Logo id="Events">Расписание</Logo>
      {/* <HorizontalScroll pageLock={false} reverseScroll={true}> */}
      <BlockWrapper width={data.length}>{allPosts}</BlockWrapper>
      {/* </HorizontalScroll> */}
    </EventsWrapper>
  )
}

export default Events
