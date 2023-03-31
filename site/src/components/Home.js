/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable */
import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
import '../assets/index.css';
import illustration from '../assets/landing-illustration.png';
import Arrow from '../assets/arrow.svg';
import Heart from '../assets/heart.svg';
import meetup from '../assets/meetup-mockup (2).png';
import pennintouch from '../assets/pennintouch-mockup.png';
import speechconnect from '../assets/speechconnect-mockup.png';
import chapter from '../assets/chapter-mockup.png';
import pennapps from '../assets/pennapps-mockup.png';
import icecream from '../assets/ice-cream.png';
import logi from '../assets/logi-mockup.png';
import temp from '../assets/temp-mockup.png';
import NavBar from './NavBar';
import Footer from './Footer';

function Home({ currPage, setCurrPage }) {
  // const [error, setError] = useState({ message: '' });
  // const [lockoutUser, setLockoutUser] = useState('');
  const navigate = useNavigate();

  const goToProject = (name) => {
    if (name === 'meetup') {
      navigate('/meetup');
    } else if (name === 'pennintouch') {
      navigate('/pennintouch');
    } else if (name === 'speechconnect') {
      navigate('/speechconnect');
    } else if (name === 'logitech') {
      navigate('/logitech');
    } else if (name === 'chapter') {
      navigate('/chapter');
    } else if (name === 'illustrations') {
      navigate('/illustrations');
    }
  };

  const footerMessage = 'Made by William Li';

  useEffect(() => {
    setCurrPage('work');
    window.scrollTo(0, 0);
    document.title = 'William Li';
  }, []);

  return (
    <div className="Home">
      <NavBar currPage={currPage} />
      <div className="landing">
        <div className="big-header">
          HI, I&apos;M SYLVIA ZHAO
        </div>
        <div className="paragraph">
          UX & Visual Designer &middot; Senior in Cognitive & Computer Science at UPenn
          <br />
          PennApps Co-Head of Creative &middot; Recent Design Ops Intern at Logitech
        </div>
        <img id="home-illus" src={illustration} alt="landing illustration" />
        <Link to="/#work">
          <img id="arrow" src={Arrow} alt="arrow svg" />
        </Link>
      </div>
      {/* <a href="#work">
        <img id="arrow" src={Arrow} alt="landing illustration" />
      </a> */}
      {/* <img id="arrow" src={Arrow} alt="arrow svg" /> */}
      <div id="work">Work</div>
      <div className="grid">
        <div className="grid-row">
          <div className="gcard-lwrap" onClick={() => goToProject('meetup')}>
            <img className="grid-img" src={meetup} alt="meetup mockup" />
            <div className="gcard-label">
              <div className="gcard-heading">
                Meetup
              </div>
              <div className="gcard-text">
                Improving group meeting scheduling on mobile & web
              </div>
            </div>
          </div>
          <div className="gcard-rwrap" onClick={() => goToProject('pennintouch')}>
            <img className="grid-img" src={pennintouch} alt="pennintouch mockup" />
            <div className="gcard-label">
              <div className="gcard-heading">
                PennInTouch
              </div>
              <div className="gcard-text">
                Redesigning UPenn&apos;s academic planning & registration site
              </div>
            </div>
          </div>
        </div>
        <div className="grid-row">
          <div className="gcard-lwrap"  onClick={() => goToProject('speechconnect')}>
            <img className="grid-img" src={speechconnect} alt="speechconnect mockup" />
            <div className="gcard-label">
              <div className="gcard-heading">
                SpeechConnect
              </div>
              <div className="gcard-text">
                Creating a tablet experience for alternative communication tech
              </div>
            </div>
          </div>
          <div className="gcard-rwrap"  onClick={() => goToProject('chapter')}>
            <img className="grid-img" src={chapter} alt="temp mockup" />
            <div className="gcard-label">
              <div className="gcard-heading">
                Chapter
              </div>
              <div className="gcard-text">
                Designing a virtual book club app for readers
              </div>
            </div>
          </div>
        </div>
        <div className="grid-row">
          <div className="gcard-lwrap" onClick={() => goToProject('logitech')}>
            <img className="lined-gcard-label" src={logi} alt="logi mockup" />
            <div className="gcard-label">
              <div className="gcard-heading">
                Logitech Design Ops
              </div>
              <div className="gcard-text">
                Summer 2022 internship reflections
              </div>
            </div>
          </div>
          <div className="gcard-rwrap" onClick={() => goToProject('illustrations')}>
            <img className="lined-gcard-label" src={icecream} alt="pennapps mockup" />
            <div className="gcard-label">
              <div className="gcard-heading">
                Illustrations
              </div>
              <div className="gcard-text">
                Work for personal projects, clubs, & more
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    // <button className="button" type="button" onClick={goToProject}>View my work</button>
    // TODO: ADD FLOATING CARAT ARROW
  );
}

export default Home;
