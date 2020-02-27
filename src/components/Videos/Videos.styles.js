import styled from 'styled-components'

export const VideosWrapper = styled.section`
  position: relative;
  width: 100%;
  /* height: 2000px; */
  background: linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, #ff6f61 150px);
  margin-top: -200px;
`
export const Logo = styled.h1`
  position: relative;

  top: 200px;
  margin-left: 50px;
  font-family: 'Montserrat';
  font-size: 26pt;
  color: white;
  @media screen and (max-width: 500px) {
    font-size: 20pt;
    margin-left: 0;
    text-align: center;
  }
`
export const ContentWrapper = styled.section`
  position: relative;
  width: 90%;
  left: 5%;
  top: 200px;
  transition: 0.4s;
  /* height: 300px; */
  /* background-color: white; */
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-template-rows: auto;
  /* grid-gap: 10px; */
  margin-bottom: 200px;
  opacity: ${props => (props.active ? '0' : '1')};
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
`
export const Block = styled.button`
  /* height: 250px; */
  opacity: ${props => (props.active ? '0' : '1')};
  display: ${props => (props.active ? 'none' : 'grid')};

  /* display: grid; */
  /* justify-content: center; */
  align-content: flex-start;
  /* vertical-align: top; */
  margin: 20px;
  border: 3px solid white;
  padding: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0);
  text-align: left;
  transition: 0.2s;
  cursor: pointer;
  padding-top: 0;
  span {
    display: block;
    min-height: 250px;
    @media screen and (max-width: 500px) {
      min-height: auto;
    }
  }
  h1 {
    font-family: 'Montserrat';
    font-size: 26pt;
    margin-bottom: -12px;
    @media screen and (max-width: 500px) {
      font-size: 19pt;
    }
  }
  p {
    font-family: 'Inter';

    font-size: 12pt;
    @media screen and (max-width: 500px) {
      font-size: 10pt;
    }
    font-weight: 500;
  }
  &:hover {
    background-color: white;
    color: black;
  }
`
export const PlayerWrapper = styled.div`
  position: relative;
  width: 50vw;
  height: 50vh;
  @media screen and (max-width: 500px) {
    width: 80vw;
    height: 70vh;
  }
`
export const Container = styled.div`
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

export const Variants = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  /* height: calc(auto + 50px); */
  background-color: white;
  z-index: 4;
  padding: 30px;
  transition: 0.7s;
  /* display: ${props => (props.active ? 'block' : 'none')}; */
  opacity: ${props => (props.active ? '1' : '0')};
  transform: translateY(${props => (props.active ? '0' : '-100%')});
  /* display: grid; */
  visibility:${props => (props.active ? 'visible' : 'hidden')}; 
  /* align-content: center; */
  p{
    text-transform: uppercase;
    margin-left: 20px;
  }
  @media screen and (max-width: 500px) {
    display: grid;
    padding-left: 0;
    justify-content: center;
    p{
    text-align: center;
    }
  }
`
export const VariantsExit = styled.div`
  position: absolute;
  width: 100%;
  /* overflow-y: auto; */
  height: 55px;
  margin: 20px 20px;
  top: auto;
  margin-left: -30px;
  padding-left: 50px;
  bottom: -50px;
  background-color: white;
  float: none;
  img {
    cursor: pointer;
    margin-top: 5px;
    width: 30px;
  }
`
export const Var = styled.button`
  font-family: 'Montserrat';
  font-size: 26pt;
  position: static;
  cursor: pointer;
  /* background-color: blue; */
  border: 2px solid black;
  float: left;
  margin: 20px;
  text-align: left;
  @media screen and (max-width: 500px) {
    font-size: 22pt;
    text-align: center;
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
