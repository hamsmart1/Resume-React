import React, { useState } from 'react';

function ContentSection() {
  const [modalTitle, setModalTitle] = useState('');
  const [modalImage1, setModalImage1] = useState('');
  const [modalImage2, setModalImage2] = useState('');

  const openModal = (title1, image1, title2, image2) => {
    setModalTitle(title2 ? `${title1} & ${title2}` : title1);
    setModalImage1(image1);
    setModalImage2(image2 || '');
    window.bootstrap.Modal.getOrCreateInstance(document.getElementById('imageModal')).show();
  };

  return (
    <main id="main-container" className="d-flex flex-column align-items-center">
      <button type="button" className="banner my-3" id="about-dt" onClick={() => openModal('About Me', 'https://github.com/hamsmart1/MyPage/raw/44608c0115efc33d504968902865f65c60235ad8/About%20Me.png', 'What Do I Do Best', 'https://github.com/hamsmart1/MyPage/raw/ffc8c6f613e2e88afd444804912b0a1671112ea0/Whatdoidobest.png')}>About Me</button>
      <button type="button" className="banner my-3" id="edu-dt" onClick={() => openModal('Education', 'https://github.com/hamsmart1/MyPage/raw/44608c0115efc33d504968902865f65c60235ad8/education.png')}>Education</button>
      <button type="button" className="banner my-3" id="emp-dt" onClick={() => openModal('Employment History', 'https://github.com/hamsmart1/MyPage/raw/44608c0115efc33d504968902865f65c60235ad8/Workexperiance.png')}>Employment History</button>
      <button type="button" className="banner my-3" id="skill-dt" onClick={() => openModal('Skills', 'https://github.com/hamsmart1/MyPage/raw/44608c0115efc33d504968902865f65c60235ad8/Skills.png')}>Skills</button>
    
      {/* Modal */}
      <div className="modal fade" id="imageModal" tabIndex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="imageModalLabel">{modalTitle}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img src={modalImage1} alt="Modal Image" className="img-fluid" />
              {modalImage2 && <img src={modalImage2} alt="Modal Image 2" className="img-fluid mt-2" />}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContentSection;
