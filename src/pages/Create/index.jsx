import { Container, Content, BackButton, Form } from './styles'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

import { AdminHeader } from '../../components/AdminHeader'
import { Input } from '../../components/Input'
import { Ingredient } from '../../components/Ingredient'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import { FiUpload } from 'react-icons/fi'
import { RxCaretLeft } from 'react-icons/rx'

export function Create() {
  const { user } = useAuth()

  const [dishImage, setDishImage] = useState(null)
  const [name, setName] = useState('')
  const [category, setCategory] = useState('Refeição')
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  const navigate = useNavigate()

  function navigateBack() {
    navigate(-1)
  }

  function chooseImage(event) {
    const file = event.target.files[0]
    setDishImage(file)
  }

  function addIngredient() {
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient('')
  }

  function deleteIngredient(deleted) {
    setIngredients(prevState =>
      prevState.filter(ingredient => ingredient !== deleted)
    )
  }

  async function createDish(e) {
    e.preventDefault()

    if (!dishImage) {
      return alert('Selecione uma imagem, por favor')
    }

    if (!name || !price || !description) {
      return alert('Preencha todos os campos, por favor')
    }

    if (ingredients.length < 1) {
      return alert('Selecione pelo menos um ingrediente, por favor')
    }

    if (newIngredient != '') {
      return alert(
        'Ops, parece que você esqueceu de adicionar o ingrediente digitado!'
      )
    }

    const formData = new FormData()
    formData.append('image', dishImage)
    formData.append('name', name)
    formData.append('category', category)
    ingredients.map(ingredient => formData.append('ingredients', ingredient))
    formData.append('price', price)
    formData.append('description', description)

    await api.post('/dishes', formData)

    alert('Criado corretamente!')
    navigateBack()
  }

  return (
    <>
      {user.isAdmin ? (
        <Container>
          <AdminHeader />

          <Content>
            <BackButton onClick={navigateBack}>
              <RxCaretLeft size={32} />
              <span>Voltar</span>
            </BackButton>

            <h1>Adicionar prato</h1>

            <Form onSubmit={createDish}>
              <div>
                <div className="createImage">
                  <h2>Imagem do prato</h2>

                  <div className="imageInput">
                    <label htmlFor="dishImage">
                      <FiUpload size={24} />
                      <span>
                        {dishImage?.name ? dishImage?.name : 'Selecione imagem'}
                      </span>
                      <input
                        id="dishImage"
                        type="file"
                        onChange={chooseImage}
                      />
                    </label>
                  </div>
                </div>

                <div className="createName">
                  <h2>Nome</h2>

                  <Input
                    placeholder="Ex.: Salada Ceasar"
                    type="text"
                    value={name}
                    onChange={event => setName(event.target.value)}
                  />
                </div>

                <div className="createCategory">
                  <h2>Categoria</h2>

                  <select
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                  >
                    <option value="Refeição">Refeição</option>
                    <option value="Sobremesa">Sobremesa</option>
                    <option value="Bebida">Bebida</option>
                  </select>
                </div>
              </div>

              <div>
                <div className="createIngredients">
                  <h2>Ingredientes</h2>

                  <div className="ingredientsInput">
                    {ingredients.map(ingredient => {
                      return (
                        <Ingredient
                          key={ingredient}
                          value={ingredient}
                          onClick={() => deleteIngredient(ingredient)}
                        />
                      )
                    })}
                    {ingredients.length < 6 && (
                      <Ingredient
                        isNew
                        placeholder="Adicionar"
                        value={newIngredient}
                        onChange={event => setNewIngredient(event.target.value)}
                        onClick={addIngredient}
                      />
                    )}
                  </div>
                </div>

                <div className="createPrice">
                  <h2>Preço</h2>

                  <Input
                    type="string"
                    placeholder="R$ 00,00"
                    onChange={event => setPrice(event.target.value)}
                  />
                </div>
              </div>

              <div>
                <div className="createDescription">
                  <h2>Descrição</h2>

                  <textarea
                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição."
                    onChange={event => setDescription(event.target.value)}
                    value={description}
                  ></textarea>
                </div>
              </div>

              <Button title="Salvar alterações" type="submit" />
            </Form>
          </Content>

          <Footer />
        </Container>
      ) : (
        alert('Você não possui privilégios de administrador')
      )}
    </>
  )
}
