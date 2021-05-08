import { FC, useCallback, useEffect, useState } from 'react';

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

  const [isChangeColor, setIsChangeColor] = useState(false);

  const handleScroll = useCallback(() => {
    // for Safari
    const { body } = document;

    // for Chrome, Firefox, IE and Opera
    const element = document.documentElement;

    setIsChangeColor(element.scrollTop > 300 || body.scrollTop > 300);
  }, []);

  useEffect(() => {
    document.body.onscroll = handleScroll;
  }, [handleScroll]);

  return (
    <HeaderContainer isChangeColor={isChangeColor}>
      <ContentMobile>
        <Dropdown isMenu content={() => <p>menu</p>} />

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
