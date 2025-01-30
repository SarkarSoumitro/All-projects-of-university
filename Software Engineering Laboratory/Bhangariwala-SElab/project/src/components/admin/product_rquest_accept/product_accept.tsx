import React, { useState, useEffect } from 'react';
import './product_accept.css'; // Import the CSS file for product_accept table
import axios from 'axios';
import { baseUrl} from '../../api/api_config';
interface Product {
  id: string;
  productName: string;
  productImage: string;
  price: number;
  description: string;
  type: string;
  userInfoID: string;
  productStatus: string;
}

interface UserInfo {
  firstName: string;
  phone: string;
}

const ProductAccept: React.FC = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [userInfoMap, setUserInfoMap] = useState<{ [key: string]: UserInfo }>({});
  const [acceptedProducts, setAcceptedProducts] = useState<string[]>([]);
  const [canceledProducts, setCanceledProducts] = useState<string[]>([]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const productResponse = await axios.post<Product[]>(`${baseUrl}/product/productViewList`, {});
        setProductList(productResponse.data);
        // Fetch user info for each product
        productResponse.data.forEach(product => {
          fetchUserInfo(product.userInfoID);
        });
      } catch (error) {
        console.error('Error fetching product list:', error);
      }
    };

    const fetchUserInfo = async (userInfoID: string) => {
      try {
        const userInfoResponse = await axios.post<UserInfo>(`${baseUrl}/user/userInfoById`, {
          userId: userInfoID
        });
        setUserInfoMap(prevState => ({
          ...prevState,
          [userInfoID]: userInfoResponse.data
        }));
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchProductList();
  }, []);

  const handleAcceptRequest = async (id: string) => {
    try {
      await axios.post(`${baseUrl}/product/acceptRequest`, {
        Id: id
      });
      // Update product list to reflect the change in productStatus
      setProductList(prevList =>
        prevList.map(product =>
          product.id === id ? { ...product, productStatus: '1' } : product
        )
      );
      // Mark the product as accepted
      setAcceptedProducts(prevAcceptedProducts => [...prevAcceptedProducts, id]);
    } catch (error) {
      console.error('Error accepting request:', error);
    }
  };

  const handleCancelRequest = async (id: string) => {
    try {
      await axios.post(`${baseUrl}/product/cancelRequest`, {
        Id: id
      });
      // Update product list to reflect the change in productStatus
      setProductList(prevList =>
        prevList.map(product =>
          product.id === id ? { ...product, productStatus: '0' } : product
        )
      );
      // Mark the product as canceled
      setCanceledProducts(prevCanceledProducts => [...prevCanceledProducts, id]);
    } catch (error) {
      console.error('Error canceling request:', error);
    }
  };

  // Function to check if a product has been accepted
  const isProductAccepted = (id: string) => acceptedProducts.includes(id);
  // Function to check if a product has been canceled
  const isProductCanceled = (id: string) => canceledProducts.includes(id);

  return (
    <div>
      <h1>Pickup Request</h1>
      <div className="pickup_info">
        <div className="p1">
          <h2>Total request: {productList.length}</h2>
        </div>
        <div className="p2">
          {/* Calculate completed requests dynamically */}
          {/* <h2>Completed: {table_data.filter(item => item.completed).length}</h2> */}
          <h2>Completed: 1</h2>
        </div>
      </div>
      <div className="pu_table">
        <table>
          <thead>
            <tr>
              <th>Item ID</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Product Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {productList.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{userInfoMap[product.userInfoID]?.firstName}</td>
                <td>{userInfoMap[product.userInfoID]?.phone}</td>
                <td>{product.productName}</td>
                <td>
                  <button
                    className="accept pic-btn"
                    onClick={() => handleAcceptRequest(product.id)}
                    disabled={isProductAccepted(product.id) || isProductCanceled(product.id)}
                  >
                    Accept
                  </button>
                  <button
                    className="cancel pic-btn"
                    onClick={() => handleCancelRequest(product.id)}
                    disabled={isProductAccepted(product.id) || isProductCanceled(product.id)}
                  >
                    Cancel
                  </button>
                  <button className="view pic-btn">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductAccept;
