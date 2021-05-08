import { ElementType, FC, useCallback, useState } from 'react';
import { FiMenu } from 'react-icons/fi';

import { motion } from 'framer-motion';

import DropdownItem from './Item';

import { Container } from './styles';

interface DropdownProps {
  title?: string;
  isMenu?: boolean;
  uppercase?: boolean;
  content: ElementType;
}

const Dropdown: FC<DropdownProps> = ({
  title,
  content: Content,
  isMenu,
  uppercase,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleOpenDropdown = useCallback(() => {
    setIsActive(true);
  }, []);

  const handleCloseDropdown = useCallback(() => {
    setIsActive(false);
  }, []);

  const handleToogleDropdown = useCallback(() => {
    setIsActive(!isActive);
  }, [isActive]);

  return (
    <motion.div onHoverEnd={handleCloseDropdown} onBlur={handleCloseDropdown}>
      <Container
        uppercase={uppercase}
        onHoverStart={handleOpenDropdown}
        onFocus={handleOpenDropdown}
        onClick={handleToogleDropdown}
      >
        {isMenu ? (
          <FiMenu />
        ) : (
          <>
            <span>{title}</span>

            <motion.div
              animate={{
                rotateX: isActive ? 0 : -180,
              }}
              transition={{
                rotateX: {
                  duration: 0.4,
                },
              }}
            >
              <span />
            </motion.div>
          </>
        )}
      </Container>

      <DropdownItem isActive={isActive} isMenu={isMenu}>
        <Content />
      </DropdownItem>
    </motion.div>
  );
};

export default Dropdown;
