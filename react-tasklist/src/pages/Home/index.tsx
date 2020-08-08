import React from 'react';

import { Container } from './styles';

//import Task from '../../components/Tasks';
import ContainerTasks from '../../components/Container';

const Home: React.FC = () => {
  return (
    <Container>
      <ContainerTasks></ContainerTasks>
    </Container>
  );
};

export default Home;
