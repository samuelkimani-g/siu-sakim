import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/forms.css";
import Header from "./Header";
import ProgressBar from "./ProgressBar";

const Form3 = ({ formData, updateFormData }) => {
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();
  const formRef = useRef(null);

  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.kcpeScore) {
      newErrors.kcpeScore = "KCPE Score is required";
    }

    if (!formData.kcseScore) {
      newErrors.kcseScore = "KCSE Score is required";
    }

    if (!formData.kcseGrade) {
      newErrors.kcseGrade = "KCSE Grade is required";
    }

    if (!formData.secondarySchool) {
      newErrors.secondarySchool = "Secondary School name is required";
    }

    if (!formData.secondaryYear) {
      newErrors.secondaryYear = "Secondary School completion year is required";
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
      navigate("/form4");
    }
  };

  return (
    <>
      <Header />
      <ProgressBar currentStep={3} totalSteps={4} />
      <div className="form-container">
        <h2 className="form-title">Academic Information</h2>
        
        <div className="form-section">
          <h3 className="section-title">Primary Education</h3>
          <p className="section-description">
            Please provide your KCPE examination details.
          </p>

          <div className="form-group">
            <label className="form-label">
              KCPE Score
              <span className="required">*</span>
            </label>
            <input
              type="number"
              name="kcpeScore"
              value={formData.kcpeScore || ""}
              onChange={handleChange}
              placeholder="Enter your KCPE score..."
              className={`form-input ${errors.kcpeScore ? "error" : ""}`}
              min="0"
              max="500"
            />
            {errors.kcpeScore && <div className="error-message">{errors.kcpeScore}</div>}
          </div>

          <div className="form-group">
            <label className="form-label">
              Primary School Name
              <span className="required">*</span>
            </label>
            <input
              type="text"
              name="primarySchool"
              value={formData.primarySchool || ""}
              onChange={handleChange}
              placeholder="Enter your primary school name..."
              className={`form-input ${errors.primarySchool ? "error" : ""}`}
            />
            {errors.primarySchool && <div className="error-message">{errors.primarySchool}</div>}
          </div>
        </div>

        <div className="form-section">
          <h3 className="section-title">Secondary Education</h3>
          <p className="section-description">
            Please provide your KCSE examination details.
          </p>

          <div className="form-group">
            <label className="form-label">
              KCSE Score
              <span className="required">*</span>
            </label>
            <input
              type="number"
              name="kcseScore"
              value={formData.kcseScore || ""}
              onChange={handleChange}
              placeholder="Enter your KCSE score..."
              className={`form-input ${errors.kcseScore ? "error" : ""}`}
              min="0"
              max="84"
            />
            {errors.kcseScore && <div className="error-message">{errors.kcseScore}</div>}
          </div>

          <div className="form-group">
            <label className="form-label">
              KCSE Grade
              <span className="required">*</span>
            </label>
            <select
              name="kcseGrade"
              value={formData.kcseGrade || ""}
              onChange={handleChange}
              className={`form-input ${errors.kcseGrade ? "error" : ""}`}
            >
              <option value="">Select your KCSE Grade</option>
              <option value="A">A</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B">B</option>
              <option value="B-">B-</option>
              <option value="C+">C+</option>
              <option value="C">C</option>
              <option value="C-">C-</option>
              <option value="D+">D+</option>
              <option value="D">D</option>
              <option value="D-">D-</option>
              <option value="E">E</option>
            </select>
            {errors.kcseGrade && <div className="error-message">{errors.kcseGrade}</div>}
          </div>

          <div className="form-group">
            <label className="form-label">
              Secondary School Name
              <span className="required">*</span>
            </label>
            <input
              type="text"
              name="secondarySchool"
              value={formData.secondarySchool || ""}
              onChange={handleChange}
              placeholder="Enter your secondary school name..."
              className={`form-input ${errors.secondarySchool ? "error" : ""}`}
            />
            {errors.secondarySchool && <div className="error-message">{errors.secondarySchool}</div>}
          </div>

          <div className="form-group">
            <label className="form-label">
              Year of Completion
              <span className="required">*</span>
            </label>
            <input
              type="number"
              name="secondaryYear"
              value={formData.secondaryYear || ""}
              onChange={handleChange}
              placeholder="Enter your completion year..."
              className={`form-input ${errors.secondaryYear ? "error" : ""}`}
              min="2000"
              max="2024"
            />
            {errors.secondaryYear && <div className="error-message">{errors.secondaryYear}</div>}
          </div>
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="form-button secondary"
            onClick={() => navigate("/form2")}
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

export default Form3;
