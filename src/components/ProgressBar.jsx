import "../styles/forms.css";

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="progress-steps">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div 
            key={index}
            className={`progress-step ${index + 1 <= currentStep ? 'active' : ''}`}
          >
            <span className="step-number">{index + 1}</span>
            <span className="step-label">
              {index === 0 ? 'Personal' : 
               index === 1 ? 'Academic' : 
               index === 2 ? 'Documents' : 'Review'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
  