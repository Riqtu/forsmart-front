import React from 'react'
import { AboutWrapper, Upath, RpathU, Text } from './About.styles'

const About = props => (
  <AboutWrapper>
    <Upath>
      <img src={require('./../../img/U-pink.svg')} alt="" />
    </Upath>
    <RpathU>
      <img src={require('./../../img/rpathu.svg')} alt="" />
    </RpathU>
    <Text>
      <h1>EDUCATION</h1>
      <p>
        Красивый текст про education сижу и думаю. Очень интересное занятие.
        Научим многому! будете вставать с утра и продвигать инстаграм, кушать и
        продвигать инстаграм, ложиться спать и продвигать инстаграм. Инстаграм
        будет продвигать вас, а вы - инстаграм.
      </p>
    </Text>
  </AboutWrapper>
)

export default About
