import React from 'react';

import './App.css';
import { ReturnComponentType } from '../types';

import { Header } from './header/Header';
import { Pages } from './pages/Pages';

const App = (): ReturnComponentType => {
  return (
    <div className="App">
      <Header />
      <Pages />
    </div>
  );
};

export default App;
