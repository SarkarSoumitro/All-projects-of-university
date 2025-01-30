import React from "react";
import "./profile.css";
import Table from "./profileTable";
import { RiUserReceived2Fill } from "react-icons/ri";
import { FaTruckFast } from "react-icons/fa6";
import { GiBeachBag } from "react-icons/gi";
import { FaTruckArrowRight } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import Img1 from "../../assets/image/profile/u-profile.png";
const Profile = () => {
  const user = JSON.parse(sessionStorage.getItem("user") || "{}");

  return (
    <div>
      <div className="contain">
        <div className="profile-info">
          <img src={Img1} alt="" />
          <div className="info">
            <h2>
              <strong>Name:</strong> {user.firstName} {user.lastName}
            </h2>
            <p>
              <strong>Email: </strong>
              {user.email}
            </p>
            <p>
              <strong>Phone: </strong>
              {user.phone}
            </p>
            <p>
              <strong>Address: </strong>
              {user.location}
            </p>
          </div>
        </div>
        <div className="oreder-tab">
          <h2>Pickup History</h2>
          <Table/>
        </div>
      </div>
    </div>
  );
};

export default Profile;
