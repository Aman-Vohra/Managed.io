import React from 'react';
import '../CSS/About.css'
import Typography from '@mui/material/Typography';
import L from "../../Img/lg.svg"
import Nv from './Nv';
import IC from '../../Img/ico.svg'
import H from '../../Img/html.png'
import C from '../../Img/css.png'
import B from '../../Img/bootstrap.png'
import R from '../../Img/react.png'
import M from '../../Img/mui.png'
import N from '../../Img/node.png'
import MG from '../../Img/mongo.png'
import S from '../../Img/sweet.png'
import SS from '../../Img/sass.png'

const About = () => {
  return (
    <>
    <Nv />
    <div className='about'>
    <Typography variant="h6" noWrap component="div" sx={{ fontFamily: "Poppins, sans-serif", fontSize: "4rem", justifyContent: "center", marginLeft: "100px", color: "#3f3d56"}}>
            ABOUT
          </Typography>
    <div className='parent1'>
    <div className='child float-left-child-main'>
        <div className='child float-left-child1'>
        <img src={L} alt='logo' className='img1'/>
        </div>
        <div className='child float-left-child1'>
        <h1 className='title1'>Managed.io</h1>
        </div>
        <div className='disc'>
        <p className='desc'>
    Hey, I am Aman Vohra, the developer of Managed.io.<br />
    This web application is made for everybody as all of <br />us need to keep up with the day to day tasks.<br />
    The Languages, Frameworks and tools used in the<br /> implementation of this website are HTML, CSS, <br />React JS, 
    Bootstrap, Material-UI, Node JS,<br /> Mongo DB, React Beautiful DnD, SweetAlert, NodeSaSS.
        </p>
        </div>
        </div>
    <div className='child float-left-child-main'>
    <img src={IC} alt='icon' className='ico'/>
    </div>
    </div>
    <div className='float-child-left-icons'>
    <marquee behavior="scroll" direction="left">
    <img src={H} alt='icon' className='lang'/>
    <img src={C} alt='icon' className='lang1'/>
    <img src={B} alt='icon' className='lang1'/>
    <img src={R} alt='icon' className='lang'/>
    <img src={M} alt='icon' className='lang1'/>
    <img src={N} alt='icon' className='lang'/>
    <img src={MG} alt='icon' className='lang'/>
    <img src={S} alt='icon' className='lang2'/>
    <img src={SS} alt='icon' className='lang3'/>
    </marquee>
    </div>
    
    </div>
    </>
  )
}

export default About