import React from 'react'
import {
  TeacherWrapper,
  TeacherWrapperBLueBack,
  TeacherWrapperMainBack,
  Text,
  TeacherBlock,
  BlockCircle,
  BlockText,
  BlockTitle,
  Footer,
  Path
} from './Teacher.styles'
import LightSpeed from 'react-reveal/LightSpeed'
import Fade from 'react-reveal/Fade'
const Teacher = props => (
  <TeacherWrapper>
    <TeacherWrapperBLueBack />
    <TeacherWrapperMainBack />
    <Text>
      <LightSpeed right>
        <h1>ПРЕПОДАВАТЕЛИ</h1>
      </LightSpeed>
      <Fade delay={600}>
        <p>
          Наши преподаватели - наша гордость! Как же мы их любим и как же они
          любят вас. Научат пользоваться инстаграмом от и до - от А до Я, от
          начала и до конца. Просто подумайте над этим ч пожалуйста и он станет
          добрым милым и красивым
        </p>
      </Fade>
    </Text>
    <TeacherBlock>
      <Fade left>
        <BlockTitle>
          <h1>Дизайн</h1>
        </BlockTitle>
        <BlockText>
          <h1>Елена Козлова</h1>
          <p>
            Рассказываю зачем нужен дизайн для инстагрмма, ведь это так круто!!
            Всякие красивые штучки-дрючки, палочки - кружочки!
          </p>
          <h1>Учим</h1>
          <p>
            -Дизайн <br />
            -Красоту <br />
            -Привлекательность
          </p>
        </BlockText>
        <BlockCircle
          background={require('./../../img/Helen.png')}
        ></BlockCircle>
      </Fade>
    </TeacherBlock>
    <TeacherBlock>
      <Fade right>
        <BlockTitle>
          <h1>Продвижение</h1>
        </BlockTitle>
        <BlockText>
          <h1>Марина Март</h1>
          <p>
            Рассказываю про продвижение в инстаграме, различные фишки, приколы.
            Хочу чтобы сторисы были отражением жизни и вообще весело-приятно
          </p>
          <h1>Учим</h1>
          <p>
            -Продвижение <br />
            -Кайф <br />
            -Привлекательность
          </p>
        </BlockText>
        <BlockCircle
          background={require('./../../img/Marina.png')}
        ></BlockCircle>
      </Fade>
    </TeacherBlock>
    <TeacherBlock>
      <Fade left>
        <BlockTitle>
          <h1>Дизайн</h1>
        </BlockTitle>
        <BlockText>
          <h1>Елена Козлова</h1>
          <p>
            Рассказываю зачем нужен дизайн для инстагрмма, ведь это так круто!!
            Всякие красивые штучки-дрючки, палочки - кружочки!
          </p>
          <h1>Учим</h1>
          <p>
            -Дизайн <br />
            -Красоту <br />
            -Привлекательность
          </p>
        </BlockText>
        <BlockCircle
          background={require('./../../img/Helen.png')}
        ></BlockCircle>
      </Fade>
    </TeacherBlock>
    <TeacherBlock>
      <Fade right>
        <BlockTitle>
          <h1>Продвижение</h1>
        </BlockTitle>
        <BlockText>
          <h1>Марина Март</h1>
          <p>
            Рассказываю про продвижение в инстаграме, различные фишки, приколы.
            Хочу чтобы сторисы были отражением жизни и вообще весело-приятно
          </p>
          <h1>Учим</h1>
          <p>
            -Продвижение <br />
            -Кайф <br />
            -Привлекательность
          </p>
        </BlockText>
        <BlockCircle
          background={require('./../../img/Marina.png')}
        ></BlockCircle>
      </Fade>
    </TeacherBlock>
    <Footer>
      <Fade bottom>
        <p>
          Классные, правда? А то ли еще будет, когда вы узнаете их вживую!
          Быстрее записывайтесь и откройте для себя больше нового!
        </p>
        <img src={require('./../../img/teacherLogo.svg')} alt="" />
      </Fade>
    </Footer>
    <Path></Path>
  </TeacherWrapper>
)

export default Teacher
