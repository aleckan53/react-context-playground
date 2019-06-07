import React from 'react';
import './styles/Card.css';

export default function Card (props) {

  return (
    <div className='Card'>
      <h2>{props.title || 'Lorem Ipsum'}</h2>
      <p>{props.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}</p>
    </div>
  );
}