import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "../Routines/PageRoutine.css"
import Dia from "../../Images/limpiador-facial.jpg"
import LogoDia from "../../Images/sol.png"
import LogoNoche from "../../Images/fase-lunar.png"
import Noche from "../../Images/Rutina_facial.jpg"
import { Link } from "@material-ui/core";



function PageRoutine(){
    return(
        <>
        <Navbar/>

        <div>
            <h2 className="tittle-routines">Rutinas</h2>
        </div>
        <div>
            <p className="aviso-routines">Recuerda que debes realizar <br></br>limpieza de  tu rostro en la <br></br>mañana  y en la noche.</p>
            <div className="logos-routines">
            
            <img className="logo-dia" src={LogoDia}></img>
            
            <img className="logo-noche" src={LogoNoche}></img>
            </div>
        </div>

        

        <div className="images-routines">
            <Link>
            <img className="images-dia" src={Dia}></img>
            </Link>
            <Link className="buttons-routines">
            <button className="button-mis-rutinas">Mis rutinas</button>
            </Link>
            <Link>
            <img className="images-noche" src={Noche}></img>
            </Link>
        </div>
        
        </>
    )
}

export default PageRoutine