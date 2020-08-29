import React from 'react';
import { useForm } from 'react-hook-form';

import { FiPlusCircle } from 'react-icons/fi';

import Task from '../Tasks';
import { TaskMessage, useTask } from '../../hooks/task';

import { Container } from './styles';

interface TaskContainerProps {
  messages?: TaskMessage[];
}

const ContainerTask: React.FC<TaskContainerProps> = ({ messages }) => {
  const { addTask } = useTask();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: object) => {
    await addTask(data as Omit<TaskMessage, 'id'>);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Add Task</h1>
        <input ref={register} placeholder="title" name="title" type="text" />
        <input
          ref={register}
          placeholder="description"
          name="description"
          type="text"
        />
        <button type="submit">
          <FiPlusCircle size={26} />
        </button>
      </form>
      {messages?.map((message) => (
        <Task message={message} />
      ))}
    </Container>
  );
};

export default ContainerTask;
