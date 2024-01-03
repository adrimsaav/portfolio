import "./Contact.css";
import contact from "../../../assets/contact.png"

export default function Contact() {
    return (
        <div className='contact-container'>
            <div className="contact-content">
                <span className="text">
                    <img src={contact} className="contactHeader" alt="header" />
                </span>
            </div>
        </div>
    );
}