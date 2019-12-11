import styled from 'styled-components'

export const TeacherWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 1800px;
  background-color: white;
  margin-top: -100px;
  overflow-x: hidden;
  @media screen and (max-width: 1200px) {
    min-height: 2600px;
  }
  @media screen and (max-width: 1024px) {
    overflow: hidden;
  }
  @media screen and (max-width: 500px) {
    height: auto;
    min-height: 1900px;
  }
`
export const TeacherWrapperBLueBack = styled.div`
  position: absolute;
  width: 50vw;
  height: 100vh;
  left: 50vw;
  background: #3d38d0;
  @media screen and (max-width: 500px) {
    width: 80vw;
    left: 20vw;
  }
`
export const TeacherWrapperMainBack = styled.div`
  /* overflow-y: auto; */
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url('${require('./../../img/test.svg')}');
    @media screen and (max-width: 1200px) {
      top: 0%;
      background-position-x: 20%;
    }
    background-size: cover;
    @media screen and (max-width: 500px) {
      top: 0%;
      background-position-x: 35%;
    }
    &:after{
      position: absolute;
      width: 100%;
      height: 70%;
      top: 25%;
      background-image: url('${require('./../../img/backPic.png')}');
      background-size: cover;
      display: block;
      content: ''
    }
`
export const Text = styled.div`
  position: relative;
  padding-top: 36vh;
  left: 25%;
  color: white;
  h1 {
    font-size: 47pt;
    text-align: left;
    @media screen and (max-width: 920px) {
      font-size: 37pt;
    }
    @media screen and (max-width: 500px) {
      font-size: 20pt;
    }
  }
  p {
    width: 55%;
    font-family: 'Inter';
    font-size: 15pt;
    font-weight: 500;
    text-align: left;
    margin-top: -43px;
    @media screen and (max-width: 920px) {
      width: 70%;
      margin-top: -33px;
    }
    @media screen and (max-width: 500px) {
      margin-top: -10px;
      font-size: 10pt;
      width: 75%;
    }
  }
  @media screen and (max-width: 500px) {
    padding-top: 16vh;
    margin-bottom: 10vh;
    left: 10%;
    top: 10vh;
  }
`
export const TeacherBlock = styled.div`
  /* overflow: hidden; */
  position: relative;
  width: 45%;
  left: ${props => (props.center ? 'none' : '4%')};
  margin-left: ${props => (props.center ? '25%' : '0%')};
  height: 262px;
  top: 200px;
  float: left;
  margin-bottom: 70px;
  @media screen and (max-width: 1200px) {
    margin-left: 9%;
    width: 100%;
    /* height: 150px;
    top: 100px; */
  }
  @media screen and (max-width: 850px) {
    margin-left: 0%;
  }
  @media screen and (max-width: 650px) {
    margin-left: -10%;
  }
  @media screen and (max-width: 500px) {
    margin-left: 0;
    left: 0;
    width: 100%;
    height: 150px;
    top: 100px;
  }
`
export const BlockTitle = styled.div`
  position: absolute;
  top: 0px;
  width: 55%;
  left: calc(10% + 250px / 1.3);
  text-align: center;
  h1 {
    margin-top: 0;
    color: #e5fd00;
    font-size: 13pt;
    @media screen and (max-width: 500px) {
      font-size: 10pt;
    }
  }
  @media screen and (max-width: 500px) {
    top: -30px;
    width: 60%;
    left: calc(12% + 60px);
  }
`
export const BlockCircle = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  background: #d8d8d8;
  border: 6px solid #e5fd00;
  border-radius: 50%;
  left: 10%;
  background-image: url('${props => props.background}');
  background-size: cover;
  /* @media screen and (max-width: 930px) {
    border: 3px solid #e5fd00;
    width: 190px;
    height: 190px;
    left: 14%;
  } */
  @media screen and (max-width: 500px) {
    border: 3px solid #e5fd00;
    width: 140px;
    height: 140px;
    left: 5%;
    top: 10px

  }
`
export const BlockText = styled.div`
  position: absolute;
  width: 50%;
  max-width: 350px;
  height: 190px;
  top: 25px;
  background: white;
  left: calc(10% + 250px / 1.3);
  border-radius: 20px;
  border: 3px solid #e5fd00;
  padding-top: 10px;
  padding-right: 20px;
  display: grid;
  justify-content: center;
  h1 {
    margin-left: 25%;
    font-size: 14pt;
    line-height: 0;
    @media screen and (max-width: 500px) {
      font-size: 8pt;
      margin-left: 35%;
    }
    @media screen and (max-width: 320px) {
      font-size: 7pt;
      margin-left: 45%;
    }
  }
  p {
    font-family: 'Inter';
    margin-left: 25%;
    font-size: 9pt;
    @media screen and (max-width: 500px) {
      font-size: 6.6pt;
      margin-left: 35%;
    }
    @media screen and (max-width: 320px) {
      font-size: 6pt;
      margin-left: 45%;
    }
  }
  /* @media screen and (max-width: 930px) {
    width: 68%;
    height: 185px;
    left: 22%;
    top: 0;
    padding-top: 5px;
    padding-right: 10px;
  } */
  @media screen and (max-width: 500px) {
    width: 68%;
    height: 155px;
    left: 22%;
    top: 0;
    padding-top: 5px;
    padding-right: 10px;
  }
`

export const Footer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  /* background-color: blueviolet; */
  padding-top: 200px;
  padding-bottom: 50px;
  /* top: 200px; */
  /* float: none; */
  /* bottom: 14%; */
  text-align: center;
  p {
    width: 50%;
    margin-left: 25%;
    font-family: 'Inter';
    font-size: 20pt;
    color: white;
    text-align: left;
  }
  img {
  }
  @media screen and (max-width: 500px) {
    /* top: 100px; */
    /* bottom: 10%; */
    width: 90%;
    left: 5%;
    p {
      width: 90%;
      margin-left: 5%;
      font-size: 15pt;
    }
  }
`
