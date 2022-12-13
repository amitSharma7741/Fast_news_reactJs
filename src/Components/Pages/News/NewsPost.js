import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { ExternalLink } from 'react-external-link';
// import "./Entertainement.css"
import ReactGA from 'react-ga';
const NewsPost = () => {

    var { newsId } = useParams();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const  newsUrl = `https://blogs-data.onrender.com/news/${newsId}`

    const datar = async () => {
        try {
            const response = await fetch(newsUrl);
            const data = await response.json();
            setData(data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    // call the datar function
    useEffect(() => {
        datar();
        ReactGA.pageview(window.location.pathname + window.location.search);
        // eslint-disable-next-line
    }, [newsUrl]);






    if (loading) return 'Loading...';
    if (error) return 'Error!';
/*  title,
                    description,
                    link,
                    imageUrl  */

    return (
        <>
            <div className="container ">
            <h1 className="text-center" style={{
                    color: "red",
                    fontSize: "40px",
                    fontWeight: "bold",
                    fontFamily: "cursive",
                    textShadow: "2px 2px 2px black",
                    // uppercase
                    textTransform: "uppercase" ,
                    marginTop:"-10px" 
                }}> {newsId}</h1>
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
                                            }}> {item.title.replace(/\s+/g, ' ').trim() }   </h5>
                                        <ExternalLink href={item.link}  >
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
                                        >{item.description.substring(0, 200)}</p>
                                        </ExternalLink> 
                                        <div className="d-flex align-items-center">
                                        <h5 className="d-inline-box"
                                        style={{
                                            textTransform:"uppercase",
                                            color: "white",
                                            fontWeight: "bold",
                                            fontSize: "15px",
                                            background: "linear-gradient(to right,#f32c89,#730be2)",
                                            height: "auto",
                                            padding: "5px",
                                            borderRadius: "5px",
                                            float:"left"


                                        }}
                                        >{newsId}
                                            </h5>
                                        {/* <p className=" d-inline-block card-text  "
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

export default NewsPost