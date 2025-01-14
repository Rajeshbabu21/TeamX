import React from 'react'
import "./home.css"
import Footer from '../../Components/Footer/Footer'
import Img from "../../assets/poster.jpg"
import Sid from  "../../assets/sid.jpg"


import { useNavigate } from 'react-router-dom' // Step 1

const Home = () => {

   const navigate = useNavigate() // Step 2

   const handleNavigation = () => {
     navigate('/Findteam') // Step 3: Navigate to the home page

   }

   const handleCreate = () => {
     navigate('/Create') // Step 3: Navigate to the home page
   }

   const handleSchedule = () => {
     navigate('/Schedule') // Step 3: Navigate to the home page
   }

  return (
    <div className='home'>
      <div className='main-content'>
        <div className='poster'>
          <img src={Img} alt='' className='posterimg' />
        </div>
        <div className='headingteam'>
          <div className='headingteam1'>
            <h2>Join TeamX Today and elevate your sports experience!</h2>
          </div>
          <h1>TeamX</h1>
        </div>

        <div className='contdiv'>
          <div className='left'>
            <h2>How It Works ? </h2>
            <p>
              1 ) Sign Up & Get Started: Create your TeamX account using your
              email or social login to join your sports community.
            </p>

            <p>
              2 ) Create or Join a Team: Set up your team with ease or browse
              through existing teams to find the perfect fit.
            </p>

            <p>
              3 ) Manage & Connect: Keep track of schedules, send messages, and
              stay updated with real-time notifications.
            </p>

            <p>
              4 ) Compete & Collaborate: Participate in events, share updates,
              and celebrate achievements as a team.
            </p>
          </div>
          <div className='right'>
            <div className='divright'>
              <img src={Sid} alt='' />
            </div>
          </div>
        </div>

        <div>
          <h1 className='dashhead'>Experience TeamX</h1>
        </div>

        <div className='expcard'>
          <div class='card'>
            <div class='head'>
              <h2 className='window'>CREATE TEAM</h2>
            </div>
            <div class='content'>
              Build your team profile, add members, and set up roles with ease.
              <br />
              <button class='button' onClick={handleCreate}>
                Go
              </button>
            </div>
          </div>

          <div class='card'>
            <div class='head'>
              <h2 className='window'>FIND TEAM</h2>
            </div>
            <div class='content'>
              Explore a wide range of sports teams tailored to your interests
              and skill level.
              <br />
              <button class='button' onClick={handleNavigation}>
                Go
              </button>
            </div>
          </div>

          <div class='card'>
            <div class='head'>
              <h2 className='window'>SCHEDULE</h2>
            </div>
            <div class='content'>
              Set up practices, games, and team events with just a few clicks.
              <br />
              <button class='button' onClick={handleSchedule}>
                Go
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home