import React, { useState } from "react";
import "./reg.css";
import Img1 from "../../assets/image/registration/reg.png";
import { baseUrl} from '../api/api_config';
const Reg: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    location: "",
    dateOfBirth: ""
  });
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseUrl}/user/userInsert`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          phone: "",
          location: "",
          dateOfBirth: ""
        });
        // setSubmissionMessage("Registration successful!");
        alert("Registration successful!");
      } else {
        throw new Error("Registration failed");
      }
    } catch (error) {
      setSubmissionMessage("Registration failed. Please try again later.");
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <section className="refPage">
        <div className="regImg">
          <img src={Img1} alt="" />
        </div>
        <div className="userInfo">
          <form onSubmit={handleSubmit}>
            <div className="uname">
              <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
            </div>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
            {/* <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} /> */}
            <input type="text" name="phone" placeholder="Phone No." value={formData.phone} onChange={handleChange} />
            <textarea name="location" placeholder="Location" value={formData.location} onChange={handleChange}></textarea>
            <div className="datePicker">
              <input type="date" name="dateOfBirth" placeholder="Date of Birth" value={formData.dateOfBirth} onChange={handleChange} />
            </div>
            <a href="">Already have an account?</a>
            <button className="subBtn" type="submit">Submit</button>
          </form>
          {submissionMessage && <p>{submissionMessage}</p>}
        </div>
      </section>
    </div>
  );
};

export default Reg;
