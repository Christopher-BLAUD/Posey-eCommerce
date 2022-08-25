import styled from 'styled-components'
import PoseyLogo from '../../assets/images/logo_posey.png'
import { colors } from '../../utils/colors'
import { Link } from 'react-router-dom'
import { ProductContext } from '../../utils/context'
import { useContext } from 'react'

function Header() {
  const { quantity } = useContext(ProductContext)

  return (
    <HeaderWrapper>
      <LogoContainer>
        <Logo src={PoseyLogo} alt="logo de posey" />
      </LogoContainer>
      <NavBarContainer>
        <NavLink to={'/'}>Accueil</NavLink>
      </NavBarContainer>
      <NavLink to={'/cart'} position="absolute" right="0">
        <i className="fa-solid fa-bag-shopping"></i>
        {quantity !== 0 ? <ProductQuantity>{quantity}</ProductQuantity> : ''}
      </NavLink>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: flex-start;
  background-color: ${colors.primary};
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 3;
  padding: 10px 0;
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin: 0 15px;
`

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 50px;
`

const NavLink = styled(Link).attrs((props) => ({
  position: props.position,
  right: props.right,
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-right: 30px;
  position: ${(props) => props.position};
  right: ${(props) => props.right};
  transition: all 250ms linear;
  color: ${colors.tertiary};
  font-weight: 600;
  &:hover {
    transform: scale(0.9);
    color: ${colors.interactive};
  }
  & i {
    margin-left: 10px;
    font-size: 1.5em;
  }
`

const ProductQuantity = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  min-width: 20px;
  min-height: 20px;
  padding: 2px;
  background-color: red;
  color: #fff;
  font-size: 0.8em;
  font-weight: 700;
  position: absolute;
  bottom: -15px;
  right: -15px;
`

export default Header
