import React from "react";
import "./work.css";
import Img1 from "../../../assets/image/work/img1.png";
import Img2 from "../../../assets/image/work/img2.png";
import Img3 from "../../../assets/image/work/img3.png";
const work = () => {
  return (
    <div className="work">
      <h1>How Does it Work?</h1>
      <p>
        We pickup recycle things from your doorstep and droo them off to be
        recycled <br /> All you have to do is:{" "}
      </p>
      <div className="line">
        <div className="sec1">
          <img src={Img1} alt="" />
          <h2>1.Schedule a pickup</h2>
          <p>Log in or use out app to set up your collelection day <br /> at your prepareable time</p>
        </div>
        <div className="sec2">
          <img src={Img2} alt="" />
          <h2>2.Pickup from doorstep</h2>
          <p>
            Our driver will collect your recyclable items <br /> from your
            doorstep
          </p>
        </div>
        <div className="sec3">
          <img src={Img3} alt="" />
          <h2>3.Receive Payment</h2>
          <p>
            Your items will be recycled and you will <br /> receive Payment
          </p>
        </div>
      </div>
    </div>
  );
};

export default work;
