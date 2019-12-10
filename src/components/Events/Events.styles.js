import styled from 'styled-components'

export const EventsWrapper = styled.section`
  overflow-x: scroll;
  position: relative;
  width: 100%;
  min-height: 800px;
  /* height: 100vh; */
  background-color: white;
  @media screen and (max-width: 500px) {
    /* height: calc(100vh + 20px); */
    min-height: 600px;
  }
`
export const Logo = styled.h1`
  position: relative;
  left: 0;
  text-transform: uppercase;
  right: 0;
  top: 20px;
  margin-left: 50px;
  overflow-x: hidden;
  font-size: 40pt;
  @media screen and (max-width: 500px) {
    margin-left: 20px;
    font-size: 25pt;
  }
`
export const Next = styled.img`
  position: absolute;
  width: 20px;
  top: 50%;
  left: auto;
  right: 10px;
  opacity: 0.5;
  display: none;
  @media screen and (max-width: 500px) {
    display: block;
  }
`

export const FormWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 50%);
  z-index: 5;
  transition: 0.6s;
  /* display: ${props => (props.active ? 'block' : 'none')}; */
  opacity: ${props => (props.active ? '1' : '0')};
  transform: translateY(${props => (props.active ? '0' : '100%')});
  display: grid;
  visibility:${props => (props.active ? 'visible' : 'hidden')}; 
  align-content: center;
  justify-content: center;

`

export const Form = styled.form`
  position: relative;
  width: 330px;
  height: 300px;
  background-color: white;
  border-radius: 20px;
  text-align: center;
`

export const Input = styled.input`
  width: 70%;
  /* margin-left: 15%; */
  margin-top: 10px;
  text-align: center;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #d8127d;
  transition: 0.3s;
  opacity: ${props => (props.active ? '0' : '1')};
  visibility: ${props => (props.active ? 'hidden' : 'visible')};
`
export const Submit = styled.input`
  width: 70%;
  -webkit-appearance: none;
  /* margin-left: 15%; */
  margin-top: 15px;
  text-align: center;
  height: 40px;
  border-radius: 10px;
  background-color: #d8127d;
  color: white;
  font-family: 'Montserrat', sans-serif;
  border: none;
  opacity: ${props => (props.active ? '0' : '1')};
  visibility: ${props => (props.active ? 'hidden' : 'visible')};
  transition: 0.3s;
  &:hover {
    background-color: white;
    color: #d8127d;
    border: 1px solid #d8127d;
  }
`
export const Thanks = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #d8127d;
  opacity: ${props => (props.active ? '1' : '0')};
  visibility: ${props => (props.active ? 'visible' : 'hidden')};
  border-radius: 20px;
  transition: 0.4s;
  color: white;
  span {
    position: absolute;
    width: 100%;
    top: 40%;
    left: 0;
    text-align: center;
    font-size: 90pt;
    animation: heartbeat 1s infinite;
  }
  @keyframes heartbeat {
    0% {
      transform: scale(0.85);
    }
    20% {
      transform: scale(1);
    }
    40% {
      transform: scale(0.85);
    }
    60% {
      transform: scale(1);
    }
    80% {
      transform: scale(0.85);
    }
    100% {
      transform: scale(0.85);
    }
  }
`
export const BlockWrapper = styled.section`
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  width: ${props => props.width * 220 + 'px'};
  min-width: 98%;
  float: left;
  padding-left: 30px;
  @media screen and (max-width: 500px) {
    width: ${props => props.width * 180 + 'px'};
    padding-left: 10px;
  }
`
export const Date = styled.h2`
  position: relative;

  text-transform: uppercase;
  font-size: 24pt;
  margin-top: -10px;
  transition: 0.3s;
  z-index: 1;
  @media screen and (max-width: 500px) {
    font-size: 24pt;
  }
  @media screen and (max-width: 320px) {
    font-size: 20pt;
  }
`
export const Description = styled.p`
  position: relative;
  width: 90%;
  font-family: 'Inter';
  font-size: 14pt;
  margin-top: -10px;
  line-height: 1.3;
  color: white;
  transition: 0.3s;
  z-index: 1;
  @media screen and (max-width: 500px) {
    font-size: 12pt;
  }
  @media screen and (max-width: 320px) {
    font-size: 9pt;
  }
`
export const Adress = styled.h3`
  position: absolute;
  top: auto;
  bottom: 15%;
  left: auto;
  right: 20px;
  font-size: 18pt;
  margin-top: -10px;
  line-height: 1;
  transition: 0.3s;
  @media screen and (max-width: 500px) {
    font-size: 15pt;
  }
  @media screen and (max-width: 320px) {
    font-size: 12pt;
  }
`
export const Time = styled.h3`
  position: absolute;
  top: auto;
  bottom: 0%;
  left: auto;
  right: 20px;
  font-size: 35pt;
  margin-top: -10px;
  line-height: 1;
  transition: 0.3s;
  @media screen and (max-width: 500px) {
    font-size: 30pt;
  }
  @media screen and (max-width: 320px) {
    font-size: 26pt;
  }
`
export const TakePart = styled.button`
  position: absolute;
  width: 50%;
  height: 40px;
  left: 25%;
  background-color: blue;
  top: auto;
  bottom: 0;
  margin: 0;
  cursor: pointer;
  border: none;
`
export const BlockBack = styled.div`
  margin-top: -20px;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 20px;
  opacity: 0;
  transition: 0.3s;
  z-index: 0;
`
export const Contacts = styled.button`
  cursor: pointer;
  width: 250px;
  height: 50px;
  margin-top: 30px;
  margin-left: calc(50% - 130px);
  position: relative;
  text-align: center;
  font-size: 20pt;
  z-index: 1;
  opacity: 0;
  color: black;
  transition: 0.5s;
  font-family: 'Montserrat', sans-serif;
  border-radius: 10px;
  border: none;
  color: #d8127d;
  transition: 0.3s;
  background-color: white;
  visibility: hidden;
  &:hover {
    background-color: #d8127d;
    color: white;
  }
`

export const Title = styled.h1`
  position: relative;
  text-transform: uppercase;
  font-size: 20pt;
  color: white;
  transition: 0.3s;
  z-index: 1;
  line-height: 1;
  margin-top: 23px;
  @media screen and (max-width: 500px) {
    font-size: 18pt;
  }
  @media screen and (max-width: 320px) {
    font-size: 17pt;
  }
`

export const Block = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;
  position: relative;
  width: 370px;
  height: 480px;
  float: left ;
  /* white-space: nowrap; */
  /* display: inline-block; */
  background-color: gray;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  border-radius: 20px;
  padding-left: 10px;
  margin-left: 20px;
  margin-right: 20px;
  background-image: url('${props => 'https:' + props.file}');
  background-size: cover;
  line-height: 0.2;
  color: white;
  transition: 0.3s;
  padding: 20px;
  box-sizing: border-box;
  &:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  &:hover ${Title} {
    color:black;
    /* opacity: 0 */
  }
  &:hover ${Description} {
    color:black;
    /* opacity: 0 */
  }
  &:hover ${Adress} {
    color:black;
    /* opacity: 0 */
  }
  &:hover ${Time} {
    color:black;
    /* opacity: 0 */
  }
  &:hover ${Date} {
    color:black;
    /* opacity: 0 */
  }
  &:hover ${BlockBack} {
    opacity: 0.7
  }
  &:hover ${Contacts} {
    opacity: 1;
    visibility: visible;
  }

  @media screen and (max-width: 500px) {
    width: 300px;
  height: 430px;
  &:hover{
  }
  &:hover ${Title} {
    all: none;
  }
  &:hover ${Description} {
    all: none;
  }
  &:hover ${Adress} {
    all: none;
  }
  &:hover ${Time} {
    all: none;
  }
  &:hover ${Date} {
    all: none;
  }
  &:hover ${BlockBack} {
    all: none;
  }
  &:hover ${Contacts} {
    opacity: 1;
  }

  &:active{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  &:active ${Title} {
    color:black;
  }
  &:active ${Description} {
    color:black;
  }
  &:active ${Adress} {
    color:black;
  }
  &:active ${Time} {
    color:black;
  }
  &:active ${Date} {
    color:black;
  }
  &:active ${BlockBack} {
    opacity: 0.7
  }
  &:active ${Contacts} {
    opacity: 1
  }
  }
  @media screen and (max-width: 320px) {
  width: 240px;
  height: 380px;
  }
`
