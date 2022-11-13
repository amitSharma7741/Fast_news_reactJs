import React, { useState, useEffect } from 'react'
// import { useNavigate, Link , Outlet} from "react-router-dom";
import { ExternalLink } from 'react-external-link';
// import Loader from '../../Loaders/Loader';
import TopEntertainmentImage from '../../ReusableComponent/TopEntertainmentImage';
import "./Entertainement.css"
import {EntertainmentNewsdata} from "./EntertaimentNewsData"
import {galleryImageData}  from "./GalleryImageData"
const Entertainement = () => {
    // const navigate = useNavigate();

    const [data, setData] = useState(EntertainmentNewsdata);
    // const [topSto, setTopSto] = useState([]);
    const [imgGrid, setImgGrid] = useState(galleryImageData);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    const newsData = async () => {
        const url = "https://blogs-data.onrender.com/bollywood/news";
        try {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
            // setLoading(false);
        }
        catch (error) {
            console.log(error)
            // setError(error);
            // setLoading(false);
        }

    }
    const topStoriesData = async () => {
        const url = "https://blogs-data.onrender.com/bollywood";
        try {
            const response = await fetch(url);
            const data = await response.json();
            // setTopSto(data.data.topStories);
            setImgGrid(data.data.galleryImage);
            // setLoading(false);
        }
        catch (error) {
            console.log(error);
            // setError(error);
            // setLoading(false);
        }
    }


    useEffect(() => {
        newsData();
        topStoriesData();

    }, [])
    // use loaders here
    // if (loading) {
    //     return (
    //         <Loader/>
    //     )
    // }
 
    // if (error) return 'Error!';
    return (
        <>
            {/* bootstrap card */}
            <div className="mt-3">
                {/* make a bootstrap horrizontal scroble div */}

                <div className="container mb-5 ">
                   <TopEntertainmentImage />
                </div>

                <div className="container mb-5 ">
                    <h4 classname="text-center" style={{ color: "black" , display:"flex", justifyContent:"center" }}>Image Gallery</h4>
                    <div className="row  " style={{ border: "10px solid purple" }}>
                        {imgGrid.map((item) => {
                            return (
                                <>
                                    <div className="col-xs-4 col-sm-4 col-lg-4" key={item.link}>
                                        <ExternalLink href={item.link}>
                                            <img src={item.imageUrl} className="img-responsive w-100" alt="it is" />
                                        </ExternalLink>
                                    </div>
                                </>
                            )
                        })}

                    </div>
                </div>

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
                                            >{item.description.substring(0, 150)}</p>
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
                                            <p className=" d-inline-block card-text  "
                                                style={{
                                                    marginLeft: "10px",
                                                    color: "black",
                                                    fontSize: "15px"
                                                }}
                                            >  {item.published}
                                            </p>
                                            {/* 
                                        <ExternalLink href={item.link} className=" d-inline-block mx-3 btn btn-primary" >
                                            <span>Visit the site</span>
                                        </ExternalLink> */}
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


export default Entertainement