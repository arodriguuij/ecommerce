import { useEffect, useState } from 'react';

import Login from './components/login/login';
import Layout from './components/layout/Layout';
import Homepage from './components/homepage/Homepage';

function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) setIsUserSignedIn(true);
    else setIsUserSignedIn(false);
  }, []);

  const onLoginSuccessful = () => {
    setIsUserSignedIn(true);
  };

  const onLogout = () => {
    localStorage.removeItem('name');
    localStorage.removeItem('token');
    setIsUserSignedIn(false);
  };

  return (
    <Layout>
      {isUserSignedIn ? (
        <Homepage onLogout={onLogout} />
      ) : (
        <Login onLoginSuccessful={onLoginSuccessful} />
      )}
    </Layout>
  );
}

export default App;
