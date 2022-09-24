import React, { useEffect, useState } from "react";
import { useParams , useNavigate } from "react-router-dom";
// import usefetch from "../CustomHooks/UseFetchHook";
import { FaArrowLeft } from 'react-icons/fa';
import "./Post.css"
function  Post() {

//  const [blogs] = usefetch("http://localhost:8000/blogs");

  const [blogs, setBlogs] =  useState([]);

  const url = "https://blogs-data.onrender.com/blog"
  const datar = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.data);
      setBlogs(data.data);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    datar()
  }, []);
// name, title, description, imageUrl, published

  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((blog) => blog.titleUrl === id);
   
   /* 
  "_id": "632414848dbb59549c06ce1b",
  "title": "a biggest title ahh sdhlhdf dfhgdf ",
  "titleUrl": "a-bi sdhlhdf-dfhgdf-",
  "description": "## hw   hieorf heroinee what a sisve ",
  "imageUrl": "http ",
  "published": "September 16, 2022",
  "__v": 0 */

  return (
    <> 
   

  
<button className="float-start"
   style={{
    borderRadius: "10px",
    margin: "10px",
    alignItems: "center"
   }}
 onClick={() => navigate(-1)}> <FaArrowLeft /> Go back</button>
 
 <div className="singlePost">
      <div className=" container">
        <img
          className="singlePostImg"
          src="https://images.unsplash.com/photo-1629202012029-8b8b2b2b9b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="addImage"
        />
        <h1 className="singlePostTitle">
          <b> { blog.title}</b>
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              {/* <Link className="link" to="/posts?username=Safak">
                Safak
              </Link> */}
              Amit
            </b>
          </span>
          <span>{blog.published}</span>
        </div>
        <p className="singlePostDesc lh-lg">
          {blog.description}  
        </p>
      </div>
    </div> 
    </>
  );
}


export default Post
