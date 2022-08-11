import React from 'react'
import { useEffect, useState } from "react"
import { useMediaQuery } from 'react-responsive'
import "./LeftBar.css"

const LeftSideBar = () => {

  const [inital, setInital] = useState("")

  const [ans, setAns] = useState("")

  const isM_Or_L = useMediaQuery({
    query: '(min-width: 700px)'
  })

  const contentChange = async () => {
    const resul = await fetch("https://opentdb.com/api.php?amount=50&category=19");

    const data = await resul.json()
    const randVal = Math.floor(Math.random() * 50)

    setInital(data.results[randVal].question)
    setAns(data.results[randVal].correct_answer)


  }

  useEffect(() => {
    setTimeout(() => {
      contentChange()

    }, 10000);
  });





  return (
    <>


      {/* <div>{title}</div> */}
      {/* <div className="card" style={{ width: "18rem" }}>
  <img src=" https://wallpaperaccess.com/full/520148.jpg" className="card-img-top" alt={image} />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <a href="/" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div> */}







      {/* 
<div className="card   text-white">
  <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7eSiu7oaf19-wccPG2khL_JXpmAvCFQXWVXu9B-Bd&s" className="card-img" alt= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7eSiu7oaf19-wccPG2khL_JXpmAvCFQXWVXu9B-Bd&s" />
  <div className="card-img-overlay">
    <h5 className="card-title">Good things</h5>
    <p className="card-text" style={{
      fontSize:"12px"
    }}>
      Updating....
    </p>
    <p className="card-text">Last updated 3 mins ago</p>
  </div>
</div> */}

      <div className="  quiz green" style={{
        width: isM_Or_L ? "300px" : "100%"
      }} >
        <div className="quiz__question" style={{
          height: isM_Or_L ? "350px" : "400px"
        }} >
          <img
            src="https://s-media-cache-ak0.pinimg.com/originals/99/92/3a/99923ac775bd118ff9636ffe1e5f3793.png"
            alt="https://s-media-cache-ak0.pinimg.com/originals/99/92/3a/99923ac775bd118ff9636ffe1e5f3793.png"
            style={{
              width: isM_Or_L ? "300px" : "100%"
            }}
          />
          <h1>
            <span>
              <i className="fa fa-question-circle" aria-hidden="true" />
            </span>{inital}
          </h1>
        </div>
        <div className="quiz__answer" style={{
          height: isM_Or_L ? "350px" : "400px"
        }}  >
          <img
            src="https://source.unsplash.com/300x200/?beach"
            alt="https://source.unsplash.com/300x200/?beach"
            style={{
              width: isM_Or_L ? "300px" : "100%"
            }}
          />
          <h1>
            <span>
              <i className="fa fa-lightbulb-o" aria-hidden="true" />
            </span> {ans}
          </h1>
        </div>
      </div>






    </>
  )
}

export default LeftSideBar