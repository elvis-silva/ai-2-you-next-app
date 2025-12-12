import styled from "styled-components"
import { FaTimes } from "react-icons/fa"
import { Link as LinkScroll } from 'react-scroll'

export const Container = styled.aside<{ isOpen: boolean }>`

  display: flex;
  flex-direction: column;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1em;
  width: 100%;
  height: 100%;
  align-items: center;
  transition: 0.3s ease-in-out;
  background: var(--background-color);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

`

export const MobileIcon = styled(FaTimes)`

  color: var(--primary-color);
  font-size: 2.5rem;
  align-self: flex-end;
  cursor: pointer;

`

export const LogoHolder = styled.div`

  display: flex;
  width: fit-content;
  height: fit-content;
  margin-bottom: 2rem;

`

export const CloseIcon = styled.div`

  top: 0;
  position: absolute;
  background: transparent;
  font-size: 10em;
  outline: none;
  cursor: pointer;

`

export const MobileNavbarWrapper = styled.div`

  color: var(--primary-color);

`

export const MobileNavbarLink = styled(LinkScroll)`

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: var(--primary-color);
  cursor: pointer;

  &:hover {
    color: var(--secondary-color);
    transition: 0.2s ease-in-out;
  }

`

export const MobileNavbarMenu = styled.ul`

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 5rem);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 3.5rem);
  }

`

export const Text = styled.p`

  color: var(--primary-color);

`