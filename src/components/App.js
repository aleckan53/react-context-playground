import React, { useContext } from 'react';

import Switch from './Switch';
import Card from './Card';
import ThemeContext from '../context/ThemeContext';

function App() {

  const { dark, toggle } = useContext(ThemeContext);

  return (
    <div className="App">
      <h1>React context api</h1>
      <h2>Color theming</h2>
      <Card dark={dark}/>
      <Switch onClick={() => toggle()}/>
    </div>
  );
}

export default App;
