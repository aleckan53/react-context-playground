import React from 'react';
import './styles/Switch.css';
import { IoMdMoon as Moon, IoMdSunny as Sun } from 'react-icons/io';

export default function Switch (props) {

  return (
    <div className='Switch'>
      <input 
        checked={props.checked}
        onChange={props.onChange}
        type='checkbox'
        style={{
          background: `image(${Moon})`
        }}/>
      <Sun
        className={`icon sun`}/>
      <Moon 
        className={`icon moon`}/>
    </div>
  );
} 