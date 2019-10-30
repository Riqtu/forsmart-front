import styled from 'styled-components'

export const AboutWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 250px);

  overflow: hidden;
  background-color: white;
`
export const Upath = styled.div`
  position: absolute;
  top: -185px;
`
export const RpathU = styled.div`
  position: absolute;
  top: -50px;
  img {
    width: 102%;
  }
`
export const Text = styled.div`
  position: absolute;
  top: -52px;
  left: 27%;
  h1 {
    font-size: 47pt;
    text-align: left;
  }
  p {
    width: 55%;
    font-family: 'Inter';
    font-size: 15pt;
    font-weight: 500;
    text-align: left;
    margin-top: -43px;
  }
`
