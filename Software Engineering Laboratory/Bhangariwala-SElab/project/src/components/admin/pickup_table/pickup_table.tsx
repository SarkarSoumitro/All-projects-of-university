import React from 'react';
import './pickup_table.css';

const PickupTable = () => {
  // Sample data array
  const table_data = [
    { id: 1, name: 'John Doe', mobile: '123-456-7890', address: '123 Main St,Chittagon,Bangladesh' },
    { id: 2, name: 'Jane Smith', mobile: '987-654-3210', address: '456 Oak St' },
    // Add more data as needed
  ];

  return (
    <div>
      <h1>Pickup Request</h1>
      <div className="pickup_info">
        <div className="p1">
          <h2>Total request: {table_data.length}</h2>
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
              <th>Req_ID</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {table_data.map(item => (
              <tr key={item.id} >
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.mobile}</td>
                <td>{item.address}</td>
                <td>
                  <button className="accept pic-btn">Accept</button>
                  <button className="cancel pic-btn">Cancel</button>
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

export default PickupTable;
