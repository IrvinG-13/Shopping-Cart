import { useState } from "react";
import { Link } from "react-router-dom";

export default function Welcome(){

    const images = ["img1", "img2", "img3"]; //Es necesario el arreeglo para el carrusel
    const [index, setIndex] = useState(0);

    const handleNext = ()=>{
        setIndex((prev)=> (prev + 1)% images.length);//Evento de click del carrusel para avanzar
    }

    const handleBack =()=>{
        setIndex((prev) => (prev -1 + images.length) % images.length);//Evento de click del carrusel para retroceder
    }

    return(
        <div className="Content-Welcome">
            <header className={`welHeader ${images[index]}`}>

                <i onClick={handleBack}  id="back" class="bi bi-arrow-left"></i>
                <div className="text-welHeader">
                    <h1>Welcome!</h1>
                    <p className="typing">Bienvenido a nuestra tienda</p>
                    <Link to="/shop"><button style={{ fontFamily: 'Changa One', letterSpacing: '1px' }}><i class="bi bi-bag-fill"></i> Categories</button></Link>
                    
                    <div className="dots">
                        {images.map((_, i) => (
                        <p key={i} className={i === index ? "active-dot" : ""}>•</p>  /*recorre el arreglo y crea una 
                                                                                      etiqueta P por cada imagen, el key es requerido para react*/
                        ))}
                    </div>
                </div>
                <i onClick={handleNext} id="front" class="bi bi-arrow-right"></i>                
            </header>
        </div>
    )
}