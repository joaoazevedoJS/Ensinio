import { FC } from 'react';
import { FiMenu } from 'react-icons/fi';

import { useLanguage } from '../../hooks/useLanguage';

import Dropdown from '../Dropdown';
import MainSolutions from '../Dropdown/Content/MainSolutions';
import Lang from '../Dropdown/Content/Lang';

import LogoIcon from '../../assets/icons/logo.svg';
import ProfileIcon from '../../assets/icons/profile.svg';

import {
  HeaderContainer,
  ContentMobile,
  ContentDesktop,
  NavigationList,
  LoginGroup,
} from './styles';

const Header: FC = () => {
  const { languageSelected } = useLanguage();

  return (
    <HeaderContainer>
      <ContentMobile>
        <FiMenu />

        <img src={LogoIcon} alt="Ensinio" />

        <LoginGroup>
          <img src={ProfileIcon} alt="" />
          <span>Entrar</span>
        </LoginGroup>
      </ContentMobile>

      <ContentDesktop className="desktop">
        <img src={LogoIcon} alt="Ensinio" />

        <nav>
          <NavigationList>
            <li>
              <Dropdown title="Soluções" content={MainSolutions} />
            </li>

            <li>Preços</li>
            <li>Academy</li>
            <li>Blog</li>
            <li>Contato</li>
          </NavigationList>

          <article>
            <LoginGroup>
              <img src={ProfileIcon} alt="" />

              <span>Entrar</span>
            </LoginGroup>

            <button type="button">Começar agora</button>

            <Dropdown title={languageSelected} content={Lang} uppercase />
          </article>
        </nav>
      </ContentDesktop>
    </HeaderContainer>
  );
};

export default Header;
