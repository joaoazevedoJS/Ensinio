import { FC } from 'react';

import { DropdownContainer, DropdownArrow } from './styles';

const DropdownItem: FC = ({ children }) => {
  return (
    <DropdownContainer>
      <DropdownArrow />

      {children}
    </DropdownContainer>
  );
};

export default DropdownItem;
