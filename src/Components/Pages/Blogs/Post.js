import React from "react";
import { useParams , useNavigate } from "react-router-dom";
import { BlogsData } from "./BlogsData";
import { FaArrowLeft } from 'react-icons/fa';
import "./Post.css"
function  Post() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = BlogsData.find((blog) => blog.name === id);
  return (
    <> 
   {/*  <div className="contianer">
      <div  >
        <b className="text-center mx-auto">{  blog.name}</b>  
        <img src={ blog.image} className="img-fluid mt-5 px-4"   alt="post-img" />
        <p className=" mt-5 text-break" style={{textAlign:"justify"}}>{blog.description}  </p> 
      </div>
    </div> */}

  
<button className="    float-start"
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
          src={ blog.image}
          alt=""
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
          <span>1 day ago</span>
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
