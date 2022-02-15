import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (<div>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-3 text-info" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/about">About</Link>
            </li>
            
            <li className="nav-item">
              <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to='/contact'>Contact</Link>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>



  </div>);
}

Navbar.defaultProps = {
  title: "LuckyText" // now if we do not pass a prop in App.js then Lucky6400 will be displayed as title text in default.
}


