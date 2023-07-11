import styled from 'styled-components'

export const Container = styled.div`
  /* height: 29.2rem; */

  position: relative;

  background: ${({ theme }) => theme.COLORS.dark_200};
  padding: 2.4rem;

  border: 1px solid ${({ theme }) => theme.COLORS.dark_200};
  border-radius: 8px;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.2rem;

  > button:nth-child(1) {
    color: ${({ theme }) => theme.COLORS.light_100};

    position: absolute;
    right: 1.6rem;
    top: 1.6rem;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.light_300};

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;

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
    color: ${({ theme }) => theme.COLORS.light_400};

    text-align: center;
    font-size: 1.4rem;

    display: none;
  }

  > span {
    font-size: 2rem;

    color: ${({ theme }) => theme.COLORS.cake_200};
  }

  > .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.6rem;

    width: 100%;

    .include {
      width: 16.2rem;
    }
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

    .buttons {
      flex-direction: row;

      .include {
        width: 9.2rem;
      }
    }
  }
`
