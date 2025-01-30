import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import "./pickup.css";
import Img1 from "../../assets/image/home/logo.png";
import { baseUrl } from "../api/api_config";
import PickupModel from "../api/pickup_model";

const PickupForm = () => {
  const [formData, setFormData] = useState<PickupModel>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    pickupDate: "",
    pickupTime: "",
    materialType: "",
    comments: "",
    address: "", // Add address field
  });
  const carOptions: string[] = [
    "Iron",
    "Platic",
    "Cloth",
    "Glass",
    "Paper",
    "Other",
  ];
  const [selectedCars, setSelectedCars] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [submissionStatus, setSubmissionStatus] = useState<
    "success" | "error" | null
  >(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleAdd = () => {
    if (selectedOption && !selectedCars.includes(selectedOption)) {
      setSelectedCars([...selectedCars, selectedOption]);
    }
    setSelectedOption("");
  };

  const handleRemove = (car: string) => {
    setSelectedCars(selectedCars.filter((item) => item !== car));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const pickupData = {
      UserInfoId: "2",
      FirstName: formData.firstName,
      LastName: formData.lastName,
      PhoneNumber: formData.phoneNumber,
      Email: formData.email,
      Address: formData.address,
      PickupDate: formData.pickupDate,
      PickupTime: formData.pickupTime,
      MaterialType: formData.materialType || selectedCars.join(", "),
      Comments: formData.comments,
    };
  
    try {
      const response = await fetch(`${baseUrl}/pickup/pickupRequestInsert`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pickupData),
      });
  
      if (response.ok) {
        setSubmissionStatus("success");
        setTimeout(() => {
          setSubmissionStatus(null);
          setFormData({
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            pickupDate: "",
            pickupTime: "",
            materialType: "",
            comments: "",
            address: "",
          });
          setSelectedCars([]);
          setSelectedOption("");
        }, 3000);
      } else {
        setSubmissionStatus("error");
        setTimeout(() => {
          setSubmissionStatus(null);
        }, 3000);
        console.error("Failed to submit pickup form");
      }
    } catch (error) {
      setSubmissionStatus("error");
      setTimeout(() => {
        setSubmissionStatus(null);
      }, 3000);
      console.error("Error submitting pickup form:", error);
    }
  };

  return (
    <div className="pickup-form">
      <img src={Img1} alt="Your Logo" className="logo" />
      <h1 className="titleName">Pickup Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="name-fields">
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email Address:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Address: {/* New field */}
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Pickup Date:
          <input
            type="date"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Pickup Time:
          <input
            type="time"
            name="pickupTime"
            value={formData.pickupTime}
            onChange={handleInputChange}
            required
          />
        </label>
        <label htmlFor="cars">Materail Type:</label>
        <select
          name="cars"
          id="cars"
          value={selectedOption}
          onChange={handleChange}
        >
          <option value="">Select material</option>
          {carOptions.map((car: string, index: number) => (
            <option key={index} value={car.toLowerCase()}>
              {car}
            </option>
          ))}
        </select>
        <button onClick={handleAdd}>Add</button>
        <div>
          <h2>Selected material:</h2>
          <ul>
            {selectedCars.map((car, index) => (
              <li key={index}>
                {`${index + 1}) ${car}`}
                <button onClick={() => handleRemove(car)}>
                  <ImCross />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <label>
          Comments:
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleInputChange}
          />
        </label>
        {submissionStatus === "success" && (
          <div className="success-message">Successfully submitted pickup request</div>
        )}
        {submissionStatus === "error" && (
          <div className="error-message">Error occurred</div>
        )}
        {/* Remaining form fields */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PickupForm;
