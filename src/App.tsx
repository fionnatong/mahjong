import React from 'react';
import Header from './components/Header';
import Setup from './composites/Setup';

import './App.css';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Header />
      <Setup />
    </div>
  );
}

export default App;
