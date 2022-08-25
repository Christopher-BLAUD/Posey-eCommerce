import styled from 'styled-components'
import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import bg from '../../assets/images/posey_background.jpg'
import { colors } from '../../utils/colors'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Home() {
  const navigate = useNavigate()
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/products')
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      <Header />
      <HomeWrapper>
        <HomeContainer>
          <HomeBackground />
          <TitleContainer>
            <Title>POSEY</Title>
            <Subtitle>L 'amour du confort</Subtitle>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Description>
            <Button href="#products">Voir les produits</Button>
          </TitleContainer>
        </HomeContainer>
        <ProductsContainer id="products">
          <ProductsTitleContainer>
            <ProductsTitle>Tous nos produits en un clin d'oeil</ProductsTitle>
            <ProducstSubtitle>
              <i className="fa-solid fa-circle-info"></i>
              Sélectionnez celui de votre choix pour plus d'informations.
            </ProducstSubtitle>
          </ProductsTitleContainer>
          <ProductsWrapper>
            {products.map((sofa) => (
              <Card
                key={sofa._id}
                onClick={() => {
                  localStorage.setItem('productId', sofa._id)
                  navigate('/product')
                }}
              >
                <CardPicture>
                  <Picture
                    src={sofa.imageUrl}
                    alt={`photo du canapé ${sofa.name}`}
                  />
                </CardPicture>
                <CardText>
                  <CardTitle>{sofa.name}</CardTitle>
                  <CardCaption>{sofa.description}</CardCaption>
                  <CardPrice>{sofa.price} €</CardPrice>
                  <CardRank>
                    {sofa.rank.split('-').map((el, index) => (
                      <i className="fa-solid fa-star" key={index}></i>
                    ))}
                  </CardRank>
                </CardText>
              </Card>
            ))}
          </ProductsWrapper>
        </ProductsContainer>
      </HomeWrapper>
      <Footer />
    </div>
  )
}

const HomeWrapper = styled.main`
  display: flex;
  flex-direction: column;
`

const HomeContainer = styled.section`
  width: 100%;
  height: 100vh;
  padding-top: 100px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
  position: relative;
`

const HomeBackground = styled.div`
  background: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  filter: grayscale(60%);
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 15vh;
  left: 15%;
  z-index: 2;
  width: 500px;
  flex-wrap: wrap;
  color: #fff;
`

const Title = styled.h1`
  font-weight: 400;
  margin: 0;
`
const Subtitle = styled.span`
  font-size: 1.7em;
  font-family: Niconne, Verdana, Geneva, Tahoma, sans-serif;
  & i {
    margin-right: 10px;
    vertical-align: bottom;
  }
`

const Description = styled.p`
  color: #fff;
  font-weight: 400;
  margin: 30px 0;
`
const Button = styled.a`
  display: flex;
  position: relative;
  z-index: 1;
  justify-content: center;
  align-items: center;
  width: 200px;
  padding: 10px 15px;
  background-color: ${colors.tertiary};
  border: none;
  color: #000;
  margin: 20px 0;
  font-size: 0.9em;
  font-weight: 700;
  font-family: inherit;
  text-decoration: none;
  transition: all 100ms linear;
  cursor: pointer;
  overflow: hidden;
  border-radius: 5px;
  &:hover {
    background-color: transparent;
    border: 1px solid ${colors.tertiary};
    color: ${colors.tertiary};
  }
`
const ProductsContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${colors.background};
  padding: 50px;
`

const ProductsTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ProductsTitle = styled.h2`
  margin: 0;
`

const ProducstSubtitle = styled.span`
  margin: 10px 0;
  & i {
    vertical-align: bottom;
    margin-right: 10px;
  }
`

const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const CardText = styled.div`
  padding: 15px;
`

const CardTitle = styled.h3`
  color: ${colors.interactive};
`

const CardCaption = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  max-height: calc(3 * 1.25em);
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  line-height: 1.25em;
`

const CardPrice = styled.span`
  font-weight: 600;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 5px 5px 10px #b5b5b5;
  margin: 20px;
  border-radius: 15px;
  cursor: pointer;
  transition: all 250ms linear;
`

const CardPicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  transition: all 200ms linear;
  ${Card}:hover & {
    transform: scale(1.2);
  }
`
const CardRank = styled.div`
  & i {
    color: ${colors.rank};
  }
`
const Picture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: drop-shadow(9px 7px 10px #000);
`
export default Home
