import { Container, Box, Button } from '@mui/material';

const Homepage = ({ onLogout }: { onLogout: () => void }) => {
  return (
    <Container>
      <Box>
        <Button variant="outlined" onClick={onLogout}>
          Log out
        </Button>
      </Box>
      <Box>
        <h1>Home page</h1>
      </Box>
    </Container>
  );
};

export default Homepage;
