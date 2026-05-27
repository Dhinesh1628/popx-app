import { useState } from 'react';
import './LoginScreen.css';

export default function LoginScreen({ navigate }) {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Navigate to account settings on login
    navigate('account');
  };

  const isFilled = email.trim() !== '' && password.trim() !== '';

  return (
    <div className="screen login-screen">
      <div className="login-content">
        <h1 className="screen-title">
          Signin to your<br />PopX account
        </h1>
        <p className="screen-subtitle">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit,
        </p>

        <div className="login-form">
          {/* Email field */}
          <div className="field-group">
            <label className="field-label">Email Address</label>
            <input
              className="field-input"
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password field */}
          <div className="field-group">
            <label className="field-label">Password</label>
            <input
              className="field-input"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="btn btn-primary"
            onClick={handleLogin}
            disabled={!isFilled}
          >
            Login
          </button>
        </div>
      </div>

      {/* Spacer so content sits at top like the design */}
      <div className="login-spacer" />
    </div>
  );
}
