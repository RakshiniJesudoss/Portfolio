import React, { useState } from 'react'
import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.jpg";


const Works = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <div className="work_container container grid">
        <div className="work_card">
            <img src={Work1} alt="" className="work_img"/>
            <h3 className="work_title">Global Climate Change</h3>
            <span className="work_button" onClick={()=> toggleTab(1)}>
                More Info <i className="bx bx-right-arrow-alt work_button-icon"></i>
            </span>

            <div className={toggleState === 1 ? "project_info active-modal" : "project_info"}>
                <div className="project_info-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times project_info-close"></i>

                    <h3 className="project_info-title">Global Climate Change</h3>
                    <p className="project_info-description">
                    This project leverages Tableau and Excel to analyze global greenhouse gas emissions, identifying CO2 as the leading contributor. It highlights major emitting countries and industries, offering recommendations for reducing emissions by transitioning to renewable energy sources like wind and solar.
                    </p>

                    <ul className="project_info-services grid">
                        <li className="project_info-service grid">
                            <i className="uil uil-check-circle project_info-icon"></i>
                            <p className="project_info-details">Tableau for interactive data visualization and storytelling.</p>
                        </li>
                        <li className="project_info-service grid">
                            <i className="uil uil-check-circle project_info-icon"></i>
                            <p className="project_info-details">Excel for initial data cleaning and preprocessing.</p>
                        </li>
                        <li className="project_info-service grid">
                            <i className="uil uil-check-circle project_info-icon"></i>
                            <p className="project_info-details">Integration of datasets from Kaggle, EPA, and EIA.</p>
                        </li>
                        <li className="project_info-service grid">
                            <i className="uil uil-check-circle project_info-icon"></i>
                            <p className="project_info-details">Geospatial analysis to link emissions with geographical factors.</p>
                        </li>
                        <li className="project_info-service grid">
                            <i className="uil uil-check-circle project_info-icon"></i>
                            <p className="project_info-details">
                                <a href="https://public.tableau.com/app/profile/rakshini.jesudoss/viz/GlobalClimateChange_16778705162720/GlobalClimateChange"
                                className="project_link">Click here for Project Link</a>
                            </p>
                        </li>
                    </ul>
                </div>          
            </div>
        </div>

        <div className="work_card">
            <img src={Work2} alt="" className="work_img"/>
            <h3 className="work_title">Seed Grading System</h3>
            <span className="work_button" onClick={()=> toggleTab(2)}>
                More Info <i className="bx bx-right-arrow-alt work_button-icon"></i>
            </span>

            <div className={toggleState === 2 ? "project_info active-modal" : "project_info"}>
                <div className="project_info-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times project_info-close"></i>

                    <h3 className="project_info-title">Seed Grading System</h3>
                    <p className="project_info-description">
                    The Seed-Grading-System automates the traditional seed grading process using MATLAB. By applying image processing techniques such as Region Grow segmentation and Edge Masking, the system identifies healthy seeds for cultivation, helping farmers improve crop yields.
                    </p>

                    <ul className="project_info-services grid">
                        <li className="project_info-service grid">
                            <i className="uil uil-check-circle project_info-icon"></i>
                            <p className="project_info-details">MATLAB with Image Processing and Computer Vision Toolboxes.</p>
                        </li>
                        <li className="project_info-service grid">
                            <i className="uil uil-check-circle project_info-icon"></i>
                            <p className="project_info-details">Region Grow Segmentation for distinguishing seed quality.</p>
                        </li>
                        <li className="project_info-service grid">
                            <i className="uil uil-check-circle project_info-icon"></i>
                            <p className="project_info-details">Edge Masking to enhance detection accuracy.</p>
                        </li>
                        <li className="project_info-service grid">
                            <i className="uil uil-check-circle project_info-icon"></i>
                            <p className="project_info-details">Optimized for Windows with multi-core processors and SSD.</p>
                        </li>
                        <li className="project_info-service grid">
                            <i className="uil uil-check-circle project_info-icon"></i>
                            <p className="project_info-details">
                                <a href="https://github.com/RakshiniJesudoss/Seed-Grading-System"
                                className="project_link">Click here for Project Link</a>
                            </p>
                        </li>
                    </ul>
                </div>          
            </div>
        </div>

        <div className="work_card">
            <img src={Work3} alt="" className="work_img"/>
            <h3 className="work_title">Indoor Navigation App</h3>
            <span className="work_button" onClick={()=> toggleTab(3)}>
                More Info <i className="bx bx-right-arrow-alt work_button-icon"></i>
            </span>

            <div className={toggleState === 3 ? "project_info active-modal" : "project_info"}>
                <div className="project_info-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times project_info-close"></i>

                    <h3 className="project_info-title">Indoor Navigation App</h3>
                    <p className="project_info-description">
                    The Indoor-Navigation-System provides turn-by-turn directions inside a building using various sensor data and the IndoorAtlas SDK, with Google Maps integration for displaying and aligning floor plans.
                    </p>

                    <ul className="project_info-services grid">
                        <li className="project_info-service grid">
                            <i className="uil uil-check-circle project_info-icon"></i>
                            <p className="project_info-details">IndoorAtlas SDK for hybrid indoor positioning.</p>
                        </li>
                        <li className="project_info-service grid">
                            <i className="uil uil-check-circle project_info-icon"></i>
                            <p className="project_info-details">Google Maps API for map display and floor plan alignment.</p>
                        </li>
                        <li className="project_info-service grid">
                            <i className="uil uil-check-circle project_info-icon"></i>
                            <p className="project_info-details">Sensor Data from smartphones including radio signals, geomagnetic fields, and barometric pressure.</p>
                        </li>
                        <li className="project_info-service grid">
                            <i className="uil uil-check-circle project_info-icon"></i>
                            <p className="project_info-details">Android Studio for development.</p>
                        </li>
                        <li className="project_info-service grid">
                            <i className="uil uil-check-circle project_info-icon"></i>
                            <p className="project_info-details">
                                <a href="https://github.com/RakshiniJesudoss/Indoor-Navigation-System"
                                className="project_link">Click here for Project Link</a>
                            </p>
                        </li>
                    </ul>
                </div>          
            </div>
        </div>
    
    </div>
  )
}

export default Works