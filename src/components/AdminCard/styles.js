import styled from 'styled-components'

export const Container = styled.div`
  height: 29.2rem;

  position: relative;

  background: ${({ theme }) => theme.COLORS.dark_500};
  padding: 2.4rem;

  border: 1px solid ${({ theme }) => theme.COLORS.dark_500};
  border-radius: 0.8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.2rem;

  > button {
    color: ${({ theme }) => theme.COLORS.light_300};

    position: absolute;
    right: 1.6rem;
    top: 1.6rem;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.light_300};

    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 2rem;

    img {
      width: 8.8rem;
      border-radius: 50%;
    }

    .name {
      display: flex;
      align-items: center;
    }
  }

  > p {
    text-align: center;

    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.light_900};

    display: none;
  }

  > span {
    font-size: 2rem;

    color: ${({ theme }) => theme.COLORS.cake_200};
  }

  @media (min-width: 1160px) {
    height: 46.2rem;
    width: 100%;

    gap: 1.5rem;

    > a {
      font-weight: 700;
      font-size: 2.4rem;

      img {
        width: 17.6rem;
      }
    }

    > p {
      display: block;
    }

    > span {
      font-size: 3.2rem;
    }
  }
`
