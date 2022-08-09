import React, { useEffect, useState } from 'react';
 
// import "./Page.css"
import { ExternalLink } from 'react-external-link';

const Home = () => {

  const [inital, setInital] = useState([])

  const exapleData = async () => {
    try {
      const news_url = "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json"
      // https://saurav.tech/NewsAPI/top-headlines/category/health/in.json
      // title description urlToImage
      // https://newsapi.org/v2/top-headlines?country=us&apiKey=66cc9417950f40308f24f5df54e1273f
      const result = await fetch(news_url)
      const data = await result.json();
      // console.log(data.articles[0].title, "hello");
      setInital(data.articles)
    } catch (error) {
      console.log(error);
    }


  }

  useEffect(() => {
    exapleData();
  }, [])

  return (
    <>

      <div>
        {inital.map((ite) => (
          <>

            <div className="container py-3">
              <div className="card  ">
                <div className="row">
                  <div className="col-sm-5">
                    <img
                      className="d-block w-100"
                      src={ite.urlToImage}
                      alt={ite.urlToImage}
                      style={{
                        height: "250px"
                      }}
                    />
                  </div>
                  <div className="col-sm-7">
                    <div className="card-block">
                      <h6 className="card-title mt-2 ">{ite.title}</h6>
                      <p className='mt-3'> {ite.description}</p>

                      <br />
                      <ExternalLink href={ite.url} className="btn btn-primary mb-3 btn-sm float-right" >
                        <span>Visit the site</span>
                      </ExternalLink>
 
                    </div>
                  </div>
                </div>
              </div>
            </div>



          </>
        ))}
      </div>


    </>
  )
}



/* 

<article className="card shadow curve">
  <div>
    <img
      src="https://images.unsplash.com/photo-1506202687253-52e1b29d3527?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      alt="image"
    />
  </div>
  <div>
    <p>
      <strong>
        {ite.title.slice(0,30)}
      </strong>
    </p>
    <span>
      <i className="fab fa-twitter" />
      Twitter - <time>28 min ago</time>
    </span>
  </div>
</article>


*/
































export default Home