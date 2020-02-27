import styled from 'styled-components'
export const MenuWrapper = styled.div`
  z-index: 1000000000;

  .menu__container {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgb(255, 255, 255);
    z-index: 100;
    top: -100%;
    left: 0;
    transform: translateY(0%);
    transition: 0.6s ease;
    display: grid;
    align-content: center;
    will-change: transform;
    a {
      text-decoration: none;
      font-size: 35pt;
      color: black;
      text-transform: uppercase;
      // font-weight: 900;
      // margin-left: -43px;
      line-height: 1.5;
      transition: 0.3s;
      @media screen and (max-width: 500px) {
        font-size: 21pt;
        margin-left: -20px;
      }
    }
    a:hover {
      color: $mainColor;
    }
    a:focus {
      color: $mainColor;
      outline: 1px dashed rgba(0, 0, 0, 0.479);
      animation: focus 0.3s forwards ease-in;
    }
  }
  .container-active {
    transform: translateY(100%);
  }
  @keyframes startHeaderMenu {
    0% {
      top: -80px;
    }
    100% {
      top: 18px;
    }
  }
`

export const MenuContainer = styled.div`
  position: fixed;
  width: 50%;
  height: 78px;
  background-color: #222222;
  z-index: 100;
  top: 30px;
  /* top: -100%; */
  /* left: -100px; */
  /* right: 50px; */
  transform: ${props =>
    props.active ? 'translateX(calc(100%))' : 'translateX(200%)'};
  transition: 0.6s ease;
  will-change: transform;
  ul {
    li {
      position: relative;
      float: left;
      margin: 10px;
      margin-right: 20px;
      margin-left: -5px;
      font-family: 'Inter';
      color: white;
      font-size: 15pt;
      opacity: ${props => (props.active ? '1' : '0')};
      list-style-type: none;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        color: #d8127d;
      }
    }
  }
  @media screen and (max-width: 1300px) {
    width: 100%;
    /* height: auto; */
    transform: ${props =>
      props.active ? 'translateX(calc(0%))' : 'translateX(100%)'};
  }
  @media screen and (max-width: 500px) {
    top: 0px;
    padding-top: 60px;
    padding-bottom: 40px;
    width: 100%;
    height: auto;
    padding-right: 70px;
    transform: ${props =>
      props.active ? 'translateX(calc(0%))' : 'translateX(100%)'};
    ul {
      li {
        font-size: 12pt;
        margin-top: 10px;
        margin-bottom: 20px;
      }
    }
  }
`
export const MenuButton = styled.button`
  position: fixed;
  z-index: 1002;
  // background-color: blanchedalmond;
  border: none;
  left: auto;
  right: 25px;
  /* top: 18px; */
  top: 45px;

  width: 50px;
  height: 50px;
  background: none;
  cursor: pointer;
  transition: 0.3s;
  // animation: startHeaderMenu 0.6s ease-in forwards;
  &:focus {
    outline: 1px dashed rgba(255, 255, 255, 0.479);
  }

  .button-element,
  .button-element::before,
  .button-element::after {
    position: absolute;
    width: 100%;
    height: 6px;
    background-color: rgb(243, 242, 242);
    left: 0;
    top: calc(50% - 3px);
    transition: 0.3s;
  }
  .button-element {
    height: ${props => (props.active ? '0' : '')};
    background-color: ${props => (props.active ? 'rgb(243, 242, 242)' : '')};
  }
  .button-element::before {
    content: '';
    transform: translateY(-15px);
    transform: ${props => (props.active ? 'rotate(45deg)' : '')};
  }
  .button-element::after {
    content: '';
    transform: translateY(15px);
    transform: ${props => (props.active ? 'rotate(-45deg)' : '')};
  }

  &:hover {
    .button-element::before {
      transform: translateY(-20px);
      transform: ${props => (props.active ? 'rotate(45deg)' : '')};
    }
    .button-element::after {
      transform: translateY(20px);
      transform: ${props => (props.active ? 'rotate(-45deg)' : '')};
    }
  }

  @media screen and (max-width: 500px) {
    top: 20px;
    width: 43px;
    height: 40px;
  }
`
