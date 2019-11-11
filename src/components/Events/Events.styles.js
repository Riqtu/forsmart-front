import styled from 'styled-components'

export const EventsWrapper = styled.section`
  overflow-x: scroll;
  position: relative;
  width: 100%;
  min-height: 800px;
  /* height: 100vh; */
  overflow: scroll;
  background-color: white;
  @media screen and (max-width: 500px) {
    /* height: calc(100vh + 20px); */
    min-height: 600px;
  }
`
export const Logo = styled.h1`
  position: relative;
  text-transform: uppercase;
  right: 0;
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
  overflow-y: hidden;
  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  width: ${props => props.width * 450 + 'px'};
  /* width: 100%; */
  float: left;
  /* height: 80%; */
  /* margin-top: 20%; */
  /* padding-left: 30px; */
  @media screen and (max-width: 500px) {
    width: ${props => props.width * 350 + 'px'};
    padding-left: 10px;
  }
`
export const Date = styled.h2`
  position: relative;

  text-transform: uppercase;
  font-size: 32pt;
  margin-top: -15px;
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
  position: absolute;
  font-size: 20pt;
  z-index: 1;
  opacity: 0;
  color: black;
  transition: 0.5s;
`
export const Links = styled.a`
  display: none;
  position: relative;
  height: 30px;
  text-decoration: none;
  p {
    position: relative;
    font-size: 10pt;
    font-family: 'Inter';
    color: black;
    height: 30px;
    left: 10px;
    display: grid;
    align-content: center;
    @media screen and (max-width: 500px) {
      display: none;
    }
  }
  img {
    filter: invert(100%);
    width: 30px;
    float: left;
    @media screen and (max-width: 500px) {
      margin: 20px;
      margin-left: 0;
    }
  }
`

export const FullDescription = styled.div`
  position: absolute;
  overflow-y: hidden;
  width: 85%;
  height: 95%;
  top: 0;
  left: 2.5%;
  right: 2.5%;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  /* top: 10px;
  left: 10px;
  right: 10px; */
  z-index: 1;
  opacity: 0;
  color: black;
  transition: 0.5s;
  line-height: 0.2;
  h1 {
    line-height: 1;
    font-size: 25pt;
  }
  h2 {
    font-size: 15pt;
  }
  p {
    line-height: 1;
    font-family: 'Inter';
    font-size: 12pt;
    white-space: pre-wrap;
  }
  @media screen and (max-width: 500px) {
    font-size: 14pt;
  }

  &:hover ${Links} {
    display: block;
  }
  &:focus {
    background-color: blue;
  }
  &:focus ${Links} {
    display: block;
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
  line-height: 1;
  margin-top: 23px;
  @media screen and (max-width: 500px) {
    font-size: 20pt;
  }
  @media screen and (max-width: 320px) {
    font-size: 17pt;
  }

  /* &:focus ~ ${FullDescription} {
    opacity: 1;
  } */
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
  &:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  &:hover ${Title} {
    color:black;
    opacity: 0
  }
  &:hover ${Description} {
    color:black;
    opacity: 0
  }
  &:hover ${Adress} {
    color:black;
    opacity: 0
  }
  &:hover ${Time} {
    color:black;
    opacity: 0
  }
  &:hover ${Date} {
    color:black;
    opacity: 0
  }
  &:hover ${BlockBack} {
    opacity: 0.7
  }
  &:hover ${Contacts} {
    opacity: 0
  }
  /* &:hover ${FullDescription} {
    opacity: 1;
    overflow-y: auto;
  } */

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
  /* &:hover ${FullDescription} {
    all: none;
  } */

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
