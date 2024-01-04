import "./Contact.css";
import github from "../../../assets/github.png";
import linkedin from "../../../assets/linkedin.png";
import gmail from "../../../assets/gmail.png";
import contact from "../../../assets/contact.png";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <span className="contact-text">
          <img src={contact} className="contactHeader" alt="contact-header" />
        </span>
          <h2>Feel free to reach out through  the following avenues :)</h2>
        <div className="icon-container">
          <div className="icon-section">
            <a href="mailto:adrimsaav@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={gmail} alt="" className="icon" /></a>
          </div>
          <div className="icon-section">
            <a href="https://www.linkedin.com/in/adriana-saavedra/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="" className="icon" /></a>
          </div>
          <div className="icon-section">
            <a href="https://github.com/adrimsaav" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="" className="icon" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}