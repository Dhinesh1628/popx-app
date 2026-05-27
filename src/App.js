import { useState } from 'react';
import './App.css';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import AccountSettingsScreen from './screens/AccountSettingsScreen';

export default function App() {
  const [screen, setScreen] = useState('welcome');

  const navigate = (to) => setScreen(to);

  return (
    <div className="phone-wrapper">
      <div className="phone-frame">
        <div className="phone-screen">
          {screen === 'welcome'  && <WelcomeScreen navigate={navigate} />}
          {screen === 'login'   && <LoginScreen navigate={navigate} />}
          {screen === 'signup'  && <CreateAccountScreen navigate={navigate} />}
          {screen === 'account' && <AccountSettingsScreen navigate={navigate} />}
        </div>
      </div>
    </div>
  );
}
