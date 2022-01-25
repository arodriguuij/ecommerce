import { ReactNode } from 'react';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

import Header from '../header/Header';

const Layout = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();

  const useStyles = makeStyles({
    root: {
      width: '100%',
      height: '100vh',
      backgroundColor: theme.palette.background.default,
      [theme.breakpoints.down('xs')]: {
        paddingTop: theme.spacing(2),
      },
      minHeight: '100vh',
    },
  });
  const classes = useStyles();

  return (
    <>
      <Header />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        className={classes.root}
      >
        <Grid item xs={3}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};
export default Layout;
