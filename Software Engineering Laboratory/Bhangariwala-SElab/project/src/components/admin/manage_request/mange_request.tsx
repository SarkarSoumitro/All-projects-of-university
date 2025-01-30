import React, { useState } from 'react';
import './mange_request.css';

// Define types for the pickup request and rider
interface PickupRequest {
  id: number;
  name: string;
  phone: string;
  address: string;
  email: string;
  time: string;
  rider: string; // Rider ID
  confirmed: boolean;
}

const pickupRequestsData: PickupRequest[] = [
  {
    id: 1,
    name: 'John Doe',
    phone: '123-456-7890',
    address: '123 Main St',
    email: 'john@example.com',
    time: '10:00 AM - 12:00 PM',
    rider: '', // Initially empty
    confirmed: false, // Initially not confirmed
  },
  {
    id: 2,
    name: 'Jane Smith',
    phone: '987-654-3210',
    address: '456 Oak St',
    email: 'jane@example.com',
    time: '1:00 PM - 3:00 PM',
    rider: '', // Initially empty
    confirmed: false, // Initially not confirmed
  },
  // Add more pickup requests as needed
];

const ManageRequest: React.FC = () => {
  const [requests, setRequests] = useState<PickupRequest[]>(pickupRequestsData);
  const [selectedRider, setSelectedRider] = useState<string>('');

  // Function to handle assigning a rider to a pickup request
  const assignRider = (requestId: number): void => {
    setRequests(
      requests.map((request) =>
        request.id === requestId ? { ...request, rider: selectedRider } : request
      )
    );
  };

  // Function to handle confirming a pickup request
  const confirmPickup = (requestId: number): void => {
    setRequests(
      requests.map((request) =>
        request.id === requestId ? { ...request, confirmed: true } : request
      )
    );
  };

  // Function to handle getting button text based on confirmation status
  const getButtonText = (request: PickupRequest): string => {
    return request.confirmed ? 'Pickup is completed' : 'Completed';
  };

  // Function to handle selecting a rider
  const handleRiderSelection = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedRider(e.target.value);
  };

  return (
    <div className="pickup-requests-container">
      <h1>Pickup Requests</h1>
      <table className="pickup-requests-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Email</th>
            <th>Available Time</th>
            <th>Rider</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{request.name}</td>
              <td>{request.phone}</td>
              <td>{request.address}</td>
              <td>{request.email}</td>
              <td>{request.time}</td>
              <td>
                {!request.confirmed && !request.rider ? (
                  <div>
                    <select onChange={handleRiderSelection}>
                      <option value="">Select Rider</option>
                      <option value="rider1">Rider 1</option>
                      <option value="rider2">Rider 2</option>
                      <option value="rider3">Rider 3</option>
                      {/* Add more riders as needed */}
                    </select>
                  </div>
                ) : (
                  request.rider
                )}
              </td>
              <td>
                {!request.confirmed && !request.rider ? (
                  <button onClick={() => assignRider(request.id)}>
                    Assign Rider
                  </button>
                ) : (
                  <button onClick={() => confirmPickup(request.id)}>
                    {getButtonText(request)}
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageRequest;
