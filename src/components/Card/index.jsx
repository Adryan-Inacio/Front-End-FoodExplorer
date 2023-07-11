import { Container } from './styles'

import { useState } from 'react'
import { Link } from 'react-router-dom'

import { api } from '../../services/api'

import { Amount } from '../Amount'
import { Button } from '../Button'

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { RxCaretRight } from 'react-icons/rx'

export function Card({ dish, onInclude }) {
  const [favorite, setFavorite] = useState(false)
  const [amount, setAmount] = useState(1)

  const dishImage = `${api.defaults.baseURL}/files/${dish.image}`

  function addToFavorites() {
    setFavorite(state => !state)
  }

  function Increase() {
    setAmount(state => state + 1)
  }

  function Decrease() {
    if (amount > 1) {
      setAmount(state => state - 1)
    }
  }

  return (
    <Container>
      <button onClick={addToFavorites}>
        {favorite == false ? (
          <AiOutlineHeart size={24} />
        ) : (
          <AiFillHeart size={24} />
        )}
      </button>

      <Link to={`/details/${dish.id}`}>
        <img src={dishImage} alt="Imagem do prato" />

        <div className="name">
          {dish.name}
          <RxCaretRight />
        </div>
      </Link>

      <p>{dish.description}</p>

      <span>R$ {dish.price}</span>

      <div className="buttons">
        <div className="amount">
          <Amount onIncrease={Increase} amount={amount} onDecrease={Decrease} />
        </div>
        <div className="include">
          <Button title="incluir" onClick={() => onInclude(dish)} />
        </div>
      </div>
    </Container>
  )
}
