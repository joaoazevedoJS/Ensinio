import { ElementType, FC } from 'react';

import DropdownItem from './Item';

import { Container } from './styles';

interface DropdownProps {
  title: string;
  content: ElementType;
  uppercase?: boolean;
}

const Dropdown: FC<DropdownProps> = ({
  title,
  content: Content,
  uppercase,
}) => {
  return (
    <div>
      <Container uppercase={uppercase}>
        <span>{title}</span>

        <div>
          <span />
        </div>
      </Container>

      <DropdownItem>
        <Content />
      </DropdownItem>
    </div>
  );
};

export default Dropdown;
