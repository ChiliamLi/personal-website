/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import '../assets/index.css';
import logi from '../assets/logi-mockup.png';
import NavBar from './NavBar';
import Footer from './Footer';

function Logitech({ currPage, setCurrPage }) {
  // const [error, setError] = useState({ message: '' });
  // const [lockoutUser, setLockoutUser] = useState('');
//   const navigate = useNavigate();

  useEffect(() => {
    setCurrPage('about');
    window.scrollTo(0, 0);
    document.title = 'Logitech | Sylvia Zhao';
  }, []);

  return (
    <div className="Logitech">
      <NavBar currPage={currPage} />
      <div className="project-wrap">
        <div className="project-header">
          Logitech Design Ops
        </div>
        <div className="project-info">Summer 2022 internship reflections | updating soon</div>
        <img className="project-img" src={logi} alt="logi mockup" />
      </div>
      <Footer />
    </div>
  );
}

export default Logitech;
