import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import Loader from '../../Loaders/Loader';
// import { useParams , useNavigate } from "react-router-dom";

const TagPost = () => {

    // const { tagId } = useParams(); // get the id from the url
//   const navigate = useNavigate(); // navigate to another page

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const url = "https://blogs-data.onrender.com/blog"
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
    }, [url]);

    if (loading) { return ( <Loader /> ) } 
    if (error) return "Error!";


    return (
        <>
            <div className="container row row-cols-1 row-cols-md-3 g-4 ">

                {data.map((i, product) => {
                    return (
                        <>
                            <div className="col" key={product._id}>
                                {/* if i less than 10 than place 0 like 0i */}

                                <div class="paragraph grey" style={{
                                    paddingTop: "0em",
                                    paddingBottom: "1em",
                                    color: "rgba(0, 0, 0, 0.4)"
                                }}>0{i}</div>
                                <div className="card h-100" onClick={() => {
                                    Navigate(`/blog/${product.titleUrl}`);
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
                                                color: "black"
                                            }}>{product.title}</h5>

                                        </Link>
                                        {/* <p className="card-text"> */}
                                        <ReactMarkdown>
                                            {/* display only 100 words */}
                                            {product.description.substring(0, 100)}
                                        </ReactMarkdown>
                                        {/* </p> */}
                                    </div> 
                                </div>
                            </div>
                        </>
                    );
                })}

            </div>
        </>
    )
}

export default TagPost