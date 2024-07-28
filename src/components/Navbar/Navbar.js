import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar({ title }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <button className="nav-link btn-link" onClick={() => window.location.href = "/"}>Features</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn-link" onClick={() => window.location.href = "/"}>Pricing</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn-link disabled" aria-disabled="true">Disabled</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string
};  

//Default props
Navbar.defaultProps = {
  title: 'Default title'
}