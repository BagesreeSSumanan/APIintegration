// src/components/LoginPage.js
import React , {useEffect}from 'react';
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Paper
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios'
import { useState } from 'react'


export default function Login() {
 
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
  const navigate = useNavigate(); 
  const [open, setOpen] = React.useState(false);
      const handleClose = () => {
    setOpen(false);
  };
    const handleSubmit = async (e) => {
    e.preventDefault();
 try {
      const response = await axios.post('http://localhost:53522/api/auth/login', {
        username: username,
        password: password,
      });

      console.log('Login success:', response.data);
      const result = response.data;

      if (result) {
        console.log("logged in")
      } else {
        setOpen(true); // invalid credentials
      }

    } catch (error) {
      console.error('Login error:', error);
      setOpen(true); 
    }
  };



  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ p: 4, mt: 8, borderRadius: 2 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
            >
              Sign In
            </Button>
            
          </Box>
        </Box>
      </Paper>
      <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Invalid username or password"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                 Please check your credentials and try again.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} autoFocus>
                Ok
              </Button>
            </DialogActions>
          </Dialog>
    </Container>
  );
}
