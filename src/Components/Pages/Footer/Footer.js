import React from 'react'
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>
     <div className="  mt-5"
        style={{
          bottom: "0",

          width: "100%", 
          height: "100px",
          color: "white",
          textAlign: "center",
          paddingTop: "10px",
          fontSize: "20px",
          fontWeight: "bold"


        }}
      >
        <footer className="bg-dark text-center text-white">
          {/* Grid container */}
          <div className="container p-4 pb-0">
            {/* Section: Social media */}
            <section className="mb-4">
              {/* Facebook */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="/"
                role="button"
              >
                < FaFacebook />
              </a>
              {/* Twitter */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="/"
                role="button"
              >
                < FaGithub />
              </a>
              {/* Google */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="/"
                role="button"
              >
                < FaLinkedin />
              </a>
              {/* Instagram */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="/"
                role="button"
              >
                < FaTwitter />
              </a>
              {/* Linkedin */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="/"
                role="button"
              >
                < FaYoutube />
              </a>
              {/* Github */}
              {/* <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="/"
                  role="button"
                >
                  <i className="fab fa-github" />
                </a> */}
            </section>
            {/* Section: Social media */}
          </div>
          {/* Grid container */}
          {/* Copyright */}
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2022 Copyright:
            <a className="text-white" href="/">
              NEWSMON
            </a>
          </div>
          {/* Copyright */}
        </footer>
      </div>
    </>
  )
}

export default Footer