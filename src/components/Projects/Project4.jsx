import React from "react";
import chessWizardImage from '../../assets/chess-wizard.jpg'; // Make sure the image is correct

export default function Project4(props) {
  return (
    <>
      <div className="padding-part" style={{ padding: '0px' }}>
        <div aria-label="project-link" className="project-img-wrap" style={{ width: '100%' }}>
          <img
            src={chessWizardImage} // Dynamically use the image prop
            alt="Chess-Wizard"
            className="image-mockup-project"
            style={{ marginBottom: '5px' }}
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
              {props.Project || 'Chess-Wizard: Multiplayer Chess App'}
            </div>
          </div>
          <div className="project-links">
            <a href={props.liveLink} target="_blank" rel="noopener noreferrer">
               Demo
            </a>
            <a href={props.codeLink} target="_blank" rel="noopener noreferrer">
               Code
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
