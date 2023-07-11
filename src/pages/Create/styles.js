import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 107px auto 85px;

  min-height: 100vh;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  padding: 0 2.5rem;
  margin: 2rem auto;

  width: 100%;
  max-width: 42.8rem;

  h1 {
    font-size: 3.2rem;
    font-family: 'Poppins';
    font-weight: 500;
  }

  @media (min-width: 1160px) {
    gap: 0;
    width: 100%;
    max-width: 112rem;
  }
`

export const BackButton = styled.button`
  color: ${({ theme }) => theme.COLORS.light_300};

  font-weight: 500;

  display: flex;
  align-items: center;

  width: 8rem;

  svg {
    margin-left: -0.9rem;
  }

  span {
    font-size: 1.6rem;
  }

  @media (min-width: 1160px) {
    margin-bottom: 2rem;

    width: 11rem;

    svg {
      width: 3.2rem;
    }

    span {
      font-size: 2.4rem;
      font-weight: 700;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  margin-bottom: 5.5rem;

  width: 100%;

  > div {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    width: 100%;

    .createImage,
    .createName,
    .createCategory,
    .createIngredients,
    .createPrice,
    .createDescription {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      width: 100%;

      > input {
        background: ${({ theme }) => theme.COLORS.dark_800};

        height: 4.8rem;

        &::placeholder {
          color: ${({ theme }) => theme.COLORS.light_500};
        }
      }

      select {
        color: ${({ theme }) => theme.COLORS.light_400};
        background: ${({ theme }) => theme.COLORS.dark_800};

        padding: 1.6rem;

        width: 100%;

        border-radius: 0.8rem;
      }

      h2 {
        color: ${({ theme }) => theme.COLORS.light_400};

        font-size: 1.6rem;
        font-weight: 400;
      }

      textarea {
        resize: none;

        border-radius: 8px;

        background: ${({ theme }) => theme.COLORS.dark_800};

        padding: 1.4rem;

        height: 17rem;

        &::placeholder {
          color: ${({ theme }) => theme.COLORS.light_500};
        }
      }
    }

    .imageInput {
      label {
        display: flex;
        align-items: center;
        gap: 6px;

        cursor: pointer;

        color: ${({ theme }) => theme.COLORS.light_100};

        background: ${({ theme }) => theme.COLORS.dark_800};

        border-radius: 8px;

        padding: 1.2rem 3.2rem;

        width: 100%;

        input {
          display: none;
        }

        > span {
          font-size: 1.4rem;
          font-family: 'Poppins';
          font-weight: 500;
        }
      }
    }

    .ingredientsInput {
      display: flex;
      gap: 1.6rem;

      background: ${({ theme }) => theme.COLORS.dark_800};

      max-width: 76.9rem;

      padding: 0.8rem;

      border-radius: 0.8rem;

      overflow-x: auto;
    }
  }

  > button {
    background: ${({ theme }) => theme.COLORS.tomato_400};
  }

  @media (min-width: 1160px) {
    margin-top: 3.2rem;
    gap: 3.2rem;

    > div {
      flex-direction: row;
      gap: 3.2rem;

      .createImage {
        max-width: 24rem;
      }

      .createName {
        width: 100%;
      }

      .createCategory {
        max-width: 36rem;
      }

      .createPrice {
        max-width: 25rem;
      }
    }

    > button {
      display: flex;
      align-self: end;
      max-width: 19rem;
    }
  }
`
