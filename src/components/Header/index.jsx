import {
  Container,
  Content,
  Menu,
  Logotype,
  Input,
  Requests,
  LogOut
} from './styles'

import { useNavigate, Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import { HiMagnifyingGlass } from 'react-icons/hi2'
import { BsList } from 'react-icons/bs'
import { TbReceipt } from 'react-icons/tb'
import { FiLogOut } from 'react-icons/fi'

import logoHeader from '../../assets/logoHeaderFoodExplorer.svg'

export function Header({ onSearch, requests }) {
  const navigate = useNavigate()
  const { signOut } = useAuth()

  function navigateToMenu() {
    navigate('/popup')
  }

  function navigateToLogOut() {
    signOut()
    navigate('/')
  }

  return (
    <Container>
      <Content>
        <Menu onClick={navigateToMenu}>
          <BsList size={24} />
        </Menu>

        <Logotype>
          <Link to="/">
            <img src={logoHeader} alt="Logo FoodExplorer" />
          </Link>
        </Logotype>

        <Input>
          <HiMagnifyingGlass size={24} />
          <input
            type="text"
            placeholder="Busque por pratos ou ingredientes"
            onChange={onSearch}
          />
        </Input>

        <Requests>
          <span>{requests}</span>
          <TbReceipt size={26} />
          <span>Pedidos ({requests})</span>
        </Requests>

        <LogOut onClick={navigateToLogOut}>
          <FiLogOut size={24} />
        </LogOut>
      </Content>
    </Container>
  )
}
