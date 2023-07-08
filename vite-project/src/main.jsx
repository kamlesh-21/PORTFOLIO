import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './style.css'; // Import the style.css file

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
