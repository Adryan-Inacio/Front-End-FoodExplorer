import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  justify-content: center;

  padding: 3rem 2.8rem;

  background: ${({ theme }) => theme.COLORS.dark_600};

  @media (min-width: 1160px) {
    padding: 2.4rem;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;

  width: 100%;
  max-width: 112rem;

  img {
    width: 16rem;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.light_200};

    font-size: 1.2rem;
  }
`
