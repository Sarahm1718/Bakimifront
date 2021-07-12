import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Flecha from "../../Images/atras.png"
import "../../Pages/SkinPage/MascarillasNaturales.css"
import { Link } from "react-router-dom";
import Protector from "../../Images/protector.PNG"
import Bloqueador2 from "../../Images/bloqueador2.PNG"
import Bloqueador3 from "../../Images/bloqueador3.PNG"
import Bloqueador4 from "../../Images/bloqueador4.PNG"
import Bloqueador5 from "../../Images/bloqueador5.PNG"

function BloqueadorSolar (){
    return(
        <>
        <Navbar/>
        <div className="div-one">
            <Link to="/home">
            <img className="flecha" src={Flecha}></img>
            </Link>
            
            <h2 className="titulo-mascarillas">Bloqueador Solar</h2>
<br></br>
<p className="aviso">Al usar correctamente el protector solar se previene el envejecimiento cutáneo, es decir, aparición de manchas, pecas, efélides y líneas de expresión, además de evitar el cáncer de piel que está demostrado es inducido por la luz, ya sea solar o artificial.</p>
       <br></br>
        </div>
        <div className="contenedor-mascarillas">
            <div className="proceso-img">
            <img className="mascarillas-img-1" src={Protector}></img>
            <p className="reseña">Este protector solar facial de la efectiva Skinceuticals es, además de eficaz, todo un placer de utilizar: sienta a tu piel igual que una crema hidratante ligera normal, su formulación permite que se asiente muy bien debajo del maquillaje y deja un acabado glowy muy bonito. 

Es de amplio espectro, súper hidratante y el sello de la marca nos asegura que es uno de los mejores productos que podemos usar para esta función. Perfecta para uso diario.
</p>
            <button className="primary-buttons-masca"><a className="button-video-masca" target="_blank" href="https://www.lookfantastic.es/skinceuticals-ultra-facial-uv-defense-spf50-sunscreen-protection-30ml/11705736.html?affil=awin&utm_content=https%3A%2F%2Fsuperhonesta.com&utm_term=Editorial+Content&utm_source=AWin-552615&utm_medium=affiliate&utm_campaign=AffiliateWin&awc=10486_1626090087_146700d6a1a74202e0ac7ad4fe55ec46">Visitar</a></button>
            </div>
            <div className="proceso-img">
            <img className="mascarillas-img" src={Bloqueador2}></img>
            <p className="reseña">La crema Heliocare Advanced SPF 50 Cream está especialmente indicada para pieles altamente sensibles, y es habitualmente recomendada en consultas dermatológicas.

Con una textura muy ligera y agradable, combina filtros minerales con protectores fotobiológicos. También aporta antioxidantes para combatir los radicales libres y contribuye a la reparación de las células dañadas.</p>
            <button className="primary-buttons-masca"><a className="button-video-masca" target="_blank" href="https://www.mifarma.es/heliocare-crema-spf-50-50-gr?awc=12040_1626090138_3a0fafde5dbfb1f21cd6734fd6dcda54&utm_source=afiliado_awin&utm_medium=552615&utm_campaign=deeplink">Visitar</a></button>
            </div>
            <div className="proceso-img">
            <img className="mascarillas-img" src={Bloqueador3}></img>
            <p className="reseña">El Gel Cream Dry Touch de ISDIN es un todoterreno: apto las pieles más grasas y también las más secas, aporta un toque de color muy naturalsin llegar a ser una BB cream, que aporta más cobertura. 

Crea una película totalmente transparente sin ningún tipo de acabado ni tacto graso, algo que la convierte en la aliada perfecta si no eres muy fan de los productos pesados.</p>
            <button className="primary-buttons-masca"><a className="button-video-masca" target="_blank" href="https://www.mifarma.es/isdin-fotoprotector-gel-cream-dry-touch-color-50-ml?awc=12040_1626090173_2425306429825fecc67a54c3e98af824&utm_source=afiliado_awin&utm_medium=552615&utm_campaign=deeplink">Visitar</a></button>
            </div>
            <div className="proceso-img">
            <img className="mascarillas-img" src={Bloqueador4}></img>
            <p className="reseña">Repetimos con la marca Heliocare, y esta vez con una de mis protectores solares faciales favoritos: el Heliocare Gel Oil-Free con SPF +50.

Se trata de un producto que cumple a la perfección su cometido: protege de un gran número de radiaciones solares, más que un protector convencional, es de acabado mate y perfecto para utilizar debajo del maquillaje. </p>
            <button className="primary-buttons-masca"><a className="button-video-masca" target="_blank" href="https://www.mifarma.es/heliocare-360o-gel-oil-free-spf50-50ml?awc=12040_1626090204_6023525510bbbf6a736527204cabf1d8&utm_source=afiliado_awin&utm_medium=552615&utm_campaign=deeplink">Visitar</a></button>
            </div>
            <div className="proceso-img">
            <img className="mascarillas-img" src={Bloqueador5}></img>
            <p className="reseña">Este protector solar facial de Bioderma es muy agradable de utilizar. Es súper ligero, no engrasa ni tapona los poros, se absorbe rápido y deja un acabado mate que te permite ir reaplicándolo a lo largo del día. </p>
            <button className="primary-buttons-masca"><a className="button-video-masca" target="_blank" href="https://www.mifarma.es/bioderma-photoderm-max-50-crema-40ml?awc=12040_1626090236_5f6be652c07a94406b9c1845f4448803&utm_source=afiliado_awin&utm_medium=552615&utm_campaign=deeplink">Visitar</a></button>
            </div>
            <br></br>
<p className="avisoend">¿Qué buscamos en un buen protector solar facial?
En un buen protector solar facial buscamos que tenga protección de amplio espectro, si es SPF50 mejor, se absorba rápido, no te deje blanco como Casper (algo a veces difícil de conseguir cuando hablamos de filtros minerales), y no engrase la piel de la cara. En el caso de que tu piel tenga tendencia acneica, opta por un protector solar para piel grasa. Y por supuesto, que cubra tus necesidades: los hay en formato crema, gel e incluso polvo, que funcionan realmente bien para ir retocando a lo largo del día.</p>
       <br></br>
        </div>
        </>
    )
}

export default BloqueadorSolar