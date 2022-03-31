import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList"
import {useEffect, useState} from 'react'
import { featuredPortfolio} from "../../data.js"

// import {  featuredPortfolio,
//           webPortfolio,
//           mobilePortfolio,
//           designPortfolio,
//           contentPortfolio} from "../../data.js"


function Portfolio() {

  const [selected,setSelected]  = useState("featured")
  const [data, setData] = useState ([])

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    // {
    //   id: "web",
    //   title: "Web App",
    // },
    // {
    //   id: "mobile",
    //   title: "Mobile App",
    // },
    // {
    //   id: "design",
    //   title: "Design",
    // },
    // {
    //   id: "content",
    //   title: "Content",
    // },
  ]


  useEffect(()=>{
    switch(selected){
      case "featured":
        setData(featuredPortfolio)
        break;
      // case "web":
      //   setData(webPortfolio)
      //   break;
      // case "mobile":
      //   setData(mobilePortfolio)
      //   break;
      // case "design":
      //   setData(designPortfolio)
      //   break;
      // case "content":
      //   setData(contentPortfolio)
      //   break;
      default:
        setData(featuredPortfolio)
        break;
    }

  },[selected])
  return (


    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map(item => (
          <PortfolioList id ={item.id} title={item.title} active={selected === item.id} setSelected={setSelected}/>
        ))}
      </ul>
      <div className="container">
        {data.map(item=>(
          <div className="item">
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
            <a href={"portfolio/"+ item.id}>LINK</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio