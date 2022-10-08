import React, { useEffect, useState } from "react"; 
import Loader from "./Components/Loaders/Loader";
 
import MainComponets from "./Components/MainComponets";
// import Spinner from "./Spinners";
  


export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },  4000);
  }, [ ])
  

   
  return (
     <> 
       <div   >
        
       {loading ? <Loader /> : <MainComponets/>}
      
       </div>
        
       </>
  );
}
 
 