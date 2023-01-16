import React, { Component } from 'react'
import '../styles/Common.css'
import L from '../Img/lg.svg'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';

export default class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:9000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          swal({title: "Wonderful!", text: "You are Logged In!", icon:"success", buttons: false});
          let tID = setTimeout(function () {
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);
          window.location.href = "./Managed";
          window.clearTimeout(tID);
        }, 2000);
        }
        else if(data.error === "User Not found"){
          swal({title: "Error!", text: "User Not Found!", icon:"error", buttons: false, timer: 2000});
        }
        else{
          swal({title: "Error!", text: "Invalid Password!", icon:"error", buttons: false, timer: 2000});
        }
      });
  }
render(){  
return (
    <>
    <div onSubmit={this.handleSubmit} className="login-back">
    <div className='parent'>
    <div className='child float-left-child'>
      <img src={L} alt='logo' className='img'/>
    </div>
    <div className='child float-left-child'>
    <h1 className='title-ls'>Managed.io</h1>
    </div>
    </div>
<form className='form'>
  <div className="row-1">
  <div className="heading">
		<h1 className="text-ls text-large">Sign In</h1>
		<p className="text-ls text-normal">New user? <span><Link to='/Signup' className="text-ls text-links">Create an account</Link></span>
		</p>
	</div>
    <label htmlFor="email" className="input-label" hidden>Email Address</label>
		<input type="email" name="email" id="email" placeholder="Email Address" required
    onChange={(e) => this.setState({ email: e.target.value})}/>
  </div>
  <div className="row-1">
  <label htmlFor="password" className="input-label" hidden>Password</label>
	<input type="password" name="password" id="password" placeholder="Password" required
  onChange={(e) => this.setState({ password: e.target.value})}/>
  </div>
  <button type="submit" className='button'>Login</button>
</form>
</div>
<footer className="w-100 text-center">
<p>&copy; 2023 All Rights Reserved<br/> Made by Aman Vohra </p>
</footer>
    </>
  )
}
}