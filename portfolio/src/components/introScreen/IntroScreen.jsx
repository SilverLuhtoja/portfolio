import "./introScreen.scss"
import Particles from "react-tsparticles"
import {gsap} from "gsap"
 import {useRef, useEffect} from "react"


function StartingScreen() {
  let timeline = gsap.timeline()
  let logoItem =  useRef(null)
  useEffect(()=>{
    console.log(logoItem);
    timeline.to(logoItem,{
      delay:3,
      duration:3,
      scale:60,
      rotation:180,
      opacity:1,
    })

  }, [])
  return (
    <div className="introScreen">
      <Particles 
        options = {{
          background:{
            //  color : "#0e387a"
            color : "#000000"
          },
          fpsLimit: 60,
          interactivity:{
            detectsOn : "canvas",
            events:{
              resize:true
            },
          },
          particles:{
            color : {
              value: "9fafca"
            },
            number:{
              density: {
                enable:true,
                area:1080
              },
              limit: 0,
              value:400,
            },
            opacity:{
              animation: {
                enable:true,
                minimumValue:0.05,
                speed:1,
                sync:false,
              },
              random:{
                enable:true,
                minimumValue:0.05,
              },
              value: 2,
            },
            shape:{
              type:"circle",
            },
            move: {
              enable: true,
              speed: 0.05,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 1200 },
            },
            size:{
              random :{
                enable:true,
                minimumValue: 0.5,
              },
              value:1.5,
            }
          }
      }} />
      <h1 ref={el => {logoItem = el}}>S</h1>
    </div>
  )
}

export default StartingScreen