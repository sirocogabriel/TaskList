import React from 'react';

import { Container } from './styles';

import ContainerTasks from '../../components/Container';

const Home: React.FC = () => {
  return (
    <Container>
      <ContainerTasks />
    </Container>
  );
};

export default Home;
