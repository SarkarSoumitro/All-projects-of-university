import React, { useState } from 'react';
import './admin_home.css';
import Admin_Blog from '../admin/admin_blog/admin_blog';
import Dashboard from '../admin/dashboard/dashboard';
import Pickup_table from '../admin/pickup_table/pickup_table';
import Manage_Request from "../admin/manage_request/mange_request";
import Add_Rider from '../admin/add_rider/add_rider';
import Product_accept from '../admin/product_rquest_accept/product_accept'; // Corrected import path
import { MdDirectionsBike } from "react-icons/md";
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { ImBlog } from 'react-icons/im';
import { FaTruckPickup, FaShoppingCart } from "react-icons/fa";
import { SiGoogletagmanager } from "react-icons/si";

const AdminHome = () => {
  const [showDashboard, setShowDashboard] = useState(true);
  const [showBlog, setShowBlog] = useState(false);
  const [showPickup, setShowPickup] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [showRider, setShowRider] = useState(false);
  const [showManageRequest, setShowManageRequest] = useState(false);

  const handleDashboardClick = () => {
    setShowDashboard(true);
    setShowBlog(false);
    setShowPickup(false);
    setShowProduct(false);
    setShowRider(false);
    setShowManageRequest(false);
  };

  const handleBlogClick = () => {
    setShowDashboard(false);
    setShowBlog(true);
    setShowPickup(false);
    setShowProduct(false);
    setShowRider(false);
    setShowManageRequest(false);
  };

  const handlePickupClick = () => {
    setShowDashboard(false);
    setShowBlog(false);
    setShowPickup(true);
    setShowProduct(false);
    setShowRider(false);
    setShowManageRequest(false);
  };

  const handleProductClick = () => {
    setShowDashboard(false);
    setShowBlog(false);
    setShowPickup(false);
    setShowProduct(true);
    setShowRider(false);
    setShowManageRequest(false);

  };

  const handleRiderClick = () => {
    setShowDashboard(false);
    setShowManageRequest(false);
    setShowBlog(false);
    setShowPickup(false);
    setShowProduct(false);
    setShowRider(true);
  };
  const handleManageRequestClick = () => {
    setShowDashboard(false);
    setShowBlog(false);
    setShowPickup(false);
    setShowProduct(false);
    setShowRider(false);
    setShowManageRequest(true);
  }

  return (
    <div className='admin'>
      <div className='menu'>
         <h1>Admin</h1>
        <button className='admin_btn' onClick={handleDashboardClick}>
          <MdOutlineSpaceDashboard className='admin_icon' />
          Dashboard
        </button>
        <button className='admin_btn' onClick={handleBlogClick}>
          <ImBlog className='admin_icon' />
          Blog
        </button>
        <button className='admin_btn' onClick={handlePickupClick}>
          <FaTruckPickup className='admin_icon'/>
          Pickup 
        </button>
        <button className='admin_btn' onClick={handleManageRequestClick}>
          <SiGoogletagmanager className='admin_icon'/>
          Manage Request
        </button>
        <button className='admin_btn' onClick={handleProductClick}>
          <FaShoppingCart className='admin_icon' />
          Shop
        </button>
        <button className='admin_btn' onClick={handleRiderClick}>
         <MdDirectionsBike className='admin_icon'/>
          Add Rider
        </button>
      </div>
      <div className='show'>
        {showDashboard && <Dashboard />}
        {showBlog && <Admin_Blog />}
        {showPickup && <Pickup_table />}
        {showProduct && <Product_accept />}
        {showRider && <Add_Rider/>}
        {showManageRequest &&<Manage_Request/>}
      </div>
    </div>
  );
};

export default AdminHome;
