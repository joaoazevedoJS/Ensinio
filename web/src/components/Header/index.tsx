import { FC } from 'react';
import { FiMenu } from 'react-icons/fi';

import { useLanguage } from '../../hooks/language';

import DropdownItem from '../Dropdown/Item';

import LogoIcon from '../../assets/icons/logo.svg';
import ProfileIcon from '../../assets/icons/profile.svg';

import {
  HeaderContainer,
  ContentMobile,
  ContentDesktop,
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
          <ul>
            <li>
              <DropdownItem title="Soluções" />
            </li>

            <li>Preços</li>
            <li>Academy</li>
            <li>Blog</li>
            <li>Contato</li>
          </ul>

          <article>
            <LoginGroup>
              <img src={ProfileIcon} alt="" />

              <span>Entrar</span>
            </LoginGroup>

            <button type="button">Começar agora</button>

            <DropdownItem title={languageSelected} />
          </article>
        </nav>
      </ContentDesktop>
    </HeaderContainer>
  );
};

export default Header;
