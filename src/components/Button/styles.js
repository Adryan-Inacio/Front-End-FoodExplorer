import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  width: 100%;

  font-weight: 500;

  background-color: ${({ theme }) => theme.COLORS.tomato_100};
  color: ${({ theme }) => theme.COLORS.light_100};

  border: none;
  border-radius: 0.5rem;
  padding: 1.2rem 3.2rem;
`
