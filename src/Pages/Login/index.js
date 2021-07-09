import React from "react";
import "./styles/index.css";
import Logo from "../../Images/Logo_bakimi.png"
import Hoja from "../../Images/hojav.png"


function Login({signInWithGoogle}){
    return(
        <div id="container1" className="container">
            <div className="sub-container" ><img className="logo-bakimi"src={Logo} /></div>
            <div className="sub-container" ><h1 className="frase1">
                    "Cuidar tu piel todos los dias, es como enviarle pequeñas notitas de amor a tu cuerpo"
                </h1></div>
            <div className="sub-container" >
            <div id = "container-login" className="container-login">
        <div id = "container-login-buttonGoogle" className="container-login-buttonGoogle">
          <button 
            id = "buttonSinginwithGoogle"
            data-testid="buttonSinginwithGoogle"
            onClick={signInWithGoogle}
          >
            <img
              id = "logo-google-login"
              src="https://img.icons8.com/fluent/50/000000/google-logo.png"
              alt="icon-google"
            />
            Sign up with Google
          </button>
        </div>
    
        </div>
            </div>
            
                <div className="sub-container" >
                  
        <img className="muñeca_inicio"src={Hoja} />
                
            </div>
        </div>
    );
}

export default Login