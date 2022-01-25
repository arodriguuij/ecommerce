import { useState } from 'react';
import {
  Container,
  FormControl,
  FormGroup,
  Button,
  Alert,
  Card,
  FormHelperText,
  CardHeader,
  CardContent,
  TextField,
} from '@mui/material';
import { login } from '../../api';

const Login = ({ onLoginSuccessful }: { onLoginSuccessful: () => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);
  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  const onSubmit = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setHasError(false);
    const loginResult = await login({ email, password });
    if (!loginResult) setHasError(true);
    else {
      const { name, token } = loginResult;
      // Save user IDs on local storage
      localStorage.setItem('name', name);
      localStorage.setItem('token', token);
      onLoginSuccessful();
    }
  };

  return (
    <Container>
      <Card>
        <CardHeader title="Login" />
        <CardContent>
          <FormControl>
            <FormGroup>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                onChange={onEmailChange}
                value={email}
                placeholder="Enter email"
                type="email"
              />
              <FormHelperText className="text-muted">
                We'll never share your email with anyone else.
              </FormHelperText>
            </FormGroup>
            <br />
            <FormGroup>
              <TextField
                id="pass"
                label="Password"
                variant="outlined"
                onChange={onPasswordChange}
                value={password}
                placeholder="Enter password"
                type="password"
              />
            </FormGroup>
            <br />
            {hasError && (
              <Alert severity={'warning'}>
                The email address and password you entered don't match any
                account. Please try again.
              </Alert>
            )}
            <br />
            <Button
              variant="contained"
              type="submit"
              onClick={(e: any) => onSubmit(e)}
            >
              Submit
            </Button>
          </FormControl>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;
