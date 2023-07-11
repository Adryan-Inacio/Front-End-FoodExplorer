import styled from 'styled-components'

export const Container = styled.header`
  padding: 4rem 2.8rem 2.4rem;

  background: ${({ theme }) => theme.COLORS.dark_700};

  @media (min-width: 1160px) {
    padding: 2.8rem;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  button:nth-child(4) {
    display: none;
  }

  @media (min-width: 1160px) {
    gap: 3.2rem;

    margin: 0 auto;

    max-width: 116rem;

    button:nth-child(4) {
      display: inline;

      max-width: 21rem;
    }
  }
`

export const Menu = styled.button`
  color: ${({ theme }) => theme.COLORS.light_100};

  border: none;
  background: none;

  @media (min-width: 1160px) {
    display: none;
  }
`

export const AdminLogotype = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  margin: 0 auto;

  img {
    width: 16rem;
    height: 2.5rem;
  }

  span {
    color: ${({ theme }) => theme.COLORS.cake_200};
    font-size: 1.2rem;
  }

  @media (min-width: 1160px) {
    gap: 0.2rem;
    align-items: end;
    flex-direction: column;
  }
`

export const Input = styled.div`
  display: none;

  border-radius: 0.8rem;

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

export const LogOut = styled.button`
  color: ${({ theme }) => theme.COLORS.light_100};

  svg {
    display: flex;
  }

  &:hover {
    opacity: 0.7;
  }

  display: none;

  @media (min-width: 1160px) {
    display: inline;
  }
`
