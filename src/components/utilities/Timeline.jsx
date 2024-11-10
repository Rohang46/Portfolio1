import React from "react";

export default function Timeline() {
    return (
        <div>
            <section>
                <div className="timeline-wrapper">

                    <h1 className="timeline-heading ">
                    Timeline
                    <img src="../images/location_arrow.svg" alt="" />
                    </h1>

                    <div className="timeline-graph">
                    
                    <div className="timeline-card-container">
                        <span className="tail"></span>
                        <span className="dot"></span>
                        <div className="timeline-card  left">
                        <div className="timeline-card-content">
                            <h3>March,2019</h3>
                            <h4>Shri Chhatrapati Shivaji Vidyalaya, Shrigonda</h4>
                            <h5>Percentage: 83.60%</h5>
                        </div>
                        </div>
                    </div>
                    
                    <div className="timeline-card-container">
                        <span className="tail"></span>
                        <span className="dot"></span>
                        <div className="timeline-card right">
                        <div className="timeline-card-content">
                            <h3>March,2021</h3>
                            <h4>Vidya Pratishthans College, Baramati</h4>
                            <h5>Percentage: 91.17%</h5>
                        </div>
                        </div>
                    </div>

                    <div className="timeline-card-container">
                        <span className="tail"></span>
                        <span className="dot "></span>
                        <div className="timeline-card  left">
                        <div className="timeline-card-content">
                            <h3>March,2025</h3>
                            <h4> D.Y. Patil College of Engineering, Pune</h4>
                            <h5>CGPA: 8.15/10.0</h5>
                        </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </section>
        </div>
    );
}
