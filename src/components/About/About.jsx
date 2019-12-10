import React from 'react'
import {
  AboutWrapper,
  Upath,
  RpathU,
  Text,
  AdditionBlock,
  Block
} from './About.styles'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import * as Scroll from 'react-scroll'
const About = props => (
  <AboutWrapper id="About">
    <Upath>
      <Slide top big opposite>
        <img src={require('./../../img/U-pink.svg')} alt="Фоновая буква U" />
      </Slide>
    </Upath>
    <RpathU>
      <img src={require('./../../img/rpathu.svg')} alt="Переход между R и U" />
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
          новых клиентов через официальную рекламу Instagram - тебе срочно нужно
          записаться на курс «Forsmart Education 2.0».
        </p>
        <Scroll.Link className="link" to="Events" spy={true} smooth={true}>
          Перейти к расписанию
        </Scroll.Link>
      </Fade>
    </Text>
    <AdditionBlock>
      <Slide delay={400} bottom>
        <Block>
          <p>
            <h3>
              После прохождения каждого курса студенты получают сертификат
              FORSMART Education
            </h3>
          </p>
        </Block>
      </Slide>
    </AdditionBlock>
  </AboutWrapper>
)

export default About
