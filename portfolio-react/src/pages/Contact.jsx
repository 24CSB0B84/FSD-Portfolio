import ContactForm from '../components/ContactForm';
import './Contact.css';

const Contact = ({ theme }) => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="section-title title-warm">CONTACT</h1>
        <div className="contact-content">
          <ContactForm theme={theme} />
          
          <div className="contact-info">
            <p className="contact-item">
              <strong>Email:</strong>{' '}
              <a href="mailto:vinjamuri516@email.com">vinjamuri516@email.com</a>
            </p>
            <p className="contact-item">
              <strong>Phone:</strong>{' '}
              <a href="tel:+919014438414">+91-9014438414</a>
            </p>
            <div className="social-links">
              <a href="https://github.com/harshithaVinjamuri" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
              <a href="https://linkedin.com/in/vinjamuri-harshitha/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
