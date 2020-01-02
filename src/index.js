// this is the entry point of the app
// webpack is handling the css importing
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';

// render(<HomePage />, document.getElementById("root"));
render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
