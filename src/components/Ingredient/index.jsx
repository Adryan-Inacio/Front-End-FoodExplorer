import { Container } from './styles'

import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai'

export function Ingredient({ isNew, placeholder, value, onChange, onClick }) {
  return (
    <Container isNew={isNew}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={!isNew}
      />

      <button type="button" onClick={onClick}>
        {isNew ? <AiOutlinePlus /> : <AiOutlineClose />}
      </button>
    </Container>
  )
}
