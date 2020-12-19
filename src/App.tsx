import React from 'react';
import Header from './components/Header';
import Mahjong from './composites/Mahjong'

import './App.css';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Header />
      <Mahjong />
    </div>
  );
}

export default App;
