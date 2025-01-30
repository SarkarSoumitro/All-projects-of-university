import React, { useState } from 'react';
import './add_rider.css';
import axios from 'axios'; // Import axios for making HTTP requests

const AddRider = () => {
  // State to manage form inputs
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [operatingArea, setOperatingArea] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Send POST request to the API endpoint with rider data
      const response = await axios.post('http://192.168.31.9:91/api/rider/riderInsert', {
        Name: name,
        MobileNumber: mobile,
        Email: email,
        Address: address,
        OperatingArea: operatingArea
      });
      if (response.status === 200) {
        // Reset form fields if rider added successfully
        setName('');
        setMobile('');
        setEmail('');
        setAddress('');
        setOperatingArea('');
        alert('Rider added successfully');
      }
    } catch (error) {
      console.error('Error adding rider:', error);
      alert('Failed to add rider. Please try again.');
    }
  };

  return (
    <div className="add-rider-container">
      <h1>Add New Rider</h1>
      <form onSubmit={handleSubmit} className="add-rider-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number:</label>
          <input type="text" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="operatingArea">Operating Area:</label>
          <input type="text" id="operatingArea" value={operatingArea} onChange={(e) => setOperatingArea(e.target.value)} required />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default AddRider;
