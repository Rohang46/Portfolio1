import React from "react";
import jarvisImage from '../../assets/jarvis.jpg'; // Ensure the image is correctly imported

export default function Project3(props) {
  return (
    <>
      <div className="padding-part" style={{ padding: '0px' }}>
        <div aria-label="project-link" className="project-img-wrap" style={{ width: '100%' }}>
          <img
            src={jarvisImage} // Dynamically use the image prop
            alt={props.Project || 'Project'}
            className="image-mockup-project"
            style={{ marginBottom: '5px', width: '100%', height: 'auto' }} // Ensure consistent image size
          />
        </div>

        <div className="project-card-title">
          <div className="tag-flex">
            {props.tags?.map((tag, index) => (
              <div key={index} className="tag-item-wrapper">
                <div className="subtitle-projects">{tag}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="projects-card-heading" style={{ marginTop: '5px' }}>
          <div aria-label="project-link" className={`tag-title ${props.anime}`}>
            <div className="projects-card-title">
              {props.Project || 'Jarvis: Voice Assistant'}
            </div>
          </div>
          <div className="project-links">
            <a href={props.codeLink} target="_blank" rel="noopener noreferrer">
              Source Code
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
