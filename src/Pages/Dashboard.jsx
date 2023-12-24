import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import { useAuth } from '../context/AithProvider';
import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {

     const {currentUser,logout} = useAuth()
     const navigate = useNavigate()
async function handleSubmit (){
try {
     await logout()
     navigate('/login')
} catch (error) {
 console.log(error)    
}

}
  return (
    <>
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button onClick={handleSubmit} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <Container>
     <h1>Hello {currentUser.email}</h1>
    </Container>
    </>
  );
}