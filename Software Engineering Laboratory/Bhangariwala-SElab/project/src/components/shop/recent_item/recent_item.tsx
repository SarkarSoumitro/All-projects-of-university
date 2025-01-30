import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { formatDistanceToNow } from "date-fns"; // Import formatDistanceToNow function
import "./recent_item.css";
import { baseUrl } from "../../api/api_config";

const RecentItem = ({ item }: { item: any }) => {
  const { id, productName, price, description, productImage, userInfoID, createTime } = item;
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState("");
  const [sellerInfo, setSellerInfo] = useState<any>({});
  const [timeElapsed, setTimeElapsed] = useState("");

  useEffect(() => {
    // Convert base64 string to image URL
    if (productImage) {
      const imageURL = `data:image/jpeg;base64,${productImage}`;
      setImageSrc(imageURL);
    }

    // Fetch seller information based on UserInfoID
    const fetchSellerInfo = async () => {
      try {
        const response = await axios.post<any>(`${baseUrl}/user/userInfoById`, {
          userId: userInfoID,
        });
        setSellerInfo(response.data);
      } catch (error) {
        console.error("Error fetching seller information:", error);
      }
    };

    fetchSellerInfo();

    // Calculate and update time elapsed
    const intervalId = setInterval(() => {
      setTimeElapsed(formatDistanceToNow(new Date(createTime), { addSuffix: true }));
    }, 60000); // Update every minute

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [productImage, userInfoID, createTime]);

  const handleApproachToBuy = () => {
    // Navigate to the product details page with the product ID
    navigate(`/item-details`, { state: { item, productImage, sellerInfo } });
  };

  return (
    <div className="rcard-items">
      <img src={imageSrc} alt="Product" className="product-image" />
      <div className="product-details">
        <div className="single-part">
          <h2 className="product-name">{productName}</h2>
          <p className="poste-time">{timeElapsed}</p>
        </div>
        <h2 className="product-price">Price: {price} tk</h2>
        <p className="short-description">{description}</p>
        <p className="seller-name">Seller: {`${sellerInfo.firstName} ${sellerInfo.lastName}`}</p>
        <button className="buy-now-button" onClick={handleApproachToBuy}>
          Proceed to Buy
        </button>
      </div>
    </div>
  );
};

const RecentItemList = () => {
  const [recentItemsData, setRecentItemsData] = useState<any[]>([]);

  useEffect(() => {
    const fetchRecentItems = async () => {
      try {
        const response = await axios.post<any[]>(`${baseUrl}/product/productViewList`, {});
        const filteredItems = response.data.filter((item) => item.productStatus === "1");
        const sortedItems = filteredItems.sort((a, b) => new Date(b.createTime).getTime() - new Date(a.createTime).getTime());
        setRecentItemsData(sortedItems.slice(0, 3)); // Display only the latest 3 items
      } catch (error) {
        console.error("Error fetching recent items:", error);
      }
    };

    fetchRecentItems();
  }, []);

  return (
    <div className="card-container">
      {recentItemsData.map((item) => (
        <RecentItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default RecentItemList;
