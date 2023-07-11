import { Container, Content, BackButton, Form, FormButtons } from './styles'

import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

import { AdminHeader } from '../../components/AdminHeader'
import { Input } from '../../components/Input'
import { Ingredient } from '../../components/Ingredient'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import { FiUpload } from 'react-icons/fi'
import { RxCaretLeft } from 'react-icons/rx'

export function Edit() {
  const { user } = useAuth()

  const [dishImage, setDishImage] = useState(null)
  const [name, setName] = useState('')
  const [category, setCategory] = useState('Refeição')
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  const { id } = useParams()

  const navigate = useNavigate()

  function navigateBack() {
    navigate(-1)
  }

  function changeImage(event) {
    const file = event.target.files[0]
    setDishImage(file)
  }

  function addIngredient() {
    setIngredients(prevstate => [...prevstate, newIngredient])
    setNewIngredient('')
  }

  function deleteIngredient(deleted) {
    setIngredients(prevState =>
      prevState.filter(ingredient => ingredient !== deleted)
    )
    setNewIngredient('')
  }

  async function updateDish(event) {
    event.preventDefault()

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

    await api.put(`/dishes/${id}`, formData)

    alert('Atualizado corretamente!')
    navigateBack()
  }

  async function deleteDish() {
    const confirm = window.confirm(
      'Confirme que deseja remover o prato, por favor'
    )

    if (confirm) {
      await api.delete(`/dishes/${id}`)
      navigateBack()
    }
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${id}`)

      const { name, ingredients, price, description } = response.data
      setName(name)
      setIngredients(ingredients.map(ingredient => ingredient.name))
      setPrice(price)
      setDescription(description)
    }

    fetchDish()
  }, [])

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

            <h1>Editar prato</h1>

            <Form onSubmit={updateDish}>
              <div>
                <div className="editImage">
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
                        onChange={changeImage}
                      />
                    </label>
                  </div>
                </div>

                <div className="editName">
                  <h2>Nome</h2>

                  <Input
                    type="text"
                    placeholder="Ex.: Salada Ceasar"
                    value={name}
                    onChange={event => setName(event.target.value)}
                  />
                </div>

                <div className="editCategory">
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
                <div className="editIngredients">
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

                <div className="editPrice">
                  <h2>Preço</h2>

                  <Input
                    type="string"
                    placeholder={`R$ ${price}`}
                    onChange={event => setPrice(event.target.value)}
                  />
                </div>
              </div>

              <div>
                <div className="editDescription">
                  <h2>Descrição</h2>

                  <textarea
                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição."
                    onChange={event => setDescription(event.target.value)}
                    value={description}
                  ></textarea>
                </div>
              </div>

              <FormButtons>
                <Button
                  title="Excluir prato"
                  type="button"
                  onClick={deleteDish}
                />
                <Button title="Salvar alterações" type="submit" />
              </FormButtons>
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
