import { FC } from 'react';
import { FiMenu } from 'react-icons/fi';

import { useLanguage } from '../../hooks/language';

import LogoIcon from '../../assets/icons/logo.svg';
import ProfileIcon from '../../assets/icons/profile.svg';

import {
  HeaderContainer,
  ContentMobile,
  ContentDesktop,
  LoginGroup,
  Lang,
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
            <li>Soluções</li>
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

            <Lang>{languageSelected}</Lang>
          </article>
        </nav>
      </ContentDesktop>
    </HeaderContainer>
  );
};

export default Header;
