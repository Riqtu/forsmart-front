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
  Contacts,
  Next,
  FormWrapper,
  Form,
  Input,
  Submit,
  Thanks
} from './Events.styles'
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
  const [formActive, setFormActive] = useState(false)
  const [submit, setSubmit] = useState(false)
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
    if (!data[index].fields.comingSoon) {
      return (
        <Block key={index} style={style} file={file} id={index}>
          <BlockBack></BlockBack>
          <Title className="active" tabIndex="1">
            {data[index].fields.title}
          </Title>
          <Date>{date}</Date>
          <Description>{data[index].fields.description}</Description>
          <Adress>{data[index].fields.adress}</Adress>
          <Time>{time}</Time>
          <Contacts
            onClick={() => {
              setFormActive(!formActive)
            }}
          >
            Записаться
          </Contacts>
        </Block>
      )
    } else {
      return (
        <Block key={index} style={style} file={file} id={index}>
          <BlockBack></BlockBack>
          <Title className="active" tabIndex="1">
            {data[index].fields.title}
          </Title>
          <Description>Coming Soon</Description>
        </Block>
      )
    }
  })

  return (
    <EventsWrapper>
      <Logo id="Events">Расписание</Logo>
      <Next src={require('./../../img/next.svg')} alt="" />
      <iframe
        title="formPost"
        name="formPost"
        style={{ display: 'none' }}
      ></iframe>
      <FormWrapper
        active={formActive}
        onClick={() => {
          setFormActive(!formActive)
        }}
      >
        <Form
          action="./send.php"
          method="post"
          target="formPost"
          id="form"
          onClick={e => e.stopPropagation()}
        >
          <h1>Заполните данные</h1>
          <Input
            type="text"
            name="fio"
            placeholder="Укажите ФИО"
            active={submit}
          />
          <Input
            type="text"
            name="email"
            placeholder="Укажите e-mail"
            active={submit}
          />
          <Submit
            type="submit"
            value="Отправить"
            onClick={() => setSubmit(true)}
            active={submit}
          />
          <Thanks active={submit}>
            <h1>
              СПАСИБО! <br /> Мы обязательно свяжемся с вами!
            </h1>
            <span role="img" aria-label="сердце">
              ❤️
            </span>
          </Thanks>
        </Form>
      </FormWrapper>
      <BlockWrapper width={data.length}>{allPosts}</BlockWrapper>
    </EventsWrapper>
  )
}

export default Events
