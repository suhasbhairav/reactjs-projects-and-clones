import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Image } from 'mui-image';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { FormControl, OutlinedInput, InputAdornment } from '@mui/material';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import AppsIcon from '@mui/icons-material/Apps';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const MainAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor: 'white', boxShadow: 'none'}}>
        <Grid container spacing={2} style={{padding: '10px'}}>
          <Grid item xs={1}>

          </Grid>
          <Grid item xs={2} style={{display: 'flex', flexDirection: 'row'}}>
            <Image src='https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' width={32} height={32} />
            <FormControl size='small' style={{backgroundColor: 'gray', marginLeft: '2px'}} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            startAdornment={
              <InputAdornment position='start'>
                <IconButton
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
          </Grid>
          <Grid item xs={1}>
          
          </Grid>
          <Grid item xs={8} style={{display: 'flex', flexDirection: 'row'}}>
          <IconButton
                >
                  <HomeIcon />
                </IconButton>
                <IconButton
                >
                  <SupervisorAccountIcon />
                </IconButton>
                <IconButton
                >
                  <BusinessCenterIcon />
                </IconButton>
                <IconButton
                >
                  <MessageRoundedIcon />
                </IconButton>
                <IconButton
                >
                  <NotificationsRoundedIcon />
                </IconButton>
                <IconButton
                >
                  <NotificationsRoundedIcon />
                </IconButton>
                <IconButton
                >
                  <AppsIcon />
                </IconButton>
                <IconButton
                >
                  <ShoppingBasketIcon />
                </IconButton>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  )
}

export default MainAppBar