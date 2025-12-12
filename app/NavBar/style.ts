import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import Logo from '../../assets/images/logo.png'

export const Nav = styled.nav`

  background-color: var(--background-color);
  opacity: 98%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 999;
  font-size: 1.2rem;

  @media screen and (max-width: 960px) {
    transition: 1.5s all ease;
  }

`

export const NavContainer = styled.div`

  display: flex;
  justify-content: space-between;
  height: 5rem;
  width: 100%;
  padding: 0 7rem;
  z-index: 1;

  @media screen and (max-width: 1128px) {
    padding: 0 1.5rem;
  }

`

export const NavLogo = styled(LinkRouter)<{ width?: any, height?: any }>`

  background-image: url(${Logo.src});
  background-size: contain;
  background-repeat: no-repeat;
  height: ${({ height }) => (height ? height : '2.5rem')};
  width: ${({ width }) => (width ? width : '5rem')};
  align-self: center;
  cursor: pointer;

`

export const NavMenu = styled.ul`

  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }

`

export const MobileMenuHamburger = styled.div`

  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: -0.1em;
    right: -0.3em;
    transform: translate(-100%, 50%);
    font-size: 2em;
    color: var(--primary-color);
    cursor: pointer;
  }

`

export const NavItem = styled.li`

  height: 3.6em;

`

export const NavLink = styled(LinkScroll)`

  color: var(--primary-color);
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  padding: 0 1rem;
  cursor: pointer;

  &:hover {
    border-bottom: 0.16em solid var(--primary-color);
  }

  &:active {
    border-bottom: 0.16em solid var(--primary-color);
    font-weight: bold;
  }

`