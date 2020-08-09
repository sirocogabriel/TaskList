import React from 'react';

import { Container } from './styles';

import Task from '../../components/Tasks';
import ContainerTasks from '../../components/Container';

const Home: React.FC = () => {
  return (
    <Container>
      <ContainerTasks>
        <Task></Task>
        <Task></Task>
        <Task></Task>
        <Task></Task>
        <Task></Task>
        <Task></Task>
      </ContainerTasks>
    </Container>
  );
};

export default Home;
