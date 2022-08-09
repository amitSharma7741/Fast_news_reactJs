 import React from 'react'
 import "./RightBar.css"
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    <span>
    <FontAwesomeIcon icon="fa-brands fa-facebook" />
    </span>
  </div>
  <div className="icon twitter">
    <div className="tooltip">Twitter</div>
    <span>
      <i className="fab fa-twitter" />
    </span>
  </div>
  <div className="icon instagram">
    <div className="tooltip">Instagram</div>
    <span>
      <i className="fab fa-instagram" />
    </span>
  </div>
  <div className="icon github">
    <div className="tooltip">Github</div>
    <span>
      <i className="fab fa-github" />
    </span>
  </div>
  <div className="icon youtube">
    <div className="tooltip">YouTube</div>
    <span>
      <i className="fab fa-youtube" />
    </span>
  </div>
</div>
  </div>
  

</>

   )
 }
 
 export default RightSideBar 