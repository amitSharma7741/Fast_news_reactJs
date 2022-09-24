import React, { useEffect, useState } from "react"; 
 
import MainComponets from "./Components/MainComponets";
import Spinner from "./Spinners";
  


export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },  3000);
  }, [ ])
  

   
  return (
     <> 
       <div   >
        
       {loading ? <Spinner/> : <MainComponets/>}
      
       </div>
        
       </>
  );
}
 
 