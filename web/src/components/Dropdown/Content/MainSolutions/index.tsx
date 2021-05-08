import { FC } from 'react';

import EadIcon from '../../../../assets/icons/ead.svg';
import SocialIcon from '../../../../assets/icons/social.svg';
import GamificationIcon from '../../../../assets/icons/gamification.svg';
import AppsIcon from '../../../../assets/icons/apps.svg';

import { Content } from './styles';

const MainSolutions: FC = () => {
  return (
    <Content>
      <header>
        <strong>Soluções Principais</strong>
      </header>

      <ul>
        <li>
          <img src={EadIcon} alt="EAD" />

          <div>
            <span>Crie uma Escola Online</span>

            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </li>

        <li>
          <img src={SocialIcon} alt="Comunidade" />

          <div>
            <span>Comunidade e rede social</span>

            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </li>

        <li>
          <img src={GamificationIcon} alt="EAD" />

          <div>
            <span>Gamificação</span>

            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </li>

        <li>
          <img src={AppsIcon} alt="EAD" />

          <div>
            <span>Aplicativo mobile</span>

            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </li>
      </ul>
    </Content>
  );
};

export default MainSolutions;
