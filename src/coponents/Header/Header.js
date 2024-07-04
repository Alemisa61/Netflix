import React from 'react'
import '../Header/Header.css'
import netflixlogo from '../../Resources/Images/my netflix logo photo.png'
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PortraitIcon from "@mui/icons-material/Portrait";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";


 function Header() {
  return (
    <div className="Header-outer-container">
      <div className="Header-container">
        <div className="Header-Left">
          <lu>
            <li>
              <img src={netflixlogo} alt="netflixlogo" width="100" />
            </li>
            <li>Netflix</li>
            <li>Home</li>
            <li>TVshows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>Mylist</li>
            <li>Browse by Languages</li>
          </lu>
        </div>

        <div className="Header-right">
          <ul>
            <li><SearchIcon/></li>
            <li><NotificationsNoneIcon/></li>
            <li><PortraitIcon/></li>
            <li><ArrowDropDownIcon/></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Header;