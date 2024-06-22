import React from 'react';
import './SignUpForm.css';

const SignUpForm = () => {
    return (
        <div className="sign-up-form-container">
            <h2>Sign Up</h2>
            <form className="sign-up-form">
                <label>Email: </label>
                <input type="email" required />
                <label>Password: </label>
                <input type="password" required />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpForm;
