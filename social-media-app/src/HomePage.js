import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button, IconButton } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const HomePage = () => {
  
    return (
        <Box sx={{ flexGrow: 1 }}>
          
          <Grid container spacing={2}>
            <Grid item xs={8}>
            <Grid container spacing={2}>  
              <Grid item xs={12}>
              <TextField multiline={true} rows={3} style={{margin: "10px"}} fullWidth={true} id="outlined-basic" label="Enter your post here" variant="outlined" />
              </Grid>
              <Grid item xs={12} style={{display: 'flex', justifyContent: 'right'}}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AttachFileIcon />
              </IconButton>
                <Button variant='contained' >Post</Button>
              </Grid>
            </Grid>
            </Grid>
            <Grid item xs={4}>
              <Item>xs=4</Item>
            </Grid>
          </Grid>
        </Box>
      );
}

export default HomePage