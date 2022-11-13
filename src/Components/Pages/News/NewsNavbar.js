import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { FaGreaterThan, FaHome } from "react-icons/fa";
import { rightSideData } from "../Entertainement/RightSideData";
const NewsNavbar = () => {

    const endPath = window.location.pathname.split("/").pop();
    const [data, setData] = useState(rightSideData);
    const [urlPath, setUrlPath] = useState(endPath);

    const navData = [
        {
            id: 1,
            value: "World",
            url: "world"
        },
        {
            id: 2,
            value: "India",
            url: "india"
        },
        {
            id: 3,
            value: "Business",
            url: "business"
        },
        {
            id: 4,
            value: "science",
            url: "science"
        },
        {
            id: 5,
            value: "trending",
            url: "trending"
        },
        {
            id: 6,
            value: "health",
            url: "health"
        },
        {
            id: 7,
            value: "crypto",
            url: "crypto"
        },
        {
            id: 8,
            value: "crime",
            url: "crime"
        },
        {
            id: 9,
            value: "fact-check",
            url: "fact-check"
        }

    ]

    const url = "https://blogs-data.onrender.com/bollywood"
    const rightBox = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setData(data.data.rightStories);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        rightBox();
    }, []);


    return (

        <>
            <div class="container">
                <h1 className="text-center mt-3 animate-charcter" style={{
                    color: "black",
                    fontSize: "20px",
                    display:"block"
                }}>News</h1>
                <ul class="text-start"
                    style={{
                        overflow: "auto",
                        whiteSpace: "nowrap",
                        backgroundColor: "#bcbca1"

                    }} >
                    <li style={{
                        // float:"left",
                        // textAlign:"center",
                        textDecoration: "none",
                        // listStyle:"none",
                        padding: "14px 6px",
                        color: "black",
                        fontSize: "17px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        display: "inline-block",
                         marginLeft: "-25px"
                    }} onClick={() => setUrlPath("news")}
                    >
                        <Link to="/news" className="nav-link">
                            <FaHome />
                        </Link>
                    </li>
                    {navData.map((item) => {

                        return (
                            < li className="" key={item.id}
                                style={{
                                    // float:"left",
                                    // textAlign:"center",
                                    textDecoration: "none",
                                    // listStyle:"none",
                                    padding: "14px 6px",
                                    color: "black",
                                    fontSize: "17px",
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                    display: "inline-block"
                                }}
                                onClick={() => setUrlPath(item.url)} >
                                <Link style={{
                                    color: "black"
                                }}
                                    aria-current="page" to={`/news/${item.url}`}>{item.value}</Link>

                            </li>
                        )
                    })}
                </ ul>
                <div className="text-start" style={{
                    overflow: "auto",
                    whiteSpace: "nowrap",
                }}>
                    <Link to={'/'} style={{ color: "red", display: "inline-block" }} >
                        Home
                    </Link>
                    <div className="text-muted" style={{ display: "inline-block", margin: "0px 10px" }}>
                        <FaGreaterThan />
                    </div>
                    <Link to={'/news'} style={{ color: "red", display: "inline-block" }} >
                        News
                    </Link>
                     {/* if url end point news return empty */}
                    {urlPath !== "news" && (
                        <>
                           <div className="text-muted" style={{ display: "inline-block", margin: "0px 10px" }}>
                                    <FaGreaterThan />
                                </div>
                                <p className="text-muted" style={{ display: "inline-block" }}>
                                    {urlPath}
                                </p>
                        </>
                    )}

                </div>

                <div className="row">
                    <div className="col-sm-8">

                        {<Outlet />}
                    </div>
                    <div className="col-sm-4 mt-5">

                        <div>
                            {data.map((item) => {
                                return (
                                    <>
                                        <h2 className="text-center animate-charcter" key={item.head}
                                            style={{
                                                color: "black",
                                                fontSize: "20px"

                                            }}
                                        >{item.head} </h2>
                                        <img src={item.imageUrl} className="w-100" alt={item.title}
                                            style={{
                                                height: "250px"

                                            }}
                                        />

                                        <h5 className="mt-2"
                                            style={{
                                                color: "black",
                                                fontSize: "18px",
                                                textAlign: "justify"
                                            }}
                                        >{item.title.replace(/\s+/g, ' ').trim()}</h5>
                                    </>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsNavbar
