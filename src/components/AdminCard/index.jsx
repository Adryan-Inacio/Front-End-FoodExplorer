import { Container } from './styles'

import { api } from '../../services/api'

import { Link, useNavigate } from 'react-router-dom'

import { TbPencil } from 'react-icons/tb'
import { RxCaretRight } from 'react-icons/rx'

export function AdminCard({ dish }) {
  const dishImage = `${api.defaults.baseURL}/files/${dish.image}`

  const navigate = useNavigate()
  function navigateToEdit() {
    navigate(`/edit/${dish.id}`)
  }

  return (
    <Container>
      <button onClick={navigateToEdit}>
        <TbPencil size={24} />
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
    </Container>
  )
}
