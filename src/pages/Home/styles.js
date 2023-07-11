import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
`

export const Content = styled.main`
  padding: 0 2.5rem;
  margin: 4.5rem auto;

  width: 100%;
  max-width: 116rem;

  h2 {
    margin-bottom: 2rem;
  }

  .refeições,
  .sobremesas,
  .bebidas {
    margin-bottom: 3rem;
  }

  @media (min-width: 1160px) {
    padding: 0 2.5rem;
    margin: 16.4rem auto 4.5rem;

    .refeições,
    .sobremesas,
    .bebidas {
      margin-bottom: 4.5rem;
    }
  }
`

export const Logomark = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);

  margin-bottom: 5rem;

  border-radius: 0.5rem;

  width: 100%;

  .logomarkMobile {
    margin-left: -6rem;
    margin-top: -3rem;
    max-width: 20rem;
  }

  .logomarkDesktop {
    display: none;
  }

  div {
    h1 {
      color: ${({ theme }) => theme.COLORS.light_300};

      text-align: center;

      font-size: 2rem;
      font-family: 'Poppins', sans-serif;

      margin-bottom: 1rem;
    }

    p {
      color: ${({ theme }) => theme.COLORS.light_300};

      text-align: center;

      font-size: 1.2rem;
      font-family: 'Poppins', sans-serif;

      margin-bottom: 1.5rem;
    }
  }

  @media (min-width: 1160px) {
    .logomarkMobile {
      display: none;
    }

    .logomarkDesktop {
      display: block;

      margin-left: -8.5rem;
      margin-top: -13.5rem;
      max-width: 65rem;
    }

    div {
      h1 {
        font-size: 4rem;
      }

      p {
        font-size: 1.6rem;
      }
    }
  }
`

export const Search = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  background: ${({ theme }) => theme.COLORS.dark_900};

  margin-bottom: 4rem;
  padding: 1.2rem 1.4rem;

  border-radius: 0.8rem;

  width: 100%;

  input {
    padding: 0;

    background: none;
  }

  @media (min-width: 1160px) {
    display: none;
  }
`
