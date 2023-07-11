import {
  Container,
  Content,
  Input,
  AdminLogotype,
  Menu,
  LogOut
} from './styles'

import { useNavigate, Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import { BsList } from 'react-icons/bs'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { FiLogOut } from 'react-icons/fi'
import { Button } from '../Button'

import logoHeader from '../../assets/logoHeaderFoodExplorer.svg'

export function AdminHeader({ onSearch }) {
  const navigate = useNavigate()
  const { signOut } = useAuth()

  function navigateToMenu() {
    navigate('/popup')
  }

  function navigateToCreate() {
    navigate('/create')
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

        <AdminLogotype>
          <Link to="/">
            <img src={logoHeader} alt="Logo FoodExplorer admin" />
            <span>admin</span>
          </Link>
        </AdminLogotype>

        <Input>
          <HiMagnifyingGlass size={20} />
          <input
            type="text"
            placeholder="Busque por pratos ou ingredientes"
            onChange={onSearch}
          />
        </Input>

        <Button type="button" title="Novo prato" onClick={navigateToCreate} />

        <LogOut onClick={navigateToLogOut}>
          <FiLogOut size={24} />
        </LogOut>
      </Content>
    </Container>
  )
}
