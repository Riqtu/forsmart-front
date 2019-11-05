import styled from 'styled-components'

export const EventsWrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 800px;
  height: 100vh;
  overflow: scroll;
  background-color: white;
  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  @media screen and (max-width: 500px) {
    height: calc(100vh + 20px);
    min-height: 600px;
  }
`
export const Logo = styled.h1`
  text-transform: uppercase;
  position: absolute;
  top: 20px;
  left: 50px;
  font-size: 40pt;
  @media screen and (max-width: 500px) {
    left: 20px;
    font-size: 25pt;
  }
`
export const BlockWrapper = styled.section`
  position: relative;
  overflow-x: scroll !important;
  width: ${props => props.width * 320 + 'px'};
  float: left;
  height: 550px;
  padding-left: 30px;
  top: 20%;
  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  @media screen and (max-width: 500px) {
    height: 80%;
    width: ${props => props.width * 270 + 'px'};
    padding-left: 10px;
  }
`
export const Title = styled.h1`
  position: relative;
  text-transform: uppercase;
  font-size: 28pt;
  margin-top: 50px;
  color: white;
  transition: 0.3s;
  z-index: 1;
  @media screen and (max-width: 500px) {
    font-size: 20pt;
  }
  @media screen and (max-width: 320px) {
    font-size: 17pt;
  }
`
export const Date = styled.h2`
  position: relative;

  text-transform: uppercase;
  font-size: 32pt;
  margin-top: 0;
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
  margin: 0;
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
export const Contacts = styled.div`
  position: relative;
  font-size: 20pt;
  z-index: 1;
  opacity: 0;
  color: black;
  transition: 0.5s;
`
export const Block = styled.div`
  position: relative;
  width: 370px;
  height: 480px;
  float: left;
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
  &:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  &:hover ${Title} {
    color:black;
  }
  &:hover ${Description} {
    color:black;
  }
  &:hover ${Adress} {
    color:black;
  }
  &:hover ${Time} {
    color:black;
  }
  &:hover ${Date} {
    color:black;
  }
  &:hover ${BlockBack} {
    opacity: 0.7
  }
  &:hover ${Contacts} {
    opacity: 1
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
    all: none;
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
