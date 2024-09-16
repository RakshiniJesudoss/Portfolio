import React, { useState } from 'react';
import "./qualifications.css";

const Qualifications = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="qualifiactions section" id="qualifications">
        <h2 className="section_title">Qualifications</h2>
        <span className="section_subtitle">My Journey</span>

        <div className="qualification_container container">
            <div className="qualification_tabs">
                <div className= {
                    toggleState === 1 ? "qualification_button qualification_active button--flex" 
                    : "qualification_button button--flex"
                    }
                    onClick={() => toggleTab(2)}
                >
                    <i className="uil uil-graduation-cap qualification_icon"></i>{""} Education
                </div>

                <div className= {
                    toggleState === 2 ? "qualification_button qualification_active button--flex" 
                    : "qualification_button button--flex"
                    }
                    onClick={() => toggleTab(1)}
                >
                    <i className="uil uil-briefcase-alt qualification_icon"></i>{""} Experience
                </div>
            </div>

            <div className="qualification_sections">
                <div className={
                    toggleState === 2 ? "qualification_content qualification_content-active" 
                    : "qualification_content "
                    }
                >
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Master of Science, Information Technology</h3>
                            <span className="qualification_subtitle">University of Massachusetts, Boston</span>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt">2022 - 2024</i>
                            </div>                            
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>

                    </div>

                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>

                        <div>
                            <h3 className="qualification_title">Bachelor of Technology, Information Technology</h3>
                            <span className="qualification_subtitle">Loyola ICAM College of Engineering & Technology, India</span>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt">2017 - 2021</i>
                            </div>                            
                        </div>

                    </div>

                    
                </div>

                <div className={
                    toggleState === 1 ? "qualification_content qualification_content-active" 
                    : "qualification_content "
                    }
                >
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Senior Analyst, Application Developer</h3>
                            <span className="qualification_subtitle">CVS Health, RI</span>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt">June 2024 - Present</i>
                            </div>                            
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>

                    </div>

                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>

                        <div>
                            <h3 className="qualification_title">IT Retail Pharmacy System Intern</h3>
                            <span className="qualification_subtitle">CVS Health, RI</span>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt">May 2023 - Aug. 2023</i>
                            </div>                            
                        </div>

                    </div>

                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Program Analyst Trainee</h3>
                            <span className="qualification_subtitle">Excelacom Technologies, India</span>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt">Sep. 2021 - June 2022</i>
                            </div>                            
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>

                    </div>

                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>

                        <div>
                            <h3 className="qualification_title">Program Analyst Intern </h3>
                            <span className="qualification_subtitle">Excelacom Technologies, India</span>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt">Mar. 2021 - Sep. 2021</i>
                            </div>                            
                        </div>

                    </div>

                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualifications