import React,{Component} from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import AV from '../../Img/av.svg'
import LG from '../../Img/lg.svg'
import '../../styles/Common.css'

const styles = {
  name:{
  fontFamily: "Poppins, sans-serif",
  fontSize: "3vh",
  marginRight: "auto",
}
}

export default class Nv extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
          userData: "",
        };
      }
      componentDidMount() {
        fetch("https://managed-backend.netlify.app/userData", {
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
    <Box sx={{ display: "flex", margin: "auto", width: "auto", height: "auto" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1  , bgcolor: "#f1f5f9", color: "#3f3d56" }}>
        <Toolbar>
        <img src={LG} alt='' style={{width:"50px", height:"50px", marginRight:"10px"}}/>
          <Typography variant="h6"  noWrap component="div" style={styles.name}>
            Managed.io
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
          <Button onClick={this.logOut} sx={{ fontFamily: "Poppins, sans-serif", color: "#000", mr: "10px" }}><LogoutIcon sx={{ mr: "5px" }} />Log Out</Button>
            <Tooltip title="It's you!">
              <IconButton sx={{ p: 0, flexGrow: 0}}>
                <Avatar alt="Remy Sharp" src={AV} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
}