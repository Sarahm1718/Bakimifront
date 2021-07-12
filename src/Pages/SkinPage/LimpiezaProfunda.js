import Navbar from "../../components/Navbar/Navbar";
import "../SkinPage/Limpieza.css";
import Cream from "../../Images/cream.png"
import CreamSolar from "../../Images/crema-solar.png"




function LimpiezaProfunda(){
    return(
        <>
        <Navbar/>

        <div className="content">
                <div className="primary-buttons-limpieza">
                    <h2 className="tituloskin-limpieza">Limpieza Facial Profunda<img className="imag-crem" src={Cream}></img>
                   </h2>

                    </div>
                <div>
                <p className="texto-facial-1">La limpieza facial profunda es un tratamiento que busca mejorar la salud y el aspecto de la piel de tu rostro, este tratamiento es un procedimiento no invasivo, que generalmente es realizado por una profesional en cosmetología o estética. </p>
                
                </div>
        <div>
        <nav className="cards-limpieza">
                        <div className="card-limpieza">1. Desmaquillar</div>

                        <div className="card-limpieza">2. Lavar el rostro usando un jabon favorable a tu piel</div>
                    
                        <div className="card-limpieza">3. Vaporizar el rostro</div>
                    
                        <div className="card-limpieza">4. Exfoliar la piel</div>

                        <div className="card-limpieza">5. Retirar puntos negros</div>
                        
                        <div className="card-limpieza">6. Aplicar mascarilla anti astringente</div>

                        <div className="card-limpieza">7. Aplicar mascarilla de arcilla</div>
                    
                        <div className="card-limpieza">8. Aplicar tonico</div>

                        <div className="card-limpieza">9. Aplicar un serum</div>

                        <div className="card-limpieza">10. Aplicar contorno de ojos</div>

                        <div className="card-limpieza">11. Aplicar crema hidratante</div>

                        <div className="card-limpieza">12. Aplicar agua de rosas</div>

                        
                        <div className="card-limpieza">13. Aplicar bloqueador solar</div>

                </nav>

                <div className="video-youtube-cont">
                        <iframe className="video-youtube" width="560" height="315" src="https://www.youtube.com/embed/ddc9eqIi4jQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p className="texto-facial">Complementar tu limpieza diaria con una limpieza facial profesional hará que tu piel recobre luminosidad y sus músculos se tonifiquen, consiguiendo eliminar las células muertas que le dan ese aspecto opaco y apagado.</p>
                        </div>
        </div>
</div>
        </>
    )
}

export default LimpiezaProfunda