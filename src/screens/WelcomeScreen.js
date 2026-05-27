import './WelcomeScreen.css';

export default function WelcomeScreen({ navigate }) {
  return (
    <div className="screen welcome-screen">
      {/* Top empty area (image placeholder per design) */}
      <div className="welcome-hero" />

      {/* Bottom content area */}
      <div className="welcome-content">
        <h1 className="screen-title">Welcome to PopX</h1>
        <p className="screen-subtitle">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit,
        </p>

        <div className="welcome-actions">
          <button
            className="btn btn-primary"
            onClick={() => navigate('signup')}
          >
            Create Account
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => navigate('login')}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}
