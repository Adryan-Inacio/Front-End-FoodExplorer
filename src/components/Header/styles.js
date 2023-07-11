import styled from 'styled-components'

export const Container = styled.header`
  padding: 4rem 2.8rem 2.4rem;

  background: ${({ theme }) => theme.COLORS.dark_700};

  @media (min-width: 1160px) {
    padding: 2.8rem;
  }
`

export const Content = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;

  @media (min-width: 1160px) {
    gap: 3.2rem;

    max-width: 112rem;
  }
`

export const Menu = styled.button`
  color: ${({ theme }) => theme.COLORS.light_100};

  @media (min-width: 1160px) {
    display: none;
  }
`

export const Logotype = styled.div`
  img {
    width: 16rem;
    height: 2.5rem;
  }
`

export const Input = styled.div`
  display: none;

  border-radius: 8px;

  padding: 1.2rem 1.4rem;

  background: ${({ theme }) => theme.COLORS.dark_900};

  input {
    width: 100%;

    border: none;

    background: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.light_500};
    }
  }

  @media (min-width: 1160px) {
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    gap: 1.6rem;

    padding: 1.4rem 9.9rem 1.4rem 10rem;
  }
`

export const Requests = styled.button`
  color: ${({ theme }) => theme.COLORS.light_100};

  position: relative;

  span:nth-child(1) {
    background: ${({ theme }) => theme.COLORS.tomato_100};

    border-radius: 50%;

    position: absolute;
    right: -9px;
    top: -9px;

    width: 2rem;
    height: 2rem;
  }

  span:nth-child(3) {
    display: none;
  }

  @media (min-width: 1160px) {
    display: flex;
    align-items: center;
    gap: 1rem;

    border-radius: 4px;

    background: ${({ theme }) => theme.COLORS.tomato_100};

    padding: 1.2rem 4.6rem;

    &:hover {
      background: ${({ theme }) => theme.COLORS.tomato_200};
    }

    span:nth-child(1) {
      display: none;
    }

    span:nth-child(3) {
      display: block;
    }
  }
`

export const LogOut = styled.button`
  color: ${({ theme }) => theme.COLORS.light_100};

  &:hover {
    opacity: 0.7;
  }

  display: none;

  @media (min-width: 1160px) {
    display: block;
  }
`
