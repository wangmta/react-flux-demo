import React from 'react';
import { Link } from 'react-router-dom';

// page component must be capitalized, it's recognized by React by default, lower case would be recognized as native HTML element
function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Pluralsight Administration</h1>
      <p>React, Flux, and React Router for responsive web apps.</p>
      <Link to="about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
}

// react uses ES's module, so every function is private
// default keyword when there is only one exported element, it helps simplify imports, the file imports it can decide what to name the import
export default HomePage;
