import { useContext } from 'react';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

import { ColorModeContext } from '../..';

const Header = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const useStyles = makeStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.default,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.text.primary,
      height: '4rem',
    },
  });

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {theme.palette.mode} mode
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === 'dark' ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
};
export default Header;
