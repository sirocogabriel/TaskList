import React from 'react';
import { FiPlusCircle } from 'react-icons/fi';

import { Container } from './styles';

const ContainerTask: React.FC = ({ children }) => {
  const addTask = () => {};

  return (
    <Container>
      <div>
        <h1>Tasks</h1>
        <button onClick={addTask}>
          <FiPlusCircle size={25} />
        </button>
      </div>
      {children}
    </Container>
  );
};

export default ContainerTask;
