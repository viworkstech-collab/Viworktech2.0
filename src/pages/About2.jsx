import React, { useEffect, useRef } from "react";
import "./About2.css";

export default function ValuesTeam() {
  const sectionRef = useRef(null);

  const values = [
    {
      title: "Innovation",
      desc: "Pushing boundaries with cutting-edge technology",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill=" #f5b6d6">
          <path d="M12 2a7 7 0 0 0-4 12.7V19a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4.3A7 7 0 0 0 12 2z" />
        </svg>
      ),
    },
    {
      title: "Quality",
      desc: "Delivering excellence in every project",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill=" #f5b6d6">
          <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
        </svg>
      ),
    },
    {
      title: "Collaboration",
      desc: "Working together to achieve extraordinary results",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill=" #f5b6d6">
          <circle cx="7" cy="7" r="3" />
          <circle cx="17" cy="7" r="3" />
          <path d="M2 22v-2c0-3 3-6 6-6s6 3 6 6v2" />
        </svg>
      ),
    },
    {
      title: "Integrity",
      desc: "Building trust through transparent partnerships",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill=" #f5b6d6">
          <path d="M12 1l8 4v6c0 5-3.5 9.7-8 11-4.5-1.3-8-6-8-11V5l8-4z" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".value-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.setProperty("--delay", `${index * 0.25}s`);
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect(); // Cleanup observer to avoid memory leaks
  }, []);

  return (
    <div ref={sectionRef} className="values-wrapper">
      {/* Values Section */}
      <h2 className="section-title">Our Values</h2>
      <p className="section-subtitle">
        The principles that guide everything we do
      </p>

      <div className="values-grid">
        {values.map((v, i) => (
          <div className="value-card" key={i}>
            <div className="value-icon">{v.icon}</div>
            <h3 className="value-title">{v.title}</h3>
            <p className="value-desc">{v.desc}</p>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="team-section">
        <div className="team-img-box">
          <img src="/logo512.png" alt="Team working" className="team-img" />
        </div>

        <div className="team-text">
          <h2 className="team-title">Meet Our Team</h2>
          <p className="team-desc">
            We’re a team of young, energetic creators driven by a shared passion
            for building amazing digital experiences.
          </p>
          <p className="team-desc">
            With fresh ideas and innovative skills, we combine creativity and
            technology to achieve extraordinary results.
          </p>
        </div>
      </div>
    </div>
  );
}
