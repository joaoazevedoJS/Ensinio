import styled from 'styled-components';

export const List = styled.ul`
  li {
    max-width: 19rem;
    width: 100%;

    list-style: none;

    display: flex;
    flex-direction: column;

    & + li {
      margin-top: 2rem;
    }

    img {
      width: 3.5rem;
      margin-bottom: 1.5rem;
    }

    strong {
      font-family: 'Mukta', sans-serif;
      font-weight: 600;
      font-size: 1.25rem;
      line-height: 125%;
      letter-spacing: 0.005em;
      margin-bottom: 1rem;
    }

    @media (min-width: 700px) {
      img {
        width: 2.5rem;
      }
    }
  }
`;
