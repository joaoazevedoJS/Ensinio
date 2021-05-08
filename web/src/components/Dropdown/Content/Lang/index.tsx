import { FC } from 'react';
import { FiCheck } from 'react-icons/fi';

import { useLanguage } from '../../../../hooks/useLanguage';

import { Content, ListItem } from './styles';

const Lang: FC = () => {
  const { languagesWithIcon, languageSelected } = useLanguage();

  return (
    <Content>
      <ul>
        {languagesWithIcon.map(lang => (
          <ListItem
            key={lang.lang}
            isSelected={
              lang.lang.toLocaleLowerCase() ===
              languageSelected.toLocaleLowerCase()
            }
          >
            <div>
              <img src={lang.icon} alt="lang" />

              <span>{lang.lang}</span>
            </div>

            {lang.lang.toLocaleLowerCase() ===
              languageSelected.toLocaleLowerCase() && <FiCheck />}
          </ListItem>
        ))}
      </ul>
    </Content>
  );
};

export default Lang;
