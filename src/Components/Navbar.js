import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className=" mt-3  bg-light">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/category">Category</Link>
          </li>

        </ul>
      </nav>

      <Outlet />

      {/* <ul class="nav justify-content-center">
  <li class="nav-item"> 
     <Link className="nav-link active" aria-current="page" to="/">Home</Link>
  </li>
  <li class="nav-item">
    <Link className="nav-link" to="/about">About</Link>
  </li>
  <li class="nav-item">
   <Link className="nav-link" to="/category">Category</Link>
  </li>
  
</ul> */}
    </>
  )
}

export default Navbar