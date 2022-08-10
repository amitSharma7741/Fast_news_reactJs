import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive'
 
// import "./Page.css"
import { ExternalLink } from 'react-external-link';

const Home = () => {

  const [inital, setInital] = useState([]);
  const isM_Or_L = useMediaQuery({
    query: '(min-width: 700px)'
  })

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
      console.log(data.articles[0].description.length)
    } catch (error) {
      console.log(error);
    }
 
  }
  
  const textStyle = {
      textAlign:"justify",
      marginRight:"15px",
      marginLeft:isM_Or_L ? false :"15px"
  }

  useEffect(() => {
    exapleData();
  }, [])

  return (
    <>

      <div>
        {inital.map((ite) => (
          <>

            <div className="container  py-3">
              <div className="card shadow-lg  " style={{
                borderRadius:"15px"
              }}>
                <div className="row">
                  <div className="col-sm-5">
                    <img
                      className="d-block   w-100"
                      src={ite.urlToImage}
                      alt={ite.urlToImage}
                      style={{
                        height:isM_Or_L? "250px":"200px",
                        borderRadius:isM_Or_L ?  "15px 0px 0px 15px" : "15px 15px 0px 0px"
                    
                      }}

                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null; 
                        currentTarget.src="https://wallpaperaccess.com/full/520148.jpg";
                      }}
                    />
                  </div>
                  <div className="col-sm-7">
                    <div className="card-block">
                      <div style={textStyle} > 
                      <h6 className="card-title mt-2 "  >{ite.title}</h6> 
                      <hr />
                      </div>
                      <p className='mt-2' style={textStyle} > { ite.description }</p>

                      <br />
                      <ExternalLink href={ite.url} className="btn btn-primary mb-3 btn-sm  " >
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