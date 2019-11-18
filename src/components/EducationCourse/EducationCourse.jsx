import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
import {
  EducationCourseWrapper,
  Path,
  Logo,
  ButtonsBlock,
  Button,
  Text,
  Circle,
  PathWrapper
} from './EducationCourse.styles'

const blocks = {
  block1: `
    <h1>Введение в SMM</h1>
    1. Знакомство с Инстаграм: создание аккаунта, настройки и оформление (название, обложка, шапка профиля). <br />
    2. Дальнейшее обучение будет на примере «проекта», который студент будет поэтапно развивать и защищать на экзамене. <br />
    Раскрываем основные «рабочие» моменты, которые нужны чтобы запустить проект, когда страница создана, есть название и обложка, шапка профиля прописана. <br /> <br />
    Какие именно? <br />
    1. Что такое анализ конкурентов + рабочие техники. <br />
    2. Стратегия – рассказываем, как её написать. <br />
    3. Прописываем хештеги – рассказываем, как их прописать. <br />
  `,

  block2: `
    <h1>Фото и видео-контент + техники + приложения</h1>
    1. Контент-план – что это такое, как его построить + рекомендуем приложения для планирования. Наполнение – про то, какими должны быть посты (информационные, развлекательные, продающие).
      + О том, как подготовиться к съёмке: как подобрать референсы, моделей и локацию.  <br />
    2. Расскажем о специфике контента для разных площадок, расставим акценты. <br />
    3. Расскажем, чем отличается контент на смартфоне от сложного продакшна. О плюсах и минусах каждого из них. С примерами от наших экспертов. <br />
    4. О рубрикаторе: как создавать рубрики, которые будут работать со страхами, мотивами и инсайтами ЦА на примере кейсов digital agency «FORSMART». <br />
    5. О визуальном контенте: тренды и приёмы.
  `,
  block3: `
    <h1>Сториc</h1>
    1. Stories – как инструмент продвижения в социальных сетях. <br />
    2. О функциях stories с примерами. <br />
    3. Как узнать боль клиента через stories. <br />
    4. Актуальные приложения для создания сторис. <br />
    5. Геймификация. 
  `,
  block4: `
    <h1>Копирайтинг</h1>
    1. Stories – как инструмент продвижения в социальных сетях. <br />
    2. О функциях stories с примерами. <br />
    3. Как узнать боль клиента через stories. <br />
    4. Актуальные приложения для создания сторис. <br />
    5. Геймификация. 
  `,
  block5: `
    <h1>Личный бренд / развитие бренда работодателя в социальных сетях</h1>
    1.Что сегодня значит личный бренд и зачем он нужен? <br />
    2.Как зарабатывать с помощью личного бренда? <br />
    3.Является ли «личный бренд» универсальным инструментом при продвижении услуг?
  `,
  block6: `
    <h1>Таргетированная реклама</h1>
    1. Почему именно Facebook / Instagram? <br />
    2. Структура и цели рекламных кампаний. <br />
    3. Особенности рекламы в Facebook / Instagram. <br />
    4. Детальный таргетинг. <br />
    5. Идеальные шаблоны Facebook / Instagram. <br />
    6. Аналитика для гуманитариев. <br />
    7. Прибыльная реклама. Тестирование и маштабирование. <br />
  `,
  block7: `
    <h1>Работа с блогерами</h1>
    1. Что нужно знать о работе с блогерами. <br />
    2. Как подобрать блогера и определить его целевую аудиторию. <br />
    3. Как правильно ставить техническое задание блогеру.<br />
    4. Как отследить трафик и эффективность. 
  `
}

const EducationCourse = props => {
  const [text, setText] = useState(blocks.block1)
  const [hidden, setHidden] = useState(false)

  const arrCircle = []
  for (let i = 0; i < 5; i++) {
    let min = Math.ceil(-200)
    let max = Math.floor(200)
    arrCircle.push(Math.floor(Math.random() * (max - min) + min))
  }

  console.log(arrCircle)
  const [randomCircle] = useState(arrCircle)
  console.log(randomCircle)
  const opacity = block => {
    setHidden(true)
    setTimeout(() => {
      setText(block)
      setHidden(false)
    }, 500)
  }
  return (
    <EducationCourseWrapper>
      <Circle
        size={300}
        top="200px"
        left="0px"
        y={randomCircle[0]}
        x={randomCircle[0]}
      />
      <Circle
        size={528}
        top="45%"
        left="15%"
        y={randomCircle[1]}
        x={randomCircle[1]}
      />
      <Circle
        size={357}
        top="30%"
        left="70%"
        y={randomCircle[2]}
        x={randomCircle[2]}
      />
      <Circle
        size={257}
        top="200px;"
        left="45%"
        y={randomCircle[4]}
        x={randomCircle[4]}
      />
      <Logo>
        <Fade top cascade>
          <h1>Forsmart education 1.0</h1>
          <h2>Описание курса</h2>
        </Fade>
      </Logo>
      <ButtonsBlock>
        <Fade bottom cascade>
          <Button
            onClick={() => {
              opacity(blocks.block1)
            }}
          >
            1 блок – Введение в SMM
          </Button>
          <Button
            onClick={() => {
              opacity(blocks.block2)
            }}
          >
            2 блок – Фото и видео-контент + техники + приложения
          </Button>
          <Button
            onClick={() => {
              opacity(blocks.block3)
            }}
          >
            3 блок – Сторис
          </Button>
          <Button
            onClick={() => {
              opacity(blocks.block4)
            }}
          >
            4 блок – Копирайтинг
          </Button>
          <Button
            onClick={() => {
              opacity(blocks.block5)
            }}
          >
            6 блок – Таргетированная реклама
          </Button>
          <Button
            onClick={() => {
              opacity(blocks.block6)
            }}
          >
            5 блок – Личный бренд / развитие бренда работодателя в социальных
            сетях
          </Button>
          <Button
            onClick={() => {
              opacity(blocks.block7)
            }}
          >
            7 блок – Работа с блогерами
          </Button>
        </Fade>
      </ButtonsBlock>
      <Fade>
        <Text dangerouslySetInnerHTML={{ __html: text }} opac={hidden} />
      </Fade>
      <PathWrapper>
        <Path></Path>
      </PathWrapper>
    </EducationCourseWrapper>
  )
}

export default EducationCourse
