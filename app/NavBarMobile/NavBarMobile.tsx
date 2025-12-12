import { NavLogo } from "@/app/NavBar/style"
import { 
  Container, 
  MobileIcon,
  CloseIcon,
  LogoHolder,
  MobileNavbarWrapper,
  MobileNavbarLink,
  MobileNavbarMenu,
} from "./style"

interface Props {
  isOpen: boolean
  toggle: () => void
}

const NavbarMobile = (props: Props) => {

  const { isOpen, toggle } = props

  return (
    <Container isOpen={isOpen} onClick={toggle}>
      <MobileIcon onClick={toggle}>
        <CloseIcon />
      </MobileIcon>
      <LogoHolder>
        <NavLogo width='10rem' height='5rem' to='/' />
      </LogoHolder>
      <MobileNavbarWrapper>
        <MobileNavbarMenu>
          <MobileNavbarLink 
            to='home'
            spy={true}
            smooth={true}
            offset={-80}
            onClick={toggle}
          >
            Início
          </MobileNavbarLink>
          <MobileNavbarLink 
            to='about'
            spy={true}
            smooth={true}
            offset={-80}
            onClick={toggle}
          >
            Sobre
          </MobileNavbarLink>
          <MobileNavbarLink 
            to='skills'
            spy={true}
            smooth={true}
            offset={-120}
            onClick={toggle}
          >
            Skills
          </MobileNavbarLink>
          {/* <MobileNavbarLink 
            to='projects'
            spy={true}
            smooth={true}
            offset={-80}
            onClick={toggle}
          >
            Projetos
          </MobileNavbarLink> */}
          <MobileNavbarLink 
            to='contact'
            spy={true}
            smooth={true}
            offset={-65}
            onClick={toggle}
          >
            Contato
          </MobileNavbarLink>
        </MobileNavbarMenu>
      </MobileNavbarWrapper>
    </Container>
  )
}

export default NavbarMobile