import React from 'react'
import './collect.css'
import Img1 from '../../../assets/image/collect/5.png'
import Img2 from '../../../assets/image/collect/6.png'
import Img3 from '../../../assets/image/collect/7.png'
import Img4 from '../../../assets/image/collect/8.png'
const collect = () => {
  return (
    <div className='collect'>
        <h1>What we collect</h1>
        <div className="item">
            <img src={Img1} alt="" />
            <div className="sub-item">
                <h2>Plastics</h2>
                <p>All type of plastic element we collect <br/>E.g. plastic bottles, containers, and packaging</p>
                <p><a href="">Find out more</a></p>
            </div>
            <img src={Img2} alt="" />
            <div className="sub-item">
                <h2>Metal</h2>
                <p>All type of metal element we collect <br/>E.g. aluminum, steel, and copper</p>
                <a href="">Find out more</a>
            </div>
        </div>
        <div className="item">
        <img src={Img3} alt="" />
            <div className="sub-item">
                <h2>E-waste</h2>
                <p>All type of plastic element we collect <br/>E.g. plastic bottles, containers, and packaging</p>
                <a href="">Find out more</a>
            </div>
            <img src={Img4} alt="" />
            <div className="sub-item">
                <h2>Clothes & textiles</h2>
                <p>All type of metal element we collect <br/>E.g. aluminum, steel, and copper</p>
                <a href="">Find out more</a>
            </div>
        </div>
    </div>
  )
}

export default collect
