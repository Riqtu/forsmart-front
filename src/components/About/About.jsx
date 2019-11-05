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
        <img src={require('./../../img/U-pink.svg')} alt="" />
      </Slide>
    </Upath>
    <RpathU>
      <img src={require('./../../img/rpathu.svg')} alt="" />
    </RpathU>
    <Text>
      <Fade right>
        <h1>EDUCATION</h1>
      </Fade>
      <Fade delay={700}>
        <p>
          Красивый текст про education сижу и думаю. Очень интересное занятие.
          Научим многому! будете вставать с утра и продвигать инстаграм, кушать
          и продвигать инстаграм, ложиться спать и продвигать инстаграм.
          Инстаграм будет продвигать вас, а вы - инстаграм.
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
            Здесь можем рассказать о заслугах перед отечеством, например
            сказать, что у нас:
          </p>
          <h3>
            1000 довольных <br /> 100000 постов <br /> Конверсия всех конверсий
          </h3>
        </Block>
      </Slide>
    </AdditionBlock>
  </AboutWrapper>
)

export default About
