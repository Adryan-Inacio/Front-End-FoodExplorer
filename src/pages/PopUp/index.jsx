import { Container, Header, Content } from './styles'

import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'

import { AiOutlineClose } from 'react-icons/ai'

export function PopUp() {
  const navigate = useNavigate()
  const { user, signOut } = useAuth()

  function navigateBack() {
    navigate(-1)
  }

  function navigateToCreate() {
    navigate('/create')
  }

  function navigateToLogOut() {
    navigate('/')
    signOut()
  }

  return (
    <>
      {user.isAdmin ? (
        <Container>
          <Header>
            <button onClick={navigateBack}>
              <AiOutlineClose size={24} />
            </button>

            <h1>Menu</h1>
          </Header>

          <Content>
            <button onClick={navigateToCreate}>Novo prato</button>

            <button onClick={navigateToLogOut}>Sair</button>
          </Content>

          <Footer />
        </Container>
      ) : (
        <Container>
          <Header>
            <button onClick={navigateBack}>
              <AiOutlineClose size={24} />
            </button>

            <h1>Menu</h1>
          </Header>

          <Content>
            <button onClick={navigateToLogOut}>Sair</button>
          </Content>

          <Footer />
        </Container>
      )}
    </>
  )
}
