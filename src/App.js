import React from "react";
 
import MainComponets from "./Components/MainComponets";
  
//  https://api.nasa.gov/planetary/apod?api_key=mrhh2R9IjDc8S1kU8oNN44UoHiqQtXqjkpbIwE5H

export default function App() {
  return (
     <> 
       <div   >
        <MainComponets/>

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

// You can think of these components as "pages"
// in your app.
 