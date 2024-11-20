import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="https://i.imgur.com/u503S9y.gif" alt="Bootstrap" width="32" height="24" /> Nonrawit Yodthong
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="#about-dt">About Me</a></li>
            <li className="nav-item"><a className="nav-link" href="#edu-dt">Education</a></li>
            <li className="nav-item"><a className="nav-link" href="#emp-dt">Employment History</a></li>
            <li className="nav-item"><a className="nav-link" href="#skill-dt">Skills</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
