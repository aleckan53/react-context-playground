import React from 'react';
import './styles/App.css';

import Switch from './Switch';
import Card from './Card'

function App() {
  return (
    <div className="App">
      <h1>React context api</h1>
      <Card/>
      <Switch
        onClick={() => console.log('Clicked')}
        title='Change theme'
      />
    </div>
  );
}

export default App;
