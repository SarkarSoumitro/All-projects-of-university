import React, { useState } from 'react';
import './sell_product.css'; // Import CSS file for styling
import { baseUrl } from '../api/api_config';
const SellProduct: React.FC = () => {
  const user = JSON.parse(sessionStorage.getItem("user") || "{}");
  // State to manage form data
  const [formData, setFormData] = useState({
    ProductName: '',
    ProductImage: '',
    Price: '',
    Description: '',
    Type: '',
    UserInfoID: user.id, // Assuming UserInfoID is always '1'
    ProductStatus: null
  });

  // Function to handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'ProductImage') {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          let base64String = reader.result as string;
          // Remove data:image/png;base64, prefix
          base64String = base64String.replace(/^data:image\/(png|jpg|jpeg);base64,/, '');
          setFormData(prevState => ({
            ...prevState,
            [name]: base64String // Update 'ProductImage' key
          }));
        };
      }
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  
  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`${baseUrl}/product/productSellRequest`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Set content type to JSON
        },
        body: JSON.stringify(formData) // Stringify the form data
      });

      if (response.status === 201) {
        const data = await response.text(); // Get response as JSON
        console.log('Success:', data);
        alert('Product sell submitted successfully!');
        setFormData({ // Clear form data
          ProductName: '',
          ProductImage: '',
          Price: '',
          Description: '',
          Type: '',
          UserInfoID: '1', // Assuming UserInfoID is always '1'
          ProductStatus: null
        });
      } else {
        console.error('Network response was not created:', response.status);
        alert('Failed to submit product sell. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit product sell. Please try again later.');
    }
  };

  return (
    <div className="sell-product-container">
      <h1 className='sell-title'>Sell your used product here!!</h1>
      <form onSubmit={handleSubmit} className="sell-product-form">
        <div className="form-group">
          <label htmlFor="ProductName">Product Name:</label>
          <input type="text" id="ProductName" name="ProductName" value={formData.ProductName} onChange={handleChange} required />
        </div>
         <div className="marge-row">
         <div className="form-group">
          <label htmlFor="ProductImage">Image:</label>
          <input type="file" id="ProductImage" name="ProductImage" onChange={handleChange} accept="image/*" required />
        </div>
        <div className="form-group price">
          <label htmlFor="Price">Price:</label>
          <input type="number" id="Price" name="Price" value={formData.Price} onChange={handleChange} required />
        </div>
         </div>
        <div className="form-group">
          <label htmlFor="Description">Description:</label>
          <textarea id="Description" name="Description" value={formData.Description} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="Type">Type:</label>
          <select id="Type" name="Type" value={formData.Type} onChange={handleChange} required>
            <option value="">Select Type</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Books">Books</option>
            <option value="Plastic">Plastic</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default SellProduct;
