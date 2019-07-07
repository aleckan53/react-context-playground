import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { ThemeProvider } from './context/ThemeContext';

ReactDOM.render(<ThemeProvider><App /></ThemeProvider>, document.getElementById('root'));