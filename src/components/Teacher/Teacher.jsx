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
import * as data from './teachers.json'
import LightSpeed from 'react-reveal/LightSpeed'
import Fade from 'react-reveal/Fade'

let allPosts = data.teachers.map((el, index) => {
  return (
    <TeacherBlock center={data.teachers[index].center}>
      <Fade
        right={!data.teachers[index].right}
        left={data.teachers[index].right}
      >
        <BlockTitle>
          <h1>{data.teachers[index].title}</h1>
        </BlockTitle>
        <BlockText>
          <h1>{data.teachers[index].name}</h1>
          <p>{data.teachers[index].description}</p>
          <h1>Учим</h1>
          <p>{data.teachers[index].skills}</p>
        </BlockText>
        <BlockCircle
          background={require('./../../img' + data.teachers[index].photo)}
        ></BlockCircle>
      </Fade>
    </TeacherBlock>
  )
})

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
          Скучные занятия - не про Forsmart! Именно поэтому наши преподаватели
          молодые, задорные, веселые и, конечно (куда ж без этого), настоящие
          профессионалы в своей области.
        </p>
      </Fade>
    </Text>
    {allPosts}
    <Footer>
      <Fade bottom>
        <p>
          Самое главное - они с радостью готовы поделиться с вами своими
          знаниями и умениями, поэтому и подготовили для вас огненный курс.
        </p>
        <img src={require('./../../img/teacherLogo.svg')} alt="" />
      </Fade>
    </Footer>
    <Path></Path>
  </TeacherWrapper>
)

export default Teacher
