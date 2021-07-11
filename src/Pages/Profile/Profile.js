import React from 'react';
import Foto from "../../Images/user.png";
import { auth } from '../../functions/firebaseAuth';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import "../Profile/Profile.css";


export function Profile (){
    const user = auth.currentUser;
    return(
        <div>
            <Navbar/>
            <div className="profile">
                <div>
                <h2>Profile</h2>
                    <img src={user ? auth.currentUser.photoURL : Foto} className="profile-img" alt="Avatar" />
                    <span>{user ? auth.currentUser.displayName : "No asignado"}</span>
                    <span>{user ? auth.currentUser.email : "No asignado"}</span>
                </div>
                <Link to = "/home">
                <button className="buttonProfile" >Volver</button>
                </Link>
                
            </div>
        </div>
    );
}

export default Profile