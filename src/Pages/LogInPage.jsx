import { Box, Button, TextField } from '@mui/material';
import { useRef } from 'react';
import { useAuth } from '../context/AithProvider';
// Import useHistory for navigation
import { Navigate, useNavigate } from 'react-router-dom';

export default function LogInPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signIn,currentUser } = useAuth();
 
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signIn(emailRef.current.value, passwordRef.current.value); // Pass the values from refs to login
      navigate('/dashboard'); // Use history.push for navigation
      console.log(currentUser)
    } catch {
      console.log('Error occurred');
    }
  }

  return (
    <div className="card" style={{ margin: '0 auto', width: '50vh' }}>
      <div>
        <h1>Welcome Back</h1>
        <Box
          component="form"
          onSubmit={handleSubmit}
          display="flex"
          flexDirection="column"
          gap={2}
        >
          <TextField
            id="email"
            label="Email"
            variant="filled"
            sx={{ width: '100%' }}
            inputRef={emailRef} // Use inputRef for TextField
          />
          <TextField
            id="password"
            label="Password"
            variant="filled"
            sx={{ width: '100%' }}
            inputRef={passwordRef} // Use inputRef for TextField
          />
          <Button type="submit" variant="contained" sx={{ width: '100%' }}>
            Sign In
          </Button>
        </Box>
      </div>
    </div>
  );
}
