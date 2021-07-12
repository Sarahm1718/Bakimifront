import React from "react";
import Navbar from '../../components/Navbar/Navbar';
import "./index.css"
import { Link } from "react-router-dom";
import Oyli from "../../Images/petroleo.png";
import Chat from "../Chat/Chat";


function HomeOily (){
    return(
        <>
            <Navbar/>
            
            <div className="content">
                <div className="primary-buttons">
                    <h2 className="tituloskin">Piel grasa<img className="image-oily" src={Oyli}></img></h2>
                    <div className="primary-buttonse">
                        <Link to="/chat">
                        <button className="button-chat-publico">Chat Publico</button>
                        </Link>
                    </div>
                </div>
                
                <nav className="cards">
                    <Link to="/mascarillasNaturales">
                        <div className="card">Mascarillas naturales</div>
                    </Link>
                    <Link to="/limpiezaProfunda">
                        <div className="card">Limpieza facial profunda</div>
                    </Link>
                    <Link to="/bloqueadorSolar">
                        <div className="card">Bloqueador solar</div>
                    </Link>
                </nav>
            </div>

        </>
    )
}

export default HomeOily