import { Container, FeaturesContainer } from "./style" 

const Features = () => {

  return (
    <Container data-testid='features'>
      <FeaturesContainer>
        <h1>Features</h1>
        <div>
          <div>
            <h3>Track Your Finances</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
          </div>
        </div>
        <div>
          <div>
            <h3>Organize Your Finances</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
          </div>
        </div>
        <div>
          <div>
            <h3>Save Your Money</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
          </div>
        </div>
      </FeaturesContainer>
    </Container>
  )
}

export default Features
