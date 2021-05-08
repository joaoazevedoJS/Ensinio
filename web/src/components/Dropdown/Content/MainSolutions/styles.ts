import styled from 'styled-components';

export const Content = styled.div`
  max-width: 650px;
  border-radius: 0.375rem;
  background: var(--white);
  padding: 2.75rem 3rem;

  header {
    margin-bottom: 2.5rem;

    strong {
      font-family: 'Mukta', sans-serif;
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 105%;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--purple-400);
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 4rem;
    row-gap: 2.5rem;
    list-style: none;

    li {
      display: flex;
      align-items: center;

      img {
        margin-right: 1rem;
        height: 2.5rem;
      }

      div {
        span {
          font-family: 'Mukta', sans-serif;
          font-weight: 600;
          font-size: 0.937rem;
          line-height: 125%;
          letter-spacing: 0.005em;
          color: var(--dark-purple-900);
        }

        p {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          line-height: 150%;
          color: var(--gray-400);
          margin-top: 0.5rem;
        }
      }
    }
  }
`;
