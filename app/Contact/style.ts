import styled from 'styled-components'

export const ContactBody = styled.div`

  display: flex;
  flex-direction: row;
  padding: 0 3.5em 0 3.5em;
  min-height: 100%;
  padding-bottom: 3rem;
  position: relative;

  &:before {
    content: '<Contact>';
    color: var(--secondary-color);
    font-size: 1.8rem;
    left: 2em;
    position: absolute;

    @media screen and (max-width: 768px) {
      left: 0.5em;
      font-size: 1.2rem;
      margin-top: 1em;
    }
  }

  &:after {
    content: '</Contact>';
    color: var(--secondary-color);
    font-size: 1.8rem;
    left: 2em;
    position: absolute;
    bottom: 0;

    @media screen and (max-width: 768px) {
      left: 0.5em;
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    padding: 0 0 3rem 0;
    align-items: center;
    margin-top: 2.5em;
  }

`

export const LeftContainer = styled.div`

  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 4em 0 0 7em;

  &:before {
    content: "<div>";
    color: var(--secondary-color);
    font-size: 1.8rem;
    margin-left: -2em;
    margin-bottom: 1em;
  
    @media screen and (max-width: 768px) {
      align-self: flex-start;
      margin-left: 0.5em;
      margin-top: 0;
      font-size: 1.2rem;
    }
  }

  &:after {
    content: "</div>";
    color: var(--secondary-color);
    font-size: 1.8rem;
    align-self: flex-start;
    margin-left: -2em;
    margin-top: 1em;
    margin-bottom: 0.5em;

    @media screen and (max-width: 768px) {
      align-self: flex-start;
      margin-left: 0.5em;
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 768px) {
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    margin-left: 0;
    padding-left: 2em;
    padding-right: 2em;
  }

`

export const RightContainer = styled.div`

  display: flex;
  flex-direction: column;
  width: 30%;
  padding-top: 4em;
  align-items: center;
  justify-content: center;
  gap: 2em;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;

    &:before {
  
      @media screen and (max-width: 768px) {
        content: "<div>";
        color: var(--secondary-color);
        align-self: flex-start;
        margin-left: 2.1em;
        font-size: 1.2rem;
        margin-top: -3.5em;
      }
    }

    &:after {

      @media screen and (max-width: 768px) {
        content: "</div>";
        color: var(--secondary-color);
        align-self: flex-start;
        margin-left: 2.1em;
        font-size: 1.2rem;
        margin-top: 0;
      }
    }
  }

`

export const Form = styled.form`

  display: flex;
  flex-direction: column;
  padding-top: 2em;
  width: 100%;

`

export const PersonInfo = styled.div`

  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 0.5em;
  margin-bottom: 0.7em;
  padding-bottom: 0.5em;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1.1em;
  }

`

export const Input = styled.input`

  display: inline-block;
  width:100%;
  padding: 1em 1.4em;
  border: 0.05em solid var(--primary-color);
  border-radius: 0.5em;
  box-sizing: border-box;
  font-size: 0.8em;
  outline: none;
  transition: all 0.2s ease-in-out;
  color: var(--primary-color);
  background-color: transparent;

  &:focus {
    border: 0.2em solid var(--primary-color);
  }

`

export const Message = styled.textarea`

  margin: 1em 0;
  padding: 0.5em 0.7em;
  background-color: transparent;
  color: var(--primary-color);
  border: 0.05em solid var(--primary-color);
  border-radius: 0.5em;
  box-sizing: border-box;
  font-size: 1.5em;
  outline: none;
  transition: all 0.2s ease-in-out;
  resize: none;
  width: 100%;
  height: 7em;

  &:focus {
    border: 0.2em solid var(--primary-color);
  }

`

export const SubmitRow = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 1em;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-self: end;
    width: 100%;
    padding: 0 0.2em;
  }

`

export const SubmitButton = styled.button`

  background-color: var(--primary-color);
  border-color: var(--primary-color);
  color: #2b2b2b;
  border-radius: 0.5em;
  box-sizing: border-box;
  font-size: 1.3em;
  font-weight: bold;
  outline: none;
  transition: all 0.5s ease-in-out;
  display: block;
  align-self: flex-end;
  height: 3.8em;
  width: 10em;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    align-self: flex-end;
    width: 7em;
    height: 2.5em;
  }

`

export const IconContainer = styled.a`

  display: flex;
  align-self: flex-start;
  width: fit-content;
  padding-left: 2em;
  gap: 0.5em;
  color: var(--primary-color);
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    padding: 0.5em;
    margin-left: 2em;
    align-self: flex-start;
  }

`

export const Icon = styled.div`

  background-color: transparent;
  display: flex;
  height: 3rem;
  width: 3rem;
  align-items: center;
  justify-content: center;

`

export const IconText = styled.div`

  color: var(--primary-color);
  font-size: 1.7em;
  text-align: center;
  align-items: center;
  align-self: center;

  @media screen and (max-width: 768px) {
    font-size: 1.3em;
  }

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
  
`