import React, { useState } from 'react'
import {
  AboutWrapper,
  Upath,
  RpathU,
  Text,
  AdditionBlock,
  Block,
  Clients
} from './About.styles'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import * as Scroll from 'react-scroll'
const About = props => {
  const [people, setPeople] = useState(4980)
  if (people < 5000) {
    setTimeout(() => {
      setPeople(people + 1)
    }, 50)
  }
  return (
    <AboutWrapper id="About">
      <Upath>
        <Slide top big opposite>
          <img src={require('./../../img/U-pink.svg')} alt="Фоновая буква U" />
        </Slide>
      </Upath>
      <RpathU>
        <img
          src={require('./../../img/rpathu.svg')}
          alt="Переход между R и U"
        />
      </RpathU>
      <Text>
        <Fade right>
          <h1>EDUCATION</h1>
        </Fade>
        <Fade delay={700}>
          <p>
            Digital и SMM - одни из самых быстроразвивающихся направлений в
            интернет-пространстве. Если хочешь быть профи в создании
            вдохновляющего визуала, написании цепляющих текстов и привлечении
            новых клиентов через официальную рекламу Instagram - тебе срочно
            нужно записаться на курс «Forsmart Education 2.0».
          </p>
          <Scroll.Link className="link" to="Events" spy={true} smooth={true}>
            Перейти к расписанию
          </Scroll.Link>
        </Fade>
      </Text>
      <Clients>
        <Fade>
          <img src={require('./../../img/Clients.png')} alt="" />
        </Fade>
      </Clients>
      <AdditionBlock>
        <Slide delay={400} bottom>
          <Block>
            <h2>
              Мы обучили более <b>{people}</b> человек
            </h2>
            <h3>
              <p>
                После прохождения каждого курса студенты получают сертификат
                FORSMART Education
              </p>
            </h3>
          </Block>
          <img src={require('./../../img/diplom.jpg')} alt="" />
        </Slide>
      </AdditionBlock>
    </AboutWrapper>
  )
}

export default About
