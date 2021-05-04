import { FC } from 'react';
import { FiMenu } from 'react-icons/fi';

import Container from '../Container';

import LogoIcon from '../../assets/icons/logo.svg';
import ProfileIcon from '../../assets/icons/profile.svg';

import { HeaderContainer, Content, LoginGroup } from './styles';

const Header: FC = () => {
  return (
    <HeaderContainer>
      <Content>
        <FiMenu />

        <img src={LogoIcon} alt="Ensinio" />

        <LoginGroup>
          <img src={ProfileIcon} alt="" />

          <span>Entrar</span>
        </LoginGroup>
      </Content>
    </HeaderContainer>
  );
};

export default Header;
