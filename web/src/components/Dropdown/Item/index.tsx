import { FC } from 'react';

import { DropdownContainer, DropdownArrow } from './styles';

interface DropdownItemProps {
  isActive?: boolean;
  isMenu?: boolean;
}

const DropdownItem: FC<DropdownItemProps> = ({
  isActive,
  isMenu,
  children,
}) => {
  return (
    <DropdownContainer
      initial={{ opacity: 0, rotateX: 0 }}
      animate={{
        opacity: isActive ? 1 : 0,
        rotateX: isActive ? 0 : -20,
      }}
      transition={{
        ease: 'easeOut',
        opacity: { duration: 0.2 },
        rotateX: { duration: 0.4, delay: 0.02 },
      }}
    >
      {!isMenu && <DropdownArrow />}

      {children}
    </DropdownContainer>
  );
};

export default DropdownItem;
