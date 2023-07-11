import { Container, Content, Logomark, Search } from './styles'

import { useState, useEffect } from 'react'

import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

import { Header } from '../../components/Header'
import { Card } from '../../components/Card'
import { Footer } from '../../components/Footer'
import { AdminHeader } from '../../components/AdminHeader'
import { AdminCard } from '../../components/AdminCard'
import { Input } from '../../components/Input'

import logoDesktop from '../../assets/logoDesktop.png'
import logoMobile from '../../assets/logoMobile.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'

import { HiMagnifyingGlass } from 'react-icons/hi2'

export function Home() {
  const [dishes, setDishes] = useState([])
  const [search, setSearch] = useState('')
  const [itemsInCart, setItemsInCart] = useState([])

  const { user } = useAuth()

  function includeToCart(dish) {
    setItemsInCart(state => [...state, dish])
  }

  const requestsNumber = itemsInCart.length

  function searchDishes(event) {
    setSearch(event.target.value)
  }

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?search=${search}`)

      setDishes(response.data)
    }

    fetchDishes()
  }, [search])
  return (
    <>
      {user.isAdmin ? (
        <Container>
          <AdminHeader onSearch={searchDishes} />

          <Content>
            <Logomark>
              <img
                src={logoMobile}
                className="logomarkMobile"
                alt="Mobile logomark FoodExplorer "
              />
              <img
                src={logoDesktop}
                className="logomarkDesktop"
                alt="Desktop logomark FoodExplorer"
              />

              <div className="presentation">
                <h1>Sabores inigualáveis</h1>
                <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
              </div>
            </Logomark>

            <Search>
              <HiMagnifyingGlass size={24} />
              <Input
                placeholder="Busque por pratos ou ingredientes"
                onChange={searchDishes}
              />
            </Search>

            <h2>Refeições</h2>
            <Swiper
              className="refeições"
              grabCursor={true}
              breakpoints={{
                '@0.00': {
                  slidesPerView: 1,
                  spaceBetween: 10
                },
                '@0.75': {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                '@1.00': {
                  slidesPerView: 3,
                  spaceBetween: 40
                }
              }}
              navigation={true}
              modules={[Navigation]}
            >
              {dishes
                .filter(dish => dish.category == 'Refeição')
                .map(dish => (
                  <SwiperSlide key={String(dish.id)}>
                    <AdminCard dish={dish} />
                  </SwiperSlide>
                ))}
            </Swiper>

            <h2>Sobremesas</h2>
            <Swiper
              className="sobremesas"
              grabCursor={true}
              breakpoints={{
                '@0.00': {
                  slidesPerView: 1,
                  spaceBetween: 10
                },
                '@0.75': {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                '@1.00': {
                  slidesPerView: 3,
                  spaceBetween: 40
                }
              }}
              navigation={true}
              modules={[Navigation]}
            >
              {dishes
                .filter(dish => dish.category == 'Sobremesa')
                .map(dish => (
                  <SwiperSlide key={String(dish.id)}>
                    <AdminCard dish={dish} />
                  </SwiperSlide>
                ))}
            </Swiper>

            <h2>Bebidas</h2>
            <Swiper
              className="bebidas"
              grabCursor={true}
              breakpoints={{
                '@0.00': {
                  slidesPerView: 1,
                  spaceBetween: 10
                },
                '@0.75': {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                '@1.00': {
                  slidesPerView: 3,
                  spaceBetween: 40
                }
              }}
              navigation={true}
              modules={[Navigation]}
            >
              {dishes
                .filter(dish => dish.category == 'Bebida')
                .map(dish => (
                  <SwiperSlide key={String(dish.id)}>
                    <AdminCard dish={dish} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </Content>

          <Footer />
        </Container>
      ) : (
        <Container>
          <Header onSearch={searchDishes} requests={requestsNumber} />

          <Content>
            <Logomark>
              <img
                src={logoMobile}
                className="logomarkMobile"
                alt="Mobile logomark FoodExplorer"
              />
              <img
                src={logoDesktop}
                className="logomarkDesktop"
                alt="Desktop logomark FoodExplorer"
              />

              <div>
                <h2>Sabores inigualáveis</h2>
                <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
              </div>
            </Logomark>

            <Search>
              <HiMagnifyingGlass size={24} />
              <Input
                placeholder="Busque por pratos ou ingredientes"
                onChange={searchDishes}
              />
            </Search>

            <h2>Refeições</h2>
            <Swiper
              className="refeições"
              grabCursor={true}
              breakpoints={{
                '@0.00': {
                  slidesPerView: 1,
                  spaceBetween: 10
                },
                '@0.75': {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                '@1.00': {
                  slidesPerView: 3,
                  spaceBetween: 40
                }
              }}
              navigation={true}
              modules={[Navigation]}
            >
              {dishes
                .filter(dish => dish.category == 'Refeição')
                .map(dish => (
                  <SwiperSlide key={String(dish.id)}>
                    <Card dish={dish} onInclude={includeToCart} />
                  </SwiperSlide>
                ))}
            </Swiper>

            <h2>Sobremesas</h2>
            <Swiper
              className="sobremesas"
              grabCursor={true}
              breakpoints={{
                '@0.00': {
                  slidesPerView: 1,
                  spaceBetween: 10
                },
                '@0.75': {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                '@1.00': {
                  slidesPerView: 3,
                  spaceBetween: 40
                }
              }}
              navigation={true}
              modules={[Navigation]}
            >
              {dishes
                .filter(dish => dish.category == 'Sobremesa')
                .map(dish => (
                  <SwiperSlide key={String(dish.id)}>
                    <Card dish={dish} onInclude={includeToCart} />
                  </SwiperSlide>
                ))}
            </Swiper>

            <h2>Bebidas</h2>
            <Swiper
              className="bebidas"
              grabCursor={true}
              breakpoints={{
                '@0.00': {
                  slidesPerView: 1,
                  spaceBetween: 10
                },
                '@0.75': {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                '@1.00': {
                  slidesPerView: 3,
                  spaceBetween: 40
                }
              }}
              navigation={true}
              modules={[Navigation]}
            >
              {dishes
                .filter(dish => dish.category == 'Bebida')
                .map(dish => (
                  <SwiperSlide key={String(dish.id)}>
                    <Card dish={dish} onInclude={includeToCart} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </Content>

          <Footer />
        </Container>
      )}
    </>
  )
}
