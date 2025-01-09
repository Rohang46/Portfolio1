import React from "react";
import Content from "../utilities/Content.jsx";
import Sidebar from '../utilities/Sidebar.jsx';
import Footer from "../utilities/footer.jsx";
import Navbar from "../utilities/Navbar.jsx";
import CV from '../../assets/Rohan_oct_web.pdf'
import Tech from "../utilities/Tech.jsx";

export default function Homepage() {
  
      window.scrollTo(0,0); // to be scrolled to top onload

  return (
    <div className="homepage">

      <Sidebar anime="true"/>
      <Navbar />
      
      <div className="header-container">
        <div className="header-wrapper">
          <div className="headings">
            <h1>Hi,I'm Rohan Gaikwad </h1>
            <p>Full stack web developer </p>
          </div>
          <a className="cv-link" href={CV} download="Rohan-Resume">
            Download CV &gt;
          </a>
        </div>
      </div>
      
      <Content />
      <Tech />

      
      <Footer/>
    </div>
  );
}
