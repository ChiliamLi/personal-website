/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import '../assets/index.css';
import '../assets/typing.css';

import headshot from '../assets/headshot.jpg';
import NavBar from './NavBar';
import Footer from './Footer';
import sillyW from '../assets/silly-william.jpg';

function About({ currPage, setCurrPage }) {
  // const textRef = useRef(null);
  // const [error, setError] = useState({ message: '' });
  // const [lockoutUser, setLockoutUser] = useState('');
  //   const navigate = useNavigate();

  useEffect(() => {
    setCurrPage('about');
    window.scrollTo(0, 0);
    document.title = 'About | William Li';
    // const textElement = textRef.current;
    // let i = 0;

    // const typeWriter = () => {
    //   if (i < textToType.length) {
    //     textElement.innerHTML += textToType.charAt(i);
    //     i += 1;
    //     setTimeout(typeWriter, 50);
    //   }
    // };

    // setTimeout(typeWriter, 1500);
  }, []);

  return (
    <div className="About">
      <NavBar currPage={currPage} />
      <div className="header">
        {/* <body> */}
        <div id="about-flex">
          <img id="sillyW" src={sillyW} alt="sillyW" />
        </div>
        <div className="wrapper" style={{ justifyContent: 'flex-start' }}>
          <div className="static-txt">I am a</div>
          <ul className="dynamic-txts">
            <li><span>Programmer.</span></li>
            <li><span>Developer.</span></li>
            <li><span>Designer.</span></li>
            <li><span>Student.</span></li>
          </ul>
        </div>
        {/* </body> */}
      </div>
      <div className="project-wrap">
        <div className="project-header">
          About
        </div>
        {/* <img className="project-img" src={headshot} alt="headshot" /> */}
        <div id="about-flex">
          <img id="headshot" src={headshot} alt="headshot" />
          <div className="project-text">
            Hi! I&apos;m a student at the University of Pennsylvania studying Computer Science
            with minors in Mathematics and Economics.
            <br />
            I&apos;m also an accelerated masters student
            <br />
            <br />
            As a designer, I&apos;m interested in how people connect with technology
            to create meaningful, delightful experiences and how psychology impacts these
            interactions.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
