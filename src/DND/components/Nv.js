import React,{Component} from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import LG from '../../Img/lg.svg'
import '../../styles/Common.css'


export default class Nv extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
          userData: "",
        };
      }
      componentDidMount() {
        // fetch("http://localhost:9000/userData", {
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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#f1f5f9", color: "#3f3d56" }}>
        <Toolbar>
          <img src={LG} alt='' style={{width:"auto", height:"50px", marginRight:"10px"}}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: "Poppins, sans-serif", fontWeight: '600' }}>
            Managed.io
          </Typography>
          <Button onClick={this.logOut} sx={{ fontFamily: "Poppins, sans-serif", color: "#000"}}><LogoutIcon/>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
}