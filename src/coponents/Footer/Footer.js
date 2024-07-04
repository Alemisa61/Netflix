import React from 'react'
import '../Footer/Footer.css'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

 function Footer() {
  return (
    <div className="footer-outer-container">
      <div className="footer-inner-container">
        <div className="footer-icons">
          <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="footer-data">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal notice</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Hepl center </li>
              <li> Jobs</li>
              <li>cookie Preference</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift cards</li>
              <li>Termss of use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media center</li>
              <li>Privacy</li>
              <li>contact us</li>
            </ul>
          </div>
        </div>
        <div className="service-code">
          <p>service code</p>
        </div>
        <div className="copy-write">
          &copy; 1997-2024 Netflix,inc
        </div>
      </div>
    </div>
  );
}
export default Footer;