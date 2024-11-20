import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://i.imgur.com/u503S9y.gif"
              alt="Bootstrap"
              width="32"
              height="24"
            />
            Nonrawit Yodthong
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#about-dt">About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#edu-dt">Education</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#emp-dt">Employment History</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skill-dt">Skills</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="top-container text-center my-5 pt-5">
        <img
          className="profile-image"
          src="https://i.imgur.com/dQjdGnZ.jpg"
          alt="Profile Picture"
        />
        <h1>Nonrawit Yodthong</h1>
        <h2>Software Developer</h2>
        <p className="em">Major: Digital and Information Technology</p>
        <p>Engineering and Technology</p>
        <p>
          <a href="http://pim.ac.th" target="_blank" rel="noopener noreferrer">
            Panyapiwat Institute of Management
          </a>
        </p>
      </div>

      <main id="main-container" className="d-flex flex-column align-items-center">
        <button type="button" className="banner my-3" id="about-dt">
          About Me
        </button>
        <button type="button" className="banner my-3" id="edu-dt">
          Education
        </button>
        <button type="button" className="banner my-3" id="emp-dt">
          Employment History
        </button>
        <button type="button" className="banner my-3" id="skill-dt">
          Skills
        </button>
      </main>

      <div className="bottom-container text-center my-5">
        <p>Contact me:</p>
        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
          <li>
            Email: 6652100142
            <img
              src="https://raw.githubusercontent.com/hamsmart1/MyPage/e364879e9a7e27d95ce67b9198ef488c9967ced2/%40.png"
              alt="@"
              width="17"
              height="17"
            />{' '}
            stu.pim.ac.th
          </li>
          <li>Phone: 065-#######</li>
          <li>Address: 123/45 Khubon Road, Bangkok</li>
        </ul>
        <a className="footer-link" href="https://linktr.ee/Hammy_kun">
          Linktree
        </a>
        <p>© Nonrawit Yodthong.</p>
      </div>
    </div>
  );
};

export default App;
