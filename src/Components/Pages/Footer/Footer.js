import React from 'react' 
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
    
 <footer className="text-center mt-3 text-lg-start border border-white mt-xl-5 pt-4"
 style ={{
  background: "cornsilk"
 }}
 >
  {/* Grid container */}
  <div className="container p-4">
    {/*Grid row*/}
    <div className="row">
      {/*Grid column*/}
      <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
        <h5 className="animate-charcter text-uppercase mb-4" style = {{
          fontSize:"40px"
        }}>Newsmon</h5>
         <p>
          {/* website description */}
          Newsmon is a news website that provides the latest news from all over the world. 

         </p>
      </div>
      {/*Grid column*/}
      {/*Grid column*/}
      <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
        <h5 className="text-uppercase mb-4">News</h5>
        <ul className="list-unstyled">
          <li>
            <Link to = {"/news/world"}>
              World
            </Link> 
          </li>
          <li>
            <Link to = {"/news/technology"}>
              Technology
            </Link> 
          </li>
          <li>
            <Link to = {"/news/health"}>
              Health
            </Link> 
          </li>
          <li>
            <Link to = {"/news/india"}>
              India
            </Link> 
          </li>
          <li>
            <Link to = {"/news/crime"}>
              Crime
            </Link> 
          </li>
        </ul>
      </div>
      {/*Grid column*/}
      {/*Grid column*/}
      <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
        <h5 className="text-uppercase mb-4">
          Entertainment
        </h5>
        <ul className="list-unstyled">
          <li>
            <Link to = {"/entertainment/news"}>
              News
            </Link> 
          </li>
          <li>
            <Link to = {"/entertainment/web-series"}>
              Web Series
            </Link>
          </li>
          <li>
            <Link to = {"/entertainment/tv"}>
              TV
            </Link>
          </li>
          <li>
            <Link to = {"/entertainment/south"}>
              South
            </Link>
          </li>
          <li>
            <Link to = {"/entertainment/hollywood"}>
              Hollywood
            </Link>
          </li>
        </ul>
      </div>
      {/*Grid column*/}
      {/*Grid column*/}
      <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
        <h5 className="text-uppercase mb-4">Sign up to our newsletter</h5>
        <div className="form-outline form-white mb-4">
          <input type="email" id="form5Example2" className="form-control" />
          <label className="form-label" htmlFor="form5Example2">Email address</label>
        </div>
        <button type="submit" className="btn btn-primary btn-outline-white btn-block">Subscribe</button>
      </div>
      {/*Grid column*/}
    </div>
    {/*Grid row*/}
  </div>
  {/* Grid container */}
  {/* Copyright */}
  <div className="text-center p-3 border-top border-white">
    © 2020 Copyright:
    <a className="" href="/"> Newsmon</a>
  </div>
  {/* Copyright */}
</footer>
    </>
  )
}


 

export default Footer