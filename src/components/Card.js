import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

export default function Card (props) {

  const { dark } = useContext(ThemeContext);

  return (
    <div className='Card'>
      <div className='img'/>
      <h2>{props.title || 'Hello World!'}</h2>
      <p>{props.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}</p>
      <button>{!dark ? 'Light theme' : 'Dark Theme'}</button>
    </div>
  );
}