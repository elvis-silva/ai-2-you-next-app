import photo from "@/public/images/me.jpg"
import { Link } from "@/app/Skills/style"
import { 
  AboutBody, 
  AboutContainer, 
  PhotoContainer, 
  StyledHeading, 
  Photo, 
  TextSection 
} from "./style"


const About = () => {

  return (
    <AboutBody data-testid='about' id='about'>
      <AboutContainer>
        <StyledHeading>Sobre mim</StyledHeading>
        <TextSection>
          Sou um desenvolvedor de software e estudante apaixonado pela arte da programação residente no Brasil.
          <br/>
          <br/>
          Atualmente, estou trabalhando por conta própria criando pequenos sites e refatorando códigos desde 2017. Antes disso criei alguns aplicativos Android em Java que podem ser conferidos no meu <Link target={'_blank'} href="https://github.com/elvis-silva">Github</Link>. 
          <br/>
          <br/>
          Adoro resolver problemas técnicos, pesquisar e ajudar no desenvolvimento de novos softwares e tecnologias. Busco sempre me desafiar a melhorar cada vez mais, sendo proativo, diligente, responsável e comprometido em encontrar a solução mais econômica e eficiente pra qualquer problema.
        </TextSection>
      </AboutContainer>
      <PhotoContainer>
        <Photo src={photo.src} alt='Elvis Silva'/>
      </PhotoContainer>
    </AboutBody>
  )
}

export default About
