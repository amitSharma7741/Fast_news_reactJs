 
import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react'

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("")
  return (
    <>
       <nav className=" mt-3 ">
        <ul class="nav justify-content-center">
          <li class="nav-item ">
           
            {/* <Link className="nav-link  active text-black" aria-current="page" to="/">Home</Link> */}
            <TextItems Link="/" text="Home"  btnColor="black" textColor="white" 
            activeTab={activeTab}
            setActiveTab={setActiveTab} />
            
          </li>
          <li class="nav-item">
            {/* <Link className="nav-link text-black" to="/about">Something Different</Link> */}
            <TextItems Link="/about" text="World"  btnColor="black" textColor="white" 
            activeTab={activeTab}
            setActiveTab={setActiveTab} />
          </li>
          <li class="nav-item">
            {/* <Link className="nav-link text-black" to="/category">Entertainment</Link> */}
            <TextItems Link="/category" text="Entertainment"  btnColor="black" textColor="white" 
            activeTab={activeTab}
            setActiveTab={setActiveTab} />
          </li>

        </ul>
      </nav>  

      <Outlet />

       
 
    </>
  )
}

 
  

const TextItems = (props) => ( 
  <div style={{
      backgroundColor: props.activeTab === props.text ? "black" : "white", 
      paddingHorizontal: 16,
      paddingVertical: 6,
      borderRadius: 20
       
  }}
      onClick={() => props.setActiveTab(props.text)} 
  >

      <Link className='nav-link' style={{
          color: props.activeTab === props.text ? "white" : "black",
          fontWeight: 700,
          fontSize: 15
      }}  to= {props.Link}>{props.text} </Link>
  </div>


)
export default Navbar