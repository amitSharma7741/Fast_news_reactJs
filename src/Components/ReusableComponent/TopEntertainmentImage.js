import React, { useState, useEffect } from 'react'
import Loader from '../Loaders/Loader';
import { ExternalLink } from 'react-external-link';
const TopEntertainmentImage = () => {

    const [topSto, setTopSto] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const topStoriesData = async () => {
        const url = "https://blogs-data.onrender.com/bollywood";
        try {
            const response = await fetch(url);
            const data = await response.json();
            setTopSto(data.data.topStories);
            setLoading(false);
        }
        catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        topStoriesData();
    }, [])

    if (loading) {
        return (
            <Loader />
        )
    }
    if (error) return 'Error!';

    return (
        <> 
                {/* flex-nowrap */}
                <h4 classname="text-center" style={{ color: "black" , display:"flex", justifyContent:"center" }}>Top Stories</h4>

                <div className=" " style={{
                    overflow: "auto",
                    whiteSpace: "nowrap" , display:"flex", justifyContent:"center"
                }}>
                    {topSto.map((item) => {
                        return (
                            <>
                                <div className="card col-12 col-sm-6 col-md-4 col-lg-3" key={item.title}
                                    style={{
                                        display: "inline-block"
                                    }}
                                >
                                    <ExternalLink href={item.link} >
                                        <img src={item.imageUrl} className="d-block card-img  w-100" alt="..."
                                            style={{ height: "320px" }}
                                        />
                                        <div className="card-img-overlay"
                                            style={{
                                                bottom: "0",
                                                top: "auto",
                                                background: "linear-gradient(to right,#f32c89,#730be2)",
                                                color: "white",
                                                padding: "10px",
                                                textAlign: "center"

                                            }}
                                        > {item.title}</div>
                                    </ExternalLink>
                                </div>
                            </>
                        )
                    })}
                </div>
           
        </>
    )
}

export default TopEntertainmentImage