import "./Navbar.css"
import React, { useEffect, useState } from 'react'
import { FaAngleUp } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa';
import {Link,Outlet} from "react-router-dom"
import Footer from "./Pages/Footer/Footer";

//  https://api.nasa.gov/planetary/apod?api_key=mrhh2R9IjDc8S1kU8oNN44UoHiqQtXqjkpbIwE5H
const Navbar = () => {

  const [dim, setDim] = useState([]);
  
  const url = "https://api.coincap.io/v2/assets/";
  const dataChange = async () => {
    const resul = await fetch(url);
    const data = await resul.json();
    setDim(data.data);
  };
  useEffect(() => {
    dataChange();
  }, [url]);


 const classChange = () => {
  document.querySelector(".navbar-toggler").click();
 }


  return (
    <>
      <div className="App">

        <div className="price-container">
          <div className="price-box">
            {dim.map((ite) => (
              <>

                <div className="box-styling" key={ite.rank}  >


                  <span className="text-uppercase d-flex" style={{ textAlign: "justify" }}> {ite.symbol} </span>
                  <span className="price-span"> {ite.priceUsd.slice(0, 8)} </span>

                  <span className="up-down">
                    {ite.changePercent24Hr.slice(0, 1) === "-" ? <FaAngleDown style={{ color: "red" }} /> : <FaAngleUp style={{ color: "green" }} />}
                  </span>
                  <b>
                    <span style={{ color: ite.changePercent24Hr.slice(0, 1) === "-" ? "red" : "green" }}>
                      {ite.changePercent24Hr.slice(0, 1) === "-" ? ite.changePercent24Hr.slice(1, 5) : ite.changePercent24Hr.slice(0, 5)}%
                    </span></b>

                  <div style={{ border: "2px solid ", height: "20px" }}></div>
                </div>
              </>
            ))}
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NEWSMON
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
              <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item"
                // after onclick navbar toggle close
                onClick= {classChange}
                >
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item" onClick= {classChange}>
                  <Link className="nav-link" to="/blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item" onClick= {classChange}>
                  <Link className="nav-link" to="/news">
                     News
                  </Link>
                </li>
                <li className="nav-item" onClick= {classChange}>
                  <Link className="nav-link" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item" onClick= {classChange}>
                  <Link className="nav-link" to="/write">
                    write
                  </Link>
                </li>
                <li className="nav-item" onClick= {classChange}> 
                  <Link className="  nav-link" to="/about"  >
                    About Us
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/category">
                    Entertainment 
                  </Link>
                </li> */}
                {/* <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <Link className="dropdown-item" to="/category">
                        Entertainment
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li> */}
                {/* <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    href="/"
                    tabIndex={-1}
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li> */}
              </ul>
              {/* <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form> */}
            </div>
          </div>
        </nav>
      </div>
      <div style={{
           minHeight:"100vh"
      }}>
        <Outlet />
      </div>
       <div>
        <Footer />
       </div>
    </>
  )
}




export default Navbar