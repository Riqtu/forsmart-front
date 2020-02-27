import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
import {
  EducationCourseWrapper,
  Logo,
  ButtonsBlock,
  Button,
  Text,
  Circle
} from './EducationCourse.styles'

const blocks = {
  block1: `
    <h1>SMM - Специалисты </h1>
    Профессия SMM набирает популярность. 
    Специалистов, умеющих работать в социальных сетях, крайне мало. 
    Если Вы по духу – новатор, любите эксперименты, открыты к общению с людьми, 
    Вам нравится все модное и яркое – профессия SMM-менеджера может для вас.
  `,

  block2: `
    <h1>PR - менеджеры</h1>
    Не так давно, когда на рынке труда только появилась новая профессия «PR-менеджер», 
    обязанности его сводились в основном к написанию разного рода рекламных текстов. 
    Но рыночная экономика и свободная конкуренция диктуют бизнесу свои условия, и сегодня 
    в штате любой уважающей себя крупной компании имеется PR-менеджер, обязанности которого 
    зависят от политики компании и структуры PR-отдела в целом.
  `,
  block3: `
    <h1>Маркетологи</h1>
    Маркетологи-исследователи наиболее востребованы в сфере рекламного продвижения. 
    Они создают рабочие группы, подбирают исполнителей, сотрудничают с подрядчиками – осуществляют 
    сопровождение каждой кампании работодателя. 
  `,
  block4: `
    <h1>Топ - менеджеры</h1>
    Топ менеджер – представитель высшего звена управления. 
    По должности он может быть генеральным директором, президентом 
    (вицепрезидентом) или председателем правления компании. 
    В его обязанности входит руководство менеджерами среднего звена, 
    он несет ответственность за работу всего предприятия.
  `,
  block5: `
    <h1>Графические дизайнеры</h1>
    Графический дизайн — процесс визуального общения и решения проблем с использованием типографики, 
    фотографии и иллюстрации. Поле считается подмножеством визуальной коммуникации и коммуникационного 
    дизайна, но иногда термин «графический дизайн» используется как синоним.
  `,
  block6: `
    <h1>HR - специалисты</h1>
    Это работа не с бумажками, а с людьми, управление персоналом.
    В зависимости от штата компании среди HR идёт разделение на разные функции. 
    Вкратце их можно описать такой формулой: привлечь, увлечь и вовлечь.
  `,
  block7: `
    <h1>EVENT - специалисты</h1>
    Event-рынок испытывает катастрофическую нехватку профессиональных кадров. 
    Его наводнили дилетанты, которые, предлагая некачественные услуги, 
    дискредитируют добропорядочные компании. В результате к event-сообществу 
    в целом складывается несерьезное отношение. Люди думают, что на этом рынке 
    работают, конечно, эмоциональные, но слабо подготовленные ребята. Эту ситуацию 
    нужно немедленно исправлять, чтобы внушить к себе уважение со стороны клиентов.
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
          <h1>Для кого этот курс</h1>
          {/* <h2>Описание курса</h2> */}
        </Fade>
      </Logo>
      <ButtonsBlock>
        <Fade bottom cascade>
          <Button
            onClick={() => {
              opacity(blocks.block1)
            }}
          >
            SMM - Специалисты
          </Button>
          <Button
            onClick={() => {
              opacity(blocks.block2)
            }}
          >
            PR - менеджеры
          </Button>
          <Button
            onClick={() => {
              opacity(blocks.block3)
            }}
          >
            Маркетологи
          </Button>
          <Button
            onClick={() => {
              opacity(blocks.block4)
            }}
          >
            Топ - менеджеры
          </Button>
          <Button
            onClick={() => {
              opacity(blocks.block5)
            }}
          >
            Графические дизайнеры
          </Button>
          <Button
            onClick={() => {
              opacity(blocks.block6)
            }}
          >
            HR - специалисты
          </Button>
          <Button
            onClick={() => {
              opacity(blocks.block7)
            }}
          >
            EVENT - специалисты
          </Button>
        </Fade>
      </ButtonsBlock>
      <Fade>
        <Text dangerouslySetInnerHTML={{ __html: text }} opac={hidden} />
      </Fade>
      {/* <PathWrapper>
        <Path></Path>
      </PathWrapper> */}
    </EducationCourseWrapper>
  )
}

export default EducationCourse
