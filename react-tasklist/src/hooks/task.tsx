import React, { createContext, useCallback, useContext, useState } from 'react';

import { uuid } from 'uuidv4';

import TaskContainer from '../components/Container';

export interface TaskMessage {
  id: string;
  title: string;
  description: string;
}

interface TaskContextData {
  addTask(message: Omit<TaskMessage, 'id'>): void;
  removeTask(id: string): void;
}

const TaskContext = createContext<TaskContextData>({} as TaskContextData);

const TaskProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<TaskMessage[]>([]);

  const addTask = useCallback(
    ({ title, description }: Omit<TaskMessage, 'id'>) => {
      const id = uuid();

      const task = {
        id,
        title,
        description,
      };

      setMessages((oldTasks) => [...oldTasks, task]);
      console.log(messages);
    },
    [messages],
  );

  const removeTask = useCallback((id: string) => {
    console.log(`Remove ${id}`);
  }, []);

  return (
    <TaskContext.Provider value={{ addTask, removeTask }}>
      {children}
      <TaskContainer messages={messages} />
    </TaskContext.Provider>
  );
};

function useTask(): TaskContextData {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error('useTask must be used within a TaskProvider');
  }

  return context;
}

export { TaskProvider, useTask };
