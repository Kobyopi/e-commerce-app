import React from 'react';
import './LoginForm.css'; // Correct path to your CSS file

const LoginForm = () => {
    return (
        <div className="login-form-container">
            <h2>Log In</h2>
            <form className="login-form">
                <label>Email: </label>
                <input type="email" required />
                <label>Password: </label>
                <input type="password" required />
                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

export default LoginForm;
