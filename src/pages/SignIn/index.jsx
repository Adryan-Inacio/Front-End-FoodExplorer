import { Container, Content, Form } from './styles'

import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import logoSignIn from '../../assets/logoHeaderFoodExplorer.svg'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  function handleSignIn(event) {
    event.preventDefault()

    signIn({ email, password })
  }

  return (
    <Container>
      <Content>
        <img src={logoSignIn} alt="Logo FoodExplorer" />

        <Form onSubmit={handleSignIn}>
          <h2>Faça login</h2>

          <div className="email">
            <h3>Email</h3>
            <Input
              type="email"
              placeholder="Exemplo: exemplo@exemplo.com"
              onChange={event => setEmail(event.target.value)}
            />
          </div>

          <div className="password">
            <h3>Senha</h3>
            <Input
              type="password"
              placeholder="No mínimo 6 caracteres"
              onChange={event => setPassword(event.target.value)}
            />
          </div>

          <Button type="submit" title="Entrar" />

          <Link to="register">
            <span>Criar uma conta</span>
          </Link>
        </Form>
      </Content>
    </Container>
  )
}
