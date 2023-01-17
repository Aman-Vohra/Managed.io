import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Common.css'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import I from '../Img/lg.svg'
import R from '../Img/reactjs.png' 
import M from '../Img/mui.png'
import D from '../Img/dnd.png'
import G from '../Img/m.png'

export default class First extends Component{
  render(){  
  return (
    <>
    <div className='body'>
    <div className='plate'>
    <div className='test'>
    <Navbar variant="dark">
    <Container>
      <Navbar.Brand className='title'>Managed.io</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#about">About</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  <section>
  <div className="col-11 mx-auto">
    <div className="top-content">
      <div className="row-content">
      <div className="row-child-1">
        <p className="text">Create and manage<br/>your tasks easily<br/>on <strong className="brand-name">Managed.io</strong> </p>
        <p className="text-2">Access all your tasks and manage them with the provided sections<br/>such as Todo, Doing, Done and Rejected</p>
      <div className="mt-3">
        <div className="btn-get-started">
        <Link to='/login' className='go'>Get Started</Link>
        </div>
      </div>
      </div>
      <div className="row-child-1">
        <img src={I} className="image-fluid-animated" alt="home img"></img>
      </div>
    </div>
    </div>
  </div>
  </section>
    </div>
    <section>
  <div className="col-11 mx-auto my-5" id='about'>
    <div className="top-content">
      <div className="row-content">
      <div className="row-child-1">
        <div className='about'>
        <p className="text-a"><strong className="brand-name-a">About</strong> Us</p>
        <p className="text-a-1">Hi, this is Aman Vohra, developer of Managed.io
        <br/>As you can see it is a web application through which you can manage your tasks easily. 
        There pre-developed sections such as Todo, Doing, Done and Rejected which helps you 
        manage your task easily.</p>
      <div className="mt-3">
          <img src={R} alt="react" className='react'></img>
          <img src={M} alt="react" className='react1'></img>
      </div>
      <div className="mt-3">
          <img src={D} alt="react" className='react'></img>
          <img src={G} alt="react" className='react2'></img>
      </div>
      </div>
      </div>
      <div className="row-child-1">
        <div className='icon-back'>
        <h1 className='icon'>M</h1>
        </div>
      </div>
    </div>
    </div>
  </div>
  </section>
    </div>
    </div>
</>
 )
}
}
