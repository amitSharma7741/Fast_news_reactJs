import React, { useEffect, useState } from "react";
import { useParams , useNavigate, Link } from "react-router-dom";
// import usefetch from "../CustomHooks/UseFetchHook";
import { FaArrowLeft } from 'react-icons/fa';
import "./Post.css"
import ReactMarkdown from 'react-markdown'
import ReactGA from 'react-ga';
function  Post() {

//  const [blogs] = usefetch("http://localhost:8000/blogs");

  const [blogs, setBlogs] =  useState([]);
  const { id } = useParams(); // get the id from the url
  const navigate = useNavigate(); // navigate to another page

  const url = "https://blogs-data.onrender.com/blog"
  const datar = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      const allBlogs = data.data;
      const checkblog = allBlogs.filter((blog) => blog.titleUrl === id); // check if the id is equal to the titleUrl
      setBlogs(checkblog);  
    }
    catch (error) {
      console.log(error);
    }
  }
 
  useEffect(() => {
    datar()
    ReactGA.pageview(window.location.pathname + window.location.search);
     // eslint-disable-next-line
  }, [url]);
// titleUrl, title, description, imageUrl, published


   

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
          src=  {blogs[0]?.imageUrl} // check if the blogs is not empty
          alt= {blogs[0]?.title}
        />
        <h1 className="singlePostTitle"> 
          {blogs[0]?.title.replace(/\s+/g, ' ').trim()}  {/* remove the extra spaces */}
          <div className="singlePostEdit">
             {/* add tags  */}
              {blogs[0]?.tags.map((tag) => (
                <span className="singlePostTag"
                onClick={() => navigate(`/blog/tag/${tag}`)}
                >
                <Link to={`/blog/tag/${tag}`}>#{tag}</Link>  
                </span>
              ))}
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
          <span>{blogs[0]?.published} </span>
        </div>
        <p className="singlePostDesc lh-lg"> 
          <ReactMarkdown >
          {blogs[0]?.description}
          </ReactMarkdown>  
        </p>
      </div>
    </div> 
    </>
  );
}


export default Post
