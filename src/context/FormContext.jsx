import { useState } from 'react';

export const useFormData = () => {
  const [formData, setFormData] = useState({
    // Form 1 - Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    address: '',
    emergencyContact: '',

    // Form 2 - Course Selection & Academic Details
    courseChoice: '',
    secondChoice: '',
    campus: '',
    modeOfStudy: '',
    englishScore: '',
    mathScore: '',
    achievements: '',

    // Form 3 - Kenyan Curriculum Information
    kcpeScore: '',
    primarySchool: '',
    kcseScore: '',
    kcseGrade: '',
    secondarySchool: '',
    secondaryYear: '',

    // Form 4 - Documents
    transcripts: null,
    idCard: null,
    photo: null,
    recommendationLetter: null,
    englishCertificate: null,
    statementOfPurpose: '',
    declaration: false,

    // Form 5 - Terms
    termsAccepted: false,
    privacyAccepted: false,
    rulesAccepted: false
  });

  const updateFormData = (newData) => {
    setFormData(prev => ({
      ...prev,
      ...newData
    }));
  };

  const resetForm = () => {
    setFormData({});
  };

  return {
    formData,
    updateFormData,
    resetForm
  };
}; 