import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin  } from "react-icons/fa";
const Footer = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    //   YOUR_SERVICE_ID
    emailjs.sendForm('service_7tsmkdj', 'template_pryiqsj', form.current, '4ZifXAKalESRAW5qN')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    e.target.reset(); 
};
  return (
    <>

      <footer className="text-center mt-3 text-lg-start border border-white mt-xl-5 pt-4"
        style={{
          background: "cornsilk"
        }}
      >
        {/* Grid container */}
        <div className="container p-4">
          {/*Grid row*/}
          <div className="row">
            {/*Grid column*/}
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h5 className="animate-charcter text-uppercase mb-4" style={{
                fontSize: "40px"
              }}>Newsmon</h5>
              <p>
                {/* website description */}
                Newsmon is a news website that provides the latest news from all over the world.

              </p>
              {/* add social media icons here */}
              <section className="mb-4">
                <a className="btn btn-outline-light btn-floating m-1" href="/" role="button"
                  style={{
                    background: "black"
                  }}
                > <FaFacebook /></a> 
                <a className="btn btn-outline-light btn-floating m-1" href="/" role="button"
                  style={{
                    background: "black"
                  }}
                ><FaTwitter /></a>
                <a className="btn btn-outline-light btn-floating m-1" href="/" role="button"
                  style={{
                    background: "black"
                  }}
                ><FaGithub /></a>
                <a className="btn btn-outline-light btn-floating m-1" href="/" role="button"
                  style={{
                    background: "black"
                  }}
                ><FaLinkedin /></a>

              </section>

            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h5 className="text-uppercase mb-4">News</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to={"/news/world"}>
                    World
                  </Link>
                </li>
                <li>
                  <Link to={"/news/technology"}>
                    Technology
                  </Link>
                </li>
                <li>
                  <Link to={"/news/health"}>
                    Health
                  </Link>
                </li>
                <li>
                  <Link to={"/news/india"}>
                    India
                  </Link>
                </li>
                <li>
                  <Link to={"/news/crime"}>
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
                  <Link to={"/entertainment/news"}>
                    News
                  </Link>
                </li>
                <li>
                  <Link to={"/entertainment/web-series"}>
                    Web Series
                  </Link>
                </li>
                <li>
                  <Link to={"/entertainment/tv"}>
                    TV
                  </Link>
                </li>
                <li>
                  <Link to={"/entertainment/south"}>
                    South
                  </Link>
                </li>
                <li>
                  <Link to={"/entertainment/hollywood"}>
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
                <input type="email" id="form5Example2" ref={form}className="form-control" />
                <label className="form-label" htmlFor="form5Example2">Email address</label>
              </div>
              <button type="submit" className="btn btn-primary btn-outline-white btn-block"  onclick = {sendEmail}
              >Subscribe</button>
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
        </div>
        {/* Grid container */}
        {/* Copyright */}
        <div className="text-center p-3 border-top border-white">
          © 2020 Copyright:
          <a className="" href="/"> NEWSMON</a>
        </div>
        {/* Copyright */}
      </footer>
    </>
  )
}




export default Footer