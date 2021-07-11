import React from "react";
import Navbar from '../../components/Navbar/Navbar';
import "./index.css"
import { Link } from "react-router-dom";
import Rostro from "../../Images/rostro-de-un-contorno-de-mujer.png";

function HomeDry (){
    return(
        <>
            <Navbar/>
            
            <div className="content">
                <div className="primary-buttons">
                    <h2 className="tituloskin">Piel Seca<img className="image-oily" src={Rostro}></img></h2>
                    <div className="primary-buttonse">
                        <button className="button-inspiracion">Inspiración</button>
                        <button className="button-chat-publico">Chat Publico</button>
                    </div>
                </div>
                
                <nav className="cards">
                    <Link to="/">
                        <div className="card">Mascarillas naturales</div>
                    </Link>
                    <Link to="/">
                        <div className="card">Limpieza facial profunda</div>
                    </Link>
                    <Link to="/">
                        <div className="card">Productos Recomendados</div>
                    </Link>
                    <Link to="/">
                        <div className="card">Acne</div>
                    </Link>
                    <Link to="/">
                        <div className="card">Mascarillas Velo</div>
                    </Link>
                    <Link to="/">
                        <div className="card">Bloqueador solar y otros productos</div>
                    </Link>
                </nav>
            </div>

        </>
    )
}

export default HomeDry