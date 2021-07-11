import React from "react";
import Navbar from '../../components/Navbar/Navbar';
import "./index.css"
import { Link } from "react-router-dom";

import {signInWithGoogle} from "../../functions/firebaseAuth";
//import SignOut from "../Login/SignOut";
//import "firebase/auth";

//Usuario que inicia sesion
//export const auth = firebase.auth();

function Home (){
    return(
        <>
            <Navbar/>
            
            <div className="content">
                <h2>Piel grasa</h2>
                <nav className="cards">
                    <Link to="/">
                        <div className="card">Mascarillas naturales</div>
                    </Link>
                    <Link to="/">
                        <div className="card">Mascarillas naturales</div>
                    </Link>
                    <Link to="/">
                        <div className="card">Mascarillas naturales</div>
                    </Link>
                    <Link to="/">
                        <div className="card">Mascarillas naturales</div>
                    </Link>
                    <Link to="/">
                        <div className="card">Mascarillas naturales</div>
                    </Link>
                    <Link to="/">
                        <div className="card">Mascarillas naturales</div>
                    </Link>
                </nav>
            </div>

        </>
    )
}

export default Home