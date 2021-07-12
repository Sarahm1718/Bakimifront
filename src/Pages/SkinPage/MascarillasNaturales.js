import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Flecha from "../../Images/atras.png"
import "../../Pages/SkinPage/MascarillasNaturales.css"
import { Link } from "react-router-dom";
import Mascarilla1 from "../../Images/mascarilla1.jpg"
import Mascarilla2 from "../../Images/mascarilla2.jpg"
import Mascarilla3 from "../../Images/mascarilla3.jpg"
import Mascarilla4 from "../../Images/mascarilla4.jpg"

function MascarillasNaturales (){
    return(
        <>
        <Navbar/>

        <div className="div-one">
            <img className="flecha" src={Flecha}></img>
            
            <h2 className="titulo-mascarillas">Mascarillas Naturales</h2>
<br></br>
<p>Antes de aplicarte cualquier mascarilla, sin importar tu tipo de piel, debes asegurarte de tener la tez preparada para que puedas aprovechar al máximo todos los beneficios del cuidado que estás a punto de darle a tu rostro.</p>
        </div>
        <div className="contenedor-mascarillas">
            <div className="proceso-img">
            <img className="mascarillas-img" src={Mascarilla1}></img>
            <p className="reseña">Toma 4 o 5 fresas maduras y haz un puré con un tenedor. Luego, agrega una cucharada de miel y mézclalas bien. Cuando tengas la pasta, aplícala sobre el rostro y déjala actuar por 20 minutos. Finalmente, retírala con agua fría. Tanto las fresas como la miel suavizan la dermis, nutriéndola y estimulando la producción de colágeno.</p>
            </div>
            <div className="proceso-img">
            <img className="mascarillas-img" src={Mascarilla2}></img>
            <p className="reseña">Prepara un puré de plátano maduro. Luego, aplica suavemente esta pasta sobre tu cara evitando el contacto con los ojos. Si tu piel es seca, puedes agregar un poco de miel a la mezcla. Deja actuar de 20 a 25 minutos y luego lava con agua tibia. Al instante sentirás tu rostro más suave, ya que el plátano contiene una gran cantidad de antioxidantes y manganeso que protegen la piel y la dejan más joven e hidratada.</p>
            </div>
            <div className="proceso-img">
            <img className="mascarillas-img" src={Mascarilla3}></img>
            <p className="reseña">Para esta mascarilla toma un pepino, córtalo y luego tritúralo hasta obtener una especie de pasta. Extiende esta pasta por tu rostro y déjala reposar por 15 minutos para que haga efecto. Finalmente retíralo con agua fría y verás tu piel fresca. El pepino tiene un buen contenido de vitamina E, agua y aceites naturales que sirven para hidratarla y llenarla de vitalidad.</p>
            </div>
            <div className="proceso-img">
            <img className="mascarillas-img" src={Mascarilla4}></img>
            <p className="reseña">Debes mezclar una cucharada de miel y una cucharada de limón. Con un algodón, aplica la pasta en el rostro y deja reposar por 15 minutos. Pasado este tiempo, retira con agua tibia. El limón ayuda a reducir las manchas, es un astringente maravilloso y regula el ph, pero se debe aplicar en la noche y se debe retirar con mucho cuidado, ya que su exposición al sol genera manchas en la piel. Si tu piel es muy sensible es mejor que evites ingredientes tan fuertes como este.</p>
            </div>
            
        </div>
        </>
    )
}

export default MascarillasNaturales