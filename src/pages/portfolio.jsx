import React, { useEffect, useRef } from "react";
import "./portfolio.css";

export default function Portfolio() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    section.classList.add("show");
  }, []);

  return (
    <section className="portfolio-section" ref={sectionRef}>
      <h2 className="portfolio-title-top">Our</h2>
      <h1 className="portfolio-title-main">Portfolio</h1>
      <p className="portfolio-desc">
        Explore our diverse range of successful projects spanning web development,
        mobile applications, UI/UX design, and digital marketing campaigns.
      </p>
    </section>
  );
}