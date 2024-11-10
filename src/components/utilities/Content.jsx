import React, { useEffect } from "react";

export default function Content() {
  const handleMouseMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect(); // Position of card
    const x = event.clientX - rect.left; // Mouse position relative to card
    const y = event.clientY - rect.top;

    const translateX = ((x / rect.width) - 0.5) * 7; // Translation effect on X-axis
    const translateY = ((y / rect.height) - 0.5) * 10; // Translation effect on Y-axis

    card.style.setProperty('--translateX', `${translateX}px`); // Card translation effect on hover
    card.style.setProperty('--translateY', `${translateY}px`);

    const lightX = (x / rect.width) * 100; // Light position effect on X-axis
    const lightY = (y / rect.height) * 100; // Light position effect on Y-axis

    card.style.setProperty('--lightX', `${lightX}%`); // Light effect on hover
    card.style.setProperty('--lightY', `${lightY}%`);
  };

  const handleMouseLeave = (event) => {     // Reset the translations and lights
    const card = event.currentTarget;
    card.style.setProperty('--translateX', `0`);
    card.style.setProperty('--translateY', `0`);
    card.style.setProperty('--lightX', `50%`);
    card.style.setProperty('--lightY', `50%`);
  };

  useEffect(() => {
    document.querySelectorAll('.card-wrapper').forEach(card => {      // To set light position of card on load
      card.style.setProperty('--lightX', `50%`);
      card.style.setProperty('--lightY', `50%`);
    });
  }, []);

  return (
    <div className="card-container">
      {/* About Me Section */}
      <div className="card-wrapper card3" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <div className="card-content about-me-card">
          <h2 className="card-title-big">About me</h2>
          <h2 className="card-title-small">
            Hi there! I’m Rohan Gaikwad, a proactive Web Developer with expertise in building scalable and interactive web applications using Node.js, MongoDB, React, and Redux. My strong engineering background enables me to tackle complex problems with precision and efficiency. I am constantly learning and evolving to meet new challenges and look forward to contributing to innovative web projects that make a meaningful impact in the tech industry.
          </h2>
        </div>
      </div>
    </div>
  );
}
