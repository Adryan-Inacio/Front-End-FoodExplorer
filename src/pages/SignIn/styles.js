import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 4.7rem;
  margin: 0 auto;

  max-width: 40rem;
  min-height: 100vh;
  width: 100%;

  @media (min-width: 1160px) {
    max-width: 90%;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  img {
    width: 100%;
    height: 4.4rem;
  }

  @media (min-width: 1160px) {
    justify-content: space-around;
    flex-direction: row;
    align-items: center;

    img {
      height: 4.8rem;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 3.2rem;

  width: 100%;

  margin-top: 5rem;

  h2 {
    display: none;

    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    font-size: 3.2rem;

    margin: 0 auto;
  }

  div {
    display: flex;
    gap: 0.8rem;
    flex-direction: column;

    h3 {
      font-size: 1.6rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.light_400};
    }
  }

  > a {
    color: ${({ theme }) => theme.COLORS.light_100};

    margin: 0 auto;

    font-size: 1.4rem;

    &:hover {
      color: ${({ theme }) => theme.COLORS.light_400};
    }
  }

  @media (min-width: 1160px) {
    background: ${({ theme }) => theme.COLORS.dark_700};

    margin: 0;
    padding: 6.4rem;

    border-radius: 16px;

    max-width: 47.6rem;

    h2 {
      display: block;
    }
  }
`
