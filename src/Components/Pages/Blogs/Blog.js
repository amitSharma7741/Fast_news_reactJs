import React from "react";
import { Outlet } from "react-router-dom";
 

function Blog() {
 
  return (
    <div  >
      <div class="container">
        <h1 className="text-center mt-5" style={{
          color:"black",
          fontWeight:"bold",
          fontSize:"50px"
          
          }}>Blog page</h1>
 
        <Outlet />
      </div>
    </div>
  );
}

export default Blog;
