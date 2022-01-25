import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css';

import ToggleColorMode from './components/toggleColorMode/ToggleColorMode';
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const MyApp = () => (
  <React.StrictMode>
    <CssBaseline />
    <ToggleColorMode>
      <App />
    </ToggleColorMode>
  </React.StrictMode>
);

ReactDOM.render(<MyApp />, document.getElementById('root'));
