import { AppContainer } from './App.style'
import About from "@/app/About"
import Skills from "@/app/Skills"
import Projects from "@/app/Projects"
import Contact from "@/app/Contact"
import Footer from "@/app/Footer"
import MainHome from '@/app/MainHome'

const MainPage = () => {

  return (
    <AppContainer data-testid='main-page'>
      <MainHome />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </AppContainer>
  )
}

export default MainPage