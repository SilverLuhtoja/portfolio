import Home from "./components/home/Home";
import PortfolioWork from "./components/portfolioWork/PortfolioWork";
import ErrorPage from './components/errorPage/ErrorPage'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import "./app.scss"
function App() {

  return (
    <div className="app ">
      <Router>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/portfolio/:id" element={<PortfolioWork  />}/>
            <Route path="/*" element={<ErrorPage />}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
