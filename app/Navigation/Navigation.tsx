import { NavBar, Content, Logo, HamburgerButton } from "./style"
import HamburgerIcon from "./HamburgerIcon";
import logo from '../../logo3.svg'
import { useState } from "react";
import '../.././App.css'

const Navigation = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false);
  
  return (
    <NavBar data-testid='navigation'>
      <Content>
        <Logo src={logo} alt='logo'/>
        <HamburgerButton
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
        >
        <HamburgerIcon />
      </HamburgerButton>
      <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/servicos'>Serviços</a>
            </li>
            <li>
              <a href='/galeria'>Galeria</a>
            </li>
            <li>
              <a href='/sobre'>Sobre</a>
            </li>
            <li>
              <a href='/contato'>Contato</a>
            </li>
          </ul>
        </div>
      </Content>
    </NavBar>
  )
}

export default Navigation
