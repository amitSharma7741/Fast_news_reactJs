import React from 'react'
import "./RightBar.css"
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { ExternalLink } from 'react-external-link';

const RightSideBar = () => {
  return (

    <>
      <div className="card-container">
        <span className="pro">PRO</span>
        <img
          className="round"
          src="https://randomuser.me/api/portraits/women/79.jpg"
          alt="user"
        />
        <h3>Ricky Park</h3>
        <h6>New York</h6>
        <p>
          User interface designer and <br /> front-end developer
        </p>
        <div className="buttons">
          <button className="primary">Message</button>
          <button className="primary ghost">Following</button>
        </div>
        <div className="skills">
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
        </div>

        <div className="icons_container">
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


    </>

  )
}

export default RightSideBar 