import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/forms.css";
import Header from "./Header";
import ProgressBar from "./ProgressBar";
import FormSummary from "./FormSummary";

const Form4 = ({ formData, updateFormData }) => {
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();
  const formRef = useRef(null);

  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = "You must accept the terms and conditions";
    }

    if (!formData.acceptPrivacy) {
      newErrors.acceptPrivacy = "You must accept the privacy policy";
    }

    if (!formData.acceptRules) {
      newErrors.acceptRules = "You must accept the university rules";
    }

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  };

  const handleChange = (e) => {
    const { name, checked } = e.target;
    updateFormData({
      [name]: checked
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      navigate("/success");
    }
  };

  return (
    <>
      <Header />
      <ProgressBar currentStep={4} totalSteps={4} />
      <div className="form-container">
        <h2 className="form-title">Review and Submit</h2>
        
        <FormSummary formData={formData} />

        <div className="form-section">
          <h3 className="section-title">Terms and Conditions</h3>
          <p className="section-description">
            Please review and accept the following terms before submitting your application.
          </p>

          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms || false}
                onChange={handleChange}
                className={`form-checkbox ${errors.acceptTerms ? "error" : ""}`}
              />
              I accept the terms and conditions
            </label>
            {errors.acceptTerms && <div className="error-message">{errors.acceptTerms}</div>}
          </div>

          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="acceptPrivacy"
                checked={formData.acceptPrivacy || false}
                onChange={handleChange}
                className={`form-checkbox ${errors.acceptPrivacy ? "error" : ""}`}
              />
              I accept the privacy policy
            </label>
            {errors.acceptPrivacy && <div className="error-message">{errors.acceptPrivacy}</div>}
          </div>

          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="acceptRules"
                checked={formData.acceptRules || false}
                onChange={handleChange}
                className={`form-checkbox ${errors.acceptRules ? "error" : ""}`}
              />
              I accept the university rules and regulations
            </label>
            {errors.acceptRules && <div className="error-message">{errors.acceptRules}</div>}
          </div>
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="form-button secondary"
            onClick={() => navigate("/form3")}
          >
            Previous
          </button>
          <button
            type="submit"
            className="form-button primary"
            onClick={handleSubmit}
            disabled={!isValid}
          >
            Submit Application
          </button>
        </div>
      </div>
    </>
  );
};

export default Form4;
