import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ColorModeContext } from '../..';

type ReactNode =
  | React.ReactChild
  | React.ReactFragment
  | React.ReactPortal
  | boolean
  | null
  | undefined;

export default function ToggleColorMode({ children }: { children: ReactNode }) {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
          },
          secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
          },
          // Used by `getContrastText()` to maximize the contrast between
          // the background and the text.
          contrastThreshold: 3,
          // Used by the functions below to shift a color's luminance by approximately
          // two indexes within its tonal palette.
          // E.g., shift from Red 500 to Red 300 or Red 700.
          tonalOffset: 0.2,
        },
      }),
    [mode]
  );

  console.log({ mode });
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
