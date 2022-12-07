import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { FaGreaterThan, FaHome } from "react-icons/fa";
import "./Entertainement.css"
import { rightSideData } from "./RightSideData";
import OverlayDiv from "../../Little/OverlayDiv";
const EntertainementNavbar = () => {
    //  we need end path of url 
    //  like https://blogs-data.onrender.com/bollywood/news
    //  news is end path
    const endPath = window.location.pathname.split("/").pop();
    const [data, setData] = useState(rightSideData);
    const [urlPath, setUrlPath] = useState(endPath);
    // const [nextUrl , setNextUrl] = useState("");
    // const [homeUrl , setHomeUrl] = useState("");
    const navData = [
        {
            id: 1,
            value: "News",
            url: "news"
        },
        {
            id: 2,
            value: "TV",
            url: "tv"
        },
        {
            id: 3,
            value: "Web-Series",
            url: "web-series"
        },
        {
            id: 4,
            value: "Interviews",
            url: "interviews"
        },
        {
            id: 5,
            value: "South",
            url: "south"
        },
        {
            id: 6,
            value: "Hollywood",
            url: "hollywood"
        },
        {
            id: 7,
            value: "Box-Office",
            url: "box-office"
        },
        {
            id: 8,
            value: "Reviews",
            url: "reviews"
        },
        {
            id: 9,
            value: "Style",
            url: "style"
        },
        {
            id: 10,
            value: "Photos",
            url: "photos"
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
                }}>Entertainment</h1>
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
                    }} onclick = {() => setUrlPath("entertainment")}>
                        <Link to="/entertainment" className="nav-link">
                            <FaHome />
                        </Link>
                    </li>

                    {navData.map((item) => {

                        return (
                            <li className="" key={item.id}
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
                                    aria-current="page" to={`/entertainment/${item.url}`}>{item.value}</Link>

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
                    <Link to={'/entertainment'} style={{ color: "red", display: "inline-block" }} >
                        Entertainment
                    </Link>
                    {urlPath !== "entertainment" && (
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
                    <div className="col-sm-4 mt-3">

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

                                        <h5 className="mt-2 mb-5"
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

            <OverlayDiv url="https://www.bollywoodlife.com/"  name = "bollywoodlife.com" />
        </>
    )
}

export default EntertainementNavbar
