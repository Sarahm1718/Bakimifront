import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../functions/firebaseAuth";
import Log from "../../Images/logout.png";
import { Link } from "react-router-dom";
import Logo1 from "../../Images/Logo_solofigura.png";
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import "../../components/navbar.css";
import  bodyNavbar from "../../Images/usuario.png";



const Navbar = () => {
   return(
       <div>
           <header className="header">
               <footer>
               
                   <h3 className="titulobakimi">Bakimi</h3>
                   <img className="Logo-navbar"   
              class="rounded mx-auto d-block Logo-navbar"
               src={Logo1} alt="x"/>
                   
               </footer>
               
           </header>
       </div>
   )
}

export default Navbar