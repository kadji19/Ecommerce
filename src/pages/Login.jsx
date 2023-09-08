import React, { useState } from 'react';
import  '../css/login.css';

function Login() {

        const [isRegistering, setIsRegistering] = useState(true);

        const toggleForm = () => {
          setIsRegistering(!isRegistering);
        };
    return (
      <div className="login-page">
        <div className="form-container">
          <div className={`form ${isRegistering ? 'form-show' : 'form-hide'}`}>
            {isRegistering ? (
              <form className="register-form" method="POST">
                <h2><i className="fas fa-lock"></i> Register</h2>
                <input type="text" placeholder="Full Name *" required />
                <input type="text" placeholder="Username *" required />
                <input type="email" placeholder="Email *" required />
                <input type="password" placeholder="Password *" required />
                <button type="submit">create</button>
                <p className="message">
                  Already registered? <button onClick={toggleForm}>Sign In</button>
                </p>
              </form>
            ) : (
              <form className="login-form" method="post">
                <h2><i className="fas fa-lock"></i> Login</h2>
                <input type="text" placeholder="Username" required />
                <input type="password" placeholder="Password" required />
                <button type="submit" name="send2">login</button>
                <p className="message">
                  Not registered? <button onClick={toggleForm}>Create an account</button>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  
}

export default Login 