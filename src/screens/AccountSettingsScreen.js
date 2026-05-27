import './AccountSettingsScreen.css';

/* Using a placeholder avatar image (data URI of a simple avatar) */
const AVATAR_URL =
  'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop&crop=faces';

export default function AccountSettingsScreen({ navigate }) {
  return (
    <div className="screen account-screen">
      {/* Header */}
      <div className="account-header">
        <h2 className="account-header-title">Account Settings</h2>
      </div>

      <div className="account-divider-top" />

      {/* Profile row */}
      <div className="account-profile-row">
        <div className="avatar-wrap">
          <img
            className="avatar-img"
            src={AVATAR_URL}
            alt="Profile"
          />
          <div className="avatar-camera-btn" aria-label="Change photo">
            <CameraIcon />
          </div>
        </div>

        <div className="profile-info">
          <p className="profile-name">Marry Doe</p>
          <p className="profile-email">Marry@Gmail.Com</p>
        </div>
      </div>

      <div className="account-bio">
        <p>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed
          Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna
          Aliquyam Erat, Sed Diam
        </p>
      </div>

      <div className="account-divider" />

      {/* Empty content area below divider (as in design) */}
      <div className="account-content-area" />

      <div className="account-divider" />
    </div>
  );
}

function CameraIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}
