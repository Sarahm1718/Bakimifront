import React from "react";
import Navbar from '../../components/Navbar/Navbar';
import {signInWithGoogle} from "../../functions/firebaseAuth";
//import "firebase/auth";

//Usuario que inicia sesion
//export const auth = firebase.auth();

function Home (){
    return(
        <>
        <Navbar/>
         <div>
            <h1 className="tituloprueba">Hola</h1>
        </div>
        <div>
            <h1>Hola</h1>
        </div>
        </>
       
    )
}

export default Home