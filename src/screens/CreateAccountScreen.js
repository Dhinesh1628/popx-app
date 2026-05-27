import { useState } from 'react';
import './CreateAccountScreen.css';

export default function CreateAccountScreen({ navigate }) {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes',
  });

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = () => {
    navigate('account');
  };

  return (
    <div className="screen signup-screen">
      <div className="signup-content">
        <h1 className="screen-title">
          Create your<br />PopX account
        </h1>

        <div className="signup-form">
          {/* Full Name */}
          <div className="field-group">
            <label className="field-label">
              Full Name<span> *</span>
            </label>
            <input
              className="field-input"
              type="text"
              placeholder="Marry Doe"
              value={form.fullName}
              onChange={update('fullName')}
            />
          </div>

          {/* Phone Number */}
          <div className="field-group">
            <label className="field-label">
              Phone number<span> *</span>
            </label>
            <input
              className="field-input"
              type="tel"
              placeholder="Marry Doe"
              value={form.phone}
              onChange={update('phone')}
            />
          </div>

          {/* Email */}
          <div className="field-group">
            <label className="field-label">
              Email address<span> *</span>
            </label>
            <input
              className="field-input"
              type="email"
              placeholder="Marry Doe"
              value={form.email}
              onChange={update('email')}
            />
          </div>

          {/* Password */}
          <div className="field-group">
            <label className="field-label">
              Password<span> *</span>
            </label>
            <input
              className="field-input"
              type="password"
              placeholder="Marry Doe"
              value={form.password}
              onChange={update('password')}
            />
          </div>

          {/* Company Name */}
          <div className="field-group">
            <label className="field-label">Company name</label>
            <input
              className="field-input"
              type="text"
              placeholder="Marry Doe"
              value={form.company}
              onChange={update('company')}
            />
          </div>

          {/* Agency Radio */}
          <div className="agency-group">
            <p className="agency-label">
              Are you an Agency?<span className="required"> *</span>
            </p>
            <div className="radio-group">
              <label className="radio-option">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={form.isAgency === 'yes'}
                  onChange={update('isAgency')}
                />
                <span className="radio-custom" />
                <span className="radio-text">Yes</span>
              </label>

              <label className="radio-option">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={form.isAgency === 'no'}
                  onChange={update('isAgency')}
                />
                <span className="radio-custom" />
                <span className="radio-text">No</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer pushes button to bottom */}
      <div className="signup-spacer" />

      <div className="signup-footer">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Create Account
        </button>
      </div>
    </div>
  );
}
