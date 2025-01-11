import React from 'react'
import "./about.css"
import Heroimg from "../../assets/messi1.jpg"
import Footer from '../../Components/Footer/Footer'

const About = () => {
  return (
    <div>
      <div className='main-content'>
        <div className='hero-div'>
          <img className='hero-img' src={Heroimg} alt='' />
        </div>

        <div className='about-div'>
          <div className='aboutins'>
            <h1 className='about-head'>About Us</h1>
          </div>

          <div className="aboutpara-div">
            <p className='about-para'>
              Sports Sphere is a comprehensive platform created with athletes
              and sports enthusiasts in mind. Founded by a group of
               peoples, we saw an opportunity to enhance
              the way sports teams and players manage their activities. In our
              communities, we noticed the challenges teams face with
              coordination and communication, leading to inefficiencies and
              missed opportunities.
            </p>
    <br />
            <p className="about-para">
              With these challenges in mind, we, along with countless others,
              experienced the frustrations of outdated management systems,
              scattered communication, and a lack of centralized tools.
            </p>
<br />
            <p className="about-para">
              Sports Sphere was designed to address these issues by offering a
              secure, intuitive platform that fosters seamless coordination,
              improves communication, and brings everything a team needs under
              one roof. Our mission is to empower teams to focus on their
              performance, knowing that their management needs are in capable
              hands
            </p>
          </div>
        </div>
        
      <Footer />
      </div>
    </div>
  )
}

export default About