import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive'

import "./Page.css"
import { ExternalLink } from 'react-external-link';

const Home = () => {

  const [inital, setInital] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isM_Or_L = useMediaQuery({
    query: '(min-width: 700px)'
  })



  const exapleData = async () => {
    try {
      const  url = "https://blogs-data.onrender.com/news/world"

       

      const result = await fetch(url)
      const data = await result.json();

      setInital(data)
      setLoading(false);
       

    } catch (error) {
      setError(error);
      setLoading(false);
      console.log(error);
    }

  }

  const textStyle = {
    textAlign: "justify",
    marginRight: "15px",
    marginLeft: isM_Or_L ? false : "15px"
  }



  useEffect(() => {
    exapleData();
  })


  if (loading) return 'Loading...';
  if (error) return 'Error!';

  return (
    
    <> 
      <div>
        {inital.map((item) => {

        return (

        
          <>

            <div className="container  py-3" key={item.title}>
              <div className="card shadow elementHover  " style={{
                borderRadius: "15px",
                backgroundColor: "#eeeeee"
              }}    >
                <div className="row">
                  <div className="col-sm-4">
                    <img
                      className="d-block   w-100"
                      src={item.imageUrl }
                      alt={item.title}
                      style={{
                        height: isM_Or_L ? "100%" : "200px",
                        borderRadius: isM_Or_L ? "15px 0px 0px 15px" : "15px 15px 0px 0px"

                      }}


                    />
                  </div>
                  <div className="col-sm-8">
                    <div className="card-block">
                      <div style={textStyle} >
                        <h6 className="card-title mt-2 "  >{item.title.replace(/\s+/g, ' ').trim() }</h6>
                        <hr />
                      </div>
                      <p style={textStyle} > {item.description ? item.description.substring(0, 100):"description not " } ..</p>


                      <br />
                      <ExternalLink href={item.link} className="btn btn-primary mb-4 btn-sm  " >
                        <span>Visit the site</span>
                      </ExternalLink>

                    </div>
                  </div>
                </div>
              </div>
            </div>



          </>
          )}
        )}
      </div>


    </>
  )
}




export default Home