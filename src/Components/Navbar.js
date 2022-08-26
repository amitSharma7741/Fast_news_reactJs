import "./Navbar.css"
import React, { useEffect, useState } from 'react'
import { FaAngleUp } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa';
const Navbar = () => {

  const [dim, setDim] = useState([]);

  const dataChange = async () => {
    const resul = await fetch("https://api.coincap.io/v2/assets/");
    const data = await resul.json();
    setDim(data.data);
  };
  useEffect(() => {
    dataChange();
  });





  return (
    <>
      <div className="App">

        <div className="price-container">
          <div className="price-box">
            {dim.map((ite ) => (
              <>
                <div className="box-styling" key = {ite.rank}>

                  <span className="text-uppercase d-flex" style={{ textAlign: "justify" }}> {ite.symbol} </span>
                  <span className="price-span"> {ite.priceUsd.slice(0, 8)} </span>

                  <span className="up-down"> 
                  {ite.changePercent24Hr.slice(0, 1) === "-"  ? <FaAngleDown style={{ color: "red"}}/> : <FaAngleUp style={{ color: "green" }} />}
                  </span>
                  <b>
                  <span style={{color:ite.changePercent24Hr.slice(0,1) ==="-" ? "red":"green" }}>
                  {ite.changePercent24Hr.slice(0,1) ==="-" ? ite.changePercent24Hr.slice(1,5) : ite.changePercent24Hr.slice(0,5) }%
                  </span></b>

                  <div style={{ border: "2px solid ", height: "20px" }}></div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}




export default Navbar