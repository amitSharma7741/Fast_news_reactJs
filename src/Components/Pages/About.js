import React, { useEffect, useState } from 'react'; 
import { useMediaQuery } from 'react-responsive'
 
import "./Page.css" 
import { ExternalLink } from 'react-external-link';

const About = () => {

  const [inital, setInital] = useState([]);
  
  
  const isM_Or_L = useMediaQuery({
    query: '(min-width: 700px)'
  })
 
  // "publishedAt": "2022-08-10T14:31:00Z",
  // const currentDate = new Date();
  // const currentHours = currentDate.getHours() +24;
   
  
  const exapleData = async () => {
    try {
      const sourav_url = "https://inshorts.deta.dev/news?category=hatke"
      //  results => title , published_at , slug
      
      const result = await fetch(sourav_url)
      const data = await result.json(); 
     
      setInital(data.data)
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
      

        { inital.map((ite) => (
          <>

            <div className="container  py-3" key = {ite.id}>
              <div className="card shadow elementHover  "  style={{
                borderRadius:"15px",
                backgroundColor:"#eeeeee"
              }}    >
                <div className="row">
                  <div className="col-sm-5"> 
                    <img 
                      className="d-block   w-100"
                      src=  {ite.imageUrl}
                      alt= {ite.imageUrl}
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
                      <h6 className="card-title mt-2 "  >{ite.title }</h6> 
                      <hr />
                      </div>
                      <p   style={textStyle} > { ite.content } ..</p>
{/*                       
                      <p> Last Update  {ite.publishedAt ? Math.abs(currentHours -  ite.publishedAt.slice(11,13)) :""} hours ago </p> */}

                      <br />
                      <ExternalLink href={ite.readMoreUrl} className="btn btn-primary mb-4 btn-sm  " >
                        <span>Visit the site</span>
                      </ExternalLink>
 
                    </div>
                  </div>
                </div>
              </div>
            </div>



          </>
        )) }
      </div>


    </>
  )
}


 

export default About