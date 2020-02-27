import React, { useState, useEffect } from 'react'
import {
  EventsWrapper,
  Block,
  BlockWrapper,
  Title,
  Description,
  Adress,
  Logo,
  FormWrapper,
  Form,
  Input,
  Submit,
  Thanks
} from './Events.styles'
import moment from 'moment'
import 'moment/locale/ru' // without this line it didn't work
import EventBlock from './EventBlock'
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
  const [course, setCourse] = useState('Нет курса')
  const [submit, setSubmit] = useState(false)
  const [notEmptyName, setNotEmptyName] = useState(false)
  const [notEmptyPhone, setNotEmptyPhone] = useState(false)

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

  function setLocation(curLoc) {
    try {
      window.history.pushState(null, null, curLoc)
      return
    } catch (e) {}
    window.location.hash = '#' + curLoc
  }

  const sub = () => {
    if (document.getElementById('name').value !== '') {
      setNotEmptyName(false)
    }
    if (document.getElementById('phone').value !== '') {
      setNotEmptyPhone(false)
    }
    if (
      document.getElementById('name').value !== '' &&
      document.getElementById('phone').value !== ''
    ) {
      setSubmit(true)
      setLocation('thanks')
    } else {
      if (document.getElementById('name').value === '') {
        setNotEmptyName(true)
      }
      if (document.getElementById('phone').value === '') {
        setNotEmptyPhone(true)
      }
    }
  }

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
        <EventBlock
          title={data[index].fields.title}
          date={date}
          time={time}
          description={data[index].fields.description}
          adress={data[index].fields.adress}
          youTube={data[index].fields.youTube}
          file={file}
          setFormActive={setFormActive}
          data={data}
          index={index}
          setCourse={setCourse}
          key={index}
        ></EventBlock>
      )
    } else {
      return (
        <Block key={index} style={style} file={file} id={index}>
          <Title className="active">{data[index].fields.title}</Title>
          <Description>Coming Soon...</Description>
          <Adress>{data[index].fields.adress}</Adress>
        </Block>
      )
    }
  })

  return (
    <EventsWrapper>
      <Logo id="Events">Расписание</Logo>
      <iframe
        title="formPost"
        name="formPost"
        style={{ display: 'none' }}
      ></iframe>
      <FormWrapper
        active={formActive}
        onClick={() => {
          setFormActive(!formActive)
          setSubmit(false)
        }}
      >
        <Form
          action="./send.php"
          method="post"
          target="formPost"
          id="form"
          name="form"
          onClick={e => e.stopPropagation()}
        >
          <h1>Заполните данные</h1>
          <Input
            type="text"
            name="name"
            placeholder="Укажите Имя"
            id="name"
            active={submit}
            notEmpty={notEmptyName}
          />
          <Input
            type="text"
            name="phone"
            placeholder="Укажите телефон"
            id="phone"
            active={submit}
            notEmpty={notEmptyPhone}
          />
          <Input
            type="text"
            name="course"
            placeholder="Курс"
            value={course}
            active={submit}
            readOnly
          />
          <Submit
            type="submit"
            value="Отправить"
            onClick={() => {
              sub()
            }}
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
