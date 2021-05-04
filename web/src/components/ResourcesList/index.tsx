import { FC, useEffect, useState } from 'react';

import StepsIcon from '../../assets/icons/steps.svg';
import PlaylistIcon from '../../assets/icons/playlist.svg';
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

  useEffect(() => {
    api.get('/items').then(response => setResources(response.data));
  }, []);

  return (
    <List>
      <li>a</li>
    </List>
  );
};

export default ResourcesList;
