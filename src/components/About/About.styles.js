import styled from 'styled-components'

export const AboutWrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 250px);
  min-height: 800px;
  max-height: 1100px;
  overflow: hidden;
  background-color: white;
  @media screen and (max-width: 500px) {
    height: 145vh;
    min-height: 1000px;
  }
`
export const Clients = styled.div`
  position: relative;
  top: 50%;
  left: 15px;
  img {
    width: 45%;
  }
  @media screen and (max-width: 500px) {
    top: 57%;
    img {
      width: 55%;
    }
  }
  @media screen and (max-width: 320px) {
    top: 62%;
  }
`
export const Upath = styled.div`
  position: absolute;
  top: -185px;
  @media screen and (max-width: 500px) {
    top: -100px;
    img {
      width: 50%;
    }
  }
`
export const RpathU = styled.div`
  position: absolute;
  top: -50px;
  img {
    width: 102%;
  }
  @media screen and (max-width: 500px) {
    top: -20px;
    img {
      width: 52%;
    }
  }
`
export const Text = styled.div`
  position: absolute;
  top: -52px;
  left: 27%;
  line-height: 1;
  h1 {
    font-size: 47pt;
    text-align: left;
    line-height: 1.5;
    @media screen and (max-width: 768px) {
      line-height: 2;
      font-size: 30pt;
    }
    @media screen and (max-width: 500px) {
      font-size: 30pt;
    }
  }
  p {
    width: 55%;
    font-family: 'Inter';
    font-size: 15pt;
    font-weight: 500;
    text-align: left;
    margin-top: -43px;
    @media screen and (max-width: 1370px) {
      width: 50%;
    }
    @media screen and (max-width: 948px) {
      width: 90%;
    }
    @media screen and (max-width: 500px) {
      width: 70%;
      font-size: 12pt;
      margin-top: -25px;
    }
  }
  a {
    cursor: pointer;
    font-family: 'Inter';
    font-size: 15pt;
    font-weight: 500;
    text-align: left;
    color: #d8127d;
    transition: 0.3s;
  }
  a:hover {
    color: black;
  }
  @media screen and (max-width: 1350px) {
    left: 370px;
  }
  @media screen and (max-width: 768px) {
    top: 0;
  }
  @media screen and (max-width: 500px) {
    left: 20px;
    top: 22%;
  }
`
export const AdditionBlock = styled.section`
  position: absolute;
  /* top: calc(100vh - 150px - 45vh); */
  top: auto;
  bottom: 0;
  width: 50vw;
  height: 50vh;
  min-height: 400px;

  left: 50vw;
  img {
    top: -40%;
    right: 5%;
    position: absolute;
    width: 40%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transform: rotate(30deg);
    @media screen and (max-width: 768px) {
      top: -10%;
      right: 3%;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }
  }
  @media screen and (max-width: 1350px) {
    height: 45vh;
    /* top: 50%; */
  }
  @media screen and (max-width: 768px) {
    height: 30vh;
  }
  @media screen and (max-width: 500px) and (min-height: 812px) {
    height: 43vh;

    /* top: 70%; */
    width: 80vw;
    left: 20vw;
  }
  @media screen and (max-width: 500px) {
    height: 50vh;
    min-height: 200px;
    /* top: 70%; */
    width: 80vw;
    left: 20vw;
  }
  @media screen and (max-width: 500px) and (min-height: 720px) {
    height: 35vh;
    min-height: 200px;
    /* top: 70%; */
    width: 80vw;
    left: 20vw;
  }
  @media screen and (max-width: 320px) {
    height: 45vh;

    /* top: 80%; */
    width: 80vw;
    left: 20vw;
  }
`
export const Block = styled.section`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 35vh;
  min-height: 400px;
  background: #3d38d0;
  padding: 30px;
  /* @media screen and (max-width: 500px) {
    min-height: 200px;
  } */
  p {
    font-size: 14pt;
    width: 60%;
    color: white;
    @media screen and (max-width: 500px) {
      width: 55%;
      font-size: 8pt;
      margin-left: -15px;
    }
    @media screen and (max-width: 320px) {
      font-size: 8pt;
    }
  }
  h3 {
    margin-top: -10px;
    font-size: 20pt;
    color: white;
    width: 80%;
    @media screen and (max-width: 1350px) {
      font-size: 20pt;
    }
    @media screen and (max-width: 920px) {
      font-size: 10pt;
    }
    @media screen and (max-width: 500px) {
      font-size: 10pt;
    }
    @media screen and (max-width: 320px) {
      font-size: 7pt;
    }
  }
  h2 {
    margin-top: -10px;
    font-size: 20pt;
    color: white;
    width: 50%;
    padding: 10px 0px;
    b {
      font-size: 30pt;
      @media screen and (max-width: 500px) {
        font-size: 25pt;
      }
      @media screen and (max-width: 320px) {
        font-size: 15pt;
      }
    }
    @media screen and (max-width: 1350px) {
      font-size: 20pt;
    }
    @media screen and (max-width: 920px) {
      font-size: 10pt;
    }
    @media screen and (max-width: 500px) {
      margin-left: -15px;
      font-size: 10pt;
    }
    @media screen and (max-width: 320px) {
      font-size: 7pt;
    }
  }
`
