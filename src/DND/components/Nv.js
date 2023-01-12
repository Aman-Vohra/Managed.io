import React,{Component} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeMaxIcon from '@mui/icons-material/HomeMax';
import InfoIcon from '@mui/icons-material/Info';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import AV from '../../Img/av.svg'
import LG from '../../Img/lg.svg'
import { Link } from 'react-router-dom'




const drawerWidth = 240;

export default class Nv extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
          userData: "",
        };
      }
      componentDidMount() {
        fetch("http://localhost:9000/userData", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            token: window.localStorage.getItem("token"),
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "userData");
            this.setState({ userData: data.data });
          });
      }
    
      logOut = () => {
        window.localStorage.clear();
        window.location.href = '/'
      }
      
    render() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1  , bgcolor: "#f1f5f9", color: "#3f3d56" }}>
        <Toolbar>
        <img src={LG} alt='' style={{width:"50px", height:"50px", marginRight:"10px"}}/>
          <Typography variant="h6"  noWrap component="div" sx={{ fontFamily: "Poppins, sans-serif", fontSize: "30px", marginRight: "auto"}}>
            Managed.io
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="It's you!">
              <IconButton sx={{ p: 0, flexGrow: 0}}>
                <Avatar alt="Remy Sharp" src={AV} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px'}}
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ display: "inline-block" }}>
          <List >
              <ListItem disablePadding sx={{ display: "inline-block"}}>
              <ListItemButton>
                  <ListItemIcon>
                  <HomeMaxIcon />
                  </ListItemIcon>
                  <Button sx={{ fontFamily: "Poppins, sans-serif", color: "#3f3d56", ml: "20px" }} component={Link} to="/Managed">Home</Button>
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                   <InfoIcon />
                  </ListItemIcon>
                  <Button sx={{ fontFamily: "Poppins, sans-serif", color: "#3f3d56", ml: "20px"  }} component={Link} to="/About">About</Button>
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <Button onClick={this.logOut} sx={{ fontFamily: "Poppins, sans-serif", color: "#3f3d56", mr: "30px"  }}>Log Out</Button>
                </ListItemButton>
              </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
}