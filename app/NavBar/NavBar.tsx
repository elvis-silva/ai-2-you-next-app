import { useCallback } from "react"
import { FaBars } from "react-icons/fa"
import { Nav, NavContainer, NavMenu, NavItem, NavLogo, NavLink, MobileMenuHamburger } from "./style"

interface NavbarProps {
  toggle: () => void
}

const Navbar = (props: NavbarProps) => {

  const { toggle } = props

  const toTop = useCallback(async () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <Nav data-testid='navbar'>
      <NavContainer data-testid='container'>
        <NavLogo data-testid='logo' to='/' onClick={toTop}/>
        <MobileMenuHamburger data-testid='hamburger' onClick={toggle}>
          <FaBars />
        </MobileMenuHamburger>
        <NavMenu data-testid='nav-menu'>
          <NavItem data-testid='menu-inicio'>
            <NavLink data-testid='link-inicio' to='home' spy={true} smooth={true} offset={-80}>Início</NavLink>
          </NavItem>
          <NavItem data-testid='menu-sobre'>
            <NavLink data-testid='link-sobre' to='about' spy={true} smooth={true} offset={-80}>Sobre</NavLink>
          </NavItem>
          <NavItem data-testid='menu-skills'>
            <NavLink data-testid='link-skills' to='skills' spy={true} smooth={true} offset={-80}>Skills</NavLink>
          </NavItem>
          {/* <NavItem data-testid='menu-projetos'>
            <a href="https://github.com/elvis-silva" target={'_blank'} rel="noreferrer">
              <NavLink data-testid='link-projetos' to='#' spy={true} smooth={true} offset={-80}>Projetos</NavLink>
            </a>
          </NavItem> */}
          <NavItem data-testid='menu-contato'>
            <NavLink data-testid='link-contato' to='contact' spy={true} smooth={true} offset={-80}>Contato</NavLink>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  )
}

export default Navbar