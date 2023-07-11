import { Container } from './styles'

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

export function Amount({ onDecrease, amount, onIncrease }) {
  return (
    <Container>
      <button onClick={onDecrease}>
        <AiOutlineMinus size={24} />
      </button>

      <span>{amount}</span>

      <button onClick={onIncrease}>
        <AiOutlinePlus size={24} />
      </button>
    </Container>
  )
}
