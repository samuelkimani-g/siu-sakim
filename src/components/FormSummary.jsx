import "../styles/forms.css";

const FormSummary = ({ formData }) => {
  const sections = [
    {
      title: "Personal Information",
      fields: [
        { label: "Full Name", value: formData.fullName },
        { label: "Date of Birth", value: formData.dateOfBirth },
        { label: "Gender", value: formData.gender },
        { label: "National ID", value: formData.nationalId },
        { label: "Email", value: formData.email },
        { label: "Phone", value: formData.phone },
        { label: "Address", value: formData.address },
        { label: "County", value: formData.county },
        { label: "Sub-county", value: formData.subCounty },
        { label: "Ward", value: formData.ward }
      ]
    },
    {
      title: "Academic Information",
      fields: [
        { label: "KCPE Score", value: formData.kcpeScore },
        { label: "Primary School", value: formData.primarySchool },
        { label: "KCSE Score", value: formData.kcseScore },
        { label: "KCSE Grade", value: formData.kcseGrade },
        { label: "Secondary School", value: formData.secondarySchool },
        { label: "Year of Completion", value: formData.secondaryYear }
      ]
    },
    {
      title: "Document Uploads",
      fields: [
        { label: "National ID", value: formData.nationalIdFile ? "Uploaded" : "Not uploaded" },
        { label: "KCSE Certificate", value: formData.kcseCertificate ? "Uploaded" : "Not uploaded" },
        { label: "KCPE Certificate", value: formData.kcpeCertificate ? "Uploaded" : "Not uploaded" },
        { label: "Birth Certificate", value: formData.birthCertificate ? "Uploaded" : "Not uploaded" },
        { label: "Passport Photo", value: formData.passportPhoto ? "Uploaded" : "Not uploaded" }
      ]
    }
  ];

  return (
    <div className="form-summary">
      {sections.map((section, index) => (
        <div key={index} className="summary-section">
          <h3 className="summary-title">{section.title}</h3>
          <div className="summary-content">
            {section.fields.map((field, fieldIndex) => (
              <div key={fieldIndex} className="summary-field">
                <span className="field-label">{field.label}</span>
                <span className="field-value">{field.value || "Not provided"}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FormSummary; 