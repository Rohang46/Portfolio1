import React from "react";
import Sidebar from "../utilities/Sidebar";
import Footer from "../utilities/footer";
import AboutDiscription from '../utilities/About-discription'
import Timeline from "../utilities/Timeline";

import Navbar from "../utilities/Navbar";

export default function Aboutpage() {

    window.scrollTo(0,0); // to be scrolled to top onload

  return (
    <div className="aboutPage">
      <Sidebar />
      <Navbar />
      
      <AboutDiscription />
      <Timeline />
     
      <Footer />
    </div>
  );
}
