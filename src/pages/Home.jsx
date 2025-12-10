import React from 'react'
import './Home.css'
import {MoveRight} from "lucide-react";

const Home=()=>{

  
{/* Project Card Data part 3*/}
const projectData =[  
  {
    id: 1,
    image:"https://plus.unsplash.com/premium_vector-1728586228956-80feaf3595ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RmludGVjaCUyMEJhbmtpbmclMjBBcHB8ZW58MHx8MHx8fDA%3D",
    projectTitle: "Fintech Banking App",
    projectDesc: "Scalable online banking platform with real-time transaction tracking and seamless user experience.",
    tags: ["Mobile App", "UI/UX Design"]
 
  },
  {
    id: 2,
   image:"https://plus.unsplash.com/premium_vector-1719829071159-66b351c8f2d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGUtY29tbWVyY2UlMjBhcHB8ZW58MHx8MHx8fDA%3D",
    projectTitle: "E-Commerce",
    projectDesc: "Scalable online marketplace with real inventory management and effortless checkout user experience.",
    tags: ["Website", "E-Commerce"]
  
  },
  {
    id: 3,
    image: "https://plus.unsplash.com/premium_vector-1746986943200-d519e35e50c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudCUyMG9yZGVyaW5nJTIwc3lzdGVtfGVufDB8fDB8fHww",
    projectTitle: "Restaurant Order System",
    projectDesc:"Complete digita ordering platform with menu management, live order updates and customer feedback.",
    tags: ["Industry-Level", "Web App"]
  }
];

{/* Service Card Data part 2*/}
const serviceData= [ 
    {
    id:1,
    title: "Web Development",
    desc: "We develop responsive,scalable websites tailored to your brand,smooth performance,and measurable digital impact across all platforms.",
    img: "https://plus.unsplash.com/premium_vector-1734127305210-f2425c1d614f?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // sample placeholder
    tag1: "Frontend",
    tag2: "Backend",
    tag3: "Fast APi"
    },
    {
    id:2,
    title: "Mobile App Development",
    desc: "We build native and cross-platform mobile solutions crafted to engage users, ensure fluid interactions,high-performance experiences.",
    img: "https://plus.unsplash.com/premium_photo-1721080251127-76315300cc5c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    tag1: "IOS",
    tag2: "ANDROID",
    tag3: "REACT NATIVE"
    },
    {
    id:3,
    title: "UI/UX",
    desc: "We design intuitive,creating engaging, memorable experiences that elevate your brand across platforms.",
    img: "https://plus.unsplash.com/premium_photo-1720903984909-04be5b4cda06?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    tag1: "Figma",
    tag2: "Adobe XD",
    tag3: "Prototyping"
    },
    {
    id:4,
    title: "Digital Marketing",
    desc: "We execute strategic,built to expand your brand’s reach,enhance visibility,and generate consistent,measurable long-term business growth.",
    img: "https://plus.unsplash.com/premium_vector-1682309081920-d2725d3e620c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    tag1: "SEO",
    tag2: "Meta Ads",
    tag3: "Google Ads"
}]


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

    <section className="part4">  
      <div className="pst4"> 
        <h2>Ready to Start Your <br/><span>Digital Journey?</span></h2>
        <p>Let's collaborate to bring your vision to life with innovative digital solutions</p>
      </div>
      <div className="ptbtn4">
        <a href="./contact"> GET IN TOUCH  </a>
        <MoveRight size={25} />
        </div>


    </section>
  </div>
  )
}
export default Home