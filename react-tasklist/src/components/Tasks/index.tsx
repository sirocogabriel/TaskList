import React from 'react';

import { TaskMessage, useTask } from '../../hooks/task';
import { Container } from './styles';

interface TaskProps {
  message: TaskMessage;
}

const { removeTask } = useTask();

const Task: React.FC<TaskProps> = ({ message }) => (
  <Container key={message.id}>
    <h2>{message.title}</h2>
    <p>{message.description}</p>
    <button onClick={() => removeTask(message.id)}></button>
  </Container>
);

export default Task;
