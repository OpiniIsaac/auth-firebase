import { Box, Button, TextField } from '@mui/material';
import { useRef } from 'react';
import { useAuth } from '../context/AithProvider';
// Import useHistory for navigation
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signUp } = useAuth();
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
     if (passwordRef.current.value === confirmPasswordRef.current.value){
          await signUp(emailRef.current.value, passwordRef.current.value);
          navigate('/login');
     }
     
    
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
            inputRef={emailRef} 
          />
           <TextField
            id="password"
            label="Password"
            variant="filled"
            sx={{ width: '100%' }}
            inputRef={passwordRef} 
          />
          <TextField
            id="password"
            label="Confirm Password"
            variant="filled"
            sx={{ width: '100%' }}
            inputRef={confirmPasswordRef}           />
          <Button type="submit" variant="contained" sx={{ width: '100%' }}>
            Sign In
          </Button>
        </Box>
      </div>
    </div>
  );
}
