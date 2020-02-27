import React from 'react'
import { FooterWrapper, Circle, Logo, Text, Path, Links } from './Footer.styles'
import Fade from 'react-reveal/Fade'

const Footer = props => (
  <FooterWrapper>
    <Circle></Circle>
    <Logo>
      <Fade left>
        <img src={require('./../../img/footerlogo.svg')} alt="Логотип" />
      </Fade>
    </Logo>
    <Text>
      <Fade>
        <h1>FORSMART EDUCATION</h1>
        <p>Ул. 18 линия д. 8</p>
        <h1>Сайт</h1>

        <Links href="https://instagram.com">
          <img
            src={require('./../../img/instagram-logo.svg')}
            alt="Лого инстаграм"
          />{' '}
          <p>forsmart_education</p>
        </Links>
        <Links href="mailto:forsmart.education.gmail.com">
          <img src={require('./../../img/envelope.svg')} alt="Почта" />{' '}
          <p>forsmart.education.gmail.com</p>
        </Links>
        <Links href="tel:+79996924222">
          <img
            src={require('./../../img/whatsapp-logo-variant.svg')}
            alt="Телефон/WhatsApp"
          />{' '}
          <p>+7-(999)-692-42-22</p>
        </Links>
      </Fade>
    </Text>
    <Path>
      <Fade right>
        <img src={require('./../../img/Urotate.svg')} alt="Фоновая картинка" />
      </Fade>
    </Path>
  </FooterWrapper>
)

export default Footer
