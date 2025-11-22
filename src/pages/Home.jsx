
import React from 'react'
import './Home.css'
import {MoveRight} from "lucide-react";

const Home=()=>{
  return(
    <div className="parent">
      <div className="part1"></div>
      <div className="part2"></div>

{/*Home page 3 part*/}
<section>
    <div className="part3">   
        <div className="pt3a">
         <h2> Featured Projects</h2>
         <p>Explore our latest work and success stories</p>
        </div>
        <div className="pt3b"> 
          {/* Home page 3 part Card Sections */}
          <div className='ptcard'>
            <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkUDX8bByxyAT642EGFsYTBWFWArt76KNy0A&s" />
            <h3>Fintech banking app</h3>
            <p> scable online makerting place with real inventroy management and seamless checkout experience</p>
            <div className="pt3tags">
              <h4>Mobile App</h4>
              <h4>UI/UX Design</h4>
            </div>
          </div>
          <div className='ptcard'>
            <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkUDX8bByxyAT642EGFsYTBWFWArt76KNy0A&s" />
            <h3>Fintech banking app</h3>
            <p> scable online makerting place with real inventroy management and seamless checkout experience</p>
            <div className="pt3tags">
              <h4>Mobile App</h4>
              <h4>UI/UX Design</h4>
            </div>
          </div>
          <div className='ptcard'>
            <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkUDX8bByxyAT642EGFsYTBWFWArt76KNy0A&s" />
            <h3>Fintech banking app</h3>
            <p> scable online makerting place with real inventroy management and seamless checkout experience</p>
            <div className="pt3tags">
              <h4>Mobile App</h4>
              <h4>UI/UX Design</h4>
            </div>
          </div>
          <div className='ptcard'>
            <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkUDX8bByxyAT642EGFsYTBWFWArt76KNy0A&s" />
            <h3>Fintech banking app</h3>
            <p> scable online makerting place with real inventroy management and seamless checkout experience</p>
            <div className="pt3tags">
              <h4>Mobile App</h4>
              <h4>UI/UX Design</h4>
            </div>
          </div>
        </div>
        <div className='ptcabtn'>
        <a href="./portfolio">VIEW All PROJECTS</a>
        <MoveRight size={25} />
        </div>
    </div>
</section>
{/*Home page 4 part*/}

    <div className="part4">  
      <div className="pst4"> 
        <h2>Ready to Start Your <br/><span>Digital Journey?</span></h2>
        <p>Let's collaborate to bring your vision to life with innovative digital solutions</p>
      </div>
      <div className="ptbtn4">
        <a href="./contact"> GET IN TOUCH  </a>
        <MoveRight size={25} />
      </div>
    </div>
   </div>
  )
}
export default Home