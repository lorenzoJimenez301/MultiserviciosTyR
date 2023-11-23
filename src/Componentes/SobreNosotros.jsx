import React, { useState } from 'react';
import '../Estilos/SobreNosotros.css';
import { motion } from 'framer-motion';
import Logo from '../Imagenes/Logo.png';
import { BsArrowRight } from 'react-icons/bs';
import back1 from '../Imagenes/nosotrosBack1.jpg';
import back2 from '../Imagenes/nosotrosBack2.jpg';


export const About1 = () => {
    return (
        <article className='Articulo1 h-100 d-flex flex-column align-items-center justify-content-center'>
            <h2>Nuestra Empresa</h2>
            <img className='m-4 mx-0' src={Logo} alt='logo' />
            <p><strong>MultiserviciosTYR</strong> es una empresa especializada en <strong>servicios de limpieza a domicilio</strong>, que se ha consolidado como un referente en el sector gracias a su <strong>amplia experiencia y compromiso con la satisfacción de sus clientes. </strong></p>
            <p className='pt-4'><strong>Fundada con la visión de brindar soluciones integrales de limpieza para hogares y espacios residenciales</strong>, MultiserviciosTYR ha evolucionado para convertirse en una <strong>división líder en el campo de la limpieza en el mercado.</strong></p>
        </article>
    );
}
export const About2 = () => {
    return (
        <article className='Articulo2 h-100 d-flex flex-column align-items-center justify-content-evenly'>
            <h2>Misión</h2>
            <p>La misión de nuestra empresa de limpieza es proporcionar servicios de limpieza excepcionales y personalizados que mejoren la calidad de vida y la salud de nuestros clientes.</p>
            <h2>Visión</h2>
            <p>Nuestra visión es convertirnos en el líder indiscutible en el sector de la limpieza, reconocidos por nuestra excelencia en el servicio y nuestro compromiso con la satisfacción del cliente.</p>
            <h2>Valores</h2>
            <ul>
                <li>- Calidad</li>
                <li>- Profesionalismo</li>
                <li>- Compromiso con el cliente</li>
                <li>- Eficiencia</li>
                <li>- Sostenibilidad</li>
                <li>- Seguridad</li>
                <li>- Crecimiento y desarrollo personal</li>
                <li>- Responsabilidad social</li>
            </ul>
        </article>
    );
}

export const SobreNosotros = () => {

    const [isOn, setIsOn] = useState(false);

    if (isOn) {
        var display = <About2 />
        var flex = 'active';
        var giro = 'giro';
        var giroBtn = 'justify-content-start';
        var back = {
            backgroundImage: `url(${back2})`,
        }
    } else {
        display = <About1 />
        flex = '';
        giro = '';
        giroBtn = 'justify-content-end';
        back = {
            backgroundImage: `url(${back1})`,
        }
    }

    const spring = {
        type: 'spring',
        stiffness: 300,
        damping: 50,
    };




    return (
        <section style={back} className={`nosotros ${flex} `}>
            <motion.aside className='aside d-flex flex-column p-3' layout transition={spring}>
                {display}
                <div className={`h-auto d-flex flex-row align-items-center ${giroBtn}`}>
                    <BsArrowRight onClick={() => setIsOn(!isOn)} className={`btnChange mt-0 mb-0 mx-1 ${giro}`} />
                </div>
            </motion.aside>
        </section>
    );
}


