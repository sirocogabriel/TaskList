import React from 'react';
import { BrowserRouter } from 'react-router-dom';
//import Routes from './routes';

import { TaskProvider } from './hooks/task';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <BrowserRouter>
    <TaskProvider />
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
