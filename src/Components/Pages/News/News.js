import React, { useState, useEffect } from 'react'
// import { useNavigate, Link , Outlet} from "react-router-dom";
import { ExternalLink } from 'react-external-link';
// import Loader from '../../Loaders/Loader';
import { SampleNewsData } from './SampleNewsData';
import ReactGA from 'react-ga';
const News = () => {

  const [data , setData] = useState(SampleNewsData)
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

  const newsData = async () => {
    const url = "https://blogs-data.onrender.com/news/world";
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    //   setLoading(false);
    }
    catch (error) {
        console.log(error);
    //   setError(error);
    //   setLoading(false);
    }
  }
  useEffect(() => {
    newsData(); 
    ReactGA.pageview(window.location.pathname + window.location.search);
     
}, [])

// use loaders here
// if (loading) {
//     return (
//         <Loader />
//     )
// } 
// if (error) return 'Error!';

  return (
    <>
    <div className="container mt-3">
    {data.map((item) => {
                    return (

                        <div className="card mb-3  " key={item.title}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <ExternalLink href={item.link}   >
                                        <img src={item.imageUrl} className="d-block  w-100" alt="..."
                                            style={{ height: "220px" }}
                                        />
                                    </ExternalLink>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title"
                                            style={{
                                                textAlign: "justify",
                                                color: "black",
                                                fontWeight: "bold",
                                                fontSize: "20px"
                                            }}> {item.title.replace(/\s+/g, ' ').trim()}   </h5>
                                        <ExternalLink href={item.link}>
                                            <p
                                                style={{
                                                    textAlign: "justify",
                                                    color: "black"

                                                }}
                                                onMouseOver={(e) => {
                                                    e.target.style.textDecoration = "underline";
                                                    e.target.style.color = "blue";
                                                }}
                                                onMouseOut={(e) => {
                                                    e.target.style.textDecoration = "none";
                                                    e.target.style.color = "black";
                                                }}
                                            >
                                              {/*what if description not available  */}
                                              {item.description ? item.description.substring(0, 150) :"Descripion not avialable"}</p>
                                        </ExternalLink>
                                        <div className="d-flex align-items-center">
                                            <h5 className="d-inline-box"
                                                style={{
                                                    textTransform: "uppercase",
                                                    color: "white",
                                                    fontWeight: "bold",
                                                    fontSize: "15px",
                                                    background: "linear-gradient(to right,#f32c89,#730be2)",
                                                    height: "auto",
                                                    padding: "5px",
                                                    borderRadius: "5px",
                                                    float: "left"


                                                }}
                                            > News
                                            </h5>
                                           {/*  <p className=" d-inline-block card-text  "
                                                style={{
                                                    marginLeft: "10px",
                                                    color: "black",
                                                    fontSize: "15px"
                                                }}
                                            >  {item.published}
                                            </p> */}
                                           
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                })}
    </div>
    </>
  )
}

export default News