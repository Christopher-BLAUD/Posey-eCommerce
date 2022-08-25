import styled from 'styled-components'
import PoseyLogo from '../../assets/images/logo_posey.png'
import { Link, Outlet } from 'react-router-dom'

function Admin() {
  return (
    <DashBoardWrapper>
      <NavBar>
        <LogoContainer>
          <Logo src={PoseyLogo} alt="logo de posey" />
        </LogoContainer>
        <Title>Tableau de bord</Title>
        <NavLink to="/admin/products">
          <i className="fa-solid fa-box-open"></i>Produits
        </NavLink>
      </NavBar>
      <Outlet />
    </DashBoardWrapper>
  )
}

const DashBoardWrapper = styled.main`
  display: flex;
  background-color: #3c1700;
`

const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 20%;
  font-size: 16px;
`

const LogoContainer = styled.div`
  width: 100%;
  height: 100px;
`

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Title = styled.h3`
  color: #fff;
  font-weight: 500;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: 300;
  font-size: 15px;
  margin-top: 20px;
  & i {
    margin-right: 10px;
    vertical-align: bottom;
  }
`

export default Admin
