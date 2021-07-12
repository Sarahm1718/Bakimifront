import React from "react";
import Navbar from '../../components/Navbar/Navbar';
import "./index.css"
import { Link } from "react-router-dom";
import Mixta from "../../Images/tecnica-mixta.png";


function HomeMixed (){
    return(
        <>
            <Navbar/>
            
            <div className="content">
                <div className="primary-buttons">
                    <h2 className="tituloskin">Piel Mixta<img className="image-oily" src={Mixta}></img></h2>
                    <div className="primary-buttonse">
                        <button className="button-chat-publico">Chat Publico</button>
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

export default HomeMixed