import styled from "styled-components"

export const SkillsBody = styled.div`

  display: flex;
  flex-direction: row;
  padding: 0 3.5rem 0 3.5rem;
  min-height: 100%;
  position: relative;
  margin-left: 3.7rem;

  &:before {
    content: '<Skills>';
    color: var(--secondary-color);
    font-size: 1.8rem;
    margin-left: -2em;
    position: absolute;

    @media screen and (max-width: 768px) {
      left: 4.6em;
      font-size: 1.2rem;
      margin-top: -2em;
    }
  }

  &:after {
    content: '</Skills>';
    color: var(--secondary-color);
    font-size: 1.8rem;
    margin-left: -2em;
    position: absolute;
    bottom: 0;

    @media screen and (max-width: 768px) {
      left: 4.5em;
      font-size: 1.2rem;
      bottom: 0.5em;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-left: -2.5em;
    padding-right: 1em;
  }

`

export const SkillsContainer = styled.div<{ justify?: string }>`

  display: flex;
  flex-direction: column;
  padding-top: 3.5em;
  padding-bottom: 3.5em;
  padding-left: 3.5rem;
  min-height: 100%;
  width: 50%;
  ${({ justify }) => justify && `

    justify-content: center;

  `}

  &:before {
    content: "<div>";
    color: var(--secondary-color);
    font-size: 1.8rem;
    margin-left: -2em;
    margin-bottom: 1em;
  
    @media screen and (max-width: 768px) {
      align-self: flex-start;
      font-size: 1.2rem;
      margin-top: -1.5em;
      margin-left: 1.3em;
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
      margin-left: 1.5em;
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 768px) {
    width: auto;
    align-self: center;
    padding-left: 0;
    padding-top: 2em;
  }

`

export const Text = styled.p`

  font-size: 1.4em;
  line-height: 1.4em;
  padding-top: 1.3em;
  text-align: justify;

  @media screen and (max-width: 768px) {
    font-size: 1em;
    padding: 0.8em 0.8em;
  }

`

export const Link = styled.a`

  color: var(--primary-color);
  font-weight: bold;

  :target {
    color: var(--secondary-color);
  }

  :active {
    color: var(--secondary-color);
  }

`

export const SphereContainer = styled.div`

  display: flex;
  flex-direction: column;
  padding-top: 3.5em;
  padding-bottom: 3.5em;
  padding-left: 3.5rem;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
    align-self: center;
    padding-left: 0;
    margin-top: -5em;

    &:before {
  
  @media screen and (max-width: 768px) {
    content: "<div>";
    color: var(--secondary-color);
    align-self: flex-start;
    margin-left: 1.5em;
    font-size: 1.2rem;
    margin-top: -1.5em;
  }
}

&:after {

  @media screen and (max-width: 768px) {
    content: "</div>";
    color: var(--secondary-color);
    align-self: flex-start;
    margin-left: 1.5em;
    font-size: 1.2rem;
    margin-top: -1em;
  }
}

  }

`