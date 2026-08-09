import { useState } from 'react';
import './ContactForm.css';

function ContactForm({ theme }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (name, value) => {
    let error = '';
    if (name === 'name' && value.length < 2) error = 'Name must be at least 2 characters';
    if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Invalid email address';
    if (name === 'message' && value.length < 10) error = 'Message must be at least 10 characters';
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validate(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validate(name, value) }));
  };

  const isFormValid = () => {
    return (
      formData.name.length >= 2 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      formData.message.length >= 10
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTouched({});
      setErrors({});
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className={`contact-form-container ${theme}`}>
      {submitted ? (
        <div className="success-message">Message sent successfully!</div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.name ? 'error-input' : ''}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email ? 'error-input' : ''}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.message ? 'error-input' : ''}
            ></textarea>
            {errors.message && <span className="error-text">{errors.message}</span>}
          </div>

          <button type="submit" disabled={!isFormValid()} className="submit-btn">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;
