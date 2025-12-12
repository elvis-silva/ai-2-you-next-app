import { useState, useEffect, useRef } from 'react';
import { HomeBody, HomeContainer, TypeWriter, StyledText, StyledTextM } from './style'

const MainHome = () => {

  const typewritterStrings: string[] = [
    "Freelancer",
    "Programador",
    "Developer",
    "Fullstack"
  ]

  const [text, setText] = useState(typewritterStrings[0])
  const [direction, setDirection] = useState('forward')
  const index = useRef(0)

  const timeInterval: number = 3900

  useEffect(() => {
    const interval = setInterval(() => {
      if (index.current >= typewritterStrings.length) {
        index.current = 0;
      }

      if (direction === "backward") {
        setText(typewritterStrings[index.current]);
      }

      if (direction === "forward") {
        setDirection("backward");
        index.current += 1;
      } else if (direction === "backward") {
        setDirection("forward");
      }
    }, timeInterval);
    return () => {
      clearInterval(interval);
    }
  }, [direction, text, index, timeInterval, typewritterStrings])

  return (
    <HomeBody data-testid='home' id='home'>
      <HomeContainer>
        <StyledTextM>AI 2 YOU EM BREVE!</StyledTextM>
        <StyledText>Olá, 👋 sou</StyledText>
        <StyledText weight='bold'>Elvis Silva</StyledText>
        <TypeWriter key={Math.random().toString()} 
        typing_direction={direction}
        >
          {text}
        </TypeWriter>
      </HomeContainer>
    </HomeBody>
  )
}

export default MainHome