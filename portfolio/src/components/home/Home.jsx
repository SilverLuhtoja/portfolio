import React from 'react';
import Contact from "../contact/Contact";
import Intro from "../intro/Intro";
import Portfolio from "../portfolio/Portfolio";
import Navbar from "../navbar/Navbar";
import Works from "../works/Works";
// import IntroScreen from "./components/introScreen/IntroScreen";
// import About from "./components/about/About";
import Testimonials from "../testimonials/Testimonials";
import { useEffect, useState} from "react"

function Home() {
  const [ menuOpen, setMenuOpen] = useState(false)
  const [ intro, setIntro] = useState(false)
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
    setTimeout(()=>{
      setIntro(!intro)
    },5000)


    return () => window.removeEventListener('scroll', handleScroll)
  },[])


  return (
    <div className='home'>
        <Navbar menuOpen= {menuOpen}  setMenuOpen ={setMenuOpen}/>
        <div className={"sections " + (menuOpen && "active")}>
          <Intro />
          <Portfolio />
          <Works />
          <Testimonials />
          <Contact />
        </div> 
    </div>
  )
}

export default Home