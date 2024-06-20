import React from 'react';

const ContactForm = () => {
    return (
        <div>
            <h2>Contact Us</h2>
            <form>
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
