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

export const HelloPageWrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 800px;
  max-height: 1100px;
  height: calc(100vh + 250px);
  overflow: hidden;
  background-image: linear-gradient(-180deg, #cd4e4e 0%, #d8127d 97%);
  @media screen and (max-width: 500px) {
    height: calc(100vh + 20px);
    min-height: 600px;
  }
`

export const Circle = styled.div`
  position: fixed;
  width: ${props => props.size + 'px'};
  height: ${props => props.size + 'px'};
  border-radius: 50%;
  opacity: 0.55;
  background: #9291be;
  top: ${props => props.top};
  left: ${props => props.left};
  animation: ${props => rotate(props.x, props.y)} 50s ease infinite;
  @media screen and (max-width: 500px) {
    width: ${props => props.size / 2 + 'px'};
    height: ${props => props.size / 2 + 'px'};
  }
`
export const Pattern = styled.div`
  position: absolute;
  width: 100%;
  height: 200vh;
  background-image: url('${require('./../../img/pattern3.svg')}');
  background-position-x: 50%;
  background-position-y: -20%;
`

export const Logo = styled.div`
  position: absolute;
  left: 40px;
  top: 40px;
  @media screen and (max-width: 500px) {
    img {
      width: 50%;
    }
  }
  @media screen and (max-width: 380px) {
    top: 20px;
    left: 20px;
    img {
      width: 50%;
    }
  }
`

export const BackR = styled.div`
  position: absolute;
  top: 200px;
  @media screen and (max-width: 500px) {
    top: 50%;
    img {
      width: 50%;
    }
  }
  @media screen and (max-width: 380px) {
    top: 43%;
    img {
      width: 50%;
    }
  }
`

export const Text = styled.div`
  position: absolute;
  top: 155px;
  left: 40%;
  color: white;
  h1 {
    font-size: 47pt;
    text-align: left;
    line-height: 0.6;
    @media screen and (max-width: 1100px) {
      font-size: 37pt;
    }
  }
  h2 {
    font-size: 25pt;
    text-align: left;
    margin-top: -20px;
    line-height: 0.6;
    @media screen and (max-width: 1100px) {
      font-size: 15pt;
    }
  }
  .link {
    margin-top: 25px;
    position: absolute;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    left: 45%;
    width: 80%;
    line-height: 1;
    top: 200px;
    h1 {
      font-size: 25pt;
      line-height: 0.5;
    }
    h2 {
      font-size: 13pt;
      margin-top: 0;
    }
  }
  @media screen and (max-width: 500px) {
    top: 110px;
    left: 40px;
    width: 80%;
    line-height: 1;
    h1 {
      line-height: 1;
      font-size: 24pt;
      line-height: 0.5;
    }
    h2 {
      font-size: 13pt;
      margin-top: -10px;
    }
  }
  @media screen and (max-width: 380px) {
    top: 90px;
    left: 20px;
    width: 80%;
    h1 {
      font-size: 22pt;
      line-height: 0.5;
    }
    h2 {
      font-size: 12pt;
      margin-top: -10px;
    }
  }
  @media screen and (max-width: 320px) {
    h1 {
      font-size: 15pt;
    }
    h2 {
      font-size: 8pt;
      margin-top: 5px;
    }
  }
`
export const Path = styled.div`
  position: absolute;
  width: 200%;
  height: 250px;
  top: auto;
  bottom: -30px;
  background-image: url('${require('./../../img/path.svg')}');
  background-repeat: repeat-x;
  background-position-y: bottom;
  animation: wave 50s forwards infinite ease-out;

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

export const StartBack = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: black;
  animation: start 2s forwards;
  z-index: 1000000;
  @keyframes start {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    99% {
      transform: translateX(0%);
    }
    100% {
      transform: translateY(100%);
      opacity: 0;
    }
  }
`
export const PrettyLinks = styled.div`
  i {
    font-style: normal;
    text-transform: uppercase;
    padding: 5px 15px;
    transition: 0.5s ease;
    position: relative;
  }

  i:first-child {
    color: #d8127d;
  }

  i:first-child:before {
    position: absolute;
    display: block;
    background-color: white;
    content: '';
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: 0.5s ease;
  }

  &:hover i:first-child:before {
    width: 0;
  }

  &:hover {
    i:first-child {
      color: white;
    }
    i:last-child {
      color: #d8127d;
    }
  }

  i:last-child:before {
    position: absolute;
    display: block;
    background-color: white;
    content: '';
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    z-index: -1;
    transition: 0.5s ease;
  }

  &:hover i:last-child:before {
    width: 100%;
  }
`
