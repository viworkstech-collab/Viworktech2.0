import "./About.css"; // Import the CSS file
import React, { useEffect, useRef ,useState } from "react";
export default function StatsSection() {
  const stats = [
    { label: "Years Experience", value: 6 ,},
    { label: "Projects Completed", value: 245, },
    { label: "Happy Clients", value: 155, },
    { label: "Team Members", value: 12,},
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);

  // Count animation function
  const startCounting = () => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 500;
      const step = Math.ceil(end / (duration / 16));

      const counter = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = start;
          return updated;
        });
      }, 16);
    });
  };

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          startCounting();
        }
      },
      { threshold: 0.4 } // 40% of section visible → start
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasStarted]);
  return(
  <>

    <div className="content-container">
        {/* Heading */}
        <h2 id="about-heading" className="heading">
          About
        </h2>

        {/* Subheading */}
        <h1 className="subheading">Viworkstech</h1>

        {/* Description paragraph */}
        <p className="description">
          We are a team of passionate digital creators, developers, and
          strategists dedicated to transforming businesses through innovative
          technology solutions.
        </p>
      </div>

      {/* Mission & Vision Section */}
<section className="mission-vision-section">
  <div className="mv-card-mv-delay-1">
    <div className="mv-icon">🎯</div>
    <h2 className="mv-title">Our Mission</h2>
    <p className="mv-text">
    To empower businesses with innovative digital solutions that drive growth and create
    lasting impact in the digital landscape.
    </p>
  </div>


  <div className="mv-card-mv-delay-2">
  <div className="mv-icon">👁️</div>
  <h2 className="mv-title">Our Vision</h2>
  <p className="mv-text">
  We envision a world where every business, regardless of size, has access to world-class
  digital experiences that engage users and deliver measurable results.
  </p>
  </div>
</section>

<section className="stats-section" ref={sectionRef}>
      <div className="stats-container">
        {stats.map((stat, i) => (
          <div className="stat-card" key={i}>
            <h2 className="stat-number">{counts[i]}</h2>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>



  </>  
  )
}