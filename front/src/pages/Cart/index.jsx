import styled from 'styled-components'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import picture from '../../assets/images/kanap01.png'
import { colors } from '../../utils/colors'

function Cart() {
  return (
    <div>
      <Header />
      <CartWrapper>
        <CartTitle>Votre panier</CartTitle>
        <CartContainer>
          <AllProduct>
            <CartProduct>
              <Content>
                <ProductPictureBox>
                  <ProductPicture src={picture} />
                </ProductPictureBox>
                <ProductContent>
                  <Name>Canapé Lagon</Name>
                  <QuantityBox>
                    <Quantity>3</Quantity>
                    <ButtonBox>
                      <Button>+</Button>
                      <Button>-</Button>
                    </ButtonBox>
                  </QuantityBox>
                </ProductContent>
                <ProductPrice>599€</ProductPrice>
              </Content>
              <DeleteBox>
                <i className="fa-solid fa-xmark"></i>
              </DeleteBox>
            </CartProduct>
            <CartProduct>
              <Content>
                <ProductPictureBox>
                  <ProductPicture src={picture} />
                </ProductPictureBox>
                <ProductContent>
                  <Name>Canapé Lagon</Name>
                  <QuantityBox>
                    <Quantity>3</Quantity>
                    <ButtonBox>
                      <Button>+</Button>
                      <Button>-</Button>
                    </ButtonBox>
                  </QuantityBox>
                </ProductContent>
                <ProductPrice>599€</ProductPrice>
              </Content>
              <DeleteBox>
                <i className="fa-solid fa-xmark"></i>
              </DeleteBox>
            </CartProduct>
            <CartProduct>
              <Content>
                <ProductPictureBox>
                  <ProductPicture src={picture} />
                </ProductPictureBox>
                <ProductContent>
                  <Name>Canapé Lagon</Name>
                  <QuantityBox>
                    <Quantity>3</Quantity>
                    <ButtonBox>
                      <Button>+</Button>
                      <Button>-</Button>
                    </ButtonBox>
                  </QuantityBox>
                </ProductContent>
                <ProductPrice>599€</ProductPrice>
              </Content>
              <DeleteBox>
                <i className="fa-solid fa-xmark"></i>
              </DeleteBox>
            </CartProduct>
          </AllProduct>
          <Receipt>
            <Total>
              <Title>Total</Title>
              <Price>1369,29 €</Price>
            </Total>
            <ValidateCart>Valider mon panier</ValidateCart>
          </Receipt>
        </CartContainer>
      </CartWrapper>
      <Footer />
    </div>
  )
}

const CartWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 100px 30px 100px 30px;
  position: relative;
  background-color: ${colors.background};
`

const CartTitle = styled.h2``

const CartContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;
`

const AllProduct = styled.div`
  display: flex;
  flex-direction: column;
`

const CartProduct = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 20px 50px;
  border-radius: 5px;
  box-shadow: 0 4px 1px #dfdfdf;
`

const ProductPictureBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
`

const ProductPicture = styled.img`
  width: 100%;
  height: 100%;
`

const ProductContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 100px;
`

const DeleteBox = styled.button`
  margin-left: 40px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  & i {
    color: ${colors.danger};
    font-size: 1.5em;
  }
`

const Name = styled.span`
  font-weight: 700;
  font-size: 1.2em;
`
const QuantityBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 70px;
`

const Quantity = styled.span``

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`

const Button = styled.button`
  border-radius: 50%;
  border: none;
  margin: 5px;
  padding: 5px 10px;
  background-color: ${colors.buttonBackground};
  color: #fff;
  font-weight: 700;
`

const ProductPrice = styled.span`
  font-weight: 600;
  font-size: 1.2em;
`

const Receipt = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px #919191;
`

const Title = styled.span`
  margin-right: 50px;
`

const Price = styled.span``

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-size: 1.5em;
  font-weight: 700;
`
const ValidateCart = styled.button`
  margin-top: 20px;
  padding: 15px;
  font-size: 1em;
  border: none;
  border-radius: inherit;
  background-color: green;
  cursor: pointer;
  color: #fff;
`
export default Cart
