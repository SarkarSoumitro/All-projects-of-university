import React, { useState, useEffect } from "react";
import "./business.css";
import Works from '../home/work/work'
import Img from "../../assets/image/business/header.png";
import Img1 from "../../assets/image/business/sev-pickup.jpg";
import Img2 from "../../assets/image/business/sev-shop.jpg";
import Img3 from "../../assets/image/registration/reg.png";
const Business = () => {
  const [isReversed, setIsReversed] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsReversed((prev) => !prev);
    }, 8000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <div className="header-img">
        <img src={Img} alt="Header" />
      </div>
      <div className="service-info">
        <div className="service">
          <img src={Img1} alt="" />
          <div className="service-content">
            <h3>Pickup Recycling</h3>
            <p>
              In the heart of a bustling city, a small but determined startup
              embarked on a mission to redefine recycling. Armed with bicycles
              and unwavering dedication, their team set out each day to collect
              recyclable treasures right from people's doorsteps. As they
              traversed neighborhoods, their bags brimming with plastic, paper,
              and glass, they didn't just pick up waste—they fostered
              connections and shared the importance of sustainability with the
              community. Their story was one of grassroots activism and the
              belief that every small effort could make a big difference in
              preserving our planet.
            </p>
            <button className="service-btn">Pickup Request</button>
          </div>
        </div>
        <div className="service">
        <img src={Img2} alt="" />
          <div className="service-content">
            <h3>Sell your used product</h3>
            <p>
              In the heart of a bustling city, a small but determined startup
              embarked on a mission to redefine recycling. Armed with bicycles
              and unwavering dedication, their team set out each day to collect
              recyclable treasures right from people's doorsteps. As they
              traversed neighborhoods, their bags brimming with plastic, paper,
              and glass, they didn't just pick up waste—they fostered
              connections and shared the importance of sustainability with the
              community. Their story was one of grassroots activism and the
              belief that every small effort could make a big difference in
              preserving our planet.
            </p>
            <button className="service-btn">Collect Product</button>
          </div>
        </div>
        <div className="service">
        <img src={Img3} alt="" />
          <div className="service-content">
            <h3>Blogs on enviromental impact</h3>
            <p>
              In the heart of a bustling city, a small but determined startup
              embarked on a mission to redefine recycling. Armed with bicycles
              and unwavering dedication, their team set out each day to collect
              recyclable treasures right from people's doorsteps. As they
              traversed neighborhoods, their bags brimming with plastic, paper,
              and glass, they didn't just pick up waste—they fostered
              connections and shared the importance of sustainability with the
              community. Their story was one of grassroots activism and the
              belief that every small effort could make a big difference in
              preserving our planet.
            </p>
            <button className="service-btn">View blogs</button>
          </div>
        </div>
      </div>
      <div className={`info-flow ${isReversed ? 'reverse' : ''}`}>
        <p className="flow-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          possimus in, modi consequatur nobis et neque unde beatae iste.
        </p>
      </div>
      <div>
        <Works />
      </div>
    </div>
  );
};

export default Business;
