import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState } from "react";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import Form4 from "./components/Form4";
import ProgressBar from "./components/ProgressBar";
import Success from "./components/Success";
import "./styles/App.css";

const App = () => {
  const location = useLocation();
  const steps = ["/form1", "/form2", "/form3", "/form4"];
  const currentStep = steps.indexOf(location.pathname) + 1;
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: "",
    dateOfBirth: "",
    gender: "",
    
    // Contact Information
    nationalId: "",
    email: "",
    phone: "",
    address: "",
    county: "",
    subCounty: "",
    ward: "",
    
    // Academic Information
    kcpeScore: "",
    primarySchool: "",
    kcseScore: "",
    kcseGrade: "",
    secondarySchool: "",
    secondaryYear: "",
    
    // Document Uploads
    nationalIdFile: null,
    kcseCertificate: null,
    kcpeCertificate: null,
    birthCertificate: null,
    passportPhoto: null,
    
    // Terms and Conditions
    acceptTerms: false,
    acceptPrivacy: false,
    acceptRules: false
  });

  const updateFormData = (newData) => {
    setFormData(prev => ({
      ...prev,
      ...newData
    }));
  };

  return (
    <div className="container">
      {currentStep > 0 && currentStep <= 4 && <ProgressBar step={currentStep} />}
      <Routes>
        <Route path="/" element={<Navigate to="/form1" />} />
        <Route 
          path="/form1" 
          element={<Form1 formData={formData} updateFormData={updateFormData} />} 
        />
        <Route 
          path="/form2" 
          element={<Form2 formData={formData} updateFormData={updateFormData} />} 
        />
        <Route 
          path="/form3" 
          element={<Form3 formData={formData} updateFormData={updateFormData} />} 
        />
        <Route 
          path="/form4" 
          element={<Form4 formData={formData} updateFormData={updateFormData} />} 
        />
        <Route path="/success" element={<Success formData={formData} />} />
      </Routes>
    </div>
  );
};

export default App;
