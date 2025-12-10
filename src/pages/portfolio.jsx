import React, { useEffect, useRef } from "react";
import "./portfolio.css";
import {MoveRight} from "lucide-react";

/* images import*/
import img1 from "../assets/Portfolioimg1.jpg"
import img2 from "../assets/Portfolioimg2.jpeg"
import img3 from "../assets/Portfolioimg3.jpg"
import img4 from "../assets/Portfolioimag4.jpeg";
import img5 from "../assets/Portfolioimag5.jpeg";
import img6 from "../assets/Portfolioimag6.jpeg";
import linkIcon from "../assets/open-link-svgrepo-com.svg";

/* cards props function */
const cards = [
    {
        company : "SECUREBANK INC.",
        title: "FinTech Banking App",
        desc: " Modern moblie banking solutions with advanced security features and intuitive user interface.",
        tags: ["MOBILE APP", "UI/UX DESIGN"],
        bgColor: "#f591d4ff",
        image: img1 
    },
    {
        company : "SHOPFLOW",
        title: "E-Commerce Platform",
        desc: "Scalable online marketplace with real-time inventory management and seamless checkout experience. ",
        tags: ["WEB DEVELOPMENT", "DIGITAL MARKETING"],
        bgColor: "#91c8f5ff",
        image: img2
    },
    {
        company : "TECHSTART INC.",
        title: "Brand Identity System",
        desc: "Comprehensive brand identity including logo design, typography, and brand guidelines. ",
        tags: ["BRAND DESIGN", "UI/UX DESIGN"],
        bgColor: "#f7f58eff",
        image: img3
    },
    {
        company : "DATAFLOW SYSTEMS",
        title: "SaaS Dashboard",
        desc: " Analytics dashboard with real-time data visualization and customizable widgets.",
        tags: ["WEB DEVELOPMENT", "UI/UX DESIGN"],
        bgColor: "#d291f5",
        image: img4
    },
    {
        company : "FITLIFE PRO",
        title: "Fitness Tracking App",
        desc: " Health and fitness moblie app with workout plans, nutrition tracking, and progress analytics.",
        tags: ["MOBILE APP", "UI/UX DESIGN"],
        bgColor: "#92e5b0",
        image: img5
    },
    {
        company : "CREATIVE STUDIO",
        title: "Creating Portolio Site",
        desc: " Stunning portfolio website showcasing design work with smooth animations and interactive elements.",
        tags: ["WEB DEVELOPMENT", "BRAND DESIGN"],
        bgColor: "#9bb9ff",
        image: img6
    }
];



export default function PortfolioCards() {
  const sectionRef = useRef(null);
  const ctaSectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current
    if (section) {
        section.classList.add("show");
    }
  }, []);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target); // trigger once
                }
            },
            { threshold: 0.3 } // trigger when 30% visible
        );

        if (ctaSectionRef.current) {
            observer.observe(ctaSectionRef.current);
        }

        return () => observer.disconnect();

} , []);







  return (
    <>
    <section className="portfolio-section" ref={sectionRef}>
      <h2 className="portfolio-title-top">Our</h2>
      <h1 className="portfolio-title-main">Portfolio</h1>
      <p className="portfolio-desc">
        Explore our diverse range of successful projects spanning web development,
        mobile applications, UI/UX design, and digital marketing campaigns.
      </p>
    </section>
    
    
        {/*Cards */}
         <div className='cards-container'>
            {cards.map((card,index) => (
                <div className='card' key={index} style={{backgroundColor: card.bgColor}}>
                    <img src={card.image} className='Image-card'/>
                    <a href="#"><img src={linkIcon} className='open-link-icon' /></a>

                    <div className='card-content'>
                        <p className='company'>{card.company}</p>
                        <h2 className='title'>{card.title}</h2>
                        <p className='desc'>{card.desc}</p>

                        <div className='tags'>
                            {card.tags.map((tag,i) => (
                                <span className='tag' key={i}>
                                    {tag}
                                </span>
                            ))}
                        </div>

                    </div>
                </div>
            ))}
         </div>

          <section className='cta-section' ref={ctaSectionRef}>
             <h2 className='cta-title'>Have a Project in Mind?</h2>

             <p className='cta-sub'>
                Let's discuss how we can help bring your vision to life with our expertise and <br />creativity.
             </p>
             <a href="#contact"><button className='cta-btn'>START YOUR PROJECT</button></a>

           </section>   
        </>


  );
}