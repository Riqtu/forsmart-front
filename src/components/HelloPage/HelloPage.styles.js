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
  width: 100vw;
  min-height: 800px;
  height: calc(100vh + 250px);
  overflow: hidden;
  background-image: linear-gradient(-180deg, #cd4e4e 0%, #d8127d 97%);
`

export const Circle = styled.div`
  position: fixed;
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 50%;
  opacity: 0.55;
  background: #9291be;
  top: ${props => props.top};
  left: ${props => props.left};
  animation: ${props => rotate(props.x, props.y)} 50s ease infinite;
`
export const Pattern = styled.div`
  position: absolute;
  width: 100vw;
  height: 200vh;
  background-image: url('${require('./../../img/pattern3.svg')}');
  background-position-x: 50%;
  background-position-y: -20%;
`

export const Logo = styled.div`
  position: absolute;
  left: 40px;
  top: 40px;
`

export const BackR = styled.div`
  position: absolute;
  top: 200px;
`

export const Text = styled.div`
  position: absolute;
  top: 130px;
  left: 40%;
  color: white;
  h1 {
    font-size: 47pt;
    text-align: left;
  }
  h2 {
    font-size: 25pt;
    text-align: left;
    margin-top: -43px;
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
