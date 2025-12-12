import styled from 'styled-components'

export const AboutBody = styled.div`

  display: flex;
  flex-direction: row;
  padding: 0 3.5rem 0 3.5rem;
  background-color: transparent;
  min-height: 100%;
  height: fit-content;
  padding-bottom: 4rem;
  position: relative;

  &:before {
    content: '<About>';
    color: var(--secondary-color);
    font-size: 1.8rem;
    margin-left: 0em;
    position: absolute;

    @media screen and (max-width: 768px) {
      margin-left: 0;
      left: 0.5em;
      font-size: 1.2rem;
    }
  }

  &:after {
    content: '</About>';
    color: var(--secondary-color);
    font-size: 1.8rem;
    position: absolute;
    bottom: 0px;
    left: 2em;

    @media screen and (max-width: 768px) {
      left: 0.5em;
      font-size: 1.2rem;
      bottom: 2.5em;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 1rem 0 1rem;
    padding-bottom: 6rem;
  }

`

export const AboutContainer = styled.div`

  padding-top: 3em;
  padding-left: 7rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;

  &:before {
    content: "<div>";
    color: var(--secondary-color);
    font-size: 1.8rem;
    margin-left: -2em;
    margin-bottom: 1em;
    padding-top: 0.5em;

  
    @media screen and (max-width: 768px) {
      align-self: flex-start;
      margin-left: 1.2em;
      font-size: 1.2rem;
      margin-top: 0.8em;
    }
  }

  &:after {
    content: "</div>";
    color: var(--secondary-color);
    font-size: 1.8rem;
    align-self: flex-start;
    margin-left: -2em;
    margin-top: 1em;

    @media screen and (max-width: 768px) {
      align-self: flex-start;
      margin-left: 1.2em;
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 768px) {
    padding-top: 1em;
    padding-left: 0;
    align-self: center;
    width: auto;
  }

`

export const StyledHeading = styled.h1`

  display: flex;
  font-size: 4em;
  align-items: center;
  color: var(--primary-color);

  @media screen and (max-width: 768px) {
    font-size: 1.8em;
    align-self: center;
  }

`

export const TextSection = styled.p`

  font-size: 1.4em;
  padding-top: 1.3em;
  line-height: 1.4em;
  text-align: justify;
  color: var(--primary-color);

  @media screen and (max-width: 768px) {
    font-size: 1em;
    padding: 0.8em 0.8em;
  }

`

export const PhotoContainer = styled.div`

  padding-top: 3em;
  padding-left: 3.5rem;
  display: flex;
  flex-direction: column;
  align-self: center;
  height: 100%;
  width: 50%;

  &:before {
  
    @media screen and (max-width: 768px) {
      content: "<div>";
      color: var(--secondary-color);
      align-self: flex-start;
      margin-left: 1.2em;
      font-size: 1.2rem;
      margin-top: -1.5em;
    }
  }

  &:after {

    @media screen and (max-width: 768px) {
      content: "</div>";
      color: var(--secondary-color);
      align-self: flex-start;
      margin-left: 1.2em;
      font-size: 1.2rem;
      margin-top: 1.5em;
    }
  }

  @media screen and (max-width: 768px) {
    margin-top: -1em;
    padding-left: 0;
    align-self: center;
    width: auto;
    width: 100%;
  }

`

export const Photo = styled.img`

  justify-content: center;
  align-items: center;
  height: 25rem;
  width: auto;
  border-radius: 50%;
  border: 2px solid var(--primary-color);
  transition: 0.3s ease-in;
  align-self: center;
  margin-top: 6.6em;

  filter: grayscale(100%);

  &:hover {
    filter: grayscale(0%);
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    filter: none;
    margin-top: 1em;
    height: 15rem;
    width: auto;

    &:hover {
      filter: none;
      transform: none;
    }
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