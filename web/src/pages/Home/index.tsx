import { FC } from 'react';

import { RiFlashlightFill } from 'react-icons/ri';

import { motion } from 'framer-motion';
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
  variantContainer,
  variantItem,
} from '../../styles/animations/variants';

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
          <MainContent
            variants={variantContainer}
            initial="hidden"
            animate="visible"
          >
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

              <motion.h1 variants={variantItem}>
                Sua escola online <br /> poderosa e lucrativa
              </motion.h1>

              <motion.p variants={variantItem}>
                Tenha sua pr??pria escola online 100% white label com rede
                social, gamifica????o, clube de assinaturas, ecommerce e sistema
                EAD completo.
              </motion.p>

              <MainButton>
                <motion.button variants={variantItem} type="button">
                  Come??ar agora
                </motion.button>

                <motion.button variants={variantItem} type="button">
                  <div>
                    <img src={PlayIcon} alt="" />
                  </div>
                  Ver v??deo
                </motion.button>
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
                Conhe??a alguns dos nossos recursos <RiFlashlightFill />
              </span>
            </div>

            <h2>Queremos que o aluno se sinta confort??vel enquanto aprende</h2>
          </header>

          <ResourcesList />
        </Items>

        <Footer>
          <div>
            <img src={Rocket} alt="" />
            <span>
              Veja todos os outros recursos dispon??veis para te ajudar
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
