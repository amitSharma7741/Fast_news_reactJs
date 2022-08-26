import React from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader'; 

function Spinner() {
  return (
    <div style={{ 
    width:" 100px",
    height: "100px",
    // background-color: red;
    
    position:" absolute",
    top:0,
    bottom: 0,
    left: 0,
    right: 0,
    
    margin:" auto"
     }}>
      <PacmanLoader color="#52bfd9" size={70}/>
      <h1  style={{ color:"black", margin:"95px 0px 0px 30px" }}>loading.... </h1>
    </div>
   
  );
};

export default Spinner;