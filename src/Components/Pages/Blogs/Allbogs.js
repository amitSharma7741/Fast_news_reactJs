import React, { useState, useEffect } from "react";
// import { BlogsData } from "./BlogsData";
import { useNavigate, Link } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import Loader from "../../Loaders/Loader";
// import useFetch from "./CustomHooks/UseFetch";
function Allblogs() {
  const navigate = useNavigate();
  // name, title, description, imageUrl, published
  // const [blogs] = useFetch("http://localhost:3001/blog");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "https://blogs-data.onrender.com/blog"
  const datar = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data.data);
      // reverse the array
      const reverseData = data.data.reverse();
      setBlogs(reverseData); 
      setLoading(false);
    }
    catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    datar()
  }, []);
  //  render url



  /* 
  "_id": "632414848dbb59549c06ce1b",
  "title": "a biggest title ahh sdhlhdf dfhgdf ",
  "titleUrl": "a-bi sdhlhdf-dfhgdf-",
  "description": "## hw   hieorf heroinee what a sisve ",
  "imageUrl": "http ",
  "published": "September 16, 2022",
  "__v": 0 */

  if (loading) {
    return (
        <Loader />
    )
}
  if (error) return "Error!";

  return (
    <div className="container row row-cols-1 row-cols-md-3 g-4 ">

      {blogs.map((i,product) => {
        return (
          <>
            <div className="col" key={product._id}>
              {/* if i less than 10 than place 0 like 0i */} 

            <div  style={{
              paddingTop: "0em",
              paddingBottom: "1em",
              color: "rgba(0, 0, 0, 0.4)"
            }}>0{i}</div>
              <div className="card h-100" onClick={() => {
                navigate(`/blog/${product.titleUrl}`);
              }} style={{
                border:"0px"
              }}>
                <img src={product.imageUrl} className="card-img-top" alt="..." style={{
                  height: "200px",
                  borderRadius: "1em"
                }} />
                <div className="card-body">
                  <Link to={`/blog/${product.titleUrl}`}>
                  <h5 className="card-title text-uppercase text-decoration-none " style={{
                    color:"black"
                  }}>{product.title}</h5>

                  </Link>
                    {/* <p className="card-text"> */}
                      <ReactMarkdown>
                        {/* display only 100 words */}
                        {product.description.substring(0, 100)}
                      </ReactMarkdown> 
                    {/* </p> */}
                </div>
                {/* <div className="card-footer">
                  <small className="text-muted">{product.published}</small>
                  </div> */}
                  

              </div>
            </div>
          </>
        );
      })}

    </div>
  );
}
 
export default Allblogs;
