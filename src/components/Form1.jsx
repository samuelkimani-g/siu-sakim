import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/forms.css";
import Header from "./Header";
import ProgressBar from "./ProgressBar";

const Form1 = ({ formData, updateFormData }) => {
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();
  const formRef = useRef(null);

  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required";
    }

    if (!formData.gender) {
      newErrors.gender = "Gender is required";
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
      navigate("/form2");
    }
  };

  return (
    <>
      <Header />
      <ProgressBar currentStep={1} totalSteps={4} />
      <div className="form-container">
        <h2 className="form-title">Personal Information</h2>
        
        <div className="form-section">
          <h3 className="section-title">Basic Details</h3>
          <p className="section-description">
            Please provide your basic personal information.
          </p>

          <div className="form-group">
            <label className="form-label">
              Full Name
              <span className="required">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName || ""}
              onChange={handleChange}
              placeholder="Enter your full name..."
              className={`form-input ${errors.fullName ? "error" : ""}`}
            />
            {errors.fullName && <div className="error-message">{errors.fullName}</div>}
          </div>

          <div className="form-group">
            <label className="form-label">
              Date of Birth
              <span className="required">*</span>
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth || ""}
              onChange={handleChange}
              className={`form-input ${errors.dateOfBirth ? "error" : ""}`}
            />
            {errors.dateOfBirth && <div className="error-message">{errors.dateOfBirth}</div>}
          </div>

          <div className="form-group">
            <label className="form-label">
              Gender
              <span className="required">*</span>
            </label>
            <select
              name="gender"
              value={formData.gender || ""}
              onChange={handleChange}
              className={`form-input ${errors.gender ? "error" : ""}`}
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <div className="error-message">{errors.gender}</div>}
          </div>
        </div>

        <div className="form-actions">
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

export default Form1;
