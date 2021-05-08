import { FC, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { useLoading } from '../../hooks/useLoading';
import { useLanguage } from '../../hooks/useLanguage';

import StepsIcon from '../../assets/icons/steps.svg';
import PlaylistIcon from '../../assets/icons/playlist-dark.svg';
import FolderIcon from '../../assets/icons/folder.svg';

import api from '../../services/api';

import { List } from './styles';

import { IResource } from './resources';

const ResourceIcon = {
  1: <img src={StepsIcon} alt="" />,
  2: <img src={PlaylistIcon} alt="" />,
  3: <img src={FolderIcon} alt="" />,
};

const ResourcesList: FC = () => {
  const [resources, setResources] = useState<IResource[]>([]);

  const { languageSelected } = useLanguage();
  const { openLoading, closeLoading } = useLoading();

  useEffect(() => {
    openLoading();

    api
      .get('/items')
      .then(response => setResources(response.data))
      .catch(() =>
        toast.error(
          'Aconteceu um erro interno, não foi possível mostrar alguns recursos da página!',
        ),
      )
      .finally(() => closeLoading());
  }, [closeLoading, openLoading]);

  return (
    <List>
      {resources.map((resource, index) => (
        <li key={resource.id}>
          {index === 0 && ResourceIcon[1]}
          {index === 1 && ResourceIcon[2]}
          {index === 2 && ResourceIcon[3]}
          {index > 2 && ResourceIcon[1]}

          <strong>
            {resource.title[languageSelected] ?? resource.title.pt}
          </strong>

          <p>{resource.description[languageSelected] ?? resource.title.pt}</p>
        </li>
      ))}
    </List>
  );
};

export default ResourcesList;
