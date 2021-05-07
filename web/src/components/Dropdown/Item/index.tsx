import { FC } from 'react';

import { Container } from './styles';

interface DropdownItemProps {
  title: string;
}

const DropdownItem: FC<DropdownItemProps> = ({ title }) => {
  return (
    <Container>
      {title}

      <div>
        <span />
      </div>
    </Container>
  );
};

export default DropdownItem;
