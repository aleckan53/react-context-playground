import React from 'react';
import './styles/App.css';

import Switch from './Switch';
import Card from './Card'

function App() {
  return (
    <div className="App">
      <h1>React context api</h1>
      <h2>Color themeing</h2>
      <Card/>
      <Switch
        onChange={() => console.log('Clicked')}
      />
    </div>
  );
}

export default App;
