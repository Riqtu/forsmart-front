import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  position: relative;
  width: 100%;
  height: 60vh;
  overflow: hidden;
  background-color: #272727;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 500px) {
    height: 100vh;
  }
`

export const Circle = styled.div`
  margin: 0;
  position: absolute;
  width: 70px;
  height: 70px;
  background-color: white;
  border-radius: 50%;
  left: calc(50% - 35px);
  top: -35px;
`

export const Logo = styled.div`
  position: absolute;
  left: 10%;
  top: 20%;
  @media screen and (max-width: 1100px) {
    left: 5%;
    img {
      width: 80%;
    }
  }
  @media screen and (max-width: 500px) {
    top: 50%;
    left: 30%;
    img {
      width: 80%;
    }
  }
`

export const Text = styled.div`
  position: absolute;
  left: 23%;
  top: 21%;
  line-height: 0.5;
  vertical-align: middle;
  p {
    color: white;
    font-size: 15pt;
    font-family: 'Inter';
    color: white;
  }
  h1 {
    margin: 0;
    color: white;
  }

  @media screen and (max-width: 1100px) {
    left: 30%;
  }
  @media screen and (max-width: 500px) {
    left: 15%;
    h1 {
      font-size: 15pt;
    }
  }
`
export const Links = styled.a`
  position: relative;
  height: 40px;
  text-decoration: none;
  p {
    position: relative;
    color: white;
    font-size: 15pt;
    font-family: 'Inter';
    color: white;
    height: 40px;
    display: grid;
    align-content: center;
    left: 10px;
    @media screen and (max-width: 500px) {
      display: none;
    }
  }
  img {
    width: 40px;
    float: left;
    @media screen and (max-width: 500px) {
      margin: 20px;
      margin-left: 0;
    }
  }
`

export const Path = styled.div`
  position: absolute;
  left: auto;
  right: 0;
  top: 20%;
  @media screen and (max-width: 1100px) {
    display: none;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`
