import React from 'react';
import '../Estilos/Hero.css';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import back1 from '../Imagenes/backHero.jpg';
import Logo from '../Imagenes/Logo.png';


export const Hero = () => {

    const choque = useMediaQuery('(min-width:500px)');

    const fondo = {
        backgroundImage: choque ? `url(${back1})` : `url(${back1})`,
    }

    return (
        <section style={fondo} className='heroContainer'>
            <div className='opacity p-5 px-0 p-sm-5'>
                <div className='titlesContainer h-100 d-flex flex-column justify-content-center align-items-center'>
                    <div className='w-100 d-flex justify-content-center align-items-center d-lg-none'>
                        <img className='imgLogo p-0 m-0' src={Logo} alt='logo' />
                    </div>
                    <div className='nombre-empresa'>
                        <h2>MultiserviciosTYR</h2>
                    </div>
                    <div className='divisionEmpresa d-flex justify-content-center'>
                        <h1>División Aseo y Limpieza</h1>
                    </div>
                    <div className='botonCotiza d-flex justify-content-center align-items-center d-lg-block'>
                        <button className='btnCotiza'><Link to={'/Servicios'}>Cotiza Ahora!</Link></button>
                    </div>
                </div>
            </div>
        </section>
    );
}