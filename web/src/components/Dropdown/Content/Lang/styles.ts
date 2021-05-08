import styled, { css } from 'styled-components';

interface ListItemProps {
  isSelected?: boolean;
}

export const Content = styled.div`
  background: var(--white);
  border-radius: 0.5rem;
  overflow: hidden;

  ul {
    list-style: none;
  }
`;

export const ListItem = styled.li<ListItemProps>`
  &:hover {
    background: linear-gradient(
      90deg,
      #432e98 -100.48%,
      rgba(95, 65, 217, 0) 100%
    );
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background: linear-gradient(
        90deg,
        #5f41d9 -880.48%,
        rgba(95, 65, 217, 0) 100%
      );
    `}

  div,
  button {
    display: flex;
    align-items: center;
  }

  button {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    padding: 1rem 1.5rem;
    cursor: pointer;
  }

  div {
    margin-right: 2rem;

    img {
      margin-right: 0.5rem;
      width: 1rem;
      border-radius: 50%;
    }

    span {
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      font-size: 0.937rem;
      line-height: 105%;
      color: var(--gray-300);
      text-transform: uppercase;
    }
  }

  svg {
    color: var(--purple-400);
    font-size: 1.2rem;
  }
`;
