import React from "react";
import { motion } from "framer-motion";
import "./item_details.css";
import Img1 from "../../../assets/image/blog/glass-jar-food-storing.jpg";
import { useLocation } from "react-router-dom";
const ItemDetails = () => {
  const location = useLocation();
  const { item, productImage, sellerInfo } = location.state;
  return (
    <div>
      <h1 className="details-title">Prodcut Details</h1>
      <div className="item-details-container">
        <motion.div
          className="image-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={`data:image/jpeg;base64,${productImage}`} // Replace with your product image URL
            alt="Product"
            className="item-image"
          />
        </motion.div>
        <motion.div
          className="details-container"
          initial={{ x: "100%" }} // Initial position from right
          animate={{ x: 0 }} // Animate to the center
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h1 className="item-name">{item.productName}</h1>
          <p className="seller-name">
            Seller: {`${sellerInfo.firstName} ${sellerInfo.lastName}`}
          </p>
          <p>Phone no. {sellerInfo.phone}</p>
          <p>Email: {sellerInfo.email}</p>
          <p className="item-description">
             Description: {item.description}
          </p>
          <p className="product-price">Price: {item.price}Tk</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ItemDetails;
