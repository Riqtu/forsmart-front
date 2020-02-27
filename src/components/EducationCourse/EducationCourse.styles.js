import styled, { keyframes } from 'styled-components'

const rotate = (x, y) => keyframes`
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(${x}px, ${y}px);
    }
    100% {
      transform: translate(0, 0);
    }
`
export const EducationCourseWrapper = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 600px;

  margin-top: -2px;
  /* min-height: 900px; */
  background-color: #d8127d;
  /* margin-top: -20px;  */
  overflow: hidden;
  /* overflow-y: scroll; */
  /* z-index: 5; */
`
export const Logo = styled.div`
  padding-top: 50px;
  padding-left: 50px;
  position: relative;
  h1 {
    text-transform: uppercase;
    font-size: 30pt;
    color: white;
    margin: 0;
    padding: 0;
  }
  h2 {
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    font-size: 20pt;
    color: white;
  }
  @media screen and (max-width: 500px) {
    padding-top: 10px;
    padding-left: 10px;
    h1 {
      font-size: 15pt;
    }
  }
`
export const ButtonsBlock = styled.div`
  position: relative;
  margin-left: 50px;
  width: 40%;
  /* height: 50vh; */
  /* background-color: blue; */
  margin-top: 20px;
  float: left;
  @media screen and (max-width: 500px) {
    margin-left: 10px;
    width: 30%;
  }
`
export const Button = styled.button`
  /* position: relative; */
  cursor: pointer;
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid white;
  font-size: 15pt;
  font-family: 'Montserrat', sans-serif;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  padding: 5px;
  padding-left: 0;
  text-align: left;
  transition: 0.3s;
  float: none;
  &:hover {
    color: rgba(20, 20, 20, 100%);
  }
  &:focus {
    outline: none;
    color: rgba(20, 20, 20, 100%);
    border-bottom: 1px solid black;
  }
  @media screen and (max-width: 500px) {
    border-bottom: 1px solid white;
    font-size: 8pt;
  }
`

export const Text = styled.div`
  /* margin-top: 25px;  */
  position: relative;
  width: 40%;
  min-height: 50vh;
  float: left;
  font-size: 13pt;
  font-family: 'Inter', sans-serif;
  margin: 25px;
  margin-left: 5%;
  color: white;
  animation: start2 0.6s forwards;
  transition: 0.5s;
  opacity: ${props => (props.opac ? '0' : '1')};
  margin-top: ${props => (props.opac ? '50px' : '25px')};
  h1 {
    font-family: 'Montserrat', sans-serif;
    margin-top: -10px;
  }

  @media screen and (max-width: 500px) {
    h1 {
      font-size: 12pt;
    }
    min-height: 450px;
    /* background-color: blue; */
    width: 60%;
    margin-left: 7px;
    margin-right: 10px;
    font-size: 9pt;
    transition: 0.5s;
    opacity: ${props => (props.opac ? '0' : '1')};
    margin-top: ${props => (props.opac ? '55px' : '30px')};
  }
`
export const Circle = styled.div`
  /* overflow: auto; */
  position: absolute;
  width: ${props => props.size + 'px'};
  height: ${props => props.size + 'px'};
  border-radius: 50%;
  opacity: 0.25;
  /* background: #9291be; */
  background-image: radial-gradient(50% 50%, #d8127d 30%, #e5fd00 100%);
  top: ${props => props.top};
  left: ${props => props.left};
  animation: ${props => rotate(props.x, props.y)} 50s ease infinite;
  @media screen and (max-width: 500px) {
    /* display: none; */
    width: ${props => props.size / 2 + 'px'};
    height: ${props => props.size / 2 + 'px'};
  }
`
export const PathWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`
export const Path = styled.div`
  position: relative;
  width: 200%;
  height: 250px;
  top: auto;
  background-image: url('${require('./../../img/path.svg')}');
  background-repeat: repeat-x;
  background-position-y: bottom;
  animation: wave 50s forwards infinite ease-out alternate;
  overflow: hidden;
  @media screen and (max-width: 500px) {
    /* bottom: -70px; */
  }
  @keyframes wave {
      0%{
        transform: translateX(0);
      }
      50%{
        transform: translateX(-50%);
      }
      100%{
        transform: translateX(0%);
      }
  }
`
