import React from 'react'
import { useEffect, useState } from "react"

import { useMediaQuery } from 'react-responsive'
import "./Little.css"
import { FaMedapps } from 'react-icons/fa';
import { FaPuzzlePiece } from 'react-icons/fa';

const Puzzle = () => {
  const quest = "At 8 AM, a clock ticks 8 times. The time between first and last ticks is 35 seconds. How long does it tick at 11 Noon ?"
  const [inital, setInital] = useState(quest)
  const newAns = "50 Seconds"

  const [ans, setAns] = useState(newAns)



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
        width: isM_Or_L ? "330px" : "100%"
      }} >
        <div className="quiz__question" style={{
          height: isM_Or_L ? "390px" : "400px"
        }} >
          <img
            src="https://source.unsplash.com/300x200/?sea"
            alt=" Puzzle"

          />
          <div className="card-img-overlay">
            <h2 className="mt-5">Click the Image to get the answer</h2>
          </div>
          <h1  >
            <span>
              <FaPuzzlePiece aria-hidden="true" /> Question of the day
            </span> <b> {inital}</b>
          </h1>
        </div>
        <div className="quiz__answer " style={{
          height: isM_Or_L ? "390px" : "400px"
        }}  >
          <img
            src="https://source.unsplash.com/300x200/?beach"
            alt="https://source.unsplash.com/300x200/?beach"
            style={{
              width: isM_Or_L ? "530px" : "100%"
            }}
          />
          {/* <div className="card-img-overlay">
            <button className='onClick'>Click me</button>
            </div>  */}
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