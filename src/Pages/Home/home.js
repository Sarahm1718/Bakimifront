import React from "react";
import Navbar from '../../components/Navbar/Navbar';
import "./index.css"
import { Link } from "react-router-dom";
import Oyli from "../../Images/petroleo.png";
import Youtube from "../../Images/youtube.png"


function Home (){
    return(
        <>
            <Navbar/>
            
            <div className="content">
                <div className="primary-buttons">
                    <h2 className="tituloskin">¿Que tipo de piel tienes?</h2>
                    <div className="primary-buttonse">
                        <button><img className="img-youtube" src={Youtube}></img><a className="button-video" target="_blank" href="https://www.youtube.com/watch?v=RxOFpSpzunM">Video Tutorial</a></button>
                        
                    </div>
                </div>
                
                <div className="pasos-home">
                <p className="pregunta-home">Si no sabes que tipo de piel tienes haz lo siguiente:</p>
                <br></br>
                <li className="paso-one">
                       Lavar el rostro con jabon y secar bien
                   </li>
                   <li className="paso-two">
                       No aplicar ningun producto en 1 hora
                   </li>
                   <li className="paso-three">
                       Al pasar este lapso de tiempo, observa si tu rostro se ve y se siente grasoso(Piel grasa)  
                   </li>
                   <li>
                   Si se siente seca, aspera(Piel seca)
                   </li>
                   <li>
                   Si se siente grasa en la zona T(zona de la nariz) y el resto del rostro un poco seca(Piel mixta) 
                   </li>
                </div>
                
                <nav className="cards">
                    <Link to="/homeOily">
                        <div className="card">Piel Grasa</div>
                    </Link>
                    <Link to="/homeMixed">
                        <div className="card">Piel Mixta</div>
                    </Link>
                    <Link to="/homeDry">
                        <div className="card">Piel Seca</div>
                    </Link>
                   
                </nav>
            </div>

        </>
    )
}

export default Home