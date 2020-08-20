import React from 'react';

import { FiPlusCircle } from 'react-icons/fi';

import Task from '../Tasks';
import { TaskMessage } from '../../hooks/task';

import { Container } from './styles';

interface TaskContainerProps {
  messages?: TaskMessage[];
}

const ContainerTask: React.FC<TaskContainerProps> = ({ messages }) => {
  const addTask = () => {
    return;
  };

  return (
    <Container>
      <form>
        <h1>Add Task</h1>
        <input name="task" type="text" />
        <button type="submit" onClick={addTask}>
          <FiPlusCircle size={26} />
        </button>
      </form>
      {messages?.map((message) => (
        <Task
          id={message.id}
          title={message.title}
          description={message.description}
        />
      ))}
    </Container>
  );
};

export default ContainerTask;
