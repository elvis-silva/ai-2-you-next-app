import { StyledHeading } from '../About/style'
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import { useForm } from '@formspree/react';
import { 
  ContactBody, 
  Form, 
  Icon, 
  IconContainer, 
  IconText, 
  Input, 
  LeftContainer, 
  Message, 
  PersonInfo, 
  RightContainer, 
  SubmitButton, 
  SubmitRow 
} from './style'

const Contact = () => {
  const [state, handleSubmit] = useForm('mwkzbgpv');
  // if (state.succeeded) {
  //   return <div>Thank you for signing up!</div>;
  // }
  return (
    <ContactBody data-testid='contact' id='contact'>
      <LeftContainer data-testid='left-container'>
        <StyledHeading data-testid='title'>Contato</StyledHeading>
        <Form data-testid='form'
          onSubmit={handleSubmit}
        >
          <PersonInfo data-testid='person-info'>
            <Input data-testid='input-name'
              name='name'
              placeholder='Seu nome'
              required
            />
            <Input data-testid='input-email'
              id='email'
              type='email'
              name='email'
              placeholder='seu@email.com'
              required
            />
          </PersonInfo>
          <Input data-testid='input-message'
            name='subject'
            placeholder='Assunto'
            onChange={() => console.log('change subject')}
            required
          />
          <Message data-testid='text-message'
            name='message'
            placeholder='Digite sua mensagem aqui'
            onChange={() => console.log('change message')}
            required
          />
          <SubmitRow data-testid='submit-row'>
            <SubmitButton data-testid='submit-button'
              type='submit'
              disabled={state.submitting}>
                Enviar          
            </SubmitButton>
          </SubmitRow>
        </Form>
      </LeftContainer>
      <RightContainer data-testid='right-container'>
        <IconContainer data-testid='icon-container-linkedin' href='https://www.linkedin.com/in/elvis-silva-dev' target={'_blank'}>
          <Icon data-testid='linkedin-icon'>
            <AiFillLinkedin size={'3rem'}/>
          </Icon>
          <IconText data-testid='linkedin-icon-text'>Linkedin</IconText>
        </IconContainer>
        <IconContainer data-testid='icon-container-github' href='https://github.com/elvis-silva' target={'_blank'}>
          <Icon data-testid='github-icon'>
            <AiFillGithub size={'3rem'}/>
          </Icon>
          <IconText>Github</IconText>
        </IconContainer>
        <IconContainer data-testid='icon-container-email' href='mailto:elviscarlossouza@gmail.com'>
          <Icon data-testid='email-icon'>
            <AiOutlineMail size={'3rem'}/>
          </Icon>
          <IconText>E-Mail</IconText>
        </IconContainer>
      </RightContainer>
    </ContactBody>
  )
}

export default Contact