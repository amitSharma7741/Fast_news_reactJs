import React, { useEffect, useState } from 'react'

import { useNavigate, Link, useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import Loader from '../../Loaders/Loader';
import "./Blogs_and_Post.css"
// import { useParams , useNavigate } from "react-router-dom";

const TagPost = () => {

    // const { tagId } = useParams(); // get the id from the url
    //   const navigate = useNavigate(); // navigate to another page
    const { tagVal } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const url = `https://blogs-data.onrender.com/blog/${tagVal}`;
    const datar = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data.data);

            setData(data.data);
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
        // eslint-disable-next-line
    }, [url]);

    if (loading) { return (<Loader />) }
    if (error) return "Error!";


    return (
        <>
            <div className="container row row-cols-1 row-cols-md-3 g-4 ">

                {data.map((product,i) => (
                    <>
                        <div className="col" key={product._id}>
                            {/* if i less than 10 than place 0 like 0i */}

                            <div style={{
                                paddingTop: "0em",
                                paddingBottom: "1em",
                                color: "rgba(0, 0, 0, 0.4)"
                            }}>{(i+1)>=10?(i+1):`0${i+1}`}</div>
                            <div className="card h-100" onClick={() => {
                                navigate(`/blog/${product.titleUrl}`);
                            }} style={{
                                border: "0px"
                            }}>
                                <img src={product.imageUrl} className="card-img-top" alt="..." style={{
                                    height: "200px",
                                    borderRadius: "1em"
                                }} />
                                <div className="card-body">
                                    <Link to={`/blog/${product.titleUrl}`}>
                                        <h5 className="card-title text-uppercase text-decoration-none " style={{
                                            color: "black",
                                            textAlign: "justify"
                                        }}>{product.title.replace(/\s+/g, ' ').trim()}</h5>

                                    </Link>
                                    {/* <p className="card-text"> */}
                                    <ReactMarkdown>
                                        {/* display only 100 words */}
                                        {product.description?.substring(0, 100)}
                                    </ReactMarkdown>
                                    {/* </p> */}
                                    {/* product also have tags array add element with # */}
                                    <div className=" ">
                                        {product.tags?.map((tag) => (
                                            <span style={{
                                                fontSize: "0.8em",
                                                margin:"0px 10px"
                                            }}
                                            key={tag}
                                                onClick={() => {
                                                    navigate(`/blog/${tag}`);
                                                }}
                                            >#{tag}</span>
                                        ))}

                                    </div>
                                    {/* add a horizontal line*/}
                                    <hr className="mt-2" style={{
                                        color: "rgba(0, 0, 0, 0.4)",
                                        height: 1,
                                        backgroundColor: "rgba(0, 0, 0, 0.4)"


                                    }} />



                                </div>
                                {/* <div className="card-footer">
    <small className="text-muted">{product.published}</small>
    </div> */}


                            </div>
                        </div>
                    </>
                ))}

            </div>
        </>
    )
}

export default TagPost