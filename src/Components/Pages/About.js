import React, { useEffect, useState } from 'react'; 
import { useMediaQuery } from 'react-responsive'
 
import "./Page.css" 
import { ExternalLink } from 'react-external-link';

const About = () => {

  const [inital, setInital] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const isM_Or_L = useMediaQuery({
    query: '(min-width: 700px)'
  })
 
   
  const exapleData = async () => {
    try {
      const sourav_url = "https://blogs-data.onrender.com/news/world"
      //  results => title , published_at , slug
      
      const result = await fetch(sourav_url)
      const data = await result.json(); 
     
      setInital(data)
      setLoading(false);

    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
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


  if (loading) return 'Loading...';
  if (error) return 'Error!';
  return (
    <> 

      <div>
      

        { inital.map((item) => {
          return (
          <>

            <div className="container  py-3" key = {item.title}>
              <div className="card shadow elementHover  "  style={{
                borderRadius:"15px",
                backgroundColor:"#eeeeee"
              }}    >
                <div className="row">
                  <div className="col-sm-5"> 
                    <img 
                      className="d-block   w-100"
                      src=  {item.imageUrl}
                      alt= {item.title}
                      style={{
                        height:isM_Or_L? "100%":"200px",
                        borderRadius:isM_Or_L ?  "15px 0px 0px 15px" : "15px 15px 0px 0px"
                    
                      }}

                      // onError={({ currentTarget }) => {
                      //   currentTarget.onerror = null; 
                      //   currentTarget.src="https://wallpaperaccess.com/full/520148.jpg";
                      // }}
                    />
                  </div>
                  <div className="col-sm-7"> 
                    <div className="card-block">
                      <div style={textStyle} > 
                      <h6 className="card-title mt-2 "  >{item.title }</h6> 
                      <hr />
                      </div>
                      <p   style={textStyle} > { item.description } ..</p>
{/*                       
                      <p> Last Update  {item.publishedAt ? Math.abs(currentHours -  item.publishedAt.slice(11,13)) :""} hours ago </p> */}

                      <br />
                      <ExternalLink href={item.link} className="btn btn-primary mb-4 btn-sm  " >
                        <span>Visit the sitem</span>
                      </ExternalLink>
 
                    </div>
                  </div>
                </div>
              </div>
            </div>



          </>
          )
}) }
      </div>


    </>
  )
}


 

export default About