import './portfolioWork.scss'
import { portfolioData} from "./work_data.js"
import {useParams, useNavigate} from 'react-router-dom'
import { useState} from 'react'

function PortfolioWork() {
   let navigate = useNavigate();


  const [currentSlide, setCurrentSlide] = useState(0)
  let {id}  = useParams();
  id = id -1 
  return (
    <div className='portfolio-work'>
      <button className='back_btn' onClick={()=> {navigate("/")}}>X</button>
      <div className='work-wrapper'>
           <h1>{portfolioData[id].title}</h1>
            <div className="bottom-box">
              <div className="left flex">
                <div className="image-container">
                  <img src={portfolioData[id].content[currentSlide].image} alt="sds" />
                </div>
                <div className="image-buttons ">
                  {portfolioData[id].content.map(content => (
                      <div className={`single-button ${content.slide === currentSlide ? "active" : ""}`}  onClick={()=> setCurrentSlide(content.slide)}></div>
                  ))}
                </div>
              </div>
              <div className="right">
                <h3>{portfolioData[id].content[currentSlide].descriptionTitle}</h3>
                <p>{portfolioData[id].content[currentSlide].description}</p>
              </div>
          </div> 
      </div>
    </div>
  )
}

export default PortfolioWork


  //Want to make dragable scroll on image
  // let pos = { top: 0, left: 0, x: 0, y: 0 };
  // const mouseDownHandler = function (e) {
  //   pos = {
  //       // The current scroll
  //       left: ele.scrollLeft,
  //       top: ele.scrollTop,
  //       // Get the current mouse position
  //       x: e.clientX,
  //       y: e.clientY,
  //   };

  //   document.addEventListener('mousemove', mouseMoveHandler);
  //   document.addEventListener('mouseup', mouseUpHandler);
  // };
