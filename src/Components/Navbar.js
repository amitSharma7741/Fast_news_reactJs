import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
       <nav className=" mt-3   ">
        <ul class="nav justify-content-center">
          <li class="nav-item ">
          <b>
            <Link className="nav-link  active text-black" aria-current="page" to="/">Home</Link>
            </b>
          </li>
          <li class="nav-item">
            <Link className="nav-link text-black" to="/about">Something Different</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link text-black" to="/category">Entertainment</Link>
          </li>

        </ul>
      </nav>  

      <Outlet />

       
 
    </>
  )
}

export default Navbar