import React, { useState } from 'react'
import "./RightBar.css"
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { ExternalLink } from 'react-external-link';
// import Button from 'react-bootstrap/Button';
import logo from "./maker.gif" 
import MyVerticallyCenteredModal from './Little/MyVerticallyCenteredModal';

const RightSideBar = () => {
  const [modalShow, setModalShow] =  useState(false);
  const handleClick = event => {
    event.currentTarget.style.backgroundColor = 'red';
    event.currentTarget.style.color = 'white';

    // event.currentTarget.classList.add('my-class-1', 'my-class-2');
    
  };
  return (

    <>
      <div className="card-container">
        <span className="pro">Targaryen</span> 
        <img
          className="round"
          src= {logo}
          alt="logo"
        />
       
        <h3>Jon Snow</h3>
        <h6>Behind the wall</h6>
        <p>
            front-end developer
        </p>
        <div className="buttons">
        <button className="primary" onClick={() => setModalShow(true)}>
         Send a message to developer
      </button>

          <button className="primary ghost mt-3  " onClick={handleClick} >give a like to our website</button>
        </div>
        {/* <div className="skills">
          <h6>Skills</h6>
          <ul>
            <li>UI / UX</li>
            <li>Front End Development</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node</li>
          </ul>
        </div> */}

        <div className="icons_container mt-5">
          <div className="icon facebook">
            <div className="tooltip">Facebook</div>
            <ExternalLink href='/'>
              <span>
                <FaFacebook />
              </span>
            </ExternalLink>

          </div>
          <div className="icon twitter">
            <div className="tooltip">Twitter</div>
            <ExternalLink href='/'>
            <span>
              <FaTwitter />
            </span>
            </ExternalLink>
          </div>
          <div className="icon instagram">
            <div className="tooltip">Linkedin</div>
            <ExternalLink href='/'>
            <span>
              < FaLinkedin />
            </span>
            </ExternalLink>
          </div>
          <div className="icon github">
            <div className="tooltip">Github</div>
            <ExternalLink href='/'>
            <span>
              <FaGithub />
            </span>
            </ExternalLink>
          </div>
          <div className="icon youtube">
            <div className="tooltip">YouTube</div>
            <ExternalLink href='/'>
            <span>
              < FaYoutube />
            </span>
            </ExternalLink>
          </div>
        </div>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>

  )
}

export default RightSideBar 