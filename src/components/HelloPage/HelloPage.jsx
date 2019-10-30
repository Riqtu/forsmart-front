import React from 'react'
import {
  HelloPageWrapper,
  Circle,
  Logo,
  Pattern,
  BackR,
  Text,
  Path
} from './HelloPage.styles'

const HelloPage = props => (
  <HelloPageWrapper>
    <Circle
      size="557px"
      top="-200px"
      left="-100px"
      y={(Math.random() < 0.5 ? -100 : 100) | 0}
      x={(Math.random() < 0.5 ? -100 : 100) | 0}
    />
    <Circle
      size="328px"
      top="45%"
      left="25%"
      y={(Math.random() < 0.5 ? -200 : 200) | 0}
      x={(Math.random() < 0.5 ? -200 : 200) | 0}
    />
    <Circle
      size="557px"
      top="30%"
      left="70%"
      y={(Math.random() < 0.5 ? -200 : 200) | 0}
      x={(Math.random() < 0.5 ? -200 : 200) | 0}
    />
    <Pattern></Pattern>
    <Logo>
      <img src={require('./../../img/logo.svg')} alt="" />
    </Logo>
    <BackR>
      <img src={require('./../../img/R-white.svg')} alt="" />
    </BackR>
    <Text>
      <h1>
        ПРОКАЧАЙ СВОИ <br /> DIGITAL НАВЫКИ{' '}
      </h1>
      <h2>
        “10 главных шагов к успешному <br /> продвижению в instagram”
      </h2>
    </Text>
    <Path></Path>
  </HelloPageWrapper>
)

export default HelloPage
