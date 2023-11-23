import React from 'react';
import img1 from '../Imagenes/Imagenes(Artes)/1.png';
import img2 from '../Imagenes/Imagenes(Artes)/2.png';
import img3 from '../Imagenes/Imagenes(Artes)/3.png';
import '../Estilos/Articulo1.css';


export const Articulo1 = () => {
    return (

        <section className='Art pb-5 pt-0 d-flex flex-column flex-lg-row justify-content-center align-items-center h-100'>
            <article className='textContainer d-flex flex-column justify-content-center align-items-center'>
                <div className='art1Container d-flex flex-column'>
                    <h2 className='artTitle'>Porque contratarnos?</h2>
                    <p className='artTitleP mt-0 m-auto'>Con nuestro compromiso, experiencia y atención al detalle, garantizamos:</p>
                    <ul className='artList'>
                        <li className='mt-0'>Limpieza impecable y profesional</li>
                        <li>Un entorno más saludable y agradable.</li>
                        <li>Productos de limpieza ecologicos.</li>
                        <li>Velocidad y Calidad en el trabajo.</li>
                    </ul>
                    <p className='artTitleP mt-0 m-auto'>Confía en nosotros para mantener tu hogar u oficina en su mejor estado.</p>
                </div>
            </article>
            <article className='photoContainer w-50 d-flex flex-column align-items-center mt-5 mt-lg-0'>
                <div className='d-flex justify-content-evenly align-items-center'>
                    <div><img className='photoArte' src={img1} alt='post' /></div>
                    <div><img className='photoArte' src={img2} alt='post' /></div>
                </div>
                <div><img className='photoArte3' src={img3} alt='post' /></div>
            </article>
        </section>

    )
}