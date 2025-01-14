import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "../src/Pages/Home/Home";
import Login from "../src/Pages/Login/Login";
import Signup from './Pages/Signup/Signup';
import About from './Pages/About/About';
import Navbar from './Components/Navbar';
import Findteam from './Pages/Findteam/Findteam';
import Create from './Pages/Create/Create';
import Schedule from './Pages/Schedule/Schedule';

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
          <Route path='/Create' element={<Create />} />
          <Route path='/Schedule' element={<Schedule />} />
        </Routes>
      </Router>
      
      {/* <Footer/> */}

    </div>
  )
}

export default App