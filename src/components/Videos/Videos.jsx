import React, { useState } from 'react'
import {
  VideosWrapper,
  PathWrapper,
  Path,
  ContentWrapper,
  Block,
  Logo,
  Container,
  PlayerWrapper,
  Variants,
  VariantsExit,
  Var
} from './Videos.styles'
import ReactPlayer from 'react-player'
// import Fade from 'react-reveal/Fade'
import * as data from './videos.json'
const Videos = props => {
  const [active] = useState(false)
  const [fileActive, setFileActive] = useState(false)

  const [file, setFile] = useState('')

  const [workshops, setWorkshops] = useState(false)
  const [course, setCourse] = useState(false)
  const [intensive, setIntensive] = useState(false)
  const [corparative, setCorparative] = useState(false)
  const [individual, setIndividual] = useState(false)

  const openFile = (e, file) => {
    setFileActive(true)
    setFile(file)
    e.stopPropagation()
  }
  let Elem = elem => {
    return elem.map((el, index) => {
      return (
        <Var onClick={e => openFile(e, elem[index].file)} key={index}>
          {elem[index].name}
        </Var>
      )
    })
  }
  const open = element => {
    setWorkshops(false)
    setCourse(false)
    setIntensive(false)
    setCorparative(false)
    setIndividual(false)
    element()
  }
  return (
    <VideosWrapper id="Formats">
      <Logo>Форматы обучения</Logo>
      <ContentWrapper active={active}>
        <Block
          onClick={() => {
            open(() => setWorkshops(true))
          }}
        >
          <span>
            <h1>Воркшопы</h1>
            <p>
              Это лекция, посвящённая основам SMM или другой актуальной теме в
              сфере SMM.
            </p>
          </span>
        </Block>
        <Variants active={workshops} onClick={() => setWorkshops(false)}>
          <p>Смотреть видео</p>
          {Elem(data.workshop)}
          <VariantsExit>
            <img src={require('./../../img/logout.svg')} alt="" />
          </VariantsExit>
        </Variants>
        <Block onClick={() => open(() => setCourse(true))}>
          <span>
            <h1>Курсы</h1>
            <p>
              Это серия лекций, посвящённых разным темам. Самое детальное
              изучение SMM. Отличие курса от других образовательных пакетов в
              том, что вас ждёт не только теория, но и практика, а также работа
              с реальными проектами.
            </p>
          </span>
        </Block>
        <Variants active={course} onClick={() => setCourse(false)}>
          <p>Смотреть видео</p>

          {Elem(data.course)}
          <VariantsExit>
            <img src={require('./../../img/logout.svg')} alt="" />
          </VariantsExit>
        </Variants>
        <Block onClick={() => open(() => setIntensive(true))}>
          <span>
            <h1>Интенсивы</h1>
            <p>
              Это ряд воркшопов, на которых детально рассматриваются разные
              темы.
            </p>
          </span>
        </Block>
        <Variants active={intensive} onClick={() => setIntensive(false)}>
          <p>Смотреть видео</p>

          {Elem(data.intensive)}
          <VariantsExit>
            <img src={require('./../../img/logout.svg')} alt="" />
          </VariantsExit>
        </Variants>
        <Block onClick={() => open(() => setCorparative(true))}>
          <span>
            <h1>Корпаративное обучение</h1>
            <p>
              Это курс для конкретной компании. Мы обучим ваших сотрудников и
              коллег основам SMM, учитывая особенности именно вашего бизнеса. В
              корпоративное обучение входят как теоретические занятия, так и
              практические.
            </p>
          </span>
        </Block>
        <Variants active={corparative} onClick={() => setCorparative(false)}>
          <p>Смотреть видео</p>

          {Elem(data.corparative)}
          <VariantsExit>
            <img src={require('./../../img/logout.svg')} alt="" />
          </VariantsExit>
        </Variants>
        <Block onClick={() => open(() => setIndividual(true))}>
          <span>
            <h1>Индивидуальное обучение</h1>
            <p>
              Это обучение один на один. Теоретические и практические лекции
              будут продуманы с учетом ваших пожеланий. Наш специалист уделит
              вам максимум своего внимания, ответит на все ваши вопросы и
              сделает акценты на самых интересных и важных для вас темах.
            </p>
          </span>
        </Block>
        <Variants active={individual} onClick={() => setIndividual(false)}>
          <p>Смотреть видео</p>

          {Elem(data.individual)}
          <VariantsExit>
            <img src={require('./../../img/logout.svg')} alt="" />
          </VariantsExit>
        </Variants>
      </ContentWrapper>
      <Container
        active={fileActive}
        onClick={() => {
          setFileActive(!fileActive)
        }}
      >
        <PlayerWrapper>
          <ReactPlayer
            url={file}
            width="100%"
            height="100%"
            playing={fileActive}
            // controls="true"
          />
        </PlayerWrapper>
      </Container>
      <PathWrapper>
        <Path></Path>
      </PathWrapper>
    </VideosWrapper>
  )
}

export default Videos
