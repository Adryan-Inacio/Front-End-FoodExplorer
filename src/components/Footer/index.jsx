import { Container, Content } from './styles'

import logoFooter from '../../assets/logoFooterFoodExplorer.svg'

export function Footer() {
  return (
    <Container>
      <Content>
        <img src={logoFooter} alt="Logotipo FoodExplorer" />
        <p>© 2023 - Todos os direitos reservados.</p>
      </Content>
    </Container>
  )
}
