/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import '../assets/index.css';
import icecream from '../assets/ice-cream.png';
import staticlanding from '../assets/static-site-landing.png';
import pennapps from '../assets/pennapps-mockup.png';
import shea from '../assets/shea-butter.png';
import reishi from '../assets/reishi-mushroom.png';
// import burgundylady from '../assets/burgundy-lady.png';
import comfyfarm from '../assets/comfy-farm.png';
import NavBar from './NavBar';
import Footer from './Footer';

function Illustrations({ currPage, setCurrPage }) {
//   const navigate = useNavigate();

  useEffect(() => {
    setCurrPage('');
    window.scrollTo(0, 0);
    document.title = 'Illustrations | Sylvia Zhao';
  }, []);

  return (
    <div className="Illustrations">
      <NavBar currPage={currPage} />
      <div className="project-wrap">
        <div className="project-header">
          Illustrations
        </div>
        <div className="project-info">
          Work for personal projects, clubs, & more
        </div>
        <img className="misc-img" src={icecream} alt="ice cream illustration" />
        <div className="img-wrap">
          <img className="misc-img" src={staticlanding} alt="pennapps static site landing illustration" />
          {/* <div className="caption">(In collaboration with Mia Kim)</div> */}
        </div>
        <img className="misc-img" src={pennapps} alt="pennapps static site small illustrations" />
        <div className="misc-img-wrap">
          <img className="misc-img-lsmall" src={shea} alt="shea butter illustration" />
          <img className="misc-img-rsmall" src={reishi} alt="reishi mushroom illustration" />
        </div>
        <img className="misc-img" src={comfyfarm} alt="comfy farm illustration" />
        {/* <img className="misc-img" src={burgundylady} alt="burgundy lady illustration" /> */}
      </div>
      <Footer />
    </div>
  );
}

export default Illustrations;
