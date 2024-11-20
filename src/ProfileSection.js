import React from 'react';

function ProfileSection() {
  return (
    <div className="top-container text-center my-5 pt-5">
      <img className="profile-image" src="https://i.imgur.com/dQjdGnZ.jpg" alt="Profile Picture" />
      <h1>Nonrawit Yodthong</h1>
      <h2>Software Developer</h2>
      <p className="em">Major: Digital and Information Technology</p>
      <p>Engineering and Technology</p>
      <p><a href="http://pim.ac.th" target="_blank" rel="noopener noreferrer">Panyapiwat Institute of Management</a></p>
    </div>
  );
}

export default ProfileSection;
