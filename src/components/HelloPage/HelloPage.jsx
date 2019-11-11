import React from 'react'
import {
  HelloPageWrapper,
  Circle,
  Logo,
  Pattern,
  BackR,
  Text,
  Path,
  StartBack,
  PrettyLinks
} from './HelloPage.styles'
import Zoom from 'react-reveal/Zoom'
import Slide from 'react-reveal/Slide'

import * as Scroll from 'react-scroll'

const HelloPage = props => {
  return (
    <HelloPageWrapper>
      <Circle
        size={557}
        top="-200px"
        left="-100px"
        y={(Math.random() < 0.5 ? -100 : 100) | 0}
        x={(Math.random() < 0.5 ? -100 : 100) | 0}
      />
      <Circle
        size={328}
        top="45%"
        left="25%"
        y={(Math.random() < 0.5 ? -200 : 200) | 0}
        x={(Math.random() < 0.5 ? -200 : 200) | 0}
      />
      <Circle
        size={557}
        top="30%"
        left="70%"
        y={(Math.random() < 0.5 ? -200 : 200) | 0}
        x={(Math.random() < 0.5 ? -200 : 200) | 0}
      />
      <Pattern></Pattern>
      <Logo>
        <Zoom top>
          <img src={require('./../../img/logo.svg')} alt="" />
        </Zoom>
      </Logo>
      <BackR>
        <Slide bottom duration={1400}>
          <img src={require('./../../img/R-white.svg')} alt="" />
        </Slide>
      </BackR>
      <Text>
        <h1>
          <Zoom right cascade>
            ПРОКАЧАЙ СВОИ <br />
            DIGITAL НАВЫКИ
          </Zoom>
        </h1>
        <h2>
          <Zoom delay={500}>
            Самый полный курс по <br />
            продвижению в Instagram <br />
            <Scroll.Link className="link" to="About" spy={true} smooth={true}>
              <PrettyLinks>
                <i>Узнать</i>
                <i>Больше</i>
              </PrettyLinks>
            </Scroll.Link>
          </Zoom>
        </h2>
      </Text>
      <Path></Path>
      <StartBack></StartBack>
    </HelloPageWrapper>
  )
}

export default HelloPage
