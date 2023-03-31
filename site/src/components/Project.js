/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import '../assets/index.css';
import NavBar from './NavBar';

function Project({ currPage, setCurrPage }) {
  // const [error, setError] = useState({ message: '' });
  // const [lockoutUser, setLockoutUser] = useState('');
//   const navigate = useNavigate();

  // const goToProject = () => {
  //  navigate('/project');
  // };

  // TODO: ACTUALLY SET TO ''
  useEffect(() => {
    setCurrPage('project');
  }, []);

  return (
    <div className="Project">
      <NavBar currPage={currPage} />
      <div>PROJECT PAGE</div>
    </div>
  );
}

export default Project;
