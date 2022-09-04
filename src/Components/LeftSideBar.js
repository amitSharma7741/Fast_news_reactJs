import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link,Outlet  } from 'react-router-dom'
import "./LeftBar.css"



const data = [
  {
    id: 1,
    name: "Home",
    to: "/",
    target:"_self"
  },
  {
    id: 2,
    name: "World",
    to: "/about",
    target:"_self"
  },
  {
    id: 3,
    name: "Entertainment",
    to: "/category",
    target:"_self"
  },
  {
    id: 4,
    name: "blog", 
    to: "/blog",
    target:"_blank"
  },
  { id: 5, 
    name: "Market", 
    to: "/market",
    target:"_blank" 
  }
]
const LeftSideBar = () => {
  const isM_Or_L = useMediaQuery({
    query: '(min-width: 700px)'
  })
  return (
    <>
      <div>{isM_Or_L ? <Laptop /> : <Mobile />} </div>
     
    </>
  )
}

const Mobile = () => {
  return (
    <>
      <div className="scrollmenu">
       
        {data.map((item) => {
          return (
            <Link to={item.to} key={item.id}>
              <div>
                <p>{item.name}</p> 
              </div>
            </Link>
          )
        }
        )}
          {/*  < a href=" /">Home</a>
          <a href=" /">News</a>
          <a href="  /">Contact</a>
          <a href=" /">About</a>
          <a href=" /">Support</a>
          <a href=" /">Blog</a>
          <a href=" /">Tools</a>
          <a href=" /">Base</a>
          <a href=" /">Custom</a>
          <a href=" /">More</a>
          <a href=" /">Logo</a>
          <a href=" /">Friends</a>
          <a href=" /">Partners</a>
          <a href=" /">People</a>
          <a href="/">Work</a> */}
       
     

      </div>
      <Outlet />
    </>
  )
}

const Laptop = () => {
  return (
    <>
      <div className="mt-3">
        <ul className="d10059eb ">
           {data.map((item) => {
            return (
              <li>
                <Link to={item.to}  key={item.id} target={item.target} >
                  <span>  
                  {item.name}
                  </span>
                  </Link>
              </li>
            )
          })}   
      {/*     <li><Link to="/">Home</Link></li>
           <li><Link to="/about">World</Link></li>
          <li><Link to="/category">Entertainement</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/market">Market</Link></li>    */}  
        </ul>

      </div>
      <Outlet />
    </>
  )
}
export default LeftSideBar