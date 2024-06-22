import React from 'react';
import './ContactForm.css'; // Correct path to your CSS file

const ContactForm = () => {
    return (
        <div className="contact-form-container">
            <h2>Contact Us</h2>
            <form className="contact-form">
                <label>Name: </label>
                <input type="text" required />
                <label>Email: </label>
                <input type="email" required />
                <label>Message: </label>
                <textarea required></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ContactForm;