import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, Button, Stack } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#ebebeb',
  height:'130px',
  ...theme.typography.body2,
  padding: theme.spacing(6),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

function Dashboard({ role = 'member', user }) {
  const [books, setBooks] = useState([
    { id: 1, title: 'Harry Potter', author: 'J.K. Rowling', status: 'Available' },
    { id: 2, title: '1984', author: 'George Orwell', status: 'Borrowed' },
    { id: 3, title: 'The Hobbit', author: 'J.R.R. Tolkien', status: 'Available' },
  ]);

  return (
    <>
      <Box sx={{ flexGrow: 1, margin: 4 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {books.map((book) => (
            <Grid item xs={4} sm={4} md={4} key={book.id}>
              <Item>
                <Typography variant="h6">{book.title}</Typography>
                <Typography variant="body2">Author: {book.author}</Typography>
                <Typography variant="body2">Status: {book.status}</Typography>

                {role === 'admin' && (
                  <Stack direction="row" spacing={2} sx={{ mt: 2, justifyContent: 'center' }}>
                    <Button
                      variant="contained"
                      disabled={book.status !== 'Available'}
                    >
                      Issue Book
                    </Button>
                    <Button variant="outlined">Check Status</Button>
                  </Stack>
                )}

                {role === 'member' && (
                  <Stack direction="row" spacing={2} sx={{ mt: 2, justifyContent: 'center' }}>
                    <Button
                      variant="contained"
                      disabled={book.status !== 'Available'}
                    >
                      Borrow
                    </Button>
                  </Stack>
                )}
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Dashboard;
