import React, { useState, useEffect } from 'react'
// import './Menu.scss'

// import { Link } from 'react-router-dom'
import { MenuWrapper, MenuButton, MenuContainer } from './Menu.styles'
import * as Scroll from 'react-scroll'
function Menu(props) {
  const [menuActive, setMenuActive] = useState(false)

  useEffect(() => {
    if (props.menuOn === true) {
      setMenuActive(true)
    }
  }, [props.menuOn, menuActive])
  const handleClick = () => {
    setMenuActive(!menuActive)
  }
  window.onload = () => {}
  let Link = Scroll.Link
  return (
    <MenuWrapper>
      <MenuButton
        // className={cn('Menu__button', { active: menuActive })}
        onClick={() => handleClick()}
        aria-label="Кнопка вызова меню"
        active={menuActive}
      >
        <span className="button-element" active={menuActive}></span>
      </MenuButton>
      <MenuContainer active={menuActive}>
        <ul>
          <li>
            <Link className="link" to="Main" spy={true} smooth={true}>
              Главная
            </Link>
          </li>
          <li>
            <Link className="link" to="About" spy={true} smooth={true}>
              О нас
            </Link>
          </li>
          <li>
            <Link className="link" to="Teach" spy={true} smooth={true}>
              Преподаватели
            </Link>
          </li>
          <li>
            <Link className="link" to="Formats" spy={true} smooth={true}>
              Форматы
            </Link>
          </li>
          <li>
            <Link className="link" to="Events" spy={true} smooth={true}>
              Раписание
            </Link>
          </li>
        </ul>
      </MenuContainer>
    </MenuWrapper>
  )
}

export default Menu
