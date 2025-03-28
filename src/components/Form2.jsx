import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/forms.css";
import Header from "./Header";
import ProgressBar from "./ProgressBar";

const Form2 = ({ formData, updateFormData }) => {
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();
  const formRef = useRef(null);

  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nationalId) {
      newErrors.nationalId = "National ID is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?254\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid Kenyan phone number";
    }

    if (!formData.address) {
      newErrors.address = "Address is required";
    }

    if (!formData.county) {
      newErrors.county = "County is required";
    }

    if (!formData.subCounty) {
      newErrors.subCounty = "Sub-county is required";
    }

    if (!formData.ward) {
      newErrors.ward = "Ward is required";
    }

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      navigate("/form3");
    }
  };

  return (
    <>
      <Header />
      <ProgressBar currentStep={2} totalSteps={4} />
      <div className="form-container">
        <h2 className="form-title">Contact Information</h2>
        
        <div className="form-section">
          <h3 className="section-title">Personal Details</h3>
          <p className="section-description">
            Please provide your contact information and address details.
          </p>

          <div className="form-group">
            <label className="form-label">
              National ID Number
              <span className="required">*</span>
            </label>
            <input
              type="text"
              name="nationalId"
              value={formData.nationalId || ""}
              onChange={handleChange}
              placeholder="Enter your National ID number..."
              className={`form-input ${errors.nationalId ? "error" : ""}`}
            />
            {errors.nationalId && <div className="error-message">{errors.nationalId}</div>}
          </div>

          <div className="form-group">
            <label className="form-label">
              Email Address
              <span className="required">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              placeholder="Enter your email address..."
              className={`form-input ${errors.email ? "error" : ""}`}
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>

          <div className="form-group">
            <label className="form-label">
              Phone Number
              <span className="required">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone || ""}
              onChange={handleChange}
              placeholder="Enter your phone number (e.g., +254712345678)..."
              className={`form-input ${errors.phone ? "error" : ""}`}
            />
            {errors.phone && <div className="error-message">{errors.phone}</div>}
          </div>
        </div>

        <div className="form-section">
          <h3 className="section-title">Address Information</h3>
          <p className="section-description">
            Please provide your current residential address details.
          </p>

          <div className="form-group">
            <label className="form-label">
              Physical Address
              <span className="required">*</span>
            </label>
            <textarea
              name="address"
              value={formData.address || ""}
              onChange={handleChange}
              placeholder="Enter your physical address..."
              className={`form-input ${errors.address ? "error" : ""}`}
              rows="3"
            />
            {errors.address && <div className="error-message">{errors.address}</div>}
          </div>

          <div className="form-group">
            <label className="form-label">
              County
              <span className="required">*</span>
            </label>
            <input
              type="text"
              name="county"
              value={formData.county || ""}
              onChange={handleChange}
              placeholder="Enter your county..."
              className={`form-input ${errors.county ? "error" : ""}`}
            />
            {errors.county && <div className="error-message">{errors.county}</div>}
          </div>

          <div className="form-group">
            <label className="form-label">
              Sub-county
              <span className="required">*</span>
            </label>
            <input
              type="text"
              name="subCounty"
              value={formData.subCounty || ""}
              onChange={handleChange}
              placeholder="Enter your sub-county..."
              className={`form-input ${errors.subCounty ? "error" : ""}`}
            />
            {errors.subCounty && <div className="error-message">{errors.subCounty}</div>}
          </div>

          <div className="form-group">
            <label className="form-label">
              Ward
              <span className="required">*</span>
            </label>
            <input
              type="text"
              name="ward"
              value={formData.ward || ""}
              onChange={handleChange}
              placeholder="Enter your ward..."
              className={`form-input ${errors.ward ? "error" : ""}`}
            />
            {errors.ward && <div className="error-message">{errors.ward}</div>}
          </div>
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="form-button secondary"
            onClick={() => navigate("/form1")}
          >
            Previous
          </button>
          <button
            type="submit"
            className="form-button primary"
            onClick={handleSubmit}
            disabled={!isValid}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Form2;
