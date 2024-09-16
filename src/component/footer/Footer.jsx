import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Rakshini</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>

                <li>
                    <a href="#projects" className="footer_link">Projects</a>
                </li>

                <li>
                    <a href="#qualifications" className="footer_link">Qualifications</a>
                </li>
            </ul>

            <div className="footer_social">
                <a href="https://www.instagram.com/rakshi_rj/" className="footer_social-link" target="_blank">
                <i class="bx bxl-instagram"></i>
                </a>

                <a href="https://www.linkedin.com/in/rakshini-jesudoss/" className="footer_social-link" target="_blank">
                <i class="bx bxl-linkedin"></i>
                </a>

            </div>
        </div>
    </footer>
  )
}

export default Footer