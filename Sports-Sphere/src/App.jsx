import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "../src/Pages/Home/Home";
import Login from "../src/Pages/Login/Login";
import Signup from './Pages/Signup/Signup';
import About from './Pages/About/About';
import Navbar from './Components/Navbar';
// import Footer from './Components/Footer/Footer';
import Findteam from './Pages/Findteam/Findteam';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          {/* here we need to add the router meand all the page */}
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/About' element={<About />} />
          <Route path='/Findteam' element={<Findteam />} />
        </Routes>
      </Router>
      
      {/* <Footer/> */}

    </div>
  )
}

export default App