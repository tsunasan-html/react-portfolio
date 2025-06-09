import React, { useState, useEffect } from 'react';
import '../assets/css/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    mail: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    mail: '',
    message: ''
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.querySelector('.content__title');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = { name: '', mail: '', message: '' };
    let isValid = true;

    if (!formData.name) {
      validationErrors.name = 'NAMEが未入力です';
      isValid = false;
    }
    if (!formData.mail) {
      validationErrors.mail = 'MAILが未入力です';
      isValid = false;
    }
    if (!formData.message) {
      validationErrors.message = 'MESSAGEが未入力です';
      isValid = false;
    }

    setErrors(validationErrors);

    if (isValid) {
      console.log('Form submitted:', formData);
    }
  };

  const isFormValid = formData.name && formData.mail && formData.message;

  return (
    <>
      <div className="l-content content">
        <div className="l-content_inner content_inner">
          <section className="content__form">
            <h1 className={`content__title ${isVisible ? 'visible' : ''}`}>CONTACT</h1>

            <form className="contact_form" onSubmit={handleSubmit}>
              <p className="contact_form_block">
                <label htmlFor="contact_name">NAME</label>
                <input
                  id="contact_name"
                  className="contact_form_input contact_form_input--name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {errors.name && <span className="contact_form_err contact_form_err--name">{errors.name}</span>}
              </p>

              <p className="contact_form_block">
                <label htmlFor="contact_mail">MAIL ADRESS</label>
                <input
                  id="contact_mail"
                  className="contact_form_input contact_form_input--mail"
                  name="mail"
                  type="email"
                  value={formData.mail}
                  onChange={handleInputChange}
                />
                {errors.mail && <span className="contact_form_err contact_form_err--mail">{errors.mail}</span>}
              </p>

              <p className="contact_form_block">
                <label htmlFor="contact_message">MESSAGE</label>
                <textarea
                  id="contact_message"
                  className="contact_form_input contact_form_input--message"
                  wrap="soft"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
                {errors.message && <span className="contact_form_err contact_form_err--message">{errors.message}</span>}
              </p>

              <button
                className="contact_form_button"
                type="submit"
                disabled={!isFormValid}
              >
                送信する
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}

export default Contact;
