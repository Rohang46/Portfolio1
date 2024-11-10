import React from "react";
import bankveseImage from '../../assets/bankvese.jpg';

export default function Project2(props) {
  return (
    <>
      <div className="padding-part" style={{ padding: '0px' }}>
        <div aria-label="project-link" className="project-img-wrap" style={{ width: '100%' }}>
          <img
            src={bankveseImage}
            alt="Bankvese"
            className="image-mockup-project"
            style={{ marginBottom: '5px' }}
          />
        </div>

        <div className="project-card-title">
          <div className="tag-flex">
            <div className="tag-item-wrapper">
              <div className="subtitle-projects">NextJs</div>
            </div>
            <div className="tag-item-wrapper">
              <div className="subtitle-projects">Tailwind</div>
            </div>
            <div className="tag-item-wrapper">
              <div className="subtitle-projects">TypeScript</div>
            </div>
            <div className="tag-item-wrapper">
              <div className="subtitle-projects">Appwrite</div>
            </div>
            <div className="tag-item-wrapper">
              <div className="subtitle-projects">Responsive</div>
            </div>
          </div>
        </div>

        <div className="projects-card-heading" style={{ marginTop: '5px' }}>
          <div aria-label="project-link" className={`tag-title ${props.anime}`}>
            <div className="projects-card-title">
              {props.Project || 'Bankverse: The Banking Application'}
            </div>
          </div>
          <div className="project-links">
            <a href="https://banking-jet.vercel.app/" target="_blank" rel="noopener noreferrer">
               Demo
            </a>
            <br />
            <a href="https://github.com/Rohang46/Bank-verse" target="_blank" rel="noopener noreferrer">
             Code
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
