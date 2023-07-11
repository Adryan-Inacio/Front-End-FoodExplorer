import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 10.7rem auto 8.5rem;

  min-height: 100vh;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  padding: 5.6rem 2.8rem 2.4rem;

  background: ${({ theme }) => theme.COLORS.dark_700};

  button {
    color: ${({ theme }) => theme.COLORS.light_300};
  }

  h1 {
    font-weight: 500;
    font-size: 2.5rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 2.8rem;

  width: 100%;
  max-width: 42.8rem;

  margin: 3.6rem auto 0;

  button {
    display: flex;

    color: ${({ theme }) => theme.COLORS.light_300};

    border-bottom: 2px solid ${({ theme }) => theme.COLORS.dark_1000};

    font-size: 2.4rem;

    padding: 1rem;
  }
`
