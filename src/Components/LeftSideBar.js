import React from 'react' 

import { useMediaQuery } from 'react-responsive'
// import "../LeftBar.css"  
import { FaHome } from 'react-icons/fa';
import { FaFortAwesome } from 'react-icons/fa';
import { FaTeamspeak } from 'react-icons/fa';
import { FaArchive } from 'react-icons/fa';
import { FaBabyCarriage } from 'react-icons/fa';

const LeftSideBar = () => {
  const isM_Or_L = useMediaQuery({
    query: '(min-width: 700px)'
  })
  return (
    <>
      <aside className="col-sm-3 mt-3 container flex-grow-sm-1 flex-shrink-1 flex-grow-0 sticky-top pb-sm-0 pb-3">
        <div className="bg-light border rounded-3 p-1 h-100 sticky-top" style={{
           width: isM_Or_L ? "150px" :"100%"}}>
          <ul className="nav nav-pills flex-sm-column flex-row mb-auto justify-content-between text-truncate">
            <li className="nav-item">
              <a href="/" className="nav-link px-2 text-truncate">
              <FaHome aria-hidden="true" />
                <span className="d-none d-sm-inline">Home</span>
              </a>
            </li>
            <li>
              <a href="/" className="nav-link px-2 text-truncate">
              <FaFortAwesome aria-hidden="true" />
                <span className="d-none d-sm-inline">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="/" className="nav-link px-2 text-truncate"><FaTeamspeak aria-hidden="true" />
                <span className="d-none d-sm-inline">Orders</span> </a>
            </li>
            <li>
              <a href="/" className="nav-link px-2 text-truncate"><FaArchive aria-hidden="true" />
                <span className="d-none d-sm-inline">Products</span> </a>
            </li>
            <li>
              <a href="/" className="nav-link px-2 text-truncate"><FaBabyCarriage aria-hidden="true" />
                <span className="d-none d-sm-inline">Customers</span> </a>
            </li>
          </ul>
        </div>
      </aside> 
    </>
  )
}

export default LeftSideBar