import React from 'react'
import { FooterWrapper, Circle, Logo, Text, Path, Links } from './Footer.styles'
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

        <Links href="https://instagram.com">
          <img src={require('./../../img/instagram-logo.svg')} alt="" />{' '}
          <p>forsmart_education</p>
        </Links>
        <Links href="https://instagram.com">
          <img src={require('./../../img/envelope.svg')} alt="" />{' '}
          <p>forsmart-edu@gmail.com</p>
        </Links>
        <Links href="https://instagram.com">
          <img src={require('./../../img/whatsapp-logo-variant.svg')} alt="" />{' '}
          <p>8 (999) 692 4 222</p>
        </Links>
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
