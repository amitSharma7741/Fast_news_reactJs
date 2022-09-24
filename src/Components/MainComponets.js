import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DeliveredComponents from './DeliveredComponents'
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import Navbar from './Navbar'
import About from './Pages/About'
// import Category from './Pages/Category'
import Allbogs from './Pages/Blogs/Allbogs';

import Blog from './Pages/Blogs/Blog';
import Post from './Pages/Blogs/Post';
import NoPage from './Pages/NoPage';
import AppendPost from './Pages/AppendPost/AppendPost'
import Entertainement from './Pages/Entertainement/Entertainement';
import EntertainePost from './Pages/Entertainement/EntertainePost';
import EntertainementNavbar from './Pages/Entertainement/EntertainementNavbar';
const MainComponets = () => {
  return (
    <>

      {/* <div>
        <Navbar />
      </div> */}
      <div style={{
        minHeight: "100%"
      }}>


        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<DeliveredComponents />} />
            <Route path="/about" element={<About />} />
            <Route path="/entertainement" element={<EntertainementNavbar/>} >
              <Route  index element={<Entertainement />} />
               <Route path=":bolly" element={<EntertainePost/>}/> 
            </Route>
            {/* <Route path="/category" element={<Category />} /> */}
            <Route path="/write" element={<AppendPost />} />
            <Route path="/blog" element={<Blog />} >
              <Route path="" element={<Allbogs />} />
              <Route path=":id" element={<Post />} />
            </Route>
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>

        {/* Remove the container if you want to extend the Footer to full width. */}

        <div className="  mt-5">
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
        {/* End of .container */}

      </div>
    </>
  )
}

export default MainComponets