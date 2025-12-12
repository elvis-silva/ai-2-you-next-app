import { FooterBoby, FooterText } from './style'

const Footer = () => {
  return (
    <FooterBoby data-testid="footer">
      <FooterText data-testid='copyright'>&copy; Copyright {new Date().getFullYear()}</FooterText>
      <FooterText data-testid='dev-from'>Desenvolvido com &hearts; por Elvis Silva</FooterText>
    </FooterBoby>
    
  )
}

export default Footer