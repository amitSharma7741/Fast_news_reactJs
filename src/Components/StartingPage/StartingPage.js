import React, { useState, useEffect } from 'react'

const StartingPage = () => {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const allData = [
        {
            id: 1,
            title: "World",
            image: "",
            firstTitle:"",
            secondTitle:"",
            thirdTitle:"",
            naviUrl: "/world"

        },
        {
            id: 2,
            title: "india",
            image: "",
            firstTitle:"",
            secondTitle:"",
            thirdTitle:"",
            naviUrl: "/business"
        }
        
    ]
   const axios = require('axios');
    const finalData = allData.map(async (data) => {
        const urlTitle = data.title.toLowerCase()

        const url = `https://blogs-data.onrender.com/news/${urlTitle}`
        try {
           
            const response =  await axios.get(url) 
            const  output = await response.data
            const image = output[0].imageUrl
            const firstTitle = output[0].title
            const secondTitle = output[1].title
            const thirdTitle = output[2].title
            const naviUrl = data.naviUrl
            const id = data.id
            const title = data.title
            const finalData = {id, title, image, firstTitle, secondTitle, thirdTitle, naviUrl}
            return finalData

            
     
        }
        catch (error) {
             console.log(error);
        }
    })

    console.log(finalData)

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY')
            .then(res => res.json())
            .then(data => {
                setNews(data.articles)
                setLoading(false)
            })
            .catch(err => {
                setError(err)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }



    return (
        <>
            <div className="container">
                <div className="row">
                    {news.map((item, index) => {
                        return (
                            <div className="col-md-4" key={index}>
                                <div className="card">
                                    <img src={item.urlToImage} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.description}</p>
                                        <a href={item.url} className="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default StartingPage