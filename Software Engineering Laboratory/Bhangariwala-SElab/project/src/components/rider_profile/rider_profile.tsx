import React from 'react';
import './rider_profile.css';
import Img1 from '../../assets/image/profile/uper.png';
import { BiSolidMobileVibration } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { SiNamebase } from "react-icons/si";
const RiderProfile = () => {
  return (
    <div className="rider-profile-container">
      <div className="rider-details">
        <h1>Rider Profile</h1>
        <div>
            <img src={Img1} alt="" />
          <p><strong><SiNamebase className='rprofile-icon'/></strong> John Doe</p>
          <p><strong><FaHome className='rprofile-icon'/></strong> 123 Main St</p>
          <p><strong><BiSolidMobileVibration className='rprofile-icon'/></strong> 123-456-7890</p>
          <p><strong><MdEmail className='rprofile-icon'/></strong> john@example.com</p>
          <p><strong><FaExternalLinkSquareAlt className='rprofile-icon' /></strong> City Name</p>
        </div>
      </div>
      <div className="pickup-requests">
        <h2>Pickup Requests</h2>
        <table className="pickup-requests-table">
          <thead>
            <tr>
              <th>Pickup ID</th>
              <th>Date</th>
              <th>Time</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2024-05-05</td>
              <td>10:00 AM - 12:00 PM</td>
              <td>123 Main St</td>
              <td><button className='riderBtn'>Complete Pickup</button></td>
            </tr>
            {/* Add more pickup requests */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RiderProfile;
