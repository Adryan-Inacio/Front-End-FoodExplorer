import { Container } from './styles'

export function Button({ type, onClick, children, title }) {
  return (
    <Container type={type} onClick={onClick}>
      {children}
      {title}
    </Container>
  )
}
