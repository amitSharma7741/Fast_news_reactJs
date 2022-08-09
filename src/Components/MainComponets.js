 import React from 'react'
import DeliveredComponents from './DeliveredComponents'
import Navbar from './Navbar'
 
 const MainComponets = () => {
   return (
      <>
      <Navbar/>
      <div >
        { <DeliveredComponents/> }
      </div>
     

      </> 
   )
 }
 
 export default MainComponets