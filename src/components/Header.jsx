import "../styles/forms.css";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="university-header">
      <div className="header-content">
        <Logo />
        <div className="university-info">
          <h1 className="university-name">Sakim International University</h1>
          <p className="university-motto">Your thoughts shape your future—believe, and you will become.</p>
        </div>
      </div>
    </header>
  );
};

export default Header; 