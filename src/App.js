import React, { useEffect, useState } from "react"; 
 
import MainComponets from "./Components/MainComponets";
import Spinner from "./Spinners";
  
//  https://api.nasa.gov/planetary/apod?api_key=mrhh2R9IjDc8S1kU8oNN44UoHiqQtXqjkpbIwE5H

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },  5000);
  }, [ ])
  

   
  return (
     <> 
       <div   >
        
       {loading ? <Spinner/> : <MainComponets/>}
      {/* //  <Routes>
 
      //   <Route path="/" element={<Navbar />}>
      //     <Route index element={<Home />} />
      //     <Route path="about" element={<About />} />
      //     <Route path="category" element={<Category />} />
      //     <Route path="*" element={<NoPage />} />
      //   </Route>
      // </Routes> */}
       </div>
        
       </>
  );
}
 
 