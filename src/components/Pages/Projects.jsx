import React, { useEffect } from "react";
import Sidebar from "../utilities/Sidebar";
import Project2 from "../Projects/Project2"; // Import Project2
import Project3 from "../Projects/Project3"; // Import Project3
import Project4 from "../Projects/Project4"; // Import Project4
import Project5 from "../Projects/Project5"; // Import Project5
import Footer from "../utilities/footer";
import Navbar from "../utilities/Navbar";

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top onload
  }, []);

  return (
    <>
      <div className="project-page">
        <Sidebar />
        <Navbar />
        <div>
          <h2 className="projects-page-heading">All Projects</h2>
        </div>

        <div className="card-container projectpage-card-container">
          {/* Project 3: Jarvis */}
          <div className="card-wrapper project-page-card">
            <div className="card-content" style={{ padding: "2rem 2rem 1.5rem" }}>
              <Project3
                image="path/to/jarvis.jpg"
                Project="Jarvis: Voice Assistant"
                tags={['NextJs', 'Tailwind', 'TypeScript', 'Microsoft Azure', 'Interactive']}
                liveLink="https://jarvis-demo.vercel.app/"
                codeLink="https://github.com/Rohang46/Jarvis"
                anime="true"
              />
            </div>
          </div>

          {/* Project 2: Bankverse */}
          <div className="card-wrapper project-page-card">
            <div className="card-content" style={{ padding: "2rem 2rem 1.5rem" }}>
              <Project2
                image="path/to/bankverse.jpg"
                Project="Bankverse: The Banking Application"
                tags={['NextJs', 'Tailwind', 'TypeScript', 'Appwrite', 'Responsive']}
                liveLink="https://banking-jet.vercel.app/"
                codeLink="https://github.com/Rohang46/Bank-verse"
                anime="true"
              />
            </div>
          </div>

          {/* Project 4: Chess-Wizard */}
          <div className="card-wrapper project-page-card">
            <div className="card-content" style={{ padding: "2rem 2rem 1.5rem" }}>
              <Project4
                image="path/to/chess-wizard.jpg"
                Project="Chess-Wizard: Multiplayer Chess App"
                tags={['React', 'MongoDB', 'ExpressJS', 'NodeJS', 'WebSockets']}
                liveLink="https://chess-wizard-demo.vercel.app/"
                codeLink="https://github.com/Rohang46/Chess-Wizard"
                anime="true"
              />
            </div>
          </div>

          {/* Project 5: NetflixGPT */}
          <div className="card-wrapper project-page-card">
            <div className="card-content" style={{ padding: "2rem 2rem 1.5rem" }}>
              <Project5
                image="path/to/netflix-gpt.jpg"
                Project="NetflixGPT: Movie Discovery App"
                tags={['React', 'Redux', 'Tailwind']}
                liveLink="https://netfilxgpt46.netlify.app"
                codeLink="https://github.com/Rohang46/NetfilxGpt"
                anime="true"
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
