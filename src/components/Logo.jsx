import siuLogo from "../assets/siulogo.webp";

const Logo = () => {
  return (
    <div className="logo-container">
      <img 
        src={siuLogo} 
        alt="SIU Logo" 
        className="university-logo"
        width="100"
        height="100"
      />
    </div>
  );
};

export default Logo; 