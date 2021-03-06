import "./intro.scss"
import {useEffect, useRef}  from 'react'
import { init } from "ityped"


function Intro() {
  
  const textRef = useRef()

  useEffect(()=>{
    console.log(textRef)
    init(textRef.current,{showCursor: true,strings:["Developer", "Designer", "Content Creator"],backDelay:1500,backSpeed:60})
  }, [])

  return (
    <div className="intro"  id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm </h2>
          <h1>Silver Luhtoja</h1>
          <h3>Freelance <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="down arrow" />
        </a>
      </div>
      


    </div>
  )
}

export default Intro