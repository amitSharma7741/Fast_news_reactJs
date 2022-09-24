import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { ExternalLink } from 'react-external-link';
const EntertainePost = () => {

    var { bolly } = useParams();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const bollyUrl = `https://blogs-data.onrender.com/bollywood/${bolly}`

    const datar = async () => {
        try {
            const response = await fetch(bollyUrl);
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
        // eslint-disable-next-line
    }, [bollyUrl]);






    if (loading) return 'Loading...';
    if (error) return 'Error!';


    return (
        <>
            <div className="container mt-5">
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
                                            }}> {item.title }   </h5>
                                        <ExternalLink href={item.link}  >
                                        <p
                                        style={{
                                            textAlign: "justify",
                                            color: "black"
                                            
                                        }}
                                        onMouseOver={(e) => {
                                            e.target.style.textDecoration = "underline"; 
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.textDecoration = "none";
                                        }}
                                        >{item.description.split(0,70)}</p>
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
                                        >{bolly}
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

export default EntertainePost