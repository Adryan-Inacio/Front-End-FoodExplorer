import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  button {
    color: ${({ theme }) => theme.COLORS.light_100};
  }
`
