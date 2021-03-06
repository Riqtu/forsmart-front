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
  Footer
} from './Teacher.styles'
import * as data from './teachers.json'
import LightSpeed from 'react-reveal/LightSpeed'
import Fade from 'react-reveal/Fade'

let allPosts = data.teachers.map((el, index) => {
  return (
    <TeacherBlock center={data.teachers[index].center} key={index}>
      <Fade
        right={!data.teachers[index].right}
        left={data.teachers[index].right}
      >
        <BlockTitle>
          <h1>{data.teachers[index].title}</h1>
        </BlockTitle>
        <BlockText>
          <h1>{data.teachers[index].name}</h1>
          <p>
            {data.teachers[index].description.split('\n').map((item, i) => (
              <React.Fragment key={i}>
                {item}
                <br />
              </React.Fragment>
            ))}
          </p>
          {/* <h1>Учим</h1>
          <p>{data.teachers[index].skills}</p> */}
        </BlockText>
        <BlockCircle
          background={require('./../../img' + data.teachers[index].photo)}
        ></BlockCircle>
      </Fade>
    </TeacherBlock>
  )
})

const Teacher = props => {
  return (
    <TeacherWrapper id="Teach">
      <TeacherWrapperBLueBack />
      <TeacherWrapperMainBack />
      <Text>
        <LightSpeed right>
          <h1>ПРЕПОДАВАТЕЛИ</h1>
        </LightSpeed>
        <Fade delay={600}>
          <p>
            Спикеры FORSMART EDUCATION - это команда профессионалов, которые
            продолжают совершенствовать свои навыки каждый день. Они точно
            знают, что современный маркетинг немыслем без социальных сетей. Они
            освоили не только теорию SMM, но и опробовали свои знания на
            практике. Они научат ориентироваться в самой быстро развивающейся
            сфере. За их плечами десятки успешных проектов и они готовы сделать
            из вас специалистов сферы digital.
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
    </TeacherWrapper>
  )
}

export default Teacher
