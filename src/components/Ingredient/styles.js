import styled from 'styled-components'

export const Container = styled.div`
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.light_500}` : 'none'};

  border-radius: 0.8rem;

  background: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.light_600};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  max-width: 11.8rem;
  height: 3.2rem;

  padding: 1rem 1.6rem;

  input {
    min-width: 7rem;
    width: 100%;
    background: transparent;
    border: none;

    color: ${({ theme }) => theme.COLORS.light_100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.light_500};
    }
  }

  button {
    display: flex;
    color: ${({ theme }) => theme.COLORS.light_100};
  }
`
