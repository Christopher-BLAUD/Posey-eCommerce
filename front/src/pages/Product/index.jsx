import styled from 'styled-components'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import picture from '../../assets/images/kanap01.png'
import { colors } from '../../utils/colors'
import { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../utils/context'
import axios from 'axios'
import Loader from '../../utils/Loader'

function Product() {
  let { quantity, setQuantity } = useContext(ProductContext)
  const [productQuantity, setProductQuantity] = useState(0)
  const [product, setProduct] = useState({})
  const [isDataLoading, setDataLoading] = useState(false)

  useEffect(() => {
    setDataLoading(true)
    axios
      .get(
        'http://localhost:8080/api/product/' + localStorage.getItem('productId')
      )
      .then((res) => {
        setProduct(res.data)
        setDataLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      <Header />
      <ProductWrapper>
        <ProductContainer>
          {isDataLoading ? <Loader/> : <ProductCard>
            <PictureContainer>
              <Picture src={product.imageUrl} alt={`photo du canapé lagon`} />
            </PictureContainer>
            <CardContent>
              <CardTitle>{product.name}</CardTitle>
              <CardPrice>{product.price} €</CardPrice>
              <CardRank>
                {product.rank !== undefined
                  ? product.rank
                      .split('-')
                      .map((el, index) => <i className="fa-solid fa-star" key={index}></i>)
                  : ''}
              </CardRank>
              <CardDescription>{product.description}</CardDescription>
              <CartSetting>
                <CardQuantity>
                  <QuantityButton
                    onClick={() =>
                      productQuantity !== 0
                        ? setProductQuantity(productQuantity - 1)
                        : productQuantity
                    }
                  >
                    -
                  </QuantityButton>
                  <Quantity>{productQuantity}</Quantity>
                  <QuantityButton
                    onClick={() => setProductQuantity(productQuantity + 1)}
                  >
                    +
                  </QuantityButton>
                </CardQuantity>
                <AddToCart
                  onClick={() => setQuantity(quantity + productQuantity)}
                >
                  Ajouter au panier
                </AddToCart>
              </CartSetting>
            </CardContent>
          </ProductCard>}
        </ProductContainer>
      </ProductWrapper>
      <Footer />
    </div>
  )
}

const ProductWrapper = styled.main`
  background-color: ${colors.background};
  padding: 70px 15px;
`

const ProductContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`

const ProductCard = styled.article`
  display: flex;
  flex-wrap: wrap;
`

const PictureContainer = styled.div`
  background-color: #fff;
  margin-right: 30px;
  border-radius: 10px;
`

const Picture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: drop-shadow(9px 7px 10px #000);
`
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`
const CardTitle = styled.h3`
  margin: 0;
  margin-bottom: 10px;
  font-size: 2em;
`

const CardPrice = styled.span`
  font-weight: 500;
  font-size: 1.5em;
  margin-top: 50px;
`

const CardRank = styled.div`
  margin: 10px 0;
  & i {
    color: #ffb81a;
  }
`

const CardDescription = styled.p`
  max-width: 400px;
  margin: 50px 0;
  margin-top: 0;
`
const CardQuantity = styled.div`
  display: flex;
`

const QuantityButton = styled.button`
  padding: 5px 15px;
  border: none;
  font-size: 1.3em;
  font-weight: 500;
  cursor: pointer;
  background-color: #a3a3a3;
  color: #fff;
  border-radius: 5px;
`

const Quantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 20px;
  padding: 10px;
  font-weight: 500;
`

const CartSetting = styled.div`
  display: flex;
`

const AddToCart = styled.button`
  font-size: 1em;
  margin-left: 70px;
  border: none;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 100ms linear;
  &:hover {
    transform: scale(0.9);
  }
`

export default Product
