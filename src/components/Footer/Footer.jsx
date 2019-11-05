import React from 'react'
import { FooterWrapper, Circle, Logo, Text, Path } from './Footer.styles'
import Fade from 'react-reveal/Fade'

const Footer = props => (
  <FooterWrapper>
    <Circle></Circle>
    <Logo>
      <Fade left>
        <img src={require('./../../img/footerlogo.svg')} alt="" />
      </Fade>
    </Logo>
    <Text>
      <Fade>
        <h1>FORSMART EDUCATION</h1>
        <p>Ул. Серафимовича д. 15</p>
        <h1>Сайт</h1>
        <p>forsmart_education</p>
        <p>forsmart-edu@gmail.com</p>
      </Fade>
    </Text>
    <Path>
      <Fade right>
        <img src={require('./../../img/Urotate.svg')} alt="" />
      </Fade>
    </Path>
  </FooterWrapper>
)

export default Footer
