import styled from "styled-components";

export const ProjectsBody = styled.div`

  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: -4em;
  }
`

export const VideoHolder = styled.div`

  border-radius: 5px;

  @media screen and (max-width: 768px) {
    width: fit-content;
    opacity: 30%;
  }

`

export const Video = styled.video`

  width: 35rem;
  height: 20rem;
  min-width: 100%;
  min-height: 100%;
  border-radius: 5px;
  object-fit: fill;

`

export const DescriptionSide = styled.div<{ inverted: boolean }>`

  display: flex;
  flex-direction: column;
  align-items: 'flex-end';
  justify-content: center;
  width: 25rem;
  height: 20rem;
  z-index: 20;

  ${({ inverted }) => inverted === false && `

    align-items: 'flex-start';
  
  `}

  @media screen and (max-width: 768px) {
    position: absolute;
    align-items: flex-start;
  }

`

export const ProjectName = styled.h1<{ inverted: boolean }>`

  padding-bottom: 1em;
  padding-right: 0.5em;

  ${({ inverted }) => inverted === false && `
  
    padding-left: 0.5em;
    padding-right: 0;
  
  `}

  @media screen and (max-width: 768px) {
    padding-bottom: 1em;
    padding-left: 0.5em;
  }

`

export const Description = styled.p`

  padding: 1.5em;
  width: 26rem;
  border-radius: 5px;
  font-size: 0.9rem;

  @media screen and (max-width: 768px) {
    padding: 0;
    padding-left: 1em;
  }

`

export const TechStack = styled.div`

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 1em;

`

export const TechStackItem = styled.div`

  padding: 0.5em 0 0.5em 0.5em;
  font-size: 0.8em;

  @media screen and (max-width: 768px) {
    padding: 0;
    padding-left: 1.2em;
    font-weight: bold;
  }
`