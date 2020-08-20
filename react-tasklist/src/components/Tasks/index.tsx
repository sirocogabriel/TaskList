import React from 'react';

import { TaskMessage } from '../../hooks/task';
import { Container } from './styles';

const Task: React.FC<TaskMessage> = ({ id, title, description }) => (
  <Container>{description}</Container>
);

export default Task;
