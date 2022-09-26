import React,{useState,useEffect} from "react";
import { Outlet, Link } from "react-router-dom";
import "./Entertainement.css"
const EntertainementNavbar = () => {
   const [data, setData] = useState([]);
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
            id:7,
            value:"Box-Office",
            url:"box-office"
        },
        {
            id:8,
            value:"Reviews",
            url:"reviews"
        },
        {
            id:9,
            value:"Style",
            url:"style"
        },
        {
            id:10,
            value:"Photos",
            url:"photos"
        }
    ]
     
    const url ="https://blogs-data.onrender.com/bollywood"
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
                <h1 className="text-center mt-3 animate-charcter" style={{ color: "black",
              fontSize:"20px"
            }}>Entertainement</h1>
                  <  ul class="  "
                  style={{
                    overflow:"hidden",
                    whiteSpace:"nowrap",
                    textOverflow:"ellipsis", 
                    listStyle:"none",
                    backgroundColor:"#bcbca1"

                  }}
                  >

                        {navData.map((item) => {

                            return (
                                < li className="" key={item.id}
                                style={{
                                     float:"left",
                                    textAlign:"center",
                                    textDecoration:"none",
                                    listStyle:"none",
                                    padding:"14px 6px",
                                    color:"black",
                                    fontSize:"17px",
                                    fontWeight:"bold" ,
                                    cursor:"pointer"
                                  

                                
                                    
                                }}
                                >
                                    <Link className= "" style = 
                                    {{ 
                                        color:"black"
                                    }}
                                    aria-current="page" to={`/entertainement/${item.url}`}>{item.value}</Link>

                                </li>
                            )
                        })}
                    </ ul>

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
                                        color:"black",
                                        fontSize:"20px"

                                    }}
                                    >{item.head} </h2>
                                        <img src={item.imageUrl} className="w-100" alt={item.title} 
                                        style={{
                                            height:"250px"

                                        }}
                                        />

                                    <h5 className="mt-2"
                                    style={{
                                        color:"black",
                                        fontSize:"18px",
                                        textAlign:"justify"
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

export default EntertainementNavbar
