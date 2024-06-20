import React from 'react';

const SignUpForm = () => {
    return (
        <div>
            <h2>Sign Up</h2>
            <form>
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
