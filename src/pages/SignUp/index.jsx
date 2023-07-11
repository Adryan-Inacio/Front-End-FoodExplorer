import { Container, Content, Form } from './styles'

import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { api } from '../../services/api'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import logoSignUp from '../../assets/logoHeaderFoodExplorer.svg'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleSignUp(event) {
    event.preventDefault()

    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('Usuário cadastrado')
        navigate('/')
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Ocorreu um erro e não foi possível concluir o cadastro')
        }
      })
  }

  return (
    <Container>
      <Content>
        <img src={logoSignUp} alt="Logo FoodExplorer" />

        <Form onSubmit={handleSignUp}>
          <h2>Crie sua conta</h2>

          <div className="name">
            <h3>Seu nome</h3>
            <Input
              type="text"
              placeholder="Exemplo: Maria da Silva"
              onChange={event => setName(event.target.value)}
            />
          </div>

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

          <Button type="submit" title="Criar conta" />

          <Link to="/">
            <span>Já tenho uma conta</span>
          </Link>
        </Form>
      </Content>
    </Container>
  )
}
