import { useNavigate } from "react-router-dom";
import "../styles/forms.css";

const Success = ({ formData }) => {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <div className="success-content">
        <h1 className="success-title">Application Submitted Successfully!</h1>
        <p className="success-message">
          Thank you for submitting your application to Sakim International University.
          We have received your application and will review it shortly.
        </p>

        <div className="application-details">
          <h2>Application Details</h2>
          <p><strong>Name:</strong> {formData.fullName}</p>
          <p><strong>Application ID:</strong> {Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
          <p><strong>Date Submitted:</strong> {new Date().toLocaleDateString()}</p>
        </div>

        <div className="next-steps">
          <h2>Next Steps</h2>
          <ul>
            <li>You will receive a confirmation email shortly</li>
            <li>Our admissions team will review your application</li>
            <li>You will be notified of the decision within 2-3 weeks</li>
          </ul>
        </div>

        <div className="success-actions">
          <button
            className="form-button primary"
            onClick={() => navigate("/")}
          >
            Start New Application
          </button>
          <button
            className="form-button secondary"
            onClick={() => window.print()}
          >
            Print Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
