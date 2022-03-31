import "./works.scss"
import {useState} from 'react'


function Works() {

  const[currentSlide,setCurrentSlide] = useState(0)

  const data = [
    {
      id:"1",
      icon:"./assets/mobile.png",
      title: "Web Design",
      desc:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis laborum officia, minima modi repellat distinctio expedita excepturi aperiam autem architecto?",
      img:"https://cdn.dribbble.com/users/1387827/screenshots/15466426/media/deb2dca6762cd3610321c98bfccb0b72.png?compress=1&resize=1200x900",
    },
    {
      id:"2",
      icon:"./assets/globe.png",
      title: "Mobile Apllication",
      desc:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. expedita excepturi aperiam autem archit",
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU',
    },
    {
      id:"3",
      icon:"./assets/writing.png",
      title: "Branding",
      desc:
          "Lorem ipsum dolor, siritatis laborum officia, minima modi repellat distinctio expedita excepturi aperiam autem ar",
      img:"https://cocosolution.com/cmsAdmin/uploads/o_1e854e4rmgkn1igc6k5s77p9ra.jpg",
    },
  ]

  const handleClick = (way) => {
    way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :  
    setCurrentSlide(currentSlide < data.length - 1  ? currentSlide + 1 : 0)
  }

  return (
    <div className="works" id="works">
      <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
       { data.map(item => (
       <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={item.icon} alt="" />
                </div>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              <span>Projects</span>
              </div>
            </div>

            <div className="right">
              <img src={item.img} alt="" />
            </div>
          </div>
        </div>
        ))}
      </div>

        <img onClick={()=> handleClick("left")} src="assets/arrow.png" className="arrow left" alt="" />
        <img onClick={()=> handleClick()} src="assets/arrow.png" className="arrow right" alt="" />

    </div>
  )
}

export default Works