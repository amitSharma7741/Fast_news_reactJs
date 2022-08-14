import React from 'react'
import { useEffect, useState } from "react"

import { useMediaQuery } from 'react-responsive'
import "../LeftBar.css"  
import { FaMedapps } from 'react-icons/fa';
import { FaPuzzlePiece } from 'react-icons/fa';

const Puzzle  = () => {

  const [inital, setInital] = useState("Capital of india")

  const [ans, setAns] = useState("Delhi")
 
  

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

    }, 50000);
  });





  return (
    <>

  
      <div className="container   quiz green" style={{
        width: isM_Or_L ? "530px" : "100%"
      }} >
        <div className="quiz__question" style={{
          height: isM_Or_L ? "350px" : "400px"
        }} >
          <img
            src="https://source.unsplash.com/300x200/?puzzle"
            alt="https://source.unsplash.com/300x200/?puzzle"
            
          />
          <h1  > 
            <span>
              <FaPuzzlePiece aria-hidden="true" /> Question of the day  
            </span> <b> {inital}</b>
          </h1>
        </div>
        <div className="quiz__answer" style={{
          height: isM_Or_L ? "350px" : "400px"
        }}  >
          <img
            src="https://source.unsplash.com/300x200/?beach"
            alt="https://source.unsplash.com/300x200/?beach"
            style={{
              width: isM_Or_L ? "530px" : "100%"
            }}
          />
          <h1>
            <span>
              <FaMedapps aria-hidden="true" /> Answer
            </span> {ans}
          </h1>
        </div>
      </div>

 
    </>
  )
}

export default Puzzle 