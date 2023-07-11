import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 107px auto 85px;

  min-height: 100vh;
`

export const Content = styled.div`
  width: 100%;
  max-width: 36.4rem;

  padding: 0 2.5rem;
  margin: 3.6rem auto 5rem;

  @media (min-width: 1160px) {
    margin: 2.4rem auto auto;
    max-width: 112rem;
  }
`

export const BackButton = styled.button`
  color: ${({ theme }) => theme.COLORS.light_300};

  font-weight: 500;

  display: flex;
  align-items: center;

  margin-bottom: 1.6rem;

  svg {
    margin-left: -0.9rem;
  }

  span {
    font-size: 2.4rem;
  }

  @media (min-width: 1160px) {
    margin-bottom: 4.2rem;
  }
`

export const DishDetails = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: 1.6rem;

  img {
    width: 26.4rem;
  }

  .detailsWrapper {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    margin-top: 1.6rem;

    h2,
    p {
      font-family: 'Poppins';
      text-align: center;
    }

    h2 {
      color: ${({ theme }) => theme.COLORS.light_300};

      font-size: 2.7rem;
      font-weight: 500;
    }

    p {
      color: ${({ theme }) => theme.COLORS.light_300};
    }

    > span {
      color: ${({ theme }) => theme.COLORS.cake_200};

      text-align: center;
      font-size: 2.4rem;
    }
  }

  .editButton {
    display: flex;
    margin: 0 auto;
    width: 100%;
  }

  .orderButtons {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    width: 100%;
  }

  @media (min-width: 1160px) {
    gap: 4.7rem;
    /* justify-content: center; */
    flex-direction: row;

    img {
      width: 39rem;
    }

    .detailsWrapper {
      h2,
      p {
        text-align: left;
      }

      h2 {
        font-size: 4rem;
      }

      p {
        font-size: 2.4rem;
      }
    }

    .editButton {
      width: 15rem;
      margin: auto 0;
    }

    .orderButtons {
      button:nth-child(2) {
        width: 16.2rem;
      }
    }
  }
`

export const DishIngredients = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.4rem;

  span {
    border-radius: 0.4rem;
    background: ${({ theme }) => theme.COLORS.dark_1000};
    padding: 0.4rem 0.8rem;

    font-size: 1.4rem;
    font-family: 'Poppins';
    font-weight: 500;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 1160px) {
    display: flex;
    gap: 1.2rem;
  }
`
