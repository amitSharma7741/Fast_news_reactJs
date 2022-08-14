import React, { useEffect, useState } from 'react'; 
import { useMediaQuery } from 'react-responsive'
 
import "./Page.css" 
import { ExternalLink } from 'react-external-link';

const Home = () => {

  const [inital, setInital] = useState([]);
 
  const isM_Or_L = useMediaQuery({
    query: '(min-width: 700px)'
  })
  
   
  
  const exapleData = async () => {
    try {
      const sourav_url = "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json"

      // const api_key = process.env.REACT_APP_NEWS_API 
      // const news_url = ` https://newsapi.org/v2/top-headlines?country=us&apikey=${api_key}` 

      // const final_url = news_url ? news_url : sourav_url ; 

      // https://saurav.tech/NewsAPI/top-headlines/category/health/in.json
      // title description urlToImage
      // https://newsapi.org/v2/top-headlines?country=us&apiKey=66cc9417950f40308f24f5df54e1273f
       
      const result = await fetch(sourav_url)
      const data = await result.json(); 
    
      setInital(data.articles)
      // console.log(data.articles[0].description.length)
       
      // setTime(data.articles) 

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
  }, )

  return (
    <>

      <div>
        {inital.map((ite) => (
          <>

            <div className="container  py-3">
              <div className="card shadow elementHover  "  style={{
                borderRadius:"15px",
                backgroundColor:"#eeeeee"
              }}    >
                <div className="row">
                  <div className="col-sm-5"> 
                    <img
                      className="d-block   w-100"
                      src={ite.urlToImage ? ite.urlToImage:"https://userscontent2.emaze.com/images/029c3caf-415f-49dc-87c7-25784c9a3dd5/069a41887f72559753ef04f69ff54995.jpg"}
                      alt={ite.urlToImage}
                      style={{
                        height:isM_Or_L? "100%":"200px",
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
                      <h6 className="card-title mt-2 "  >{ite.title ? ite.title.slice(0,70):""}</h6> 
                      <hr />
                      </div>
                      <p   style={textStyle} > { ite.content ? ite.content.slice(0,100):"Description is not Avilable" } ..</p>
                      

                      <br />
                      <ExternalLink href={ite.url} className="btn btn-primary mb-4 btn-sm  " >
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


 

export default Home