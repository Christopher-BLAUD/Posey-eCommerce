import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { colors } from '../../utils/colors'
import axios from 'axios'

function ProductControl() {
  const InputFileRef = React.createRef()
  const MyForm = React.createRef()
  const [FileName, setFileName] = useState('')
  const [Picture, setPicture] = useState('')
  const [isFileUploaded, setIsFileUploaded] = useState(false)
  const [Title, setTitle] = useState('')
  const [rank, setRank] = useState('')
  const [Description, setDescription] = useState('')
  const [Price, setPrice] = useState('')
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/products')
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <ProductControlWrapper>
      <SetProduct>
        <Form ref={MyForm}>
          <FormTitle>Informations</FormTitle>
          <InputContainer>
            <Label>Nom du produit</Label>
            <Input
              type="text"
              name="product-name"
              onChange={(e) => setTitle(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Label>Prix</Label>
            <Input
              type="number"
              name="product_price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Label>Ajouter une photo</Label>
            <AddPicture
              onClick={(e) => {
                e.preventDefault()
                InputFileRef.current.click()
              }}
            >
              Choisir un fichier
            </AddPicture>
            <PictureUploader
              ref={InputFileRef}
              type="file"
              onChange={() => {
                setFileName(InputFileRef.current.files[0].name)
                setIsFileUploaded(true)
                let reader = new FileReader()
                reader.onload = (el) => setPicture(el.target.result)
                reader.readAsDataURL(InputFileRef.current.files[0])
              }}
            />
            <PictureName>{FileName}</PictureName>
          </InputContainer>
          <InputContainer>
            <Label>Description</Label>
            <DescriptionArea
              rows="5"
              onChange={(e) => setDescription(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Label>Evaluation</Label>
            <RankContainer>
              <RankBox>
                <Rank
                  type="radio"
                  name="rank"
                  value="1"
                  onChange={(e) => setRank(e.target.value)}
                />
                <Label>
                  <i className="fa-solid fa-star"></i>
                </Label>
              </RankBox>
              <RankBox>
                <Rank
                  type="radio"
                  name="rank"
                  value="1-2"
                  onChange={(e) => setRank(e.target.value)}
                />
                <Label>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </Label>
              </RankBox>
              <RankBox>
                <Rank
                  type="radio"
                  name="rank"
                  value="1-2-3"
                  onChange={(e) => setRank(e.target.value)}
                />
                <Label>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </Label>
              </RankBox>
              <RankBox>
                <Rank
                  type="radio"
                  name="rank"
                  value="1-2-3-4"
                  onChange={(e) => setRank(e.target.value)}
                />
                <Label>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </Label>
              </RankBox>
              <RankBox>
                <Rank
                  type="radio"
                  name="rank"
                  value="1-2-3-4-5"
                  onChange={(e) => setRank(e.target.value)}
                />
                <Label>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </Label>
              </RankBox>
            </RankContainer>
          </InputContainer>
          <SubmitButton
            type="submit"
            onClick={(e) => {
              e.preventDefault()

              const product = new FormData()
              product.append('image', InputFileRef.current.files[0])
              product.append('name', Title)
              product.append('price', parseInt(Price, 10))
              product.append('description', Description)
              product.append('rank', rank)

              setProducts([...products, {
                name: Title,
                price: parseInt(Price, 10),
                description: Description, 
                rank: rank,
                imageUrl: Picture
              }])

              axios({
                method: 'post',
                url: 'http://localhost:8080/api',
                data: product,
                headers: { 'Content-Type': 'multipart/form-data' },
              })
                .then((res) => console.log(res))
                .catch((error) => console.log(error))
            }}
          >
            Enregistrer le produit
          </SubmitButton>
        </Form>
        <ShowProduct>
          <ShowProductTitle>Fiche produit</ShowProductTitle>
          {Title !== '' || Description !== '' || Price !== '' ? (
            <Product>
              <PictureContainer>
                {Picture !== '' ? (
                  <PicturePreview
                    src={Picture}
                    alt={`photo du canapé ${Title}`}
                  />
                ) : (
                  ''
                )}
              </PictureContainer>
              <ProductContent>
                <ProductTitle>{Title}</ProductTitle>
                <ProductRank>
                  {rank.split('-').map((el) => (
                    <i className="fa-solid fa-star"></i>
                  ))}
                </ProductRank>
                <ProductDescription>{Description}</ProductDescription>
                <ProductPrice>{Price} €</ProductPrice>
              </ProductContent>
            </Product>
          ) : (
            <PreviewInfo>
              <i className="fa-solid fa-circle-info"></i>Commencez par saisir
              les informations
            </PreviewInfo>
          )}
        </ShowProduct>
      </SetProduct>
      <ProductsAvailable>
        <ProductsTitle>Produits disponibles</ProductsTitle>
        <ProductsContainer>
          {products.map((product) => (
            <ProductOnline>
              <ProductOnlinePictureContainer>
                <ProductOnlinePicture src={product.imageUrl} />
              </ProductOnlinePictureContainer>
              <ProductOnlineContent>
                <ProductOnlineTitle>{product.name}</ProductOnlineTitle>
                <ProductOnlinePrice>{product.price} €</ProductOnlinePrice>
                <ProductOnlineRank>
                  {product.rank.split('-').map(el => (
                    <i className="fa-solid fa-star"></i>
                  ))}
                </ProductOnlineRank>
                <ProductOnlineDescription>{product.description}</ProductOnlineDescription>
              </ProductOnlineContent>
            </ProductOnline>
          ))}
        </ProductsContainer>
      </ProductsAvailable>
    </ProductControlWrapper>
  )
}

const ProductControlWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: calc(80% - 50px);
  margin: 10px;
  padding: 15px 30px;
  background-color: #ececec;
  border-radius: 10px;
  overflow: hidden;
`
const SetProduct = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const FormTitle = styled.h2`
  margin-bottom: 50px;
`

const ShowProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 0;
`

const ShowProductTitle = styled.h2`
  margin-bottom: 50px;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding: 10px;
`

const RankContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  & i {
    vertical-align: bottom;
    color: #bf9500;
  }
`

const RankBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

const Input = styled.input`
  padding: 5px;
  width: 300px;
  border-radius: 5px;
  border: none;
`

const Rank = styled.input`
  margin-right: 10px;
`

const PictureUploader = styled.input`
  display: none;
`
const DescriptionArea = styled.textarea`
  padding: 5px;
  resize: none;
  border-radius: 5px;
  border: none;
  margin-bottom: 15px;
`

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: 600;
`
const AddPicture = styled.button`
  padding: 10px;
  border: none;
  background-color: #000;
  color: #fff;
  transition: all 100ms linear;
  &:hover{
    transform: scale(0.9);
  }
`

const SubmitButton = styled.button`
  border: none;
  padding: 15px;
  background-color: #00af16;
  font-weight: 700;
  margin-top: 30px;
  transition: all 100ms linear;
  &:hover{
    transform: scale(0.9);
  }
`

const PictureName = styled.span`
  margin-top: 5px;
`

const PictureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: auto;
`
const PreviewInfo = styled.p`
  & i {
    color: #bb622a;
    margin-right: 10px;
    vertical-align: top;
    font-size: 1.3em;
  }
`

const Product = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: #fff;
  box-shadow: 5px 5px 10px #b5b5b5;
  margin: 20px;
  border-radius: 15px;
`
const PicturePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: calc(100% - 30px);
`

const ProductTitle = styled.h3`
  display: flex;
  color: ${colors.interactive};
  width: 100%;
  margin-bottom: 10px;
`

const ProductDescription = styled.p`
  word-break: break-all;
  margin-top: 0;
`

const ProductPrice = styled.span`
  font-weight: 600;
`

const ProductRank = styled.div`
  margin-bottom: 30px;
  & i {
    color: ${colors.rank};
  }
`

const ProductsAvailable = styled.div`
  margin-top: 100px;
  border-top: 1px solid #000;
`

const ProductsTitle = styled.h2``

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ProductOnline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  max-height: 400px;
  background-color: #fff;
  box-shadow: 5px 5px 10px #b5b5b5;
  margin: 20px;
  border-radius: 15px;
  overflow: hidden;
`

const ProductOnlinePictureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40%;
  width: auto;
`

const ProductOnlinePicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const ProductOnlineContent = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 30px);
  height: 60%;
`

const ProductOnlineTitle = styled.h3`
  display: flex;
  color: ${colors.interactive};
  width: 100%;
  margin-bottom: 10px;
`

const ProductOnlineDescription = styled.p`
  word-break: break-all;
  margin-top: 0;
  overflow-y: scroll;
`

const ProductOnlinePrice = styled.span`
  font-weight: 600;
`

const ProductOnlineRank = styled.div`
  margin-bottom: 30px;
  & i {
    color: ${colors.rank};
  }
`
export default ProductControl
