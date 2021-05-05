import { FC } from 'react';

import { RiFlashlightFill } from 'react-icons/ri';

import Container from '../../components/Container';
import Header from '../../components/Header';
import ResourcesList from '../../components/ResourcesList';

import ResponsiveIcon from '../../assets/icons/responsive.svg';
import PlayIcon from '../../assets/icons/play.svg';
import PlayListIcon from '../../assets/icons/playlist.svg';
import PlayListLightIcon from '../../assets/icons/playlist-light.svg';
import Certified from '../../assets/icons/certified.svg';
import Transcription from '../../assets/icons/transcription.svg';
import Rocket from '../../assets/icons/rocket.svg';
import ArrowRight from '../../assets/icons/arrow-right.svg';

import {
  MainContainer,
  MainContent,
  Items,
  Footer,
  MainButton,
  ServicesTitle,
  BackgroundImg,
  HeroBackground,
} from './styles';

const Home: FC = () => {
  return (
    <>
      <MainContainer>
        <Header />

        <Container>
          <MainContent>
            <BackgroundImg>
              <img src={PlayListIcon} alt="" className="playlist-01" />
              <img src={PlayListLightIcon} alt="" className="playlist-02" />
              <img src={PlayListLightIcon} alt="" className="playlist-03" />
              <img src={Certified} alt="" className="certified" />
              <img src={Transcription} alt="" className="transcription" />
            </BackgroundImg>

            <section>
              <ServicesTitle>
                <img src={ResponsiveIcon} alt="" />

                <span>plataforma all in one</span>
              </ServicesTitle>

              <h1>
                Sua escola online <br /> poderosa e lucrativa
              </h1>

              <p>
                Tenha sua própria escola online 100% white label com rede
                social, gamificação, clube de assinaturas, ecommerce e sistema
                EAD completo.
              </p>

              <MainButton>
                <button type="button">Começar agora</button>

                <button type="button">
                  <div>
                    <img src={PlayIcon} alt="" />
                  </div>
                  Ver vídeo
                </button>
              </MainButton>
            </section>

            <HeroBackground />
          </MainContent>
        </Container>
      </MainContainer>

      <Container>
        <Items>
          <header>
            <div>
              <span>pensamos em cada detalhe</span>

              <span>
                Conheça alguns dos nossos recursos <RiFlashlightFill />
              </span>
            </div>

            <h2>Queremos que o aluno se sinta confortável enquanto aprende</h2>
          </header>

          <ResourcesList />
        </Items>

        <Footer>
          <div>
            <img src={Rocket} alt="" />
            <span>
              Veja todos os outros recursos disponíveis para te ajudar
            </span>
          </div>

          <div>
            <span>Ver mais</span> <img src={ArrowRight} alt="" />
          </div>
        </Footer>
      </Container>
    </>
  );
};

export default Home;
