/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import '../assets/index.css';
import resume from '../assets/resume.png';
import NavBar from './NavBar';
import Footer from './Footer';

function Resume({ currPage, setCurrPage }) {
  // const [error, setError] = useState({ message: '' });
  // const [lockoutUser, setLockoutUser] = useState('');
//   const navigate = useNavigate();

  useEffect(() => {
    setCurrPage('resume');
    window.scrollTo(0, 0);
    document.title = 'Resume | Sylvia Zhao';
  }, []);

  return (
    <div className="Resume">
      <NavBar currPage={currPage} />
      <div className="project-wrap">
        <div className="project-header">
          Resume
        </div>
        <div id="download-flex">
          <a id="download" href="sylviazhao-resume2022.pdf" download="sylviazhao-resume2022">DOWNLOAD</a>
        </div>
        <img className="project-img" src={resume} alt="resume" />
        <Footer />
      </div>
    </div>
  );
}

export default Resume;
