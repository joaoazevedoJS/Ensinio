import { FC, useCallback } from 'react';
import { FiCheck } from 'react-icons/fi';

import { useLanguage, ILangsSelected } from '../../../../hooks/useLanguage';

import { Content, ListItem } from './styles';

const Lang: FC = () => {
  const {
    languagesWithIcon,
    languageSelected,
    changeLanguageTo,
  } = useLanguage();

  const handleChangeLanguageTo = useCallback(
    (lang: ILangsSelected) => {
      changeLanguageTo(lang);
    },
    [changeLanguageTo],
  );

  return (
    <Content>
      <ul>
        {languagesWithIcon.map(lang => (
          <ListItem
            key={lang.short_name}
            isSelected={
              lang.short_name.toLocaleLowerCase() ===
              languageSelected.toLocaleLowerCase()
            }
          >
            <button
              type="button"
              onClick={() => handleChangeLanguageTo(lang.short_name)}
            >
              <div>
                <img src={lang.icon} alt="lang" />

                <span>{lang.short_name}</span>
              </div>

              {lang.short_name.toLocaleLowerCase() ===
                languageSelected.toLocaleLowerCase() && <FiCheck />}
            </button>
          </ListItem>
        ))}
      </ul>
    </Content>
  );
};

export default Lang;
