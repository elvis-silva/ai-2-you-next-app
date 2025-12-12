import styled from "styled-components";

export const HomeBody = styled.div`

  display: flex;
  flex-direction: row;
  padding: 0 3.5rem;
  background-color: transparent;
  min-height: 100%;
  padding-bottom: 4rem;
  position: relative;

  &:before {
    content: "<Home>";
    color: var(--secondary-color);
    font-size: 1.8rem;
    position: absolute;

    @media screen and (max-width: 768px) {
      margin-left: 0.5em;
      font-size: 1.2rem;
    }
  }

  &:after {
    content: "</Home>";
    color: var(--secondary-color);
    font-size: 1.8rem;
    position: absolute;
    bottom: 0px;
    left: 2em;

    @media screen and (max-width: 768px) {
      left: 0.5em;
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0;
    padding-bottom: 4rem;

  }

`

export const HomeContainer = styled.div<{ typing_direction?: string }>`

  padding-top: 4em;
  padding-left: 7em;
  display: flex;
  flex-direction: column;
  min-width: 50%;

  &:before {
    content: "<div>";
    color: var(--secondary-color);
    font-size: 1.8rem;
    margin-left: -2em;
    margin-bottom: 1em;
  
    @media screen and (max-width: 768px) {
      align-self: flex-start;
      margin-left: 2em;
      font-size: 1.2rem;
      margin-top: -1.5em;
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
      margin-left: 2em;
      font-size: 1.2rem;
      margin-bottom: -1.5em;
    }
  }

  @media screen and (max-width: 768px) {
    padding-top: 4em;
    align-items: center;
    justify-content: center;
    padding-left: 0;
  }

`

export const TypeWriter = styled.div<{ typing_direction?: string }>`

  font-size: 5rem;
  color: var(--primary-color);
  max-width: fit-content;
  overflow: hidden;
  border-right: 0.15em solid var(--primary-color);
  white-space: nowrap;
  letter-spacing: 0.05em;

  ${({ typing_direction }) => 
    typing_direction === 'forward' && `
    
      animation: typing 4s steps(60, end), blink-caret 0.75s;
    
    `
  }

  ${({ typing_direction }) => 
    typing_direction === 'backward' && `
    
      animation: deleting 4s steps(60, end), blink-caret 0.75s;
    
    `
  }

  @keyframes typing {
    from { width: 0; }
    to { width: 100%; }
  }

  @keyframes deleting {
    from { width: 100%; }
    to { width: 0; }
  }

  @keyframes blink-caret {
    from, to { border-color: transparent; }
    50% { border-color: var(--primary-color); }
  }

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }

`

export const StyledText = styled.p<{ weight?: string }>`

  font-size: 5rem;
  color: #4cd30d;

  ${({ weight }) => 
    weight === 'bold' && `
    
    font-weight: bold;
    
    `
  }

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }

`
export const StyledTextM = styled.p<{ weight?: string }>`

  font-size: 3rem;
  color: #4cd30d;

  ${({ weight }) => 
    weight === 'bold' && `
    
    font-weight: bold;
    
    `
  }

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }

`