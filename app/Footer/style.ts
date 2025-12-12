import styled from 'styled-components'

export const FooterBoby = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 3.5rem 0 3.5rem;
  background-color: transparent;
  min-height: 6em;
  height: fit-content;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 1em;
    padding: 0;
  }
  
`

export const FooterText = styled.div`

  color: var(--primary-color);
  font-size: 1em;
  align-self: center;
  text-align: center;

`

export const FooterStyled = styled.footer`

  width: 100%;
  bottom: 0;
  left: 0;
  background-color: transparent;
  color: var(--primary-color);
  text-align: center;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  z-index: 1;

`

export const Container = styled.div`

  margin: 15px;
  border: 1px solid var(--primary-color);
  text-align: center;
  padding: 2rem;

  & h1 {  

    font-size: 2rem;
    margin-bottom: 1rem;

  }

  & p {

    font-size: 1rem;
    margin-bottom: 1rem;

  }

  & a {

    color: white;
    text-decoration: none;
    font-size: 1rem;
    margin-bottom: 1rem;
    
  }

`