import React from "react";
import "./shop_home.css";
import RecentItem from "../shop/recent_item/recent_item";
import AllCard from "../shop/all_card/all_card";
import Img1 from "../../assets/shop_itms/shop.png";
const ShopHome = () => {
  return (
    <div>
      <div className="uper_block">
        <div className="manipulate">
            <img src={Img1} alt="" />
        </div>
        <div className="re_item">
            <h1 className="shop-title">Recently added Items</h1>
          <RecentItem />
        </div>
      </div>
      <div className="shop-main">
           <h1 className="shop-title">All products</h1>
             <AllCard />
      </div>
    </div>
  );
};

export default ShopHome;

