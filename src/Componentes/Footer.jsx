import React from 'react';
import '../Estilos/Footer.css';
import logoWhite from '../Imagenes/Logo Blanco.png';
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';


const fecha = new Date().getFullYear();


export const Footer = () => {
    return (
        <footer>
            <div className='footerContainer1 d-flex justify-content-evenly p-5'>
                <div className='modulosFooter mt-0'>
                    <img className='logoFooter' src={logoWhite} alt='Logo_white' />
                </div>
                <div className='modulosFooter'>
                    <h2>MultiserviciosTYR</h2>
                    <ul>
                        <li className='mt-0'><a target='_blank' rel='noreferrer' className='footerLink' href='https://multiserviciostyr.com/servicios-fumigacion/'>- Control de Plagas</a></li>
                        <li className='mt-2'><a target='_blank' rel='noreferrer' className='footerLink' href='https://multiserviciostyr.com/consultoria-en-administracion-de-empresas/'>- Servicios de consultoria</a></li>
                        <li className='mt-2'><a target='_blank' rel='noreferrer' className='footerLink' href='https://multiserviciostyr.com/arquitectura-y-diseno/'>- Diseño / Arquitectura</a></li>
                    </ul>
                </div>
                <div className='modulosFooter'>
                    <h2>Redes Sociales</h2>
                    <ul className='d-flex socialMediaList align-items-center w-100'>
                        <li>
                            <a className='footerLink' href='/'><BsInstagram /></a>
                        </li>
                        <li>
                            <a className='footerLink' href='/'><BsFacebook /></a>
                        </li>
                        <li>
                            <a className='footerLink' href='/'><FaTiktok /></a>
                        </li>
                    </ul>
                </div>
                <div className='modulosFooter'>
                    <h2>Donde nos ubicamos?</h2>
                    <p>Cartago, Costa Rica</p>
                </div>
            </div>
            <hr />
            <div className='footerFooter p-3  d-flex flex-column flex-lg-row justify-content-between align-items-center w-100 '>
                <h3>Copyright © {fecha}. Todos los derechos reservado.</h3>
                <p className='p-0 pt-2 pt-lg-0 m-0'>Powered by:<a className='mx-1 logoLorenzo' href='https://portafolio-lorenzo-jimenez.netlify.app/'>Lorenzo</a></p>
            </div>
        </footer>
    );
}