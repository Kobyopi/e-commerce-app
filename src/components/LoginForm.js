import React from 'react';

const LoginForm = () => {
    return (
        <div>
            <h2>Log In</h2>
            <form>
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
