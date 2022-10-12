import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Puzzle from '../Little/Puzzle';
import Loader from '../Loaders/Loader';
import TopEntertainmentImage from '../ReusableComponent/TopEntertainmentImage';

const Testing = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    // movies , technology , sports , lifestyle , trending ,india,india today podcasts, science,business,television,world,auto,education today,cities,news analysis,india today insight,law,crime,fact-check health  general
    const urlData = [
        {
            id: 1,
            value: "entertainment",
            url: "/entertainment"
        },
        {
            id: 2,
            value: "news",
            url: "/news"
        },
        {
            id: 3,
            value: "auto",
            url: "/news"
        },
        {
            id: 4,
            value: "business",
            url: "/news/business"
        },
        {
            id: 5,
            value: "mutual funds",
            url: "/news/crypto"
        },
        {
            id: 6,
            value: "science",
            url: "/news/science"
        },
        {
            id: 7,
            value: "televison",
            url: "/entertainment/tv"
        },
        {
            id: 8,
            value: "movies",
            url: "/entertainment"
        },
        {
            id: 9,
            value: "sports",
            url: "/news"
        },
        {
            id: 10,
            value: "education",
            url: "/news"
        },
        {
            id: 11,
            value: "world",
            url: "/news/world"
        },
        {
            id: 12,
            value: "trending",
            url: "/news/trending"
        },
        {
            id: 13,
            value: "offbeat",
            url: "/news"
        },
        {
            id: 14,
            value: "abp decodes",
            url: "/news"
        },
        {
            id: 15,
            value: "cryptocurrency",
            url: "/news/crypto"
        },
        {
            id: 16,
            value: "tamil nadu",
            url: "/news"
        },
        {
            id: 17,
            value: "",
            url: "/entertainment"
        } 
    ]

    const dataChange = async () => {
        const url = "https://blogs-data.onrender.com/newsdiv"
        try {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
            setLoading(false);
        }
        catch (error) {
            console.log(error);
            setError(true);
            setLoading(false);
        }
    }

    useEffect(() => {
        dataChange();
    }, []);

    if (loading) {
        return (
            <Loader />
        )
    } 
    if (error) return 'Error!';

    /* title,
                      imageUrl,
                      firstHead,
                      firstHeadLink,
                      secondTitle,
                      secondTitle1Link,
                      thirdTitle,
                      thirdTitle1Link */
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-8">
                         <TopEntertainmentImage />
                    </div>
                    <div className="col-md-4">
                         <Puzzle/>
                    </div>
                </div>


                <div className="row">
                    {data.map((item) => {
                        return (
                            <>
                                <div className='col-md-4 col-sm-4 col-xs-12 mt-3 ' key={item.title}>
                                    <h5 className='animate-charcter' style={{
                                        fontWeight: "bold",
                                        fontSize: "20px",
                                        textTransform: "uppercase"

                                    }}> 
                                    {/* if title value == "" then write newsmon */} 
                                    {item.title === "" ? "NEWSMON" : item.title  }
                                    </h5>
                                    {/* give random image */}

                                    <div className="card">
                                        <img src={item.imageUrl ? item.imageUrl:"https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fHdhbGxwYXBlcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" } className="card-img-top" alt={item.firstHead} style={{
                                            height: "250px"
                                        }} />
                                        <div className="card-body">
                                            <Link to={item.firstHeadLink} className="card-title">
                                                <h5 className="card-title text-start"
                                                    style={{
                                                        textAlign: "justify",
                                                        fontSize: "18px",
                                                        fontWeight: "bold",
                                                        color: "black",
                                                        lineHeight: "24px"

                                                    }}
                                                >{item.firstHead}</h5>
                                            </Link>
                                            {/* a horrizontal line */}
                                            <hr style={{
                                                color: "black",
                                                backgroundColor: "#ddd",
                                                height: 1,
                                                borderColor: "#000000"
                                            }} />
                                            <Link to={item.secondTitle1Link}  >

                                                <p className="card-text" style={{
                                                    color: "black",
                                                    fontWeight: "bold",
                                                    lineHeight: "20px",
                                                    textAlign: "justify",
                                                    // padding:"0px"
                                                    listStyleType: "square"


                                                }}>{item.secondTitle}</p>
                                            </Link>
                                            <hr style={{
                                                color: "black",
                                                backgroundColor: "#ddd",
                                                height: 1,
                                                borderColor: "#000000"
                                            }} />
                                            <Link to={item.thirdTitle1Link}  >
                                                <p className="card-text" style={{
                                                    color: "black",
                                                    fontWeight: "bold",
                                                    textAlign: "justify",
                                                    lineHeight: "20px"

                                                }}>{item.thirdTitle}</p>
                                            </Link>
                                            <div>
                                                {/* filter urldata with title */}
                                                {/* lowecase any string */}


                                                {urlData.filter((elem) => elem.value === item.title.toLowerCase()).map((item) => {
                                                    return (
                                                        <Link to={item.url}  ><button className="btn btn-primary " style={{
                                                            float: "right",
                                                            color: "white",
                                                            fontWeight: "bold",
                                                            fontSize: "14px",
                                                            borderRadius: "10px"
                                                        }}>Read More</button></Link>
                                                    )
                                                })}


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>

                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Testing