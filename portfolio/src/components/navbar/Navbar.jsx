import "./navbar.scss"
import {Person, Mail, LinkedIn} from "@material-ui/icons"

function Navbar({ menuOpen, setMenuOpen}) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      
        <div className={"show_nav flex " + (menuOpen && "active")} onClick={()=>setMenuOpen(!menuOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
        </div>

        <div className="info_wrapper">
          <div className="profile_img">
            <a href="#intro"><img src="https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg" alt="profile image" /></a>

            <p className="img_name">My Name</p>  
          </div>

          <div className="contact_info">
            <div className="item_container "> 
              <Person className="icon" />
              <span>+ 22 234 243 22 </span>
            </div>
            <div className="item_container ">
              <Mail className="icon" />
              <span>lasmdlsamd@mail.ee </span>
            </div>
            <div className="item_container ">
              <LinkedIn className="icon" />
              <span>LinkedIn/adsad//adcom </span>
            </div>
          </div>
        </div>

    
        <div className="wrapper flex">
            <p> <a href="#portfolio"> Portfolio </a></p>
            <p> <a href="#works"> My Work </a></p>
            <p> <a href="#testimonials"> Testimonials </a></p>
            <p> <a href="#about"> About Me</a></p>
            <p> <a href="#contact">Contacts</a></p>
            <p>Download Resume</p>
        </div>
      

    </div>

  )
}

export default Navbar