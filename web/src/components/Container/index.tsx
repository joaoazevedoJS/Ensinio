import { FC } from 'react';

import { Layout } from './styles';

const Container: FC = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default Container;
