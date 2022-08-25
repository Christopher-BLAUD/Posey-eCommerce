import styled from 'styled-components'
import { colors } from '../../utils/colors'

function Footer() {
  return (
    <FooterWrapper>
      <List>
        <ListTitle>Nous contacter</ListTitle>
        <Line>
          <i className="fa-solid fa-location-dot"></i>
          <NavText>5 avenue de la Citadelle, 34000 MONTPELLIER CEDEX</NavText>
        </Line>
        <Line>
          <i className="fa-solid fa-phone"></i>
          <NavText>08 36 65 65 65</NavText>
        </Line>
        <Line>
          <i className="fa-solid fa-envelope"></i>
          <NavText>contact@posey.com</NavText>
        </Line>
      </List>
      <List>
        <ListTitle>Utilisateur</ListTitle>
        <Line>Mon compte</Line>
        <Line>Aide & support</Line>
        <Line>FAQ</Line>
      </List>
      <List>
        <ListTitle>S'inscrire à la newsletter</ListTitle>
        <Line>
          Pour recevoir nos offres et être informé des dernières nouveautés,
          renseignez votre adresse mail ci-dessous
        </Line>
        <Form>
          <Input type="text" placeholder="Adresse email" />
          <Button>
            <i className="fa-solid fa-arrow-right"></i>
          </Button>
        </Form>
      </List>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 110px;
  width: 100%;
  padding: 20px 0;
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 10px 40px;
  padding: 0;
`

const Line = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  font-weight: 400;
  margin: 5px 0;
  max-width: 370px;
  font-size: 14px;
  & i {
    margin-right: 10px;
    vertical-align: bottom;
    color: #000;
  }
`

const ListTitle = styled.h3`
  font-weight: 600;
  margin: 0 0 10px 0;
`

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  width: 227px;
  height: 40px;
  margin-top: 10px;
`

const Input = styled.input`
  width: 100%;
  height: calc(100% - 20px);
  padding: 10px;
  border: none;
  background-color: #dddddd;
  outline: none;
  font-weight: 500;
  &::placeholder{
    color: #000;
  }
`

const Button = styled.button`
  min-width: 40px;
  height: 110%;
  font-size: 1.1em;
  border: none;
  color: #fff;
  background-color: #b7b7b7;
  cursor: pointer;
`
const NavText = styled.span``
export default Footer
