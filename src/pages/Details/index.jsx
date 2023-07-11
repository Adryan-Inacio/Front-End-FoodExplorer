import {
  Container,
  Content,
  BackButton,
  DishDetails,
  DishIngredients
} from './styles'

import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

import { AdminHeader } from '../../components/AdminHeader'
import { Header } from '../../components/Header'
import { Amount } from '../../components/Amount'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import { RxCaretLeft } from 'react-icons/rx'
import { TbReceipt } from 'react-icons/tb'

export function Details() {
  const { user } = useAuth()
  const { id } = useParams()

  const [dish, setDish] = useState({})
  const [amount, setAmount] = useState(1)
  const [cartItems, setCartItems] = useState([])

  const dishImage = `${api.defaults.baseURL}/files/${dish.image}`

  const navigate = useNavigate()

  const dishesAddedToCart = cartItems.length

  function navigateBack() {
    navigate(-1)
  }

  function DecreaseAmount() {
    if (amount > 1) {
      setAmount(prevState => prevState - 1)
    }
  }

  function IncreaseAmount() {
    setAmount(prevState => prevState + 1)
  }

  function addDishToCart(dish) {
    setCartItems(prevState => [...prevState, dish])
  }

  function navigateToEdit() {
    navigate(`/edit/${dish.id}`)
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${id}`)

      setDish(response.data)
    }

    fetchDish()
  }, [])

  return (
    <>
      {user.isAdmin ? (
        <Container>
          <AdminHeader />

          <Content>
            <BackButton onClick={navigateBack}>
              <RxCaretLeft size={32} />
              <span>Voltar</span>
            </BackButton>

            <DishDetails>
              <img src={dishImage} alt="Imagem do prato" />

              <div className="detailsWrapper">
                <h2>{dish.name}</h2>
                <p>{dish.description}</p>

                <DishIngredients>
                  {dish.ingredients?.map(item => (
                    <span key={item.id}>{item.name}</span>
                  ))}
                </DishIngredients>

                <div className="editButton">
                  <Button title="Editar prato" onClick={navigateToEdit} />
                </div>
              </div>
            </DishDetails>
          </Content>

          <Footer />
        </Container>
      ) : (
        <Container>
          <Header requests={dishesAddedToCart} />

          <Content>
            <button onClick={navigateBack}>
              <RxCaretLeft size={32} />
              <span>Voltar</span>
            </button>

            <DishDetails>
              <img src={dishImage} alt="Imagem do prato" />

              <div className="detailsWrapper">
                <h2>{dish.name}</h2>
                <p>{dish.description}</p>

                <DishIngredients>
                  {dish.ingredients?.map(item => (
                    <span key={item.id}>{item.name}</span>
                  ))}
                </DishIngredients>

                <div className="orderButtons">
                  <div className="amount">
                    <Amount
                      onDecrease={DecreaseAmount}
                      onIncrease={IncreaseAmount}
                      amount={amount}
                    />
                  </div>

                  <Button onClick={() => addDishToCart(dish)}>
                    <TbReceipt size={21} />
                    <span>Pedir</span>
                    <span>•</span>
                    <span>R${dish.price}</span>
                  </Button>
                </div>
              </div>
            </DishDetails>
          </Content>

          <Footer />
        </Container>
      )}
    </>
  )
}
