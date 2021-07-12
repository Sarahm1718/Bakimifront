import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../functions/firebaseAuth";
import Log from "../../Images/logout.png";
import { Link } from "react-router-dom";
import Logo1 from "../../Images/Logo_solofigura.png";
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import "../../components/navbar.css";
import  bodyNavbar from "../../Images/usuario.png";
import Logoutbut from "../../Images/logout.png";

import Crema from "../../Images/crema.png";
import User from "../../Images/user.png";
import Cuerpo from "../../Images/usuario.png";
import signOut from "../../Pages/Login/SignOut";

import Foto from "../../Images/user.png";


const Navbar = () => {
    
    const user = auth.currentUser;
   return(
       <>
           <header className="header">
                <Link to="/">
                    <div className="flex">
                        <img className="header--logo" src={Logo1}></img>
                        <p className="tittle-navbar">Bakimi</p>
                    </div>
                </Link> 
                <div className="header--nav">

                   <Link to="/pageRoutine">
                   <img src={Crema} alt="x"/>   
                   </Link>
                      <Link to="/profile">
                    <img src={user ? auth.currentUser.photoURL : Foto} className="profile-img" alt="Avatar" />
                      </Link>  
                      <img src={Logoutbut} alt="x" onClick={signOut}/>     
                     

                               
                                    


                </div>
           </header>
       </>
   )
}

export default Navbar