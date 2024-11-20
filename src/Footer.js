import React from 'react';

function Footer() {
  return (
    <div className="bottom-container text-center my-5">
      <p>Contact me:</p>
      <ol style={{ listStyleType: 'none', paddingLeft: 0 }}>
        <li>Email: 6652100142 <img src="https://raw.githubusercontent.com/hamsmart1/MyPage/e364879e9a7e27d95ce67b9198ef488c9967ced2/%40.png" alt="@" width="17" height="17" /> stu.pim.ac.th</li>
        <li>Phone: 065-#######</li>
        <li>Address: 123/45 Khubon Road, Bangkok</li>
      </ol>
      <a className="footer-link" href="https://linktr.ee/Hammy_kun" target="_blank" rel="noopener noreferrer">Linktree</a>
      <p>© Nonrawit Yodthong.</p>
    </div>
  );
}

export default Footer;
