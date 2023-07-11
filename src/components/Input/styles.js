import styled from 'styled-components'

export const Container = styled.input`
  background: ${({ theme }) => theme.COLORS.dark_900};
  padding: 1.2rem 1.4rem;

  border-radius: 0.8rem;

  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.light_500};
  }
`
