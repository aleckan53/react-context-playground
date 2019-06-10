import React, { useContext } from 'react';
import { IoMdMoon as Moon, IoMdSunny as Sun } from 'react-icons/io';

import ThemeContext from '../context/ThemeContext';

export default function Switch () {
  const { dark, toggle } = useContext(ThemeContext);
  
  return (
    <button 
      className='Switch'
      onClick={() => toggle()}
    >
      <Sun className={`icon ${!dark ? 'active' : ''}`}/>
      <Moon className={`icon ${dark ? 'active' : ''}`}/>
    </button>
  );
} 