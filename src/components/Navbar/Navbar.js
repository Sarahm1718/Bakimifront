import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../functions/firebaseAuth";
import Log from "../../Images/logout.png";
import { Link } from "react-router-dom";
import Logo1 from "../../Images/Logo_solofigura.png";
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import "../../components/navbar.css";
import  bodyNavbar from "../../Images/usuario.png";
import signOut from "../../Pages/Login/SignOut";
import Logoutbut from "../../Images/logout.png";




const Navbar = () => {
   return(
       <>
           <header className="header">
                <Link to="/">
                    <img className="header--logo" src={Logo1}></img>
                </Link> 
                <div className="header--nav">
                    <Link to={signOut}>
                    <img src={Logoutbut} alt="x"/> 
                    </Link>
                
                    <img src={Logoutbut} alt="x"/>                
                    <img src={Logoutbut} alt="x"/>                
                    <img src={Logoutbut} alt="x"/>                
                    <img src={Logoutbut} alt="x"/>                


                </div>
           </header>
       </>
   )
}

export default Navbar